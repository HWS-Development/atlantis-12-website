import { useEffect } from "react";

const IPOMEA_PHOTOS = [
  { original: "_DSC8325-HDR.webp", path: "/images/rooms/ipomea-salon-banquette-arche-bleue-atlantis12-essaouira.webp" },
  { original: "_DSC8328-HDR-Panorama.webp", filename: "ipomea-salon-cheminee-banquette-pierre-atlantis12-essaouira.webp" },
  { original: "_DSC8340-HDR-Panorama.webp", path: "/images/rooms/ipomea-salon-cheminee-fauteuil-baroque-atlantis12-essaouira.webp" },
  { original: "_DSC8349-HDR.webp", filename: "ipomea-chambre-lit-bleu-vue-frontale-atlantis12-essaouira.webp" },
  { original: "_DSC8352-HDR-Panorama.webp", filename: "ipomea-chambre-lit-bleu-porte-turquoise-atlantis12-essaouira.webp" },
  { original: "_DSC8361-HDR.webp", path: "/images/rooms/ipomea-chambre-lit-bleu-vue-laterale-atlantis12-essaouira.webp" },
  { original: "_DSC8364-HDR.webp", filename: "ipomea-salle-de-bains-double-vasque-miroir-atlantis12-essaouira.webp" },
  { original: "_DSC8367-HDR-Panorama.webp", path: "/images/rooms/ipomea-salle-de-bains-douche-etageres-atlantis12-essaouira.webp" },
  { original: "_DSC8379-HDR.webp", filename: "ipomea-salle-de-bains-double-vasque-verriere-atlantis12-essaouira.webp" },
  { original: "_DSC8388-HDR.webp", path: "/images/rooms/ipomea-patio-prive-hamac-pergola-atlantis12-essaouira.webp" },
];

const PLUMERIA_PHOTOS = [
  { original: "_DSC8231-HDR.webp", filename: "plumeria-chambre-lit-blanc-oeuvres-atlantis12-essaouira.webp" },
  { original: "_DSC8234-HDR.webp", path: "/images/rooms/plumeria-chambre-lit-blanc-poutres-bois-atlantis12-essaouira.webp" },
  { original: "_DSC8243-HDR-Panorama.webp", filename: "plumeria-suite-espace-colonnes-bureau-atlantis12-essaouira.webp" },
  { original: "_DSC8249-HDR-Panorama.webp", filename: "plumeria-suite-salon-canape-cheminee-atlantis12-essaouira.webp" },
  { original: "_DSC8270-HDR-Panorama.webp", filename: "plumeria-suite-chambre-salon-colonnes-atlantis12-essaouira.webp" },
  { original: "_DSC8273-HDR.webp", path: "/images/rooms/plumeria-chambre-bouquet-roses-tableau-atlantis12-essaouira.webp" },
  { original: "_DSC8276-HDR.webp", filename: "plumeria-salle-de-bains-double-vasque-zellige-atlantis12-essaouira.webp" },
  { original: "_DSC8279-HDR.webp", filename: "plumeria-salle-de-bains-douche-zellige-atlantis12-essaouira.webp" },
  { original: "_DSC8282-HDR-Panorama.webp", filename: "plumeria-chambre-lit-colonnes-vue-frontale-atlantis12-essaouira.webp" },
  { original: "_DSC8291-HDR.webp", filename: "plumeria-terrasse-privee-fauteuil-suspendu-atlantis12-essaouira.webp" },
  { original: "_DSC8297-HDR.webp", path: "/images/rooms/plumeria-facade-suite-terrasse-pergola-atlantis12-essaouira.webp" },
  { original: "_DSC8300-HDR.webp", path: "/images/rooms/plumeria-terrasse-salon-exterieur-pergola-atlantis12-essaouira.webp" },
  { original: "_DSC8303.webp", filename: "plumeria-decoration-tableau-vert-bouquet-roses-atlantis12-essaouira.webp" },
  { original: "_DSC8304.webp", path: "/images/rooms/plumeria-decoration-niche-fenetre-vase-blanc-atlantis12-essaouira.webp" },
  { original: "_DSC8305.webp", filename: "plumeria-chambre-detail-oreillers-lampe-atlantis12-essaouira.webp" },
  { original: "_DSC8306.webp", filename: "plumeria-salon-bouquet-roses-table-atlantis12-essaouira.webp" },
  { original: "_DSC8307.webp", path: "/images/rooms/plumeria-cheminee-suspendue-mur-pierre-atlantis12-essaouira.webp" },
  { original: "_DSC8308.webp", filename: "plumeria-decoration-coquillages-vitrine-atlantis12-essaouira.webp" },
  { original: "_DSC8310.webp", filename: "plumeria-cheminee-tableau-rouge-atlantis12-essaouira.webp" },
  { original: "_DSC8311.webp", filename: "plumeria-salle-de-bains-miroir-vasque-atlantis12-essaouira.webp" },
  { original: "_DSC8313.webp", filename: "plumeria-bureau-ordinateur-fenetre-atlantis12-essaouira.webp" },
  { original: "_DSC8314.webp", filename: "plumeria-terrasse-mobile-coquillages-atlantis12-essaouira.webp" },
  { original: "_DSC8317.webp", filename: "plumeria-terrasse-luminaire-rotin-atlantis12-essaouira.webp" },
  { original: "_DSC8318.webp", filename: "plumeria-table-accueil-douceurs-bouquet-atlantis12-essaouira.webp" },
  { original: "_DSC8319.webp", filename: "plumeria-table-bouquet-roses-douceurs-atlantis12-essaouira.webp" },
  { original: "_DSC8321.webp", filename: "plumeria-table-bouquet-roses-canape-atlantis12-essaouira.webp" },
  { original: "_DSC8323.webp", filename: "plumeria-decoration-vase-blanc-fleurs-sechees-atlantis12-essaouira.webp" },
];

function PhotoGroup({ title, slug, photos }) {
  return (
    <section className="mb-20">
      <div className="flex items-end justify-between gap-6 mb-8 border-b border-primary/20 pb-4">
        <h2 className="font-display text-3xl md:text-5xl text-foreground">{title}</h2>
        <p className="font-body text-sm text-foreground/60">{photos.length} photographies</p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {photos.map(({ original, filename, path }, index) => {
          const number = String(index + 1).padStart(2, "0");
          const src = path || `/images/photo-selection/${slug}/${filename}`;

          return (
            <a
              key={original}
              href={src}
              target="_blank"
              rel="noopener noreferrer"
              className="group block border border-primary/15 bg-white"
              title="Ouvrir la photographie en plein format"
            >
              <div className="aspect-[4/3] bg-[#1f281c] overflow-hidden">
                <img
                  src={src}
                  alt={`${title}, photographie ${number}`}
                  className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>
              <div className="p-4">
                <p className="font-body text-xs tracking-[0.2em] uppercase text-primary mb-1">
                  Photo {number}
                </p>
                <p className="font-body text-xs text-foreground/60 break-all">{original}</p>
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
}

export default function PhotoSelectionPreview() {
  useEffect(() => {
    const previousTitle = document.title;
    let robots = document.querySelector('meta[name="robots"]');
    const previousRobots = robots?.getAttribute("content") || null;

    if (!robots) {
      robots = document.createElement("meta");
      robots.setAttribute("name", "robots");
      document.head.appendChild(robots);
    }
    robots.setAttribute("content", "noindex, nofollow, noarchive");
    document.title = "Aperçu des photographies reçues · Atlantis 12";

    return () => {
      document.title = previousTitle;
      if (previousRobots) robots.setAttribute("content", previousRobots);
      else robots.remove();
    };
  }, []);

  return (
    <div className="bg-background min-h-screen text-foreground px-[6vw] md:px-[8vw] pt-32 pb-24">
      <header className="max-w-3xl mb-16">
        <p className="font-body text-xs tracking-[0.35em] uppercase text-primary mb-4">
          Sélection transmise
        </p>
        <h1 className="font-display text-4xl md:text-7xl leading-tight mb-6">
          Aperçu des 37 photographies
        </h1>
        <p className="font-body text-base md:text-lg leading-relaxed text-foreground/70">
          Cliquez sur une miniature pour ouvrir la photographie en plein format. Les noms originaux sont indiqués sous chaque image afin de faciliter votre sélection.
        </p>
      </header>

      <PhotoGroup title="L’Ipoméa" slug="ipomea" photos={IPOMEA_PHOTOS} />
      <PhotoGroup title="La Pluméria" slug="plumeria" photos={PLUMERIA_PHOTOS} />
    </div>
  );
}
