import type {
  ConnectionIR,
  PeripheralFactory,
  PeripheralIR,
  PropertyValue,
  RegistrationPoint,
} from "@typenode/core";

export type PropInput = number | string | boolean | { ref: string } | PropInput[];

export function prop(v: PropInput): PropertyValue {
  if (Array.isArray(v)) return { kind: "list", items: v.map(prop) };
  if (typeof v === "number") return { kind: "number", value: v };
  if (typeof v === "string") return { kind: "string", value: v };
  if (typeof v === "boolean") return { kind: "boolean", value: v };
  return { kind: "ref", target: v.ref };
}

export interface PeripheralSpec {
  type: string;
  registrations: RegistrationPoint[];
  properties?: Record<string, PropInput>;
  /** Pre-computed property values, merged after `properties`. */
  rawProperties?: Record<string, PropertyValue>;
  connections?: ConnectionIR[];
}

export function peripheral(spec: PeripheralSpec): PeripheralFactory {
  return {
    build(name: string): PeripheralIR {
      const properties: Record<string, PropertyValue> = {};
      for (const [k, v] of Object.entries(spec.properties ?? {})) {
        properties[k] = prop(v);
      }
      for (const [k, v] of Object.entries(spec.rawProperties ?? {})) {
        properties[k] = v;
      }
      return {
        name,
        type: spec.type,
        registrations: spec.registrations,
        properties,
        connections: spec.connections ?? [],
      };
    },
  };
}
