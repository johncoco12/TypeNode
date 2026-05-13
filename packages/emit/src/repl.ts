import type { MachineIR, PeripheralIR, PropertyValue, RegistrationPoint } from "@typenode/core";

const INDENT = "    ";

export function emitRepl(machine: MachineIR): string {
  const blocks: string[] = [];

  for (const imp of machine.imports) {
    blocks.push(`using "${imp}"`);
  }
  if (machine.imports.length > 0) blocks.push("");

  for (const p of machine.peripherals) {
    blocks.push(emitPeripheral(p));
  }

  return blocks.join("\n").trimEnd() + "\n";
}

function emitPeripheral(p: PeripheralIR): string {
  const header = `${p.name}: ${p.type} ${emitRegistrations(p.registrations)}`;
  const lines: string[] = [header];

  for (const [key, value] of Object.entries(p.properties)) {
    lines.push(`${INDENT}${key}: ${emitValue(value)}`);
  }
  for (const conn of p.connections) {
    const prefix = conn.from === "" ? "" : `${conn.from} `;
    lines.push(`${INDENT}${prefix}-> ${conn.to}`);
  }
  lines.push("");
  return lines.join("\n");
}

function emitRegistrations(regs: RegistrationPoint[]): string {
  const parts = regs.map((r) => {
    let loc = "";
    if (r.address !== undefined && r.size !== undefined) {
      loc = ` <${hex(r.address)}, +${hex(r.size)}>`;
    } else if (r.address !== undefined) {
      loc = ` ${hex(r.address)}`;
    }
    const extra = r.extra ? ` ${r.extra}` : "";
    return `${r.parent}${loc}${extra}`;
  });
  if (parts.length === 1) {
    return `@ ${parts[0]}`;
  }
  return `@ { ${parts.join("; ")} }`;
}

function emitValue(v: PropertyValue): string {
  switch (v.kind) {
    case "number":
      return formatNumber(v.value);
    case "string":
      return `"${v.value.replace(/"/g, '\\"')}"`;
    case "boolean":
      return v.value ? "true" : "false";
    case "ref":
      return v.target;
    case "list":
      return `[ ${v.items.map(emitValue).join(", ")} ]`;
    case "verbatim":
      return v.value;
  }
}

function formatNumber(n: number): string {
  if (!Number.isInteger(n)) return String(n);
  if (n < 0) return String(n);
  // Heuristic: power-of-two-ish "round" values render as hex (sizes, masks).
  // Everything else stays decimal.
  if (n >= 0x100 && (n & (n - 1)) === 0) return hex(n);
  if (n >= 0x100 && (n & 0xff) === 0 && n.toString(16).match(/^[1-9a-f]0*$/i)) {
    return hex(n);
  }
  return String(n);
}

function hex(n: number): string {
  if (n < 16 && n >= 0) return String(n);
  return `0x${n.toString(16).toUpperCase()}`;
}
