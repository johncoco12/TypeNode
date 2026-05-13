export type Hex = number;

export type PropertyValue =
  | { kind: "number"; value: number }
  | { kind: "string"; value: string }
  | { kind: "boolean"; value: boolean }
  | { kind: "ref"; target: string }
  | { kind: "list"; items: PropertyValue[] }
  /** Emitted verbatim, no quoting. Use for Renode path references like `@path/to/file.py`. */
  | { kind: "verbatim"; value: string };

export interface RegistrationPoint {
  parent: string;
  address?: Hex;
  size?: number;
  extra?: string;
}

export interface PeripheralIR {
  name: string;
  type: string;
  registrations: RegistrationPoint[];
  properties: Record<string, PropertyValue>;
  connections: ConnectionIR[];
}

export interface ConnectionIR {
  from: string;
  to: string;
}

export interface MachineIR {
  name: string;
  peripherals: PeripheralIR[];
  imports: string[];
  scripts: ScriptIR;
}

export interface ScriptIR {
  preInit: string[];
  init: string[];
  postInit: string[];
  binaries: BinaryLoad[];
  start: boolean;
}

export interface BinaryLoad {
  path: string;
  format: "elf" | "binary" | "hex";
  address?: Hex;
  cpu?: string;
}
