import { mkdir, writeFile, readdir, access } from "node:fs/promises";
import { join } from "node:path";

export interface ScaffoldOptions {
  name: string;
  targetDir: string;
  version: string;
}

export interface ScaffoldResult {
  files: string[];
}

export async function scaffold(opts: ScaffoldOptions): Promise<ScaffoldResult> {
  const { name, targetDir, version } = opts;

  await mkdir(targetDir, { recursive: true });

  const existing = await readdir(targetDir).catch(() => [] as string[]);
  const conflicts = existing.filter((f) => GENERATED_FILES.includes(f));
  if (conflicts.length > 0) {
    throw new Error(
      `Directory already contains conflicting files: ${conflicts.join(", ")}\n` +
      `Remove them or choose a different directory.`,
    );
  }

  const files: Record<string, string> = {
    "machine.ts":       machineTs(name),
    "machine.test.ts":  machineTestTs(name),
    "vitest.config.ts": vitestConfig(),
    "tsconfig.json":    tsconfig(),
    ".gitignore":       gitignore(),
    "package.json":     packageJson(name, version),
  };

  for (const [file, content] of Object.entries(files)) {
    await writeFile(join(targetDir, file), content, "utf8");
  }

  return { files: Object.keys(files) };
}

const GENERATED_FILES = [
  "machine.ts", "machine.test.ts", "vitest.config.ts",
  "tsconfig.json", "package.json",
];

// ── Templates ────────────────────────────────────────────────────────────────

function machineTs(name: string): string {
  return `import { defineMachine } from "@typenode/core";
import { Peripherals } from "@typenode/peripherals";

export default defineMachine({
  name: "${name}",
  peripherals: {
    nvic: Peripherals.IRQControllers.NVIC({
      $at: 0xe000e000,
      priorityMask: 0xf0,
      systickFrequency: 168_000_000,
      connections: [{ from: "IRQ", to: "cpu@0" }],
    }),
    cpu:   Peripherals.CPU.cortexM({ cpuType: "cortex-m4", nvic: "nvic" }),
    flash: Peripherals.Memory.mappedMemory({ $at: 0x08000000, size: 0x100000 }),
    sram:  Peripherals.Memory.mappedMemory({ $at: 0x20000000, size: 0x20000 }),
    uart0: Peripherals.UART.STM32_UART({
      $at: 0x40011000, $size: 0x100,
      frequency: 168_000_000,
      connections: [{ to: "nvic@37" }],
    }),
  },
});
`;
}

function machineTestTs(name: string): string {
  return `import { test, expect } from "vitest";
import { emitRepl } from "@typenode/emit";
import machine from "./machine.ts";

// Snapshot test — verifies the generated .repl without booting Renode.
// Run \`vitest -u\` once to write the initial snapshot.
test("${name} repl snapshot", () => {
  expect(emitRepl(machine)).toMatchSnapshot();
});

// Uncomment to add hardware-in-the-loop tests (requires a running Renode):
//
// import { createTest, describe } from "@typenode/vitest";
//
// const test = createTest({ rescPath: ".typenode/${name}.resc" });
//
// describe("${name}", () => {
//   test("boots and prints READY", async ({ machine }) => {
//     const uart = await machine.uart("uart0");
//     await machine.start();
//     await uart.expect(/READY/, { timeout: 5_000 });
//   });
// });
`;
}

function vitestConfig(): string {
  return `import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    testTimeout: 30_000,
  },
});
`;
}

function tsconfig(): string {
  return `{
  "compilerOptions": {
    "target": "ES2022",
    "module": "NodeNext",
    "moduleResolution": "NodeNext",
    "strict": true,
    "allowImportingTsExtensions": true,
    "noEmit": true,
    "types": ["node"]
  }
}
`;
}

function gitignore(): string {
  return `node_modules/
.typenode/
*.log
`;
}

function packageJson(name: string, version: string): string {
  return (
    JSON.stringify(
      {
        name,
        version: "0.1.0",
        type: "module",
        scripts: {
          generate: "typenode generate machine.ts",
          run:      "typenode run machine.ts",
          test:     "vitest run",
          "test:watch": "vitest",
        },
        dependencies: {
          "@typenode/core":        `^${version}`,
          "@typenode/emit":        `^${version}`,
          "@typenode/peripherals": `^${version}`,
        },
        devDependencies: {
          "@typenode/cli":    `^${version}`,
          "@typenode/vitest": `^${version}`,
          typescript:        "^5.6.0",
          vitest:            "^2.0.0",
          tsx:               "^4.19.0",
        },
        engines: { node: ">=22.0.0" },
      },
      null,
      2,
    ) + "\n"
  );
}
