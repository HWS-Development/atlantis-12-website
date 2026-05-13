// scripts/add-page-locales.mjs
// Adds page-specific locale namespaces to fr.json and en.json
import fs from "node:fs";

const FR_NEW = {
  roomsPage: {
    heroEyebrow: "Les chambres & suites — Essaouira",
    heroTitle1: "Cinq espaces,",
    heroTitle2: "cinq univers",
    heroAlt: "Plumeria, la suite — Atlantis 12, Essaouira",
    intro1: "Cinq chambres, cinq univers, chacun nommé d'après une plante sauvage",
    intro2: "du littoral atlantique.",
    intro3: "Murs de pierre, tadelakt, bois brut de thuyas, lumière douce d'Essaouira : les espaces d'Atlantis 12 sont des sanctuaires de matières et de silence, ouverts",
    intro4: "sur le parc et le patio.",
    intro5: "Se poser, rêver, et laisser la maison faire le reste.",
    labelSuperior: "Chambre Supérieure",
    labelJunior: "Junior Suite"
  },
  contactPage: {
    logoAlt: "Atlantis 12 — Maison d'hôtes et d'art, Essaouira, Maroc",
    eyebrow: "Contact",
    title: "Nous écrire",
    form: {
      name: "Nom complet",
      namePh: "Votre nom",
      email: "Adresse email",
      emailPh: "votre@email.com",
      subject: "Objet",
      subjectPh: "Sélectionner un objet",
      message: "Message",
      messagePh: "Votre message…",
      send: "Envoyer",
      mailSubject: "Contact — Atlantis 12"
    },
    subjects: [
      "Réservation / Disponibilités",
      "Informations pratiques",
      "Table d'hôtes",
      "Renseignements sur une œuvre",
      "Résidence artistique",
      "Autre"
    ],
    info: {
      email: "Email",
      whatsapp: "WhatsApp",
      address: "Adresse",
      addressLine: "Douar Laraich, Route de Safi, 44000, Essaouira — Maroc",
      reception: "Réception",
      hours: "Ouverte de 8h à 21h — 7j/7",
      mapPlaceholder: "Essaouira — 44000 Maroc",
      openMap: "Ouvrir dans Google Maps"
    }
  },
  aboutHero: {
    eyebrow: "La Maison",
    title1: "Révélée",
    title2: "pierre après pierre",
    heroAlt: "La maison Atlantis 12"
  },
  aboutPg: {
    geneseEyebrow: "La Genèse",
    geneseTitle: "Née d'un rêve partagé",
    geneseParas: [
      "Celui d'Asmae et Lahcen, pour qui l'art, la gastronomie et l'hospitalité marocaine sont des façons d'être au monde et d'en offrir le meilleur.",
      "Atlantis 12 n'a pas été construite. Elle a été rêvée, puis lentement révélée, pierre après pierre, tableau après tableau, silence après silence.",
      "Tout a commencé par un coup de foudre pour un lieu perdu entre ciel et maquis, à quelques kilomètres d'Essaouira. Un lieu sauvage, oublié, traversé par le vent de l'Atlantique et la lumière dorée du Souss. Un lieu qui attendait.",
      "Pendant des années, nous avons apprivoisé ce lieu, réveillé ses pierres, dompté ses volumes, épaissi son silence. Jusqu'à ce qu'il devienne ce qu'il est aujourd'hui : une maison d'hôtes et d'art où chaque chambre porte le nom d'une plante, comme autant de jardins secrets, chacun avec son âme propre.",
      "Les repas se prennent au cœur de l'art ou sous les thuyas. Les matins sentent l'argan, le msemmen et le pain chaud. Les nuits sont silencieuses, étoilées, absolues.",
      "Nous ne recevons que des adultes, par choix, pour préserver cette qualité de silence et de rencontre qui fait l'âme d'Atlantis 12."
    ],
    foundersAlt: "Asmae et Lahcen",
    photoCredit: "© Jean Madesky",
    welcome: "Bienvenue chez nous.",
    essenceEyebrow: "Notre essence",
    essenceTitle: "Ce qui nous anime",
    essenceParas: [
      "Il existe une autre façon de voyager. Pas celle des hôtels interchangeables, des décors folkloriques calibrés pour plaire à tous et qui finissent par ne toucher personne. Une façon plus lente, plus vraie, où l'on arrive quelque part et où l'on sent, sans qu'on ait besoin de le dire, que l'on est attendu.",
      "C'est cette conviction qui a fondé Atlantis 12.",
      "Une ancienne bergerie métamorphosée avec soin. Ses murs portent une histoire, ses pièces ont une mémoire, ses plantes ont un nom. Rien n'a été installé pour faire effet. Tout est là parce que nous l'aimons.",
      "Essaouira n'est pas notre décor. C'est notre matière. La lumière particulière de cette ville, blanche le matin, dorée le soir, jamais tout à fait la même, entre par nos fenêtres et teinte chaque heure différemment. Les alizés portent l'odeur de l'Atlantique jusque dans les chambres. La médina pulse doucement à quelques minutes de route, assez près pour y plonger, assez loin pour en revenir apaisé. La cuisine que nous préparons vient de cette terre, de cette mer, de ces trois cultures entrelacées depuis des siècles : amazigh, andalouse, séfarade.",
      "L'art traverse la maison comme un fil continu. Les œuvres que nous exposons, les artistes que nous accueillons, d'ici et d'ailleurs, du Maroc et du monde, font d'Atlantis 12 un lieu vivant, en mouvement, où la création n'est jamais un ornement mais toujours une présence.",
      "La nature, elle, n'a pas besoin de s'annoncer. Elle entre par les parfums, par la lumière, par le souffle du vent, par le chant des oiseaux. Elle rappelle que le temps ici a une autre cadence et qu'il est permis de ralentir.",
      "Nous croyons que la beauté n'est pas un luxe. Que l'attention portée aux choses et aux êtres est la plus haute forme d'hospitalité. Que la maison d'hôtes et la maison d'art ne font qu'un seul et même geste : accueillir, vraiment."
    ],
    galleryEyebrow: "La maison en images",
    galleryTitle: "Voir, ressentir",
    gallery: [
      "L'entrée",
      "Le patio",
      "Le patio, la nuit",
      "La piscine",
      "Le rooftop au crépuscule",
      "Le salon",
      "Le salon & les œuvres",
      "Chevalet & détails",
      "Détail sonore",
      "Le petit-déjeuner",
      "Café dans le jardin",
      "Thé à la menthe"
    ],
    ctaTitle: "Là où le temps ralentit",
    ctaRooms: "Voir les chambres",
    ctaContact: "Nous contacter"
  },
  tablePg: {
    heroAlt: "Table d'hôtes Atlantis 12",
    heroEyebrow: "Table d'hôtes à Essaouira",
    heroTitle1: "Le repas",
    heroTitle2: "comme rituel",
    s1Title: "Une seule table, partagée",
    s1p1: "Chaque soir, les hôtes d'Atlantis 12 se retrouvent autour d'une table commune. Un repas unique, puisé dans le triple héritage culinaire d'Essaouira, andalou, amazigh et ashkénaze, préparé avec les légumes du jardin et les produits frais du marché.",
    s1p2: "Servi dans le patio en été, face au feu en hiver.",
    s1p3: "C'est souvent ici que naissent les meilleures conversations.",
    s1ImgAlt: "La table dressée — Atlantis 12",
    s2Title: "Le dîner du soir",
    s2Courses: "Entrée · Plat principal · Dessert",
    s2Lead: "Un menu unique, composé chaque soir selon la saison et l'inspiration du moment.",
    s2Price: "40€ / personne · hors boissons · sur réservation · servi à 20h",
    s2ImgAlt: "Couscous aux crevettes",
    s2Caption: "Couscous aux crevettes de l'Atlantique",
    s3Title: "Un plat, une histoire",
    s3p1: "Jaouhara, feuilles croustillantes, crème, amandes, cannelle, fleur d'oranger.",
    s3p2: "Avant de trôner sur les tables marocaines, ce dessert trouvait ses racines dans l'art de vivre d'Al-Andalus. Traversant la Méditerranée avec les exilés juifs et musulmans du XVe siècle, il s'est réinventé dans un Maroc Amazigh en poème feuilleté.",
    s3p3: "À atlantis 12, on aime raconter l'histoire dans l'assiette.",
    s3ImgAlt: "Jaouhara, dessert aux feuilles croustillantes et crème",
    s4Eyebrow: "Chaque matin",
    s4Title: "Le petit-déjeuner marocain",
    s4ImgAlt: "Le petit-déjeuner marocain",
    s4p1: "Le matin, la table se dresse à nouveau, msemen, baghrir, harcha, pain frais, miel, confitures, œufs du poulailler, thé à la menthe...",
    s4p2: "Compris dans le prix de la chambre · servi de 9h à 11h"
  },
  activitesPg: {
    heroAlt: "Balade à cheval au coucher du soleil sur la plage d'Essaouira — Atlantis 12",
    heroEyebrow: "Moments uniques",
    heroTitle: "Expériences",
    intro: "Parce qu'un séjour à Atlantis 12 ne s'arrête pas à la chambre, nous avons pensé chaque expérience pour prolonger l'esprit de la maison, entre forêt de thuyas, Atlantique et art de vivre marocain. Certaines se vivent ici même, d'autres nous emmènent plus loin. Toutes se réservent à l'avance.",
    houseEyebrow: "à Atlantis 12",
    houseTitle: "Chez nous",
    house: [
      { eyebrow: "bien-être", title: "Massage bien-être", todo: "Sous les arganiers ou en terrasse selon la météo, notre équipe vous offre un moment de détente complet. Un soin à intégrer dès votre arrivée, le reste du séjour n'en sera que meilleur.", cta: "Sur réservation" },
      { eyebrow: "art & création", title: "Atelier de peinture intuitive", todo: "Lahcen Fikri vous ouvre son atelier et sa façon d'entrer dans la peinture — par le geste, l'instinct, la couleur. Aucune expérience n'est requise. Aucune n'est même utile. Vous repartez avec une œuvre que vous n'attendiez pas — et qui est entièrement la vôtre.", cta: "Sur réservation" },
      { eyebrow: "nature & évasion", title: "Balade en dromadaire", todo: "Du patio d'Atlantis 12, au pas du dromadaire, la forêt de thuyas s'ouvre sur une plage sauvage, loin de tout. Un pique-nique peut ponctuer la balade, le temps d'un moment suspendu entre ciel et océan.", cta: "" },
      { eyebrow: "corps & esprit", title: "Séance de yoga", todo: "En terrasse, la forêt de thuyas à perte de vue. En salle quand le vent décide autrement. Dans les deux cas, le temps s'arrête vraiment.", cta: "" }
    ],
    partnersEyebrow: "avec nos partenaires",
    partnersTitle: "Autour de nous",
    partnersCta: "Sur demande",
    partners: [
      { eyebrow: "Balades", title: "Balades à cheval", todo: "Forêt d'arganiers, dunes dorées, plage au coucher du soleil. Une façon rare et douce de découvrir les environs." },
      { eyebrow: "Surf", title: "Surf, kitesurf, kitefoil, windsurf", todo: "L'Atlantique est à deux pas et le vent d'Essaouira est légendaire. Débutants et confirmés bienvenus, nos partenaires s'adaptent à votre niveau." },
      { eyebrow: "Randonnées", title: "Randonnées en quad ou en buggy", todo: "Plages sauvages et dunes à perte de vue. Pour ceux qui aiment sentir le vent et l'espace." },
      { eyebrow: "Hammam", title: "Hammam traditionnel & soins", todo: "Une parenthèse de bien-être dans un hammam authentique avec gommage, savon beldi, masque à l'argile. Le rituel marocain dans toute sa générosité." },
      { eyebrow: "Excursions", title: "Excursions en motos électriques", todo: "Des visites guidées silencieuses, au rythme de la nature. Une façon écologique et originale de découvrir la région." }
    ],
    customEyebrow: "sur mesure",
    customTitle: "Une envie particulière ?",
    customText: "Chaque séjour est différent. Si vous avez une activité en tête, une sortie en mer, une rencontre avec un artisan ou un musicien, un dîner sous les étoiles... nous ferons tout pour la rendre possible. Dites-nous ce qui vous ferait vraiment plaisir.",
    customCta: "nous contacter"
  },
  essaouiraPg: {
    heroAlt: "Essaouira",
    heroEyebrow: "Mogador",
    heroTitle1: "Ce qu'on aime (vraiment !)",
    heroTitle2: "à Essaouira",
    chosenTitle: "Essaouira, choisie",
    chosenP1: "On ne s'installe pas à Essaouira par hasard. On y arrive un jour, porté par le vent, et quelque chose se passe : une lumière, une odeur de thuyas et d'iode, le son des vagues contre les remparts. Et on ne repart plus vraiment.",
    chosenP2: "C'est ce qui nous est arrivé. Nous l'avons choisie pour ce qu'elle cache : une douceur de vivre rare, une créativité qui sourd de partout, une humanité dans les ruelles qui ne ressemble à nulle autre ville du Maroc.",
    chosenP3: "Ce que vous trouverez sur cette page, ce sont les adresses que nous donnons à nos amis.",
    seeTitle: "À voir et à vivre",
    seeP1a: "On commence toujours par ",
    seeP1b: " : c'est la porte qui donne le ton. À deux pas sur la droite, ",
    seeP1c: " mérite qu'on s'y arrête, pour une exposition ou pour une improvisation musicale.",
    seeP2a: "Laissez-vous porter jusqu'à la place de l'Horloge, traversez la petite place attenante qui ressemble tant à la Sardaigne qu'à une ruelle de Buenos Aires, puis demandez votre chemin pour ",
    seeP2b: " qui raconte le vivre ensemble de la plus belle façon qui soit, et un peu plus loin, le ",
    seeP2c: ", deux endroits qui changent le regard qu'on porte sur la ville.",
    seeP3a: "De là, montez vers ",
    seeP3b: ". Les canons, les mouettes, l'Atlantique en face ; on n'en revient pas à chaque fois. En longeant les remparts, vous arriverez sur ",
    seeP3c: ", parfaite en fin d'après-midi. Puis flânez au gré de vos envies : place au grain, marché aux poissons, ",
    seeP3d: " le saint patron des Gnaouas…",
    seeP4: "Poussez les portes. Perdez-vous dans les ruelles. C'est là qu'Essaouira se révèle vraiment.",
    linkBabSbaa: "Bab Sbaa",
    linkDarSouiri: "Dar Souiri",
    linkBaytDakira: "Bayt Dakira",
    linkMusee: "Musée d'Histoire d'Essaouira",
    linkSkala: "la Skala",
    linkPlaceMoulay: "la place Moulay El Hassan",
    linkZaouia: "la Zaouia Sidna Blal",
    bookLunch: "Déjeuner",
    bookDinner: "Dîner — nos préférés",
    bookNights: "Soirées",
    bookNightsSub: "Programme à vérifier — généralement à partir du mercredi ou jeudi",
    bookArgan: "Huile d'argan",
    bookCoops: "Coopératives authentiques",
    bookCoopsSub: "Sur rendez-vous — atelier cuisine et fabrication d'argan",
    notes: {
      darLawama: "Le point de vue sur l'Atlantique le plus époustouflant de la région. On y vient autant pour les yeux que pour l'assiette. Mais pour nous, c'est bien plus que ça : cela fait plus de vingt ans que nous y avons notre couvert, et longtemps notre gîte aussi. C'est ici, face à cet océan, que l'idée d'Essaouira a germé, et avec elle, Atlantis 12.",
      oceanVagabond: "Les pieds dans le sable, face à l'Atlantique.",
      chaletPlage: "Une institution. La mer dans l'assiette, depuis toujours.",
      chebZak: "Une adresse discrète dans la Médina, qui ne paye pas de mine mais où l'on déguste des langoustes sur un joli rooftop.",
      tableMaDada: "Cuisine marocaine raffinée, dans un cadre superbe.",
      loveCaravane: "Atmosphère unique, cuisine soignée.",
      darBaba: "Intime et savoureux.",
      lallaIzza: "Notre adresse de confiance pour une huile d'argan authentique."
    },
    ctaText: "N'hésitez pas à nous écrire si vous souhaitez plus de détails sur l'une de ces adresses — c'est avec plaisir que nous vous guiderons."
  },
  galleryPg: {
    heroAlt: "Maison d'art Atlantis 12",
    heroEyebrow: "Maison d'art",
    heroTitle1: "L'art habite ici,",
    heroTitle2: "en permanence",
    s1Title: "Une galerie qui se vit",
    s1p1: "Atlantis 12 n'est pas seulement une maison d'hôtes — c'est une maison d'art. Depuis son ouverture, la maison accueille des artistes marocains et internationaux en résidence, expose leurs œuvres dans les espaces de vie, et permet aux collectionneurs de découvrir et d'acquérir des pièces originales in situ.",
    s1p2: "La sélection est permanente et évolutive. Chaque séjour est donc unique — les œuvres changent, les artistes passent, mais le dialogue entre l'espace et la création reste constant.",
    s1ImgAlt: "Atelier de peinture",
    collectionEyebrow: "La collection",
    collectionTitle: "Œuvres en résidence",
    badgeAvailable: "Disponible à l'acquisition",
    badgePermanent: "Collection permanente",
    metaCanvas: "Technique mixte sur toile — 2023 — 180 x 120 cm",
    metaPermanent: "Collection permanente",
    metaMetal: "Métal forgé",
    works: [
      { artist: "Lahcen Fikri", where: "In : La Pluméria" },
      { artist: "Natalia Voronova", where: "In : L'Ipomèa" },
      { artist: "Marta Blahová", where: "In : L'Agave" },
      { artist: "Lahcen Fikri", where: "In : La Coquelicot" },
      { artist: "Lahcen Fikri", where: "In : L'Orchis" },
      { artist: "Karim Alaoui", sub: "Les Gnaouas", where: "In : Le patio" }
    ],
    residencyTitle: "Résidences d'artistes",
    residencyText: "Fin 2026, Atlantis 12 ouvrira ses portes à des artistes et penseurs en résidence — plasticiens, photographes, sculpteurs, écrivains, historiens, philosophes. De 2 à 4 semaines d'immersion complète, avec hébergement sur place, espace studio et espaces de travail, au cœur de la forêt.",
    residencyCta: "Manifester votre intérêt"
  }
};

const EN_NEW = {
  roomsPage: {
    heroEyebrow: "Rooms & suites — Essaouira",
    heroTitle1: "Five spaces,",
    heroTitle2: "five worlds",
    heroAlt: "Plumeria, the suite — Atlantis 12, Essaouira",
    intro1: "Five rooms, five worlds, each named after a wild plant",
    intro2: "of the Atlantic coast.",
    intro3: "Stone walls, tadelakt, raw thuya wood, Essaouira's soft light: the spaces of Atlantis 12 are sanctuaries of materials and silence, opening",
    intro4: "onto the park and patio.",
    intro5: "Settle in, dream, and let the house do the rest.",
    labelSuperior: "Superior Room",
    labelJunior: "Junior Suite"
  },
  contactPage: {
    logoAlt: "Atlantis 12 — Guesthouse & House of Art, Essaouira, Morocco",
    eyebrow: "Contact",
    title: "Write to us",
    form: {
      name: "Full name",
      namePh: "Your name",
      email: "Email address",
      emailPh: "your@email.com",
      subject: "Subject",
      subjectPh: "Select a subject",
      message: "Message",
      messagePh: "Your message…",
      send: "Send",
      mailSubject: "Contact — Atlantis 12"
    },
    subjects: [
      "Booking / Availability",
      "Practical information",
      "Guest table",
      "Information about an artwork",
      "Artist residency",
      "Other"
    ],
    info: {
      email: "Email",
      whatsapp: "WhatsApp",
      address: "Address",
      addressLine: "Douar Laraich, Route de Safi, 44000, Essaouira — Morocco",
      reception: "Reception",
      hours: "Open from 8 a.m. to 9 p.m. — 7 days a week",
      mapPlaceholder: "Essaouira — 44000 Morocco",
      openMap: "Open in Google Maps"
    }
  },
  aboutHero: {
    eyebrow: "The House",
    title1: "Revealed",
    title2: "stone by stone",
    heroAlt: "The Atlantis 12 house"
  },
  aboutPg: {
    geneseEyebrow: "The Genesis",
    geneseTitle: "Born of a shared dream",
    geneseParas: [
      "The dream of Asmae and Lahcen, for whom art, gastronomy and Moroccan hospitality are ways of being in the world and offering its very best.",
      "Atlantis 12 was not built. It was dreamt, then slowly revealed, stone by stone, painting by painting, silence by silence.",
      "It all began with a love at first sight for a place lost between sky and scrubland, a few kilometres from Essaouira. A wild, forgotten place, swept by the Atlantic wind and the golden Souss light. A place that was waiting.",
      "For years, we tamed this place, awakened its stones, mastered its volumes, deepened its silence. Until it became what it is today: a guesthouse and house of art where each room bears the name of a plant, like so many secret gardens, each with its own soul.",
      "Meals are taken at the heart of art or beneath the thuyas. Mornings smell of argan, msemmen and warm bread. Nights are silent, starlit, absolute.",
      "We welcome only adults, by choice, to preserve the quality of silence and connection that makes the soul of Atlantis 12."
    ],
    foundersAlt: "Asmae and Lahcen",
    photoCredit: "© Jean Madesky",
    welcome: "Welcome home.",
    essenceEyebrow: "Our essence",
    essenceTitle: "What drives us",
    essenceParas: [
      "There is another way of travelling. Not the one of interchangeable hotels, of folkloric scenery calibrated to please everyone and that ends up touching no one. A slower, truer way, where you arrive somewhere and feel, without needing to be told, that you are expected.",
      "It is this conviction that founded Atlantis 12.",
      "An old sheepfold lovingly transformed. Its walls carry a story, its rooms hold a memory, its plants have a name. Nothing has been placed for effect. Everything is here because we love it.",
      "Essaouira is not our backdrop. It is our material. The particular light of this city — white in the morning, golden in the evening, never quite the same — enters through our windows and tints each hour differently. The trade winds carry the scent of the Atlantic into the rooms. The medina pulses gently a few minutes' drive away, close enough to dive into, far enough to return from soothed. The cuisine we prepare comes from this land, this sea, these three cultures intertwined for centuries: Amazigh, Andalusian, Sephardic.",
      "Art runs through the house like a continuous thread. The works we exhibit, the artists we welcome, from here and elsewhere, from Morocco and the world, make Atlantis 12 a living place, in motion, where creation is never an ornament but always a presence.",
      "Nature, for its part, needs no announcement. It enters through scents, through light, through the breath of the wind, through birdsong. It reminds us that time here moves to a different cadence and that it is allowed to slow down.",
      "We believe beauty is not a luxury. That attention paid to things and to beings is the highest form of hospitality. That the guesthouse and the house of art are one and the same gesture: to truly welcome."
    ],
    galleryEyebrow: "The house in pictures",
    galleryTitle: "See, feel",
    gallery: [
      "The entrance",
      "The patio",
      "The patio at night",
      "The pool",
      "The rooftop at dusk",
      "The lounge",
      "The lounge & the artworks",
      "Easel & details",
      "A sound detail",
      "Breakfast",
      "Coffee in the garden",
      "Mint tea"
    ],
    ctaTitle: "Where time slows down",
    ctaRooms: "See the rooms",
    ctaContact: "Contact us"
  },
  tablePg: {
    heroAlt: "Atlantis 12 guest table",
    heroEyebrow: "Guest table in Essaouira",
    heroTitle1: "The meal",
    heroTitle2: "as a ritual",
    s1Title: "One single, shared table",
    s1p1: "Each evening, the guests of Atlantis 12 gather around a common table. A unique meal, drawn from Essaouira's threefold culinary heritage — Andalusian, Amazigh and Ashkenazi — prepared with vegetables from the garden and fresh produce from the market.",
    s1p2: "Served in the patio in summer, by the fire in winter.",
    s1p3: "It is often here that the best conversations are born.",
    s1ImgAlt: "The set table — Atlantis 12",
    s2Title: "The evening dinner",
    s2Courses: "Starter · Main course · Dessert",
    s2Lead: "A single menu, composed each evening according to the season and the inspiration of the moment.",
    s2Price: "€40 / person · drinks not included · by reservation · served at 8 p.m.",
    s2ImgAlt: "Couscous with prawns",
    s2Caption: "Couscous with Atlantic prawns",
    s3Title: "A dish, a story",
    s3p1: "Jaouhara — crisp leaves, cream, almonds, cinnamon, orange blossom.",
    s3p2: "Before reigning over Moroccan tables, this dessert had its roots in the art of living of Al-Andalus. Crossing the Mediterranean with the Jewish and Muslim exiles of the 15th century, it reinvented itself in an Amazigh Morocco as a layered poem.",
    s3p3: "At Atlantis 12, we love telling the story on the plate.",
    s3ImgAlt: "Jaouhara, crisp-leaf and cream dessert",
    s4Eyebrow: "Every morning",
    s4Title: "The Moroccan breakfast",
    s4ImgAlt: "The Moroccan breakfast",
    s4p1: "In the morning, the table is set anew — msemen, baghrir, harcha, fresh bread, honey, jams, eggs from our hens, mint tea...",
    s4p2: "Included in the room rate · served from 9 a.m. to 11 a.m."
  },
  activitesPg: {
    heroAlt: "Sunset horseback ride on Essaouira beach — Atlantis 12",
    heroEyebrow: "Unique moments",
    heroTitle: "Experiences",
    intro: "Because a stay at Atlantis 12 doesn't end at the room, we have crafted each experience to extend the spirit of the house — between the thuya forest, the Atlantic and the Moroccan art of living. Some are lived right here, others take us further afield. All are by reservation.",
    houseEyebrow: "at Atlantis 12",
    houseTitle: "With us",
    house: [
      { eyebrow: "wellness", title: "Wellness massage", todo: "Beneath the argan trees or on the terrace depending on the weather, our team offers a complete moment of relaxation. A treatment to enjoy from arrival — the rest of your stay will only be sweeter.", cta: "By reservation" },
      { eyebrow: "art & creation", title: "Intuitive painting workshop", todo: "Lahcen Fikri opens his studio and his way of entering painting — through gesture, instinct, colour. No experience is required. None is even useful. You leave with a work you didn't expect — and that is entirely your own.", cta: "By reservation" },
      { eyebrow: "nature & escape", title: "Camel ride", todo: "From the Atlantis 12 patio, at the pace of the camel, the thuya forest opens onto a wild beach, far from everything. A picnic may punctuate the ride — a moment suspended between sky and ocean.", cta: "" },
      { eyebrow: "body & spirit", title: "Yoga session", todo: "On the terrace, with the thuya forest stretching into the distance. Indoors when the wind decides otherwise. Either way, time truly stops.", cta: "" }
    ],
    partnersEyebrow: "with our partners",
    partnersTitle: "Around us",
    partnersCta: "On request",
    partners: [
      { eyebrow: "Rides", title: "Horseback rides", todo: "Argan forests, golden dunes, beach at sunset. A rare and gentle way to discover the surroundings." },
      { eyebrow: "Surf", title: "Surf, kitesurf, kitefoil, windsurf", todo: "The Atlantic is just steps away and Essaouira's wind is legendary. Beginners and advanced welcome — our partners adapt to your level." },
      { eyebrow: "Excursions", title: "Quad or buggy excursions", todo: "Wild beaches and dunes as far as the eye can see. For those who love the feel of wind and space." },
      { eyebrow: "Hammam", title: "Traditional hammam & treatments", todo: "A wellness interlude in an authentic hammam with scrubbing, beldi soap, clay mask. The Moroccan ritual in all its generosity." },
      { eyebrow: "Tours", title: "Electric motorbike tours", todo: "Quiet guided tours, at the pace of nature. An ecological and original way to discover the region." }
    ],
    customEyebrow: "tailor-made",
    customTitle: "A particular wish?",
    customText: "Every stay is different. If you have an activity in mind, an outing at sea, a meeting with an artisan or musician, a dinner under the stars... we will do everything to make it happen. Tell us what would truly delight you.",
    customCta: "contact us"
  },
  essaouiraPg: {
    heroAlt: "Essaouira",
    heroEyebrow: "Mogador",
    heroTitle1: "What we (truly!) love",
    heroTitle2: "in Essaouira",
    chosenTitle: "Essaouira, chosen",
    chosenP1: "One does not settle in Essaouira by chance. You arrive one day, carried by the wind, and something happens: a light, a scent of thuyas and iodine, the sound of waves against the ramparts. And you never quite leave.",
    chosenP2: "That is what happened to us. We chose it for what it conceals: a rare gentleness of life, a creativity bubbling up everywhere, a humanity in the alleyways unlike any other city in Morocco.",
    chosenP3: "What you'll find on this page are the addresses we share with our friends.",
    seeTitle: "To see and to live",
    seeP1a: "We always start with ",
    seeP1b: " — it's the gate that sets the tone. A few steps to the right, ",
    seeP1c: " is worth a stop, for an exhibition or a musical improvisation.",
    seeP2a: "Drift to the place de l'Horloge, cross the small adjoining square that resembles Sardinia as much as a Buenos Aires alley, then ask your way to ",
    seeP2b: " which tells the story of living together in the most beautiful way, and a little further on, the ",
    seeP2c: " — two places that change the way you see the city.",
    seeP3a: "From there, climb up to ",
    seeP3b: ". The cannons, the seagulls, the Atlantic facing you — we never get over it. Walking along the ramparts, you'll reach ",
    seeP3c: ", perfect at the end of the afternoon. Then wander as you wish — Place au Grain, the fish market, ",
    seeP3d: " patron saint of the Gnaouas…",
    seeP4: "Push open the doors. Lose yourself in the alleys. That is where Essaouira truly reveals itself.",
    linkBabSbaa: "Bab Sbaa",
    linkDarSouiri: "Dar Souiri",
    linkBaytDakira: "Bayt Dakira",
    linkMusee: "Essaouira History Museum",
    linkSkala: "the Skala",
    linkPlaceMoulay: "Place Moulay El Hassan",
    linkZaouia: "the Zaouia Sidna Blal",
    bookLunch: "Lunch",
    bookDinner: "Dinner — our favourites",
    bookNights: "Nightlife",
    bookNightsSub: "Programme to be checked — usually from Wednesday or Thursday onwards",
    bookArgan: "Argan oil",
    bookCoops: "Authentic cooperatives",
    bookCoopsSub: "By appointment — cooking workshop and argan-making",
    notes: {
      darLawama: "The most breathtaking Atlantic viewpoint in the region. We come as much for the eyes as for the plate. But for us, it is far more than that: for over twenty years we've had our table here, and long had our refuge here too. It is here, facing this ocean, that the idea of Essaouira took root, and with it, Atlantis 12.",
      oceanVagabond: "Feet in the sand, facing the Atlantic.",
      chaletPlage: "An institution. The sea on the plate, always.",
      chebZak: "A discreet address in the Medina, unassuming on the outside but where you'll savour lobster on a lovely rooftop.",
      tableMaDada: "Refined Moroccan cuisine, in a superb setting.",
      loveCaravane: "Unique atmosphere, careful cuisine.",
      darBaba: "Intimate and flavourful.",
      lallaIzza: "Our trusted address for authentic argan oil."
    },
    ctaText: "Don't hesitate to write to us if you'd like more details about any of these addresses — we'll happily guide you."
  },
  galleryPg: {
    heroAlt: "Atlantis 12 House of Art",
    heroEyebrow: "House of Art",
    heroTitle1: "Art lives here,",
    heroTitle2: "permanently",
    s1Title: "A gallery you live in",
    s1p1: "Atlantis 12 is not only a guesthouse — it is a house of art. Since opening, the house has welcomed Moroccan and international artists in residence, displays their works in the living spaces, and allows collectors to discover and acquire original pieces in situ.",
    s1p2: "The selection is permanent and ever-evolving. Every stay is therefore unique — works change, artists pass through, but the dialogue between space and creation remains constant.",
    s1ImgAlt: "Painting studio",
    collectionEyebrow: "The collection",
    collectionTitle: "Works in residence",
    badgeAvailable: "Available for purchase",
    badgePermanent: "Permanent collection",
    metaCanvas: "Mixed media on canvas — 2023 — 180 x 120 cm",
    metaPermanent: "Permanent collection",
    metaMetal: "Forged metal",
    works: [
      { artist: "Lahcen Fikri", where: "In: La Pluméria" },
      { artist: "Natalia Voronova", where: "In: L'Ipomèa" },
      { artist: "Marta Blahová", where: "In: L'Agave" },
      { artist: "Lahcen Fikri", where: "In: La Coquelicot" },
      { artist: "Lahcen Fikri", where: "In: L'Orchis" },
      { artist: "Karim Alaoui", sub: "Les Gnaouas", where: "In: The patio" }
    ],
    residencyTitle: "Artist residencies",
    residencyText: "In late 2026, Atlantis 12 will open its doors to artists and thinkers in residence — visual artists, photographers, sculptors, writers, historians, philosophers. Two to four weeks of complete immersion, with on-site lodging, studio space and workspaces, in the heart of the forest.",
    residencyCta: "Express your interest"
  }
};

function merge(target, src) {
  for (const k of Object.keys(src)) {
    if (target[k] && typeof target[k] === "object" && !Array.isArray(target[k]) && typeof src[k] === "object" && !Array.isArray(src[k])) {
      merge(target[k], src[k]);
    } else {
      target[k] = src[k];
    }
  }
}

for (const [path, data] of [["src/locales/fr.json", FR_NEW], ["src/locales/en.json", EN_NEW]]) {
  const obj = JSON.parse(fs.readFileSync(path, "utf8"));
  merge(obj, data);
  fs.writeFileSync(path, JSON.stringify(obj, null, 2) + "\n");
  console.log("Updated", path);
}
