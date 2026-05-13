import { resolve } from "node:path";
import type { MachineIR } from "@typenode/core";

export async function loadMachineModule(file: string): Promise<MachineIR> {
  const abs = resolve(process.cwd(), file);
  const mod = (await import(abs)) as { default?: unknown; machine?: unknown };
  const candidate = mod.default ?? mod.machine;
  if (!candidate || typeof candidate !== "object") {
    throw new Error(
      `Module '${file}' must export a MachineIR as default or named 'machine'`,
    );
  }
  return candidate as MachineIR;
}
