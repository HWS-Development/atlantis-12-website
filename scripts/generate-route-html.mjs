import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { HTML_ENTRY_PATHS, SEO_PAGES, getSeoMetadata } from "../src/seo/metadata.js";

const DIST_DIR = resolve(process.cwd(), "dist");

const FONT_LINKS = `    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;500;600;700&family=Dancing+Script:wght@400;500;600;700&display=swap"
      rel="stylesheet"
    />`;

/**
 * Extract Vite-emitted asset tags from the built dist/index.html so every
 * prerendered route HTML loads the same hashed JS/CSS bundles.
 */
function extractAssetTags(distIndexHtml) {
  const tags = [];
  const patterns = [
    /<script\b[^>]*\bsrc="\/assets\/[^"]+"[^>]*><\/script>/g,
    /<link\b[^>]*\bhref="\/assets\/[^"]+"[^>]*\/?>(?:<\/link>)?/g,
  ];
  for (const re of patterns) {
    const matches = distIndexHtml.match(re);
    if (matches) tags.push(...matches);
  }
  if (tags.length === 0) {
    throw new Error(
      "No /assets/* tags found in dist/index.html; did `vite build` run first?"
    );
  }
  // Deduplicate while preserving order
  return Array.from(new Set(tags));
}

function buildHtml({ lang, title, description, canonical, hreflang, ogImage }, assetTags) {
  const indent = "    ";
  const assetBlock = assetTags.map((t) => indent + t).join("\n");
  return `<!doctype html>
<html lang="${lang}">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="icon" href="/images/logo/logo-atlantis12-simplifie.png" />
    <title>${title}</title>
    <meta name="description" content="${description}" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="${title}" />
    <meta property="og:description" content="${description}" />
    <meta property="og:image" content="${ogImage}" />
    <meta property="og:url" content="${canonical}" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${title}" />
    <meta name="twitter:description" content="${description}" />
    <meta name="twitter:image" content="${ogImage}" />
    <link rel="canonical" href="${canonical}" />
    <link rel="alternate" hreflang="fr" href="${hreflang.fr}" />
    <link rel="alternate" hreflang="en" href="${hreflang.en}" />
${FONT_LINKS}
${assetBlock}
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>
`;
}

function getEntryConfig(filePath) {
  const isEnglish = filePath.startsWith("en/");
  const lang = isEnglish ? "en" : "fr";

  if (filePath === "index.html" || filePath === "en/index.html") {
    return { routeKey: "home", lang };
  }

  const routePath = `/${filePath
    .replace(/^en\//, "")
    .replace(/\/index\.html$/, "")}`;

  const routeKey = Object.keys(SEO_PAGES).find((key) => SEO_PAGES[key].path === routePath);

  if (!routeKey) {
    throw new Error(`Unknown SEO route for ${filePath}`);
  }

  return { routeKey, lang };
}

const distIndex = await readFile(resolve(DIST_DIR, "index.html"), "utf8");
const assetTags = extractAssetTags(distIndex);

for (const filePath of HTML_ENTRY_PATHS) {
  const { routeKey, lang } = getEntryConfig(filePath);
  const metadata = getSeoMetadata(routeKey, lang);
  const targetPath = resolve(DIST_DIR, filePath);

  await mkdir(dirname(targetPath), { recursive: true });
  await writeFile(targetPath, buildHtml({ lang, ...metadata }, assetTags), "utf8");
  console.log(`  wrote dist/${filePath}`);
}

console.log(`\nGenerated ${HTML_ENTRY_PATHS.length} prerendered route files in dist/.`);
