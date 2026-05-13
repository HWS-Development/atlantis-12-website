// Audit i18n coverage:
//  1. Extract every t("key", "default fr text") call from JSX
//  2. Report keys present in code but missing from fr.json / en.json
//  3. Optionally seed missing keys into fr.json (using the inline default)
// Usage:
//   node scripts/audit-i18n.mjs           (just report)
//   node scripts/audit-i18n.mjs --seed-fr (also write inline defaults into fr.json)
import fs from "node:fs";
import path from "node:path";
import { globSync } from "node:fs";

const SEED = process.argv.includes("--seed-fr");

function walk(dir, out = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p, out);
    else if (/\.jsx?$/.test(e.name)) out.push(p);
  }
  return out;
}

const files = [
  ...walk("src/components"),
  ...walk("src/pages"),
];

// Match t("key.path", "default text")  OR  t('key.path', 'default text')
// Allow newlines and escaped quotes in default
const RE = /\bt\(\s*(["'])([\w.\-]+)\1\s*,\s*(["'])((?:\\.|(?!\3).)*?)\3/g;

const found = new Map(); // key -> { default, files: Set }
for (const f of files) {
  const txt = fs.readFileSync(f, "utf8");
  for (const m of txt.matchAll(RE)) {
    const key = m[2];
    const def = m[4].replace(/\\'/g, "'").replace(/\\"/g, '"');
    if (!found.has(key)) found.set(key, { default: def, files: new Set() });
    found.get(key).files.add(f);
  }
}

function get(obj, dotted) {
  return dotted.split(".").reduce((o, k) => (o && o[k] !== undefined ? o[k] : undefined), obj);
}
function set(obj, dotted, val) {
  const parts = dotted.split(".");
  let o = obj;
  for (let i = 0; i < parts.length - 1; i++) {
    if (!o[parts[i]] || typeof o[parts[i]] !== "object") o[parts[i]] = {};
    o = o[parts[i]];
  }
  o[parts[parts.length - 1]] = val;
}

const fr = JSON.parse(fs.readFileSync("src/locales/fr.json", "utf8"));
const en = JSON.parse(fs.readFileSync("src/locales/en.json", "utf8"));

const missingFr = [];
const missingEn = [];
for (const [key, info] of found) {
  if (get(fr, key) === undefined) missingFr.push([key, info.default]);
  if (get(en, key) === undefined) missingEn.push([key, info.default]);
}

console.log(`Total t() calls with defaults: ${found.size}`);
console.log(`Missing in fr.json: ${missingFr.length}`);
console.log(`Missing in en.json: ${missingEn.length}`);
if (missingFr.length) {
  console.log("\n--- Missing FR (first 40) ---");
  for (const [k, d] of missingFr.slice(0, 40)) console.log(`  ${k}  =>  ${d.slice(0, 80)}`);
}
if (missingEn.length) {
  console.log("\n--- Missing EN (first 40) ---");
  for (const [k, d] of missingEn.slice(0, 40)) console.log(`  ${k}  =>  ${d.slice(0, 80)}`);
}

if (SEED) {
  for (const [k, d] of missingFr) set(fr, k, d);
  fs.writeFileSync("src/locales/fr.json", JSON.stringify(fr, null, 2) + "\n", "utf8");
  console.log(`\nSeeded ${missingFr.length} keys into fr.json (FR defaults from code).`);
}
