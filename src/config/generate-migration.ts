import { execSync } from "child_process";

const [, , migrationName] = process.argv;

if (!migrationName) {
  console.error("Migration name is required.");
  process.exit(1);
}

const command = `npx typeorm-ts-node-esm migration:generate -d ./src/config/data-source.ts ./src/migration/${migrationName}`;

try {
  execSync(command, { stdio: "inherit" });
} catch (error) {
  process.exit(1);
}
