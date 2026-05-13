// Captures the live atlantis12essaouira.com pages for STRUCTURAL/LAYOUT/CSS reference only.
// Outputs:
//   reference/<slug>/dom.html         -> rendered <body> outerHTML
//   reference/<slug>/desktop.png      -> full-page screenshot @1440
//   reference/<slug>/mobile.png       -> full-page screenshot @390
//   reference/<slug>/sections.json    -> tag/className/box/computedStyles for top-level <section>s
//   reference/<slug>/fonts.json       -> stylesheet links + computed font of body/h1/h2/p
//
// Usage: node scripts/snapshot.mjs [path1 path2 ...]   (default: home only)
import { chromium } from "playwright";
import fs from "node:fs/promises";
import path from "node:path";

const BASE = "https://atlantis12essaouira.com";
const ROUTES = process.argv.slice(2).length
  ? process.argv.slice(2)
  : ["/"];

const slugify = (p) => (p === "/" ? "home" : p.replace(/^\/+|\/+$/g, "").replace(/\//g, "_"));

async function captureSections(page) {
  return page.evaluate(() => {
    const pick = (el) => {
      const cs = getComputedStyle(el);
      const r = el.getBoundingClientRect();
      return {
        tag: el.tagName.toLowerCase(),
        id: el.id || null,
        className: el.className || null,
        box: { x: Math.round(r.x), y: Math.round(r.y + window.scrollY), w: Math.round(r.width), h: Math.round(r.height) },
        styles: {
          display: cs.display,
          position: cs.position,
          backgroundColor: cs.backgroundColor,
          backgroundImage: cs.backgroundImage,
          color: cs.color,
          fontFamily: cs.fontFamily,
          fontSize: cs.fontSize,
          fontWeight: cs.fontWeight,
          lineHeight: cs.lineHeight,
          textAlign: cs.textAlign,
          padding: cs.padding,
          margin: cs.margin,
          maxWidth: cs.maxWidth,
        },
        innerTextSnippet: (el.innerText || "").trim().slice(0, 240),
        childCount: el.children.length,
        childTags: Array.from(el.children).slice(0, 12).map((c) => c.tagName.toLowerCase()),
      };
    };
    const top = Array.from(document.body.querySelectorAll(":scope section, :scope > div > section, :scope > div > div > section, :scope header, :scope footer"));
    return top.map(pick);
  });
}

async function captureFonts(page) {
  return page.evaluate(() => {
    const cssOf = (sel) => {
      const el = document.querySelector(sel);
      if (!el) return null;
      const cs = getComputedStyle(el);
      return {
        fontFamily: cs.fontFamily,
        fontSize: cs.fontSize,
        fontWeight: cs.fontWeight,
        lineHeight: cs.lineHeight,
        letterSpacing: cs.letterSpacing,
        color: cs.color,
      };
    };
    const links = Array.from(document.querySelectorAll('link[rel="stylesheet"], link[rel="preconnect"]')).map((l) => l.href);
    return {
      stylesheets: links,
      body: cssOf("body"),
      h1: cssOf("h1"),
      h2: cssOf("h2"),
      h3: cssOf("h3"),
      p: cssOf("p"),
      a: cssOf("a"),
      button: cssOf("button"),
    };
  });
}

async function autoScroll(page) {
  await page.evaluate(async () => {
    await new Promise((resolve) => {
      let total = 0;
      const step = 400;
      const t = setInterval(() => {
        window.scrollBy(0, step);
        total += step;
        if (total >= document.body.scrollHeight) {
          clearInterval(t);
          resolve();
        }
      }, 80);
    });
    window.scrollTo(0, 0);
    await new Promise((r) => setTimeout(r, 400));
  });
}

(async () => {
  const browser = await chromium.launch();
  for (const route of ROUTES) {
    const slug = slugify(route);
    const outDir = path.join("reference", slug);
    await fs.mkdir(outDir, { recursive: true });
    console.log(`\n=== ${route}  ->  ${outDir} ===`);

    // Desktop pass
    const ctxD = await browser.newContext({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 1 });
    const pageD = await ctxD.newPage();
    await pageD.goto(BASE + route, { waitUntil: "networkidle", timeout: 60000 });
    await autoScroll(pageD);
    await pageD.waitForTimeout(800);

    const html = await pageD.evaluate(() => document.body.outerHTML);
    await fs.writeFile(path.join(outDir, "dom.html"), html, "utf8");

    const sections = await captureSections(pageD);
    await fs.writeFile(path.join(outDir, "sections.json"), JSON.stringify(sections, null, 2), "utf8");

    const fonts = await captureFonts(pageD);
    await fs.writeFile(path.join(outDir, "fonts.json"), JSON.stringify(fonts, null, 2), "utf8");

    await pageD.screenshot({ path: path.join(outDir, "desktop.png"), fullPage: true });
    console.log(`  desktop.png ${(await fs.stat(path.join(outDir, "desktop.png"))).size} bytes`);
    await ctxD.close();

    // Mobile pass
    const ctxM = await browser.newContext({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 2, isMobile: true, hasTouch: true });
    const pageM = await ctxM.newPage();
    await pageM.goto(BASE + route, { waitUntil: "networkidle", timeout: 60000 });
    await autoScroll(pageM);
    await pageM.waitForTimeout(600);
    await pageM.screenshot({ path: path.join(outDir, "mobile.png"), fullPage: true });
    console.log(`  mobile.png  ${(await fs.stat(path.join(outDir, "mobile.png"))).size} bytes`);
    await ctxM.close();
  }
  await browser.close();
  console.log("\nDone.");
})();
