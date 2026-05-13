// Five rooms — structural data only. All visible text (intros, equipment
// labels, category, adults) is resolved at render time via i18n keys:
//   rooms.<slug>.intro   rooms.<slug>.category   rooms.<slug>.adults
//   rooms.equip.<id>
// Inline FR strings below remain as i18next fallbacks (used when key missing).
const CDN = "/images/cdn";

// Stable equipment IDs (locale keys: rooms.equip.<id>)
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
      { src: `${CDN}/31f5d574b_plumeria-vaste-espace-chambre-colonnes-atlantis12-essaouira.jpg`, alt: "La Pluméria, Détail du lit" },
      { src: `${CDN}/ca1aaba1e_plumeria-terrasse-privee-baldaquin-foret-thuyas-atlantis12-essaouira.jpg`, alt: "La Pluméria, Terrasse privée" },
      { src: `${CDN}/45c6a2d21_plumeria-salon-prive-oeuvre-lahcen-fikri-lumiere-atlantis12-essaouira.jpg`, alt: "La Pluméria, Salon privé" },
      { src: `${CDN}/9690f0198_plumeria-cheminee-pierre-suite-superieure-atlantis12-essaouira.jpg`, alt: "La Pluméria, La cheminée" },
      { src: `${CDN}/213578e9f_plumeria-salle-de-bain-zellige-turquoise-atlantis12-essaouira.jpg`, alt: "La Pluméria, La salle de bain" },
      { src: `${CDN}/3950e3ddf_plumeria-coussins-artisanat-marocain-detail-lit-atlantis12-essaouira.jpg`, alt: "La Pluméria, Coussins artisanaux" },
    ],
    artwork: { src: `${CDN}/459ce29b2_oeuvre-lahcen-fikri-1-peinture-atlantis12-essaouira.jpg`, alt: "Œuvre dans la chambre" },
    showConsulter: false,
  },
  {
    slug: "lipomea",
    name: "L'Ipoméa",
    category: "Junior Suite",
    adults: "• 3 adultes",
    area: "• 25 m²",
    intro:
      "L'Ipoméa tire son nom de la fleur grimpante qui habille les murs du Maroc. Une chambre lumineuse, enveloppée de bleu indigo, où la nature entre par chaque fenêtre.",
    equip: COMMON_EQUIP_JUNIOR,
    images: [
      { src: `${CDN}/56696c9de_ipomea-chambre-lit-bleu-indigo-murs-pierre-atlantis12-essaouira.jpg`, alt: "L'Ipoméa, La chambre" },
      { src: `${CDN}/9a4aa282b_ipomea-salon-fauteuil-baroque-mur-bleu-indigo-atlantis12-essaouira.jpg`, alt: "L'Ipoméa, Le fauteuil baroque" },
      { src: `${CDN}/ccf85e314_ipomea-salon-prive-cheminee-pierre-baies-vitrees-atlantis12-essaouira.jpg`, alt: "L'Ipoméa, Le salon" },
      { src: `${CDN}/7b954e513_ipomea-detail-vase-ambre-fleurs-sechees-pierre-atlantis12-essaouira.jpg`, alt: "L'Ipoméa, Détail décoration" },
      { src: `${CDN}/076c890b2_ipomea-salle-de-bain-voute-bleue-verriere-tadelakt-atlantis12-essaouira.jpg`, alt: "L'Ipoméa, La voûte bleue" },
      { src: `${CDN}/7289d37b2_ipomea-patio-hamac-pergola-pierre-atlantis12-essaouirajpg.jpg`, alt: "L'Ipoméa, Le patio" },
    ],
    artwork: { src: `${CDN}/3f5df31af_oeuvre-russe-peinture-atelier-atlantis12-essaouira.jpg`, alt: "Œuvre dans la chambre" },
    showConsulter: true,
  },
  {
    slug: "lagave",
    name: "L'Agave",
    category: "Junior Suite",
    adults: "• 3 adultes",
    area: "• 25 m²",
    intro:
      "Nommée d'après l'agave sauvage qui ponctue le paysage atlantique, cette chambre conjugue minéralité et douceur. Ses lignes épurées et sa palette naturelle invitent au silence.",
    equip: COMMON_EQUIP_JUNIOR,
    images: [
      { src: `${CDN}/494af18ac_agave-chambre-lit-vert-murs-pierre-lumiere-atlantis12-essaouira.jpg`, alt: "L'Agave, La chambre" },
      { src: `${CDN}/b4043aeb8_agave-salon-fauteuil-pierre-atlantis12-essaouira.jpg`, alt: "L'Agave, Le salon" },
      { src: `${CDN}/8f333d23d_agave-lit-double-murs-pierre-atlantis12-essaouira.jpg`, alt: "L'Agave, Le lit double" },
      { src: `${CDN}/15f91cd69_agave-detail-coussin-textile-atlantis12-essaouira.jpg`, alt: "L'Agave, Détail coussin" },
      { src: `${CDN}/4a030b0b1_agave-detail-roses-rouges-table-basse-lit-coussins-verts-atlantis12-essaouira.jpg`, alt: "L'Agave, Détail fleurs" },
      { src: `${CDN}/c9caeba29_agave-exterieur-facade-pierre-porte-noire-patio-atlantis12-essaouira.jpg`, alt: "L'Agave, L'entrée" },
    ],
    artwork: { src: `${CDN}/128c70088_oeuvre-christina-peinture-atelier-atlantis12-essaouira.jpg`, alt: "Œuvre dans la chambre" },
    showConsulter: true,
  },
  {
    slug: "la-coquelicot",
    name: "La Coquelicot",
    category: "Junior Suite",
    adults: "• 3 adultes",
    area: "• 25 m²",
    intro:
      "La Coquelicot porte en elle l'éclat rouge d'un champ au printemps. Une chambre vibrante et intime, aux détails soignés, où la couleur dialogue avec les œuvres exposées.",
    equip: COMMON_EQUIP_JUNIOR,
    images: [
      { src: `${CDN}/cc0552d2f_coquelicot-chambre-lit-queen-coussins-rouges-lampes-raphia-murs-pierre-atlantis12-essaouira.jpg`, alt: "La Coquelicot, Le lit" },
      { src: `${CDN}/cda140ef1_coquelicot-salon-arche-fenetre-coussins-rouges-poutres-atlantis12-essaouira.jpg`, alt: "La Coquelicot, Le salon" },
      { src: `${CDN}/fbc47ea08_coquelicot-salon-porte-patio-fauteuil-baroque-poutres-pierre-atlantis12-essaouira.jpg`, alt: "La Coquelicot, Accès au patio" },
      { src: `${CDN}/9532142cc_coquelicot-salle-de-bain-double-vasque-miroirs-ronds-tadelakt-lanternes-atlantis12-essaouira.jpg`, alt: "La Coquelicot, La salle de bain" },
      { src: `${CDN}/ed2bd2778_coquelicot-detail-niche-etageres-roses-multicolores-bougeoir-atlantis12-essaouira.jpg`, alt: "La Coquelicot, Détail déco" },
      { src: `${CDN}/f3dc7bd0c_coquelicot-exterieur-plaque-rouge-mur-pierre-atlantis12-essaouira.jpg`, alt: "La Coquelicot, L'extérieur" },
    ],
    artwork: { src: `${CDN}/f3dc7bd0c_coquelicot-exterieur-plaque-rouge-mur-pierre-atlantis12-essaouira.jpg`, alt: "Œuvre dans la chambre" },
    showConsulter: true,
  },
  {
    slug: "lorchis",
    name: "L'Orchis",
    category: "Junior Suite",
    adults: "• 3 adultes",
    area: "• 25 m²",
    intro:
      "Discrète et raffinée comme l'orchidée sauvage de la forêt de thuyas, ses matières nobles, bois, coton naturel, tadelakt, composent un espace hors du temps.",
    equip: COMMON_EQUIP_JUNIOR,
    images: [
      { src: `${CDN}/3f9122d0b_orchis-chambre-lit-queen-couvre-lit-mauve-cheminee-murs-pierre-atlantis12-essaouira.jpg`, alt: "L'Orchis, Le lit" },
      { src: `${CDN}/0b395d2bd_orchis-detail-tete-de-lit-niche-pierre-bocaux-tablette-bois-atlantis12-essaouira.jpg`, alt: "L'Orchis, Détail tête de lit" },
      { src: `${CDN}/2315a3422_orchis-salon-cheminee-pierre-oeuvre-peinte-arche-fenetre-atlantis12-essaouira.jpg`, alt: "L'Orchis, Le salon" },
      { src: `${CDN}/f3b92560c_orchis-salle-de-bain-double-vasque-tadelakt-rose-miroirs-voute-atlantis12-essaouira.jpg`, alt: "L'Orchis, La salle de bain" },
      { src: `${CDN}/b913498d5_orchis-salon-banquette-coussins-mauve-baie-vitree-rideau-atlantis12-essaouira.jpg`, alt: "L'Orchis, La banquette" },
      { src: `${CDN}/1e28f5fe0_orchis-exterieur-plaque-rouge-mur-pierre-porte-atlantis12-essaouira.jpg`, alt: "L'Orchis, L'entrée" },
    ],
    artwork: { src: `${CDN}/1e28f5fe0_orchis-exterieur-plaque-rouge-mur-pierre-porte-atlantis12-essaouira.jpg`, alt: "Œuvre dans la chambre" },
    showConsulter: true,
  },
];

export const BOOK_URL =
  "https://atlantis-12-maison-d-hotes-et-d-art.hotelrunner.com/bv3/search";

export default ROOMS;
