/**
 * Machine fixture for Vitest.
 *
 * Usage
 * ──────
 *   import { createTest } from "@typenode/vitest";
 *
 *   const test = createTest({ rescPath: ".typenode/stm32f4-hello.resc" });
 *
 *   test("boots and prints READY", async ({ machine }) => {
 *     const uart = await machine.uart("uart0");
 *     await machine.start();
 *     await uart.expect(/READY/, { timeout: 5_000 });
 *   });
 *
 * Lifecycle
 * ─────────
 * A fresh Renode process is spawned for every test (analogous to Vitest's
 * default isolation model).  The process is forcibly killed on teardown even
 * if the test throws, so leaked processes are not a concern.
 *
 * Snapshot mode
 * ─────────────
 * Use `emitRepl` / `emitResc` from `@typenode/emit` with Vitest's built-in
 * `toMatchSnapshot()` to snapshot-test generated .repl files without booting
 * Renode:
 *
 *   import { emitRepl } from "@typenode/emit";
 *   import { defineMachine } from "@typenode/core";
 *
 *   test("repl snapshot", () => {
 *     expect(emitRepl(defineMachine({ ... }))).toMatchSnapshot();
 *   });
 */

import { test as vitestBase, type TestContext } from "vitest";
import { Machine, type MachineCreateOptions } from "@typenode/runtime";

// ── Fixture types ─────────────────────────────────────────────────────────────

export interface MachineFixture {
  /** Live handle to the Renode machine for this test. */
  machine: Machine;
}

// ── createTest ────────────────────────────────────────────────────────────────

/**
 * Create a Vitest `test` function extended with a `machine` fixture.
 *
 * @param defaults  Default options forwarded to `Machine.create()`.
 *                  Every test shares these defaults; individual tests can
 *                  override via their own `machineOptions` fixture (see below).
 */
export function createTest(defaults: MachineCreateOptions) {
  return vitestBase.extend<MachineFixture>({
    machine: async (
      _ctx: TestContext,
      use: (m: Machine) => Promise<void>,
    ) => {
      const machine = await Machine.create(defaults);
      try {
        await use(machine);
      } finally {
        await machine.quit().catch((err: unknown) => {
          console.error("[typenode] Machine.quit() failed:", err);
        });
      }
    },
  });
}

// ── Convenience re-exports ────────────────────────────────────────────────────

export {
  describe,
  expect,
  beforeAll,
  afterAll,
  beforeEach,
  afterEach,
  vi,
} from "vitest";
