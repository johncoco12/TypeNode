# TypeNode

TypeScript wrapper for [Renode](https://github.com/antmicro/renode). You write your machine description and tests in TypeScript; TypeNode generates the `.repl`/`.resc` files and drives Renode.

```ts
import { defineMachine } from "@typenode/core";
import { Peripherals } from "@typenode/peripherals";

export default defineMachine({
  name: "stm32f4-hello",
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
```

```bash
typenode generate machine.ts   # writes .typenode/stm32f4-hello.{repl,resc}
typenode run      machine.ts   # generate + spawn Renode
```

---

## Setup

You need Node ≥ 22 and a system Renode install. .NET 8 is only needed if you want to re-extract peripherals from a different Renode version.

```bash
git clone <repo> && cd typenode
npm install
```

No build step — everything runs as TypeScript via `tsx`.

Set `TYPENODE_RENODE=/path/to/renode` if the binary isn't on your PATH.

---

## CLI

```bash
npx tsx packages/cli/src/index.ts generate <machine.ts> [--out <dir>]
npx tsx packages/cli/src/index.ts run      <machine.ts> [--out <dir>] [--headless]
```

Output goes to `.typenode/` by default. `--headless` passes `--plain --console --hide-log` to Renode and is what you want for CI.

Convenience scripts in `package.json`:

```bash
npm run example:generate
npm run example:run
npm run typecheck
```

---

## Live runtime

The `@typenode/runtime` package connects to Renode's Monitor TCP socket so you can drive emulation from TypeScript directly.

```ts
import { Machine } from "@typenode/runtime";

const machine = await Machine.create({ rescPath: ".typenode/stm32f4-hello.resc" });
const uart = await machine.uart("uart0");

await machine.start();
await uart.expect(/READY/, { timeout: 5_000 });

await uart.write("ping\n");
await uart.expect(/pong/);

await machine.quit();
```

`Machine.create` picks a free TCP port on its own, so parallel test runs don't step on each other. You can also call `machine.send(cmd)` to run arbitrary Monitor commands.

---

## Tests

`@typenode/vitest` gives you a `machine` fixture wired to Vitest's test lifecycle. A fresh Renode process boots per test and is killed on teardown, even if the test throws.

```ts
import { createTest, describe, expect } from "@typenode/vitest";

const test = createTest({ rescPath: ".typenode/stm32f4-hello.resc" });

describe("stm32f4-hello", () => {
  test("boots and prints READY", async ({ machine }) => {
    const uart = await machine.uart("uart0");
    await machine.start();
    await uart.expect(/READY/, { timeout: 5_000 });
  });
});
```

If you just want to snapshot-test the generated `.repl` without booting anything:

```ts
import { test, expect } from "vitest";
import { emitRepl } from "@typenode/emit";
import machine from "./machine.ts";

test("repl snapshot", () => {
  expect(emitRepl(machine)).toMatchSnapshot();
});
```

---

## Peripherals

749 Renode types reflected from the installed assemblies, grouped by category:

```ts
Peripherals.UART.STM32_UART({ ... })
Peripherals.CPU.cortexM({ ... })
Peripherals.Timers.STM32_Timer({ ... })
// etc.
```

Constructor parameters are typed. Enum-typed parameters come out as string-literal unions (`"LittleEndian" | "BigEndian"` and so on) rather than a plain `string`. Full list in [`packages/peripherals/PERIPHERALS.md`](packages/peripherals/PERIPHERALS.md).

Every factory also accepts a few `$`-prefixed keys that control registration, not construction — the `$` prefix means they can never collide with an actual Renode constructor parameter:

- `$at` — bus address
- `$size` — emits `<addr, +size>` instead of a plain address
- `$parent` — defaults to `"sysbus"`
- `connections` — IRQ wiring, e.g. `[{ to: "nvic@37" }]`
- `extra` — raw `.repl` properties as an escape hatch

### Regenerating for a new Renode version

```bash
cd tools/renode-extract && dotnet build -c Release -nologo && cd ../..

dotnet tools/renode-extract/bin/Release/net8.0/renode-extract.dll \
       /opt/renode .typenode/peripherals.json

npm run codegen:peripherals   # regenerate TS wrappers
npm run docs:peripherals      # regenerate PERIPHERALS.md
```

Copy the output to `vendor/peripherals/<version>.json` to commit it. The codegen picks the highest semver file in that directory automatically.

---

## Repo layout

```
packages/
  core/         IR types, defineMachine()
  peripherals/  generated peripheral catalog
  emit/         IR → .repl / .resc (pure functions, no I/O)
  cli/          generate + run commands
  runtime/      MonitorClient, Machine, UartHandle
  vitest/       test fixture + re-exports

tools/
  renode-extract/        .NET reflection → peripherals.json
  codegen-peripherals.ts peripherals.json → TS factories
  gen-peripheral-docs.ts peripherals.json → PERIPHERALS.md

vendor/peripherals/
  1.16.1.json   committed extract for Renode 1.16.1
```

---

## Known Issues

**Snap-packaged VSCode** injects `LD_LIBRARY_PATH` entries that break dotnet's ELF loader with a cryptic `GLIBC_PRIVATE` error. TypeNode scrubs `LD_LIBRARY_PATH`, `LD_PRELOAD`, and `SNAP_*` before spawning anything.

**`typenode run` without `--headless`** leaves Renode sitting at the Monitor prompt after the script finishes. Either use `--headless` or add `; quit` to the end of your `.resc`.
