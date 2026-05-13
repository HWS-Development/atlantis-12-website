// One-off: add EN translations for the 18 home keys seeded from FR defaults.
import fs from "node:fs";
const en = JSON.parse(fs.readFileSync("src/locales/en.json", "utf8"));
function set(o, dotted, val) {
  const p = dotted.split(".");
  let c = o;
  for (let i = 0; i < p.length - 1; i++) {
    if (!c[p[i]] || typeof c[p[i]] !== "object") c[p[i]] = {};
    c = c[p[i]];
  }
  c[p[p.length - 1]] = val;
}

const EN = {
  "home.hero.eyebrow":       "Near Essaouira, Morocco",
  "home.hero.scrollDown":    "Scroll down",
  "home.intro.titleLine1":   "A house between the ocean",
  "home.intro.titleLine2":   "and the thuyas",
  "home.intro.ctaHouse":     "Discover the house",
  "home.intro.ctaArt":       "The art gallery",
  "home.reviews.eyebrow":    "What they say",
  "home.reviews.title":      "Travellers' words",
  "home.reviews.verified":   "3 verified reviews",
  "home.reviews.recommend":  "100% recommend",
  "home.reviews.placeholder":"Add your reviews in locales/en.json → home.reviews.items[].quote",
  "home.reviews.prev":       "Previous review",
  "home.reviews.next":       "Next review",
  "home.reviews.googleCta":  "See all our Google reviews",
  "home.rooms.eyebrow":      "The 5 rooms",
  "home.rooms.title":        "Each room, a work of art",
  "home.rooms.cta":          "See all the rooms",
  "home.rooms.all":          "See all the rooms",
};

for (const [k, v] of Object.entries(EN)) set(en, k, v);
fs.writeFileSync("src/locales/en.json", JSON.stringify(en, null, 2) + "\n", "utf8");
console.log(`Added ${Object.keys(EN).length} EN keys.`);
