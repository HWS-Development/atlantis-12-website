const ROOMS_PATH = "/images/rooms";
const GALLERY_PATH = "/images/gallery";

const EQ = {
  litKing:        "litKing",
  litQueen:       "litQueen",
  vasteSalon:     "vasteSalon",
  cheminee:       "cheminee",
  baiesVitrees:   "baiesVitrees",
  terrassePrivee: "terrassePrivee",
  sdbPrivative:   "sdbPrivative",
  doucheItaliennePluie: "doucheItaliennePluie",
  doucheItalienne:"doucheItalienne",
  serviettesArgan:"serviettesArgan",
  salonPrivCheminee: "salonPrivCheminee",
  vueParcPatio:   "vueParcPatio",
  ouvertureVitree:"ouvertureVitree",
};

const COMMON_EQUIP_JUNIOR = [
  EQ.litQueen,
  EQ.salonPrivCheminee,
  EQ.vueParcPatio,
  EQ.ouvertureVitree,
  EQ.sdbPrivative,
  EQ.doucheItalienne,
  EQ.serviettesArgan,
];

const ROOMS = [
  {
    slug: "la-plumeria",
    name: "La Pluméria",
    category: "Suite Supérieure",
    adults: "• 2 adultes",
    area: "• 50 m²",
    intro:
      "La plus grande chambre de la maison. Un espace fait pour ceux qui cherchent l'absolu.",
    equip: [
      EQ.litKing,
      EQ.vasteSalon,
      EQ.cheminee,
      EQ.baiesVitrees,
      EQ.terrassePrivee,
      EQ.sdbPrivative,
      EQ.doucheItaliennePluie,
      EQ.serviettesArgan,
    ],
    images: [
      { src: `${ROOMS_PATH}/plumeria-chambre-lit-blanc-poutres-bois-atlantis12-essaouira.webp`, alt: "La Pluméria, lit blanc et poutres en bois" },
      { src: `${ROOMS_PATH}/plumeria-chambre-bouquet-roses-tableau-atlantis12-essaouira.webp`, alt: "La Pluméria, bouquet de roses devant le lit" },
      { src: `${ROOMS_PATH}/plumeria-facade-suite-terrasse-pergola-atlantis12-essaouira.webp`, alt: "La Pluméria, façade et terrasse sous la pergola" },
      { src: `${ROOMS_PATH}/plumeria-terrasse-salon-exterieur-pergola-atlantis12-essaouira.webp`, alt: "La Pluméria, salon extérieur sous la pergola" },
      { src: `${ROOMS_PATH}/plumeria-decoration-niche-fenetre-vase-blanc-atlantis12-essaouira.webp`, alt: "La Pluméria, vase blanc dans une niche de fenêtre" },
      { src: `${ROOMS_PATH}/plumeria-cheminee-suspendue-mur-pierre-atlantis12-essaouira.webp`, alt: "La Pluméria, cheminée suspendue devant le mur en pierre" },
      { src: `${ROOMS_PATH}/plumeria-salle-de-bains-double-vasque-miroirs-zellige-turquoise-atlantis12-essaouira.webp`, alt: "La Pluméria, double vasque et zellige turquoise", fit: "contain" },
      { src: `${ROOMS_PATH}/plumeria-terrasse-mobile-coquillages-pergola-atlantis12-essaouira.webp`, alt: "La Pluméria, mobile de coquillages sous la pergola", fit: "contain" },
      { src: `${ROOMS_PATH}/plumeria-terrasse-fauteuil-suspendu-banquette-pergola-atlantis12-essaouira.webp`, alt: "La Pluméria, fauteuil suspendu et banquette sous la pergola", fit: "contain" },
    ],
    artwork: { src: `${GALLERY_PATH}/oeuvre-lahcen-fikri-visages-ocre-atlantis12-essaouira.webp`, alt: "Œuvre dans la chambre" },
    artworkStatus: "available",
  },
  {
    slug: "l-ipomea",
    name: "L'Ipoméa",
    category: "Suite Junior",
    adults: "• 2 adultes",
    area: "• 25 m²",
    intro:
      "L'Ipoméa tire son nom de la fleur grimpante qui habille les murs du Maroc. Une chambre lumineuse, enveloppée de bleu indigo, où la nature entre par chaque fenêtre.",
    equip: COMMON_EQUIP_JUNIOR,
    images: [
      { src: `${ROOMS_PATH}/ipomea-salon-banquette-arche-bleue-atlantis12-essaouira.webp`, alt: "L'Ipoméa, salon avec banquette et arche bleue" },
      { src: `${ROOMS_PATH}/ipomea-salon-cheminee-fauteuil-baroque-atlantis12-essaouira.webp`, alt: "L'Ipoméa, salon avec cheminée et fauteuil baroque" },
      { src: `${ROOMS_PATH}/ipomea-chambre-lit-bleu-vue-laterale-atlantis12-essaouira.webp`, alt: "L'Ipoméa, chambre avec lit bleu" },
      { src: `${ROOMS_PATH}/ipomea-salle-de-bains-douche-etageres-atlantis12-essaouira.webp`, alt: "L'Ipoméa, salle de bains avec douche et étagères" },
      { src: `${ROOMS_PATH}/ipomea-patio-prive-hamac-pergola-atlantis12-essaouira.webp`, alt: "L'Ipoméa, patio privé avec hamac sous la pergola" },
    ],
    artwork: { src: `${GALLERY_PATH}/oeuvre-artiste-russe-nature-morte-fleurs-rouges-verre-atlantis12-essaouira.webp`, alt: "Œuvre dans la chambre" },
    artworkStatus: "permanent",
  },
  {
    slug: "l-agave",
    name: "L'Agave",
    category: "Suite Junior",
    adults: "• 2 adultes",
    area: "• 25 m²",
    intro:
      "Nommée d'après l'agave sauvage qui ponctue le paysage atlantique, cette chambre conjugue minéralité et douceur. Ses lignes épurées et sa palette naturelle invitent au silence.",
    equip: COMMON_EQUIP_JUNIOR,
    images: [
      { src: `${ROOMS_PATH}/agave-chambre-lit-vert-murs-pierre-lumiere-atlantis12-essaouira.webp`, alt: "L'Agave, La chambre" },
      { src: `${ROOMS_PATH}/agave-salon-fauteuil-baroque-murs-pierre-atlantis12-essaouira.webp`, alt: "L'Agave, Le salon" },
      { src: `${ROOMS_PATH}/agave-lit-double-murs-pierre-atlantis12-essaouira.webp`, alt: "L'Agave, Le lit double" },
      { src: `${ROOMS_PATH}/agave-detail-coussin-brode-motif-vert-atlantis12-essaouira.webp`, alt: "L'Agave, Détail coussin" },
      { src: `${ROOMS_PATH}/agave-detail-roses-rouges-table-basse-lit-coussins-verts-atlantis12-essaouira.webp`, alt: "L'Agave, Détail fleurs" },
      { src: `${ROOMS_PATH}/agave-exterieur-facade-pierre-porte-noire-patio-atlantis12-essaouira.webp`, alt: "L'Agave, L'entrée" },
    ],
    artwork: { src: `${GALLERY_PATH}/oeuvre-christina-nature-morte-vases-plantes-atlantis12-essaouira.webp`, alt: "Œuvre dans la chambre" },
    artworkStatus: "permanent",
  },
  {
    slug: "la-coquelicot",
    name: "La Coquelicot",
    category: "Suite Junior",
    adults: "• 2 adultes",
    area: "• 25 m²",
    intro:
      "La Coquelicot porte en elle l'éclat rouge d'un champ au printemps. Une chambre vibrante et intime, aux détails soignés, où la couleur dialogue avec les œuvres exposées.",
    equip: COMMON_EQUIP_JUNIOR,
    images: [
      { src: `${ROOMS_PATH}/coquelicot-chambre-grand-lit-coussins-rouges-lampes-raphia-murs-pierre-atlantis12-essaouira.webp`, alt: "La Coquelicot, Le lit" },
      { src: `${ROOMS_PATH}/coquelicot-salon-arche-fenetre-coussins-rouges-poutres-atlantis12-essaouira.webp`, alt: "La Coquelicot, Le salon" },
      { src: `${ROOMS_PATH}/coquelicot-salon-porte-patio-fauteuil-baroque-poutres-pierre-atlantis12-essaouira.webp`, alt: "La Coquelicot, Accès au patio" },
      { src: `${ROOMS_PATH}/coquelicot-salle-de-bains-double-vasque-miroirs-ronds-tadelakt-lanternes-atlantis12-essaouira.webp`, alt: "La Coquelicot, La salle de bain" },
      { src: `${ROOMS_PATH}/coquelicot-detail-niche-etageres-roses-multicolores-bougeoir-atlantis12-essaouira.webp`, alt: "La Coquelicot, Détail déco" },
    ],
    artwork: { src: `${GALLERY_PATH}/oeuvre-lahcen-fikri-personnages-allonges-atlantis12-essaouira.webp`, alt: "Œuvre de Lahcen Fikri dans La Coquelicot" },
    artworkStatus: "available",
  },
  {
    slug: "l-orchis",
    name: "L'Orchis",
    category: "Suite Junior",
    adults: "• 2 adultes",
    area: "• 25 m²",
    intro:
      "Discrète et raffinée comme l'orchidée sauvage de la forêt de thuyas, ses matières nobles, bois, coton naturel, tadelakt, composent un espace hors du temps.",
    equip: COMMON_EQUIP_JUNIOR,
    images: [
      { src: `${ROOMS_PATH}/orchis-chambre-grand-lit-couvre-lit-mauve-cheminee-murs-pierre-atlantis12-essaouira.webp`, alt: "L'Orchis, Le lit" },
      { src: `${ROOMS_PATH}/orchis-detail-tete-de-lit-niche-pierre-bocaux-tablette-bois-atlantis12-essaouira.webp`, alt: "L'Orchis, Détail tête de lit" },
      { src: `${ROOMS_PATH}/orchis-salon-cheminee-pierre-oeuvre-peinte-arche-fenetre-atlantis12-essaouira.webp`, alt: "L'Orchis, Le salon" },
      { src: `${ROOMS_PATH}/orchis-salle-de-bains-double-vasque-tadelakt-rose-miroirs-voute-atlantis12-essaouira.webp`, alt: "L'Orchis, La salle de bain" },
      { src: `${ROOMS_PATH}/orchis-salon-banquette-coussins-mauves-baie-vitree-rideau-atlantis12-essaouira.webp`, alt: "L'Orchis, La banquette" },
    ],
    artwork: { src: `${GALLERY_PATH}/oeuvre-lahcen-fikri-personnages-rouges-atlantis12-essaouira.webp`, alt: "Œuvre de Lahcen Fikri dans L'Orchis" },
    artworkStatus: "available",
  },
];

export const BOOK_URL =
  "https://atlantis-12-maison-d-hotes-et-d-art.hotelrunner.com/bv3/search";
export const OPEN_BOOKING_EVENT = "hotelrunner:open-search";

export const ROOM_SLUG_ALIASES = {
  lipomea: "l-ipomea",
  lagave: "l-agave",
  lorchis: "l-orchis",
};

export function normalizeRoomSlug(slug) {
  return ROOM_SLUG_ALIASES[slug] || slug;
}

export function getRoomBySlug(slug) {
  const normalized = normalizeRoomSlug(slug);
  return ROOMS.find((room) => room.slug === normalized) || null;
}

export default ROOMS;
