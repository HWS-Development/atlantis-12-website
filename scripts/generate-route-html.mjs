import { mkdir, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { HTML_ENTRY_PATHS, SEO_PAGES, getSeoMetadata } from "../src/seo/metadata.js";

const FONT_LINKS = `    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;500;600;700&family=Dancing+Script:wght@400;500;600;700&display=swap"
      rel="stylesheet"
    />`;

function buildHtml({ lang, title, description, canonical, hreflang, ogImage }) {
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
    <script type="module" src="/src/main.jsx"></script>
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>
`;
}

function getEntryConfig(filePath) {
  const isEnglish = filePath.startsWith("__seo/en/");
  const lang = isEnglish ? "en" : "fr";

  if (filePath === "index.html" || filePath === "__seo/en/index.html") {
    return { routeKey: "home", lang };
  }

  const routePath = `/${filePath
    .replace(/^__seo\/en\//, "")
    .replace(/\/index\.html$/, "")}`;

  const routeKey = Object.keys(SEO_PAGES).find((key) => SEO_PAGES[key].path === routePath);

  if (!routeKey) {
    throw new Error(`Unknown SEO route for ${filePath}`);
  }

  return { routeKey, lang };
}

for (const filePath of HTML_ENTRY_PATHS) {
  const { routeKey, lang } = getEntryConfig(filePath);
  const metadata = getSeoMetadata(routeKey, lang);
  const targetPath = resolve(process.cwd(), filePath);

  await mkdir(dirname(targetPath), { recursive: true });
  await writeFile(targetPath, buildHtml({ lang, ...metadata }), "utf8");
}
