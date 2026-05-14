# Defining Machines

Machines are defined with `defineMachine()` from `@typenode/core`. The function validates the config and returns an IR (intermediate representation) that the emitter and CLI consume.

## `MachineConfig`

```ts
import { defineMachine } from "@typenode/core";

export default defineMachine({
  name: "my-board",            // used as the Renode machine name + output file stem
  peripherals: { ... },        // required — see below
  imports?: string[],          // .repl files to include verbatim
  binaries?: BinaryLoad[],     // firmware ELF/BIN files to load
  preInit?: string[],          // Monitor commands run before `init`
  init?: string[],             // Monitor commands run at init time
  postInit?: string[],         // Monitor commands run after `init`
  start?: boolean,             // default true — whether to call `start` in the .resc
});
```

### `peripherals`

A plain object mapping peripheral names to factories from `@typenode/peripherals`.
Names must be unique. A peripheral can reference another by name in connection strings.

```ts
peripherals: {
  nvic: Peripherals.IRQControllers.NVIC({ ... }),
  cpu:  Peripherals.CPU.cortexM({ nvic: "nvic" }),  // "nvic" is the key above
}
```

### `binaries`

```ts
binaries: [
  { path: "build/firmware.elf" },
  { path: "build/data.bin", loadAddress: 0x08010000 },
]
```

Paths are resolved relative to the machine file at generate time.

### Monitor command hooks

Injected directly into the generated `.resc` at the corresponding lifecycle points:

```ts
preInit:  ["logLevel 3"],
init:     ["sysbus.uart0 RecordToAsciinema /tmp/uart.cast"],
postInit: ["machine EnableProfiler profiler.csv"],
```

### `start`

Set to `false` to generate a `.resc` that loads everything but does not call `start`. Useful when you want to attach a debugger or set breakpoints before the first instruction runs.

```ts
start: false,
```

## Validation

`defineMachine()` throws at call time (not at generate time) if:

- Two peripherals share the same name
- A peripheral's `$parent` references a name that isn't defined in `peripherals`

This means mistakes surface immediately in your editor / type-check, not later when Renode loads the file.

## Exporting

The machine file must `export default` the result of `defineMachine()`. The CLI imports the file dynamically and reads the default export.

```ts
// machine.ts
export default defineMachine({ ... });
```
