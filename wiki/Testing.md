# Testing

TypeNode has two testing approaches: **hardware-in-the-loop** tests that boot real Renode instances, and **snapshot tests** that verify the generated `.repl` output without running anything.

## Hardware-in-the-loop tests (`@typenode/vitest`)

`@typenode/vitest` wraps `@typenode/runtime` with a Vitest fixture that boots a fresh Renode process per test and kills it on teardown — even if the test throws.

### Setup

```ts
import { createTest, describe, expect } from "@typenode/vitest";

const test = createTest({ rescPath: ".typenode/my-board.resc" });
```

`createTest` returns a Vitest `test` function extended with a `machine` fixture.

### Writing tests

```ts
describe("my-board", () => {
  test("boots and prints READY", async ({ machine }) => {
    const uart = await machine.uart("uart0");
    await machine.start();
    await uart.expect(/READY/, { timeout: 5_000 });
  });

  test("responds to ping", async ({ machine }) => {
    const uart = await machine.uart("uart0");
    await machine.start();
    await uart.expect(/READY/);
    await uart.write("ping\n");
    await uart.expect(/pong/);
  });
});
```

Each `test` gets its own `machine` — a fresh `Machine` instance from `Machine.create()`. The fixture handles `machine.quit()` automatically after the test, passing or failing.

### Parallel tests

Because each machine gets its own OS-allocated Monitor port, tests can run in parallel across Vitest workers without conflict.

### `vitest.config.ts`

Generate the `.resc` before your test run by adding the typenode generate step, or run it once manually. A minimal config:

```ts
import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    testTimeout: 30_000,  // hardware tests can be slow
  },
});
```

---

## Snapshot tests

If you just want to verify that a machine description emits the expected `.repl` without actually booting Renode, use `emitRepl` from `@typenode/emit` directly in a plain Vitest test:

```ts
import { test, expect } from "vitest";
import { emitRepl } from "@typenode/emit";
import machine from "./machine.ts";

test("repl snapshot", () => {
  expect(emitRepl(machine)).toMatchSnapshot();
});
```

This runs instantly (no Renode required) and is a good sanity check for peripheral wiring changes.

---

## CI setup

Run with `--headless` to avoid Renode trying to open a GUI:

```bash
typenode generate machine.ts && npx vitest run
```

Or generate inside a `globalSetup` file so it runs once before all tests:

```ts
// vitest.global-setup.ts
import { runGenerate } from "@typenode/cli/commands/generate";

export async function setup() {
  await runGenerate({ file: "machine.ts", outDir: ".typenode" });
}
```

```ts
// vitest.config.ts
export default defineConfig({
  test: {
    globalSetup: "./vitest.global-setup.ts",
  },
});
```
