/**
 * UartHandle — interact with a named UART peripheral via the Monitor.
 *
 * Output (device → host)
 * ──────────────────────
 * Renode's `CreateFileBackend` command routes all UART output bytes to a
 * temporary file.  UartHandle tails that file using `fs.watchFile` and
 * accumulates received bytes into an async-iterable byte stream.
 *
 * Input (host → device)
 * ──────────────────────
 * `write(data)` calls the Monitor command  `<name> WriteChar <byte>`  for
 * every byte in the supplied buffer.
 */

import { createReadStream, watchFile, unwatchFile } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { randomBytes } from "node:crypto";
import type { MonitorClient } from "./monitor-client.ts";

export interface ExpectOptions {
  /** Timeout in milliseconds (default 5 000). */
  timeout?: number;
}

export class UartHandle {
  /** Absolute path of the backing temp file. */
  readonly logPath: string;

  private readonly monitor: MonitorClient;
  private readonly peripheralName: string;

  /** Accumulated received text (UTF-8 decoded from the log file). */
  private received = "";

  /** Queue of expect() waiters waiting for a pattern match. */
  private readonly waiters: Array<{
    pattern: RegExp | string;
    resolve: (match: string) => void;
    reject: (err: Error) => void;
  }> = [];

  private watching = false;
  private fileOffset = 0;

  private constructor(monitor: MonitorClient, peripheralName: string, logPath: string) {
    this.monitor = monitor;
    this.peripheralName = peripheralName;
    this.logPath = logPath;
  }

  // ── Factory ─────────────────────────────────────────────────────────────────

  /**
   * Attach a file backend to `peripheralName` and start watching for output.
   * Must be called after Renode has loaded the platform (i.e. after `mach create`).
   */
  static async attach(
    monitor: MonitorClient,
    peripheralName: string,
    runId: string,
  ): Promise<UartHandle> {
    const logPath = join(
      tmpdir(),
      `typenode-${runId}-${peripheralName.replace(/[^a-z0-9]/gi, "_")}.log`,
    );
    // Tell Renode to write all UART output to the temp file.
    await monitor.send(`${peripheralName} CreateFileBackend @${logPath} true`);

    const handle = new UartHandle(monitor, peripheralName, logPath);
    handle.startWatching();
    return handle;
  }

  // ── Internal watching ────────────────────────────────────────────────────────

  private startWatching(): void {
    if (this.watching) return;
    this.watching = true;
    watchFile(this.logPath, { persistent: false, interval: 50 }, () => {
      this.readNewBytes();
    });
  }

  private readNewBytes(): void {
    const stream = createReadStream(this.logPath, { start: this.fileOffset });
    const chunks: Buffer[] = [];
    stream.on("data", (c: Buffer | string) => {
      chunks.push(typeof c === "string" ? Buffer.from(c) : c);
    });
    stream.on("end", () => {
      if (chunks.length === 0) return;
      const buf = Buffer.concat(chunks);
      this.fileOffset += buf.length;
      this.received += buf.toString("utf8");
      this.drainWaiters();
    });
  }

  private drainWaiters(): void {
    let i = 0;
    while (i < this.waiters.length) {
      const w = this.waiters[i]!;
      const { matched, text } = this.tryMatch(w.pattern);
      if (matched) {
        this.waiters.splice(i, 1);
        w.resolve(text);
      } else {
        i++;
      }
    }
  }

  private tryMatch(pattern: RegExp | string): { matched: boolean; text: string } {
    if (typeof pattern === "string") {
      const idx = this.received.indexOf(pattern);
      if (idx < 0) return { matched: false, text: "" };
      const text = this.received.slice(0, idx + pattern.length);
      this.received = this.received.slice(idx + pattern.length);
      return { matched: true, text };
    }
    const m = this.received.match(pattern);
    if (!m) return { matched: false, text: "" };
    const end = (m.index ?? 0) + m[0].length;
    const text = this.received.slice(0, end);
    this.received = this.received.slice(end);
    return { matched: true, text };
  }

  // ── Public API ───────────────────────────────────────────────────────────────

  /**
   * Wait until the accumulated output matches `pattern`.
   * Returns the matched text (everything up to and including the match).
   */
  expect(pattern: RegExp | string, opts: ExpectOptions = {}): Promise<string> {
    // Check if already satisfied.
    const immediate = this.tryMatch(pattern);
    if (immediate.matched) return Promise.resolve(immediate.text);

    return new Promise((resolve, reject) => {
      const timeout = opts.timeout ?? 5_000;
      const timer = setTimeout(() => {
        const idx = this.waiters.findIndex((w) => w.resolve === resolve);
        if (idx >= 0) this.waiters.splice(idx, 1);
        reject(new Error(`UART ${this.peripheralName}: timeout waiting for ${String(pattern)}`));
      }, timeout);

      this.waiters.push({
        pattern,
        resolve: (text) => { clearTimeout(timer); resolve(text); },
        reject: (err) => { clearTimeout(timer); reject(err); },
      });
    });
  }

  /**
   * Send bytes to the UART's receive buffer (host → device).
   * Each byte is delivered via the Monitor command `<name> WriteChar <byte>`.
   */
  async write(data: Uint8Array | string): Promise<void> {
    const buf = typeof data === "string" ? Buffer.from(data, "utf8") : data;
    for (const byte of buf) {
      await this.monitor.send(`${this.peripheralName} WriteChar ${byte}`);
    }
  }

  /** Async iterator that yields one line at a time from UART output. */
  async *lines(): AsyncGenerator<string> {
    let buf = "";
    while (true) {
      const chunk = await this.expect(/\n/);
      buf += chunk;
      const parts = buf.split("\n");
      buf = parts.pop()!;
      for (const line of parts) {
        yield line.replace(/\r$/, "");
      }
    }
  }

  /** Stop watching the log file. Called by Machine.quit(). */
  dispose(): void {
    if (this.watching) {
      unwatchFile(this.logPath);
      this.watching = false;
    }
    for (const w of this.waiters.splice(0)) {
      w.reject(new Error(`UartHandle disposed for ${this.peripheralName}`));
    }
  }
}
