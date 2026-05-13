import { mkdir, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { emitRepl, emitResc } from "@typenode/emit";
import { loadMachineModule } from "../load.ts";

export interface GenerateOptions {
  file: string;
  outDir: string;
}

export interface GenerateResult {
  replPath: string;
  rescPath: string;
}

export async function runGenerate(opts: GenerateOptions): Promise<GenerateResult> {
  const machine = await loadMachineModule(opts.file);
  const outDir = resolve(process.cwd(), opts.outDir);
  await mkdir(outDir, { recursive: true });

  const replPath = resolve(outDir, `${machine.name}.repl`);
  const rescPath = resolve(outDir, `${machine.name}.resc`);

  await writeFile(replPath, emitRepl(machine));
  await writeFile(rescPath, emitResc(machine, { replPath }));

  return { replPath, rescPath };
}
