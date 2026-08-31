import { readFile } from "node:fs/promises";
import { resolve } from "node:path";
import { HTML_ENTRY_PATHS } from "../src/seo/metadata.js";

const failures = [];

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
}

const sitemap = await readFile(resolve(process.cwd(), "dist/sitemap.xml"), "utf8");
const sitemapUrlCount = (sitemap.match(/<url>/g) || []).length;
if (sitemapUrlCount !== 26) failures.push(`sitemap.xml: expected 26 URLs, found ${sitemapUrlCount}`);

if (failures.length) {
  throw new Error(`Prerender audit failed:\n${failures.join("\n")}`);
}

console.log(`Prerender audit passed for ${HTML_ENTRY_PATHS.length} pages and ${sitemapUrlCount} sitemap URLs.`);
