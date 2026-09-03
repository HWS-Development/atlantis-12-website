import { readdir } from "node:fs/promises";
import { join, relative } from "node:path";

const IMAGE_ROOT = join(process.cwd(), "public/images");
const VALID_FILENAME = /^[a-z0-9]+(?:-[a-z0-9]+)*\.(?:png|webp)$/;

async function collectFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = await Promise.all(
    entries.map((entry) => {
      const path = join(directory, entry.name);
      return entry.isDirectory() ? collectFiles(path) : [path];
    }),
  );
  return files.flat();
}

const files = await collectFiles(IMAGE_ROOT);
const invalid = files
  .filter((file) => !VALID_FILENAME.test(file.split("/").at(-1)))
  .map((file) => relative(process.cwd(), file));

if (invalid.length > 0) {
  console.error(`Invalid image filenames:\n${invalid.join("\n")}`);
  process.exit(1);
}

console.log(`Image filename audit passed for ${files.length} files.`);
