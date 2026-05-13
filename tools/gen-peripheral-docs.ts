#!/usr/bin/env tsx
/**
 * gen-peripheral-docs.ts
 *
 * Walks `packages/peripherals/src/generated/` and writes
 * `packages/peripherals/PERIPHERALS.md` — an autodoc-style index of every
 * available peripheral type and its TypeScript options.
 *
 * Usage:
 *   npx tsx tools/gen-peripheral-docs.ts
 */

import { readFileSync, readdirSync, writeFileSync } from "node:fs";
import { resolve, join } from "node:path";

const ROOT = resolve(import.meta.dirname, "..");
const GEN_DIR = resolve(ROOT, "packages/peripherals/src/generated");
const OUT = resolve(ROOT, "packages/peripherals/PERIPHERALS.md");

interface EnumMap {
  [fullName: string]: string[];
}

interface VendorJson {
  RenodeRoot: string;
  ExtractedAt: string;
  Peripherals: Array<{
    FullName: string;
    ShortName: string;
    Constructors: Array<{
      Parameters: Array<{
        Name: string;
        Type: string;
        Optional: boolean;
        DefaultValue: string | null;
      }>;
    }>;
  }>;
  Enums?: EnumMap;
}

// ── Load source data from the vendor JSON ────────────────────────────────────

function findVendorJson(): string {
  const dir = resolve(ROOT, "vendor/peripherals");
  try {
    const files = readdirSync(dir)
      .filter((f) => f.endsWith(".json"))
      .sort((a, b) => {
        const parse = (s: string) =>
          s.replace(/\.json$/, "")
            .split(".")
            .map((n) => parseInt(n, 10) || 0);
        const av = parse(a);
        const bv = parse(b);
        for (let i = 0; i < Math.max(av.length, bv.length); i++) {
          const diff = (bv[i] ?? 0) - (av[i] ?? 0);
          if (diff !== 0) return diff;
        }
        return 0;
      });
    if (files.length > 0) return join(dir, files[0]!);
  } catch {
    // fall through
  }
  const fallback = resolve(ROOT, ".typenode/peripherals.json");
  return fallback;
}

// ── Helpers ──────────────────────────────────────────────────────────────────

function unwrapNullable(type: string): string {
  const m = type.match(/^System\.Nullable`1<(.+)>$/);
  return m ? m[1]! : type;
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

const INJECTED = new Set([
  "Antmicro.Renode.Core.IMachine",
  "Antmicro.Renode.Core.Machine",
  "Antmicro.Renode.Peripherals.Bus.IBusController",
  "Antmicro.Renode.Peripherals.Bus.SystemBus",
]);

const PERIPHERAL_REF_RE = /^Antmicro\.Renode\.Peripherals\./;

function tsType(rawType: string, enums: EnumMap): string {
  const t = unwrapNullable(rawType);
  if (INJECTED.has(t)) return "__injected__";
  if (PRIMITIVE_MAP[t]) return PRIMITIVE_MAP[t]!;
  if (enums[t]) return enums[t]!.map((m) => JSON.stringify(m)).join(" \\| ");
  if (PERIPHERAL_REF_RE.test(t)) return "string (peripheral ref)";
  return "string \\| number \\| boolean";
}

function lowerFirst(s: string): string {
  if (s.length === 0) return s;
  if (s.length >= 2 && s[0]! >= "A" && s[0]! <= "Z" && s[1]! >= "A" && s[1]! <= "Z") return s;
  return s[0]!.toLowerCase() + s.slice(1);
}

function pickLongestCtor(p: VendorJson["Peripherals"][number]) {
  return p.Constructors.slice().sort((a, b) => b.Parameters.length - a.Parameters.length)[0];
}

// ── Render ────────────────────────────────────────────────────────────────────

function render(data: VendorJson): string {
  const enums = data.Enums ?? {};
  const lines: string[] = [];

  lines.push("# TypeNode Peripheral Catalog");
  lines.push("");
  lines.push(`> Auto-generated from Renode at \`${data.RenodeRoot}\` on ${data.ExtractedAt.slice(0, 10)}.`);
  lines.push(`> ${data.Peripherals.length} peripheral types across ${countCategories(data)} categories.`);
  lines.push("");
  lines.push("---");
  lines.push("");

  // Table of contents
  lines.push("## Categories");
  lines.push("");
  const categories = groupByCategory(data.Peripherals);
  for (const [cat] of [...categories.entries()].sort()) {
    lines.push(`- [${cat}](#${cat.toLowerCase()})`);
  }
  lines.push("");
  lines.push("---");
  lines.push("");

  // Per-category sections
  for (const [cat, peripherals] of [...categories.entries()].sort()) {
    lines.push(`## ${cat}`);
    lines.push("");

    for (const p of peripherals.sort((a, b) => a.ShortName.localeCompare(b.ShortName))) {
      const name = p.ShortName.slice(p.ShortName.indexOf(".") + 1);
      const factoryCall = lowerFirst(name);
      lines.push(`### \`${p.ShortName}\``);
      lines.push("");
      lines.push(`Full name: \`${p.FullName}\``);
      lines.push("");
      lines.push(`\`\`\`ts`);
      lines.push(`import { Peripherals } from "@typenode/peripherals";`);
      lines.push(`Peripherals.${cat}.${factoryCall}({ $at: 0x..., ... })`);
      lines.push(`\`\`\``);
      lines.push("");

      const ctor = pickLongestCtor(p);
      const params = ctor
        ? ctor.Parameters.filter((param) => {
            const t = unwrapNullable(param.Type);
            return !INJECTED.has(t);
          })
        : [];

      if (params.length > 0) {
        lines.push("**Options** (constructor parameters):");
        lines.push("");
        lines.push("| Option | Type | Required |");
        lines.push("|--------|------|----------|");
        for (const param of params) {
          const t = unwrapNullable(param.Type);
          const nullable = param.Type !== t;
          const opt = param.Optional || nullable ? "optional" : "**required**";
          const tsT = tsType(t, enums);
          lines.push(`| \`${lowerFirst(param.Name)}\` | \`${tsT}\` | ${opt} |`);
        }
        lines.push("");
      }

      lines.push("---");
      lines.push("");
    }
  }

  return lines.join("\n");
}

function countCategories(data: VendorJson): number {
  return new Set(
    data.Peripherals.map((p) => {
      const dot = p.ShortName.indexOf(".");
      return dot < 0 ? "Misc" : p.ShortName.slice(0, dot);
    }),
  ).size;
}

function groupByCategory(
  peripherals: VendorJson["Peripherals"],
): Map<string, VendorJson["Peripherals"]> {
  const map = new Map<string, VendorJson["Peripherals"]>();
  for (const p of peripherals) {
    const dot = p.ShortName.indexOf(".");
    const cat = dot < 0 ? "Misc" : p.ShortName.slice(0, dot);
    const list = map.get(cat) ?? [];
    list.push(p);
    map.set(cat, list);
  }
  return map;
}

// ── Main ─────────────────────────────────────────────────────────────────────

const vendorPath = findVendorJson();
console.error(`[docs] reading ${vendorPath}`);
const data: VendorJson = JSON.parse(readFileSync(vendorPath, "utf8"));
const md = render(data);
writeFileSync(OUT, md);
console.error(`[docs] wrote ${OUT} (${(md.length / 1024).toFixed(1)} KB)`);
