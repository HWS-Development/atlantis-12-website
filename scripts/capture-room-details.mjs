// Click each room card and dump the modal-only HTML
import { chromium } from "playwright";
import { writeFileSync, mkdirSync } from "fs";

const ROOMS = [
  { name: "La Pluméria", slug: "la-plumeria" },
  { name: "L'Ipoméa", slug: "lipomea" },
  { name: "L'Agave", slug: "lagave" },
  { name: "La Coquelicot", slug: "la-coquelicot" },
  { name: "L'Orchis", slug: "lorchis" },
];

mkdirSync("reference/rooms", { recursive: true });

(async () => {
  const browser = await chromium.launch();
  const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const page = await ctx.newPage();

  for (const room of ROOMS) {
    await page.goto("https://atlantis12essaouira.com/chambres", { waitUntil: "networkidle" });
    await page.waitForTimeout(2500);

    const beforeIds = await page.evaluate(() =>
      Array.from(document.querySelectorAll("body *")).map((_, i) => i).length
    );

    // Find the card containing the room name and click it
    const clicked = await page.evaluate((searchName) => {
      const cards = Array.from(document.querySelectorAll(".cursor-pointer"));
      const target = cards.find((c) => (c.textContent || "").includes(searchName));
      if (!target) return false;
      target.click();
      return true;
    }, room.name);

    if (!clicked) {
      console.log("FAILED click", room.name);
      continue;
    }

    await page.waitForTimeout(2500);

    // Find the new modal/lightbox: largest fixed/absolute container that wasn't there before
    const modalHTML = await page.evaluate(() => {
      // Find all fixed/dialog-like roots
      const roots = Array.from(
        document.querySelectorAll(
          "[role='dialog'], .fixed, [data-state='open']"
        )
      ).filter((el) => {
        const cs = getComputedStyle(el);
        return (
          (cs.position === "fixed" || cs.position === "absolute") &&
          el.getBoundingClientRect().width > 600 &&
          el.getBoundingClientRect().height > 400 &&
          el.textContent.length > 200
        );
      });
      // Pick the deepest/largest text container
      roots.sort((a, b) => b.textContent.length - a.textContent.length);
      return roots[0]?.outerHTML || "";
    });

    console.log(`${room.name}: modal length = ${modalHTML.length}`);
    writeFileSync(`reference/rooms/${room.slug}.modal.html`, modalHTML);
    await page.screenshot({ path: `reference/rooms/${room.slug}.png`, fullPage: false });
  }

  await browser.close();
})();
