import * as net from "node:net";

/**
 * Ask the OS for an available TCP port by binding to port 0 and immediately
 * closing.  There is a small TOCTOU window between the close and the caller's
 * bind, but for localhost Renode processes it is negligible.
 */
export function findFreePort(): Promise<number> {
  return new Promise((resolve, reject) => {
    const server = net.createServer();
    server.listen(0, "127.0.0.1", () => {
      const addr = server.address() as net.AddressInfo;
      server.close((err) => {
        if (err) reject(err);
        else resolve(addr.port);
      });
    });
    server.on("error", reject);
  });
}
