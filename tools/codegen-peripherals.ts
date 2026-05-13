#!/usr/bin/env tsx
import { mkdir, rm, writeFile } from "node:fs/promises";
import { existsSync, readFileSync, readdirSync } from "node:fs";
import { dirname, resolve } from "node:path";

interface ParameterInfo {
  Name: string;
  Type: string;
  Optional: boolean;
  DefaultValue: string | null;
}
interface ConstructorInfo {
  Parameters: ParameterInfo[];
}
interface PropertyInfo {
  Name: string;
  Type: string;
}
interface PeripheralInfo {
  FullName: string;
  ShortName: string;
  Constructors: ConstructorInfo[];
  Properties: PropertyInfo[];
}
interface ExtractOutput {
  RenodeRoot: string;
  ExtractedAt: string;
  Peripherals: PeripheralInfo[];
  /** enum full-name → ordered member names (may be absent in older extracts). */
  Enums?: Record<string, string[]>;
}

const ROOT = resolve(import.meta.dirname, "..");
const VENDOR_DIR = resolve(ROOT, "vendor/peripherals");
const FALLBACK_INPUT = resolve(ROOT, ".typenode/peripherals.json");
const OUT_DIR = resolve(ROOT, "packages/peripherals/src/generated");

/**
 * Resolve the best available peripherals.json:
 *   1. Path supplied via --input flag
 *   2. Latest versioned file in vendor/peripherals/  (e.g. 1.16.1.json)
 *   3. .typenode/peripherals.json  (locally regenerated)
 */
function resolveInput(): string {
  const flagIdx = process.argv.indexOf("--input");
  if (flagIdx >= 0) {
    const path = process.argv[flagIdx + 1];
    if (!path) throw new Error("--input requires a path argument");
    if (!existsSync(path)) throw new Error(`--input path not found: ${path}`);
    return path;
  }

  if (existsSync(VENDOR_DIR)) {
    // Collect *.json files, sort by semver descending, take the first.
    let files: string[] = [];
    try {
      files = readdirSync(VENDOR_DIR)
        .filter((f) => f.endsWith(".json"))
        .sort(compareSemverDesc);
    } catch {
      // ignore – fall through to fallback
    }
    if (files.length > 0) {
      const chosen = resolve(VENDOR_DIR, files[0]!);
      console.error(`[codegen] using vendor peripherals: ${chosen}`);
      return chosen;
    }
  }

  if (!existsSync(FALLBACK_INPUT)) {
    throw new Error(
      `peripherals.json not found. Run the renode-extract tool first:\n` +
        `  dotnet run --project tools/renode-extract -- /opt/renode .typenode/peripherals.json`,
    );
  }
  console.error(`[codegen] using local peripherals: ${FALLBACK_INPUT}`);
  return FALLBACK_INPUT;
}

function compareSemverDesc(a: string, b: string): number {
  const parse = (s: string) =>
    s.replace(/\.json$/, "").split(".").map((n) => parseInt(n, 10) || 0);
  const av = parse(a);
  const bv = parse(b);
  for (let i = 0; i < Math.max(av.length, bv.length); i++) {
    const diff = (bv[i] ?? 0) - (av[i] ?? 0);
    if (diff !== 0) return diff;
  }
  return 0;
}

const PRIMITIVE_MAP: Record<string, string> = {
  "System.String": "string",
  "System.Boolean": "boolean",
  "System.Byte": "number",
  "System.SByte": "number",
  "System.Int16": "number",
  "System.UInt16": "number",
  "System.Int32": "number",
  "System.UInt32": "number",
  "System.Int64": "number",
  "System.UInt64": "number",
  "System.Single": "number",
  "System.Double": "number",
};

// Renode injects these constructor parameters automatically when the
// peripheral is created via .repl, so we hide them from the TS API.
const INJECTED_PARAMS = new Set([
  "Antmicro.Renode.Core.IMachine",
  "Antmicro.Renode.Core.Machine",
  "Antmicro.Renode.Peripherals.Bus.IBusController",
  "Antmicro.Renode.Peripherals.Bus.SystemBus",
]);

// Parameter names referencing other peripherals → emitted as { ref: name }
const PERIPHERAL_REF_RE = /^Antmicro\.Renode\.Peripherals\./;

interface MappedParam {
  source: ParameterInfo;
  tsName: string;
  tsType: string;
  isRef: boolean;
  optional: boolean;
}

function unwrapNullable(type: string): { type: string; nullable: boolean } {
  const m = type.match(/^System\.Nullable`1<(.+)>$/);
  if (m) return { type: m[1]!, nullable: true };
  return { type, nullable: false };
}

function mapParameter(
  p: ParameterInfo,
  enums: Record<string, string[]>,
): MappedParam | null {
  const stripped = unwrapNullable(p.Type);
  const rawType = stripped.type;
  if (INJECTED_PARAMS.has(rawType)) return null;

  const tsName = lowerFirst(p.Name);
  const optional = p.Optional || stripped.nullable;

  if (PRIMITIVE_MAP[rawType]) {
    return { source: p, tsName, tsType: PRIMITIVE_MAP[rawType]!, isRef: false, optional };
  }
  if (enums[rawType]) {
    // Emit a string-literal union for enum types.
    const union = enums[rawType]!.map((m) => JSON.stringify(m)).join(" | ");
    return { source: p, tsName, tsType: union, isRef: false, optional };
  }
  if (PERIPHERAL_REF_RE.test(rawType)) {
    return { source: p, tsName, tsType: "string", isRef: true, optional };
  }
  // Unknown / complex types → fall back to string and document.
  return { source: p, tsName, tsType: "string | number | boolean", isRef: false, optional };
}

function lowerFirst(s: string): string {
  if (s.length === 0) return s;
  // Preserve acronyms: don't lowercase when the first two chars are both uppercase.
  if (s.length >= 2 && isUpper(s[0]!) && isUpper(s[1]!)) return s;
  return s[0]!.toLowerCase() + s.slice(1);
}

function isUpper(c: string): boolean {
  return c >= "A" && c <= "Z";
}

function pickConstructor(p: PeripheralInfo): ConstructorInfo | null {
  if (p.Constructors.length === 0) return null;
  // Prefer the longest constructor — exposes the most config.
  return p.Constructors.slice().sort(
    (a, b) => b.Parameters.length - a.Parameters.length,
  )[0]!;
}

function categoryAndName(shortName: string): { category: string; name: string } {
  const dot = shortName.indexOf(".");
  if (dot < 0) return { category: "Misc", name: shortName };
  return {
    category: shortName.substring(0, dot),
    name: shortName.substring(dot + 1),
  };
}

function safeIdent(s: string): string {
  return s.replace(/[^A-Za-z0-9_]/g, "_");
}

function factoryName(name: string): string {
  return safeIdent(lowerFirst(name));
}

function optionsTypeName(name: string): string {
  return safeIdent(name) + "Options";
}

function emitFactory(p: PeripheralInfo, enums: Record<string, string[]>): string {
  const ctor = pickConstructor(p);
  const ctorParams: MappedParam[] = ctor
    ? (ctor.Parameters.map((param) => mapParameter(param, enums)).filter(
        (x): x is MappedParam => x !== null,
      ))
    : [];
  const { name } = categoryAndName(p.ShortName);
  const fName = factoryName(name);
  const optsName = optionsTypeName(name);

  const fields: string[] = [
    "  /** Bus address where the peripheral is registered (omit for non-addressed peripherals like CPUs). */",
    "  $at?: number;",
    "  /** Optional size for range registrations: emits `<addr, +size>`. */",
    "  $size?: number;",
    "  /** Parent container (defaults to 'sysbus'). */",
    "  $parent?: string;",
  ];
  for (const p of ctorParams) {
    const opt = p.optional ? "?" : "";
    fields.push(`  ${p.tsName}${opt}: ${p.tsType};`);
  }
  fields.push("  /** Raw properties merged into the .repl block. */");
  fields.push("  extra?: Record<string, string | number | boolean | { ref: string }>;");
  fields.push("  /** Outgoing connections (e.g. { to: 'nvic@37' }). */");
  fields.push("  connections?: Array<{ from?: string; to: string }>;");

  const setProps: string[] = [];
  for (const p of ctorParams) {
    setProps.push(`  if (opts.${p.tsName} !== undefined) {`);
    if (p.isRef) {
      setProps.push(`    rawProperties[${JSON.stringify(p.source.Name)}] = { kind: "ref", target: opts.${p.tsName} };`);
    } else {
      setProps.push(`    rawProperties[${JSON.stringify(p.source.Name)}] = prop(opts.${p.tsName} as PropInput);`);
    }
    setProps.push(`  }`);
  }

  return `import type { PeripheralFactory, PropertyValue } from "@typenode/core";
import { peripheral, prop, type PropInput } from "../../helpers.ts";

export interface ${optsName} {
${fields.join("\n")}
}

// ${p.ShortName} — Renode type ${p.FullName}
export function ${fName}(opts: ${optsName}): PeripheralFactory {
  const rawProperties: Record<string, PropertyValue> = {};
${setProps.join("\n")}
  if (opts.extra) {
    for (const [k, v] of Object.entries(opts.extra)) {
      rawProperties[k] = prop(v as PropInput);
    }
  }
  return peripheral({
    type: ${JSON.stringify(p.ShortName)},
    registrations: [{
      parent: opts.$parent ?? "sysbus",
      ...(opts.$at !== undefined ? { address: opts.$at } : {}),
      ...(opts.$size !== undefined ? { size: opts.$size } : {}),
    }],
    rawProperties,
    connections: opts.connections?.map((c) => ({ from: c.from ?? "", to: c.to })) ?? [],
  });
}
`;
}

async function main(): Promise<void> {
  const input = resolveInput();
  const data: ExtractOutput = JSON.parse(readFileSync(input, "utf8"));
  const enums: Record<string, string[]> = data.Enums ?? {};
  await rm(OUT_DIR, { recursive: true, force: true });
  await mkdir(OUT_DIR, { recursive: true });

  const byCategory = new Map<string, PeripheralInfo[]>();
  for (const p of data.Peripherals) {
    const { category } = categoryAndName(p.ShortName);
    const list = byCategory.get(category) ?? [];
    list.push(p);
    byCategory.set(category, list);
  }

  const allExports: string[] = [];
  for (const [category, list] of [...byCategory.entries()].sort()) {
    const catDir = resolve(OUT_DIR, safeIdent(category).toLowerCase());
    await mkdir(catDir, { recursive: true });
    const catIndex: string[] = [];

    for (const p of list) {
      const { name } = categoryAndName(p.ShortName);
      const file = `${safeIdent(name).toLowerCase()}.ts`;
      await writeFile(resolve(catDir, file), emitFactory(p, enums));
      catIndex.push(`export { ${factoryName(name)}, type ${optionsTypeName(name)} } from "./${file.replace(/\.ts$/, ".ts")}";`);
    }

    await writeFile(resolve(catDir, "index.ts"), catIndex.join("\n") + "\n");
    allExports.push(`export * as ${safeIdent(category)} from "./${safeIdent(category).toLowerCase()}/index.ts";`);
  }

  await writeFile(resolve(OUT_DIR, "index.ts"), allExports.join("\n") + "\n");
  const enumCount = Object.keys(enums).length;
  console.error(
    `Generated ${data.Peripherals.length} peripherals` +
      (enumCount ? ` (${enumCount} enum types resolved)` : "") +
      ` into ${OUT_DIR}`,
  );
}

await main();
