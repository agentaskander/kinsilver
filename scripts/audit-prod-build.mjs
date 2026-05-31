import { readdir, readFile } from "node:fs/promises";
import path from "node:path";

const root = "dist-prod";
const hardFailTerms = [
  "supplierOntology",
  "qualityOntology",
  "launchGate",
  "checkoutGate",
  "internalOnly",
  "privateOnly",
  "apiKey",
  "secret",
  "token",
  ".env",
  "promptChain",
  "scoringWeights",
  "embeddingStore",
  "rawDataset",
  "adminOnly"
];
const warningTerms = [
  "ontology",
  "workflow",
  "agent",
  "scoring",
  "internal",
  "private",
  "orchestration"
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

function findTerms(content, terms) {
  return terms.filter((term) => content.includes(term));
}

let failureCount = 0;
let warningCount = 0;

try {
  const files = await collectFiles(root);

  for (const file of files) {
    const content = await readFile(file, "utf8");
    for (const term of findTerms(content, hardFailTerms)) {
      failureCount += 1;
      console.error(`FAIL ${file}: ${term}`);
    }
    for (const term of findTerms(content, warningTerms)) {
      warningCount += 1;
      console.warn(`WARN ${file}: ${term}`);
    }
  }
} catch (error) {
  console.error(`FAIL ${root}: ${error.message}`);
  process.exit(1);
}

console.log(`Prod audit complete: ${failureCount} failures, ${warningCount} warnings`);
process.exit(failureCount > 0 ? 1 : 0);
