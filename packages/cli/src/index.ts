#!/usr/bin/env -S npx tsx
import { runGenerate } from "./commands/generate.ts";
import { runRun } from "./commands/run.ts";

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
    default:
      usage(`unknown command: ${command}`);
  }
}

function usage(msg?: string): never {
  if (msg) console.error(`typenode: ${msg}`);
  console.error(`
Usage:
  typenode generate <machine.ts> [--out <dir>]   Emit .repl + .resc files
  typenode run      <machine.ts> [--out <dir>] [--headless]
                                                  Generate and launch Renode
`);
  process.exit(msg ? 1 : 0);
}

await main();
