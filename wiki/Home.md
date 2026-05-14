# TypeNode Wiki

TypeNode is a TypeScript wrapper for [Renode](https://github.com/antmicro/renode). You describe embedded machines and write hardware-in-the-loop tests entirely in TypeScript — TypeNode generates the `.repl`/`.resc` files and drives Renode for you.

## Pages

| Page | Description |
|------|-------------|
| [Getting Started](Getting-Started) | Install, configure, run your first machine |
| [Defining Machines](Defining-Machines) | `defineMachine()` API reference |
| [Peripherals](Peripherals) | Typed peripheral catalog and `$`-prefixed registration keys |
| [Python Peripherals](Python-Peripherals) | Custom peripherals written in Python (inline or external file) |
| [CLI](CLI) | `typenode generate` / `typenode run` reference |
| [Runtime API](Runtime-API) | `Machine`, `UartHandle`, raw Monitor commands |
| [Testing](Testing) | Vitest integration and snapshot testing |
| [Regenerating Peripherals](Regenerating-Peripherals) | Updating the peripheral catalog for a new Renode version |
| [Architecture](Architecture) | Repo layout and how the pipeline works |

## Quick example

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
typenode generate machine.ts   # emits .typenode/stm32f4-hello.{repl,resc}
typenode run      machine.ts   # generate + launch Renode
```
