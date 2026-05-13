// Targeted DOM extractor: pulls each top-level section into its own pretty-printed file.
import { chromium } from "playwright";
import fs from "node:fs/promises";
import path from "node:path";

const BASE = "https://atlantis12essaouira.com";
const ROUTE = process.argv[2] || "/";
const slug = ROUTE === "/" ? "home" : ROUTE.replace(/^\/+|\/+$/g, "").replace(/\//g, "_");

function pretty(html) {
  // very small pretty-printer: insert newlines + 2-space indent based on tag depth
  const tokens = html.replace(/>\s+</g, "><").split(/(?=<)|(?<=>)/).filter(Boolean);
  let out = "", depth = 0;
  const voidTags = new Set(["br","img","input","meta","link","hr","source"]);
  for (let t of tokens) {
    if (!t) continue;
    if (t.startsWith("</")) {
      depth = Math.max(0, depth - 1);
      out += "  ".repeat(depth) + t + "\n";
    } else if (t.startsWith("<")) {
      const tag = (t.match(/^<([a-zA-Z0-9]+)/) || [])[1] || "";
      const selfClose = t.endsWith("/>") || voidTags.has(tag.toLowerCase());
      out += "  ".repeat(depth) + t + "\n";
      if (!selfClose && !t.startsWith("<!")) depth++;
    } else {
      const txt = t.trim();
      if (txt) out += "  ".repeat(depth) + txt + "\n";
    }
  }
  return out;
}

(async () => {
  const browser = await chromium.launch();
  const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const page = await ctx.newPage();
  await page.goto(BASE + ROUTE, { waitUntil: "networkidle", timeout: 60000 });
  // scroll fully to trigger lazy
  await page.evaluate(async () => {
    await new Promise((r) => {
      let y = 0; const id = setInterval(() => {
        window.scrollBy(0, 500); y += 500;
        if (y >= document.body.scrollHeight) { clearInterval(id); r(); }
      }, 60);
    });
    window.scrollTo(0, 0);
    await new Promise(r => setTimeout(r, 300));
  });

  // remove the base44 edit badge from output
  await page.evaluate(() => {
    document.getElementById("base44-edit-badge")?.remove();
    document.querySelectorAll("script").forEach(s => s.remove());
  });

  const outDir = path.join("reference", slug);
  await fs.mkdir(outDir, { recursive: true });

  // 1) full body pretty
  const body = await page.evaluate(() => document.body.outerHTML);
  await fs.writeFile(path.join(outDir, "body.pretty.html"), pretty(body), "utf8");

  // 2) header alone
  const header = await page.evaluate(() => document.querySelector("header")?.outerHTML || "");
  if (header) await fs.writeFile(path.join(outDir, "header.pretty.html"), pretty(header), "utf8");

  // 3) footer alone
  const footer = await page.evaluate(() => document.querySelector("footer")?.outerHTML || "");
  if (footer) await fs.writeFile(path.join(outDir, "footer.pretty.html"), pretty(footer), "utf8");

  // 4) each top-level <section> within main wrapper
  const sectionsHTML = await page.evaluate(() => {
    const arr = [];
    document.querySelectorAll("section").forEach((s, i) => {
      arr.push({ idx: i, id: s.id || `section-${i}`, html: s.outerHTML });
    });
    return arr;
  });
  for (const s of sectionsHTML) {
    await fs.writeFile(path.join(outDir, `section-${String(s.idx).padStart(2,"0")}-${s.id}.pretty.html`), pretty(s.html), "utf8");
  }

  // 5) capture all imgs (src + alt + dims) for asset checklist
  const imgs = await page.evaluate(() => Array.from(document.images).map(i => ({
    src: i.currentSrc || i.src, alt: i.alt, w: i.naturalWidth, h: i.naturalHeight,
    box: { w: Math.round(i.getBoundingClientRect().width), h: Math.round(i.getBoundingClientRect().height) }
  })));
  await fs.writeFile(path.join(outDir, "images.json"), JSON.stringify(imgs, null, 2), "utf8");

  // 6) capture full rendered CSS (so we can pull exact colors / key utilities)
  // Just download the linked stylesheets the page declares.
  const sheets = await page.evaluate(() => Array.from(document.querySelectorAll('link[rel="stylesheet"]')).map(l => l.href));
  await fs.writeFile(path.join(outDir, "stylesheet-urls.txt"), sheets.join("\n"), "utf8");

  console.log(`OK ${slug}: ${sectionsHTML.length} sections, ${imgs.length} imgs, header=${!!header}, footer=${!!footer}`);
  await browser.close();
})();
