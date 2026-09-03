// /chambres — rebuilt 1:1 from reference/chambres/body.pretty.html
import { useEffect } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Reveal from "../components/Common/Reveal";
import LangLink from "../components/Common/LangLink";
import RoomDetailModal from "../components/Rooms/RoomDetailModal";
import ROOMS, { getRoomBySlug } from "../data/rooms";

const ROOMS_PATH = "/images/rooms";
const HERO = `${ROOMS_PATH}/plumeria-suite-chambre-salon-poutres-vue-large-atlantis12-essaouira.webp`;

const CARD_IMG = {
  "la-plumeria": {
    img: `${ROOMS_PATH}/plumeria-chambre-lit-blanc-oeuvres-vue-frontale-atlantis12-essaouira.webp`,
    altKey: "rooms.altPlumeria",
    altDefault: "La Pluméria, le lit - Atlantis 12, Essaouira",
    label: "labelSuperior",
  },
  "l-ipomea": {
    img: `${ROOMS_PATH}/ipomea-chambre-lit-bleu-porte-turquoise-vue-frontale-atlantis12-essaouira.webp`,
    altKey: "rooms.altIpomea",
    altDefault: "L’Ipoméa, chambre avec lit bleu indigo - Atlantis 12, Essaouira",
    label: "labelJunior",
  },
  "l-agave": {
    img: `${ROOMS_PATH}/agave-chambre-lit-vert-murs-pierre-vue-frontale-atlantis12-essaouira.webp`,
    altKey: "rooms.altAgave",
    altDefault: "Agave, chambre avec lit vert - Atlantis 12, Essaouira",
    label: "labelJunior",
  },
  "la-coquelicot": {
    img: `${ROOMS_PATH}/coquelicot-chambre-lit-double-coussins-rouges-vue-frontale-atlantis12-essaouira.webp`,
    altKey: "rooms.altCoquelicot",
    altDefault: "Coquelicot, chambre principale - Atlantis 12, Essaouira",
    label: "labelJunior",
  },
  "l-orchis": {
    img: `${ROOMS_PATH}/orchis-chambre-lit-mauve-murs-pierre-arche-atlantis12-essaouira.webp`,
    altKey: "rooms.altOrchis",
    altDefault: "Orchis, chambre avec lit mauve - Atlantis 12, Essaouira",
    label: "labelJunior",
  },
};

const Chevron = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-chevron-right w-4 h-4"
    style={{ color: "rgb(245, 240, 232)" }}
  >
    <path d="m9 18 6-6-6-6" />
  </svg>
);

function RoomCard({
  name,
  label,
  img,
  alt,
  to,
  aspect = "aspect-[4/3]",
  titleSize = "text-2xl md:text-3xl",
}) {
  return (
    <LangLink
      to={to}
      className={`group relative overflow-hidden cursor-pointer block ${aspect}`}
    >
      <img
        src={img}
        alt={alt}
        loading="lazy"
        decoding="async"
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-500" />
      <div className="absolute bottom-5 left-5 right-5">
        <p className={`font-display ${titleSize}`} style={{ color: "rgb(245, 240, 232)" }}>
          {name}
        </p>
        <p
          className="font-body text-xs tracking-wider mt-1"
          style={{ color: "rgba(245, 240, 232, 0.7)" }}
        >
          {label}
        </p>
      </div>
      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="w-8 h-8 flex items-center justify-center border border-foreground/30 bg-background/20 backdrop-blur-sm">
          <Chevron />
        </div>
      </div>
    </LangLink>
  );
}

export default function Rooms() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { roomSlug } = useParams();
  const [searchParams] = useSearchParams();
  const legacySlug = searchParams.get("room");
  const activeRoom = getRoomBySlug(roomSlug || legacySlug);

  useEffect(() => {
    if (!roomSlug && legacySlug && activeRoom) {
      navigate(`/chambres/${activeRoom.slug}`, { replace: true });
    }
  }, [activeRoom, legacySlug, navigate, roomSlug]);

  const closeModal = () => {
    navigate("/chambres", { replace: true });
  };

  const hero = ROOMS.find((r) => r.slug === "la-plumeria");
  const juniors = ROOMS.filter((r) => r.slug !== "la-plumeria");

  if (roomSlug && activeRoom) {
    return <RoomDetailModal room={activeRoom} onClose={closeModal} isPage />;
  }

  return (
    <div className="bg-background min-h-screen text-foreground overflow-x-hidden">
      <div className="relative h-[70vh] overflow-hidden">
        <img
          src={HERO}
          alt={t("roomsPage.heroAlt")}
          width="1600"
          height="900"
          className="w-full h-full object-cover"
          style={{ objectPosition: "center 60%" }}
        />
        <div className="absolute bottom-12 left-[8vw] md:left-[10vw]">
          <Reveal as="p" className="font-body text-xs tracking-[0.4em] uppercase text-white/70 mb-3 font-semibold hero-text-shadow" style={{ fontWeight: 600 }}>
            {t("roomsPage.heroEyebrow")}
          </Reveal>
          <Reveal as="h1" className="font-display text-4xl md:text-7xl text-white hero-text-shadow" delay={1}>
            {t("roomsPage.heroTitle1")}
            <br />
            <span className="text-white">{t("roomsPage.heroTitle2")}</span>
          </Reveal>
        </div>
      </div>

      <div className="px-6 md:px-[60px] pt-4 md:pt-[60px] pb-3 md:pb-10 max-w-[720px] mx-auto text-center">
        <Reveal
          as="p"
          className="font-body text-[15px] leading-[1.8]"
          style={{ color: "#333333" }}
        >
          {t("roomsPage.intro1")}
          <br />
          {t("roomsPage.intro2")}
          <br />
          <br />
          {t("roomsPage.intro3")}
          <br />
          {t("roomsPage.intro4")}
          <br />
          <br />
          {t("roomsPage.intro5")}
        </Reveal>
      </div>

      <section className="px-[8vw] md:px-[10vw] pb-4 md:pb-16 overflow-x-hidden">
        <div className="mb-4 md:mb-6">
          <Reveal>
            <RoomCard
              name={hero.name}
              label={t(`roomsPage.${CARD_IMG[hero.slug].label}`)}
              img={CARD_IMG[hero.slug].img}
              alt={CARD_IMG[hero.slug].altDefault}
              to={`/chambres/${hero.slug}`}
              aspect="aspect-[16/9]"
              titleSize="text-2xl md:text-3xl"
            />
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6">
          {juniors.map((r, i) => (
            <Reveal key={r.slug} delay={(i % 4) + 1}>
              <RoomCard
                name={r.name}
                label={t(`roomsPage.${CARD_IMG[r.slug].label}`)}
                img={CARD_IMG[r.slug].img}
                alt={CARD_IMG[r.slug].altDefault}
                to={`/chambres/${r.slug}`}
              />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="px-[8vw] md:px-[10vw] pb-4 md:pb-16">
        <Reveal>
          <div className="mx-auto max-w-[720px] text-center px-6 py-6 md:py-12" style={{ backgroundColor: "#4A6741" }}>
            <p className="font-body text-xs tracking-[0.4em] uppercase mb-3" style={{ color: "#8FAF7E" }}>
              {t("roomsPage.privatisationEyebrow", "Privatisation")}
            </p>
            <h2 className="font-display text-4xl md:text-5xl mb-4" style={{ color: "#FFFFFF" }}>
              {t("roomsPage.privatisationTitle", "Toute la maison, rien que pour vous !")}
            </h2>
            <p className="font-body text-sm leading-relaxed mb-6" style={{ color: "#FFFFFF" }}>
              {t("roomsPage.privatisation", "Pour les familles et les groupes, nous proposons une formule de privatisation complète.")}
            </p>
            <LangLink
              to="/contact"
              className="inline-block font-body text-xs tracking-[0.3em] uppercase px-6 py-3 border hover:bg-white/10 transition-colors"
              style={{ color: "#8FAF7E", borderColor: "#8FAF7E" }}
            >
              {t("roomsPage.privatisationButton", "Contactez-nous")}
            </LangLink>
            <p className="font-body text-xs mt-4" style={{ color: "#FFFFFF" }}>
              {t("roomsPage.privatisationCta", "pour recevoir un devis personnalisé.")}
            </p>
          </div>
        </Reveal>
      </section>

      {activeRoom && <RoomDetailModal room={activeRoom} onClose={closeModal} />}
    </div>
  );
}
