# TypeNode Peripheral Catalog

> Auto-generated from Renode at `/opt/renode` on 2026-05-13.
> 749 peripheral types across 38 categories.

---

## Categories

- [ATAPI](#atapi)
- [Analog](#analog)
- [Bus](#bus)
- [CAN](#can)
- [CPU](#cpu)
- [CRC](#crc)
- [Cache](#cache)
- [CoSimulated](#cosimulated)
- [DMA](#dma)
- [GPIOPort](#gpioport)
- [I2C](#i2c)
- [I3C](#i3c)
- [IRQControllers](#irqcontrollers)
- [Input](#input)
- [LIN](#lin)
- [MTD](#mtd)
- [Memory](#memory)
- [MemoryControllers](#memorycontrollers)
- [Misc](#misc)
- [Miscellaneous](#miscellaneous)
- [Mocks](#mocks)
- [Network](#network)
- [PCI](#pci)
- [Python](#python)
- [SCI](#sci)
- [SD](#sd)
- [SPI](#spi)
- [Sensors](#sensors)
- [Sound](#sound)
- [Storage](#storage)
- [SystemC](#systemc)
- [Timers](#timers)
- [UART](#uart)
- [USB](#usb)
- [USBDeprecated](#usbdeprecated)
- [Video](#video)
- [Wireless](#wireless)
- [X86](#x86)

---

## ATAPI

### `ATAPI.ATAPI`

Full name: `Antmicro.Renode.Peripherals.ATAPI.ATAPI`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.ATAPI.ATAPI({ $at: 0x..., ... })
```

---

### `ATAPI.CDROM`

Full name: `Antmicro.Renode.Peripherals.ATAPI.CDROM`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.ATAPI.CDROM({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `imageFile` | `string` | **required** |
| `persistent` | `boolean` | optional |
| `size` | `number` | optional |
| `blockSize` | `number` | optional |
| `compression` | `"None" \| "GZip"` | optional |

---

## Analog

### `Analog.AmbiqApollo4_ADC`

Full name: `Antmicro.Renode.Peripherals.Analog.AmbiqApollo4_ADC`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Analog.ambiqApollo4_ADC({ $at: 0x..., ... })
```

---

### `Analog.CAES_ADC`

Full name: `Antmicro.Renode.Peripherals.Analog.CAES_ADC`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Analog.CAES_ADC({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `frequency` | `number` | optional |

---

### `Analog.EOSS3_ADC`

Full name: `Antmicro.Renode.Peripherals.Analog.EOSS3_ADC`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Analog.EOSS3_ADC({ $at: 0x..., ... })
```

---

### `Analog.IMXRT_ADC`

Full name: `Antmicro.Renode.Peripherals.Analog.IMXRT_ADC`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Analog.IMXRT_ADC({ $at: 0x..., ... })
```

---

### `Analog.MAX32650_ADC`

Full name: `Antmicro.Renode.Peripherals.Analog.MAX32650_ADC`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Analog.MAX32650_ADC({ $at: 0x..., ... })
```

---

### `Analog.RenesasDA14_GPADC`

Full name: `Antmicro.Renode.Peripherals.Analog.RenesasDA14_GPADC`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Analog.renesasDA14_GPADC({ $at: 0x..., ... })
```

---

### `Analog.SAM4S_ADC`

Full name: `Antmicro.Renode.Peripherals.Analog.SAM4S_ADC`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Analog.SAM4S_ADC({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `baseFrequency` | `number` | optional |
| `referenceVoltage` | `string \| number \| boolean` | optional |

---

### `Analog.STM32_ADC`

Full name: `Antmicro.Renode.Peripherals.Analog.STM32_ADC`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Analog.STM32_ADC({ $at: 0x..., ... })
```

---

### `Analog.STM32F0_ADC`

Full name: `Antmicro.Renode.Peripherals.Analog.STM32F0_ADC`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Analog.STM32F0_ADC({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `referenceVoltage` | `number` | **required** |
| `externalEventFrequency` | `number` | **required** |
| `dmaChannel` | `number` | optional |
| `dmaPeripheral` | `string (peripheral ref)` | optional |

---

### `Analog.STM32F3_ADC`

Full name: `Antmicro.Renode.Peripherals.Analog.STM32F3_ADC`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Analog.STM32F3_ADC({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `referenceVoltage` | `number` | **required** |
| `externalEventFrequency` | `number` | **required** |
| `dmaChannel` | `number` | optional |
| `dmaPeripheral` | `string (peripheral ref)` | optional |

---

### `Analog.STM32G0_ADC`

Full name: `Antmicro.Renode.Peripherals.Analog.STM32G0_ADC`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Analog.STM32G0_ADC({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `referenceVoltage` | `number` | **required** |
| `externalEventFrequency` | `number` | **required** |
| `dmaChannel` | `number` | optional |
| `dmaPeripheral` | `string (peripheral ref)` | optional |

---

### `Analog.STM32WBA_ADC`

Full name: `Antmicro.Renode.Peripherals.Analog.STM32WBA_ADC`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Analog.STM32WBA_ADC({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `referenceVoltage` | `number` | **required** |
| `externalEventFrequency` | `number` | **required** |
| `dmaChannel` | `number` | optional |
| `dmaPeripheral` | `string (peripheral ref)` | optional |

---

### `Analog.Xilinx_XADC`

Full name: `Antmicro.Renode.Peripherals.Analog.Xilinx_XADC`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Analog.xilinx_XADC({ $at: 0x..., ... })
```

---

## Bus

### `Bus.ARM_NetworkInterconnect`

Full name: `Antmicro.Renode.Peripherals.Bus.ARM_NetworkInterconnect`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Bus.ARM_NetworkInterconnect({ $at: 0x..., ... })
```

---

### `Bus.GaislerAHBPlugAndPlayInfo`

Full name: `Antmicro.Renode.Peripherals.Bus.GaislerAHBPlugAndPlayInfo`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Bus.gaislerAHBPlugAndPlayInfo({ $at: 0x..., ... })
```

---

### `Bus.GaislerAPBController`

Full name: `Antmicro.Renode.Peripherals.Bus.GaislerAPBController`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Bus.gaislerAPBController({ $at: 0x..., ... })
```

---

### `Bus.Redirector`

Full name: `Antmicro.Renode.Peripherals.Bus.Redirector`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Bus.redirector({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `redirectedAddress` | `number` | **required** |

---

### `Bus.Silencer`

Full name: `Antmicro.Renode.Peripherals.Bus.Silencer`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Bus.silencer({ $at: 0x..., ... })
```

---

### `Bus.SystemBus`

Full name: `Antmicro.Renode.Peripherals.Bus.SystemBus`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Bus.systemBus({ $at: 0x..., ... })
```

---

### `Bus.WindowMMUBusController`

Full name: `Antmicro.Renode.Peripherals.Bus.WindowMMUBusController`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Bus.windowMMUBusController({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `emulationParent` | `string \| number \| boolean` | **required** |

---

### `Bus.Wrappers.BytePeripheralWrapper`

Full name: `Antmicro.Renode.Peripherals.Bus.Wrappers.BytePeripheralWrapper`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Bus.wrappers.BytePeripheralWrapper({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `read` | `string (peripheral ref)` | **required** |
| `write` | `string (peripheral ref)` | **required** |

---

### `Bus.Wrappers.DoubleWordPeripheralWrapper`

Full name: `Antmicro.Renode.Peripherals.Bus.Wrappers.DoubleWordPeripheralWrapper`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Bus.wrappers.DoubleWordPeripheralWrapper({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `read` | `string (peripheral ref)` | **required** |
| `write` | `string (peripheral ref)` | **required** |

---

### `Bus.Wrappers.QuadWordPeripheralWrapper`

Full name: `Antmicro.Renode.Peripherals.Bus.Wrappers.QuadWordPeripheralWrapper`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Bus.wrappers.QuadWordPeripheralWrapper({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `read` | `string (peripheral ref)` | **required** |
| `write` | `string (peripheral ref)` | **required** |

---

### `Bus.Wrappers.WordPeripheralWrapper`

Full name: `Antmicro.Renode.Peripherals.Bus.Wrappers.WordPeripheralWrapper`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Bus.wrappers.WordPeripheralWrapper({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `read` | `string (peripheral ref)` | **required** |
| `write` | `string (peripheral ref)` | **required** |

---

## CAN

### `CAN.CANToUART`

Full name: `Antmicro.Renode.Peripherals.CAN.CANToUART`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.CAN.CANToUART({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `rxFromCANId` | `number` | **required** |
| `txToCANId` | `number` | **required** |

---

### `CAN.LPC_CAN`

Full name: `Antmicro.Renode.Peripherals.CAN.LPC_CAN`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.CAN.LPC_CAN({ $at: 0x..., ... })
```

---

### `CAN.MCAN`

Full name: `Antmicro.Renode.Peripherals.CAN.MCAN`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.CAN.MCAN({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `messageRAM` | `string (peripheral ref)` | **required** |

---

### `CAN.MPFS_CAN`

Full name: `Antmicro.Renode.Peripherals.CAN.MPFS_CAN`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.CAN.MPFS_CAN({ $at: 0x..., ... })
```

---

### `CAN.S32K3XX_FlexCAN`

Full name: `Antmicro.Renode.Peripherals.CAN.S32K3XX_FlexCAN`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.CAN.s32K3XX_FlexCAN({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `numberOfMessageBuffers` | `number` | optional |
| `enhancedRxFifoSize` | `number` | optional |

---

### `CAN.SocketCANBridge`

Full name: `Antmicro.Renode.Peripherals.CAN.SocketCANBridge`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.CAN.socketCANBridge({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `canInterfaceName` | `string` | optional |
| `ensureFdFrames` | `boolean` | optional |
| `ensureXlFrames` | `boolean` | optional |

---

### `CAN.STMCAN`

Full name: `Antmicro.Renode.Peripherals.CAN.STMCAN`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.CAN.STMCAN({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `master` | `string (peripheral ref)` | optional |

---

### `CAN.UT32_CAN`

Full name: `Antmicro.Renode.Peripherals.CAN.UT32_CAN`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.CAN.UT32_CAN({ $at: 0x..., ... })
```

---

## CPU

### `CPU.ARMv7A`

Full name: `Antmicro.Renode.Peripherals.CPU.ARMv7A`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.CPU.ARMv7A({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `cpuType` | `string` | **required** |
| `cpuId` | `number` | optional |
| `genericInterruptController` | `string (peripheral ref)` | optional |
| `endianness` | `"LittleEndian" \| "BigEndian"` | optional |

---

### `CPU.ARMv7R`

Full name: `Antmicro.Renode.Peripherals.CPU.ARMv7R`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.CPU.ARMv7R({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `cpuType` | `string` | **required** |
| `cpuId` | `number` | optional |
| `genericInterruptController` | `string (peripheral ref)` | optional |
| `endianness` | `"LittleEndian" \| "BigEndian"` | optional |
| `numberOfMPURegions` | `number` | optional |
| `signalsUnit` | `string (peripheral ref)` | optional |

---

### `CPU.ARMv8A`

Full name: `Antmicro.Renode.Peripherals.CPU.ARMv8A`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.CPU.ARMv8A({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `cpuType` | `string` | **required** |
| `genericInterruptController` | `string (peripheral ref)` | **required** |
| `cpuId` | `number` | optional |
| `endianness` | `"LittleEndian" \| "BigEndian"` | optional |

---

### `CPU.ARMv8R`

Full name: `Antmicro.Renode.Peripherals.CPU.ARMv8R`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.CPU.ARMv8R({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `cpuType` | `string` | **required** |
| `genericInterruptController` | `string (peripheral ref)` | **required** |
| `cpuId` | `number` | optional |
| `endianness` | `"LittleEndian" \| "BigEndian"` | optional |
| `mpuRegionsCount` | `number` | optional |
| `defaultHVBARValue` | `number` | optional |
| `defaultVBARValue` | `number` | optional |
| `mpuHyperRegionsCount` | `number` | optional |

---

### `CPU.Cluster`

Full name: `Antmicro.Renode.Peripherals.CPU.Cluster`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.CPU.cluster({ $at: 0x..., ... })
```

---

### `CPU.CortexM`

Full name: `Antmicro.Renode.Peripherals.CPU.CortexM`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.CPU.cortexM({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `cpuType` | `string` | **required** |
| `nvic` | `string (peripheral ref)` | **required** |
| `cpuId` | `number` | optional |
| `endianness` | `"LittleEndian" \| "BigEndian"` | optional |
| `fpuInterruptNumber` | `number` | optional |
| `numberOfMPURegions` | `number` | optional |
| `enableTrustZone` | `boolean` | optional |
| `numberOfSAURegions` | `number` | optional |
| `numberOfIDAURegions` | `number` | optional |

---

### `CPU.CV32E40P`

Full name: `Antmicro.Renode.Peripherals.CPU.CV32E40P`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.CPU.CV32E40P({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `timeProvider` | `string (peripheral ref)` | optional |
| `hartId` | `number` | optional |
| `privilegedArchitecture` | `"Priv1_09" \| "Priv1_10" \| "Priv1_11" \| "Priv1_12" \| "PrivUnratified"` | optional |
| `endianness` | `"LittleEndian" \| "BigEndian"` | optional |
| `cpuType` | `string` | optional |

---

### `CPU.ExternalCPU`

Full name: `Antmicro.Renode.Peripherals.CPU.ExternalCPU`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.CPU.externalCPU({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `cpuType` | `string` | **required** |
| `endianness` | `"LittleEndian" \| "BigEndian"` | **required** |
| `bitness` | `"Bits32" \| "Bits64"` | optional |

---

### `CPU.IbexRiscV32`

Full name: `Antmicro.Renode.Peripherals.CPU.IbexRiscV32`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.CPU.ibexRiscV32({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `timeProvider` | `string (peripheral ref)` | optional |
| `hartId` | `number` | optional |
| `privilegedArchitecture` | `"Priv1_09" \| "Priv1_10" \| "Priv1_11" \| "Priv1_12" \| "PrivUnratified"` | optional |
| `endianness` | `"LittleEndian" \| "BigEndian"` | optional |
| `cpuType` | `string` | optional |
| `allowUnalignedAccesses` | `boolean` | optional |
| `nmiVectorAddress` | `number` | optional |
| `nmiVectorLength` | `number` | optional |

---

### `CPU.Minerva`

Full name: `Antmicro.Renode.Peripherals.CPU.Minerva`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.CPU.minerva({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `hartId` | `number` | optional |
| `timeProvider` | `string (peripheral ref)` | optional |

---

### `CPU.MSP430X`

Full name: `Antmicro.Renode.Peripherals.CPU.MSP430X`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.CPU.MSP430X({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `cpuType` | `string` | **required** |

---

### `CPU.OpenTitan_BigNumberAcceleratorCore`

Full name: `Antmicro.Renode.Peripherals.CPU.OpenTitan_BigNumberAcceleratorCore`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.CPU.openTitan_BigNumberAcceleratorCore({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `parent` | `string (peripheral ref)` | **required** |
| `instructionsMemory` | `string (peripheral ref)` | **required** |
| `dataMemory` | `string (peripheral ref)` | **required** |

---

### `CPU.PicoRV32`

Full name: `Antmicro.Renode.Peripherals.CPU.PicoRV32`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.CPU.picoRV32({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `cpuType` | `string` | **required** |
| `latchedIrqs` | `boolean` | optional |
| `hartId` | `number` | optional |
| `resetVectorAddress` | `number` | optional |

---

### `CPU.PowerPc`

Full name: `Antmicro.Renode.Peripherals.CPU.PowerPc`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.CPU.powerPc({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `cpuType` | `string` | **required** |
| `endianness` | `"LittleEndian" \| "BigEndian"` | optional |

---

### `CPU.PowerPc64`

Full name: `Antmicro.Renode.Peripherals.CPU.PowerPc64`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.CPU.powerPc64({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `cpuType` | `string` | optional |
| `endianness` | `"LittleEndian" \| "BigEndian"` | optional |

---

### `CPU.Ri5cy`

Full name: `Antmicro.Renode.Peripherals.CPU.Ri5cy`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.CPU.ri5cy({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `timeProvider` | `string (peripheral ref)` | optional |
| `hartId` | `number` | optional |
| `privilegedArchitecture` | `"Priv1_09" \| "Priv1_10" \| "Priv1_11" \| "Priv1_12" \| "PrivUnratified"` | optional |
| `endianness` | `"LittleEndian" \| "BigEndian"` | optional |
| `cpuType` | `string` | optional |

---

### `CPU.RiscV32`

Full name: `Antmicro.Renode.Peripherals.CPU.RiscV32`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.CPU.riscV32({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `cpuType` | `string` | **required** |
| `timeProvider` | `string (peripheral ref)` | optional |
| `hartId` | `number` | optional |
| `privilegedArchitecture` | `"Priv1_09" \| "Priv1_10" \| "Priv1_11" \| "Priv1_12" \| "PrivUnratified"` | optional |
| `endianness` | `"LittleEndian" \| "BigEndian"` | optional |
| `nmiVectorAddress` | `number` | optional |
| `nmiVectorLength` | `number` | optional |
| `allowUnalignedAccesses` | `boolean` | optional |
| `pmpNumberOfAddrBits` | `number` | optional |
| `interruptMode` | `"Auto" \| "Direct" \| "Vectored"` | optional |
| `privilegeLevels` | `"Machine" \| "MachineUser" \| "MachineSupervisorUser"` | optional |
| `useMachineAtomicState` | `boolean` | optional |

---

### `CPU.RiscV64`

Full name: `Antmicro.Renode.Peripherals.CPU.RiscV64`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.CPU.riscV64({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `cpuType` | `string` | **required** |
| `timeProvider` | `string (peripheral ref)` | optional |
| `hartId` | `number` | optional |
| `privilegedArchitecture` | `"Priv1_09" \| "Priv1_10" \| "Priv1_11" \| "Priv1_12" \| "PrivUnratified"` | optional |
| `endianness` | `"LittleEndian" \| "BigEndian"` | optional |
| `nmiVectorAddress` | `number` | optional |
| `nmiVectorLength` | `number` | optional |
| `allowUnalignedAccesses` | `boolean` | optional |
| `pmpNumberOfAddrBits` | `number` | optional |
| `interruptMode` | `"Auto" \| "Direct" \| "Vectored"` | optional |
| `privilegeLevels` | `"Machine" \| "MachineUser" \| "MachineSupervisorUser"` | optional |

---

### `CPU.Sparc`

Full name: `Antmicro.Renode.Peripherals.CPU.Sparc`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.CPU.sparc({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `cpuType` | `string` | **required** |
| `endianness` | `"LittleEndian" \| "BigEndian"` | optional |

---

### `CPU.VeeR_EL2`

Full name: `Antmicro.Renode.Peripherals.CPU.VeeR_EL2`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.CPU.veeR_EL2({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `timeProvider` | `string (peripheral ref)` | optional |
| `timerFrequency` | `number` | optional |
| `hartId` | `number` | optional |
| `privilegedArchitecture` | `"Priv1_09" \| "Priv1_10" \| "Priv1_11" \| "Priv1_12" \| "PrivUnratified"` | optional |
| `endianness` | `"LittleEndian" \| "BigEndian"` | optional |
| `cpuType` | `string` | optional |
| `privilegeLevels` | `"Machine" \| "MachineUser" \| "MachineSupervisorUser"` | optional |
| `allowUnalignedAccesses` | `boolean` | optional |

---

### `CPU.VeeR_EL2+InternalTimerBlock+InternalTimer`

Full name: `Antmicro.Renode.Peripherals.CPU.VeeR_EL2+InternalTimerBlock+InternalTimer`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.CPU.veeR_EL2+InternalTimerBlock+InternalTimer({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `owner` | `string (peripheral ref)` | **required** |
| `internalTimerBlock` | `string (peripheral ref)` | **required** |
| `isTimer1` | `boolean` | **required** |
| `timerFrequency` | `number` | **required** |
| `interrupt` | `number` | **required** |
| `counterCSR` | `number` | **required** |
| `boundCSR` | `number` | **required** |
| `controlCSR` | `number` | **required** |

---

### `CPU.VexRiscv`

Full name: `Antmicro.Renode.Peripherals.CPU.VexRiscv`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.CPU.vexRiscv({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `hartId` | `number` | optional |
| `timeProvider` | `string (peripheral ref)` | optional |
| `privilegedArchitecture` | `"Priv1_09" \| "Priv1_10" \| "Priv1_11" \| "Priv1_12" \| "PrivUnratified"` | optional |
| `cpuType` | `string` | optional |
| `builtInIrqController` | `boolean` | optional |

---

### `CPU.X86`

Full name: `Antmicro.Renode.Peripherals.CPU.X86`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.CPU.x86({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `cpuType` | `string` | **required** |
| `lapic` | `string (peripheral ref)` | **required** |

---

### `CPU.X86_64`

Full name: `Antmicro.Renode.Peripherals.CPU.X86_64`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.CPU.x86_64({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `cpuType` | `string` | **required** |
| `lapic` | `string (peripheral ref)` | **required** |

---

### `CPU.X86_64KVM`

Full name: `Antmicro.Renode.Peripherals.CPU.X86_64KVM`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.CPU.x86_64KVM({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `cpuType` | `string` | **required** |
| `cpuId` | `number` | optional |

---

### `CPU.X86KVM`

Full name: `Antmicro.Renode.Peripherals.CPU.X86KVM`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.CPU.x86KVM({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `cpuType` | `string` | **required** |
| `cpuId` | `number` | optional |
| `on64BitDetected` | `"Fault" \| "Warn" \| "Ignore"` | optional |

---

### `CPU.Xtensa`

Full name: `Antmicro.Renode.Peripherals.CPU.Xtensa`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.CPU.xtensa({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `cpuType` | `string` | **required** |
| `cpuId` | `number` | optional |
| `frequency` | `number` | optional |

---

## CRC

### `CRC.SAM4S_CRCCU`

Full name: `Antmicro.Renode.Peripherals.CRC.SAM4S_CRCCU`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.CRC.SAM4S_CRCCU({ $at: 0x..., ... })
```

---

### `CRC.STM32_CRC`

Full name: `Antmicro.Renode.Peripherals.CRC.STM32_CRC`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.CRC.STM32_CRC({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `series` | `"F0" \| "F4" \| "WBA"` | **required** |
| `configurablePoly` | `boolean` | optional |

---

## Cache

### `Cache.PL310`

Full name: `Antmicro.Renode.Peripherals.Cache.PL310`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Cache.PL310({ $at: 0x..., ... })
```

---

## CoSimulated

### `CoSimulated.CoSimulatedCFU`

Full name: `Antmicro.Renode.Peripherals.CoSimulated.CoSimulatedCFU`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.CoSimulated.coSimulatedCFU({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `frequency` | `number` | optional |
| `limitBuffer` | `number` | optional |
| `timeout` | `number` | optional |
| `exitTimeout` | `number` | optional |

---

### `CoSimulated.CoSimulatedPeripheral`

Full name: `Antmicro.Renode.Peripherals.CoSimulated.CoSimulatedPeripheral`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.CoSimulated.coSimulatedPeripheral({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `maxWidth` | `number` | optional |
| `useAbsoluteAddress` | `boolean` | optional |
| `frequency` | `number` | optional |
| `limitBuffer` | `number` | optional |
| `timeout` | `number` | optional |
| `exitTimeout` | `number` | optional |
| `address` | `string` | optional |
| `mainListenPort` | `number` | optional |
| `asyncListenPort` | `number` | optional |
| `createConnection` | `boolean` | optional |
| `renodeToCosimSignalsOffset` | `number` | optional |
| `cosimToRenodeSignalRange` | `string \| number \| boolean` | optional |
| `renodeToCosimIndex` | `number` | optional |
| `cosimToRenodeIndex` | `number` | optional |
| `stdoutFile` | `string` | optional |
| `stderrFile` | `string` | optional |
| `renodeLogLevel` | `string` | optional |

---

### `CoSimulated.CoSimulatedRiscV32`

Full name: `Antmicro.Renode.Peripherals.CoSimulated.CoSimulatedRiscV32`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.CoSimulated.coSimulatedRiscV32({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `cpuType` | `string` | **required** |
| `endianness` | `"LittleEndian" \| "BigEndian"` | optional |
| `bitness` | `"Bits32" \| "Bits64"` | optional |
| `address` | `string` | optional |

---

### `CoSimulated.CoSimulatedUART`

Full name: `Antmicro.Renode.Peripherals.CoSimulated.CoSimulatedUART`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.CoSimulated.coSimulatedUART({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `maxWidth` | `number` | optional |
| `useAbsoluteAddress` | `boolean` | optional |
| `frequency` | `number` | optional |
| `limitBuffer` | `number` | optional |
| `timeout` | `number` | optional |
| `exitTimeout` | `number` | optional |
| `address` | `string` | optional |
| `mainListenPort` | `number` | optional |
| `asyncListenPort` | `number` | optional |
| `createConnection` | `boolean` | optional |
| `renodeToCosimSignalsOffset` | `number` | optional |
| `cosimToRenodeSignalRange` | `string \| number \| boolean` | optional |

---

## DMA

### `DMA.EFR32MG12_LDMA`

Full name: `Antmicro.Renode.Peripherals.DMA.EFR32MG12_LDMA`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.DMA.EFR32MG12_LDMA({ $at: 0x..., ... })
```

---

### `DMA.EFR32MG24_LDMA`

Full name: `Antmicro.Renode.Peripherals.DMA.EFR32MG24_LDMA`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.DMA.EFR32MG24_LDMA({ $at: 0x..., ... })
```

---

### `DMA.EFR32xG22_LDMA`

Full name: `Antmicro.Renode.Peripherals.DMA.EFR32xG22_LDMA`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.DMA.EFR32xG22_LDMA({ $at: 0x..., ... })
```

---

### `DMA.EOSS3_SPI_DMA`

Full name: `Antmicro.Renode.Peripherals.DMA.EOSS3_SPI_DMA`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.DMA.EOSS3_SPI_DMA({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `spi` | `string (peripheral ref)` | **required** |

---

### `DMA.EOSS3_SystemDMABridge`

Full name: `Antmicro.Renode.Peripherals.DMA.EOSS3_SystemDMABridge`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.DMA.EOSS3_SystemDMABridge({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `systemDma` | `string (peripheral ref)` | **required** |

---

### `DMA.IMXRT700_DmaMux`

Full name: `Antmicro.Renode.Peripherals.DMA.IMXRT700_DmaMux`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.DMA.IMXRT700_DmaMux({ $at: 0x..., ... })
```

---

### `DMA.IMXRT700_DmaMux+DmaMux`

Full name: `Antmicro.Renode.Peripherals.DMA.IMXRT700_DmaMux+DmaMux`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.DMA.IMXRT700_DmaMux+DmaMux({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `index` | `number` | **required** |

---

### `DMA.MPFS_PDMA`

Full name: `Antmicro.Renode.Peripherals.DMA.MPFS_PDMA`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.DMA.MPFS_PDMA({ $at: 0x..., ... })
```

---

### `DMA.MPFS_PDMA+Channel`

Full name: `Antmicro.Renode.Peripherals.DMA.MPFS_PDMA+Channel`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.DMA.MPFS_PDMA+Channel({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `parent` | `string (peripheral ref)` | **required** |
| `number` | `number` | **required** |

---

### `DMA.NPCX_MDMA`

Full name: `Antmicro.Renode.Peripherals.DMA.NPCX_MDMA`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.DMA.NPCX_MDMA({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `sourceAddress` | `number` | **required** |
| `destinationAddress` | `number` | **required** |

---

### `DMA.NXP_eDMA`

Full name: `Antmicro.Renode.Peripherals.DMA.NXP_eDMA`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.DMA.NXP_eDMA({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `numberOfChannels` | `number` | **required** |

---

### `DMA.NXP_eDMA_Channels`

Full name: `Antmicro.Renode.Peripherals.DMA.NXP_eDMA_Channels`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.DMA.NXP_eDMA_Channels({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `dma` | `string (peripheral ref)` | **required** |
| `count` | `number` | **required** |
| `firstChannel` | `number` | optional |
| `channelSize` | `number` | optional |
| `hasMuxingRegisters` | `boolean` | optional |

---

### `DMA.OmapDma`

Full name: `Antmicro.Renode.Peripherals.DMA.OmapDma`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.DMA.omapDma({ $at: 0x..., ... })
```

---

### `DMA.PL330_DMA`

Full name: `Antmicro.Renode.Peripherals.DMA.PL330_DMA`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.DMA.PL330_DMA({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `numberOfSupportedEventsAndInterrupts` | `number` | optional |
| `numberOfSupportedPeripheralRequestInterfaces` | `number` | optional |
| `revision` | `number` | optional |

---

### `DMA.RenesasDA14_DMA`

Full name: `Antmicro.Renode.Peripherals.DMA.RenesasDA14_DMA`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.DMA.renesasDA14_DMA({ $at: 0x..., ... })
```

---

### `DMA.RenesasRZG_DMAC`

Full name: `Antmicro.Renode.Peripherals.DMA.RenesasRZG_DMAC`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.DMA.renesasRZG_DMAC({ $at: 0x..., ... })
```

---

### `DMA.S32K3XX_DMAMUX`

Full name: `Antmicro.Renode.Peripherals.DMA.S32K3XX_DMAMUX`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.DMA.s32K3XX_DMAMUX({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `numberOfSlots` | `number` | optional |
| `numberOfChannels` | `number` | optional |
| `numberOfChannelsWithEnable` | `number` | optional |

---

### `DMA.STM32DMA`

Full name: `Antmicro.Renode.Peripherals.DMA.STM32DMA`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.DMA.STM32DMA({ $at: 0x..., ... })
```

---

### `DMA.STM32DMA2D`

Full name: `Antmicro.Renode.Peripherals.DMA.STM32DMA2D`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.DMA.STM32DMA2D({ $at: 0x..., ... })
```

---

### `DMA.STM32G0DMA`

Full name: `Antmicro.Renode.Peripherals.DMA.STM32G0DMA`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.DMA.STM32G0DMA({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `numberOfChannels` | `number` | **required** |

---

### `DMA.STM32LDMA`

Full name: `Antmicro.Renode.Peripherals.DMA.STM32LDMA`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.DMA.STM32LDMA({ $at: 0x..., ... })
```

---

### `DMA.STM32WBA55_GPDMA`

Full name: `Antmicro.Renode.Peripherals.DMA.STM32WBA55_GPDMA`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.DMA.STM32WBA55_GPDMA({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `numberOfChannels` | `number` | **required** |

---

### `DMA.TegraDma`

Full name: `Antmicro.Renode.Peripherals.DMA.TegraDma`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.DMA.tegraDma({ $at: 0x..., ... })
```

---

### `DMA.TegraDmaHost1X`

Full name: `Antmicro.Renode.Peripherals.DMA.TegraDmaHost1X`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.DMA.tegraDmaHost1X({ $at: 0x..., ... })
```

---

### `DMA.UDMA`

Full name: `Antmicro.Renode.Peripherals.DMA.UDMA`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.DMA.UDMA({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `numberOfChannels` | `number` | optional |

---

### `DMA.VybridDma`

Full name: `Antmicro.Renode.Peripherals.DMA.VybridDma`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.DMA.vybridDma({ $at: 0x..., ... })
```

---

## GPIOPort

### `GPIOPort.AmbiqApollo4_GPIO`

Full name: `Antmicro.Renode.Peripherals.GPIOPort.AmbiqApollo4_GPIO`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.GPIOPort.ambiqApollo4_GPIO({ $at: 0x..., ... })
```

---

### `GPIOPort.AndesATCGPIO100`

Full name: `Antmicro.Renode.Peripherals.GPIOPort.AndesATCGPIO100`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.GPIOPort.andesATCGPIO100({ $at: 0x..., ... })
```

---

### `GPIOPort.ARM_AHB_GPIO`

Full name: `Antmicro.Renode.Peripherals.GPIOPort.ARM_AHB_GPIO`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.GPIOPort.ARM_AHB_GPIO({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `alternateFunctionResetValue` | `number` | optional |
| `hasDedicatedIRQs` | `boolean` | optional |

---

### `GPIOPort.CC2538_GPIO`

Full name: `Antmicro.Renode.Peripherals.GPIOPort.CC2538_GPIO`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.GPIOPort.CC2538_GPIO({ $at: 0x..., ... })
```

---

### `GPIOPort.EFMGPIOPort`

Full name: `Antmicro.Renode.Peripherals.GPIOPort.EFMGPIOPort`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.GPIOPort.EFMGPIOPort({ $at: 0x..., ... })
```

---

### `GPIOPort.EFR32_GPIOPort`

Full name: `Antmicro.Renode.Peripherals.GPIOPort.EFR32_GPIOPort`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.GPIOPort.EFR32_GPIOPort({ $at: 0x..., ... })
```

---

### `GPIOPort.EFR32xG2_GPIO_1`

Full name: `Antmicro.Renode.Peripherals.GPIOPort.EFR32xG2_GPIO_1`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.GPIOPort.EFR32xG2_GPIO_1({ $at: 0x..., ... })
```

---

### `GPIOPort.EFR32xG2_GPIO_3`

Full name: `Antmicro.Renode.Peripherals.GPIOPort.EFR32xG2_GPIO_3`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.GPIOPort.EFR32xG2_GPIO_3({ $at: 0x..., ... })
```

---

### `GPIOPort.Emios`

Full name: `Antmicro.Renode.Peripherals.GPIOPort.Emios`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.GPIOPort.emios({ $at: 0x..., ... })
```

---

### `GPIOPort.Gaisler_GPIO`

Full name: `Antmicro.Renode.Peripherals.GPIOPort.Gaisler_GPIO`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.GPIOPort.gaisler_GPIO({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `numberOfConnections` | `number` | **required** |
| `numberOfInterrupts` | `number` | **required** |
| `inputOnlyPins` | `string` | optional |

---

### `GPIOPort.IMXRT_GPIO`

Full name: `Antmicro.Renode.Peripherals.GPIOPort.IMXRT_GPIO`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.GPIOPort.IMXRT_GPIO({ $at: 0x..., ... })
```

---

### `GPIOPort.LiteX_ControlAndStatus`

Full name: `Antmicro.Renode.Peripherals.GPIOPort.LiteX_ControlAndStatus`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.GPIOPort.liteX_ControlAndStatus({ $at: 0x..., ... })
```

---

### `GPIOPort.LiteX_GPIO`

Full name: `Antmicro.Renode.Peripherals.GPIOPort.LiteX_GPIO`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.GPIOPort.liteX_GPIO({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `type` | `"In" \| "Out" \| "InOut"` | **required** |
| `enableIrq` | `boolean` | optional |

---

### `GPIOPort.LPC43xx_GPIO`

Full name: `Antmicro.Renode.Peripherals.GPIOPort.LPC43xx_GPIO`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.GPIOPort.LPC43xx_GPIO({ $at: 0x..., ... })
```

---

### `GPIOPort.MAX32650_GPIO`

Full name: `Antmicro.Renode.Peripherals.GPIOPort.MAX32650_GPIO`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.GPIOPort.MAX32650_GPIO({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `numberOfPins` | `number` | **required** |

---

### `GPIOPort.MiV_CoreGPIO`

Full name: `Antmicro.Renode.Peripherals.GPIOPort.MiV_CoreGPIO`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.GPIOPort.miV_CoreGPIO({ $at: 0x..., ... })
```

---

### `GPIOPort.MPFS_GPIO`

Full name: `Antmicro.Renode.Peripherals.GPIOPort.MPFS_GPIO`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.GPIOPort.MPFS_GPIO({ $at: 0x..., ... })
```

---

### `GPIOPort.Murax_GPIO`

Full name: `Antmicro.Renode.Peripherals.GPIOPort.Murax_GPIO`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.GPIOPort.murax_GPIO({ $at: 0x..., ... })
```

---

### `GPIOPort.NPCX_GPIO`

Full name: `Antmicro.Renode.Peripherals.GPIOPort.NPCX_GPIO`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.GPIOPort.NPCX_GPIO({ $at: 0x..., ... })
```

---

### `GPIOPort.NRF52840_GPIO`

Full name: `Antmicro.Renode.Peripherals.GPIOPort.NRF52840_GPIO`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.GPIOPort.NRF52840_GPIO({ $at: 0x..., ... })
```

---

### `GPIOPort.NRF52840_GPIOTasksEvents`

Full name: `Antmicro.Renode.Peripherals.GPIOPort.NRF52840_GPIOTasksEvents`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.GPIOPort.NRF52840_GPIOTasksEvents({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `port0` | `string (peripheral ref)` | optional |
| `port1` | `string (peripheral ref)` | optional |

---

### `GPIOPort.NXPGPIOPort`

Full name: `Antmicro.Renode.Peripherals.GPIOPort.NXPGPIOPort`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.GPIOPort.NXPGPIOPort({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `numberOfPins` | `number` | **required** |

---

### `GPIOPort.OpenTitan_GPIO`

Full name: `Antmicro.Renode.Peripherals.GPIOPort.OpenTitan_GPIO`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.GPIOPort.openTitan_GPIO({ $at: 0x..., ... })
```

---

### `GPIOPort.PULP_APB_GPIO`

Full name: `Antmicro.Renode.Peripherals.GPIOPort.PULP_APB_GPIO`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.GPIOPort.PULP_APB_GPIO({ $at: 0x..., ... })
```

---

### `GPIOPort.Renesas_GPIO`

Full name: `Antmicro.Renode.Peripherals.GPIOPort.Renesas_GPIO`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.GPIOPort.renesas_GPIO({ $at: 0x..., ... })
```

---

### `GPIOPort.RenesasDA14_GPIO`

Full name: `Antmicro.Renode.Peripherals.GPIOPort.RenesasDA14_GPIO`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.GPIOPort.renesasDA14_GPIO({ $at: 0x..., ... })
```

---

### `GPIOPort.RenesasRA_GPIOMisc`

Full name: `Antmicro.Renode.Peripherals.GPIOPort.RenesasRA_GPIOMisc`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.GPIOPort.renesasRA_GPIOMisc({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `version` | `"Default" \| "RA8"` | optional |

---

### `GPIOPort.RenesasRA2_GPIO`

Full name: `Antmicro.Renode.Peripherals.GPIOPort.RenesasRA2_GPIO`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.GPIOPort.renesasRA2_GPIO({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `portNumber` | `number` | **required** |
| `numberOfConnections` | `number` | **required** |
| `pfsMisc` | `string (peripheral ref)` | **required** |

---

### `GPIOPort.RenesasRA4_GPIO`

Full name: `Antmicro.Renode.Peripherals.GPIOPort.RenesasRA4_GPIO`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.GPIOPort.renesasRA4_GPIO({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `portNumber` | `number` | **required** |
| `numberOfConnections` | `number` | **required** |
| `pfsMisc` | `string (peripheral ref)` | **required** |

---

### `GPIOPort.RenesasRA6_GPIO`

Full name: `Antmicro.Renode.Peripherals.GPIOPort.RenesasRA6_GPIO`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.GPIOPort.renesasRA6_GPIO({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `portNumber` | `number` | **required** |
| `numberOfConnections` | `number` | **required** |
| `pfsMisc` | `string (peripheral ref)` | **required** |

---

### `GPIOPort.RenesasRA8_GPIO`

Full name: `Antmicro.Renode.Peripherals.GPIOPort.RenesasRA8_GPIO`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.GPIOPort.renesasRA8_GPIO({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `portNumber` | `number` | **required** |
| `numberOfConnections` | `number` | **required** |
| `pfsMisc` | `string (peripheral ref)` | **required** |

---

### `GPIOPort.RenesasRZG_GPIO`

Full name: `Antmicro.Renode.Peripherals.GPIOPort.RenesasRZG_GPIO`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.GPIOPort.renesasRZG_GPIO({ $at: 0x..., ... })
```

---

### `GPIOPort.SAM4S_PIO`

Full name: `Antmicro.Renode.Peripherals.GPIOPort.SAM4S_PIO`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.GPIOPort.SAM4S_PIO({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `statusRegisterResetVal` | `number` | optional |

---

### `GPIOPort.SAMD21_GPIO`

Full name: `Antmicro.Renode.Peripherals.GPIOPort.SAMD21_GPIO`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.GPIOPort.SAMD21_GPIO({ $at: 0x..., ... })
```

---

### `GPIOPort.SiFive_GPIO`

Full name: `Antmicro.Renode.Peripherals.GPIOPort.SiFive_GPIO`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.GPIOPort.siFive_GPIO({ $at: 0x..., ... })
```

---

### `GPIOPort.STM32_GPIOPort`

Full name: `Antmicro.Renode.Peripherals.GPIOPort.STM32_GPIOPort`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.GPIOPort.STM32_GPIOPort({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `modeResetValue` | `number` | optional |
| `outputSpeedResetValue` | `number` | optional |
| `pullUpPullDownResetValue` | `number` | optional |
| `numberOfAFs` | `number` | optional |
| `invertedAFPins` | `string \| number \| boolean` | optional |

---

### `GPIOPort.STM32_GPIOPort+GPIOAlternateFunction`

Full name: `Antmicro.Renode.Peripherals.GPIOPort.STM32_GPIOPort+GPIOAlternateFunction`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.GPIOPort.STM32_GPIOPort+GPIOAlternateFunction({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `port` | `string (peripheral ref)` | **required** |
| `pin` | `number` | **required** |

---

### `GPIOPort.STM32F1AFIO`

Full name: `Antmicro.Renode.Peripherals.GPIOPort.STM32F1AFIO`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.GPIOPort.STM32F1AFIO({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `gpioPorts` | `string (peripheral ref)` | **required** |

---

### `GPIOPort.STM32F1GPIOPort`

Full name: `Antmicro.Renode.Peripherals.GPIOPort.STM32F1GPIOPort`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.GPIOPort.STM32F1GPIOPort({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `invertedAFPins` | `string \| number \| boolean` | optional |

---

### `GPIOPort.STM32F1GPIOPort+GPIOAlternateFunction`

Full name: `Antmicro.Renode.Peripherals.GPIOPort.STM32F1GPIOPort+GPIOAlternateFunction`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.GPIOPort.STM32F1GPIOPort+GPIOAlternateFunction({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `port` | `string (peripheral ref)` | **required** |
| `pin` | `number` | **required** |

---

### `GPIOPort.STM32F4GPIOPort`

Full name: `Antmicro.Renode.Peripherals.GPIOPort.STM32F4GPIOPort`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.GPIOPort.STM32F4GPIOPort({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `modeResetValue` | `number` | optional |
| `outputSpeedResetValue` | `number` | optional |
| `pullUpPullDownResetValue` | `number` | optional |

---

### `GPIOPort.XilinxGPIOPS`

Full name: `Antmicro.Renode.Peripherals.GPIOPort.XilinxGPIOPS`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.GPIOPort.xilinxGPIOPS({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `numberOfGpioBanks` | `number` | optional |

---

## I2C

### `I2C.BetrustedEcI2C`

Full name: `Antmicro.Renode.Peripherals.I2C.BetrustedEcI2C`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.I2C.betrustedEcI2C({ $at: 0x..., ... })
```

---

### `I2C.BetrustedSocI2C`

Full name: `Antmicro.Renode.Peripherals.I2C.BetrustedSocI2C`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.I2C.betrustedSocI2C({ $at: 0x..., ... })
```

---

### `I2C.BMA180`

Full name: `Antmicro.Renode.Peripherals.I2C.BMA180`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.I2C.BMA180({ $at: 0x..., ... })
```

---

### `I2C.BMC050`

Full name: `Antmicro.Renode.Peripherals.I2C.BMC050`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.I2C.BMC050({ $at: 0x..., ... })
```

---

### `I2C.BME280`

Full name: `Antmicro.Renode.Peripherals.I2C.BME280`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.I2C.BME280({ $at: 0x..., ... })
```

---

### `I2C.Cadence_I2C`

Full name: `Antmicro.Renode.Peripherals.I2C.Cadence_I2C`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.I2C.cadence_I2C({ $at: 0x..., ... })
```

---

### `I2C.EFM32GGI2CController`

Full name: `Antmicro.Renode.Peripherals.I2C.EFM32GGI2CController`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.I2C.EFM32GGI2CController({ $at: 0x..., ... })
```

---

### `I2C.EFR32_I2CController`

Full name: `Antmicro.Renode.Peripherals.I2C.EFR32_I2CController`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.I2C.EFR32_I2CController({ $at: 0x..., ... })
```

---

### `I2C.EFR32xG2_I2CController`

Full name: `Antmicro.Renode.Peripherals.I2C.EFR32xG2_I2CController`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.I2C.EFR32xG2_I2CController({ $at: 0x..., ... })
```

---

### `I2C.LC709205F`

Full name: `Antmicro.Renode.Peripherals.I2C.LC709205F`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.I2C.LC709205F({ $at: 0x..., ... })
```

---

### `I2C.LiteX_I2C`

Full name: `Antmicro.Renode.Peripherals.I2C.LiteX_I2C`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.I2C.liteX_I2C({ $at: 0x..., ... })
```

---

### `I2C.LiteX_I2C_Zephyr`

Full name: `Antmicro.Renode.Peripherals.I2C.LiteX_I2C_Zephyr`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.I2C.liteX_I2C_Zephyr({ $at: 0x..., ... })
```

---

### `I2C.LM95245`

Full name: `Antmicro.Renode.Peripherals.I2C.LM95245`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.I2C.LM95245({ $at: 0x..., ... })
```

---

### `I2C.MAX32650_I2C`

Full name: `Antmicro.Renode.Peripherals.I2C.MAX32650_I2C`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.I2C.MAX32650_I2C({ $at: 0x..., ... })
```

---

### `I2C.MB85RC1MT`

Full name: `Antmicro.Renode.Peripherals.I2C.MB85RC1MT`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.I2C.MB85RC1MT({ $at: 0x..., ... })
```

---

### `I2C.MB85RC1MTHi`

Full name: `Antmicro.Renode.Peripherals.I2C.MB85RC1MTHi`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.I2C.MB85RC1MTHi({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `mb85rc1mt` | `string (peripheral ref)` | **required** |

---

### `I2C.MB85RC1MTI2CRelay`

Full name: `Antmicro.Renode.Peripherals.I2C.MB85RC1MTI2CRelay`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.I2C.MB85RC1MTI2CRelay({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `mb85rc1mt` | `string (peripheral ref)` | **required** |
| `addr16` | `boolean` | **required** |

---

### `I2C.MB85RC1MTLo`

Full name: `Antmicro.Renode.Peripherals.I2C.MB85RC1MTLo`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.I2C.MB85RC1MTLo({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `mb85rc1mt` | `string (peripheral ref)` | **required** |

---

### `I2C.MPFS_I2C`

Full name: `Antmicro.Renode.Peripherals.I2C.MPFS_I2C`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.I2C.MPFS_I2C({ $at: 0x..., ... })
```

---

### `I2C.NPCX_SMBus`

Full name: `Antmicro.Renode.Peripherals.I2C.NPCX_SMBus`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.I2C.NPCX_SMBus({ $at: 0x..., ... })
```

---

### `I2C.NRF52840_I2C`

Full name: `Antmicro.Renode.Peripherals.I2C.NRF52840_I2C`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.I2C.NRF52840_I2C({ $at: 0x..., ... })
```

---

### `I2C.OpenCoresI2C`

Full name: `Antmicro.Renode.Peripherals.I2C.OpenCoresI2C`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.I2C.openCoresI2C({ $at: 0x..., ... })
```

---

### `I2C.OpenTitan_I2C`

Full name: `Antmicro.Renode.Peripherals.I2C.OpenTitan_I2C`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.I2C.openTitan_I2C({ $at: 0x..., ... })
```

---

### `I2C.PCA9548`

Full name: `Antmicro.Renode.Peripherals.I2C.PCA9548`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.I2C.PCA9548({ $at: 0x..., ... })
```

---

### `I2C.PULP_uDMA_I2C`

Full name: `Antmicro.Renode.Peripherals.I2C.PULP_uDMA_I2C`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.I2C.PULP_uDMA_I2C({ $at: 0x..., ... })
```

---

### `I2C.RenesasDA_I2C`

Full name: `Antmicro.Renode.Peripherals.I2C.RenesasDA_I2C`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.I2C.renesasDA_I2C({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `dma` | `string \| number \| boolean` | optional |

---

### `I2C.RenesasRA_IIC`

Full name: `Antmicro.Renode.Peripherals.I2C.RenesasRA_IIC`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.I2C.renesasRA_IIC({ $at: 0x..., ... })
```

---

### `I2C.RenesasRZG_IIC`

Full name: `Antmicro.Renode.Peripherals.I2C.RenesasRZG_IIC`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.I2C.renesasRZG_IIC({ $at: 0x..., ... })
```

---

### `I2C.RockchipI2C`

Full name: `Antmicro.Renode.Peripherals.I2C.RockchipI2C`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.I2C.rockchipI2C({ $at: 0x..., ... })
```

---

### `I2C.S32K3XX_LowPowerInterIntegratedCircuit`

Full name: `Antmicro.Renode.Peripherals.I2C.S32K3XX_LowPowerInterIntegratedCircuit`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.I2C.s32K3XX_LowPowerInterIntegratedCircuit({ $at: 0x..., ... })
```

---

### `I2C.SAM4S_TWI`

Full name: `Antmicro.Renode.Peripherals.I2C.SAM4S_TWI`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.I2C.SAM4S_TWI({ $at: 0x..., ... })
```

---

### `I2C.SAMD21_I2C`

Full name: `Antmicro.Renode.Peripherals.I2C.SAMD21_I2C`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.I2C.SAMD21_I2C({ $at: 0x..., ... })
```

---

### `I2C.SHT21`

Full name: `Antmicro.Renode.Peripherals.I2C.SHT21`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.I2C.SHT21({ $at: 0x..., ... })
```

---

### `I2C.SHT45`

Full name: `Antmicro.Renode.Peripherals.I2C.SHT45`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.I2C.SHT45({ $at: 0x..., ... })
```

---

### `I2C.STM32F4_I2C`

Full name: `Antmicro.Renode.Peripherals.I2C.STM32F4_I2C`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.I2C.STM32F4_I2C({ $at: 0x..., ... })
```

---

### `I2C.STM32F7_I2C`

Full name: `Antmicro.Renode.Peripherals.I2C.STM32F7_I2C`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.I2C.STM32F7_I2C({ $at: 0x..., ... })
```

---

### `I2C.TAS2572`

Full name: `Antmicro.Renode.Peripherals.I2C.TAS2572`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.I2C.TAS2572({ $at: 0x..., ... })
```

---

### `I2C.TCA6416`

Full name: `Antmicro.Renode.Peripherals.I2C.TCA6416`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.I2C.TCA6416({ $at: 0x..., ... })
```

---

### `I2C.TegraDVC`

Full name: `Antmicro.Renode.Peripherals.I2C.TegraDVC`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.I2C.tegraDVC({ $at: 0x..., ... })
```

---

### `I2C.TegraI2CController`

Full name: `Antmicro.Renode.Peripherals.I2C.TegraI2CController`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.I2C.tegraI2CController({ $at: 0x..., ... })
```

---

### `I2C.VybridI2C`

Full name: `Antmicro.Renode.Peripherals.I2C.VybridI2C`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.I2C.vybridI2C({ $at: 0x..., ... })
```

---

## I3C

### `I3C.Caliptra_I3C`

Full name: `Antmicro.Renode.Peripherals.I3C.Caliptra_I3C`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.I3C.caliptra_I3C({ $at: 0x..., ... })
```

---

## IRQControllers

### `IRQControllers.AIC`

Full name: `Antmicro.Renode.Peripherals.IRQControllers.AIC`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.IRQControllers.AIC({ $at: 0x..., ... })
```

---

### `IRQControllers.AINTC`

Full name: `Antmicro.Renode.Peripherals.IRQControllers.AINTC`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.IRQControllers.AINTC({ $at: 0x..., ... })
```

---

### `IRQControllers.AndesNCEPLIC100`

Full name: `Antmicro.Renode.Peripherals.IRQControllers.AndesNCEPLIC100`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.IRQControllers.andesNCEPLIC100({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `numberOfSources` | `number` | **required** |
| `numberOfContexts` | `number` | **required** |
| `prioritiesEnabled` | `boolean` | optional |

---

### `IRQControllers.ARM_GenericInterruptController`

Full name: `Antmicro.Renode.Peripherals.IRQControllers.ARM_GenericInterruptController`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.IRQControllers.ARM_GenericInterruptController({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `supportsTwoSecurityStates` | `boolean` | optional |
| `architectureVersion` | `"Default" \| "GICv1" \| "GICv2" \| "GICv3" \| "GICv4"` | optional |
| `sharedPeripheralCount` | `number` | optional |

---

### `IRQControllers.ARM_GenericInterruptController+CPUEntry`

Full name: `Antmicro.Renode.Peripherals.IRQControllers.ARM_GenericInterruptController+CPUEntry`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.IRQControllers.ARM_GenericInterruptController+CPUEntry({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `gic` | `string (peripheral ref)` | **required** |
| `cpu` | `string (peripheral ref)` | **required** |
| `groupTypes` | `string \| number \| boolean` | **required** |
| `interruptConnections` | `string \| number \| boolean` | **required** |

---

### `IRQControllers.ARM_GenericInterruptController+CPUEntryWithTwoSecurityStates`

Full name: `Antmicro.Renode.Peripherals.IRQControllers.ARM_GenericInterruptController+CPUEntryWithTwoSecurityStates`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.IRQControllers.ARM_GenericInterruptController+CPUEntryWithTwoSecurityStates({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `gic` | `string (peripheral ref)` | **required** |
| `cpu` | `string (peripheral ref)` | **required** |
| `groupTypes` | `string \| number \| boolean` | **required** |
| `interruptConnections` | `string \| number \| boolean` | **required** |

---

### `IRQControllers.CoreLevelInterruptor`

Full name: `Antmicro.Renode.Peripherals.IRQControllers.CoreLevelInterruptor`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.IRQControllers.coreLevelInterruptor({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `frequency` | `number` | **required** |
| `numberOfTargets` | `number` | optional |
| `divider` | `number` | optional |

---

### `IRQControllers.CoreLocalInterruptController`

Full name: `Antmicro.Renode.Peripherals.IRQControllers.CoreLocalInterruptController`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.IRQControllers.coreLocalInterruptController({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `cpu` | `string (peripheral ref)` | **required** |
| `numberOfInterrupts` | `number` | optional |
| `machineLevelBits` | `number` | optional |
| `supervisorLevelBits` | `number` | optional |
| `modeBits` | `number` | optional |
| `interruptInputControlBits` | `number` | optional |
| `configurationHasNvbits` | `boolean` | optional |

---

### `IRQControllers.EOSS3_IntrCtrl`

Full name: `Antmicro.Renode.Peripherals.IRQControllers.EOSS3_IntrCtrl`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.IRQControllers.EOSS3_IntrCtrl({ $at: 0x..., ... })
```

---

### `IRQControllers.EXTI`

Full name: `Antmicro.Renode.Peripherals.IRQControllers.EXTI`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.IRQControllers.EXTI({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `numberOfOutputLines` | `number` | optional |
| `firstDirectLine` | `number` | optional |

---

### `IRQControllers.GaislerMIC`

Full name: `Antmicro.Renode.Peripherals.IRQControllers.GaislerMIC`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.IRQControllers.gaislerMIC({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `totalNumberCPUs` | `number` | optional |

---

### `IRQControllers.IOAPIC`

Full name: `Antmicro.Renode.Peripherals.IRQControllers.IOAPIC`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.IRQControllers.IOAPIC({ $at: 0x..., ... })
```

---

### `IRQControllers.LAPIC`

Full name: `Antmicro.Renode.Peripherals.IRQControllers.LAPIC`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.IRQControllers.LAPIC({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `id` | `number` | optional |
| `lapicTimerFrequency` | `number` | optional |

---

### `IRQControllers.MiV_CoreLevelInterruptor`

Full name: `Antmicro.Renode.Peripherals.IRQControllers.MiV_CoreLevelInterruptor`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.IRQControllers.miV_CoreLevelInterruptor({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `frequency` | `number` | **required** |
| `prescaler` | `number` | optional |
| `numberOfTargets` | `number` | optional |

---

### `IRQControllers.MPC5567_INTC`

Full name: `Antmicro.Renode.Peripherals.IRQControllers.MPC5567_INTC`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.IRQControllers.MPC5567_INTC({ $at: 0x..., ... })
```

---

### `IRQControllers.MSCM`

Full name: `Antmicro.Renode.Peripherals.IRQControllers.MSCM`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.IRQControllers.MSCM({ $at: 0x..., ... })
```

---

### `IRQControllers.NVIC`

Full name: `Antmicro.Renode.Peripherals.IRQControllers.NVIC`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.IRQControllers.NVIC({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `systickFrequency` | `number` | optional |
| `priorityMask` | `number` | optional |
| `haltSystickOnDeepSleep` | `boolean` | optional |

---

### `IRQControllers.NXP_INTMUX`

Full name: `Antmicro.Renode.Peripherals.IRQControllers.NXP_INTMUX`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.IRQControllers.NXP_INTMUX({ $at: 0x..., ... })
```

---

### `IRQControllers.NXP_INTMUX+Channel`

Full name: `Antmicro.Renode.Peripherals.IRQControllers.NXP_INTMUX+Channel`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.IRQControllers.NXP_INTMUX+Channel({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `intmux` | `string (peripheral ref)` | **required** |
| `channelNumber` | `number` | **required** |

---

### `IRQControllers.OpenTitan_PlatformLevelInterruptController`

Full name: `Antmicro.Renode.Peripherals.IRQControllers.OpenTitan_PlatformLevelInterruptController`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.IRQControllers.openTitan_PlatformLevelInterruptController({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `numberOfSources` | `number` | optional |
| `numberOfContexts` | `number` | optional |

---

### `IRQControllers.PL190_VIC`

Full name: `Antmicro.Renode.Peripherals.IRQControllers.PL190_VIC`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.IRQControllers.PL190_VIC({ $at: 0x..., ... })
```

---

### `IRQControllers.PlatformLevelInterruptController`

Full name: `Antmicro.Renode.Peripherals.IRQControllers.PlatformLevelInterruptController`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.IRQControllers.platformLevelInterruptController({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `numberOfSources` | `number` | **required** |
| `numberOfContexts` | `number` | **required** |
| `prioritiesEnabled` | `boolean` | optional |

---

### `IRQControllers.PULP_EventController`

Full name: `Antmicro.Renode.Peripherals.IRQControllers.PULP_EventController`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.IRQControllers.PULP_EventController({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `parent` | `string (peripheral ref)` | **required** |

---

### `IRQControllers.PULP_InterruptController`

Full name: `Antmicro.Renode.Peripherals.IRQControllers.PULP_InterruptController`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.IRQControllers.PULP_InterruptController({ $at: 0x..., ... })
```

---

### `IRQControllers.RenesasRA_ICU`

Full name: `Antmicro.Renode.Peripherals.IRQControllers.RenesasRA_ICU`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.IRQControllers.renesasRA_ICU({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `nvic` | `string \| number \| boolean` | **required** |
| `eventToInterruptLink` | `"RA8" \| "RA6" \| "RA4" \| "RA2"` | optional |
| `numberOfExternalInterrupts` | `number` | optional |
| `highestEventNumber` | `number` | optional |
| `numberOfNVICOutputs` | `number` | optional |

---

### `IRQControllers.RenesasRZG_IRQController`

Full name: `Antmicro.Renode.Peripherals.IRQControllers.RenesasRZG_IRQController`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.IRQControllers.renesasRZG_IRQController({ $at: 0x..., ... })
```

---

### `IRQControllers.SIC`

Full name: `Antmicro.Renode.Peripherals.IRQControllers.SIC`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.IRQControllers.SIC({ $at: 0x..., ... })
```

---

### `IRQControllers.STM32F4_EXTI`

Full name: `Antmicro.Renode.Peripherals.IRQControllers.STM32F4_EXTI`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.IRQControllers.STM32F4_EXTI({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `numberOfOutputLines` | `number` | optional |
| `firstDirectLine` | `number` | optional |

---

### `IRQControllers.STM32H7_EXTI`

Full name: `Antmicro.Renode.Peripherals.IRQControllers.STM32H7_EXTI`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.IRQControllers.STM32H7_EXTI({ $at: 0x..., ... })
```

---

### `IRQControllers.STM32WBA_EXTI`

Full name: `Antmicro.Renode.Peripherals.IRQControllers.STM32WBA_EXTI`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.IRQControllers.STM32WBA_EXTI({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `numberOfOutputLines` | `number` | **required** |

---

### `IRQControllers.STM32WBA_EXTI+InternalReceiver`

Full name: `Antmicro.Renode.Peripherals.IRQControllers.STM32WBA_EXTI+InternalReceiver`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.IRQControllers.STM32WBA_EXTI+InternalReceiver({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `parent` | `string (peripheral ref)` | **required** |
| `portNumber` | `number` | **required** |

---

### `IRQControllers.VeeR_EL2_PIC`

Full name: `Antmicro.Renode.Peripherals.IRQControllers.VeeR_EL2_PIC`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.IRQControllers.veeR_EL2_PIC({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `cpu` | `string (peripheral ref)` | **required** |
| `interruptSourcesCount` | `number` | optional |
| `notAllGatewaysAreConfigurable` | `boolean` | optional |

---

## Input

### `Input.AntMouse`

Full name: `Antmicro.Renode.Peripherals.Input.AntMouse`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Input.antMouse({ $at: 0x..., ... })
```

---

### `Input.AR1021`

Full name: `Antmicro.Renode.Peripherals.Input.AR1021`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Input.AR1021({ $at: 0x..., ... })
```

---

### `Input.FT5336`

Full name: `Antmicro.Renode.Peripherals.Input.FT5336`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Input.FT5336({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `isRotated` | `boolean` | optional |
| `isInvertedX` | `boolean` | optional |
| `isInvertedY` | `boolean` | optional |

---

### `Input.FT5x06`

Full name: `Antmicro.Renode.Peripherals.Input.FT5x06`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Input.FT5x06({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `maxPoints` | `number` | optional |

---

### `Input.FusionF0710A`

Full name: `Antmicro.Renode.Peripherals.Input.FusionF0710A`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Input.fusionF0710A({ $at: 0x..., ... })
```

---

### `Input.PL050`

Full name: `Antmicro.Renode.Peripherals.Input.PL050`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Input.PL050({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `size` | `number` | optional |

---

### `Input.PS2Keyboard`

Full name: `Antmicro.Renode.Peripherals.Input.PS2Keyboard`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Input.PS2Keyboard({ $at: 0x..., ... })
```

---

### `Input.PS2Mouse`

Full name: `Antmicro.Renode.Peripherals.Input.PS2Mouse`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Input.PS2Mouse({ $at: 0x..., ... })
```

---

## LIN

### `LIN.DummyLINPeripheral`

Full name: `Antmicro.Renode.Peripherals.LIN.DummyLINPeripheral`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.LIN.dummyLINPeripheral({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `protectedId` | `number` | **required** |
| `frameLength` | `number` | optional |

---

## MTD

### `MTD.AMDCFIFlash`

Full name: `Antmicro.Renode.Peripherals.MTD.AMDCFIFlash`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.MTD.AMDCFIFlash({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `underlyingMemory` | `string (peripheral ref)` | **required** |
| `interleave` | `number` | optional |
| `manufacturerId` | `number` | optional |
| `alternateManufacturerId` | `number` | optional |
| `deviceId` | `number` | optional |

---

### `MTD.CC2538FlashController`

Full name: `Antmicro.Renode.Peripherals.MTD.CC2538FlashController`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.MTD.CC2538FlashController({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `flash` | `string (peripheral ref)` | **required** |

---

### `MTD.CFIFlash`

Full name: `Antmicro.Renode.Peripherals.MTD.CFIFlash`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.MTD.CFIFlash({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `fileName` | `string` | **required** |
| `size` | `number` | optional |
| `bits` | `"Byte" \| "Word" \| "DoubleWord" \| "QuadWord"` | optional |
| `nonPersistent` | `boolean` | optional |

---

### `MTD.DummySPIFlash`

Full name: `Antmicro.Renode.Peripherals.MTD.DummySPIFlash`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.MTD.dummySPIFlash({ $at: 0x..., ... })
```

---

### `MTD.EFR32xg13FlashController`

Full name: `Antmicro.Renode.Peripherals.MTD.EFR32xg13FlashController`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.MTD.EFR32xg13FlashController({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `flash` | `string (peripheral ref)` | **required** |

---

### `MTD.FSLNAND`

Full name: `Antmicro.Renode.Peripherals.MTD.FSLNAND`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.MTD.FSLNAND({ $at: 0x..., ... })
```

---

### `MTD.MPFS_eNVM`

Full name: `Antmicro.Renode.Peripherals.MTD.MPFS_eNVM`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.MTD.MPFS_eNVM({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `memory` | `string (peripheral ref)` | **required** |

---

### `MTD.OpenTitan_FlashController`

Full name: `Antmicro.Renode.Peripherals.MTD.OpenTitan_FlashController`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.MTD.openTitan_FlashController({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `flash` | `string (peripheral ref)` | **required** |

---

### `MTD.SamsungK9NANDFlash`

Full name: `Antmicro.Renode.Peripherals.MTD.SamsungK9NANDFlash`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.MTD.samsungK9NANDFlash({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `fileName` | `string` | **required** |
| `nonPersistent` | `boolean` | optional |
| `partId` | `number` | optional |
| `manufacturerId` | `number` | optional |
| `compression` | `"None" \| "GZip"` | optional |

---

### `MTD.STM32F4_FlashController`

Full name: `Antmicro.Renode.Peripherals.MTD.STM32F4_FlashController`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.MTD.STM32F4_FlashController({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `flash` | `string (peripheral ref)` | **required** |

---

### `MTD.STM32H7_FlashController`

Full name: `Antmicro.Renode.Peripherals.MTD.STM32H7_FlashController`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.MTD.STM32H7_FlashController({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `flash1` | `string (peripheral ref)` | **required** |
| `flash2` | `string (peripheral ref)` | **required** |

---

### `MTD.STM32L0_FlashController`

Full name: `Antmicro.Renode.Peripherals.MTD.STM32L0_FlashController`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.MTD.STM32L0_FlashController({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `flash` | `string (peripheral ref)` | **required** |
| `eeprom` | `string (peripheral ref)` | **required** |

---

### `MTD.STM32WBA_FlashController`

Full name: `Antmicro.Renode.Peripherals.MTD.STM32WBA_FlashController`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.MTD.STM32WBA_FlashController({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `flash` | `string (peripheral ref)` | **required** |

---

## Memory

### `Memory.ArrayMemory`

Full name: `Antmicro.Renode.Peripherals.Memory.ArrayMemory`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Memory.arrayMemory({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `size` | `number` | **required** |
| `initialValue` | `number` | optional |

---

### `Memory.ArrayMemoryWithReadonlys`

Full name: `Antmicro.Renode.Peripherals.Memory.ArrayMemoryWithReadonlys`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Memory.arrayMemoryWithReadonlys({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `size` | `number` | **required** |

---

### `Memory.GenericI2cEeprom`

Full name: `Antmicro.Renode.Peripherals.Memory.GenericI2cEeprom`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Memory.genericI2cEeprom({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `memory` | `string (peripheral ref)` | **required** |
| `addressBitSize` | `number` | optional |
| `writable` | `boolean` | optional |
| `pageSize` | `number` | optional |

---

### `Memory.MappedMemory`

Full name: `Antmicro.Renode.Peripherals.Memory.MappedMemory`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Memory.mappedMemory({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `size` | `number` | **required** |
| `segmentSize` | `number` | optional |
| `sharedMemoryFileRoot` | `string` | optional |

---

### `Memory.MSP430F261X_DMA`

Full name: `Antmicro.Renode.Peripherals.Memory.MSP430F261X_DMA`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Memory.MSP430F261X_DMA({ $at: 0x..., ... })
```

---

## MemoryControllers

### `MemoryControllers.ARM_SMMUv3`

Full name: `Antmicro.Renode.Peripherals.MemoryControllers.ARM_SMMUv3`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.MemoryControllers.ARM_SMMUv3({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `context` | `string (peripheral ref)` | optional |

---

### `MemoryControllers.ARM_SMMUv3BusController`

Full name: `Antmicro.Renode.Peripherals.MemoryControllers.ARM_SMMUv3BusController`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.MemoryControllers.ARM_SMMUv3BusController({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `smmu` | `string (peripheral ref)` | **required** |

---

### `MemoryControllers.ARM_SMMUv3ExternalMmu`

Full name: `Antmicro.Renode.Peripherals.MemoryControllers.ARM_SMMUv3ExternalMmu`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.MemoryControllers.ARM_SMMUv3ExternalMmu({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `smmu` | `string (peripheral ref)` | **required** |
| `cpu` | `string (peripheral ref)` | **required** |

---

### `MemoryControllers.ESAMemoryController`

Full name: `Antmicro.Renode.Peripherals.MemoryControllers.ESAMemoryController`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.MemoryControllers.ESAMemoryController({ $at: 0x..., ... })
```

---

### `MemoryControllers.Gaisler_FaultTolerantMemoryController`

Full name: `Antmicro.Renode.Peripherals.MemoryControllers.Gaisler_FaultTolerantMemoryController`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.MemoryControllers.gaisler_FaultTolerantMemoryController({ $at: 0x..., ... })
```

---

### `MemoryControllers.OpenTitan_ROMController`

Full name: `Antmicro.Renode.Peripherals.MemoryControllers.OpenTitan_ROMController`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.MemoryControllers.openTitan_ROMController({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `rom` | `string (peripheral ref)` | **required** |
| `nonce` | `string` | **required** |
| `key` | `string` | **required** |

---

### `MemoryControllers.OpenTitan_SRAMController`

Full name: `Antmicro.Renode.Peripherals.MemoryControllers.OpenTitan_SRAMController`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.MemoryControllers.openTitan_SRAMController({ $at: 0x..., ... })
```

---

## Misc

### `EFM32DeviceInformation`

Full name: `Antmicro.Renode.Peripherals.EFM32DeviceInformation`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Misc.EFM32DeviceInformation({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `deviceFamily` | `"Gecko" \| "GiantGecko" \| "TinyGecko" \| "LeopardGecko"` | **required** |
| `deviceNumber` | `number` | **required** |
| `flashSize` | `number` | **required** |
| `sramSize` | `number` | **required** |
| `productRevision` | `number` | optional |

---

### `EfmSystemDevice`

Full name: `Antmicro.Renode.Peripherals.EfmSystemDevice`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Misc.efmSystemDevice({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `family` | `number` | **required** |
| `partNo` | `number` | **required** |
| `flash` | `number` | **required** |
| `ram` | `number` | **required** |
| `rev` | `number` | **required** |

---

### `EtherBoneBridge`

Full name: `Antmicro.Renode.Peripherals.EtherBoneBridge`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Misc.etherBoneBridge({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `port` | `number` | **required** |
| `host` | `string` | optional |

---

### `HiFive_PWM`

Full name: `Antmicro.Renode.Peripherals.HiFive_PWM`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Misc.hiFive_PWM({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `frequency` | `number` | optional |

---

### `PWMTester`

Full name: `Antmicro.Renode.Peripherals.PWMTester`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Misc.PWMTester({ $at: 0x..., ... })
```

---

### `SimpleDMA`

Full name: `Antmicro.Renode.Peripherals.SimpleDMA`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Misc.simpleDMA({ $at: 0x..., ... })
```

---

### `STM32L_RTC`

Full name: `Antmicro.Renode.Peripherals.STM32L_RTC`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Misc.STM32L_RTC({ $at: 0x..., ... })
```

---

## Miscellaneous

### `Miscellaneous.AmbiqApollo4_BootromLogger`

Full name: `Antmicro.Renode.Peripherals.Miscellaneous.AmbiqApollo4_BootromLogger`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Miscellaneous.ambiqApollo4_BootromLogger({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `bootromBaseAddress` | `number` | **required** |

---

### `Miscellaneous.AmbiqApollo4_PowerController`

Full name: `Antmicro.Renode.Peripherals.Miscellaneous.AmbiqApollo4_PowerController`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Miscellaneous.ambiqApollo4_PowerController({ $at: 0x..., ... })
```

---

### `Miscellaneous.AmbiqApollo4_Security`

Full name: `Antmicro.Renode.Peripherals.Miscellaneous.AmbiqApollo4_Security`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Miscellaneous.ambiqApollo4_Security({ $at: 0x..., ... })
```

---

### `Miscellaneous.ArmPerformanceMonitoringUnit`

Full name: `Antmicro.Renode.Peripherals.Miscellaneous.ArmPerformanceMonitoringUnit`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Miscellaneous.armPerformanceMonitoringUnit({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `peripheralId` | `number` | optional |
| `withProcessorIdMMIORegisters` | `boolean` | optional |

---

### `Miscellaneous.ArmSignalsUnit`

Full name: `Antmicro.Renode.Peripherals.Miscellaneous.ArmSignalsUnit`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Miscellaneous.armSignalsUnit({ $at: 0x..., ... })
```

---

### `Miscellaneous.ArmSnoopControlUnit`

Full name: `Antmicro.Renode.Peripherals.Miscellaneous.ArmSnoopControlUnit`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Miscellaneous.armSnoopControlUnit({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `smpMask` | `number` | optional |
| `signalsUnit` | `string (peripheral ref)` | optional |

---

### `Miscellaneous.ArmSysCtl`

Full name: `Antmicro.Renode.Peripherals.Miscellaneous.ArmSysCtl`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Miscellaneous.armSysCtl({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `procId` | `number` | **required** |

---

### `Miscellaneous.BitAccess`

Full name: `Antmicro.Renode.Peripherals.Miscellaneous.BitAccess`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Miscellaneous.bitAccess({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `address` | `number` | **required** |
| `mode` | `"Set" \| "Clear"` | **required** |

---

### `Miscellaneous.BitBanding`

Full name: `Antmicro.Renode.Peripherals.Miscellaneous.BitBanding`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Miscellaneous.bitBanding({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `peripheralBase` | `number` | **required** |

---

### `Miscellaneous.Button`

Full name: `Antmicro.Renode.Peripherals.Miscellaneous.Button`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Miscellaneous.button({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `invert` | `boolean` | optional |

---

### `Miscellaneous.CC2538_Cryptoprocessor`

Full name: `Antmicro.Renode.Peripherals.Miscellaneous.CC2538_Cryptoprocessor`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Miscellaneous.CC2538_Cryptoprocessor({ $at: 0x..., ... })
```

---

### `Miscellaneous.CombinedInput`

Full name: `Antmicro.Renode.Peripherals.Miscellaneous.CombinedInput`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Miscellaneous.combinedInput({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `numberOfInputs` | `number` | **required** |

---

### `Miscellaneous.CortexR5SignalsUnit`

Full name: `Antmicro.Renode.Peripherals.Miscellaneous.CortexR5SignalsUnit`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Miscellaneous.cortexR5SignalsUnit({ $at: 0x..., ... })
```

---

### `Miscellaneous.CortexR8SignalsUnit`

Full name: `Antmicro.Renode.Peripherals.Miscellaneous.CortexR8SignalsUnit`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Miscellaneous.cortexR8SignalsUnit({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `snoopControlUnit` | `string (peripheral ref)` | **required** |

---

### `Miscellaneous.Crypto.AthenaX5200`

Full name: `Antmicro.Renode.Peripherals.Miscellaneous.Crypto.AthenaX5200`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Miscellaneous.crypto.AthenaX5200({ $at: 0x..., ... })
```

---

### `Miscellaneous.Crypto.STM32H7_CRYPTO`

Full name: `Antmicro.Renode.Peripherals.Miscellaneous.Crypto.STM32H7_CRYPTO`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Miscellaneous.crypto.STM32H7_CRYPTO({ $at: 0x..., ... })
```

---

### `Miscellaneous.DWT`

Full name: `Antmicro.Renode.Peripherals.Miscellaneous.DWT`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Miscellaneous.DWT({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `frequency` | `number` | **required** |

---

### `Miscellaneous.EFR32_CMU`

Full name: `Antmicro.Renode.Peripherals.Miscellaneous.EFR32_CMU`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Miscellaneous.EFR32_CMU({ $at: 0x..., ... })
```

---

### `Miscellaneous.EgisET171_AOSMU`

Full name: `Antmicro.Renode.Peripherals.Miscellaneous.EgisET171_AOSMU`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Miscellaneous.egisET171_AOSMU({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `mtimer` | `string (peripheral ref)` | **required** |
| `pit` | `string (peripheral ref)` | **required** |
| `wdt` | `string (peripheral ref)` | **required** |

---

### `Miscellaneous.EgisET171_Crypto`

Full name: `Antmicro.Renode.Peripherals.Miscellaneous.EgisET171_Crypto`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Miscellaneous.egisET171_Crypto({ $at: 0x..., ... })
```

---

### `Miscellaneous.EgisET171_SMU2`

Full name: `Antmicro.Renode.Peripherals.Miscellaneous.EgisET171_SMU2`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Miscellaneous.egisET171_SMU2({ $at: 0x..., ... })
```

---

### `Miscellaneous.EmulatorController`

Full name: `Antmicro.Renode.Peripherals.Miscellaneous.EmulatorController`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Miscellaneous.emulatorController({ $at: 0x..., ... })
```

---

### `Miscellaneous.EOSS3_FlexibleFusionEngine`

Full name: `Antmicro.Renode.Peripherals.Miscellaneous.EOSS3_FlexibleFusionEngine`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Miscellaneous.EOSS3_FlexibleFusionEngine({ $at: 0x..., ... })
```

---

### `Miscellaneous.EOSS3_PacketFIFO`

Full name: `Antmicro.Renode.Peripherals.Miscellaneous.EOSS3_PacketFIFO`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Miscellaneous.EOSS3_PacketFIFO({ $at: 0x..., ... })
```

---

### `Miscellaneous.ExternalMmuBase`

Full name: `Antmicro.Renode.Peripherals.Miscellaneous.ExternalMmuBase`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Miscellaneous.externalMmuBase({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `cpu` | `string (peripheral ref)` | **required** |
| `windowsCount` | `number` | **required** |
| `position` | `"None" \| "Replace" \| "BeforeInternal" \| "AfterInternal"` | optional |

---

### `Miscellaneous.ExternalWindowMMU`

Full name: `Antmicro.Renode.Peripherals.Miscellaneous.ExternalWindowMMU`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Miscellaneous.externalWindowMMU({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `cpu` | `string (peripheral ref)` | **required** |
| `numberOfWindows` | `number` | **required** |

---

### `Miscellaneous.FocalTechFT9001_CPM`

Full name: `Antmicro.Renode.Peripherals.Miscellaneous.FocalTechFT9001_CPM`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Miscellaneous.focalTechFT9001_CPM({ $at: 0x..., ... })
```

---

### `Miscellaneous.FocalTechFT9001_Reset`

Full name: `Antmicro.Renode.Peripherals.Miscellaneous.FocalTechFT9001_Reset`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Miscellaneous.focalTechFT9001_Reset({ $at: 0x..., ... })
```

---

### `Miscellaneous.FocalTechFT9001_TRNG`

Full name: `Antmicro.Renode.Peripherals.Miscellaneous.FocalTechFT9001_TRNG`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Miscellaneous.focalTechFT9001_TRNG({ $at: 0x..., ... })
```

---

### `Miscellaneous.IMX_TRNG`

Full name: `Antmicro.Renode.Peripherals.Miscellaneous.IMX_TRNG`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Miscellaneous.IMX_TRNG({ $at: 0x..., ... })
```

---

### `Miscellaneous.IMXRT700_ClockControl`

Full name: `Antmicro.Renode.Peripherals.Miscellaneous.IMXRT700_ClockControl`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Miscellaneous.IMXRT700_ClockControl({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `instanceIndex` | `number` | **required** |

---

### `Miscellaneous.IMXRT700_MessagingUnit`

Full name: `Antmicro.Renode.Peripherals.Miscellaneous.IMXRT700_MessagingUnit`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Miscellaneous.IMXRT700_MessagingUnit({ $at: 0x..., ... })
```

---

### `Miscellaneous.IMXRT700_SYSCON0`

Full name: `Antmicro.Renode.Peripherals.Miscellaneous.IMXRT700_SYSCON0`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Miscellaneous.IMXRT700_SYSCON0({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `dmaMux` | `string (peripheral ref)` | optional |

---

### `Miscellaneous.IMXRT700_SYSCON1`

Full name: `Antmicro.Renode.Peripherals.Miscellaneous.IMXRT700_SYSCON1`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Miscellaneous.IMXRT700_SYSCON1({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `dmaMux` | `string (peripheral ref)` | optional |

---

### `Miscellaneous.K6xF_MCG`

Full name: `Antmicro.Renode.Peripherals.Miscellaneous.K6xF_MCG`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Miscellaneous.k6xF_MCG({ $at: 0x..., ... })
```

---

### `Miscellaneous.K6xF_RNG`

Full name: `Antmicro.Renode.Peripherals.Miscellaneous.K6xF_RNG`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Miscellaneous.k6xF_RNG({ $at: 0x..., ... })
```

---

### `Miscellaneous.K6xF_SIM`

Full name: `Antmicro.Renode.Peripherals.Miscellaneous.K6xF_SIM`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Miscellaneous.k6xF_SIM({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `uniqueIdHigh` | `number` | optional |
| `uniqueIdMidHigh` | `number` | optional |
| `uniqueIdMidLow` | `number` | optional |
| `uniqueIdLow` | `number` | optional |

---

### `Miscellaneous.LED`

Full name: `Antmicro.Renode.Peripherals.Miscellaneous.LED`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Miscellaneous.LED({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `invert` | `boolean` | optional |

---

### `Miscellaneous.LiteX_MMCM`

Full name: `Antmicro.Renode.Peripherals.Miscellaneous.LiteX_MMCM`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Miscellaneous.liteX_MMCM({ $at: 0x..., ... })
```

---

### `Miscellaneous.LiteX_MMCM_CSR32`

Full name: `Antmicro.Renode.Peripherals.Miscellaneous.LiteX_MMCM_CSR32`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Miscellaneous.liteX_MMCM_CSR32({ $at: 0x..., ... })
```

---

### `Miscellaneous.LiteX_SoC_Controller`

Full name: `Antmicro.Renode.Peripherals.Miscellaneous.LiteX_SoC_Controller`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Miscellaneous.liteX_SoC_Controller({ $at: 0x..., ... })
```

---

### `Miscellaneous.LiteX_SoC_Controller_CSR32`

Full name: `Antmicro.Renode.Peripherals.Miscellaneous.LiteX_SoC_Controller_CSR32`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Miscellaneous.liteX_SoC_Controller_CSR32({ $at: 0x..., ... })
```

---

### `Miscellaneous.LogicGate`

Full name: `Antmicro.Renode.Peripherals.Miscellaneous.LogicGate`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Miscellaneous.logicGate({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `mode` | `"And" \| "Or" \| "Xor"` | **required** |
| `invertedOutput` | `boolean` | optional |
| `invertedA` | `boolean` | optional |
| `invertedB` | `boolean` | optional |

---

### `Miscellaneous.LPC_Clock0`

Full name: `Antmicro.Renode.Peripherals.Miscellaneous.LPC_Clock0`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Miscellaneous.LPC_Clock0({ $at: 0x..., ... })
```

---

### `Miscellaneous.MAX32650_GCR`

Full name: `Antmicro.Renode.Peripherals.Miscellaneous.MAX32650_GCR`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Miscellaneous.MAX32650_GCR({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `nvic` | `string (peripheral ref)` | **required** |

---

### `Miscellaneous.MAX32650_PWRSEQ`

Full name: `Antmicro.Renode.Peripherals.Miscellaneous.MAX32650_PWRSEQ`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Miscellaneous.MAX32650_PWRSEQ({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `rtc` | `string (peripheral ref)` | **required** |

---

### `Miscellaneous.MAX32650_TPU`

Full name: `Antmicro.Renode.Peripherals.Miscellaneous.MAX32650_TPU`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Miscellaneous.MAX32650_TPU({ $at: 0x..., ... })
```

---

### `Miscellaneous.MPFS_DDRMock`

Full name: `Antmicro.Renode.Peripherals.Miscellaneous.MPFS_DDRMock`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Miscellaneous.MPFS_DDRMock({ $at: 0x..., ... })
```

---

### `Miscellaneous.MPFS_Sysreg`

Full name: `Antmicro.Renode.Peripherals.Miscellaneous.MPFS_Sysreg`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Miscellaneous.MPFS_Sysreg({ $at: 0x..., ... })
```

---

### `Miscellaneous.MPFS_SystemServices`

Full name: `Antmicro.Renode.Peripherals.Miscellaneous.MPFS_SystemServices`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Miscellaneous.MPFS_SystemServices({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `flashMemory` | `string (peripheral ref)` | **required** |
| `mailboxMemory` | `string (peripheral ref)` | **required** |

---

### `Miscellaneous.MSP430F2XXX_MPY`

Full name: `Antmicro.Renode.Peripherals.Miscellaneous.MSP430F2XXX_MPY`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Miscellaneous.MSP430F2XXX_MPY({ $at: 0x..., ... })
```

---

### `Miscellaneous.NPCX_HFCG`

Full name: `Antmicro.Renode.Peripherals.Miscellaneous.NPCX_HFCG`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Miscellaneous.NPCX_HFCG({ $at: 0x..., ... })
```

---

### `Miscellaneous.NPCX_LFCG`

Full name: `Antmicro.Renode.Peripherals.Miscellaneous.NPCX_LFCG`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Miscellaneous.NPCX_LFCG({ $at: 0x..., ... })
```

---

### `Miscellaneous.NRF_Bellboard`

Full name: `Antmicro.Renode.Peripherals.Miscellaneous.NRF_Bellboard`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Miscellaneous.NRF_Bellboard({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `numberOfEvents` | `number` | optional |

---

### `Miscellaneous.NRF_CLOCK`

Full name: `Antmicro.Renode.Peripherals.Miscellaneous.NRF_CLOCK`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Miscellaneous.NRF_CLOCK({ $at: 0x..., ... })
```

---

### `Miscellaneous.NRF_SharedMemory`

Full name: `Antmicro.Renode.Peripherals.Miscellaneous.NRF_SharedMemory`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Miscellaneous.NRF_SharedMemory({ $at: 0x..., ... })
```

---

### `Miscellaneous.NRF_USBREG`

Full name: `Antmicro.Renode.Peripherals.Miscellaneous.NRF_USBREG`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Miscellaneous.NRF_USBREG({ $at: 0x..., ... })
```

---

### `Miscellaneous.NRF_VPREventInterface`

Full name: `Antmicro.Renode.Peripherals.Miscellaneous.NRF_VPREventInterface`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Miscellaneous.NRF_VPREventInterface({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `numberOfEvents` | `number` | optional |

---

### `Miscellaneous.NRF52840_ECB`

Full name: `Antmicro.Renode.Peripherals.Miscellaneous.NRF52840_ECB`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Miscellaneous.NRF52840_ECB({ $at: 0x..., ... })
```

---

### `Miscellaneous.NRF52840_EGU`

Full name: `Antmicro.Renode.Peripherals.Miscellaneous.NRF52840_EGU`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Miscellaneous.NRF52840_EGU({ $at: 0x..., ... })
```

---

### `Miscellaneous.NRF52840_PPI`

Full name: `Antmicro.Renode.Peripherals.Miscellaneous.NRF52840_PPI`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Miscellaneous.NRF52840_PPI({ $at: 0x..., ... })
```

---

### `Miscellaneous.NRF52840_RNG`

Full name: `Antmicro.Renode.Peripherals.Miscellaneous.NRF52840_RNG`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Miscellaneous.NRF52840_RNG({ $at: 0x..., ... })
```

---

### `Miscellaneous.NRF54L_CLOCK`

Full name: `Antmicro.Renode.Peripherals.Miscellaneous.NRF54L_CLOCK`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Miscellaneous.NRF54L_CLOCK({ $at: 0x..., ... })
```

---

### `Miscellaneous.OpenTitan_AES`

Full name: `Antmicro.Renode.Peripherals.Miscellaneous.OpenTitan_AES`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Miscellaneous.openTitan_AES({ $at: 0x..., ... })
```

---

### `Miscellaneous.OpenTitan_AlertHandler`

Full name: `Antmicro.Renode.Peripherals.Miscellaneous.OpenTitan_AlertHandler`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Miscellaneous.openTitan_AlertHandler({ $at: 0x..., ... })
```

---

### `Miscellaneous.OpenTitan_BigNumberAccelerator`

Full name: `Antmicro.Renode.Peripherals.Miscellaneous.OpenTitan_BigNumberAccelerator`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Miscellaneous.openTitan_BigNumberAccelerator({ $at: 0x..., ... })
```

---

### `Miscellaneous.OpenTitan_ClockManager`

Full name: `Antmicro.Renode.Peripherals.Miscellaneous.OpenTitan_ClockManager`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Miscellaneous.openTitan_ClockManager({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `otbn` | `string (peripheral ref)` | **required** |

---

### `Miscellaneous.OpenTitan_CSRNG`

Full name: `Antmicro.Renode.Peripherals.Miscellaneous.OpenTitan_CSRNG`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Miscellaneous.openTitan_CSRNG({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `entropySource` | `string (peripheral ref)` | **required** |

---

### `Miscellaneous.OpenTitan_EntropyDistributionNetwork`

Full name: `Antmicro.Renode.Peripherals.Miscellaneous.OpenTitan_EntropyDistributionNetwork`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Miscellaneous.openTitan_EntropyDistributionNetwork({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `cryptoRandomGenerator` | `string (peripheral ref)` | **required** |

---

### `Miscellaneous.OpenTitan_EntropySource`

Full name: `Antmicro.Renode.Peripherals.Miscellaneous.OpenTitan_EntropySource`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Miscellaneous.openTitan_EntropySource({ $at: 0x..., ... })
```

---

### `Miscellaneous.OpenTitan_HMAC`

Full name: `Antmicro.Renode.Peripherals.Miscellaneous.OpenTitan_HMAC`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Miscellaneous.openTitan_HMAC({ $at: 0x..., ... })
```

---

### `Miscellaneous.OpenTitan_KeyManager`

Full name: `Antmicro.Renode.Peripherals.Miscellaneous.OpenTitan_KeyManager`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Miscellaneous.openTitan_KeyManager({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `romController` | `string (peripheral ref)` | **required** |
| `deviceId` | `string` | **required** |
| `lifeCycleDiversificationConstant` | `string` | **required** |
| `creatorKey` | `string` | **required** |
| `ownerKey` | `string` | **required** |
| `rootKey` | `string` | **required** |
| `softOutputSeed` | `string` | **required** |
| `hardOutputSeed` | `string` | **required** |
| `destinationNoneSeed` | `string` | **required** |
| `destinationAesSeed` | `string` | **required** |
| `destinationOtbnSeed` | `string` | **required** |
| `destinationKmacSeed` | `string` | **required** |
| `revisionSeed` | `string` | **required** |
| `creatorIdentitySeed` | `string` | **required** |
| `ownerIntermediateIdentitySeed` | `string` | **required** |
| `ownerIdentitySeed` | `string` | **required** |
| `kmacEnableMasking` | `boolean` | optional |
| `randomSeed` | `number` | optional |
| `kmac` | `string (peripheral ref)` | optional |
| `aes` | `string (peripheral ref)` | optional |
| `otbn` | `string (peripheral ref)` | optional |

---

### `Miscellaneous.OpenTitan_KMAC`

Full name: `Antmicro.Renode.Peripherals.Miscellaneous.OpenTitan_KMAC`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Miscellaneous.openTitan_KMAC({ $at: 0x..., ... })
```

---

### `Miscellaneous.OpenTitan_LifeCycleController`

Full name: `Antmicro.Renode.Peripherals.Miscellaneous.OpenTitan_LifeCycleController`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Miscellaneous.openTitan_LifeCycleController({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `resetManager` | `string (peripheral ref)` | **required** |
| `otpController` | `string (peripheral ref)` | **required** |

---

### `Miscellaneous.OpenTitan_OneTimeProgrammableMemoryController`

Full name: `Antmicro.Renode.Peripherals.Miscellaneous.OpenTitan_OneTimeProgrammableMemoryController`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Miscellaneous.openTitan_OneTimeProgrammableMemoryController({ $at: 0x..., ... })
```

---

### `Miscellaneous.OpenTitan_PowerManager`

Full name: `Antmicro.Renode.Peripherals.Miscellaneous.OpenTitan_PowerManager`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Miscellaneous.openTitan_PowerManager({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `resetManager` | `string (peripheral ref)` | **required** |

---

### `Miscellaneous.OpenTitan_ResetManager`

Full name: `Antmicro.Renode.Peripherals.Miscellaneous.OpenTitan_ResetManager`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Miscellaneous.openTitan_ResetManager({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `resetPC` | `number` | **required** |

---

### `Miscellaneous.OpenTitan_SystemResetControl`

Full name: `Antmicro.Renode.Peripherals.Miscellaneous.OpenTitan_SystemResetControl`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Miscellaneous.openTitan_SystemResetControl({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `resetManager` | `string (peripheral ref)` | **required** |

---

### `Miscellaneous.OpenTitan_SystemResetControl+DurationTimer`

Full name: `Antmicro.Renode.Peripherals.Miscellaneous.OpenTitan_SystemResetControl+DurationTimer`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Miscellaneous.openTitan_SystemResetControl+DurationTimer({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `clockSource` | `string \| number \| boolean` | **required** |
| `frequency` | `number` | **required** |
| `owner` | `string (peripheral ref)` | **required** |
| `name` | `string` | **required** |

---

### `Miscellaneous.OpenTitan_VerilatorSwTestStatus`

Full name: `Antmicro.Renode.Peripherals.Miscellaneous.OpenTitan_VerilatorSwTestStatus`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Miscellaneous.openTitan_VerilatorSwTestStatus({ $at: 0x..., ... })
```

---

### `Miscellaneous.Quark_SystemControlSubsystem`

Full name: `Antmicro.Renode.Peripherals.Miscellaneous.Quark_SystemControlSubsystem`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Miscellaneous.quark_SystemControlSubsystem({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `gpioPort` | `string (peripheral ref)` | **required** |

---

### `Miscellaneous.RenesasDA14_ClockGenerationController`

Full name: `Antmicro.Renode.Peripherals.Miscellaneous.RenesasDA14_ClockGenerationController`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Miscellaneous.renesasDA14_ClockGenerationController({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `xtal32m` | `string (peripheral ref)` | **required** |
| `rom` | `string (peripheral ref)` | **required** |
| `eflashDataText` | `string (peripheral ref)` | **required** |

---

### `Miscellaneous.RenesasDA14_GeneralPurposeRegisters`

Full name: `Antmicro.Renode.Peripherals.Miscellaneous.RenesasDA14_GeneralPurposeRegisters`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Miscellaneous.renesasDA14_GeneralPurposeRegisters({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `sysWatchdog` | `string (peripheral ref)` | **required** |

---

### `Miscellaneous.RenesasDA14_XTAL32MRegisters`

Full name: `Antmicro.Renode.Peripherals.Miscellaneous.RenesasDA14_XTAL32MRegisters`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Miscellaneous.renesasDA14_XTAL32MRegisters({ $at: 0x..., ... })
```

---

### `Miscellaneous.RenesasRZG_CPG_SYSC`

Full name: `Antmicro.Renode.Peripherals.Miscellaneous.RenesasRZG_CPG_SYSC`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Miscellaneous.renesasRZG_CPG_SYSC({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `cpu0` | `string (peripheral ref)` | optional |
| `cpu1` | `string (peripheral ref)` | optional |
| `cpu_m33` | `string (peripheral ref)` | optional |

---

### `Miscellaneous.RenesasRZG_MHU`

Full name: `Antmicro.Renode.Peripherals.Miscellaneous.RenesasRZG_MHU`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Miscellaneous.renesasRZG_MHU({ $at: 0x..., ... })
```

---

### `Miscellaneous.ResetPin`

Full name: `Antmicro.Renode.Peripherals.Miscellaneous.ResetPin`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Miscellaneous.resetPin({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `invert` | `boolean` | optional |

---

### `Miscellaneous.RiscVExternalPMP`

Full name: `Antmicro.Renode.Peripherals.Miscellaneous.RiscVExternalPMP`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Miscellaneous.riscVExternalPMP({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `numberOfPMPEntries` | `number` | optional |

---

### `Miscellaneous.S32K_SCG`

Full name: `Antmicro.Renode.Peripherals.Miscellaneous.S32K_SCG`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Miscellaneous.s32K_SCG({ $at: 0x..., ... })
```

---

### `Miscellaneous.S32K3XX_FlexIO`

Full name: `Antmicro.Renode.Peripherals.Miscellaneous.S32K3XX_FlexIO`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Miscellaneous.s32K3XX_FlexIO({ $at: 0x..., ... })
```

---

### `Miscellaneous.S32K3XX_FlexIO_SENT`

Full name: `Antmicro.Renode.Peripherals.Miscellaneous.S32K3XX_FlexIO_SENT`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Miscellaneous.s32K3XX_FlexIO_SENT({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `timerId` | `number` | **required** |
| `frequency` | `number` | optional |

---

### `Miscellaneous.S32K3XX_FlexIO_UART`

Full name: `Antmicro.Renode.Peripherals.Miscellaneous.S32K3XX_FlexIO_UART`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Miscellaneous.s32K3XX_FlexIO_UART({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `rxShifterId` | `number` | optional |
| `txShifterId` | `number` | optional |

---

### `Miscellaneous.S32K3XX_MiscellaneousSystemControlModule`

Full name: `Antmicro.Renode.Peripherals.Miscellaneous.S32K3XX_MiscellaneousSystemControlModule`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Miscellaneous.s32K3XX_MiscellaneousSystemControlModule({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `nvics` | `string \| number \| boolean` | **required** |

---

### `Miscellaneous.S32K3XX_SystemIntegrationUnitLite2`

Full name: `Antmicro.Renode.Peripherals.Miscellaneous.S32K3XX_SystemIntegrationUnitLite2`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Miscellaneous.s32K3XX_SystemIntegrationUnitLite2({ $at: 0x..., ... })
```

---

### `Miscellaneous.S32KXX_ModeEntryModule`

Full name: `Antmicro.Renode.Peripherals.Miscellaneous.S32KXX_ModeEntryModule`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Miscellaneous.s32KXX_ModeEntryModule({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `cores` | `string (peripheral ref)` | **required** |

---

### `Miscellaneous.SAM_TRNG`

Full name: `Antmicro.Renode.Peripherals.Miscellaneous.SAM_TRNG`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Miscellaneous.SAM_TRNG({ $at: 0x..., ... })
```

---

### `Miscellaneous.SAM4S_DACC`

Full name: `Antmicro.Renode.Peripherals.Miscellaneous.SAM4S_DACC`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Miscellaneous.SAM4S_DACC({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `referenceVoltage` | `string \| number \| boolean` | optional |

---

### `Miscellaneous.SAM4S_EEFC`

Full name: `Antmicro.Renode.Peripherals.Miscellaneous.SAM4S_EEFC`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Miscellaneous.SAM4S_EEFC({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `underlyingMemory` | `string (peripheral ref)` | **required** |
| `flashIdentifier` | `number` | optional |
| `pageSize` | `number` | optional |
| `sectorSize` | `number` | optional |
| `lockRegionSize` | `number` | optional |

---

### `Miscellaneous.SAM4S_RSTC`

Full name: `Antmicro.Renode.Peripherals.Miscellaneous.SAM4S_RSTC`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Miscellaneous.SAM4S_RSTC({ $at: 0x..., ... })
```

---

### `Miscellaneous.SEMA4`

Full name: `Antmicro.Renode.Peripherals.Miscellaneous.SEMA4`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Miscellaneous.SEMA4({ $at: 0x..., ... })
```

---

### `Miscellaneous.SevenSegmentsDisplay`

Full name: `Antmicro.Renode.Peripherals.Miscellaneous.SevenSegmentsDisplay`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Miscellaneous.sevenSegmentsDisplay({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `digitsCount` | `number` | optional |
| `invertSegments` | `boolean` | optional |
| `invertDigits` | `boolean` | optional |

---

### `Miscellaneous.SiLabs.EFM32xG1xBDeviceInformation`

Full name: `Antmicro.Renode.Peripherals.Miscellaneous.SiLabs.EFM32xG1xBDeviceInformation`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Miscellaneous.siLabs.EFM32xG1xBDeviceInformation({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `deviceFamily` | `"EFR32MG1P" \| "EFR32MG1B" \| "EFR32MG1V" \| "EFR32BG1P" \| "EFR32BG1B" \| "EFR32BG1V" \| "EFR32FG1P" \| "EFR32FG1B" \| "EFR32FG1V" \| "EFR32MG12P" \| "EFR32MG12B" \| "EFR32MG12V" \| "EFR32BG12P" \| "EFR32BG12B" \| "EFR32BG12V" \| "EFR32FG12P" \| "EFR32FG12B" \| "EFR32FG12V" \| "EFR32MG13P" \| "EFR32MG13B" \| "EFR32MG13V" \| "EFR32BG13P" \| "EFR32BG13B" \| "EFR32BG13V" \| "EFR32FG13P" \| "EFR32FG13B" \| "EFR32FG13V" \| "EFR32MG14P" \| "EFR32MG14B" \| "EFR32MG14V" \| "EFR32BG14P" \| "EFR32BG14B" \| "EFR32BG14V" \| "EFR32FG14P" \| "EFR32FG14B" \| "EFR32FG14V" \| "EFM32G" \| "EFM32GG" \| "EFM32TG" \| "EFM32LG" \| "EFM32WG" \| "EFM32ZG" \| "EFM32HG" \| "EFM32PG1B" \| "EFM32JG1B" \| "EFM32PG12B" \| "EFM32JG12B" \| "EFM32GG11B" \| "EFM32TG11B" \| "EZR32LG" \| "EZR32WG" \| "EZR32HG" \| "EFR32MG24" \| "EFR32MG26"` | **required** |
| `deviceNumber` | `number` | **required** |
| `flashDevice` | `string (peripheral ref)` | **required** |
| `sramDevice` | `string (peripheral ref)` | **required** |
| `productRevision` | `number` | optional |

---

### `Miscellaneous.SiLabs.EFM32xGDeviceInformation`

Full name: `Antmicro.Renode.Peripherals.Miscellaneous.SiLabs.EFM32xGDeviceInformation`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Miscellaneous.siLabs.EFM32xGDeviceInformation({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `deviceFamily` | `"EFR32MG1P" \| "EFR32MG1B" \| "EFR32MG1V" \| "EFR32BG1P" \| "EFR32BG1B" \| "EFR32BG1V" \| "EFR32FG1P" \| "EFR32FG1B" \| "EFR32FG1V" \| "EFR32MG12P" \| "EFR32MG12B" \| "EFR32MG12V" \| "EFR32BG12P" \| "EFR32BG12B" \| "EFR32BG12V" \| "EFR32FG12P" \| "EFR32FG12B" \| "EFR32FG12V" \| "EFR32MG13P" \| "EFR32MG13B" \| "EFR32MG13V" \| "EFR32BG13P" \| "EFR32BG13B" \| "EFR32BG13V" \| "EFR32FG13P" \| "EFR32FG13B" \| "EFR32FG13V" \| "EFR32MG14P" \| "EFR32MG14B" \| "EFR32MG14V" \| "EFR32BG14P" \| "EFR32BG14B" \| "EFR32BG14V" \| "EFR32FG14P" \| "EFR32FG14B" \| "EFR32FG14V" \| "EFM32G" \| "EFM32GG" \| "EFM32TG" \| "EFM32LG" \| "EFM32WG" \| "EFM32ZG" \| "EFM32HG" \| "EFM32PG1B" \| "EFM32JG1B" \| "EFM32PG12B" \| "EFM32JG12B" \| "EFM32GG11B" \| "EFM32TG11B" \| "EZR32LG" \| "EZR32WG" \| "EZR32HG" \| "EFR32MG24" \| "EFR32MG26"` | **required** |
| `deviceNumber` | `number` | **required** |
| `flashDevice` | `string (peripheral ref)` | **required** |
| `sramDevice` | `string (peripheral ref)` | **required** |
| `productRevision` | `number` | optional |

---

### `Miscellaneous.SiLabs.EFR32_GPCRC`

Full name: `Antmicro.Renode.Peripherals.Miscellaneous.SiLabs.EFR32_GPCRC`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Miscellaneous.siLabs.EFR32_GPCRC({ $at: 0x..., ... })
```

---

### `Miscellaneous.SiLabs.EFR32DeviceInformation`

Full name: `Antmicro.Renode.Peripherals.Miscellaneous.SiLabs.EFR32DeviceInformation`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Miscellaneous.siLabs.EFR32DeviceInformation({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `deviceFamily` | `"EFR32MG1P" \| "EFR32MG1B" \| "EFR32MG1V" \| "EFR32BG1P" \| "EFR32BG1B" \| "EFR32BG1V" \| "EFR32FG1P" \| "EFR32FG1B" \| "EFR32FG1V" \| "EFR32MG12P" \| "EFR32MG12B" \| "EFR32MG12V" \| "EFR32BG12P" \| "EFR32BG12B" \| "EFR32BG12V" \| "EFR32FG12P" \| "EFR32FG12B" \| "EFR32FG12V" \| "EFR32MG13P" \| "EFR32MG13B" \| "EFR32MG13V" \| "EFR32BG13P" \| "EFR32BG13B" \| "EFR32BG13V" \| "EFR32FG13P" \| "EFR32FG13B" \| "EFR32FG13V" \| "EFR32MG14P" \| "EFR32MG14B" \| "EFR32MG14V" \| "EFR32BG14P" \| "EFR32BG14B" \| "EFR32BG14V" \| "EFR32FG14P" \| "EFR32FG14B" \| "EFR32FG14V" \| "EFM32G" \| "EFM32GG" \| "EFM32TG" \| "EFM32LG" \| "EFM32WG" \| "EFM32ZG" \| "EFM32HG" \| "EFM32PG1B" \| "EFM32JG1B" \| "EFM32PG12B" \| "EFM32JG12B" \| "EFM32GG11B" \| "EFM32TG11B" \| "EZR32LG" \| "EZR32WG" \| "EZR32HG" \| "EFR32MG24" \| "EFR32MG26"` | **required** |
| `deviceNumber` | `number` | **required** |
| `flashDevice` | `string (peripheral ref)` | **required** |
| `sramDevice` | `string (peripheral ref)` | **required** |
| `productRevision` | `number` | optional |

---

### `Miscellaneous.SiLabs.EFR32xG12DeviceInformation`

Full name: `Antmicro.Renode.Peripherals.Miscellaneous.SiLabs.EFR32xG12DeviceInformation`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Miscellaneous.siLabs.EFR32xG12DeviceInformation({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `deviceFamily` | `"EFR32MG1P" \| "EFR32MG1B" \| "EFR32MG1V" \| "EFR32BG1P" \| "EFR32BG1B" \| "EFR32BG1V" \| "EFR32FG1P" \| "EFR32FG1B" \| "EFR32FG1V" \| "EFR32MG12P" \| "EFR32MG12B" \| "EFR32MG12V" \| "EFR32BG12P" \| "EFR32BG12B" \| "EFR32BG12V" \| "EFR32FG12P" \| "EFR32FG12B" \| "EFR32FG12V" \| "EFR32MG13P" \| "EFR32MG13B" \| "EFR32MG13V" \| "EFR32BG13P" \| "EFR32BG13B" \| "EFR32BG13V" \| "EFR32FG13P" \| "EFR32FG13B" \| "EFR32FG13V" \| "EFR32MG14P" \| "EFR32MG14B" \| "EFR32MG14V" \| "EFR32BG14P" \| "EFR32BG14B" \| "EFR32BG14V" \| "EFR32FG14P" \| "EFR32FG14B" \| "EFR32FG14V" \| "EFM32G" \| "EFM32GG" \| "EFM32TG" \| "EFM32LG" \| "EFM32WG" \| "EFM32ZG" \| "EFM32HG" \| "EFM32PG1B" \| "EFM32JG1B" \| "EFM32PG12B" \| "EFM32JG12B" \| "EFM32GG11B" \| "EFM32TG11B" \| "EZR32LG" \| "EZR32WG" \| "EZR32HG" \| "EFR32MG24" \| "EFR32MG26"` | **required** |
| `deviceNumber` | `number` | **required** |
| `flashDevice` | `string (peripheral ref)` | **required** |
| `sramDevice` | `string (peripheral ref)` | **required** |
| `productRevision` | `number` | optional |

---

### `Miscellaneous.SiLabs.EFR32xG2_AES_1`

Full name: `Antmicro.Renode.Peripherals.Miscellaneous.SiLabs.EFR32xG2_AES_1`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Miscellaneous.siLabs.EFR32xG2_AES_1({ $at: 0x..., ... })
```

---

### `Miscellaneous.SiLabs.EFR32xG2_CMU_3`

Full name: `Antmicro.Renode.Peripherals.Miscellaneous.SiLabs.EFR32xG2_CMU_3`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Miscellaneous.siLabs.EFR32xG2_CMU_3({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `hfxo` | `string (peripheral ref)` | **required** |
| `dpll` | `string (peripheral ref)` | optional |

---

### `Miscellaneous.SiLabs.EFR32xG2_DCDC_2`

Full name: `Antmicro.Renode.Peripherals.Miscellaneous.SiLabs.EFR32xG2_DCDC_2`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Miscellaneous.siLabs.EFR32xG2_DCDC_2({ $at: 0x..., ... })
```

---

### `Miscellaneous.SiLabs.EFR32xG2_DeviceInformation`

Full name: `Antmicro.Renode.Peripherals.Miscellaneous.SiLabs.EFR32xG2_DeviceInformation`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Miscellaneous.siLabs.EFR32xG2_DeviceInformation({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `deviceFamily` | `"EFR32MG1P" \| "EFR32MG1B" \| "EFR32MG1V" \| "EFR32BG1P" \| "EFR32BG1B" \| "EFR32BG1V" \| "EFR32FG1P" \| "EFR32FG1B" \| "EFR32FG1V" \| "EFR32MG12P" \| "EFR32MG12B" \| "EFR32MG12V" \| "EFR32BG12P" \| "EFR32BG12B" \| "EFR32BG12V" \| "EFR32FG12P" \| "EFR32FG12B" \| "EFR32FG12V" \| "EFR32MG13P" \| "EFR32MG13B" \| "EFR32MG13V" \| "EFR32BG13P" \| "EFR32BG13B" \| "EFR32BG13V" \| "EFR32FG13P" \| "EFR32FG13B" \| "EFR32FG13V" \| "EFR32MG14P" \| "EFR32MG14B" \| "EFR32MG14V" \| "EFR32BG14P" \| "EFR32BG14B" \| "EFR32BG14V" \| "EFR32FG14P" \| "EFR32FG14B" \| "EFR32FG14V" \| "EFM32G" \| "EFM32GG" \| "EFM32TG" \| "EFM32LG" \| "EFM32WG" \| "EFM32ZG" \| "EFM32HG" \| "EFM32PG1B" \| "EFM32JG1B" \| "EFM32PG12B" \| "EFM32JG12B" \| "EFM32GG11B" \| "EFM32TG11B" \| "EZR32LG" \| "EZR32WG" \| "EZR32HG" \| "EFR32MG24" \| "EFR32MG26"` | **required** |
| `deviceNumber` | `number` | **required** |
| `flashDevice` | `string (peripheral ref)` | **required** |
| `sramDevice` | `string (peripheral ref)` | **required** |
| `productRevision` | `number` | optional |

---

### `Miscellaneous.SiLabs.EFR32xG2_DPLL_1`

Full name: `Antmicro.Renode.Peripherals.Miscellaneous.SiLabs.EFR32xG2_DPLL_1`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Miscellaneous.siLabs.EFR32xG2_DPLL_1({ $at: 0x..., ... })
```

---

### `Miscellaneous.SiLabs.EFR32xG2_EMU_3`

Full name: `Antmicro.Renode.Peripherals.Miscellaneous.SiLabs.EFR32xG2_EMU_3`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Miscellaneous.siLabs.EFR32xG2_EMU_3({ $at: 0x..., ... })
```

---

### `Miscellaneous.SiLabs.EFR32xG2_GPCRC`

Full name: `Antmicro.Renode.Peripherals.Miscellaneous.SiLabs.EFR32xG2_GPCRC`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Miscellaneous.siLabs.EFR32xG2_GPCRC({ $at: 0x..., ... })
```

---

### `Miscellaneous.SiLabs.EFR32xG2_HFRCO_2`

Full name: `Antmicro.Renode.Peripherals.Miscellaneous.SiLabs.EFR32xG2_HFRCO_2`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Miscellaneous.siLabs.EFR32xG2_HFRCO_2({ $at: 0x..., ... })
```

---

### `Miscellaneous.SiLabs.EFR32xG2_HFXO_2`

Full name: `Antmicro.Renode.Peripherals.Miscellaneous.SiLabs.EFR32xG2_HFXO_2`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Miscellaneous.siLabs.EFR32xG2_HFXO_2({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `startupDelayTicks` | `number` | **required** |

---

### `Miscellaneous.SiLabs.EFR32xG2_HFXO_3`

Full name: `Antmicro.Renode.Peripherals.Miscellaneous.SiLabs.EFR32xG2_HFXO_3`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Miscellaneous.siLabs.EFR32xG2_HFXO_3({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `startupDelayTicks` | `number` | **required** |

---

### `Miscellaneous.SiLabs.EFR32xG2_LFRCO_2`

Full name: `Antmicro.Renode.Peripherals.Miscellaneous.SiLabs.EFR32xG2_LFRCO_2`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Miscellaneous.siLabs.EFR32xG2_LFRCO_2({ $at: 0x..., ... })
```

---

### `Miscellaneous.SiLabs.EFR32xG2_LFXO_1`

Full name: `Antmicro.Renode.Peripherals.Miscellaneous.SiLabs.EFR32xG2_LFXO_1`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Miscellaneous.siLabs.EFR32xG2_LFXO_1({ $at: 0x..., ... })
```

---

### `Miscellaneous.SiLabs.EFR32xG2_LockbitsData`

Full name: `Antmicro.Renode.Peripherals.Miscellaneous.SiLabs.EFR32xG2_LockbitsData`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Miscellaneous.siLabs.EFR32xG2_LockbitsData({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `size` | `number` | **required** |
| `cbkeDataCertificate` | `string` | optional |
| `cbkeDataCaPublicKey` | `string` | optional |
| `cbkeDataPrivateKey` | `string` | optional |
| `cbkeDataFlags` | `string` | optional |
| `securityConfig` | `string` | optional |
| `installationCodeFlags` | `string` | optional |
| `installationCodeValue` | `string` | optional |
| `installationCodeCrc` | `string` | optional |
| `secureBootloaderKey` | `string` | optional |
| `cbke283k1DataCertificate` | `string` | optional |
| `cbke283k1DataCaPublicKey` | `string` | optional |
| `cbke283k1DataPrivateKey` | `string` | optional |
| `ccbke283k1DataFlags` | `string` | optional |
| `bootloadAesKey` | `string` | optional |
| `signedBootloaderKeyX` | `string` | optional |
| `signedBootloaderKeyY` | `string` | optional |
| `threadJoinKey` | `string` | optional |
| `threadJoinKeyLength` | `number` | optional |
| `nvm3CryptoKey` | `string` | optional |
| `zWavePrivateKey` | `string` | optional |
| `zWavePublicKey` | `string` | optional |
| `zWaveQrCode` | `string` | optional |
| `zWaveInitialized` | `string` | optional |
| `zWaveQrCodeExtended` | `string` | optional |

---

### `Miscellaneous.SiLabs.EFR32xG2_MSC_3`

Full name: `Antmicro.Renode.Peripherals.Miscellaneous.SiLabs.EFR32xG2_MSC_3`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Miscellaneous.siLabs.EFR32xG2_MSC_3({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `cpu` | `string (peripheral ref)` | **required** |
| `flashSize` | `number` | **required** |
| `flashPageSize` | `number` | **required** |

---

### `Miscellaneous.SiLabs.EFR32xG2_PRS_3`

Full name: `Antmicro.Renode.Peripherals.Miscellaneous.SiLabs.EFR32xG2_PRS_3`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Miscellaneous.siLabs.EFR32xG2_PRS_3({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `hfxo` | `string (peripheral ref)` | **required** |
| `sysrtc` | `string (peripheral ref)` | **required** |

---

### `Miscellaneous.SiLabs.EFR32xG2_RNGCTRL`

Full name: `Antmicro.Renode.Peripherals.Miscellaneous.SiLabs.EFR32xG2_RNGCTRL`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Miscellaneous.siLabs.EFR32xG2_RNGCTRL({ $at: 0x..., ... })
```

---

### `Miscellaneous.SiLabs.EFR32xG2_SEMAILBOX_1`

Full name: `Antmicro.Renode.Peripherals.Miscellaneous.SiLabs.EFR32xG2_SEMAILBOX_1`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Miscellaneous.siLabs.EFR32xG2_SEMAILBOX_1({ $at: 0x..., ... })
```

---

### `Miscellaneous.SiLabs.EFR32xG2_SLAB_ITM`

Full name: `Antmicro.Renode.Peripherals.Miscellaneous.SiLabs.EFR32xG2_SLAB_ITM`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Miscellaneous.siLabs.EFR32xG2_SLAB_ITM({ $at: 0x..., ... })
```

---

### `Miscellaneous.SiLabs.EFR32xG2_SMU_1`

Full name: `Antmicro.Renode.Peripherals.Miscellaneous.SiLabs.EFR32xG2_SMU_1`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Miscellaneous.siLabs.EFR32xG2_SMU_1({ $at: 0x..., ... })
```

---

### `Miscellaneous.SiLabs.EFR32xG2_SYSCFG_3`

Full name: `Antmicro.Renode.Peripherals.Miscellaneous.SiLabs.EFR32xG2_SYSCFG_3`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Miscellaneous.siLabs.EFR32xG2_SYSCFG_3({ $at: 0x..., ... })
```

---

### `Miscellaneous.SiLabs.EFR32xG2_SYSRTC_1`

Full name: `Antmicro.Renode.Peripherals.Miscellaneous.SiLabs.EFR32xG2_SYSRTC_1`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Miscellaneous.siLabs.EFR32xG2_SYSRTC_1({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `frequency` | `number` | **required** |

---

### `Miscellaneous.SiLabs.EFR32xG24_FlashUserData`

Full name: `Antmicro.Renode.Peripherals.Miscellaneous.SiLabs.EFR32xG24_FlashUserData`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Miscellaneous.siLabs.EFR32xG24_FlashUserData({ $at: 0x..., ... })
```

---

### `Miscellaneous.SiLabs.EZR32DeviceInformation`

Full name: `Antmicro.Renode.Peripherals.Miscellaneous.SiLabs.EZR32DeviceInformation`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Miscellaneous.siLabs.EZR32DeviceInformation({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `deviceFamily` | `"EFR32MG1P" \| "EFR32MG1B" \| "EFR32MG1V" \| "EFR32BG1P" \| "EFR32BG1B" \| "EFR32BG1V" \| "EFR32FG1P" \| "EFR32FG1B" \| "EFR32FG1V" \| "EFR32MG12P" \| "EFR32MG12B" \| "EFR32MG12V" \| "EFR32BG12P" \| "EFR32BG12B" \| "EFR32BG12V" \| "EFR32FG12P" \| "EFR32FG12B" \| "EFR32FG12V" \| "EFR32MG13P" \| "EFR32MG13B" \| "EFR32MG13V" \| "EFR32BG13P" \| "EFR32BG13B" \| "EFR32BG13V" \| "EFR32FG13P" \| "EFR32FG13B" \| "EFR32FG13V" \| "EFR32MG14P" \| "EFR32MG14B" \| "EFR32MG14V" \| "EFR32BG14P" \| "EFR32BG14B" \| "EFR32BG14V" \| "EFR32FG14P" \| "EFR32FG14B" \| "EFR32FG14V" \| "EFM32G" \| "EFM32GG" \| "EFM32TG" \| "EFM32LG" \| "EFM32WG" \| "EFM32ZG" \| "EFM32HG" \| "EFM32PG1B" \| "EFM32JG1B" \| "EFM32PG12B" \| "EFM32JG12B" \| "EFM32GG11B" \| "EFM32TG11B" \| "EZR32LG" \| "EZR32WG" \| "EZR32HG" \| "EFR32MG24" \| "EFR32MG26"` | **required** |
| `deviceNumber` | `number` | **required** |
| `flashDevice` | `string (peripheral ref)` | **required** |
| `sramDevice` | `string (peripheral ref)` | **required** |
| `productRevision` | `number` | optional |

---

### `Miscellaneous.STM32_DMAMUX`

Full name: `Antmicro.Renode.Peripherals.Miscellaneous.STM32_DMAMUX`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Miscellaneous.STM32_DMAMUX({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `numberOfOutputRequestChannels` | `number` | **required** |
| `numberOfRequestGeneratorChannels` | `number` | **required** |

---

### `Miscellaneous.STM32_PWR`

Full name: `Antmicro.Renode.Peripherals.Miscellaneous.STM32_PWR`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Miscellaneous.STM32_PWR({ $at: 0x..., ... })
```

---

### `Miscellaneous.STM32_SYSCFG`

Full name: `Antmicro.Renode.Peripherals.Miscellaneous.STM32_SYSCFG`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Miscellaneous.STM32_SYSCFG({ $at: 0x..., ... })
```

---

### `Miscellaneous.STM32_SYSCFG+InternalReceiver`

Full name: `Antmicro.Renode.Peripherals.Miscellaneous.STM32_SYSCFG+InternalReceiver`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Miscellaneous.STM32_SYSCFG+InternalReceiver({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `parent` | `string (peripheral ref)` | **required** |
| `portNumber` | `number` | **required** |

---

### `Miscellaneous.STM32F4_RCC`

Full name: `Antmicro.Renode.Peripherals.Miscellaneous.STM32F4_RCC`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Miscellaneous.STM32F4_RCC({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `rtcPeripheral` | `string (peripheral ref)` | **required** |

---

### `Miscellaneous.STM32F4_RNG`

Full name: `Antmicro.Renode.Peripherals.Miscellaneous.STM32F4_RNG`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Miscellaneous.STM32F4_RNG({ $at: 0x..., ... })
```

---

### `Miscellaneous.STM32H7_HardwareSemaphore`

Full name: `Antmicro.Renode.Peripherals.Miscellaneous.STM32H7_HardwareSemaphore`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Miscellaneous.STM32H7_HardwareSemaphore({ $at: 0x..., ... })
```

---

### `Miscellaneous.STM32H7_RCC`

Full name: `Antmicro.Renode.Peripherals.Miscellaneous.STM32H7_RCC`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Miscellaneous.STM32H7_RCC({ $at: 0x..., ... })
```

---

### `Miscellaneous.STM32L0_PWR`

Full name: `Antmicro.Renode.Peripherals.Miscellaneous.STM32L0_PWR`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Miscellaneous.STM32L0_PWR({ $at: 0x..., ... })
```

---

### `Miscellaneous.STM32L0_RCC`

Full name: `Antmicro.Renode.Peripherals.Miscellaneous.STM32L0_RCC`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Miscellaneous.STM32L0_RCC({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `rtc` | `string (peripheral ref)` | optional |
| `lptimer` | `string (peripheral ref)` | optional |
| `systick` | `string (peripheral ref)` | optional |
| `apbFrequency` | `number` | optional |
| `lsiFrequency` | `number` | optional |
| `lseFrequency` | `number` | optional |
| `hseFrequency` | `number` | optional |

---

### `Miscellaneous.STM32WBA_PWR`

Full name: `Antmicro.Renode.Peripherals.Miscellaneous.STM32WBA_PWR`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Miscellaneous.STM32WBA_PWR({ $at: 0x..., ... })
```

---

### `Miscellaneous.STM32WBA_RCC`

Full name: `Antmicro.Renode.Peripherals.Miscellaneous.STM32WBA_RCC`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Miscellaneous.STM32WBA_RCC({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `nvic` | `string (peripheral ref)` | optional |
| `lptim1` | `string (peripheral ref)` | optional |
| `lptim2` | `string (peripheral ref)` | optional |
| `lsiFrequency` | `number` | optional |
| `lseFrequency` | `number` | optional |
| `hseFrequency` | `number` | optional |

---

### `Miscellaneous.VirtIOMMIOConsole`

Full name: `Antmicro.Renode.Peripherals.Miscellaneous.VirtIOMMIOConsole`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Miscellaneous.virtIOMMIOConsole({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `virtioConsoleFeatureMultiport` | `boolean` | optional |

---

### `Miscellaneous.VirtIOMMIOEntropy`

Full name: `Antmicro.Renode.Peripherals.Miscellaneous.VirtIOMMIOEntropy`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Miscellaneous.virtIOMMIOEntropy({ $at: 0x..., ... })
```

---

### `Miscellaneous.WindowIOMMU`

Full name: `Antmicro.Renode.Peripherals.Miscellaneous.WindowIOMMU`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Miscellaneous.windowIOMMU({ $at: 0x..., ... })
```

---

### `Miscellaneous.Zynq7000_SystemLevelControlRegisters`

Full name: `Antmicro.Renode.Peripherals.Miscellaneous.Zynq7000_SystemLevelControlRegisters`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Miscellaneous.zynq7000_SystemLevelControlRegisters({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `cpu0` | `string (peripheral ref)` | **required** |
| `cpu1` | `string (peripheral ref)` | optional |

---

### `Miscellaneous.ZynqMP_IPI`

Full name: `Antmicro.Renode.Peripherals.Miscellaneous.ZynqMP_IPI`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Miscellaneous.zynqMP_IPI({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `mailbox` | `string (peripheral ref)` | **required** |

---

### `Miscellaneous.ZynqMP_PlatformManagementUnit`

Full name: `Antmicro.Renode.Peripherals.Miscellaneous.ZynqMP_PlatformManagementUnit`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Miscellaneous.zynqMP_PlatformManagementUnit({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `apus` | `string \| number \| boolean` | **required** |
| `rpus` | `string \| number \| boolean` | **required** |

---

## Mocks

### `Mocks.DummyI2CSlave`

Full name: `Antmicro.Renode.Peripherals.Mocks.DummyI2CSlave`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Mocks.dummyI2CSlave({ $at: 0x..., ... })
```

---

### `Mocks.DummySENTTransmitter`

Full name: `Antmicro.Renode.Peripherals.Mocks.DummySENTTransmitter`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Mocks.dummySENTTransmitter({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `tickPeriodMicroseconds` | `number` | **required** |

---

### `Mocks.DummySPISlave`

Full name: `Antmicro.Renode.Peripherals.Mocks.DummySPISlave`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Mocks.dummySPISlave({ $at: 0x..., ... })
```

---

### `Mocks.EchoI2CDevice`

Full name: `Antmicro.Renode.Peripherals.Mocks.EchoI2CDevice`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Mocks.echoI2CDevice({ $at: 0x..., ... })
```

---

### `Mocks.MockBytePeripheralWithoutTranslations`

Full name: `Antmicro.Renode.Peripherals.Mocks.MockBytePeripheralWithoutTranslations`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Mocks.mockBytePeripheralWithoutTranslations({ $at: 0x..., ... })
```

---

### `Mocks.MockDoubleWordPeripheralWithOnlyRegionReadMethod`

Full name: `Antmicro.Renode.Peripherals.Mocks.MockDoubleWordPeripheralWithOnlyRegionReadMethod`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Mocks.mockDoubleWordPeripheralWithOnlyRegionReadMethod({ $at: 0x..., ... })
```

---

### `Mocks.MockDoubleWordPeripheralWithoutTranslations`

Full name: `Antmicro.Renode.Peripherals.Mocks.MockDoubleWordPeripheralWithoutTranslations`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Mocks.mockDoubleWordPeripheralWithoutTranslations({ $at: 0x..., ... })
```

---

### `Mocks.MockQuadWordPeripheralWithoutTranslations`

Full name: `Antmicro.Renode.Peripherals.Mocks.MockQuadWordPeripheralWithoutTranslations`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Mocks.mockQuadWordPeripheralWithoutTranslations({ $at: 0x..., ... })
```

---

### `Mocks.MockWordPeripheralWithoutTranslations`

Full name: `Antmicro.Renode.Peripherals.Mocks.MockWordPeripheralWithoutTranslations`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Mocks.mockWordPeripheralWithoutTranslations({ $at: 0x..., ... })
```

---

## Network

### `Network.CadenceGEM`

Full name: `Antmicro.Renode.Peripherals.Network.CadenceGEM`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Network.cadenceGEM({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `moduleRevision` | `number` | optional |
| `moduleId` | `number` | optional |

---

### `Network.DA16200`

Full name: `Antmicro.Renode.Peripherals.Network.DA16200`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Network.DA16200({ $at: 0x..., ... })
```

---

### `Network.ENC28J60`

Full name: `Antmicro.Renode.Peripherals.Network.ENC28J60`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Network.ENC28J60({ $at: 0x..., ... })
```

---

### `Network.EthernetPhysicalLayer`

Full name: `Antmicro.Renode.Peripherals.Network.EthernetPhysicalLayer`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Network.ethernetPhysicalLayer({ $at: 0x..., ... })
```

---

### `Network.FastEthernetController`

Full name: `Antmicro.Renode.Peripherals.Network.FastEthernetController`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Network.fastEthernetController({ $at: 0x..., ... })
```

---

### `Network.GaislerEth`

Full name: `Antmicro.Renode.Peripherals.Network.GaislerEth`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Network.gaislerEth({ $at: 0x..., ... })
```

---

### `Network.K6xF_Ethernet`

Full name: `Antmicro.Renode.Peripherals.Network.K6xF_Ethernet`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Network.k6xF_Ethernet({ $at: 0x..., ... })
```

---

### `Network.KS8851`

Full name: `Antmicro.Renode.Peripherals.Network.KS8851`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Network.KS8851({ $at: 0x..., ... })
```

---

### `Network.LiteX_Ethernet`

Full name: `Antmicro.Renode.Peripherals.Network.LiteX_Ethernet`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Network.liteX_Ethernet({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `numberOfWriteSlots` | `number` | optional |
| `numberOfReadSlots` | `number` | optional |

---

### `Network.LiteX_Ethernet_CSR32`

Full name: `Antmicro.Renode.Peripherals.Network.LiteX_Ethernet_CSR32`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Network.liteX_Ethernet_CSR32({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `numberOfWriteSlots` | `number` | optional |
| `numberOfReadSlots` | `number` | optional |

---

### `Network.Quectel_BC66`

Full name: `Antmicro.Renode.Peripherals.Network.Quectel_BC66`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Network.quectel_BC66({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `imeiNumber` | `string` | optional |
| `softwareVersionNumber` | `string` | optional |
| `serialNumber` | `string` | optional |

---

### `Network.Quectel_BC660K`

Full name: `Antmicro.Renode.Peripherals.Network.Quectel_BC660K`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Network.quectel_BC660K({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `imeiNumber` | `string` | optional |
| `softwareVersionNumber` | `string` | optional |
| `serialNumber` | `string` | optional |

---

### `Network.Quectel_BG96`

Full name: `Antmicro.Renode.Peripherals.Network.Quectel_BG96`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Network.quectel_BG96({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `imeiNumber` | `string` | optional |
| `softwareVersionNumber` | `string` | optional |
| `serialNumber` | `string` | optional |

---

### `Network.S32K3XX_EMAC`

Full name: `Antmicro.Renode.Peripherals.Network.S32K3XX_EMAC`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Network.s32K3XX_EMAC({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `systemClockFrequency` | `number` | **required** |
| `cpuContext` | `string (peripheral ref)` | optional |

---

### `Network.S32K3XX_GMAC`

Full name: `Antmicro.Renode.Peripherals.Network.S32K3XX_GMAC`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Network.s32K3XX_GMAC({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `systemClockFrequency` | `number` | **required** |
| `cpuContext` | `string (peripheral ref)` | optional |

---

### `Network.SMC91X`

Full name: `Antmicro.Renode.Peripherals.Network.SMC91X`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Network.SMC91X({ $at: 0x..., ... })
```

---

### `Network.SynopsysDWCEthernetQualityOfService`

Full name: `Antmicro.Renode.Peripherals.Network.SynopsysDWCEthernetQualityOfService`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Network.synopsysDWCEthernetQualityOfService({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `systemClockFrequency` | `number` | **required** |
| `cpuContext` | `string (peripheral ref)` | optional |
| `dmaBusWidth` | `"Bits32" \| "Bits64" \| "Bits128"` | optional |
| `ptpClockFrequency` | `number` | optional |
| `rxQueueSize` | `number` | optional |
| `txQueueSize` | `number` | optional |
| `dmaChannelCount` | `number` | optional |

---

### `Network.SynopsysEthernetMAC`

Full name: `Antmicro.Renode.Peripherals.Network.SynopsysEthernetMAC`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Network.synopsysEthernetMAC({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `version` | `"STM32F4" \| "BeagleV"` | optional |

---

## PCI

### `PCI.MPFS_PCIe`

Full name: `Antmicro.Renode.Peripherals.PCI.MPFS_PCIe`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.PCI.MPFS_PCIe({ $at: 0x..., ... })
```

---

### `PCI.PCIeMemory`

Full name: `Antmicro.Renode.Peripherals.PCI.PCIeMemory`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.PCI.PCIeMemory({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `parent` | `string (peripheral ref)` | **required** |
| `size` | `number` | **required** |

---

### `PCI.PCIeRootComplex`

Full name: `Antmicro.Renode.Peripherals.PCI.PCIeRootComplex`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.PCI.PCIeRootComplex({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `parent` | `string (peripheral ref)` | **required** |

---

### `PCI.PCIHost_Bridge`

Full name: `Antmicro.Renode.Peripherals.PCI.PCIHost_Bridge`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.PCI.PCIHost_Bridge({ $at: 0x..., ... })
```

---

### `PCI.PIIX`

Full name: `Antmicro.Renode.Peripherals.PCI.PIIX`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.PCI.PIIX({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `parent` | `string (peripheral ref)` | **required** |

---

### `PCI.VersatilePCI`

Full name: `Antmicro.Renode.Peripherals.PCI.VersatilePCI`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.PCI.versatilePCI({ $at: 0x..., ... })
```

---

## Python

### `Python.PythonPeripheral`

Full name: `Antmicro.Renode.Peripherals.Python.PythonPeripheral`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Python.pythonPeripheral({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `size` | `number` | **required** |
| `initable` | `boolean` | optional |
| `script` | `string` | optional |
| `filename` | `string` | optional |

---

## SCI

### `SCI.RenesasRA6M5_SCI`

Full name: `Antmicro.Renode.Peripherals.SCI.RenesasRA6M5_SCI`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.SCI.renesasRA6M5_SCI({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `frequency` | `number` | **required** |
| `enableManchesterMode` | `boolean` | **required** |
| `enableFIFO` | `boolean` | **required** |
| `fullModel` | `boolean` | optional |

---

### `SCI.RenesasRZG_SCIFA`

Full name: `Antmicro.Renode.Peripherals.SCI.RenesasRZG_SCIFA`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.SCI.renesasRZG_SCIFA({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `frequency` | `number` | **required** |

---

## SD

### `SD.DeprecatedSDCard`

Full name: `Antmicro.Renode.Peripherals.SD.DeprecatedSDCard`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.SD.deprecatedSDCard({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `imageFile` | `string` | **required** |
| `cardSize` | `number` | optional |
| `persistent` | `boolean` | **required** |

---

### `SD.LiteSDCard`

Full name: `Antmicro.Renode.Peripherals.SD.LiteSDCard`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.SD.liteSDCard({ $at: 0x..., ... })
```

---

### `SD.LiteSDCard_CSR32`

Full name: `Antmicro.Renode.Peripherals.SD.LiteSDCard_CSR32`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.SD.liteSDCard_CSR32({ $at: 0x..., ... })
```

---

### `SD.MPFS_SDController`

Full name: `Antmicro.Renode.Peripherals.SD.MPFS_SDController`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.SD.MPFS_SDController({ $at: 0x..., ... })
```

---

### `SD.PULP_uDMA_SDIO`

Full name: `Antmicro.Renode.Peripherals.SD.PULP_uDMA_SDIO`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.SD.PULP_uDMA_SDIO({ $at: 0x..., ... })
```

---

### `SD.SDCard`

Full name: `Antmicro.Renode.Peripherals.SD.SDCard`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.SD.SDCard({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `imageFile` | `string` | **required** |
| `capacity` | `number` | **required** |
| `persistent` | `boolean` | optional |
| `spiMode` | `boolean` | optional |
| `blockSize` | `"Block512" \| "Block1024" \| "Block2048" \| "Undefined"` | optional |
| `compression` | `"None" \| "GZip"` | optional |

---

### `SD.SDHCI`

Full name: `Antmicro.Renode.Peripherals.SD.SDHCI`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.SD.SDHCI({ $at: 0x..., ... })
```

---

### `SD.STM32FSDMMC`

Full name: `Antmicro.Renode.Peripherals.SD.STM32FSDMMC`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.SD.STM32FSDMMC({ $at: 0x..., ... })
```

---

### `SD.STM32HSDMMC`

Full name: `Antmicro.Renode.Peripherals.SD.STM32HSDMMC`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.SD.STM32HSDMMC({ $at: 0x..., ... })
```

---

### `SD.SunxiMMC`

Full name: `Antmicro.Renode.Peripherals.SD.SunxiMMC`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.SD.sunxiMMC({ $at: 0x..., ... })
```

---

## SPI

### `SPI.AmbiqApollo4_IOMaster`

Full name: `Antmicro.Renode.Peripherals.SPI.AmbiqApollo4_IOMaster`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.SPI.ambiqApollo4_IOMaster({ $at: 0x..., ... })
```

---

### `SPI.AndesATCSPI200`

Full name: `Antmicro.Renode.Peripherals.SPI.AndesATCSPI200`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.SPI.andesATCSPI200({ $at: 0x..., ... })
```

---

### `SPI.Cadence_SPI`

Full name: `Antmicro.Renode.Peripherals.SPI.Cadence_SPI`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.SPI.cadence_SPI({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `txFifoCapacity` | `number` | optional |
| `rxFifoCapacity` | `number` | optional |

---

### `SPI.Cadence_xSPI`

Full name: `Antmicro.Renode.Peripherals.SPI.Cadence_xSPI`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.SPI.cadence_xSPI({ $at: 0x..., ... })
```

---

### `SPI.CC2538_SSI`

Full name: `Antmicro.Renode.Peripherals.SPI.CC2538_SSI`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.SPI.CC2538_SSI({ $at: 0x..., ... })
```

---

### `SPI.Cypress_S25H`

Full name: `Antmicro.Renode.Peripherals.SPI.Cypress_S25H`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.SPI.cypress_S25H({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `underlyingMemory` | `string (peripheral ref)` | **required** |
| `memoryFamily` | `"HL_T" \| "HS_T"` | optional |

---

### `SPI.DesignWare_SPI`

Full name: `Antmicro.Renode.Peripherals.SPI.DesignWare_SPI`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.SPI.designWare_SPI({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `transmitDepth` | `number` | **required** |
| `receiveDepth` | `number` | **required** |

---

### `SPI.GenericSpiFlash`

Full name: `Antmicro.Renode.Peripherals.SPI.GenericSpiFlash`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.SPI.genericSpiFlash({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `underlyingMemory` | `string (peripheral ref)` | **required** |
| `manufacturerId` | `number` | **required** |
| `memoryType` | `number` | **required** |
| `capacityCode` | `number` | optional |
| `writeStatusCanSetWriteEnable` | `boolean` | optional |
| `extendedDeviceId` | `number` | optional |
| `deviceConfiguration` | `number` | optional |
| `remainingIdBytes` | `number` | optional |
| `sectorSizeKB` | `number` | optional |

---

### `SPI.GigaDevice_GD25LQ`

Full name: `Antmicro.Renode.Peripherals.SPI.GigaDevice_GD25LQ`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.SPI.gigaDevice_GD25LQ({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `underlyingMemory` | `string (peripheral ref)` | **required** |

---

### `SPI.HiFive_SPI`

Full name: `Antmicro.Renode.Peripherals.SPI.HiFive_SPI`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.SPI.hiFive_SPI({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `isFlashEnabled` | `boolean` | optional |
| `numberOfSupportedSlaves` | `number` | optional |

---

### `SPI.IMXRT_FlexSPI`

Full name: `Antmicro.Renode.Peripherals.SPI.IMXRT_FlexSPI`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.SPI.IMXRT_FlexSPI({ $at: 0x..., ... })
```

---

### `SPI.IMXRT_LPSPI`

Full name: `Antmicro.Renode.Peripherals.SPI.IMXRT_LPSPI`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.SPI.IMXRT_LPSPI({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `fifoSize` | `number` | optional |

---

### `SPI.ISSI_IS25WP`

Full name: `Antmicro.Renode.Peripherals.SPI.ISSI_IS25WP`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.SPI.ISSI_IS25WP({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `underlyingMemory` | `string (peripheral ref)` | **required** |
| `blockSize` | `"_64KB" \| "_256KB"` | optional |

---

### `SPI.LiteX_SPI`

Full name: `Antmicro.Renode.Peripherals.SPI.LiteX_SPI`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.SPI.liteX_SPI({ $at: 0x..., ... })
```

---

### `SPI.LiteX_SPI_Flash`

Full name: `Antmicro.Renode.Peripherals.SPI.LiteX_SPI_Flash`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.SPI.liteX_SPI_Flash({ $at: 0x..., ... })
```

---

### `SPI.Macronix_MX25R`

Full name: `Antmicro.Renode.Peripherals.SPI.Macronix_MX25R`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.SPI.macronix_MX25R({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `underlyingMemory` | `string (peripheral ref)` | **required** |

---

### `SPI.MAX32650_SPI`

Full name: `Antmicro.Renode.Peripherals.SPI.MAX32650_SPI`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.SPI.MAX32650_SPI({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `numberOfSlaves` | `number` | **required** |
| `hushTxFifoLevelWarnings` | `boolean` | optional |

---

### `SPI.MAX3421E`

Full name: `Antmicro.Renode.Peripherals.SPI.MAX3421E`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.SPI.MAX3421E({ $at: 0x..., ... })
```

---

### `SPI.Micron_MT25Q`

Full name: `Antmicro.Renode.Peripherals.SPI.Micron_MT25Q`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.SPI.micron_MT25Q({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `underlyingMemory` | `string (peripheral ref)` | **required** |
| `extendedDeviceId` | `number` | optional |

---

### `SPI.MPFS_QSPI`

Full name: `Antmicro.Renode.Peripherals.SPI.MPFS_QSPI`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.SPI.MPFS_QSPI({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `size` | `number` | **required** |

---

### `SPI.MPFS_SPI`

Full name: `Antmicro.Renode.Peripherals.SPI.MPFS_SPI`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.SPI.MPFS_SPI({ $at: 0x..., ... })
```

---

### `SPI.MXIC_MX66UM1G45G`

Full name: `Antmicro.Renode.Peripherals.SPI.MXIC_MX66UM1G45G`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.SPI.MXIC_MX66UM1G45G({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `underlyingMemory` | `string (peripheral ref)` | **required** |

---

### `SPI.NANDFlash`

Full name: `Antmicro.Renode.Peripherals.SPI.NANDFlash`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.SPI.NANDFlash({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `dataMemory` | `string (peripheral ref)` | **required** |
| `spareMemory` | `string (peripheral ref)` | **required** |
| `pageSize` | `number` | optional |
| `spareSize` | `number` | optional |
| `pagesPerBlock` | `number` | optional |
| `blocksPerLun` | `number` | optional |
| `lunsPerChip` | `number` | optional |

---

### `SPI.NPCX_FIU`

Full name: `Antmicro.Renode.Peripherals.SPI.NPCX_FIU`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.SPI.NPCX_FIU({ $at: 0x..., ... })
```

---

### `SPI.NPCX_Flash`

Full name: `Antmicro.Renode.Peripherals.SPI.NPCX_Flash`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.SPI.NPCX_Flash({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `memory` | `string (peripheral ref)` | **required** |

---

### `SPI.NPCX_SPIP`

Full name: `Antmicro.Renode.Peripherals.SPI.NPCX_SPIP`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.SPI.NPCX_SPIP({ $at: 0x..., ... })
```

---

### `SPI.NRF52840_SPI`

Full name: `Antmicro.Renode.Peripherals.SPI.NRF52840_SPI`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.SPI.NRF52840_SPI({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `easyDMA` | `boolean` | optional |

---

### `SPI.OpenTitan_SpiDevice`

Full name: `Antmicro.Renode.Peripherals.SPI.OpenTitan_SpiDevice`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.SPI.openTitan_SpiDevice({ $at: 0x..., ... })
```

---

### `SPI.OpenTitan_SpiHost`

Full name: `Antmicro.Renode.Peripherals.SPI.OpenTitan_SpiHost`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.SPI.openTitan_SpiHost({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `numberOfCSLines` | `number` | **required** |

---

### `SPI.PicoRV_SPI`

Full name: `Antmicro.Renode.Peripherals.SPI.PicoRV_SPI`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.SPI.picoRV_SPI({ $at: 0x..., ... })
```

---

### `SPI.PULP_uDMA_SPI`

Full name: `Antmicro.Renode.Peripherals.SPI.PULP_uDMA_SPI`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.SPI.PULP_uDMA_SPI({ $at: 0x..., ... })
```

---

### `SPI.Puya_P25Q`

Full name: `Antmicro.Renode.Peripherals.SPI.Puya_P25Q`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.SPI.puya_P25Q({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `underlyingMemory` | `string (peripheral ref)` | **required** |

---

### `SPI.Quark_SPI`

Full name: `Antmicro.Renode.Peripherals.SPI.Quark_SPI`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.SPI.quark_SPI({ $at: 0x..., ... })
```

---

### `SPI.RenesasDA_SPI`

Full name: `Antmicro.Renode.Peripherals.SPI.RenesasDA_SPI`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.SPI.renesasDA_SPI({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `fifoDepth` | `number` | optional |

---

### `SPI.RenesasRZG_SPI`

Full name: `Antmicro.Renode.Peripherals.SPI.RenesasRZG_SPI`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.SPI.renesasRZG_SPI({ $at: 0x..., ... })
```

---

### `SPI.SAM_SPI`

Full name: `Antmicro.Renode.Peripherals.SPI.SAM_SPI`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.SPI.SAM_SPI({ $at: 0x..., ... })
```

---

### `SPI.SPILoopback`

Full name: `Antmicro.Renode.Peripherals.SPI.SPILoopback`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.SPI.SPILoopback({ $at: 0x..., ... })
```

---

### `SPI.SPIMultiplexer`

Full name: `Antmicro.Renode.Peripherals.SPI.SPIMultiplexer`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.SPI.SPIMultiplexer({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `suppressExplicitFinishTransmission` | `boolean` | optional |

---

### `SPI.STM32H7_QuadSPI`

Full name: `Antmicro.Renode.Peripherals.SPI.STM32H7_QuadSPI`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.SPI.STM32H7_QuadSPI({ $at: 0x..., ... })
```

---

### `SPI.STM32H7_SPI`

Full name: `Antmicro.Renode.Peripherals.SPI.STM32H7_SPI`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.SPI.STM32H7_SPI({ $at: 0x..., ... })
```

---

### `SPI.STM32SPI`

Full name: `Antmicro.Renode.Peripherals.SPI.STM32SPI`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.SPI.STM32SPI({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `bufferCapacity` | `number` | optional |

---

### `SPI.STM32WBA_SPI`

Full name: `Antmicro.Renode.Peripherals.SPI.STM32WBA_SPI`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.SPI.STM32WBA_SPI({ $at: 0x..., ... })
```

---

### `SPI.SynopsysSSI`

Full name: `Antmicro.Renode.Peripherals.SPI.SynopsysSSI`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.SPI.synopsysSSI({ $at: 0x..., ... })
```

---

### `SPI.UARTToSpiConverter`

Full name: `Antmicro.Renode.Peripherals.SPI.UARTToSpiConverter`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.SPI.UARTToSpiConverter({ $at: 0x..., ... })
```

---

### `SPI.XilinxQSPI`

Full name: `Antmicro.Renode.Peripherals.SPI.XilinxQSPI`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.SPI.xilinxQSPI({ $at: 0x..., ... })
```

---

### `SPI.ZynqMP_GQSPI`

Full name: `Antmicro.Renode.Peripherals.SPI.ZynqMP_GQSPI`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.SPI.zynqMP_GQSPI({ $at: 0x..., ... })
```

---

## Sensors

### `Sensors.ADXL345`

Full name: `Antmicro.Renode.Peripherals.Sensors.ADXL345`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Sensors.ADXL345({ $at: 0x..., ... })
```

---

### `Sensors.ADXL372`

Full name: `Antmicro.Renode.Peripherals.Sensors.ADXL372`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Sensors.ADXL372({ $at: 0x..., ... })
```

---

### `Sensors.AK09916`

Full name: `Antmicro.Renode.Peripherals.Sensors.AK09916`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Sensors.AK09916({ $at: 0x..., ... })
```

---

### `Sensors.AK09918`

Full name: `Antmicro.Renode.Peripherals.Sensors.AK09918`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Sensors.AK09918({ $at: 0x..., ... })
```

---

### `Sensors.ArduCAMMini2MPPlus`

Full name: `Antmicro.Renode.Peripherals.Sensors.ArduCAMMini2MPPlus`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Sensors.arduCAMMini2MPPlus({ $at: 0x..., ... })
```

---

### `Sensors.AS6221`

Full name: `Antmicro.Renode.Peripherals.Sensors.AS6221`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Sensors.AS6221({ $at: 0x..., ... })
```

---

### `Sensors.BMP180`

Full name: `Antmicro.Renode.Peripherals.Sensors.BMP180`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Sensors.BMP180({ $at: 0x..., ... })
```

---

### `Sensors.DummySensor`

Full name: `Antmicro.Renode.Peripherals.Sensors.DummySensor`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Sensors.dummySensor({ $at: 0x..., ... })
```

---

### `Sensors.GenericSPISensor`

Full name: `Antmicro.Renode.Peripherals.Sensors.GenericSPISensor`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Sensors.genericSPISensor({ $at: 0x..., ... })
```

---

### `Sensors.HiMaxHM01B0`

Full name: `Antmicro.Renode.Peripherals.Sensors.HiMaxHM01B0`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Sensors.hiMaxHM01B0({ $at: 0x..., ... })
```

---

### `Sensors.HS3001`

Full name: `Antmicro.Renode.Peripherals.Sensors.HS3001`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Sensors.HS3001({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `sensorIdHigh` | `number` | optional |
| `sensorIdLow` | `number` | optional |

---

### `Sensors.ICM20948`

Full name: `Antmicro.Renode.Peripherals.Sensors.ICM20948`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Sensors.ICM20948({ $at: 0x..., ... })
```

---

### `Sensors.ICP_101xx`

Full name: `Antmicro.Renode.Peripherals.Sensors.ICP_101xx`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Sensors.ICP_101xx({ $at: 0x..., ... })
```

---

### `Sensors.LIS2DS12`

Full name: `Antmicro.Renode.Peripherals.Sensors.LIS2DS12`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Sensors.LIS2DS12({ $at: 0x..., ... })
```

---

### `Sensors.LIS2DW12`

Full name: `Antmicro.Renode.Peripherals.Sensors.LIS2DW12`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Sensors.LIS2DW12({ $at: 0x..., ... })
```

---

### `Sensors.LSM303DLHC_Accelerometer`

Full name: `Antmicro.Renode.Peripherals.Sensors.LSM303DLHC_Accelerometer`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Sensors.LSM303DLHC_Accelerometer({ $at: 0x..., ... })
```

---

### `Sensors.LSM303DLHC_Gyroscope`

Full name: `Antmicro.Renode.Peripherals.Sensors.LSM303DLHC_Gyroscope`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Sensors.LSM303DLHC_Gyroscope({ $at: 0x..., ... })
```

---

### `Sensors.LSM330_Accelerometer`

Full name: `Antmicro.Renode.Peripherals.Sensors.LSM330_Accelerometer`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Sensors.LSM330_Accelerometer({ $at: 0x..., ... })
```

---

### `Sensors.LSM330_Gyroscope`

Full name: `Antmicro.Renode.Peripherals.Sensors.LSM330_Gyroscope`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Sensors.LSM330_Gyroscope({ $at: 0x..., ... })
```

---

### `Sensors.LSM6DSO_IMU`

Full name: `Antmicro.Renode.Peripherals.Sensors.LSM6DSO_IMU`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Sensors.LSM6DSO_IMU({ $at: 0x..., ... })
```

---

### `Sensors.LSM9DS1_IMU`

Full name: `Antmicro.Renode.Peripherals.Sensors.LSM9DS1_IMU`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Sensors.LSM9DS1_IMU({ $at: 0x..., ... })
```

---

### `Sensors.LSM9DS1_Magnetic`

Full name: `Antmicro.Renode.Peripherals.Sensors.LSM9DS1_Magnetic`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Sensors.LSM9DS1_Magnetic({ $at: 0x..., ... })
```

---

### `Sensors.MAX30208`

Full name: `Antmicro.Renode.Peripherals.Sensors.MAX30208`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Sensors.MAX30208({ $at: 0x..., ... })
```

---

### `Sensors.MAX6682MUA`

Full name: `Antmicro.Renode.Peripherals.Sensors.MAX6682MUA`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Sensors.MAX6682MUA({ $at: 0x..., ... })
```

---

### `Sensors.MAX77818`

Full name: `Antmicro.Renode.Peripherals.Sensors.MAX77818`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Sensors.MAX77818({ $at: 0x..., ... })
```

---

### `Sensors.MAX86171`

Full name: `Antmicro.Renode.Peripherals.Sensors.MAX86171`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Sensors.MAX86171({ $at: 0x..., ... })
```

---

### `Sensors.MC3635`

Full name: `Antmicro.Renode.Peripherals.Sensors.MC3635`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Sensors.MC3635({ $at: 0x..., ... })
```

---

### `Sensors.OB1203`

Full name: `Antmicro.Renode.Peripherals.Sensors.OB1203`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Sensors.OB1203({ $at: 0x..., ... })
```

---

### `Sensors.OV2640`

Full name: `Antmicro.Renode.Peripherals.Sensors.OV2640`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Sensors.OV2640({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `parent` | `string (peripheral ref)` | **required** |

---

### `Sensors.PAC1934`

Full name: `Antmicro.Renode.Peripherals.Sensors.PAC1934`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Sensors.PAC1934({ $at: 0x..., ... })
```

---

### `Sensors.PULP_uDMA_Camera`

Full name: `Antmicro.Renode.Peripherals.Sensors.PULP_uDMA_Camera`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Sensors.PULP_uDMA_Camera({ $at: 0x..., ... })
```

---

### `Sensors.SI70xx`

Full name: `Antmicro.Renode.Peripherals.Sensors.SI70xx`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Sensors.SI70xx({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `model` | `"SI7021" \| "SI7006"` | **required** |

---

### `Sensors.SI7210`

Full name: `Antmicro.Renode.Peripherals.Sensors.SI7210`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Sensors.SI7210({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `offset` | `number` | optional |
| `gain` | `number` | optional |

---

### `Sensors.TI_LM74`

Full name: `Antmicro.Renode.Peripherals.Sensors.TI_LM74`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Sensors.TI_LM74({ $at: 0x..., ... })
```

---

### `Sensors.TMP103`

Full name: `Antmicro.Renode.Peripherals.Sensors.TMP103`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Sensors.TMP103({ $at: 0x..., ... })
```

---

### `Sensors.TMP108`

Full name: `Antmicro.Renode.Peripherals.Sensors.TMP108`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Sensors.TMP108({ $at: 0x..., ... })
```

---

### `Sensors.ZMOD4xxx`

Full name: `Antmicro.Renode.Peripherals.Sensors.ZMOD4xxx`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Sensors.ZMOD4xxx({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `model` | `"ZMOD4510" \| "ZMOD4410"` | **required** |

---

## Sound

### `Sound.EOSS3_Voice`

Full name: `Antmicro.Renode.Peripherals.Sound.EOSS3_Voice`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Sound.EOSS3_Voice({ $at: 0x..., ... })
```

---

### `Sound.IMXRT700_MICFIL`

Full name: `Antmicro.Renode.Peripherals.Sound.IMXRT700_MICFIL`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Sound.IMXRT700_MICFIL({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `clockRootFrequencyHz` | `number` | optional |

---

### `Sound.IMXRT700_SAI`

Full name: `Antmicro.Renode.Peripherals.Sound.IMXRT700_SAI`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Sound.IMXRT700_SAI({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `clockRootFrequencyHz` | `number` | optional |

---

### `Sound.LiteX_I2S_Master`

Full name: `Antmicro.Renode.Peripherals.Sound.LiteX_I2S_Master`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Sound.liteX_I2S_Master({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `format` | `"Standard" \| "LeftJustified"` | **required** |
| `sampleWidthBits` | `number` | **required** |
| `samplingRateHz` | `number` | **required** |
| `numberOfChannels` | `number` | **required** |

---

### `Sound.LiteX_I2S_Slave`

Full name: `Antmicro.Renode.Peripherals.Sound.LiteX_I2S_Slave`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Sound.liteX_I2S_Slave({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `format` | `"Standard" \| "LeftJustified"` | **required** |
| `sampleWidthBits` | `number` | **required** |
| `samplingRateHz` | `number` | **required** |
| `numberOfChannels` | `number` | **required** |

---

### `Sound.NRF52840_I2S`

Full name: `Antmicro.Renode.Peripherals.Sound.NRF52840_I2S`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Sound.NRF52840_I2S({ $at: 0x..., ... })
```

---

### `Sound.NRF52840_PDM`

Full name: `Antmicro.Renode.Peripherals.Sound.NRF52840_PDM`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Sound.NRF52840_PDM({ $at: 0x..., ... })
```

---

### `Sound.PULP_I2S`

Full name: `Antmicro.Renode.Peripherals.Sound.PULP_I2S`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Sound.PULP_I2S({ $at: 0x..., ... })
```

---

## Storage

### `Storage.UFSDevice`

Full name: `Antmicro.Renode.Peripherals.Storage.UFSDevice`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Storage.UFSDevice({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `logicalUnits` | `number` | **required** |
| `logicalBlockSize` | `number` | **required** |
| `blockCount` | `number` | **required** |
| `manufacturerName` | `string` | optional |
| `productName` | `string` | optional |
| `serialNumber` | `string` | optional |
| `oemID` | `string` | optional |
| `productRevisionLevel` | `string` | optional |
| `logicalUnitBlockCounts` | `string \| number \| boolean` | optional |

---

### `Storage.UFSHostController`

Full name: `Antmicro.Renode.Peripherals.Storage.UFSHostController`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Storage.UFSHostController({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `transferRequestSlots` | `number` | optional |
| `readyToTransferRequests` | `number` | optional |
| `taskManagementRequestSlots` | `number` | optional |

---

### `Storage.VirtIOBlockDevice`

Full name: `Antmicro.Renode.Peripherals.Storage.VirtIOBlockDevice`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Storage.virtIOBlockDevice({ $at: 0x..., ... })
```

---

### `Storage.VirtIOFSDevice`

Full name: `Antmicro.Renode.Peripherals.Storage.VirtIOFSDevice`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Storage.virtIOFSDevice({ $at: 0x..., ... })
```

---

## SystemC

### `SystemC.SystemCCortexMCPU`

Full name: `Antmicro.Renode.Peripherals.SystemC.SystemCCortexMCPU`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.SystemC.systemCCortexMCPU({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `address` | `string` | **required** |
| `port` | `number` | **required** |
| `cpuType` | `string` | **required** |
| `endianess` | `"LittleEndian" \| "BigEndian"` | optional |
| `bitness` | `"Bits32" \| "Bits64"` | optional |
| `timeSyncPeriodUS` | `number` | optional |
| `disableTimeoutCheck` | `boolean` | optional |

---

### `SystemC.SystemCPeripheral`

Full name: `Antmicro.Renode.Peripherals.SystemC.SystemCPeripheral`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.SystemC.systemCPeripheral({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `address` | `string` | **required** |
| `port` | `number` | optional |
| `timeSyncPeriodUS` | `number` | optional |
| `disableTimeoutCheck` | `boolean` | optional |

---

## Timers

### `Timers.ABRTCMC`

Full name: `Antmicro.Renode.Peripherals.Timers.ABRTCMC`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Timers.ABRTCMC({ $at: 0x..., ... })
```

---

### `Timers.AmbiqApollo4_RTC`

Full name: `Antmicro.Renode.Peripherals.Timers.AmbiqApollo4_RTC`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Timers.ambiqApollo4_RTC({ $at: 0x..., ... })
```

---

### `Timers.AmbiqApollo4_RTC+RTCTimer`

Full name: `Antmicro.Renode.Peripherals.Timers.AmbiqApollo4_RTC+RTCTimer`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Timers.ambiqApollo4_RTC+RTCTimer({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `owner` | `string (peripheral ref)` | **required** |
| `baseDateTime` | `string \| number \| boolean` | **required** |
| `alarmAction` | `string \| number \| boolean` | **required** |

---

### `Timers.AmbiqApollo4_SystemTimer`

Full name: `Antmicro.Renode.Peripherals.Timers.AmbiqApollo4_SystemTimer`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Timers.ambiqApollo4_SystemTimer({ $at: 0x..., ... })
```

---

### `Timers.AmbiqApollo4_Timer`

Full name: `Antmicro.Renode.Peripherals.Timers.AmbiqApollo4_Timer`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Timers.ambiqApollo4_Timer({ $at: 0x..., ... })
```

---

### `Timers.AmbiqApollo4_Watchdog`

Full name: `Antmicro.Renode.Peripherals.Timers.AmbiqApollo4_Watchdog`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Timers.ambiqApollo4_Watchdog({ $at: 0x..., ... })
```

---

### `Timers.AndesATCPIT100`

Full name: `Antmicro.Renode.Peripherals.Timers.AndesATCPIT100`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Timers.andesATCPIT100({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `clockFrequency` | `number` | **required** |
| `numberOfChannels` | `number` | optional |

---

### `Timers.AndesATCRTC100`

Full name: `Antmicro.Renode.Peripherals.Timers.AndesATCRTC100`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Timers.andesATCRTC100({ $at: 0x..., ... })
```

---

### `Timers.AndesATCWDT200_Watchdog`

Full name: `Antmicro.Renode.Peripherals.Timers.AndesATCWDT200_Watchdog`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Timers.andesATCWDT200_Watchdog({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `clockFrequency` | `number` | **required** |

---

### `Timers.ARM_GenericTimer`

Full name: `Antmicro.Renode.Peripherals.Timers.ARM_GenericTimer`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Timers.ARM_GenericTimer({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `frequency` | `number` | **required** |
| `defaultCounterFrequencyRegister` | `number` | optional |

---

### `Timers.ARM_GlobalTimer`

Full name: `Antmicro.Renode.Peripherals.Timers.ARM_GlobalTimer`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Timers.ARM_GlobalTimer({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `frequency` | `number` | **required** |
| `irqController` | `string (peripheral ref)` | **required** |

---

### `Timers.ARM_PrivateTimer`

Full name: `Antmicro.Renode.Peripherals.Timers.ARM_PrivateTimer`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Timers.ARM_PrivateTimer({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `frequency` | `number` | **required** |

---

### `Timers.ARM_SP804_Timer`

Full name: `Antmicro.Renode.Peripherals.Timers.ARM_SP804_Timer`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Timers.ARM_SP804_Timer({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `frequency` | `number` | optional |

---

### `Timers.Atmel91SystemTimer`

Full name: `Antmicro.Renode.Peripherals.Timers.Atmel91SystemTimer`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Timers.atmel91SystemTimer({ $at: 0x..., ... })
```

---

### `Timers.Cadence_TTC`

Full name: `Antmicro.Renode.Peripherals.Timers.Cadence_TTC`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Timers.cadence_TTC({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `frequency` | `number` | optional |

---

### `Timers.Cadence_WDT`

Full name: `Antmicro.Renode.Peripherals.Timers.Cadence_WDT`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Timers.cadence_WDT({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `frequency` | `number` | **required** |

---

### `Timers.CC2538SleepTimer`

Full name: `Antmicro.Renode.Peripherals.Timers.CC2538SleepTimer`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Timers.CC2538SleepTimer({ $at: 0x..., ... })
```

---

### `Timers.CC2538Watchdog`

Full name: `Antmicro.Renode.Peripherals.Timers.CC2538Watchdog`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Timers.CC2538Watchdog({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `periodInMs` | `number` | **required** |

---

### `Timers.ComparingTimer`

Full name: `Antmicro.Renode.Peripherals.Timers.ComparingTimer`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Timers.comparingTimer({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `clockSource` | `string \| number \| boolean` | **required** |
| `frequency` | `number` | **required** |
| `owner` | `string (peripheral ref)` | **required** |
| `localName` | `string` | **required** |
| `limit` | `number` | optional |
| `direction` | `"Ascending" \| "Descending"` | optional |
| `enabled` | `boolean` | optional |
| `workMode` | `"Periodic" \| "OneShot"` | optional |
| `eventEnabled` | `boolean` | optional |
| `compare` | `number` | optional |
| `divider` | `number` | optional |
| `step` | `number` | optional |

---

### `Timers.Efm32Timer`

Full name: `Antmicro.Renode.Peripherals.Timers.Efm32Timer`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Timers.efm32Timer({ $at: 0x..., ... })
```

---

### `Timers.EFR32_RTCC`

Full name: `Antmicro.Renode.Peripherals.Timers.EFR32_RTCC`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Timers.EFR32_RTCC({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `frequency` | `number` | **required** |

---

### `Timers.EFR32_Timer`

Full name: `Antmicro.Renode.Peripherals.Timers.EFR32_Timer`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Timers.EFR32_Timer({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `frequency` | `number` | **required** |
| `width` | `"Bit16" \| "Bit32"` | **required** |

---

### `Timers.EFR32xG2_BURTC`

Full name: `Antmicro.Renode.Peripherals.Timers.EFR32xG2_BURTC`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Timers.EFR32xG2_BURTC({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `frequency` | `number` | optional |

---

### `Timers.EFR32xG2_RTCC`

Full name: `Antmicro.Renode.Peripherals.Timers.EFR32xG2_RTCC`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Timers.EFR32xG2_RTCC({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `frequency` | `number` | **required** |

---

### `Timers.EFR32xG2_TIMER_1`

Full name: `Antmicro.Renode.Peripherals.Timers.EFR32xG2_TIMER_1`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Timers.EFR32xG2_TIMER_1({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `frequency` | `number` | **required** |
| `width` | `number` | **required** |

---

### `Timers.EFR32xG24_SYSRTC`

Full name: `Antmicro.Renode.Peripherals.Timers.EFR32xG24_SYSRTC`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Timers.EFR32xG24_SYSRTC({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `frequency` | `number` | optional |

---

### `Timers.EOSS3_SimplePeriodicTimer`

Full name: `Antmicro.Renode.Peripherals.Timers.EOSS3_SimplePeriodicTimer`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Timers.EOSS3_SimplePeriodicTimer({ $at: 0x..., ... })
```

---

### `Timers.Gaisler_GPTimer`

Full name: `Antmicro.Renode.Peripherals.Timers.Gaisler_GPTimer`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Timers.gaisler_GPTimer({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `numberOfTimers` | `number` | optional |
| `scalerWidth` | `number` | optional |
| `frequency` | `number` | optional |
| `supportsTimeLatch` | `boolean` | optional |
| `separateInterrupts` | `boolean` | optional |

---

### `Timers.HPET`

Full name: `Antmicro.Renode.Peripherals.Timers.HPET`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Timers.HPET({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `frequency` | `number` | optional |

---

### `Timers.IMX_GPTimer`

Full name: `Antmicro.Renode.Peripherals.Timers.IMX_GPTimer`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Timers.IMX_GPTimer({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `frequency` | `number` | optional |

---

### `Timers.IMXRT_PWM`

Full name: `Antmicro.Renode.Peripherals.Timers.IMXRT_PWM`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Timers.IMXRT_PWM({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `frequency` | `number` | optional |

---

### `Timers.IMXRT700_OSC32KNP`

Full name: `Antmicro.Renode.Peripherals.Timers.IMXRT700_OSC32KNP`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Timers.IMXRT700_OSC32KNP({ $at: 0x..., ... })
```

---

### `Timers.LimitTimer`

Full name: `Antmicro.Renode.Peripherals.Timers.LimitTimer`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Timers.limitTimer({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `clockSource` | `string \| number \| boolean` | **required** |
| `frequency` | `number` | **required** |
| `owner` | `string (peripheral ref)` | **required** |
| `localName` | `string` | **required** |
| `limit` | `number` | optional |
| `direction` | `"Ascending" \| "Descending"` | optional |
| `enabled` | `boolean` | optional |
| `workMode` | `"Periodic" \| "OneShot"` | optional |
| `eventEnabled` | `boolean` | optional |
| `autoUpdate` | `boolean` | optional |
| `divider` | `number` | optional |

---

### `Timers.LiteX_CPUTimer`

Full name: `Antmicro.Renode.Peripherals.Timers.LiteX_CPUTimer`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Timers.liteX_CPUTimer({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `frequency` | `number` | **required** |

---

### `Timers.LiteX_Timer`

Full name: `Antmicro.Renode.Peripherals.Timers.LiteX_Timer`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Timers.liteX_Timer({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `frequency` | `number` | **required** |

---

### `Timers.LiteX_Timer_CSR32`

Full name: `Antmicro.Renode.Peripherals.Timers.LiteX_Timer_CSR32`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Timers.liteX_Timer_CSR32({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `frequency` | `number` | **required** |

---

### `Timers.LiteX_Timer64`

Full name: `Antmicro.Renode.Peripherals.Timers.LiteX_Timer64`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Timers.liteX_Timer64({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `frequency` | `number` | **required** |

---

### `Timers.LPC_CTimer`

Full name: `Antmicro.Renode.Peripherals.Timers.LPC_CTimer`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Timers.LPC_CTimer({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `frequency` | `number` | optional |

---

### `Timers.Marvell_Armada_Timer`

Full name: `Antmicro.Renode.Peripherals.Timers.Marvell_Armada_Timer`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Timers.marvell_Armada_Timer({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `frequency` | `number` | **required** |

---

### `Timers.MAX32650_RTC`

Full name: `Antmicro.Renode.Peripherals.Timers.MAX32650_RTC`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Timers.MAX32650_RTC({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `subSecondsMSBOverwrite` | `boolean` | optional |
| `baseDateTime` | `string` | optional |
| `secondsTickOnOneSubSecond` | `boolean` | optional |

---

### `Timers.MAX32650_Timer`

Full name: `Antmicro.Renode.Peripherals.Timers.MAX32650_Timer`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Timers.MAX32650_Timer({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `gcr` | `string (peripheral ref)` | **required** |

---

### `Timers.MAX32650_WDT`

Full name: `Antmicro.Renode.Peripherals.Timers.MAX32650_WDT`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Timers.MAX32650_WDT({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `gcr` | `string (peripheral ref)` | **required** |

---

### `Timers.MiV_CoreTimer`

Full name: `Antmicro.Renode.Peripherals.Timers.MiV_CoreTimer`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Timers.miV_CoreTimer({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `clockFrequency` | `number` | **required** |

---

### `Timers.MPFS_RTC`

Full name: `Antmicro.Renode.Peripherals.Timers.MPFS_RTC`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Timers.MPFS_RTC({ $at: 0x..., ... })
```

---

### `Timers.MPFS_Timer`

Full name: `Antmicro.Renode.Peripherals.Timers.MPFS_Timer`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Timers.MPFS_Timer({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `frequency` | `number` | optional |

---

### `Timers.MPFS_Watchdog`

Full name: `Antmicro.Renode.Peripherals.Timers.MPFS_Watchdog`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Timers.MPFS_Watchdog({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `frequency` | `number` | **required** |

---

### `Timers.MSP430_Timer`

Full name: `Antmicro.Renode.Peripherals.Timers.MSP430_Timer`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Timers.MSP430_Timer({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `cpu` | `string (peripheral ref)` | **required** |
| `acknowledgeInterrupt` | `number` | **required** |
| `baseFrequency` | `number` | optional |
| `captureCompareCount` | `number` | optional |

---

### `Timers.MSP430F2XXX_Watchdog`

Full name: `Antmicro.Renode.Peripherals.Timers.MSP430F2XXX_Watchdog`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Timers.MSP430F2XXX_Watchdog({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `baseFrequency` | `number` | **required** |

---

### `Timers.Murax_Timer`

Full name: `Antmicro.Renode.Peripherals.Timers.Murax_Timer`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Timers.murax_Timer({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `frequency` | `number` | optional |

---

### `Timers.NPCX_ITIM`

Full name: `Antmicro.Renode.Peripherals.Timers.NPCX_ITIM`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Timers.NPCX_ITIM({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `lfclkFrequency` | `number` | optional |
| `apb2Frequency` | `number` | optional |
| `is64Bit` | `boolean` | optional |

---

### `Timers.NPCX_MTC`

Full name: `Antmicro.Renode.Peripherals.Timers.NPCX_MTC`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Timers.NPCX_MTC({ $at: 0x..., ... })
```

---

### `Timers.NPCX_TWD`

Full name: `Antmicro.Renode.Peripherals.Timers.NPCX_TWD`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Timers.NPCX_TWD({ $at: 0x..., ... })
```

---

### `Timers.NRF52840_RTC`

Full name: `Antmicro.Renode.Peripherals.Timers.NRF52840_RTC`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Timers.NRF52840_RTC({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `numberOfEvents` | `number` | **required** |

---

### `Timers.NRF52840_Timer`

Full name: `Antmicro.Renode.Peripherals.Timers.NRF52840_Timer`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Timers.NRF52840_Timer({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `numberOfEvents` | `number` | **required** |

---

### `Timers.NRF52840_Watchdog`

Full name: `Antmicro.Renode.Peripherals.Timers.NRF52840_Watchdog`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Timers.NRF52840_Watchdog({ $at: 0x..., ... })
```

---

### `Timers.NRF54H20_GRTC`

Full name: `Antmicro.Renode.Peripherals.Timers.NRF54H20_GRTC`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Timers.NRF54H20_GRTC({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `numberOfEvents` | `number` | optional |

---

### `Timers.NXP_OsTimer`

Full name: `Antmicro.Renode.Peripherals.Timers.NXP_OsTimer`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Timers.NXP_OsTimer({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `frequency` | `number` | **required** |

---

### `Timers.OMAP_GPTimer`

Full name: `Antmicro.Renode.Peripherals.Timers.OMAP_GPTimer`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Timers.OMAP_GPTimer({ $at: 0x..., ... })
```

---

### `Timers.OMAP_Timer`

Full name: `Antmicro.Renode.Peripherals.Timers.OMAP_Timer`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Timers.OMAP_Timer({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `frequency` | `number` | **required** |

---

### `Timers.OpenTitan_AonTimer`

Full name: `Antmicro.Renode.Peripherals.Timers.OpenTitan_AonTimer`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Timers.openTitan_AonTimer({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `powerManager` | `string (peripheral ref)` | **required** |
| `resetManager` | `string (peripheral ref)` | **required** |
| `frequency` | `number` | optional |

---

### `Timers.OpenTitan_Timer`

Full name: `Antmicro.Renode.Peripherals.Timers.OpenTitan_Timer`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Timers.openTitan_Timer({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `frequency` | `number` | optional |

---

### `Timers.PeriodicInterruptTimer`

Full name: `Antmicro.Renode.Peripherals.Timers.PeriodicInterruptTimer`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Timers.periodicInterruptTimer({ $at: 0x..., ... })
```

---

### `Timers.PL031`

Full name: `Antmicro.Renode.Peripherals.Timers.PL031`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Timers.PL031({ $at: 0x..., ... })
```

---

### `Timers.PULP_Timer`

Full name: `Antmicro.Renode.Peripherals.Timers.PULP_Timer`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Timers.PULP_Timer({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `frequency` | `number` | **required** |

---

### `Timers.PulseGenerator`

Full name: `Antmicro.Renode.Peripherals.Timers.PulseGenerator`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Timers.pulseGenerator({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `frequency` | `number` | **required** |
| `onTicks` | `number` | **required** |
| `offTicks` | `number` | **required** |
| `startState` | `boolean` | optional |

---

### `Timers.RenesasDA_Watchdog`

Full name: `Antmicro.Renode.Peripherals.Timers.RenesasDA_Watchdog`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Timers.renesasDA_Watchdog({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `frequency` | `number` | **required** |
| `nvic` | `string (peripheral ref)` | **required** |

---

### `Timers.RenesasDA14_GPT`

Full name: `Antmicro.Renode.Peripherals.Timers.RenesasDA14_GPT`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Timers.renesasDA14_GPT({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `lowPowerFrequency` | `number` | optional |
| `extendedTimer` | `boolean` | optional |

---

### `Timers.RenesasRA_AGT`

Full name: `Antmicro.Renode.Peripherals.Timers.RenesasRA_AGT`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Timers.renesasRA_AGT({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `lowSpeedOnChipOscillatorFrequency` | `number` | **required** |
| `subClockOscillatorFrequency` | `number` | **required** |
| `peripheralClockBFrequency` | `number` | **required** |

---

### `Timers.RenesasRA_GPT`

Full name: `Antmicro.Renode.Peripherals.Timers.RenesasRA_GPT`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Timers.renesasRA_GPT({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `numberOf32BitChannels` | `number` | **required** |
| `numberOf16BitChannels` | `number` | **required** |
| `commonRegistersOffset` | `number` | **required** |
| `peripheralClockDFrequency` | `number` | **required** |

---

### `Timers.RenesasRZG_GPT`

Full name: `Antmicro.Renode.Peripherals.Timers.RenesasRZG_GPT`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Timers.renesasRZG_GPT({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `numberOf32BitChannels` | `number` | **required** |
| `peripheralClockDFrequency` | `number` | **required** |

---

### `Timers.RenesasRZG_GTM`

Full name: `Antmicro.Renode.Peripherals.Timers.RenesasRZG_GTM`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Timers.renesasRZG_GTM({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `frequency` | `number` | **required** |

---

### `Timers.RenesasRZG_SYC`

Full name: `Antmicro.Renode.Peripherals.Timers.RenesasRZG_SYC`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Timers.renesasRZG_SYC({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `frequency` | `number` | **required** |

---

### `Timers.RenesasRZG_Watchdog`

Full name: `Antmicro.Renode.Peripherals.Timers.RenesasRZG_Watchdog`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Timers.renesasRZG_Watchdog({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `clockFrequency` | `number` | **required** |

---

### `Timers.RiscVMachineTimer`

Full name: `Antmicro.Renode.Peripherals.Timers.RiscVMachineTimer`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Timers.riscVMachineTimer({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `frequency` | `number` | **required** |

---

### `Timers.RV8803_RTC`

Full name: `Antmicro.Renode.Peripherals.Timers.RV8803_RTC`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Timers.RV8803_RTC({ $at: 0x..., ... })
```

---

### `Timers.S32K_LPIT`

Full name: `Antmicro.Renode.Peripherals.Timers.S32K_LPIT`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Timers.s32K_LPIT({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `frequency` | `number` | **required** |

---

### `Timers.S32K_LPIT+LPITTimer`

Full name: `Antmicro.Renode.Peripherals.Timers.S32K_LPIT+LPITTimer`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Timers.s32K_LPIT+LPITTimer({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `clockSource` | `string \| number \| boolean` | **required** |
| `frequency` | `number` | **required** |
| `owner` | `string (peripheral ref)` | **required** |
| `name` | `string` | **required** |

---

### `Timers.S32K_LPTMR`

Full name: `Antmicro.Renode.Peripherals.Timers.S32K_LPTMR`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Timers.s32K_LPTMR({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `frequency` | `number` | **required** |

---

### `Timers.S32K3XX_PeriodicInterruptTimer`

Full name: `Antmicro.Renode.Peripherals.Timers.S32K3XX_PeriodicInterruptTimer`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Timers.s32K3XX_PeriodicInterruptTimer({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `oscillatorFrequency` | `number` | **required** |
| `hasRealTimeInterrupt` | `boolean` | optional |
| `hasLifetimeTimer` | `boolean` | optional |
| `supportsTimersChaining` | `boolean` | optional |

---

### `Timers.S32K3XX_RealTimeClock`

Full name: `Antmicro.Renode.Peripherals.Timers.S32K3XX_RealTimeClock`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Timers.s32K3XX_RealTimeClock({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `externalFastCrystalOscillatorFrequency` | `number` | optional |
| `externalSlowCrystalOscillatorFrequency` | `number` | optional |

---

### `Timers.S32K3XX_SoftwareWatchdogTimer`

Full name: `Antmicro.Renode.Peripherals.Timers.S32K3XX_SoftwareWatchdogTimer`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Timers.s32K3XX_SoftwareWatchdogTimer({ $at: 0x..., ... })
```

---

### `Timers.S32K3XX_SystemTimerModule`

Full name: `Antmicro.Renode.Peripherals.Timers.S32K3XX_SystemTimerModule`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Timers.s32K3XX_SystemTimerModule({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `clockFrequency` | `number` | **required** |

---

### `Timers.SAM_TC`

Full name: `Antmicro.Renode.Peripherals.Timers.SAM_TC`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Timers.SAM_TC({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `masterClockFrequency` | `number` | optional |

---

### `Timers.SAM4S_WDT`

Full name: `Antmicro.Renode.Peripherals.Timers.SAM4S_WDT`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Timers.SAM4S_WDT({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `resetController` | `string (peripheral ref)` | **required** |
| `slowClockFrequency` | `number` | optional |

---

### `Timers.SAMD21_RTC`

Full name: `Antmicro.Renode.Peripherals.Timers.SAMD21_RTC`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Timers.SAMD21_RTC({ $at: 0x..., ... })
```

---

### `Timers.SAMD21_Timer`

Full name: `Antmicro.Renode.Peripherals.Timers.SAMD21_Timer`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Timers.SAMD21_Timer({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `baseFrequency` | `number` | **required** |

---

### `Timers.SimpleTicker`

Full name: `Antmicro.Renode.Peripherals.Timers.SimpleTicker`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Timers.simpleTicker({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `periodInMs` | `number` | **required** |

---

### `Timers.STM32_IndependentWatchdog`

Full name: `Antmicro.Renode.Peripherals.Timers.STM32_IndependentWatchdog`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Timers.STM32_IndependentWatchdog({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `frequency` | `number` | **required** |
| `windowOption` | `boolean` | optional |
| `defaultPrescaler` | `number` | optional |

---

### `Timers.STM32_Timer`

Full name: `Antmicro.Renode.Peripherals.Timers.STM32_Timer`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Timers.STM32_Timer({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `frequency` | `number` | **required** |
| `initialLimit` | `number` | **required** |

---

### `Timers.STM32F4_RTC`

Full name: `Antmicro.Renode.Peripherals.Timers.STM32F4_RTC`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Timers.STM32F4_RTC({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `wakeupTimerFrequency` | `number` | optional |

---

### `Timers.STM32H7_SystemWindowWatchdog`

Full name: `Antmicro.Renode.Peripherals.Timers.STM32H7_SystemWindowWatchdog`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Timers.STM32H7_SystemWindowWatchdog({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `apbFrequency` | `number` | **required** |

---

### `Timers.STM32L0_LpTimer`

Full name: `Antmicro.Renode.Peripherals.Timers.STM32L0_LpTimer`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Timers.STM32L0_LpTimer({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `frequency` | `number` | **required** |

---

### `Timers.SunxiHighSpeedTimer`

Full name: `Antmicro.Renode.Peripherals.Timers.SunxiHighSpeedTimer`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Timers.sunxiHighSpeedTimer({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `frequency` | `number` | **required** |

---

### `Timers.SunxiHighSpeedTimer+SunxiHighSpeedTimerUnit`

Full name: `Antmicro.Renode.Peripherals.Timers.SunxiHighSpeedTimer+SunxiHighSpeedTimerUnit`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Timers.sunxiHighSpeedTimer+SunxiHighSpeedTimerUnit({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `frequency` | `number` | **required** |

---

### `Timers.SunxiTimer`

Full name: `Antmicro.Renode.Peripherals.Timers.SunxiTimer`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Timers.sunxiTimer({ $at: 0x..., ... })
```

---

### `Timers.SunxiTimer+SunxiTimerUnit`

Full name: `Antmicro.Renode.Peripherals.Timers.SunxiTimer+SunxiTimerUnit`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Timers.sunxiTimer+SunxiTimerUnit({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `parent` | `string (peripheral ref)` | **required** |

---

### `Timers.TegraTimer`

Full name: `Antmicro.Renode.Peripherals.Timers.TegraTimer`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Timers.tegraTimer({ $at: 0x..., ... })
```

---

### `Timers.TegraUsecTimer`

Full name: `Antmicro.Renode.Peripherals.Timers.TegraUsecTimer`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Timers.tegraUsecTimer({ $at: 0x..., ... })
```

---

### `Timers.TexasInstrumentsTimer`

Full name: `Antmicro.Renode.Peripherals.Timers.TexasInstrumentsTimer`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Timers.texasInstrumentsTimer({ $at: 0x..., ... })
```

---

### `Timers.ZynqMP_RTC`

Full name: `Antmicro.Renode.Peripherals.Timers.ZynqMP_RTC`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Timers.zynqMP_RTC({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `frequency` | `number` | optional |

---

## UART

### `UART.AlteraJTAG_UART`

Full name: `Antmicro.Renode.Peripherals.UART.AlteraJTAG_UART`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.UART.alteraJTAG_UART({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `fifoDepth` | `number` | optional |

---

### `UART.AppUart`

Full name: `Antmicro.Renode.Peripherals.UART.AppUart`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.UART.appUart({ $at: 0x..., ... })
```

---

### `UART.Atmel91DebugUnit`

Full name: `Antmicro.Renode.Peripherals.UART.Atmel91DebugUnit`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.UART.atmel91DebugUnit({ $at: 0x..., ... })
```

---

### `UART.AxiUartLite`

Full name: `Antmicro.Renode.Peripherals.UART.AxiUartLite`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.UART.axiUartLite({ $at: 0x..., ... })
```

---

### `UART.BCM2711_AUX_UART`

Full name: `Antmicro.Renode.Peripherals.UART.BCM2711_AUX_UART`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.UART.BCM2711_AUX_UART({ $at: 0x..., ... })
```

---

### `UART.Cadence_UART`

Full name: `Antmicro.Renode.Peripherals.UART.Cadence_UART`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.UART.cadence_UART({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `clearInterruptStatusOnRead` | `boolean` | optional |
| `clockFrequency` | `number` | optional |
| `fifoCapacity` | `number` | optional |

---

### `UART.CMSDK_APB_UART`

Full name: `Antmicro.Renode.Peripherals.UART.CMSDK_APB_UART`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.UART.CMSDK_APB_UART({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `frequency` | `number` | optional |

---

### `UART.EFM32_UART`

Full name: `Antmicro.Renode.Peripherals.UART.EFM32_UART`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.UART.EFM32_UART({ $at: 0x..., ... })
```

---

### `UART.EFR32_USART`

Full name: `Antmicro.Renode.Peripherals.UART.EFR32_USART`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.UART.EFR32_USART({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `clockFrequency` | `number` | optional |

---

### `UART.EFR32xG2_EUSART_2`

Full name: `Antmicro.Renode.Peripherals.UART.EFR32xG2_EUSART_2`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.UART.EFR32xG2_EUSART_2({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `clockFrequency` | `number` | optional |

---

### `UART.EFR32xG2_USART_0`

Full name: `Antmicro.Renode.Peripherals.UART.EFR32xG2_USART_0`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.UART.EFR32xG2_USART_0({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `clockFrequency` | `number` | **required** |

---

### `UART.EFR32xG22_USART`

Full name: `Antmicro.Renode.Peripherals.UART.EFR32xG22_USART`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.UART.EFR32xG22_USART({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `clockFrequency` | `number` | optional |

---

### `UART.ESP32_UART`

Full name: `Antmicro.Renode.Peripherals.UART.ESP32_UART`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.UART.ESP32_UART({ $at: 0x..., ... })
```

---

### `UART.FT9001_USART`

Full name: `Antmicro.Renode.Peripherals.UART.FT9001_USART`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.UART.FT9001_USART({ $at: 0x..., ... })
```

---

### `UART.GaislerAPBUART`

Full name: `Antmicro.Renode.Peripherals.UART.GaislerAPBUART`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.UART.gaislerAPBUART({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `fifoDepth` | `number` | optional |
| `frequency` | `number` | optional |

---

### `UART.GD32_UART`

Full name: `Antmicro.Renode.Peripherals.UART.GD32_UART`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.UART.GD32_UART({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `extendedMode` | `boolean` | optional |

---

### `UART.ImxUart`

Full name: `Antmicro.Renode.Peripherals.UART.ImxUart`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.UART.imxUart({ $at: 0x..., ... })
```

---

### `UART.Infineon_SCBUART`

Full name: `Antmicro.Renode.Peripherals.UART.Infineon_SCBUART`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.UART.infineon_SCBUART({ $at: 0x..., ... })
```

---

### `UART.K6xF_UART`

Full name: `Antmicro.Renode.Peripherals.UART.K6xF_UART`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.UART.k6xF_UART({ $at: 0x..., ... })
```

---

### `UART.KB1200_UART`

Full name: `Antmicro.Renode.Peripherals.UART.KB1200_UART`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.UART.KB1200_UART({ $at: 0x..., ... })
```

---

### `UART.LEUART`

Full name: `Antmicro.Renode.Peripherals.UART.LEUART`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.UART.LEUART({ $at: 0x..., ... })
```

---

### `UART.LINFlexD_UART`

Full name: `Antmicro.Renode.Peripherals.UART.LINFlexD_UART`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.UART.LINFlexD_UART({ $at: 0x..., ... })
```

---

### `UART.LiteX_UART`

Full name: `Antmicro.Renode.Peripherals.UART.LiteX_UART`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.UART.liteX_UART({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `txFifoCapacity` | `number` | optional |
| `flushDelayNs` | `number` | optional |
| `timeoutNs` | `number` | optional |

---

### `UART.LiteX_UART64`

Full name: `Antmicro.Renode.Peripherals.UART.LiteX_UART64`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.UART.liteX_UART64({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `txFifoCapacity` | `number` | optional |
| `flushDelayNs` | `number` | optional |
| `timeoutNs` | `number` | optional |

---

### `UART.LowPower_Timer`

Full name: `Antmicro.Renode.Peripherals.UART.LowPower_Timer`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.UART.lowPower_Timer({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `frequency` | `number` | optional |

---

### `UART.LPC_USART`

Full name: `Antmicro.Renode.Peripherals.UART.LPC_USART`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.UART.LPC_USART({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `clockFrequency` | `number` | optional |

---

### `UART.MAX32650_UART`

Full name: `Antmicro.Renode.Peripherals.UART.MAX32650_UART`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.UART.MAX32650_UART({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `gcr` | `string (peripheral ref)` | **required** |

---

### `UART.MAX32655_UART`

Full name: `Antmicro.Renode.Peripherals.UART.MAX32655_UART`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.UART.MAX32655_UART({ $at: 0x..., ... })
```

---

### `UART.MesonUart`

Full name: `Antmicro.Renode.Peripherals.UART.MesonUart`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.UART.mesonUart({ $at: 0x..., ... })
```

---

### `UART.MiV_CoreUART`

Full name: `Antmicro.Renode.Peripherals.UART.MiV_CoreUART`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.UART.miV_CoreUART({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `clockFrequency` | `number` | **required** |

---

### `UART.MPC5567_UART`

Full name: `Antmicro.Renode.Peripherals.UART.MPC5567_UART`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.UART.MPC5567_UART({ $at: 0x..., ... })
```

---

### `UART.MSP430_eUSCI`

Full name: `Antmicro.Renode.Peripherals.UART.MSP430_eUSCI`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.UART.MSP430_eUSCI({ $at: 0x..., ... })
```

---

### `UART.MSP430_USCIA`

Full name: `Antmicro.Renode.Peripherals.UART.MSP430_USCIA`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.UART.MSP430_USCIA({ $at: 0x..., ... })
```

---

### `UART.Murax_UART`

Full name: `Antmicro.Renode.Peripherals.UART.Murax_UART`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.UART.murax_UART({ $at: 0x..., ... })
```

---

### `UART.MxcUart`

Full name: `Antmicro.Renode.Peripherals.UART.MxcUart`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.UART.mxcUart({ $at: 0x..., ... })
```

---

### `UART.NEORV32_UART`

Full name: `Antmicro.Renode.Peripherals.UART.NEORV32_UART`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.UART.NEORV32_UART({ $at: 0x..., ... })
```

---

### `UART.NPCX_UART`

Full name: `Antmicro.Renode.Peripherals.UART.NPCX_UART`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.UART.NPCX_UART({ $at: 0x..., ... })
```

---

### `UART.NRF52840_UART`

Full name: `Antmicro.Renode.Peripherals.UART.NRF52840_UART`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.UART.NRF52840_UART({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `easyDMA` | `boolean` | optional |

---

### `UART.NRF54H20_UARTE`

Full name: `Antmicro.Renode.Peripherals.UART.NRF54H20_UARTE`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.UART.NRF54H20_UARTE({ $at: 0x..., ... })
```

---

### `UART.NS16550`

Full name: `Antmicro.Renode.Peripherals.UART.NS16550`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.UART.NS16550({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `wideRegisters` | `boolean` | optional |

---

### `UART.NXP_FLEXCOMM`

Full name: `Antmicro.Renode.Peripherals.UART.NXP_FLEXCOMM`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.UART.NXP_FLEXCOMM({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `uartFifoSize` | `number` | optional |
| `uartPresent` | `boolean` | optional |
| `i2cPresent` | `boolean` | optional |
| `spiPresent` | `boolean` | optional |

---

### `UART.NXP_LPUART`

Full name: `Antmicro.Renode.Peripherals.UART.NXP_LPUART`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.UART.NXP_LPUART({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `frequency` | `number` | optional |
| `hasGlobalRegisters` | `boolean` | optional |
| `hasFifoRegisters` | `boolean` | optional |
| `fifoSize` | `number` | optional |
| `separateIRQs` | `boolean` | optional |

---

### `UART.OpenTitan_UART`

Full name: `Antmicro.Renode.Peripherals.UART.OpenTitan_UART`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.UART.openTitan_UART({ $at: 0x..., ... })
```

---

### `UART.PicoSoC_SimpleUART`

Full name: `Antmicro.Renode.Peripherals.UART.PicoSoC_SimpleUART`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.UART.picoSoC_SimpleUART({ $at: 0x..., ... })
```

---

### `UART.PL011`

Full name: `Antmicro.Renode.Peripherals.UART.PL011`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.UART.PL011({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `fifoSize` | `number` | optional |
| `frequency` | `number` | optional |

---

### `UART.Potato_UART`

Full name: `Antmicro.Renode.Peripherals.UART.Potato_UART`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.UART.potato_UART({ $at: 0x..., ... })
```

---

### `UART.PULP_STDOUT`

Full name: `Antmicro.Renode.Peripherals.UART.PULP_STDOUT`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.UART.PULP_STDOUT({ $at: 0x..., ... })
```

---

### `UART.PULP_uDMA_UART`

Full name: `Antmicro.Renode.Peripherals.UART.PULP_uDMA_UART`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.UART.PULP_uDMA_UART({ $at: 0x..., ... })
```

---

### `UART.RCAR_UART`

Full name: `Antmicro.Renode.Peripherals.UART.RCAR_UART`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.UART.RCAR_UART({ $at: 0x..., ... })
```

---

### `UART.Renesas_SCI`

Full name: `Antmicro.Renode.Peripherals.UART.Renesas_SCI`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.UART.renesas_SCI({ $at: 0x..., ... })
```

---

### `UART.RenesasDA14_UART`

Full name: `Antmicro.Renode.Peripherals.UART.RenesasDA14_UART`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.UART.renesasDA14_UART({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `systemClockFrequency` | `number` | optional |

---

### `UART.RenesasRA8M1_SCI`

Full name: `Antmicro.Renode.Peripherals.UART.RenesasRA8M1_SCI`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.UART.renesasRA8M1_SCI({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `frequency` | `number` | **required** |

---

### `UART.SAM_USART`

Full name: `Antmicro.Renode.Peripherals.UART.SAM_USART`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.UART.SAM_USART({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `clockFrequency` | `number` | optional |
| `uartOnlyMode` | `boolean` | optional |
| `enablePdc` | `boolean` | optional |

---

### `UART.SAMD20_UART`

Full name: `Antmicro.Renode.Peripherals.UART.SAMD20_UART`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.UART.SAMD20_UART({ $at: 0x..., ... })
```

---

### `UART.SAMD5_UART`

Full name: `Antmicro.Renode.Peripherals.UART.SAMD5_UART`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.UART.SAMD5_UART({ $at: 0x..., ... })
```

---

### `UART.SemihostingUart`

Full name: `Antmicro.Renode.Peripherals.UART.SemihostingUart`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.UART.semihostingUart({ $at: 0x..., ... })
```

---

### `UART.SI32_USART`

Full name: `Antmicro.Renode.Peripherals.UART.SI32_USART`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.UART.SI32_USART({ $at: 0x..., ... })
```

---

### `UART.SiFive_UART`

Full name: `Antmicro.Renode.Peripherals.UART.SiFive_UART`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.UART.siFive_UART({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `inputClockFrequency` | `number` | optional |

---

### `UART.SmartbondUART`

Full name: `Antmicro.Renode.Peripherals.UART.SmartbondUART`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.UART.smartbondUART({ $at: 0x..., ... })
```

---

### `UART.STM32_UART`

Full name: `Antmicro.Renode.Peripherals.UART.STM32_UART`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.UART.STM32_UART({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `frequency` | `number` | optional |

---

### `UART.STM32F7_USART`

Full name: `Antmicro.Renode.Peripherals.UART.STM32F7_USART`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.UART.STM32F7_USART({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `frequency` | `number` | **required** |
| `lowPowerMode` | `boolean` | optional |

---

### `UART.STM32W_UART`

Full name: `Antmicro.Renode.Peripherals.UART.STM32W_UART`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.UART.STM32W_UART({ $at: 0x..., ... })
```

---

### `UART.TrivialUart`

Full name: `Antmicro.Renode.Peripherals.UART.TrivialUart`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.UART.trivialUart({ $at: 0x..., ... })
```

---

### `UART.UARTRESDFeeder`

Full name: `Antmicro.Renode.Peripherals.UART.UARTRESDFeeder`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.UART.UARTRESDFeeder({ $at: 0x..., ... })
```

---

### `UART.USBSerialPort_S3B`

Full name: `Antmicro.Renode.Peripherals.UART.USBSerialPort_S3B`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.UART.USBSerialPort_S3B({ $at: 0x..., ... })
```

---

### `UART.VirtualConsole`

Full name: `Antmicro.Renode.Peripherals.UART.VirtualConsole`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.UART.virtualConsole({ $at: 0x..., ... })
```

---

### `UART.XMC4XXX_UART`

Full name: `Antmicro.Renode.Peripherals.UART.XMC4XXX_UART`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.UART.XMC4XXX_UART({ $at: 0x..., ... })
```

---

## USB

### `USB.Cadence_USB`

Full name: `Antmicro.Renode.Peripherals.USB.Cadence_USB`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.USB.cadence_USB({ $at: 0x..., ... })
```

---

### `USB.Cadence_USB+DMACore`

Full name: `Antmicro.Renode.Peripherals.USB.Cadence_USB+DMACore`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.USB.cadence_USB+DMACore({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `parent` | `string (peripheral ref)` | **required** |

---

### `USB.CDCToUARTConverter`

Full name: `Antmicro.Renode.Peripherals.USB.CDCToUARTConverter`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.USB.CDCToUARTConverter({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `uartDataInEndpoint` | `number` | optional |

---

### `USB.MPFS_USB`

Full name: `Antmicro.Renode.Peripherals.USB.MPFS_USB`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.USB.MPFS_USB({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `mode` | `"Host" \| "Device"` | optional |

---

### `USB.NRF_USBD`

Full name: `Antmicro.Renode.Peripherals.USB.NRF_USBD`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.USB.NRF_USBD({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `maximumPacketSize` | `number` | optional |

---

### `USB.USBKeyboard`

Full name: `Antmicro.Renode.Peripherals.USB.USBKeyboard`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.USB.USBKeyboard({ $at: 0x..., ... })
```

---

### `USB.USBMouse`

Full name: `Antmicro.Renode.Peripherals.USB.USBMouse`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.USB.USBMouse({ $at: 0x..., ... })
```

---

### `USB.USBPendrive`

Full name: `Antmicro.Renode.Peripherals.USB.USBPendrive`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.USB.USBPendrive({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `imageFile` | `string` | **required** |
| `size` | `number` | optional |
| `persistent` | `boolean` | optional |
| `blockSize` | `number` | optional |
| `compression` | `"None" \| "GZip"` | optional |

---

### `USB.ValentyUSB`

Full name: `Antmicro.Renode.Peripherals.USB.ValentyUSB`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.USB.valentyUSB({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `maximumPacketSize` | `number` | optional |

---

## USBDeprecated

### `USBDeprecated.DummyUSBDevice`

Full name: `Antmicro.Renode.Peripherals.USBDeprecated.DummyUSBDevice`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.USBDeprecated.dummyUSBDevice({ $at: 0x..., ... })
```

---

### `USBDeprecated.EHCIHostController`

Full name: `Antmicro.Renode.Peripherals.USBDeprecated.EHCIHostController`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.USBDeprecated.EHCIHostController({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `ehciBaseAddress` | `number` | optional |
| `capabilityRegistersLength` | `number` | optional |
| `numberOfPorts` | `number` | optional |
| `ulpiBaseAddress` | `number` | optional |

---

### `USBDeprecated.ISP1761`

Full name: `Antmicro.Renode.Peripherals.USBDeprecated.ISP1761`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.USBDeprecated.ISP1761({ $at: 0x..., ... })
```

---

### `USBDeprecated.MassStorage`

Full name: `Antmicro.Renode.Peripherals.USBDeprecated.MassStorage`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.USBDeprecated.massStorage({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `underlyingFile` | `string` | **required** |
| `numberOfBlocks` | `number` | optional |
| `blockSize` | `number` | optional |
| `persistent` | `boolean` | optional |

---

### `USBDeprecated.SMSC9500`

Full name: `Antmicro.Renode.Peripherals.USBDeprecated.SMSC9500`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.USBDeprecated.SMSC9500({ $at: 0x..., ... })
```

---

### `USBDeprecated.Ulpi`

Full name: `Antmicro.Renode.Peripherals.USBDeprecated.Ulpi`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.USBDeprecated.ulpi({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `baseAddress` | `number` | **required** |

---

### `USBDeprecated.USBEthernetControlModelDevice`

Full name: `Antmicro.Renode.Peripherals.USBDeprecated.USBEthernetControlModelDevice`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.USBDeprecated.USBEthernetControlModelDevice({ $at: 0x..., ... })
```

---

### `USBDeprecated.USBEthernetEmulationModelDevice`

Full name: `Antmicro.Renode.Peripherals.USBDeprecated.USBEthernetEmulationModelDevice`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.USBDeprecated.USBEthernetEmulationModelDevice({ $at: 0x..., ... })
```

---

### `USBDeprecated.UsbHub`

Full name: `Antmicro.Renode.Peripherals.USBDeprecated.UsbHub`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.USBDeprecated.usbHub({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `nrPorts` | `number` | **required** |

---

### `USBDeprecated.USBKeyboard`

Full name: `Antmicro.Renode.Peripherals.USBDeprecated.USBKeyboard`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.USBDeprecated.USBKeyboard({ $at: 0x..., ... })
```

---

### `USBDeprecated.USBMouse`

Full name: `Antmicro.Renode.Peripherals.USBDeprecated.USBMouse`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.USBDeprecated.USBMouse({ $at: 0x..., ... })
```

---

### `USBDeprecated.USBTablet`

Full name: `Antmicro.Renode.Peripherals.USBDeprecated.USBTablet`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.USBDeprecated.USBTablet({ $at: 0x..., ... })
```

---

## Video

### `Video.Allegro_E310`

Full name: `Antmicro.Renode.Peripherals.Video.Allegro_E310`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Video.allegro_E310({ $at: 0x..., ... })
```

---

### `Video.Allegro_E310+Channel`

Full name: `Antmicro.Renode.Peripherals.Video.Allegro_E310+Channel`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Video.allegro_E310+Channel({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `owner` | `string (peripheral ref)` | **required** |
| `uid` | `number` | **required** |
| `msg` | `string (peripheral ref)` | **required** |

---

### `Video.LiteX_Framebuffer`

Full name: `Antmicro.Renode.Peripherals.Video.LiteX_Framebuffer`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Video.liteX_Framebuffer({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `format` | `"A4" \| "L4" \| "A8" \| "L8" \| "AL44" \| "AL88" \| "RGB565" \| "BGR565" \| "BGR888" \| "RGB888" \| "ARGB1555" \| "ARGB4444" \| "RGBA4444" \| "ABGR4444" \| "BGRA4444" \| "XRGB4444" \| "RGBX4444" \| "XBGR4444" \| "BGRX4444" \| "BGRA8888" \| "RGBA8888" \| "ABGR8888" \| "ARGB8888" \| "BGRX8888" \| "RGBX8888" \| "XRGB8888" \| "XBGR8888" \| "NV12"` | **required** |
| `memory` | `string (peripheral ref)` | **required** |

---

### `Video.LiteX_Framebuffer_CSR32`

Full name: `Antmicro.Renode.Peripherals.Video.LiteX_Framebuffer_CSR32`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Video.liteX_Framebuffer_CSR32({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `format` | `"A4" \| "L4" \| "A8" \| "L8" \| "AL44" \| "AL88" \| "RGB565" \| "BGR565" \| "BGR888" \| "RGB888" \| "ARGB1555" \| "ARGB4444" \| "RGBA4444" \| "ABGR4444" \| "BGRA4444" \| "XRGB4444" \| "RGBX4444" \| "XBGR4444" \| "BGRX4444" \| "BGRA8888" \| "RGBA8888" \| "ABGR8888" \| "ARGB8888" \| "BGRX8888" \| "RGBX8888" \| "XRGB8888" \| "XBGR8888" \| "NV12"` | **required** |
| `memory` | `string (peripheral ref)` | **required** |
| `offset` | `number` | optional |
| `hres` | `number` | optional |
| `vres` | `number` | optional |

---

### `Video.MusteinGenericGPU`

Full name: `Antmicro.Renode.Peripherals.Video.MusteinGenericGPU`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Video.musteinGenericGPU({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `buffer` | `string (peripheral ref)` | **required** |
| `registers64bitAligned` | `boolean` | optional |
| `controlBit` | `number` | optional |
| `frameBufferSize` | `number` | optional |

---

### `Video.PL110`

Full name: `Antmicro.Renode.Peripherals.Video.PL110`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Video.PL110({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `screenWidth` | `number` | optional |
| `screenHeight` | `number` | optional |

---

### `Video.STM32LTDC`

Full name: `Antmicro.Renode.Peripherals.Video.STM32LTDC`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Video.STM32LTDC({ $at: 0x..., ... })
```

---

### `Video.TegraDisplay`

Full name: `Antmicro.Renode.Peripherals.Video.TegraDisplay`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Video.tegraDisplay({ $at: 0x..., ... })
```

---

### `Video.TegraSyncpts`

Full name: `Antmicro.Renode.Peripherals.Video.TegraSyncpts`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Video.tegraSyncpts({ $at: 0x..., ... })
```

---

### `Video.VybridDCU`

Full name: `Antmicro.Renode.Peripherals.Video.VybridDCU`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Video.vybridDCU({ $at: 0x..., ... })
```

---

## Wireless

### `Wireless.AT86RF233`

Full name: `Antmicro.Renode.Peripherals.Wireless.AT86RF233`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Wireless.AT86RF233({ $at: 0x..., ... })
```

---

### `Wireless.CC1200`

Full name: `Antmicro.Renode.Peripherals.Wireless.CC1200`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Wireless.CC1200({ $at: 0x..., ... })
```

---

### `Wireless.CC2520`

Full name: `Antmicro.Renode.Peripherals.Wireless.CC2520`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Wireless.CC2520({ $at: 0x..., ... })
```

---

### `Wireless.CC2538RF`

Full name: `Antmicro.Renode.Peripherals.Wireless.CC2538RF`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Wireless.CC2538RF({ $at: 0x..., ... })
```

---

### `Wireless.EFR32xG24_Radio`

Full name: `Antmicro.Renode.Peripherals.Wireless.EFR32xG24_Radio`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Wireless.EFR32xG24_Radio({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `ram` | `string (peripheral ref)` | **required** |
| `sequencer` | `string (peripheral ref)` | **required** |
| `pa0DbmSupport` | `boolean` | optional |
| `pa10DbmSupport` | `boolean` | optional |
| `pa20DbmSupport` | `boolean` | optional |

---

### `Wireless.EmberRadio`

Full name: `Antmicro.Renode.Peripherals.Wireless.EmberRadio`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Wireless.emberRadio({ $at: 0x..., ... })
```

---

### `Wireless.NRF52840_Radio`

Full name: `Antmicro.Renode.Peripherals.Wireless.NRF52840_Radio`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Wireless.NRF52840_Radio({ $at: 0x..., ... })
```

---

### `Wireless.SlipRadio`

Full name: `Antmicro.Renode.Peripherals.Wireless.SlipRadio`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.Wireless.slipRadio({ $at: 0x..., ... })
```

**Options** (constructor parameters):

| Option | Type | Required |
|--------|------|----------|
| `linkName` | `string` | **required** |

---

## X86

### `X86.Quark_GPIOController`

Full name: `Antmicro.Renode.Peripherals.X86.Quark_GPIOController`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.X86.quark_GPIOController({ $at: 0x..., ... })
```

---

### `X86.Quark_PWM`

Full name: `Antmicro.Renode.Peripherals.X86.Quark_PWM`

```ts
import { Peripherals } from "@typenode/peripherals";
Peripherals.X86.quark_PWM({ $at: 0x..., ... })
```

---
