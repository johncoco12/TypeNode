# CLI

The `@typenode/cli` package provides the `typenode` binary.

## Commands

### `typenode generate`

```
typenode generate <machine.ts> [--out <dir>]
```

Imports `machine.ts`, reads the default export, and emits two files:

- `<dir>/<name>.repl` — the Renode platform description
- `<dir>/<name>.resc` — the Renode script that loads the platform and firmware

Output directory defaults to `.typenode/` relative to the current working directory.

**Example:**

```bash
typenode generate src/machine.ts
# → .typenode/my-board.repl
# → .typenode/my-board.resc

typenode generate src/machine.ts --out dist/renode
# → dist/renode/my-board.repl
# → dist/renode/my-board.resc
```

---

### `typenode run`

```
typenode run <machine.ts> [--out <dir>] [--headless]
```

Runs `generate` then spawns Renode with the generated `.resc`.

Without `--headless`, Renode opens its GUI monitor window. Use `--headless` in CI — it passes `--plain --hide-log` to Renode and keeps everything in the terminal.

**Example:**

```bash
typenode run src/machine.ts --headless
```

---

### `typenode version` / `--version` / `-v`

Prints the TypeNode version, Node.js version, and detected Renode binary + version.

---

### `typenode help` / `--help`

Prints the usage summary.

---

## Environment variables

| Variable | Description |
|----------|-------------|
| `TYPENODE_RENODE` | Path to the `renode` binary. Takes precedence over PATH. |

## Snap / VS Code note

If you run TypeNode from a snap-packaged editor (e.g. VS Code snap), the snap environment injects `LD_LIBRARY_PATH` entries that break Renode's startup. TypeNode automatically strips `LD_LIBRARY_PATH`, `LD_PRELOAD`, and all `SNAP_*` variables before spawning any subprocess.
