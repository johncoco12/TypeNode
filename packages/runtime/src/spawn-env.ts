/**
 * Build a sanitised environment suitable for spawning Renode / dotnet children.
 *
 * When TypeNode runs inside a snap-packaged IDE (e.g. VS Code snap), the
 * parent snap injects GTK/GDK/GIO module paths that point into the snap and
 * into core20.  Renode's full-startup initialises GLib/GTK and dlopen-loads
 * those modules; the modules have RPATH → /snap/core20/…, which drags in the
 * core20 libpthread — incompatible with the host glibc (Ubuntu 25.10,
 * GLIBC 2.42) — causing an immediate fatal symbol-lookup error.
 *
 * This function strips every snap-related pollution from the environment:
 *
 * - `LD_PRELOAD`       – deleted entirely (snap shims must not be injected).
 * - `SNAP_*` keys      – deleted entirely.
 * - Colon-separated path vars (`LD_LIBRARY_PATH`, `GTK_PATH`, etc.) – any
 *   entry whose path starts with `/snap/` is removed; the variable is deleted
 *   if no entries remain.
 * - Any other single-value var whose value starts with `/snap/` is deleted
 *   (e.g. `GTK_EXE_PREFIX=/snap/code/…`).
 *
 * PATH is intentionally left unchanged so that `dotnet`, `renode`, and other
 * tools remain discoverable.
 */

/** Deleted unconditionally regardless of value. */
const POISON_KEYS = new Set(["LD_PRELOAD"]);

/**
 * Colon-separated path list variables whose individual entries are filtered
 * when they start with `/snap/`.  The variable is deleted if no entries survive.
 */
const PATH_LIKE_KEYS = new Set(["LD_LIBRARY_PATH", "GTK_PATH"]);

export function buildSpawnEnv(): NodeJS.ProcessEnv {
  const env: NodeJS.ProcessEnv = { ...process.env };

  for (const [key, value] of Object.entries(env)) {
    // 1. Unconditionally poisoned keys.
    if (POISON_KEYS.has(key) || key.startsWith("SNAP_")) {
      delete env[key];
      continue;
    }

    if (value === undefined) continue;

    // 2. Colon-separated path lists: strip /snap/ entries.
    if (PATH_LIKE_KEYS.has(key)) {
      const filtered = value
        .split(":")
        .filter((p) => p.length > 0 && !p.startsWith("/snap/"))
        .join(":");
      if (filtered.length > 0) {
        env[key] = filtered;
      } else {
        delete env[key];
      }
      continue;
    }

    // 3. Any single-value var pointing directly into /snap/.
    if (value.startsWith("/snap/")) {
      delete env[key];
    }
  }

  return env;
}
