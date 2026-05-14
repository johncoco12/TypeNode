# Python Peripherals

Renode's `PythonPeripheral` lets you implement a peripheral entirely in Python — useful for custom sensors, mock devices, or anything not covered by the built-in catalog. TypeNode exposes this as `Peripherals.Python.pythonPeripheral()`.

## Options

```ts
Peripherals.Python.pythonPeripheral({
  $at:       number,           // bus address
  $size?:    number,           // range size (emits <addr, +size>)
  $parent?:  string,           // defaults to "sysbus"
  size:      number,           // memory-mapped size of the peripheral (bytes)
  initable?: boolean,          // whether Renode calls Init() on the peripheral
  script?:   string,           // inline Python script
  filename?: string,           // path to an external .py file
  connections?: Array<{ from?: string; to: string }>,
  extra?:    Record<string, string | number | boolean | { ref: string }>,
})
```

Provide either `script` (inline) or `filename` (external file) — not both.

---

## Inline script

Embed the Python directly in your machine description:

```ts
import { defineMachine } from "@typenode/core";
import { Peripherals } from "@typenode/peripherals";

export default defineMachine({
  name: "my-board",
  peripherals: {
    // ... cpu, flash, sram ...

    sensor: Peripherals.Python.pythonPeripheral({
      $at:  0x40010000,
      $size: 0x100,
      size:  0x100,
      script: `
if request.isRead:
    request.value = 0xAB
`,
    }),
  },
});
```

---

## External Python file

Keep the script in a separate `.py` file and reference it by path:

```ts
sensor: Peripherals.Python.pythonPeripheral({
  $at:      0x40010000,
  $size:    0x100,
  size:     0x100,
  filename: "peripherals/sensor.py",
}),
```

`sensor.py`:

```python
if request.isRead:
    if request.offset == 0x00:
        request.value = 0x42   # STATUS register
    elif request.offset == 0x04:
        request.value = 0x1234 # DATA register
elif request.isWrite:
    self.NoisyLog(f"Write to offset 0x{request.offset:02x}: 0x{request.value:x}")
```

Paths are passed through to Renode as-is — use absolute paths or paths relative to where you run `typenode`.

---

## Renode Python peripheral API

Inside the script, Renode provides these globals:

| Name | Description |
|------|-------------|
| `request.isRead` | `True` for read access |
| `request.isWrite` | `True` for write access |
| `request.offset` | Byte offset within the peripheral's address range |
| `request.value` | On read: set this to return a value. On write: the value being written |
| `request.type` | Access type (`ByteAccess`, `WordAccess`, `DoubleWordAccess`) |
| `self.NoisyLog(msg)` | Log at NOISY level |
| `self.Log(level, msg)` | Log at a specific level |

---

## With IRQ connections

Python peripherals can fire interrupts like any other peripheral:

```ts
irqDevice: Peripherals.Python.pythonPeripheral({
  $at:  0x40020000,
  $size: 0x10,
  size:  0x10,
  connections: [{ to: "nvic@5" }],
  script: `
if request.isWrite and request.offset == 0:
    self.IRQ.Set()
`,
}),
```

---

## `initable`

When `initable: true`, Renode calls the peripheral's `Init()` function at startup — useful for one-time setup logic:

```ts
sensor: Peripherals.Python.pythonPeripheral({
  $at:      0x40010000,
  size:     0x100,
  initable: true,
  script: `
def Init():
    self.state = 0

if request.isRead:
    request.value = self.state
`,
}),
```
