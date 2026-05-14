# Architecture

## Pipeline overview

```
machine.ts
    │
    │  import default export (MachineIR)
    ▼
@typenode/core          defineMachine() — validates + returns IR
    │
    │  MachineIR (plain object, no I/O)
    ▼
@typenode/emit          emitRepl() / emitResc() — pure functions
    │
    │  .repl + .resc strings
    ▼
@typenode/cli           writes files, spawns Renode
    │
    │  Renode Monitor TCP socket
    ▼
@typenode/runtime       Machine / UartHandle — live test control
    │
    ▼
@typenode/vitest        Vitest fixture wrapping runtime
```

## Package responsibilities

### `@typenode/core`

Defines the IR types (`MachineIR`, `PeripheralIR`, `PropertyValue`, etc.) and exports `defineMachine()`. No I/O — just data validation and construction.

### `@typenode/peripherals`

Auto-generated typed factory functions for 700+ Renode peripheral types, grouped by category under `Peripherals.*`. Generated from `vendor/peripherals/<version>.json` via `tools/codegen-peripherals.ts`. The `src/generated/` directory is gitignored and regenerated on demand.

### `@typenode/emit`

Pure functions that turn a `MachineIR` into `.repl` and `.resc` strings. No file I/O, no child processes — easy to unit-test.

### `@typenode/cli`

The `typenode` binary. Imports the user's machine file, calls `@typenode/emit`, writes the output files, and optionally spawns Renode. Handles environment sanitisation for snap-packaged editors.

### `@typenode/runtime`

Spawns Renode, connects to its Monitor TCP socket, and exposes a typed API (`Machine`, `UartHandle`) for controlling emulation from TypeScript.

### `@typenode/vitest`

Thin Vitest integration layer: exports a `createTest()` fixture factory that boots a `Machine` per test and tears it down afterwards.

## Repo layout

```
packages/
  core/           IR types, defineMachine()
  peripherals/    generated peripheral catalog + helpers
  emit/           IR → .repl / .resc (pure, no I/O)
  cli/            generate + run CLI commands
  runtime/        MonitorClient, Machine, UartHandle
  vitest/         Vitest fixture + re-exports

tools/
  renode-extract/          .NET tool: Renode assemblies → peripherals.json
  codegen-peripherals.ts   peripherals.json → @typenode/peripherals TS sources
  gen-peripheral-docs.ts   peripherals.json → PERIPHERALS.md

vendor/
  peripherals/
    1.16.1.json   committed peripheral extract for Renode 1.16.1

examples/
  stm32f4-hello/  example STM32F4 machine

wiki/             GitHub Wiki source (auto-published on merge to main)
```

## IR types

`MachineIR` is a plain serialisable object — no class instances, no functions:

```ts
interface MachineIR {
  name: string;
  peripherals: PeripheralIR[];
  imports: string[];
  scripts: {
    preInit: string[];
    init: string[];
    postInit: string[];
    binaries: BinaryLoad[];
    start: boolean;
  };
}
```

This makes it straightforward to inspect, serialise, or pass between processes.

## Environment sanitisation

Snap-packaged editors inject `LD_LIBRARY_PATH` and related variables that break Renode's startup (dlopen drags in an incompatible libc from the snap). `@typenode/runtime` and `@typenode/cli` both sanitise the environment before spawning any subprocess — stripping `LD_PRELOAD`, all `SNAP_*` keys, and `/snap/`-prefixed entries from path-like variables.
