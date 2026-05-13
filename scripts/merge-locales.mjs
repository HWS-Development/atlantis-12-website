// Merge new keys into fr.json + en.json without touching existing ones.
// Run: node scripts/merge-locales.mjs
import fs from "node:fs";
import path from "node:path";

const root = path.resolve(".");
const frPath = path.join(root, "src/locales/fr.json");
const enPath = path.join(root, "src/locales/en.json");

const fr = JSON.parse(fs.readFileSync(frPath, "utf8"));
const en = JSON.parse(fs.readFileSync(enPath, "utf8"));

// Deep merge: only set if missing (does not overwrite existing translations).
function mergeMissing(target, source) {
  for (const k of Object.keys(source)) {
    if (
      source[k] &&
      typeof source[k] === "object" &&
      !Array.isArray(source[k])
    ) {
      if (!target[k] || typeof target[k] !== "object") target[k] = {};
      mergeMissing(target[k], source[k]);
    } else if (target[k] === undefined) {
      target[k] = source[k];
    }
  }
}

// ---------------- FR additions (verbatim from atlantis12essaouira.com) ----------------
const FR_NEW = {
  nav: {
    guesthouse: "Maison d'hôtes",
    house: "La Maison",
    rooms: "Les Chambres",
    table: "La Table",
    experiences: "Expériences",
    essaouira: "Essaouira",
    contact: "Contact",
    art: "Maison d'art",
  },
  footer: {
    contact: "Contact",
    weather: "Météo",
    wind: "Vent",
    weatherQuote: "« Le vent d'Essaouira ne souffle pas, il raconte. »",
    explore: "Explorer",
    explorer: {
      house: "La Maison",
      rooms: "Les Chambres",
      table: "La Table",
      art: "L'Art",
    },
    essaouiraLine1: "Ce qu'on aime (vraiment !)",
    essaouiraLine2: "à Essaouira",
    tagline: "Maison d'hôtes & d'art — Essaouira, Maroc",
  },
  bottomBar: {
    why: {
      title: "Pourquoi réserver sur notre site ?",
      li1: "Tarif direct, sans commission de plateforme.",
      li2: "Confirmation immédiate de notre part, par email ou WhatsApp.",
      li3: "Une vraie conversation : nous adaptons votre séjour (transferts, repas, expériences) à vos envies.",
      li4: "Annulation simple et flexible, sans intermédiaire.",
      contact: "Pour toute question :",
    },
    reserve: {
      title: "Réserver votre séjour",
      intro:
        "Écrivez-nous vos dates et le nombre de voyageurs — nous revenons vers vous rapidement avec une confirmation et les détails pratiques.",
    },
    email: "Email",
    whatsapp: "WhatsApp",
    bar: {
      cta: "Réserver votre séjour",
      whyDesktop: "pourquoi réserver sur notre site ?",
      whyMobile: "Pourquoi ici ?",
    },
  },
};

// ---------------- EN additions (faithful, slightly poetic to match FR tone) -----------
const EN_NEW = {
  nav: {
    guesthouse: "Guesthouse",
    house: "The House",
    rooms: "The Rooms",
    table: "The Table",
    experiences: "Experiences",
    essaouira: "Essaouira",
    contact: "Contact",
    art: "House of Art",
  },
  footer: {
    contact: "Contact",
    weather: "Weather",
    wind: "Wind",
    weatherQuote: "“The wind of Essaouira doesn't blow — it tells stories.”",
    explore: "Explore",
    explorer: {
      house: "The House",
      rooms: "The Rooms",
      table: "The Table",
      art: "The Art",
    },
    essaouiraLine1: "What we (truly) love",
    essaouiraLine2: "in Essaouira",
    tagline: "Guesthouse & House of Art — Essaouira, Morocco",
  },
  bottomBar: {
    why: {
      title: "Why book on our website?",
      li1: "Direct rate — no platform commission.",
      li2: "Immediate confirmation from us, by email or WhatsApp.",
      li3: "A real conversation: we tailor your stay (transfers, meals, experiences) to your wishes.",
      li4: "Simple, flexible cancellation — no middleman.",
      contact: "For any question:",
    },
    reserve: {
      title: "Book your stay",
      intro:
        "Send us your dates and number of travellers — we'll get back to you quickly with a confirmation and the practical details.",
    },
    email: "Email",
    whatsapp: "WhatsApp",
    bar: {
      cta: "Book your stay",
      whyDesktop: "why book on our website?",
      whyMobile: "Why here?",
    },
  },
};

mergeMissing(fr, FR_NEW);
mergeMissing(en, EN_NEW);

fs.writeFileSync(frPath, JSON.stringify(fr, null, 2) + "\n", "utf8");
fs.writeFileSync(enPath, JSON.stringify(en, null, 2) + "\n", "utf8");

// Sanity report
function keys(o, p = "") {
  const r = [];
  for (const k in o) {
    const np = p ? p + "." + k : k;
    if (o[k] && typeof o[k] === "object" && !Array.isArray(o[k])) r.push(...keys(o[k], np));
    else r.push(np);
  }
  return r;
}
const fk = keys(fr);
const ek = keys(en);
console.log("FR keys:", fk.length, "EN keys:", ek.length);
const missEn = fk.filter((k) => !ek.includes(k));
const missFr = ek.filter((k) => !fk.includes(k));
console.log("Missing in EN:", missEn);
console.log("Missing in FR:", missFr);
