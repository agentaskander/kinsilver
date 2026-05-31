import { readdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const root = "dist-prod";
const replacements = new Map([
  ["Quality ontology", "Quality standards"],
  ["quality ontology", "quality standards"],
  ["Supplier ontology", "Supplier standards"],
  ["supplier ontology", "supplier standards"],
  ["supplierOntology", "supplier standards"],
  ["qualityOntology", "quality standards"],
  ["launchGate", "launch readiness"],
  ["checkoutGate", "checkout readiness"]
]);

const javascriptReplacements = new Map([
  ["Quality ontology", "Quality standards"],
  ["quality ontology", "quality standards"],
  ["Supplier ontology", "Supplier standards"],
  ["supplier ontology", "supplier standards"],
  ["supplierOntology", "supplierStandards"],
  ["qualityOntology", "qualityStandards"],
  ["launchGate", "launchReadiness"],
  ["checkoutGate", "checkoutReadiness"]
]);

const forbiddenReplacementTerms = [
  "Kin",
  "KIN",
  "KinSilver",
  "kinSilver",
  "kinsilver",
  "brand",
  "title",
  "product",
  "story",
  "internal",
  "agent",
  "ontology"
];

for (const term of forbiddenReplacementTerms) {
  if (replacements.has(term) || javascriptReplacements.has(term)) {
    console.error(`Sanitize configuration rejected broad replacement term: ${term}`);
    process.exit(1);
  }
}

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

let changedFiles = 0;
let replacementCount = 0;

try {
  const files = await collectFiles(root);

  for (const file of files) {
    const original = await readFile(file, "utf8");
    let next = original;
    const activeReplacements = [".js", ".mjs"].includes(path.extname(file)) ? javascriptReplacements : replacements;

    for (const [from, to] of activeReplacements) {
      const before = next;
      next = next.split(from).join(to);
      if (next !== before) {
        replacementCount += before.split(from).length - 1;
      }
    }

    if (next !== original) {
      changedFiles += 1;
      await writeFile(file, next);
    }
  }
} catch (error) {
  console.error(`Sanitize failed for ${root}: ${error.message}`);
  process.exit(1);
}

console.log(`Prod sanitize complete: ${changedFiles} files changed, ${replacementCount} replacements`);
