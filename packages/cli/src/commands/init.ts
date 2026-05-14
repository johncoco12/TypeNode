import { readFileSync } from "node:fs";
import { resolve, basename } from "node:path";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { scaffold } from "create-typenode";

const __dirname = dirname(fileURLToPath(import.meta.url));

function getVersion(): string {
  try {
    const pkg = JSON.parse(readFileSync(join(__dirname, "../../package.json"), "utf8"));
    return pkg.version ?? "latest";
  } catch {
    return "latest";
  }
}

export async function runInit(projectName: string | undefined): Promise<void> {
  const name = projectName
    ? projectName.toLowerCase().replace(/[^a-z0-9-_]/g, "-").replace(/^-+|-+$/g, "")
    : basename(resolve(process.cwd()));

  const targetDir = projectName
    ? resolve(process.cwd(), projectName)
    : resolve(process.cwd());

  console.error(`Scaffolding into ${targetDir} ...\n`);

  const { files } = await scaffold({ name, targetDir, version: getVersion() });
  for (const f of files) console.error(`  created  ${f}`);

  const instructions = projectName
    ? `\n  cd ${projectName}\n  npm install\n  npx typenode generate machine.ts\n  npm test`
    : `\n  npm install\n  npx typenode generate machine.ts\n  npm test`;

  console.error(`\nDone! Next steps:\n${instructions}\n`);
}
