import { useState } from "react";
import { useTranslation } from "react-i18next";
import LangLink from "../components/Common/LangLink";
import Reveal from "../components/Common/Reveal";

const GALLERY_PATH = "/images/gallery";
const HERO_IMG = `${GALLERY_PATH}/galerie-salon-vue-densemble-oeuvres-atlantis12-essaouira.webp`;
const ATELIER_IMG = `${GALLERY_PATH}/objet-dart-sphere-verre-platine-vinyle-atlantis12-essaouira.webp`;

const WORKS_META = [
  { img: `${GALLERY_PATH}/oeuvre-lahcen-fikri-visages-ocre-atlantis12-essaouira.webp`, badge: "available", meta: "canvas", size: "70 x 120 cm" },
  { img: `${GALLERY_PATH}/oeuvre-artiste-russe-nature-morte-fleurs-rouges-verre-atlantis12-essaouira.webp`, badge: "permanent", meta: "permanent" },
  { img: `${GALLERY_PATH}/oeuvre-christina-nature-morte-vases-plantes-atlantis12-essaouira.webp`, badge: "permanent", meta: "permanent" },
  { img: `${GALLERY_PATH}/oeuvre-lahcen-fikri-personnages-allonges-atlantis12-essaouira.webp`, badge: "available", meta: "canvas", size: "100 x 70 cm" },
  { img: `${GALLERY_PATH}/oeuvre-lahcen-fikri-personnages-rouges-atlantis12-essaouira.webp`, badge: "available", meta: "canvas", size: "70 x 120 cm" },
  { img: `${GALLERY_PATH}/sculpture-musicien-metal-cercle-suspendu-atlantis12-essaouira.webp`, badge: "permanent", meta: "metal" },
];

export default function Gallery() {
  const { t } = useTranslation();
  const works = t("galleryPg.works", { returnObjects: true }) || [];
  const [selected, setSelected] = useState(null); // index of opened artwork
  const badge = (k) => k === "available" ? t("galleryPg.badgeAvailable") : t("galleryPg.badgePermanent");
  const meta = (k, size) => {
    if (k === "canvas") {
      const baseText = t("galleryPg.metaCanvas");
      if (size) return baseText.replace(/\d+ x \d+ cm/, size);
      return baseText;
    }
    return k === "metal" ? t("galleryPg.metaMetal") : t("galleryPg.metaPermanent");
  };

  return (
    <div className="min-h-screen pb-0 font-body bg-white" style={{ color: "rgb(61, 92, 48)" }}>
      <div className="relative h-[70vh] overflow-hidden">
        <img src={HERO_IMG} alt={t("galleryPg.heroAlt")} className="w-full h-full object-cover object-[center_15%]" />
        <div className="absolute bottom-12 left-[8vw] md:left-[10vw]">
          <Reveal as="p" className="font-body text-xs tracking-[0.4em] uppercase text-white/70 mb-3 font-semibold hero-text-shadow">
            {t("galleryPg.heroEyebrow")}
          </Reveal>
          <Reveal as="h1" className="font-display text-5xl md:text-7xl leading-tight text-white hero-text-shadow" delay={1}>
            {t("galleryPg.heroTitle1")}
            <br />
            <span className="text-white">{t("galleryPg.heroTitle2")}</span>
          </Reveal>
          <Reveal as="p" className="font-body text-xs tracking-[0.3em] uppercase text-white/80 mt-3 font-semibold hero-text-shadow" delay={2}>
            {t("galleryPg.heroSubline", "GALERIE, RÉSIDENCE ARTISTIQUE & ŒUVRES | ATLANTIS 12 ESSAOUIRA")}
          </Reveal>
        </div>
      </div>

      <section className="px-[8vw] md:px-[10vw] py-4 md:py-28 grid md:grid-cols-2 gap-6 md:gap-20 items-start">
        <Reveal className="space-y-5">
          <h2 className="font-display text-4xl md:text-5xl leading-tight text-foreground">
            {t("galleryPg.s1Title")}
          </h2>
          <div className="w-10 h-px bg-primary/50" />
          <p className="font-body text-sm leading-relaxed text-foreground">{t("galleryPg.s1p1")}</p>
          <p className="font-body text-sm leading-relaxed text-foreground">{t("galleryPg.s1p2")}</p>
        </Reveal>
        <Reveal delay={1} className="overflow-hidden flex items-end">
          <img src={ATELIER_IMG} alt={t("galleryPg.s1ImgAlt")} className="w-full h-auto object-contain" />
        </Reveal>
      </section>

      <section className="px-[8vw] md:px-[10vw] pb-4 md:pb-24" style={{ backgroundColor: "rgb(249, 249, 249)" }}>
        <div className="pt-6 md:pt-20 mb-4 md:mb-16">
          <Reveal as="p" className="font-body text-xs tracking-[0.4em] uppercase mb-3 text-primary">
            {t("galleryPg.collectionEyebrow")}
          </Reveal>
          <Reveal as="h2" className="font-display text-4xl md:text-5xl text-foreground" delay={1}>
            {t("galleryPg.collectionTitle")}
          </Reveal>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          {works.map((w, i) => {
            const m = WORKS_META[i] || {};
            return (
              <Reveal
                key={i}
                className="group cursor-pointer border border-border"
                delay={(i % 3) + 1}
                onClick={() => setSelected(i)}
              >
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img
                    src={m.img}
                    alt={w.artist}
                    className={`w-full h-full bg-white transition-transform duration-700 group-hover:scale-105 ${
                      i === 3
                        ? "object-cover object-top"
                        : i === 5
                        ? "object-cover object-center"
                        : "object-contain"
                    }`}
                  />
                  <div className="absolute top-3 right-3 px-2 py-1 font-body text-xs tracking-wide bg-primary text-white">
                    {badge(m.badge)}
                  </div>
                </div>
                <div className="p-5 space-y-2">
                  <p className="font-display text-2xl text-foreground">{w.artist}</p>
                  {w.sub && (
                    <p className="font-body text-xs tracking-[0.2em] uppercase text-primary">{w.sub}</p>
                  )}
                  <p className="font-body text-xs text-foreground/60">{meta(m.meta, m.size)}</p>
                  <p className="font-body text-xs tracking-wide text-foreground/50">{w.where}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="px-[8vw] md:px-[10vw] py-6 md:py-28 text-center bg-white">
        <Reveal as="h2" className="font-display text-4xl md:text-6xl mb-4 text-foreground">
          {t("galleryPg.residencyTitle")}
        </Reveal>
        <Reveal as="p" className="font-body text-sm leading-relaxed max-w-xl mx-auto mb-6 md:mb-10 text-foreground" delay={1}>
          {t("galleryPg.residencyText")}
        </Reveal>
        <LangLink
          className="font-body text-xs tracking-[0.3em] uppercase px-8 py-3 inline-block hover:opacity-90 transition-colors duration-300"
          style={{ backgroundColor: "#4A6741", color: "#FFFFFF" }}
          to="/contact"
        >
          {t("galleryPg.residencyCta")}
        </LangLink>
      </section>

      {/* Artwork Lightbox Modal */}
      {selected !== null && (() => {
        const w = works[selected] || {};
        const m = WORKS_META[selected] || {};
        return (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={() => setSelected(null)}
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/60" />
            {/* Modal */}
            <div
              className="relative bg-white max-w-5xl w-full max-h-[90vh] overflow-y-auto flex flex-col md:flex-row shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                type="button"
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 z-10 text-foreground/50 hover:text-foreground transition-colors"
                aria-label={t("galleryPg.closeModal", "Fermer")}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
              </button>
              {/* Image */}
              <div className="md:w-1/2 bg-white flex items-center justify-center p-6 md:p-10">
                <img
                  src={m.img}
                  alt={w.artist}
                  className="w-full h-auto max-h-[70vh] object-contain"
                />
              </div>
              {/* Info */}
              <div className="md:w-1/2 p-8 md:p-10 flex flex-col justify-center space-y-5">
                <div className="inline-block px-3 py-1 font-body text-xs tracking-wide bg-primary text-white w-fit">
                  {badge(m.badge)}
                </div>
                <h3 className="font-display text-3xl md:text-4xl text-foreground">{w.artist}</h3>
                {w.sub && (
                  <p className="font-body text-sm tracking-[0.2em] uppercase text-primary">{w.sub}</p>
                )}
                <p className="font-body text-sm text-foreground/60">{meta(m.meta, m.size)}</p>
                {w.where && (
                  <p className="font-body text-sm text-foreground/50">{w.where}</p>
                )}
                {m.badge === "available" && (
                  <LangLink
                    to="/contact"
                    className="mt-4 inline-block font-body text-xs tracking-[0.25em] uppercase px-6 py-3 text-white hover:opacity-90 transition-colors w-fit"
                    style={{ backgroundColor: "#4A6741" }}
                  >
                    {t("galleryPg.inquiryCta", "ENQUIRE & ACQUIRE")}
                  </LangLink>
                )}
              </div>
            </div>
          </div>
        );
      })()}
    </div>
  );
}
