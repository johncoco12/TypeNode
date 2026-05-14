# Getting Started

## Prerequisites

| Requirement | Version |
|-------------|---------|
| Node.js | ≥ 22 |
| Renode | any recent version (tested on 1.16.1) |
| .NET SDK | 8 — only needed to re-extract peripherals from a new Renode build |

## Installation

```bash
npm install @typenode/core @typenode/peripherals @typenode/cli @typenode/runtime
```

Or as a dev dependency if you only use TypeNode for tests:

```bash
npm install --save-dev @typenode/core @typenode/peripherals @typenode/cli @typenode/runtime @typenode/vitest
```

## Locating Renode

TypeNode needs to find the `renode` binary. It checks in order:

1. `TYPENODE_RENODE` environment variable
2. `PATH`

If Renode is not on your PATH, set the env var:

```bash
export TYPENODE_RENODE=/opt/renode/renode
```

Or in your shell profile / `.env`.

## Your first machine

Create `machine.ts`:

```ts
import { defineMachine } from "@typenode/core";
import { Peripherals } from "@typenode/peripherals";

export default defineMachine({
  name: "my-board",
  peripherals: {
    cpu:   Peripherals.CPU.cortexM({ cpuType: "cortex-m4", nvic: "nvic" }),
    nvic:  Peripherals.IRQControllers.NVIC({
      $at: 0xe000e000,
      priorityMask: 0xf0,
      systickFrequency: 72_000_000,
      connections: [{ from: "IRQ", to: "cpu@0" }],
    }),
    flash: Peripherals.Memory.mappedMemory({ $at: 0x08000000, size: 0x80000 }),
    sram:  Peripherals.Memory.mappedMemory({ $at: 0x20000000, size: 0x10000 }),
  },
});
```

Generate and launch:

```bash
npx typenode generate machine.ts   # writes .typenode/my-board.repl + .resc
npx typenode run      machine.ts   # generate + open Renode
```

Output files land in `.typenode/` by default. Pass `--out <dir>` to change this.

## Loading a firmware binary

```ts
export default defineMachine({
  name: "my-board",
  binaries: [{ path: "build/firmware.elf" }],
  peripherals: { /* ... */ },
});
```

The path is resolved relative to the machine file.

## Next steps

- [Defining Machines](Defining-Machines) — full `defineMachine()` reference
- [Peripherals](Peripherals) — browse the 700+ typed peripherals
- [Testing](Testing) — write hardware-in-the-loop tests with Vitest
