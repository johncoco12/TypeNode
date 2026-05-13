import type { BinaryLoad, MachineIR, PeripheralIR } from "./ir.ts";

export interface PeripheralFactory {
  build(name: string): PeripheralIR;
}

export interface MachineConfig {
  name: string;
  peripherals: Record<string, PeripheralFactory>;
  imports?: string[];
  binaries?: BinaryLoad[];
  preInit?: string[];
  init?: string[];
  postInit?: string[];
  start?: boolean;
}

export function defineMachine(config: MachineConfig): MachineIR {
  const peripherals: PeripheralIR[] = Object.entries(config.peripherals).map(
    ([name, factory]) => factory.build(name),
  );

  validate({ name: config.name, peripherals });

  return {
    name: config.name,
    peripherals,
    imports: config.imports ?? [],
    scripts: {
      preInit: config.preInit ?? [],
      init: config.init ?? [],
      postInit: config.postInit ?? [],
      binaries: config.binaries ?? [],
      start: config.start ?? true,
    },
  };
}

function validate(m: { name: string; peripherals: PeripheralIR[] }): void {
  const names = new Set<string>();
  for (const p of m.peripherals) {
    if (names.has(p.name)) {
      throw new Error(`Duplicate peripheral name: ${p.name}`);
    }
    names.add(p.name);
  }
  for (const p of m.peripherals) {
    for (const reg of p.registrations) {
      if (reg.parent !== "sysbus" && !names.has(reg.parent)) {
        throw new Error(
          `Peripheral '${p.name}' registers under unknown parent '${reg.parent}'`,
        );
      }
    }
  }
}
