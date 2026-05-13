/**
 * Machine — live handle to a running Renode instance.
 *
 * Lifecycle
 * ─────────
 *   const machine = await Machine.create({ rescPath: ".typenode/stm32f4-hello.resc" });
 *
 *   // At this point Renode is running and the Monitor TCP socket is open.
 *   // The .resc has been loaded but emulation is NOT yet started.
 *
 *   const uart = await machine.uart("uart0");   // attach file backend
 *   await machine.start();                       // emulation clock begins
 *
 *   const line = await uart.expect(/READY/, { timeout: 5_000 });
 *
 *   await machine.quit();                        // stop Renode, clean up
 *
 * Port allocation
 * ──────────────
 * The Monitor TCP port is auto-allocated (OS picks a free port) unless you
 * pass `port` explicitly.  This makes parallel test runs safe.
 *
 * Machine naming
 * ──────────────
 * Renode creates machines with sequential names ("machine-0", "machine-1", …).
 * `Machine.create()` loads the .resc which calls `mach create` internally, so
 * by the time we have a handle the machine is always "machine-0" unless the
 * .resc does something unusual.  We surface `machineName` for callers that
 * need to set the active machine explicitly.
 */

import { spawn, type ChildProcess } from "node:child_process";
import { existsSync } from "node:fs";
import { resolve } from "node:path";
import { randomBytes } from "node:crypto";
import { buildSpawnEnv } from "./spawn-env.ts";
import { findFreePort } from "./find-free-port.ts";
import { MonitorClient } from "./monitor-client.ts";
import { UartHandle } from "./uart.ts";

export interface MachineCreateOptions {
  /**
   * Absolute or relative path to the `.resc` file to load.
   * Use `@typenode/emit` + `@typenode/cli` to generate one, or pass your own.
   */
  rescPath: string;

  /**
   * Renode binary path.  Defaults to: $TYPENODE_RENODE env var → PATH search.
   */
  renode?: string;

  /**
   * TCP port for the Monitor socket.  Auto-allocated if omitted.
   */
  port?: number;

  /**
   * Milliseconds to wait for Renode to open the Monitor port (default 15 000).
   */
  startupTimeout?: number;
}

/** How long to poll for the Monitor port to become available. */
const PORT_POLL_INTERVAL_MS = 100;

export class Machine {
  /** Name Renode assigned to this machine (e.g. "machine-0"). */
  readonly machineName: string;
  /** TCP port the Monitor is listening on. */
  readonly port: number;
  /** Unique run identifier used for temp-file naming. */
  readonly runId: string;

  private readonly process: ChildProcess;
  private readonly monitor: MonitorClient;
  private readonly uartHandles = new Map<string, UartHandle>();

  private constructor(
    proc: ChildProcess,
    monitor: MonitorClient,
    machineName: string,
    port: number,
    runId: string,
  ) {
    this.process = proc;
    this.monitor = monitor;
    this.machineName = machineName;
    this.port = port;
    this.runId = runId;
  }

  // ── Factory ─────────────────────────────────────────────────────────────────

  static async create(opts: MachineCreateOptions): Promise<Machine> {
    const renode = opts.renode ?? findRenodeBinary();
    const port = opts.port ?? (await findFreePort());
    const startupTimeout = opts.startupTimeout ?? 15_000;
    const runId = randomBytes(4).toString("hex");

    const rescPath = resolve(process.cwd(), opts.rescPath);
    if (!existsSync(rescPath)) {
      throw new Error(`resc file not found: ${rescPath}`);
    }

    // Spawn Renode in headless mode with Monitor on the chosen TCP port.
    // --port N  = listen for Monitor commands on TCP port N (no window opened).
    // Do NOT pass --console: that routes the Monitor through stdin/stdout, and
    // since we set stdin to "ignore" Renode would get instant EOF and exit 0.
    const args = [
      "--plain",
      "--hide-log",
      "--port",
      String(port),
      "-e",
      `include @${rescPath}`,
    ];

    const child = spawn(renode, args, {
      stdio: ["ignore", "pipe", "pipe"],
      env: buildSpawnEnv(),
    });

    // Relay Renode's stderr to our stderr (prefixed) for visibility.
    child.stderr?.on("data", (chunk: Buffer) => {
      for (const line of chunk.toString().split("\n")) {
        if (line.trim()) process.stderr.write(`[renode] ${line}\n`);
      }
    });

    // Wait for the Monitor TCP socket to accept connections.
    const monitor = await waitForMonitor(port, startupTimeout, child);

    // Renode's .resc creates a machine – ask the Monitor what it's called.
    const machineName = await detectMachineName(monitor);

    return new Machine(child, monitor, machineName, port, runId);
  }

  // ── Lifecycle ────────────────────────────────────────────────────────────────

  /** Start the emulation clock. Equivalent to `start` in the Monitor. */
  async start(): Promise<void> {
    await this.monitor.send("start");
  }

  /** Pause the emulation clock. Equivalent to `pause` in the Monitor. */
  async pause(): Promise<void> {
    await this.monitor.send("pause");
  }

  /** Reset the machine to its initial state (preserves peripherals). */
  async reset(): Promise<void> {
    await this.monitor.send(`mach set "${this.machineName}"`);
    await this.monitor.send("machine Reset");
  }

  /**
   * Send an arbitrary Monitor command and return the text response.
   * Useful for one-off commands not covered by the typed API.
   */
  async send(command: string): Promise<string> {
    return this.monitor.send(command);
  }

  /**
   * Stop Renode, close the Monitor connection, and release all resources.
   * Safe to call multiple times.
   */
  async quit(): Promise<void> {
    for (const h of this.uartHandles.values()) h.dispose();
    this.uartHandles.clear();

    try {
      await this.monitor.send("quit");
    } catch {
      // If the socket already closed (process exited) that's fine.
    }
    await this.monitor.close();

    await new Promise<void>((resolve) => {
      if (this.process.exitCode !== null) { resolve(); return; }
      this.process.once("exit", () => resolve());
      // Force-kill if it hasn't exited within 3 s.
      const killer = setTimeout(() => this.process.kill("SIGKILL"), 3_000);
      this.process.once("exit", () => clearTimeout(killer));
    });
  }

  // ── Peripheral handles ───────────────────────────────────────────────────────

  /**
   * Attach a UART handle backed by a temp log file.
   * Call once per UART peripheral per machine instance.
   */
  async uart(name: string): Promise<UartHandle> {
    if (this.uartHandles.has(name)) return this.uartHandles.get(name)!;
    const handle = await UartHandle.attach(this.monitor, name, this.runId);
    this.uartHandles.set(name, handle);
    return handle;
  }
}

// ── Helpers ──────────────────────────────────────────────────────────────────

function findRenodeBinary(): string {
  const env = process.env.TYPENODE_RENODE;
  if (env && existsSync(env)) return env;
  const path = process.env.PATH ?? "";
  for (const dir of path.split(":")) {
    const candidate = `${dir}/renode`;
    if (existsSync(candidate)) return candidate;
  }
  throw new Error(
    "Renode binary not found. Install Renode or set TYPENODE_RENODE=/path/to/renode.",
  );
}

/** Poll until the Monitor TCP port accepts a connection, then return the client. */
async function waitForMonitor(
  port: number,
  timeoutMs: number,
  child: ChildProcess,
): Promise<MonitorClient> {
  const deadline = Date.now() + timeoutMs;
  let lastError: Error | undefined;

  while (Date.now() < deadline) {
    // Fail fast if the child exited prematurely.
    if (child.exitCode !== null) {
      throw new Error(`Renode exited (code ${child.exitCode}) before Monitor was ready`);
    }
    try {
      return await MonitorClient.connect(port);
    } catch (err) {
      lastError = err as Error;
      await sleep(PORT_POLL_INTERVAL_MS);
    }
  }
  child.kill();
  throw new Error(`Timed out waiting for Monitor on port ${port}: ${lastError?.message}`);
}

/** Ask the Monitor which machine names are registered; return the first. */
async function detectMachineName(monitor: MonitorClient): Promise<string> {
  try {
    const resp = await monitor.send("mach");
    // Output looks like:
    //   Current machine: machine-0
    //   Available machines:
    //    - machine-0
    const m = resp.match(/Current machine:\s*(\S+)/i) ?? resp.match(/-\s+(\S+)/);
    if (m) return m[1]!;
  } catch {
    // non-fatal – fall back to default
  }
  return "machine-0";
}

function sleep(ms: number): Promise<void> {
  return new Promise((r) => setTimeout(r, ms));
}
