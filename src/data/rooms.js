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
      { src: `${ROOMS_PATH}/plumeria-vaste-espace-chambre-colonnes-atlantis12-essaouira.webp`, alt: "La Pluméria, Détail du lit", position: "center 40%" },
      { src: `${ROOMS_PATH}/plumeria-terrasse-privee-baldaquin-foret-thuyas-atlantis12-essaouira.webp`, alt: "La Pluméria, Terrasse privée", position: "center bottom" },
      { src: `${ROOMS_PATH}/plumeria-salon-prive-oeuvre-lahcen-fikri-lumiere-atlantis12-essaouira.webp`, alt: "La Pluméria, Salon privé" },
      { src: `${ROOMS_PATH}/plumeria-cheminee-pierre-suite-superieure-atlantis12-essaouira.webp`, alt: "La Pluméria, La cheminée" },
      { src: `${ROOMS_PATH}/plumeria-salle-de-bain-zellige-turquoise-atlantis12-essaouira.webp`, alt: "La Pluméria, La salle de bain" },
      { src: `${ROOMS_PATH}/plumeria-coussins-artisanat-marocain-detail-lit-atlantis12-essaouira.webp`, alt: "La Pluméria, Coussins artisanaux" },
    ],
    artwork: { src: `${GALLERY_PATH}/oeuvre-lahcen-fikri-1-peinture-atlantis12-essaouira.webp`, alt: "Œuvre dans la chambre" },
    artworkStatus: "available",
  },
  {
    slug: "lipomea",
    name: "L'Ipoméa",
    category: "Suite Junior",
    adults: "• 2 adultes",
    area: "• 25 m²",
    intro:
      "L'Ipoméa tire son nom de la fleur grimpante qui habille les murs du Maroc. Une chambre lumineuse, enveloppée de bleu indigo, où la nature entre par chaque fenêtre.",
    equip: COMMON_EQUIP_JUNIOR,
    images: [
      { src: `${ROOMS_PATH}/ipomea-chambre-lit-bleu-indigo-murs-pierre-atlantis12-essaouira.webp`, alt: "L'Ipoméa, La chambre" },
      { src: `${ROOMS_PATH}/ipomea-salon-fauteuil-baroque-mur-bleu-indigo-atlantis12-essaouira.webp`, alt: "L'Ipoméa, Le fauteuil baroque" },
      { src: `${ROOMS_PATH}/ipomea-salon-prive-cheminee-pierre-baies-vitrees-atlantis12-essaouira.webp`, alt: "L'Ipoméa, Le salon" },
      { src: `${ROOMS_PATH}/ipomea-detail-vase-ambre-fleurs-sechees-pierre-atlantis12-essaouira.webp`, alt: "L'Ipoméa, Détail décoration" },
      { src: `${ROOMS_PATH}/ipomea-salle-de-bain-voute-bleue-verriere-tadelakt-atlantis12-essaouira.webp`, alt: "L'Ipoméa, La voûte bleue" },
      { src: `${ROOMS_PATH}/ipomea-patio-hamac-pergola-pierre-atlantis12-essaouirajpg.webp`, alt: "L'Ipoméa, Le patio" },
    ],
    artwork: { src: `${GALLERY_PATH}/oeuvre-russe-peinture-atelier-atlantis12-essaouira.webp`, alt: "Œuvre dans la chambre" },
    artworkStatus: "permanent",
  },
  {
    slug: "lagave",
    name: "L'Agave",
    category: "Suite Junior",
    adults: "• 2 adultes",
    area: "• 25 m²",
    intro:
      "Nommée d'après l'agave sauvage qui ponctue le paysage atlantique, cette chambre conjugue minéralité et douceur. Ses lignes épurées et sa palette naturelle invitent au silence.",
    equip: COMMON_EQUIP_JUNIOR,
    images: [
      { src: `${ROOMS_PATH}/agave-chambre-lit-vert-murs-pierre-lumiere-atlantis12-essaouira.webp`, alt: "L'Agave, La chambre" },
      { src: `${ROOMS_PATH}/agave-salon-fauteuil-pierre-atlantis12-essaouira.webp`, alt: "L'Agave, Le salon" },
      { src: `${ROOMS_PATH}/agave-lit-double-murs-pierre-atlantis12-essaouira.webp`, alt: "L'Agave, Le lit double" },
      { src: `${ROOMS_PATH}/agave-detail-coussin-textile-atlantis12-essaouira.webp`, alt: "L'Agave, Détail coussin" },
      { src: `${ROOMS_PATH}/agave-detail-roses-rouges-table-basse-lit-coussins-verts-atlantis12-essaouira.webp`, alt: "L'Agave, Détail fleurs" },
      { src: `${ROOMS_PATH}/agave-exterieur-facade-pierre-porte-noire-patio-atlantis12-essaouira.webp`, alt: "L'Agave, L'entrée" },
    ],
    artwork: { src: `${GALLERY_PATH}/oeuvre-christina-peinture-atelier-atlantis12-essaouira.webp`, alt: "Œuvre dans la chambre" },
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
      { src: `${ROOMS_PATH}/coquelicot-chambre-lit-queen-coussins-rouges-lampes-raphia-murs-pierre-atlantis12-essaouira.webp`, alt: "La Coquelicot, Le lit" },
      { src: `${ROOMS_PATH}/coquelicot-salon-arche-fenetre-coussins-rouges-poutres-atlantis12-essaouira.webp`, alt: "La Coquelicot, Le salon" },
      { src: `${ROOMS_PATH}/coquelicot-salon-porte-patio-fauteuil-baroque-poutres-pierre-atlantis12-essaouira.webp`, alt: "La Coquelicot, Accès au patio" },
      { src: `${ROOMS_PATH}/coquelicot-salle-de-bain-double-vasque-miroirs-ronds-tadelakt-lanternes-atlantis12-essaouira.webp`, alt: "La Coquelicot, La salle de bain" },
      { src: `${ROOMS_PATH}/coquelicot-detail-niche-etageres-roses-multicolores-bougeoir-atlantis12-essaouira.webp`, alt: "La Coquelicot, Détail déco" },
    ],
    artwork: { src: `${GALLERY_PATH}/oeuvre-lahcen-fikri-3-peinture-atlantis12-essaouira.webp`, alt: "Œuvre de Lahcen Fikri dans La Coquelicot" },
    artworkStatus: "available",
  },
  {
    slug: "lorchis",
    name: "L'Orchis",
    category: "Suite Junior",
    adults: "• 2 adultes",
    area: "• 25 m²",
    intro:
      "Discrète et raffinée comme l'orchidée sauvage de la forêt de thuyas, ses matières nobles, bois, coton naturel, tadelakt, composent un espace hors du temps.",
    equip: COMMON_EQUIP_JUNIOR,
    images: [
      { src: `${ROOMS_PATH}/orchis-chambre-lit-queen-couvre-lit-mauve-cheminee-murs-pierre-atlantis12-essaouira.webp`, alt: "L'Orchis, Le lit" },
      { src: `${ROOMS_PATH}/orchis-detail-tete-de-lit-niche-pierre-bocaux-tablette-bois-atlantis12-essaouira.webp`, alt: "L'Orchis, Détail tête de lit" },
      { src: `${ROOMS_PATH}/orchis-salon-cheminee-pierre-oeuvre-peinte-arche-fenetre-atlantis12-essaouira.webp`, alt: "L'Orchis, Le salon" },
      { src: `${ROOMS_PATH}/orchis-salle-de-bain-double-vasque-tadelakt-rose-miroirs-voute-atlantis12-essaouira.webp`, alt: "L'Orchis, La salle de bain" },
      { src: `${ROOMS_PATH}/orchis-salon-banquette-coussins-mauve-baie-vitree-rideau-atlantis12-essaouira.webp`, alt: "L'Orchis, La banquette" },
    ],
    artwork: { src: `${GALLERY_PATH}/oeuvre-lahcen-fikri-4-peinture-atlantis12-essaouira.webp`, alt: "Œuvre de Lahcen Fikri dans L'Orchis" },
    artworkStatus: "available",
  },
];

export const BOOK_URL =
  "https://atlantis-12-maison-d-hotes-et-d-art.hotelrunner.com/bv3/search";
export const OPEN_BOOKING_EVENT = "hotelrunner:open-search";

export default ROOMS;
