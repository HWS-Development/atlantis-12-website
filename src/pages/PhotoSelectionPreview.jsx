import { useEffect } from "react";

const IPOMEA_ORIGINALS = [
  "_DSC8325-HDR.webp",
  "_DSC8328-HDR-Panorama-Modifier.webp",
  "_DSC8340-HDR-Panorama-Modifier.webp",
  "_DSC8349-HDR.webp",
  "_DSC8352-HDR-Panorama.webp",
  "_DSC8361-HDR.webp",
  "_DSC8364-HDR.webp",
  "_DSC8367-HDR-Panorama-Modifier.webp",
  "_DSC8379-HDR-Modifier.webp",
  "_DSC8388-HDR.webp",
];

const PLUMERIA_ORIGINALS = [
  "_DSC8231-HDR.webp",
  "_DSC8234-HDR.webp",
  "_DSC8243-HDR-Panorama-Modifier.webp",
  "_DSC8249-HDR-Panorama-Modifier.webp",
  "_DSC8270-HDR-Panorama-Modifier.webp",
  "_DSC8273-HDR.webp",
  "_DSC8276-HDR.webp",
  "_DSC8279-HDR.webp",
  "_DSC8282-HDR-Panorama-Modifier.webp",
  "_DSC8291-HDR.webp",
  "_DSC8297-HDR.webp",
  "_DSC8300-HDR.webp",
  "_DSC8303.webp",
  "_DSC8304.webp",
  "_DSC8305.webp",
  "_DSC8306.webp",
  "_DSC8307.webp",
  "_DSC8308.webp",
  "_DSC8310.webp",
  "_DSC8311.webp",
  "_DSC8313.webp",
  "_DSC8314.webp",
  "_DSC8317.webp",
  "_DSC8318.webp",
  "_DSC8319.webp",
  "_DSC8321.webp",
  "_DSC8323.webp",
];

function PhotoGroup({ title, slug, originals }) {
  return (
    <section className="mb-20">
      <div className="flex items-end justify-between gap-6 mb-8 border-b border-primary/20 pb-4">
        <h2 className="font-display text-3xl md:text-5xl text-foreground">{title}</h2>
        <p className="font-body text-sm text-foreground/60">{originals.length} photographies</p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {originals.map((original, index) => {
          const number = String(index + 1).padStart(2, "0");
          const src = `/images/photo-selection/${slug}/${slug}-${number}.webp`;

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

      <PhotoGroup title="L’Ipoméa" slug="ipomea" originals={IPOMEA_ORIGINALS} />
      <PhotoGroup title="La Pluméria" slug="plumeria" originals={PLUMERIA_ORIGINALS} />
    </div>
  );
}
