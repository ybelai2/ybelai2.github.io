import { cp, mkdir, readFile, readdir, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const project = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  "..",
);
const repository = path.dirname(project);
const output = path.join(project, "out");
const manifest = path.join(repository, ".pages-manifest.json");

async function listFiles(dir, prefix = "") {
  const files = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const relative = path.posix.join(prefix, entry.name);
    if (entry.isDirectory())
      files.push(...(await listFiles(path.join(dir, entry.name), relative)));
    else files.push(relative);
  }
  return files;
}

function safePath(file) {
  if (
    path.isAbsolute(file) ||
    file.split("/").some((part) => part === "..") ||
    /^(site|\.git|\.github|pawport|blog|assets)(\/|$)/.test(file)
  )
    throw new Error(`Refusing to change protected path: ${file}`);
  return path.join(repository, file);
}

await readFile(path.join(output, "index.html")); // Refuse to publish a missing or failed build.
let previous = [];
try {
  previous = JSON.parse(await readFile(manifest, "utf8"));
} catch (error) {
  if (error.code !== "ENOENT") throw error;
}
const files = await listFiles(output);
for (const file of previous)
  if (!files.includes(file)) await rm(safePath(file), { force: true });
for (const file of files) {
  const target = safePath(file);
  await mkdir(path.dirname(target), { recursive: true });
  await cp(path.join(output, file), target);
}
await writeFile(path.join(repository, ".nojekyll"), "");
await writeFile(manifest, JSON.stringify(files, null, 2) + "\n");
console.log(
  `Prepared ${files.length} generated files for GitHub Pages. Existing blog, assets, and PawPort pages are preserved.`,
);
