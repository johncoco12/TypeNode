import { existsSync } from "node:fs";
import { join } from "node:path";

export interface RenodeLocation {
  binary: string;
  source: "env" | "path";
}

export function findRenode(): RenodeLocation {
  const env = process.env.TYPENODE_RENODE;
  if (env && existsSync(env)) return { binary: env, source: "env" };

  const fromPath = which("renode");
  if (fromPath) return { binary: fromPath, source: "path" };

  throw new Error(
    "Renode binary not found. Install Renode system-wide (https://renode.io) or set TYPENODE_RENODE=/path/to/renode.",
  );
}

function which(cmd: string): string | undefined {
  const path = process.env.PATH ?? "";
  for (const dir of path.split(":")) {
    const candidate = join(dir, cmd);
    if (existsSync(candidate)) return candidate;
  }
  return undefined;
}
