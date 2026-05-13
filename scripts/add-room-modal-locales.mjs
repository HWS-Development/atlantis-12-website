// Add rooms.<slug>.* + rooms.equip.* + modal.* to fr.json and en.json
import { readFileSync, writeFileSync } from "node:fs";

const FR = JSON.parse(readFileSync("./src/locales/fr.json", "utf8"));
const EN = JSON.parse(readFileSync("./src/locales/en.json", "utf8"));

const fr = {
  rooms: {
    "la-plumeria": {
      category: "Suite Supérieure",
      adults: "• 2 adultes",
      intro:
        "La plus grande chambre de la maison. Un espace fait pour ceux qui cherchent l'absolu.",
    },
    lipomea: {
      category: "Junior Suite",
      adults: "• 3 adultes",
      intro:
        "L'Ipoméa tire son nom de la fleur grimpante qui habille les murs du Maroc. Une chambre lumineuse, enveloppée de bleu indigo, où la nature entre par chaque fenêtre.",
    },
    lagave: {
      category: "Junior Suite",
      adults: "• 3 adultes",
      intro:
        "Nommée d'après l'agave sauvage qui ponctue le paysage atlantique, cette chambre conjugue minéralité et douceur. Ses lignes épurées et sa palette naturelle invitent au silence.",
    },
    "la-coquelicot": {
      category: "Junior Suite",
      adults: "• 3 adultes",
      intro:
        "La Coquelicot porte en elle l'éclat rouge d'un champ au printemps. Une chambre vibrante et intime, aux détails soignés, où la couleur dialogue avec les œuvres exposées.",
    },
    lorchis: {
      category: "Junior Suite",
      adults: "• 3 adultes",
      intro:
        "Discrète et raffinée comme l'orchidée sauvage de la forêt de thuyas, ses matières nobles, bois, coton naturel, tadelakt, composent un espace hors du temps.",
    },
    equip: {
      litKing: "Lit King size",
      litQueen: "Lit Queen size",
      vasteSalon: "Vaste salon",
      cheminee: "Cheminée",
      baiesVitrees: "Baies vitrées",
      terrassePrivee: "Terrasse privée",
      sdbPrivative: "Salle de bain privative",
      doucheItaliennePluie: "Douche italienne pluie",
      doucheItalienne: "Douche italienne",
      serviettesArgan: "Serviettes & savon à l'argan",
      salonPrivCheminee: "Salon privatif avec cheminée",
      vueParcPatio: "Vue parc & patio",
      ouvertureVitree: "Ouverture vitrée",
    },
  },
  modal: {
    backToRooms: "Voir les autres chambres",
    prevImage: "Image précédente",
    nextImage: "Image suivante",
    equipment: "Équipements",
    discoverArtwork: "Découvrir l'œuvre de la chambre",
    artworkLabel: "L'œuvre de la chambre",
    artworkDescription:
      "Chaque chambre d'Atlantis 12 abrite une ou plusieurs œuvres originales sélectionnées en dialogue direct avec l'espace. Ces pièces font partie de la collection permanente et peuvent être acquises sur demande auprès de l'équipe.",
    collection: "Collection permanente Atlantis 12",
    consultUs: "Nous consulter",
    bookRoom: "Réserver cette chambre",
  },
};

const en = {
  rooms: {
    "la-plumeria": {
      category: "Superior Suite",
      adults: "• 2 adults",
      intro:
        "The largest room in the house. A space made for those who seek the absolute.",
    },
    lipomea: {
      category: "Junior Suite",
      adults: "• 3 adults",
      intro:
        "Ipomea takes its name from the climbing flower that drapes the walls of Morocco. A luminous room, wrapped in indigo blue, where nature enters through every window.",
    },
    lagave: {
      category: "Junior Suite",
      adults: "• 3 adults",
      intro:
        "Named after the wild agave that punctuates the Atlantic landscape, this room blends mineral textures and softness. Its clean lines and natural palette invite silence.",
    },
    "la-coquelicot": {
      category: "Junior Suite",
      adults: "• 3 adults",
      intro:
        "Coquelicot carries within it the red brilliance of a spring field. A vibrant and intimate room with refined details, where colour converses with the artworks on display.",
    },
    lorchis: {
      category: "Junior Suite",
      adults: "• 3 adults",
      intro:
        "Discreet and refined like the wild orchid of the thuya forest, its noble materials — wood, natural cotton, tadelakt — compose a space outside of time.",
    },
    equip: {
      litKing: "King-size bed",
      litQueen: "Queen-size bed",
      vasteSalon: "Spacious lounge",
      cheminee: "Fireplace",
      baiesVitrees: "Bay windows",
      terrassePrivee: "Private terrace",
      sdbPrivative: "Private bathroom",
      doucheItaliennePluie: "Walk-in rain shower",
      doucheItalienne: "Walk-in shower",
      serviettesArgan: "Towels & argan soap",
      salonPrivCheminee: "Private lounge with fireplace",
      vueParcPatio: "Park & patio view",
      ouvertureVitree: "Glass opening",
    },
  },
  modal: {
    backToRooms: "See the other rooms",
    prevImage: "Previous image",
    nextImage: "Next image",
    equipment: "Amenities",
    discoverArtwork: "Discover the artwork of the room",
    artworkLabel: "The artwork of the room",
    artworkDescription:
      "Each room at Atlantis 12 houses one or more original artworks selected in direct dialogue with the space. These pieces belong to the permanent collection and may be acquired on request from the team.",
    collection: "Atlantis 12 permanent collection",
    consultUs: "Contact us",
    bookRoom: "Book this room",
  },
};

function deepMerge(target, source) {
  for (const k of Object.keys(source)) {
    if (
      source[k] &&
      typeof source[k] === "object" &&
      !Array.isArray(source[k])
    ) {
      target[k] ??= {};
      deepMerge(target[k], source[k]);
    } else {
      target[k] = source[k];
    }
  }
  return target;
}

deepMerge(FR, fr);
deepMerge(EN, en);

writeFileSync("./src/locales/fr.json", JSON.stringify(FR, null, 2) + "\n");
writeFileSync("./src/locales/en.json", JSON.stringify(EN, null, 2) + "\n");
console.log("Added rooms.<slug>.* + rooms.equip.* + modal.* to FR and EN");
