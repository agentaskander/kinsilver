import { readdir, readFile } from "node:fs/promises";
import path from "node:path";

const root = "dist-stage";
const hardFailTerms = [
  "apiKey",
  "secret",
  "token",
  ".env",
  "rawDataset",
  "unrestricted admin"
];
const warningTerms = [
  "private",
  "internal"
];

const textExtensions = new Set([
  ".css",
  ".html",
  ".js",
  ".json",
  ".map",
  ".mjs",
  ".svg",
  ".txt",
  ".xml"
]);

async function collectFiles(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...await collectFiles(fullPath));
    } else if (entry.isFile() && textExtensions.has(path.extname(entry.name))) {
      files.push(fullPath);
    }
  }

  return files;
}

let failureCount = 0;
let warningCount = 0;

try {
  const files = await collectFiles(root);

  for (const file of files) {
    const content = await readFile(file, "utf8");
    for (const term of hardFailTerms) {
      if (content.includes(term)) {
        failureCount += 1;
        console.error(`FAIL ${file}: ${term}`);
      }
    }
    for (const term of warningTerms) {
      if (content.includes(term)) {
        warningCount += 1;
        console.warn(`WARN ${file}: ${term}`);
      }
    }
  }
} catch (error) {
  console.error(`FAIL ${root}: ${error.message}`);
  process.exit(1);
}

console.log(`Stage audit complete: ${failureCount} failures, ${warningCount} warnings`);
process.exit(failureCount > 0 ? 1 : 0);
