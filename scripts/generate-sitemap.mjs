import { writeFile } from "node:fs/promises";
import { resolve } from "node:path";
import { SEO_PAGES, getAlternateUrl } from "../src/seo/metadata.js";

const EXCLUDED = new Set(["terms", "cancellation", "legalNotice", "salesTerms", "privacy"]);

function renderUrl(page, language) {
  const current = getAlternateUrl(page.path, language);
  const french = getAlternateUrl(page.path, "fr");
  const english = getAlternateUrl(page.path, "en");
  return `  <url>
    <loc>${current}</loc>
    <xhtml:link rel="alternate" hreflang="fr" href="${french}" />
    <xhtml:link rel="alternate" hreflang="en" href="${english}" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${french}" />
  </url>`;
}

const pages = Object.entries(SEO_PAGES)
  .filter(([key]) => !EXCLUDED.has(key))
  .map(([, page]) => page);

const urls = pages.flatMap((page) => [renderUrl(page, "fr"), renderUrl(page, "en")]);
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls.join("\n")}
</urlset>
`;

await writeFile(resolve(process.cwd(), "public/sitemap.xml"), sitemap, "utf8");
console.log(`Generated sitemap with ${urls.length} URLs.`);
