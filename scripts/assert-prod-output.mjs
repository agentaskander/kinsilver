import { readdir, readFile, stat } from "node:fs/promises";
import path from "node:path";

const prodRoot = "dist-prod";
const defaultRoot = "dist";
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

function printCloudflareSettings() {
  console.log("Cloudflare required settings:");
  console.log("Build command: npm run build");
  console.log("Output directory: dist-prod");
}

async function exists(filePath) {
  try {
    await stat(filePath);
    return true;
  } catch (error) {
    if (error.code === "ENOENT") {
      return false;
    }
    throw error;
  }
}

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

if (!await exists(prodRoot)) {
  console.error(`FAIL ${prodRoot}: required production output directory is missing`);
  failureCount += 1;
}

const prodIndex = path.join(prodRoot, "index.html");
const defaultIndex = path.join(defaultRoot, "index.html");

if (await exists(defaultIndex)) {
  if (!await exists(prodIndex)) {
    console.error(`FAIL ${prodIndex}: required production index.html is missing while ${defaultIndex} exists`);
    failureCount += 1;
  } else {
    const [defaultIndexStat, prodIndexStat] = await Promise.all([
      stat(defaultIndex),
      stat(prodIndex)
    ]);

    if (defaultIndexStat.mtimeMs > prodIndexStat.mtimeMs) {
      console.error(`FAIL ${defaultIndex}: default dist index.html is newer than ${prodIndex}`);
      failureCount += 1;
    }
  }
}

if (await exists(prodRoot)) {
  try {
    const files = await collectFiles(prodRoot);
    for (const file of files) {
      const content = await readFile(file, "utf8");
      for (const term of hardFailTerms) {
        if (content.includes(term)) {
          console.error(`FAIL ${file}: ${term}`);
          failureCount += 1;
        }
      }
    }
  } catch (error) {
    console.error(`FAIL ${prodRoot}: ${error.message}`);
    failureCount += 1;
  }
}

printCloudflareSettings();
console.log(`Prod output assertion complete: ${failureCount} failures`);
process.exit(failureCount > 0 ? 1 : 0);
