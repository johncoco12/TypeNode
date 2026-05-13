/**
 * MonitorClient — thin async wrapper around Renode's Monitor TCP socket.
 *
 * Protocol notes
 * ──────────────
 * Renode opens a telnet-style TCP server when started with --port N.
 * In practice the protocol is plain text; the only telnet artefact is a small
 * IAC negotiation burst sent right after the connection.  We strip IAC bytes
 * before buffering received text.
 *
 * A "response" is complete when the buffer ends with the monitor prompt,
 * which always looks like  `(<something>) `  – an opening paren, non-empty
 * name, closing paren, and a trailing space.
 *
 * Usage
 * ──────
 *   const client = await MonitorClient.connect(1234);
 *   const reply  = await client.send("help");
 *   await client.close();
 */

import * as net from "node:net";

/** Maximum time (ms) to wait for Renode's initial prompt after connecting. */
const CONNECT_TIMEOUT_MS = 10_000;

/** Maximum time (ms) to wait for a response to a sent command. */
const COMMAND_TIMEOUT_MS = 30_000;

// Telnet IAC (0xFF) byte – everything from here to the next non-IAC-payload
// byte forms a control sequence we want to skip.
const IAC = 0xff;

/** Strip telnet IAC control sequences from a raw buffer. */
function stripTelnet(buf: Buffer): string {
  const out: number[] = [];
  let i = 0;
  while (i < buf.length) {
    const b = buf[i]!;
    if (b === IAC) {
      // IAC + cmd (2 bytes) or IAC + SB ... IAC SE (variable)
      const cmd = buf[i + 1];
      if (cmd === 0xfa) {
        // SB – skip until IAC SE
        i += 2;
        while (i < buf.length - 1 && !(buf[i] === IAC && buf[i + 1] === 0xf0)) {
          i++;
        }
        i += 2; // skip IAC SE
      } else {
        i += 3; // IAC + 2-byte option (DO/DONT/WILL/WONT)
      }
    } else {
      out.push(b);
      i++;
    }
  }
  return Buffer.from(out).toString("utf8");
}

/** Regex that matches a Monitor prompt at the tail of a string. */
const PROMPT_RE = /\([^\r\n)]+\) $/;

interface Waiter {
  resolve: (text: string) => void;
  reject: (err: Error) => void;
}

export class MonitorClient {
  private readonly socket: net.Socket;
  private buf = "";
  /** FIFO of pending send() calls. */
  private readonly queue: Waiter[] = [];

  private constructor(socket: net.Socket) {
    this.socket = socket;
    socket.on("data", (chunk: Buffer) => {
      this.buf += stripTelnet(chunk);
      this.drain();
    });
    socket.on("error", (err) => {
      // Reject any pending waiters when the socket dies.
      for (const w of this.queue.splice(0)) w.reject(err as Error);
    });
    socket.on("end", () => {
      // Remote side (Renode) closed the connection (e.g. after "quit").
      // Any pending send() calls will never receive a prompt – reject them.
      const err = new Error("Monitor connection closed by remote");
      for (const w of this.queue.splice(0)) w.reject(err);
    });
  }

  // ── Internal buffer processing ─────────────────────────────────────────────

  private drain(): void {
    while (this.queue.length > 0 && PROMPT_RE.test(this.buf)) {
      // Extract everything up to (but not including) the final prompt line.
      const match = this.buf.match(PROMPT_RE)!;
      const promptStart = this.buf.length - match[0].length;
      // Back-track past any leading \r\n before the prompt.
      let cutAt = promptStart;
      if (cutAt > 0 && this.buf[cutAt - 1] === "\n") cutAt--;
      if (cutAt > 0 && this.buf[cutAt - 1] === "\r") cutAt--;

      const response = this.buf.slice(0, cutAt).replace(/^\r?\n/, "").trimEnd();
      this.buf = ""; // clear; next command starts fresh

      const waiter = this.queue.shift()!;
      waiter.resolve(response);
    }
  }

  // ── Public API ─────────────────────────────────────────────────────────────

  /**
   * Connect to Renode's Monitor TCP socket and wait for the initial prompt.
   *
   * @param port  TCP port Renode is listening on (passed via --port N).
   * @param host  Hostname (default "127.0.0.1").
   */
  static connect(port: number, host = "127.0.0.1"): Promise<MonitorClient> {
    return new Promise((resolve, reject) => {
      const socket = new net.Socket();
      const client = new MonitorClient(socket);

      const timeout = setTimeout(() => {
        socket.destroy();
        reject(new Error(`Timed out waiting for Monitor prompt on ${host}:${port}`));
      }, CONNECT_TIMEOUT_MS);

      // Wait for the initial prompt before handing the client to the caller.
      client.queue.push({
        resolve: () => {
          clearTimeout(timeout);
          resolve(client);
        },
        reject: (err) => {
          clearTimeout(timeout);
          reject(err);
        },
      });

      socket.connect(port, host, () => {
        // Socket is open; drain() will fire when the initial prompt arrives.
      });
      socket.on("error", (err) => {
        clearTimeout(timeout);
        reject(err);
      });
    });
  }

  /**
   * Send a Monitor command and return the response text (excluding the prompt).
   * Commands are serialised — calls are queued and processed in order.
   */
  send(command: string): Promise<string> {
    return new Promise((resolve, reject) => {
      const timer = setTimeout(() => {
        const idx = this.queue.indexOf(waiter);
        if (idx >= 0) this.queue.splice(idx, 1);
        reject(new Error(`Monitor command timed out: ${command}`));
      }, COMMAND_TIMEOUT_MS);

      const waiter: Waiter = {
        resolve: (text) => { clearTimeout(timer); resolve(text); },
        reject: (err) => { clearTimeout(timer); reject(err); },
      };
      this.queue.push(waiter);
      this.socket.write(command + "\n");
    });
  }

  /** Close the underlying TCP socket. */
  close(): Promise<void> {
    return new Promise((resolve) => {
      this.socket.end(() => resolve());
    });
  }

  /** True when the socket is still open. */
  get connected(): boolean {
    return !this.socket.destroyed;
  }
}
