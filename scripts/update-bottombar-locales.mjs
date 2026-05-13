// Update bottomBar.* keys in fr.json and en.json to match the new booking widget.
import { readFileSync, writeFileSync } from "node:fs";

const FR = JSON.parse(readFileSync("./src/locales/fr.json", "utf8"));
const EN = JSON.parse(readFileSync("./src/locales/en.json", "utf8"));

const fr = {
  bottomBar: {
    close: "Fermer",
    bar: {
      cta: "Réserver votre séjour",
      whyDesktop: "pourquoi réserver sur notre site ?",
      whyMobile: "Pourquoi ici ?",
    },
    why: {
      title: "Pourquoi réserver avec nous ?",
      li1: "Meilleur tarif garanti",
      li2: "Pension complète possible",
      li3: "Réservation en ligne sécurisée",
      li4: "Service personnalisé",
    },
    reserve: {
      title: "Réserver un séjour",
    },
    form: {
      arrival: "Arrivée",
      departure: "Départ",
      room: "Chambre",
      anyRoom: "Toutes les chambres",
      guests: "Voyageurs",
      cta: "Vérifier les disponibilités",
    },
  },
};

const en = {
  bottomBar: {
    close: "Close",
    bar: {
      cta: "Book your stay",
      whyDesktop: "why book on our website?",
      whyMobile: "Why here?",
    },
    why: {
      title: "Why book with us?",
      li1: "Best rate guaranteed",
      li2: "Full board available",
      li3: "Secure online booking",
      li4: "Personalised service",
    },
    reserve: {
      title: "Book a stay",
    },
    form: {
      arrival: "Arrival",
      departure: "Departure",
      room: "Room",
      anyRoom: "All rooms",
      guests: "Guests",
      cta: "Check availability",
    },
  },
};

function deepMerge(target, source) {
  for (const k of Object.keys(source)) {
    if (source[k] && typeof source[k] === "object" && !Array.isArray(source[k])) {
      target[k] ??= {};
      deepMerge(target[k], source[k]);
    } else {
      target[k] = source[k];
    }
  }
  return target;
}

// Replace bottomBar wholesale (was: different shape with email/whatsapp).
FR.bottomBar = fr.bottomBar;
EN.bottomBar = en.bottomBar;

writeFileSync("./src/locales/fr.json", JSON.stringify(FR, null, 2) + "\n");
writeFileSync("./src/locales/en.json", JSON.stringify(EN, null, 2) + "\n");
console.log("Updated bottomBar.* in FR and EN");
