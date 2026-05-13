/**
 * Build a sanitised environment for spawning child processes (Renode, dotnet).
 *
 * When TypeNode is launched from a snap-packaged editor (e.g. VSCode Snap),
 * the inherited environment contains vars like LD_LIBRARY_PATH that point into
 * the snap container. These poison dotnet's ELF loader and cause:
 *
 *   dotnet: symbol lookup error: /snap/core20/.../libpthread.so.0:
 *           undefined symbol: __libc_pthread_init, version GLIBC_PRIVATE
 *
 * We fix it by stripping LD_LIBRARY_PATH, LD_PRELOAD, and all SNAP_* keys
 * before handing the env to the spawned process.
 */

const POISON_KEYS = new Set(["LD_LIBRARY_PATH", "LD_PRELOAD"]);

export function buildSpawnEnv(): NodeJS.ProcessEnv {
  const env: NodeJS.ProcessEnv = { ...process.env };
  for (const key of Object.keys(env)) {
    if (POISON_KEYS.has(key) || key.startsWith("SNAP_")) {
      delete env[key];
    }
  }
  return env;
}
