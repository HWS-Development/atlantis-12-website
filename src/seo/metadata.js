export const SITE_URL = "https://atlantis12essaouira.com";

export const DEFAULT_OG_IMAGE = "/images/about/patio.jpg";

export const SEO_PAGES = {
  home: {
    path: "/",
    ogImage: "/images/about/patio.jpg",
    fr: {
      title: "Atlantis 12 · Maison d'hôtes & d'art · Essaouira, Maroc",
      description:
        "Bergerie berbère restaurée entre thuyas et Atlantique, à 15 min d'Essaouira. 5 chambres adultes, table d'hôtes, atelier d'art. Réservez au meilleur tarif.",
    },
    en: {
      title: "Atlantis 12 · Maison d'hôtes & d'art · Essaouira, Morocco",
      description:
        "A restored Berber sheepfold between thuya forest and the Atlantic, 15 min from Essaouira. 5 adults-only rooms, table d'hôtes, art studio. Book direct.",
    },
  },
  about: {
    path: "/la-maison",
    ogImage: "/images/about/salon1.jpg",
    fr: {
      title: "La Maison · Atlantis 12, maison d'hôtes à Essaouira",
      description:
        "Une bergerie berbère restaurée entre forêt de thuyas et océan : patios, cheminées, calme absolu. Découvrez l'âme d'Atlantis 12, à 15 min d'Essaouira.",
    },
    en: {
      title: "The House · Atlantis 12, guesthouse near Essaouira",
      description:
        "A restored Berber sheepfold between thuya forest and ocean: patios, fireplaces, deep calm. Discover the soul of Atlantis 12, 15 min from Essaouira.",
    },
  },
  rooms: {
    path: "/chambres",
    ogImage: "/images/rooms/plumeria-suite-superieure-atlantis12-essaouira.jpg",
    fr: {
      title: "Chambres & Suites · Atlantis 12, Essaouira (adultes)",
      description:
        "Cinq chambres et suites d'exception, cheminée et terrasse privée, entre jardin et Atlantique. Maison réservée aux adultes, à 15 min d'Essaouira.",
    },
    en: {
      title: "Rooms & Suites · Atlantis 12, Essaouira (adults only)",
      description:
        "Five distinctive rooms and suites with fireplace and private terrace, between garden and Atlantic. Adults-only guesthouse, 15 min from Essaouira.",
    },
  },
  table: {
    path: "/table-dhotes",
    ogImage: "/images/table-dhotes/entree-artichaut-poulpe-crevette-table-dhotes-atlantis12-essaouira.jpg",
    fr: {
      title: "Table d'hôtes · cuisine maison · Atlantis 12 Essaouira",
      description:
        "Chaque soir, une table partagée : cuisine puisée dans l'héritage andalou, amazigh et séfarade d'Essaouira, légumes du jardin et produits du marché.",
    },
    en: {
      title: "Table d'hôtes · home cooking · Atlantis 12 Essaouira",
      description:
        "Each evening, one shared table: cuisine drawn from Essaouira's Andalusian, Amazigh and Sephardic heritage, with garden vegetables and market produce.",
    },
  },
  experiences: {
    path: "/experiences",
    ogImage: "/images/essaouira/4coucher-soleil-plage-essaouira-atlantique.jpg",
    fr: {
      title: "Expériences · massage, yoga, art & nature · Atlantis 12",
      description:
        "Massage, yoga, ateliers d'art et nature : prolongez votre séjour à Atlantis 12, à Essaouira et tout autour, au rythme de l'Atlantique.",
    },
    en: {
      title: "Experiences · massage, yoga, art & nature · Atlantis 12",
      description:
        "Massage, yoga, art workshops and nature walks by the Atlantic: experience Essaouira at the pace of Atlantis 12, minutes from the medina.",
    },
  },
  contact: {
    path: "/contact",
    ogImage: "/images/about/patio.jpg",
    fr: {
      title: "Contact & réservation · Atlantis 12, Essaouira",
      description:
        "Une question, une demande de réservation ? Contactez Atlantis 12, maison d'hôtes & d'art à 15 min d'Essaouira. Réponse rapide, accueil sur mesure.",
    },
    en: {
      title: "Contact & booking · Atlantis 12, Essaouira",
      description:
        "A question or a booking request? Get in touch with Atlantis 12, maison d'hôtes & d'art 15 min from Essaouira. Quick reply, tailored welcome.",
    },
  },
  gallery: {
    path: "/maison-dart",
    ogImage: "/images/gallery/oeuvre-lahcen-fikri-1-peinture-atlantis12-essaouira.jpg",
    fr: {
      title: "Maison d'art · galerie & résidence · Atlantis 12 Essaouira",
      description:
        "Galerie, résidence d'artistes et œuvres à acquérir, autour de l'artiste Lahcen Fikri. L'art au cœur d'Atlantis 12, à 15 min d'Essaouira.",
    },
    en: {
      title: "House of Art · gallery & residency · Atlantis 12 Essaouira",
      description:
        "Gallery, artist residency and works for sale, around the artist Lahcen Fikri. Art at the heart of Atlantis 12, 15 min from Essaouira.",
    },
  },
  essaouira: {
    path: "/essaouira",
    ogImage: "/images/essaouira/1remparts-essaouira-skala-du-port.jpg",
    fr: {
      title: "Ce qu'on aime à Essaouira · le guide d'Atlantis 12",
      description:
        "Nos adresses préférées à Essaouira : médina, plages, restaurants, coopératives et bons plans, partagés par Atlantis 12 comme avec des amis.",
    },
    en: {
      title: "What we love in Essaouira · Atlantis 12's guide",
      description:
        "Our favourite addresses in Essaouira: medina, beaches, restaurants, cooperatives and tips, shared by Atlantis 12 as we would with friends.",
    },
  },
};

export function normalizeSeoLanguage(lng) {
  return String(lng || "fr").toLowerCase().startsWith("en") ? "en" : "fr";
}

export function getAlternateUrl(path, lng) {
  const cleanPath = path === "/" ? "" : path;
  return lng === "en"
    ? `${SITE_URL}${cleanPath || "/"}?lng=en`
    : `${SITE_URL}${cleanPath || "/"}`;
}

export function getSeoMetadata(routeKey, lng = "fr") {
  const page = SEO_PAGES[routeKey];
  if (!page) return null;

  const language = normalizeSeoLanguage(lng);
  const copy = page[language] || page.fr;
  const canonical = getAlternateUrl(page.path, language);

  return {
    ...copy,
    path: page.path,
    canonical,
    ogImage: `${SITE_URL}${page.ogImage || DEFAULT_OG_IMAGE}`,
    hreflang: {
      fr: getAlternateUrl(page.path, "fr"),
      en: getAlternateUrl(page.path, "en"),
    },
  };
}

export const HTML_ENTRY_PATHS = [
  "index.html",
  "la-maison/index.html",
  "chambres/index.html",
  "table-dhotes/index.html",
  "experiences/index.html",
  "contact/index.html",
  "maison-dart/index.html",
  "essaouira/index.html",
  "__seo/en/index.html",
  "__seo/en/la-maison/index.html",
  "__seo/en/chambres/index.html",
  "__seo/en/table-dhotes/index.html",
  "__seo/en/experiences/index.html",
  "__seo/en/contact/index.html",
  "__seo/en/maison-dart/index.html",
  "__seo/en/essaouira/index.html",
];
