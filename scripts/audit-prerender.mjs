import { access, readFile } from "node:fs/promises";
import { resolve } from "node:path";
import { HTML_ENTRY_PATHS } from "../src/seo/metadata.js";

const failures = [];
const imageReferences = new Set();
const forbiddenImageReferences = [
  "/images/about/patio.webp",
];
const expectedIpomeaPatio =
  "/images/rooms/ipomea-patio-prive-hamac-pergola-atlantis12-essaouira.webp";
const simplifiedLogo = "logo-simplifie-atlantis12-essaouira.png";
const watercolorLogo = "logo-aquarelle-maison-dhotes-art-atlantis12-essaouira.png";
const legacyLogo = ["logo", "atlantis12", "simplifie.png"].join("-");

function auditResponsiveLogo(filePath, html, filename, widths, originalWidth, expectedSizes) {
  const tag = html.match(new RegExp(`<img[^>]+${filename.replace(".", "\\.")}[^>]*>`))?.[0];
  if (!tag) {
    failures.push(`${filePath}: missing ${filename}`);
    return;
  }

  const candidates = [...widths.map((width) => `${filename} ${width}w`), `${filename} ${originalWidth}w`];
  if (!tag.includes("srcSet=") || !candidates.every((candidate) => tag.includes(candidate))) {
    failures.push(`${filePath}: incomplete responsive srcset for ${filename}`);
  }
  if (!tag.includes(`sizes="${expectedSizes}"`)) {
    failures.push(`${filePath}: incorrect sizes for ${filename}`);
  }
}

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

  if (html.includes(legacyLogo)) failures.push(`${filePath}: legacy logo reference ${legacyLogo}`);
  auditResponsiveLogo(
    filePath,
    html,
    simplifiedLogo,
    [64, 128, 256, 384, 480, 800],
    991,
    "(min-width: 768px) 47px, 39px",
  );

  if (html.includes(watercolorLogo)) {
    auditResponsiveLogo(
      filePath,
      html,
      watercolorLogo,
      [64, 128, 256, 384, 480, 800],
      866,
      filePath.endsWith("contact/index.html")
        ? "(min-width: 768px) 260px, 220px"
        : "(min-width: 1024px) 440px, (min-width: 768px) 380px, (min-width: 640px) 300px, 260px",
    );
  }

  for (const match of html.matchAll(/\/images\/rooms\/ipomea-patio-[a-z0-9.-]+\.webp/g)) {
    if (match[0] !== expectedIpomeaPatio) {
      failures.push(`${filePath}: unexpected Ipoméa patio reference ${match[0]}`);
    }
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
