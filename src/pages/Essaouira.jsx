// /essaouira — rebuilt 1:1 from reference/essaouira/body.pretty.html
import { useTranslation } from "react-i18next";
import Reveal from "../components/Common/Reveal";

const ESS_PATH = "/images/essaouira";
const HERO = `${ESS_PATH}/asmae-lahcen-dar-lawama-coucher-soleil-essaouira.jpg`;

const GRID_IMAGES = [
  { src: `${ESS_PATH}/1remparts-essaouira-skala-du-port.jpg`, alt: "Remparts d'Essaouira et Skala du Port" },
  { src: `${ESS_PATH}/2port-essaouira-barques-bleues-mouette.jpg`, alt: "Port d'Essaouira" },
  { src: `${ESS_PATH}/3port-essaouira-bateaux-bleus.jpg`, alt: "Bateaux bleus" },
  { src: `${ESS_PATH}/4coucher-soleil-plage-essaouira-atlantique.jpg`, alt: "Coucher de soleil" },
  { src: `${ESS_PATH}/5coucher-soleil-essaouira-palmier.jpg`, alt: "Palmier" },
  { src: `${ESS_PATH}/6marche-medina-essaouira-homme-djellaba.jpg`, alt: "Marché Médina" },
  { src: `${ESS_PATH}/7velo-chat-medina-essaouira-bleu.jpg`, alt: "Vélo bleu" },
  { src: `${ESS_PATH}/8porte-ancienne-medina-essaouira.jpg`, alt: "Porte ancienne" },
  { src: `${ESS_PATH}/9luminaires-cuir-artisanat-essaouira.jpg`, alt: "Luminaires en cuir" },
  { src: `${ESS_PATH}/10musicienne-gnaoua-essaouirappg.jpg`, alt: "Musicienne Gnaoua" },
  { src: `${ESS_PATH}/11epices-marche-essaouira.jpg`, alt: "Épices" },
  { src: `${ESS_PATH}/12bijoux-berberes-ambre-essaouira.jpg`, alt: "Bijoux berbères" },
];

const PIN = (
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
    className="w-3.5 h-3.5 mt-0.5 flex-shrink-0"
    style={{ color: "rgb(74, 103, 65)" }}
  >
    <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const EXTERNAL = (
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
    className="w-3 h-3 opacity-50"
  >
    <path d="M15 3h6v6" />
    <path d="M10 14 21 3" />
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
  </svg>
);

function PlaceList({ heading, sub, items }) {
  return (
    <Reveal>
      <div className="mb-5">
        <h3 className="font-body text-xs tracking-[0.4em] uppercase mb-1" style={{ color: "rgb(74, 103, 65)" }}>
          {heading}
        </h3>
        {sub && <p className="font-body text-xs italic text-foreground/40">{sub}</p>}
        <div className="w-8 h-px mt-3" style={{ backgroundColor: "rgb(74, 103, 65)", opacity: 0.4 }} />
      </div>
      <ul className="space-y-4">
        {items.map((it) => (
          <li key={it.name} className="flex items-start gap-3">
            {PIN}
            <div>
              <a
                href={it.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-sm font-medium text-foreground hover:text-primary transition-colors inline-flex items-center gap-1.5"
              >
                {it.name}
                {EXTERNAL}
              </a>
              {it.note && (
                <p className="font-body text-xs text-foreground/55 mt-0.5 leading-relaxed">{it.note}</p>
              )}
            </div>
          </li>
        ))}
      </ul>
    </Reveal>
  );
}

const linkClass = "underline underline-offset-2 hover:text-foreground transition-colors";
const linkStyle = { color: "rgb(74, 103, 65)" };

const MAP_LINKS = {
  darSouiri: "https://www.google.com/maps/search/?api=1&query=Dar+Souiri+Essaouira&query_place_id=ChIJl1zwjcybrQ0RAejZuONdJVs",
  baytDakira: "https://www.google.com/maps/search/?api=1&query=Bayt+Dakira+Essaouira&query_place_id=ChIJHYQK2iabrQ0RP08ndoU_ENM",
  musee: "https://www.google.com/maps/search/?api=1&query=Musée+Sidi+Mohammed+Ben+Abdellah+Essaouira&query_place_id=ChIJfW_MXPubrQ0Rqr294Iy0ob0",
  skala: "https://www.google.com/maps/search/?api=1&query=Skala+de+la+Kasbah+Essaouira&query_place_id=ChIJu1Lmks2brQ0RC_puWXYJkzw",
  placeMoulay: "https://www.google.com/maps/search/?api=1&query=Place+Moulay+El+Hassan+Essaouira&query_place_id=ChIJy_gna8ybrQ0RqGNV8RKJSIs",
  oceanVagabond: "https://maps.app.goo.gl/cjLXeUfFPAweVzS59",
};

export default function Essaouira() {
  const { t } = useTranslation();
  const notes = t("essaouiraPg.notes", { returnObjects: true }) || {};

  const LUNCH = [
    { name: "Dar Lawama", url: "https://maps.app.goo.gl/xdEAKgpNRcKEXvuz6", note: notes.darLawama },
    { name: "Océan Vagabond", url: MAP_LINKS.oceanVagabond, note: notes.oceanVagabond },
    { name: "Le Chalet de la Plage", url: "https://maps.app.goo.gl/1nQNDFFagnUj74An9", note: notes.chaletPlage },
    { name: "Cheb Zak", url: "https://maps.app.goo.gl/Y1bBm2ZbmuhDE7LFA", note: notes.chebZak },
  ];
  const DINNER = [
    { name: "La Table by Ma Dada", url: "https://maps.app.goo.gl/nwjvvwDJJf15dGgh7", note: notes.tableMaDada },
    { name: "Le Love by Caravane", url: "https://maps.app.goo.gl/FxYC1wrhfdAjTv8j7", note: notes.loveCaravane },
    { name: "Dar Baba", url: "https://maps.app.goo.gl/8o4pdy9Yb6ArjNjd6", note: notes.darBaba },
  ];
  const NIGHTS = [
    { name: "Le Beytt", url: "https://maps.app.goo.gl/t9CkgbtWr2XMTqNJ9" },
    { name: "Le Taros", url: "https://maps.app.goo.gl/RACfRAvwzdP1BP3V9" },
    { name: "Le Mega Loft", url: "https://maps.app.goo.gl/UsPqj9Lij3Kzj4UW8" },
    { name: "L'Alma", url: "https://maps.app.goo.gl/P4cwGaB6t6JUgFbP9" },
    { name: "Beach & Friends", url: "https://maps.app.goo.gl/8xPXiGgbXMJpuJBj9" },
    { name: "Le Ksou", url: "https://maps.app.goo.gl/asUTxkbGWkQxakkGA" },
  ];
  const ARGAN = [{ name: "Lalla Izza", url: "https://maps.app.goo.gl/7ZFw6dZwB3RGiQh56", note: notes.lallaIzza }];
  const COOPS = [
    { name: "Village Solaire", url: "https://maps.app.goo.gl/UJ3e3QBC65qPSPEx8" },
    { name: "Hafida and Family", url: "https://maps.app.goo.gl/TPSxDpsTZSzW1as1A" },
  ];

  return (
    <div className="bg-background min-h-screen text-foreground">
      <div className="relative h-[70vh] overflow-hidden">
        <img
          src={HERO}
          alt={t("essaouiraPg.heroAlt")}
          className="w-full h-full object-cover"
          style={{ objectPosition: "center 35%" }}
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.5) 100%)" }}
        />
        <div className="absolute bottom-12 left-[8vw] md:left-[10vw]">
          <Reveal as="p" className="font-body text-xs tracking-[0.4em] uppercase text-white/70 mb-3 font-semibold hero-text-shadow">
            {t("essaouiraPg.heroEyebrow")}
          </Reveal>
          <Reveal as="h1" className="font-display text-5xl md:text-7xl text-white hero-text-shadow" delay={1}>
            {t("essaouiraPg.heroTitle1")}
            <br />
            {t("essaouiraPg.heroTitle2")}
          </Reveal>
          <Reveal as="p" className="font-body text-xs tracking-[0.3em] uppercase text-white/80 mt-3 font-semibold hero-text-shadow" delay={2}>
            {t("essaouiraPg.heroSubline", "ADRESSES, LIEUX & BONS PLANS | ATLANTIS 12")}
          </Reveal>
        </div>
      </div>

      <section className="px-[8vw] md:px-[18vw] pt-20 md:pt-28 pb-10 text-center bg-background">
        <Reveal as="h2" className="font-display text-4xl md:text-5xl text-foreground mb-8">
          {t("essaouiraPg.chosenTitle")}
        </Reveal>
        <Reveal className="space-y-5 text-left md:text-center max-w-3xl mx-auto" delay={1}>
          <p className="font-body text-sm leading-relaxed text-foreground/65">{t("essaouiraPg.chosenP1")}</p>
          <p className="font-body text-sm leading-relaxed text-foreground/65">{t("essaouiraPg.chosenP2")}</p>
          <p className="font-body text-sm leading-relaxed text-foreground/65">
            <span className="italic">{t("essaouiraPg.chosenP3")}</span>
          </p>
        </Reveal>
      </section>

      <section className="px-[8vw] md:px-[18vw] pb-20 md:pb-28 text-center bg-background">
        <Reveal as="h2" className="font-display text-4xl md:text-5xl text-foreground mb-8">
          {t("essaouiraPg.seeTitle")}
        </Reveal>
        <Reveal className="space-y-5 text-left md:text-center max-w-3xl mx-auto" delay={1}>
          <p className="font-body text-sm leading-relaxed text-foreground/65">
            {t("essaouiraPg.seeP1a")}
            <a href="https://www.google.com/maps/search/Bab+Sbaa+Essaouira" target="_blank" rel="noopener noreferrer" className={linkClass} style={linkStyle}>
              {t("essaouiraPg.linkBabSbaa")}
            </a>
            {t("essaouiraPg.seeP1b")}
              <a href={MAP_LINKS.darSouiri} target="_blank" rel="noopener noreferrer" className={linkClass} style={linkStyle}>
                {t("essaouiraPg.linkDarSouiri")}
              </a>
            {t("essaouiraPg.seeP1c")}
          </p>
          <p className="font-body text-sm leading-relaxed text-foreground/65">
            {t("essaouiraPg.seeP2a")}
            <a href={MAP_LINKS.baytDakira} target="_blank" rel="noopener noreferrer" className={linkClass} style={linkStyle}>
              {t("essaouiraPg.linkBaytDakira")}
            </a>
            {t("essaouiraPg.seeP2b")}
              <a href={MAP_LINKS.musee} target="_blank" rel="noopener noreferrer" className={linkClass} style={linkStyle}>
                {t("essaouiraPg.linkMusee")}
              </a>
            {t("essaouiraPg.seeP2c")}
          </p>
          <p className="font-body text-sm leading-relaxed text-foreground/65">
            {t("essaouiraPg.seeP3a")}
              <a href={MAP_LINKS.skala} target="_blank" rel="noopener noreferrer" className={linkClass} style={linkStyle}>
                {t("essaouiraPg.linkSkala")}
              </a>
            {t("essaouiraPg.seeP3b")}
              <a href={MAP_LINKS.placeMoulay} target="_blank" rel="noopener noreferrer" className={linkClass} style={linkStyle}>
                {t("essaouiraPg.linkPlaceMoulay")}
              </a>
            {t("essaouiraPg.seeP3c")}
              <a href="https://www.google.com/maps/search/Zaouia+Sidna+Blal+Essaouira" target="_blank" rel="noopener noreferrer" className={linkClass} style={linkStyle}>
                {t("essaouiraPg.linkZaouia")}
              </a>
            {t("essaouiraPg.seeP3d")}
          </p>
          <p className="font-body text-sm leading-relaxed text-foreground/65">{t("essaouiraPg.seeP4")}</p>
        </Reveal>
      </section>

      <section className="bg-white py-12 md:py-16 px-[4vw] md:px-[6vw]">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3">
          {GRID_IMAGES.map((g, i) => (
            <Reveal key={i} className="cursor-pointer overflow-hidden group aspect-square" delay={(i % 4) + 1}>
              <img
                src={g.src}
                alt={g.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </Reveal>
          ))}
        </div>
      </section>

      <section
        className="px-[8vw] md:px-[10vw] py-16 md:py-24"
        style={{ backgroundColor: "rgb(245, 240, 232)" }}
      >
        <div className="max-w-3xl mx-auto space-y-16">
          <PlaceList heading={t("essaouiraPg.bookLunch")} items={LUNCH} />
          <PlaceList heading={t("essaouiraPg.bookDinner")} items={DINNER} />
          <PlaceList
            heading={t("essaouiraPg.bookNights")}
            sub={t("essaouiraPg.bookNightsSub")}
            items={NIGHTS}
          />
          <PlaceList heading={t("essaouiraPg.bookArgan")} items={ARGAN} />
          <PlaceList
            heading={t("essaouiraPg.bookCoops")}
            sub={t("essaouiraPg.bookCoopsSub")}
            items={COOPS}
          />
        </div>
      </section>

      <section className="px-[8vw] md:px-[18vw] py-20 md:py-24 text-center bg-background">
        <Reveal as="p" className="font-body text-sm leading-relaxed text-foreground/65 max-w-xl mx-auto mb-6">
          {t("essaouiraPg.ctaText")}
        </Reveal>
        <Reveal delay={1}>
          <a
            href="mailto:contact@atlantis12essaouira.com"
            className="font-body text-xs tracking-[0.3em] uppercase text-primary border border-primary/40 px-6 py-2.5 inline-block max-w-full break-all text-center hover:bg-primary/10 transition-colors duration-300"
          >
            contact@atlantis12essaouira.com
          </a>
        </Reveal>
      </section>
    </div>
  );
}
