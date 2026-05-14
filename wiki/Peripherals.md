# Peripherals

The `@typenode/peripherals` package exposes a typed catalog of 749 Renode peripheral types, reflected directly from the Renode assemblies and grouped by category.

## Usage

```ts
import { Peripherals } from "@typenode/peripherals";

Peripherals.UART.STM32_UART({ ... })
Peripherals.CPU.cortexM({ ... })
Peripherals.Timers.STM32_Timer({ ... })
Peripherals.Memory.mappedMemory({ ... })
Peripherals.IRQControllers.NVIC({ ... })
```

Each factory function is fully typed. Constructor parameters map directly to Renode's C# constructor parameters — enum-typed params come out as string-literal unions instead of plain `string`.

## Registration keys (`$`-prefixed)

Every peripheral factory also accepts these special keys that control how the peripheral is registered in the `.repl`, not how it is constructed. The `$` prefix ensures they never collide with actual Renode constructor parameter names.

| Key | Type | Description |
|-----|------|-------------|
| `$at` | `number` | Bus address where the peripheral is registered |
| `$size` | `number` | Emits `<addr, +size>` range instead of a plain address |
| `$parent` | `string` | Parent container — defaults to `"sysbus"` |
| `connections` | `Array<{ from?: string; to: string }>` | IRQ wiring |
| `extra` | `Record<string, string \| number \| boolean \| { ref: string }>` | Raw `.repl` properties as an escape hatch |

### Examples

```ts
// Simple address registration
flash: Peripherals.Memory.mappedMemory({ $at: 0x08000000, size: 0x100000 })

// Range registration
uart0: Peripherals.UART.STM32_UART({ $at: 0x40011000, $size: 0x100, ... })

// IRQ connection
nvic: Peripherals.IRQControllers.NVIC({
  $at: 0xe000e000,
  connections: [{ from: "IRQ", to: "cpu@0" }],
})

// Reference to another peripheral
cpu: Peripherals.CPU.cortexM({ cpuType: "cortex-m4", nvic: "nvic" })

// Raw escape hatch
somePeripheral: Peripherals.Misc.something({
  extra: { customProp: "value", numericProp: 42 },
})
```

## Available categories

| Category | Example |
|----------|---------|
| `CPU` | `cortexM`, `riscV`, `arm` |
| `UART` | `STM32_UART`, `PL011` |
| `Memory` | `mappedMemory`, `flashMemory` |
| `IRQControllers` | `NVIC`, `GIC` |
| `Timers` | `STM32_Timer`, `SP804` |
| `GPIOPort` | `STM32_GPIOPort` |
| `I2C` | `STM32_I2C` |
| `SPI` | `STM32_SPI` |
| `Network` | `LAN9118` |
| `DMA` | `STM32_DMA` |
| `USB` | various |
| `Sensors` | various |
| … | 30+ more categories |

Full list in [PERIPHERALS.md](https://github.com/Johncoco12/TypeNode/blob/main/packages/peripherals/PERIPHERALS.md) in the repo.

For custom peripherals implemented in Python, see [Python Peripherals](Python-Peripherals).

## Peripheral references

When a Renode constructor parameter expects another peripheral (e.g. a UART that needs an IRQ controller), pass the string name of the peripheral as defined in your `peripherals` object:

```ts
peripherals: {
  nvic: Peripherals.IRQControllers.NVIC({ ... }),
  cpu:  Peripherals.CPU.cortexM({ nvic: "nvic" }),  // string ref
}
```

TypeNode emits this as a `.repl` reference rather than a literal value.
