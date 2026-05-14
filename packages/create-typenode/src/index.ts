#!/usr/bin/env -S npx tsx
import { readFileSync } from "node:fs";
import { resolve, basename } from "node:path";
import { createInterface } from "node:readline";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { scaffold } from "./scaffold.ts";

const __dirname = dirname(fileURLToPath(import.meta.url));

function getVersion(): string {
  try {
    const pkg = JSON.parse(readFileSync(join(__dirname, "../package.json"), "utf8"));
    return pkg.version ?? "latest";
  } catch {
    return "latest";
  }
}

async function prompt(question: string): Promise<string> {
  const rl = createInterface({ input: process.stdin, output: process.stdout });
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      rl.close();
      resolve(answer.trim());
    });
  });
}

function toValidName(input: string): string {
  return input
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-_]/g, "")
    .replace(/^-+|-+$/g, "") || "my-typenode-project";
}

async function main(): Promise<void> {
  console.log(`
 _____ __   __ ____  _____  _   _  ___  ____  _____
|_   _|\\ \\ / /|  _ \\| ____|  \\ | |/ _ \\|  _ \\| ____|
  | |   \\ V / | |_) |  _|  |  \\| | | | | | | |  _|
  | |    | |  |  __/| |___ | |\\  | |_| | |_| | |___
  |_|    |_|  |_|   |_____||_| \\_|\\___/|____/|_____|

  create-typenode v${getVersion()}
`);

  let projectName = process.argv[2]?.trim() ?? "";

  if (!projectName) {
    projectName = await prompt("Project name: (my-typenode-project) ");
    if (!projectName) projectName = "my-typenode-project";
  }

  const name = toValidName(projectName);
  const targetDir = resolve(process.cwd(), name);

  console.log(`\nScaffolding into ${targetDir} ...\n`);

  try {
    const { files } = await scaffold({ name, targetDir, version: getVersion() });
    for (const f of files) console.log(`  created  ${f}`);
  } catch (err: any) {
    console.error(`\nError: ${err?.message ?? err}`);
    process.exit(1);
  }

  const rel = basename(targetDir);
  console.log(`
Done! Next steps:

  cd ${rel}
  npm install
  npx typenode generate machine.ts
  npm test
`);
}

await main();
