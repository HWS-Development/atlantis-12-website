import { readdir } from "node:fs/promises";
import { basename, extname, join, relative, sep } from "node:path";

const IMAGE_ROOT = join(process.cwd(), "public/images");
const VALID_DIRECTORY = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const VALID_FILENAME = /^[a-z0-9]+(?:-[a-z0-9]+)*\.(?:png|webp)$/;
const REQUIRED_SUFFIX = /-atlantis12-essaouira$/;
const EMBEDDED_EXTENSION = /(?:jpe?g|png|webp|avif|ppg)$/;
const NON_DESCRIPTIVE_PREFIX = /^(?:dsc|img|screenshot)(?:-|$)/;
const NUMERIC_PREFIX = /^\d+(?:-|$)/;

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
const invalid = [];

for (const file of files) {
  const path = relative(IMAGE_ROOT, file);
  const segments = path.split(sep);
  const filename = segments.pop();
  const stem = basename(filename, extname(filename));

  if (segments.some((directory) => !VALID_DIRECTORY.test(directory))) {
    invalid.push(`${relative(process.cwd(), file)} (invalid directory name)`);
  }
  if (!VALID_FILENAME.test(filename)) {
    invalid.push(`${relative(process.cwd(), file)} (invalid filename)`);
  } else if (EMBEDDED_EXTENSION.test(stem)) {
    invalid.push(`${relative(process.cwd(), file)} (embedded or malformed extension)`);
  } else if (NON_DESCRIPTIVE_PREFIX.test(stem)) {
    invalid.push(`${relative(process.cwd(), file)} (non-descriptive source filename)`);
  } else if (NUMERIC_PREFIX.test(stem)) {
    invalid.push(`${relative(process.cwd(), file)} (numeric export prefix)`);
  } else if (!REQUIRED_SUFFIX.test(stem)) {
    invalid.push(`${relative(process.cwd(), file)} (missing -atlantis12-essaouira suffix)`);
  }
}

if (invalid.length > 0) {
  console.error(`Invalid image paths:\n${invalid.join("\n")}`);
  process.exit(1);
}

console.log(`Image path audit passed for ${files.length} files.`);
