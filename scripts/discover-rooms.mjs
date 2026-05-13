// Discover how room detail pages are accessed on live site
import { chromium } from "playwright";

(async () => {
  const browser = await chromium.launch();
  const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const page = await ctx.newPage();
  await page.goto("https://atlantis12essaouira.com/chambres", { waitUntil: "networkidle" });
  await page.waitForTimeout(3000);

  // Find all clickable elements that contain a room name
  const roomNames = ["Pluméria", "Ipoméa", "Agave", "Coquelicot", "Orchis"];
  const found = [];
  for (const name of roomNames) {
    const el = await page.$(`text=${name}`);
    if (el) {
      // Find the nearest clickable ancestor
      const info = await el.evaluate((node) => {
        let cur = node;
        for (let i = 0; i < 8 && cur; i++) {
          if (cur.tagName === "A") return { tag: "A", href: cur.getAttribute("href"), levelsUp: i };
          if (cur.tagName === "BUTTON") return { tag: "BUTTON", levelsUp: i };
          if (cur.onclick || cur.getAttribute("role") === "button") return { tag: cur.tagName, role: cur.getAttribute("role"), levelsUp: i };
          cur = cur.parentElement;
        }
        return null;
      });
      found.push({ name, info });
    }
  }
  console.log("Initial selectors:", JSON.stringify(found, null, 2));

  // Try clicking the first room
  const target = await page.$("text=Pluméria");
  if (target) {
    const before = page.url();
    await target.click();
    await page.waitForTimeout(2500);
    console.log("URL before:", before);
    console.log("URL after click:", page.url());
    // capture top of body for clue
    const title = await page.title();
    const h1 = await page.evaluate(() => document.querySelector("h1")?.textContent || "");
    console.log("Title:", title);
    console.log("H1:", h1);
  }

  await browser.close();
})();
