#!/usr/bin/env -S npx tsx
import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { spawnSync } from "node:child_process";
import { runGenerate } from "./commands/generate.ts";
import { runRun } from "./commands/run.ts";
import { runInit } from "./commands/init.ts";
import { findRenode } from "./renode.ts";

const LOGO = `
 _____ __   __ ____  _____  _   _  ___  ____  _____
|_   _|\\ \\ / /|  _ \\| ____|  \\ | |/ _ \\|  _ \\| ____|
  | |   \\ V / | |_) |  _|  |  \\| | | | | | | |  _|
  | |    | |  |  __/| |___ | |\\  | |_| | |_| | |___
  |_|    |_|  |_|   |_____||_| \\_|\\___/|____/|_____|
`;

const __dirname = dirname(fileURLToPath(import.meta.url));

function getTypenodeVersion(): string {
  try {
    const pkg = JSON.parse(readFileSync(join(__dirname, "../package.json"), "utf8"));
    return pkg.version ?? "unknown";
  } catch {
    return "unknown";
  }
}

function getRenodeInfo(): { version: string; path: string } | { error: string } {
  try {
    const { binary } = findRenode();
    const result = spawnSync(binary, ["--version"], { encoding: "utf8", timeout: 3000 });
    const raw = (result.stdout ?? "").trim().split("\n")[0] ?? "";
    const version = raw.replace(/^renode,?\s*/i, "").trim() || "unknown";
    return { version, path: binary };
  } catch (e: any) {
    return { error: e?.message ?? "not found" };
  }
}

function printInfo(): void {
  const tnVersion = getTypenodeVersion();
  const nodeVersion = process.version;
  const renode = getRenodeInfo();
  const renodeStr =
    "error" in renode
      ? `not found`
      : `${renode.version}  (${renode.path})`;
  console.error(`  typenode v${tnVersion}  •  node ${nodeVersion}  •  renode ${renodeStr}\n`);
}

interface ParsedArgs {
  command: string | undefined;
  positional: string[];
  flags: Record<string, string | boolean>;
}

function parse(argv: string[]): ParsedArgs {
  const [command, ...rest] = argv;
  const positional: string[] = [];
  const flags: Record<string, string | boolean> = {};
  for (let i = 0; i < rest.length; i++) {
    const a = rest[i]!;
    if (a.startsWith("--")) {
      const key = a.slice(2);
      const next = rest[i + 1];
      if (next && !next.startsWith("--")) {
        flags[key] = next;
        i++;
      } else {
        flags[key] = true;
      }
    } else {
      positional.push(a);
    }
  }
  return { command, positional, flags };
}

async function main(): Promise<void> {
  console.error(LOGO);
  printInfo();
  const { command, positional, flags } = parse(process.argv.slice(2));
  const file = positional[0];
  const outDir = (flags.out as string) ?? ".typenode";

  switch (command) {
    case "generate": {
      if (!file) usage("generate <machine.ts> [--out <dir>]");
      const { replPath, rescPath } = await runGenerate({ file: file!, outDir });
      console.log(replPath);
      console.log(rescPath);
      return;
    }
    case "run": {
      if (!file) usage("run <machine.ts> [--out <dir>] [--headless]");
      const code = await runRun({
        file: file!,
        outDir,
        headless: Boolean(flags.headless),
        extraArgs: [],
      });
      process.exit(code);
      return;
    }
    case undefined:
    case "help":
    case "--help":
      usage();
      return;
    case "init": {
      await runInit(positional[0]);
      return;
    }
    case "version":
    case "--version":
    case "-v":
      process.exit(0);
    default:
      usage(`unknown command: ${command}`);
  }
}

function usage(msg?: string): never {
  if (msg) console.error(`typenode: ${msg}`);
  console.error(`Usage:
  typenode init     [project-name]                Scaffold a new project
  typenode generate <machine.ts> [--out <dir>]   Emit .repl + .resc files
  typenode run      <machine.ts> [--out <dir>] [--headless]
                                                  Generate and launch Renode
`);

  process.exit(msg ? 1 : 0);
}

await main();
