// Capture carousel reviews by clicking through avatar buttons
import { chromium } from "playwright";

const URL = "https://atlantis12essaouira.com/";

(async () => {
  const browser = await chromium.launch();
  const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const page = await ctx.newPage();
  await page.goto(URL, { waitUntil: "networkidle" });
  await page.waitForTimeout(2500);

  // Scroll to reviews
  await page.evaluate(() => window.scrollBy(0, document.body.scrollHeight));
  await page.waitForTimeout(1500);
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight - 1400));
  await page.waitForTimeout(1500);

  const collected = {};

  async function harvest(label) {
    const data = await page.evaluate(() => {
      const out = { quotes: [], names: [], breakdown: [] };
      document.querySelectorAll("p, blockquote").forEach((el) => {
        const t = (el.textContent || "").trim();
        if (t.startsWith("«") && t.length > 60) out.quotes.push(t);
        if (/Chambres\s*\d\/\d/.test(t)) out.breakdown.push(t);
      });
      document.querySelectorAll(".font-body.text-sm.font-medium.text-foreground").forEach((el) => {
        const t = (el.textContent || "").trim();
        if (t && t.length < 50) out.names.push(t);
      });
      return out;
    });
    collected[label] = data;
  }

  await harvest("initial");

  // Find avatar buttons and cycle
  const avatars = await page.$$("button[aria-label*='Photo de']");
  console.log("Avatar count:", avatars.length);
  for (let i = 0; i < avatars.length; i++) {
    try {
      await avatars[i].click();
      await page.waitForTimeout(1200);
      await harvest("click_" + i);
    } catch (e) {
      console.log("click err", i, e.message);
    }
  }

  console.log(JSON.stringify(collected, null, 2));
  await browser.close();
})();
