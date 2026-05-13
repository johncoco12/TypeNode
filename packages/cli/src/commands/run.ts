import { spawn } from "node:child_process";
import { runGenerate } from "./generate.ts";
import { findRenode } from "../renode.ts";
import { buildSpawnEnv } from "../env.ts";

export interface RunOptions {
  file: string;
  outDir: string;
  headless: boolean;
  extraArgs: string[];
}

export async function runRun(opts: RunOptions): Promise<number> {
  const { rescPath } = await runGenerate({ file: opts.file, outDir: opts.outDir });
  const renode = findRenode();

  const args: string[] = [];
  if (opts.headless) args.push("--plain", "--console", "--hide-log");
  args.push("-e", `include @${rescPath}`);
  args.push(...opts.extraArgs);

  console.error(`[typenode] using renode (${renode.source}): ${renode.binary}`);
  console.error(`[typenode] resc: ${rescPath}`);

  return await new Promise<number>((res, rej) => {
    const child = spawn(renode.binary, args, { stdio: "inherit", env: buildSpawnEnv() });
    child.on("error", rej);
    child.on("exit", (code) => res(code ?? 0));
  });
}
