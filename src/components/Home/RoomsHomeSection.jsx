// RoomsHomeSection — "LES 5 CHAMBRES — Chaque chambre, une œuvre"
//   - 4-col grid of junior suites (aspect-4/3)
//   - 1 wide card (aspect-16/9) below for the superior suite (Pluméria)
//   - Each card: image + dark gradient overlay + name (Dancing Script) + room type label
//   - Hover: image scale-105
//   - Bottom: centered "VOIR TOUTES LES CHAMBRES" outline pill
import LangLink from "../Common/LangLink";
import { useTranslation } from "react-i18next";
import Reveal from "../Common/Reveal";

// Same base44 CDN assets as live atlantis12essaouira.com home
const ROOMS_PATH = "/images/rooms";
const FAKE = {
  ipomea:     `${ROOMS_PATH}/ipomea-vue-panorama-atlantis12-essaouira.jpg`,
  agave:      `${ROOMS_PATH}/agave-chambre-vue-panoramique-atlantis12-essaouira.jpg`,
  coquelicot: `${ROOMS_PATH}/coquelicot-vue-patio-atlantis12-essaouira.jpg`,
  orchis:     `${ROOMS_PATH}/orchis-chambre-lit-mauve-murs-pierre-arche-atlantis12-essaouira.jpg`,
  plumeria:   `${ROOMS_PATH}/plumeria-vue-suite-atlantis12-essaouira.jpg`,
};

const JUNIORS = [
  { key: "ipomea",     to: "/chambres?room=lipomea",      name: "L'Ipoméa",     type: "Suite Junior", img: FAKE.ipomea },
  { key: "agave",      to: "/chambres?room=lagave",       name: "L'Agave",      type: "Suite Junior", img: FAKE.agave },
  { key: "coquelicot", to: "/chambres?room=la-coquelicot",name: "La Coquelicot",type: "Suite Junior", img: FAKE.coquelicot },
  { key: "orchis",     to: "/chambres?room=lorchis",      name: "L'Orchis",     type: "Suite Junior", img: FAKE.orchis },
];

function RoomCard({ to, name, type, img, alt, wide = false }) {
  return (
    <Reveal
      as={LangLink}
      to={to}
      delay={1}
      className={`group relative overflow-hidden cursor-pointer block ${
        wide ? "aspect-[16/9] mt-6" : "aspect-[4/3]"
      }`}
    >
      <img
        src={img}
        alt={alt}
        width={wide ? 1600 : 800}
        height={wide ? 900 : 600}
        loading="lazy"
        decoding="async"
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      {/* Dark gradient overlay (from bottom) - visible only on hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background:
            "linear-gradient(to top, rgba(44, 62, 37, 0.7), transparent)",
        }}
      />
      <div className={`absolute ${wide ? "bottom-6 left-6" : "bottom-4 left-4"}`}>
        <p
          className={`font-display ${wide ? "text-2xl" : "text-xl"}`}
          style={{ color: "rgb(245, 240, 232)" }}
        >
          {name}
        </p>
        <p
          className={`font-body text-xs tracking-wider ${wide ? "mt-2" : "mt-1"}`}
          style={{ color: "rgba(245, 240, 232, 0.6)" }}
        >
          {type}
        </p>
      </div>
    </Reveal>
  );
}

export default function RoomsHomeSection() {
  const { t } = useTranslation();
  return (
    <section className="page-x py-6 md:py-10">
      <Reveal as="p" className="eyebrow-primary mb-4">
        {t("home.rooms.eyebrow", "Les 5 chambres")}
      </Reveal>

      <Reveal
        as="h2"
        delay={1}
        className="font-display text-4xl md:text-5xl text-foreground mb-12"
      >
        {t("home.rooms.title", "Chaque chambre, une œuvre")}
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6">
        {JUNIORS.map((r) => (
          <RoomCard
            key={r.key}
            to={r.to}
            name={r.name}
            type={r.type}
            img={r.img}
            alt={`${r.name}, junior suite - Atlantis 12, Essaouira`}
          />
        ))}
      </div>

      <RoomCard
        wide
        to="/chambres?room=la-plumeria"
        name="La Pluméria"
        type="Chambre Supérieure"
        img={FAKE.plumeria}
        alt="Plumeria, suite supérieure - Atlantis 12, Essaouira"
      />

      <div className="mt-8 text-center">
        <LangLink to="/chambres" className="btn-outline-primary inline-block">
          {t("home.rooms.cta", "Voir toutes les chambres")}
        </LangLink>
      </div>
    </section>
  );
}
