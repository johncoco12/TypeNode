# Runtime API

`@typenode/runtime` lets you drive a live Renode instance from TypeScript over its Monitor TCP socket.

## `Machine`

### `Machine.create(opts)`

Spawns Renode, loads the `.resc`, waits for the Monitor port to open, and returns a `Machine` handle. Emulation is **not** started yet.

```ts
import { Machine } from "@typenode/runtime";

const machine = await Machine.create({
  rescPath: ".typenode/my-board.resc",
});
```

**Options:**

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `rescPath` | `string` | required | Path to the `.resc` file |
| `renode` | `string` | auto | Renode binary path — falls back to `TYPENODE_RENODE` env var then PATH |
| `port` | `number` | auto | Monitor TCP port — OS-allocated if omitted, safe for parallel runs |
| `startupTimeout` | `number` | `15000` | Milliseconds to wait for Renode to open the Monitor port |

### Lifecycle methods

```ts
await machine.start();   // start the emulation clock
await machine.pause();   // pause the emulation clock
await machine.reset();   // reset to initial state, keep peripherals
await machine.quit();    // stop Renode and release all resources
```

`quit()` is safe to call multiple times and always cleans up, even if Renode already exited.

### `machine.send(command)`

Send a raw Monitor command and return the text response:

```ts
const resp = await machine.send("sysbus.uart0 GetType");
console.log(resp);
```

### `machine.uart(name)`

Attach a typed UART handle backed by a temp log file:

```ts
const uart = await machine.uart("uart0");
```

Call once per UART per machine instance — repeated calls return the same handle.

---

## `UartHandle`

### `uart.expect(pattern, opts?)`

Wait until the UART output matches a string or regex. Returns the matched line.

```ts
await uart.expect(/READY/, { timeout: 5_000 });
await uart.expect("boot complete");
```

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `timeout` | `number` | `5000` | Milliseconds before throwing |

### `uart.write(data)`

Send bytes to the UART input:

```ts
await uart.write("ping\n");
```

---

## Full example

```ts
import { Machine } from "@typenode/runtime";

const machine = await Machine.create({
  rescPath: ".typenode/my-board.resc",
});

const uart = await machine.uart("uart0");

await machine.start();
await uart.expect(/READY/, { timeout: 5_000 });

await uart.write("ping\n");
await uart.expect(/pong/);

await machine.quit();
```

---

## Port allocation

When `port` is omitted, TypeNode asks the OS for a free TCP port before starting Renode. This means multiple Renode processes can run in parallel (e.g. in parallel Vitest workers) without port conflicts.
