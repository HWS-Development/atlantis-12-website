import { access, readFile } from "node:fs/promises";
import { resolve } from "node:path";
import { HTML_ENTRY_PATHS } from "../src/seo/metadata.js";

const failures = [];
const imageReferences = new Set();
const forbiddenImageReferences = [
  "/images/about/patio.webp",
  "essaouirajpg.webp",
  "ipomea-patio-hamac-pergola-pierre",
];

for (const filePath of HTML_ENTRY_PATHS) {
  const html = await readFile(resolve(process.cwd(), "dist", filePath), "utf8");
  const checks = {
    content: !html.includes('<div id="root"></div>') && html.includes('<div id="root">'),
    heading: html.includes("<h1"),
    canonical: html.includes('<link rel="canonical"'),
    frenchAlternate: html.includes('hreflang="fr"'),
    englishAlternate: html.includes('hreflang="en"'),
    defaultAlternate: html.includes('hreflang="x-default"'),
  };

  for (const [check, passed] of Object.entries(checks)) {
    if (!passed) failures.push(`${filePath}: ${check}`);
  }

  for (const reference of forbiddenImageReferences) {
    if (html.includes(reference)) failures.push(`${filePath}: forbidden image reference ${reference}`);
  }

  for (const match of html.matchAll(/\/images\/[a-z0-9./-]+\.(?:png|webp)/g)) {
    imageReferences.add(match[0]);
  }
}

for (const reference of imageReferences) {
  try {
    await access(resolve(process.cwd(), "dist", reference.slice(1)));
  } catch {
    failures.push(`missing image reference: ${reference}`);
  }
}

const sitemap = await readFile(resolve(process.cwd(), "dist/sitemap.xml"), "utf8");
const sitemapUrlCount = (sitemap.match(/<url>/g) || []).length;
if (sitemapUrlCount !== 26) failures.push(`sitemap.xml: expected 26 URLs, found ${sitemapUrlCount}`);

const homeHtml = await readFile(resolve(process.cwd(), "dist/index.html"), "utf8");
const expectedShareImage = "/images/about/patio-salon-jardin-mobilier-bois-atlantis12-essaouira.webp";
if ((homeHtml.match(new RegExp(expectedShareImage, "g")) || []).length < 2) {
  failures.push("index.html: corrected sharing image is missing from Open Graph or Twitter metadata");
}

if (failures.length) {
  throw new Error(`Prerender audit failed:\n${failures.join("\n")}`);
}

console.log(
  `Prerender audit passed for ${HTML_ENTRY_PATHS.length} pages, ${sitemapUrlCount} sitemap URLs, and ${imageReferences.size} image references.`,
);
