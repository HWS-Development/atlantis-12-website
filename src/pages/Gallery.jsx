// /maison-dart — rebuilt 1:1 from reference/maison-dart/body.pretty.html
import { useTranslation } from "react-i18next";
import LangLink from "../components/Common/LangLink";
import Reveal from "../components/Common/Reveal";

const CDN = "/images/cdn";
const HERO_IMG = `${CDN}/6b60dadec__DSC8940-HDR-Panorama-Avecaccentuation-Bruit.jpg`;
const ATELIER_IMG = `${CDN}/bc6d94155__DSC8624.jpg`;

const WORKS_META = [
  { img: `${CDN}/459ce29b2_oeuvre-lahcen-fikri-1-peinture-atlantis12-essaouira.jpg`, badge: "available", meta: "canvas" },
  { img: `${CDN}/3f5df31af_oeuvre-russe-peinture-atelier-atlantis12-essaouira.jpg`, badge: "permanent", meta: "permanent" },
  { img: `${CDN}/128c70088_oeuvre-christina-peinture-atelier-atlantis12-essaouira.jpg`, badge: "permanent", meta: "permanent" },
  { img: `${CDN}/fa660b154_oeuvre-lahcen-fikri-3-peinture-atlantis12-essaouira.jpeg`, badge: "available", meta: "canvas" },
  { img: `${CDN}/bf151edb1_oeuvre-lahcen-fikri-4-peinture-atlantis12-essaouira.jpeg`, badge: "available", meta: "canvas" },
  { img: `${CDN}/0351c82b2__DSC8640.jpg`, badge: "permanent", meta: "metal" },
];

export default function Gallery() {
  const { t } = useTranslation();
  const works = t("galleryPg.works", { returnObjects: true }) || [];
  const badge = (k) => k === "available" ? t("galleryPg.badgeAvailable") : t("galleryPg.badgePermanent");
  const meta = (k) => k === "canvas" ? t("galleryPg.metaCanvas") : k === "metal" ? t("galleryPg.metaMetal") : t("galleryPg.metaPermanent");

  return (
    <div className="min-h-screen pb-0 font-body bg-white" style={{ color: "rgb(61, 92, 48)" }}>
      <div className="relative h-[70vh] overflow-hidden">
        <img src={HERO_IMG} alt={t("galleryPg.heroAlt")} className="w-full h-full object-cover" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(rgba(255, 255, 255, 0.125), transparent 30%, rgba(255, 255, 255, 0.565))",
          }}
        />
        <div className="absolute bottom-12 left-[8vw] md:left-[10vw]">
          <Reveal as="p" className="font-body text-xs tracking-[0.4em] uppercase text-white/70 mb-3">
            {t("galleryPg.heroEyebrow")}
          </Reveal>
          <Reveal as="h1" className="font-display text-5xl md:text-7xl leading-tight text-white" delay={1}>
            {t("galleryPg.heroTitle1")}
            <br />
            <span className="text-white">{t("galleryPg.heroTitle2")}</span>
          </Reveal>
        </div>
      </div>

      <section className="px-[8vw] md:px-[10vw] py-20 md:py-28 grid md:grid-cols-2 gap-12 md:gap-20 items-start">
        <Reveal className="space-y-5">
          <h2 className="font-display text-4xl md:text-5xl leading-tight text-foreground">
            {t("galleryPg.s1Title")}
          </h2>
          <div className="w-10 h-px bg-primary/50" />
          <p className="font-body text-sm leading-relaxed text-foreground/65">{t("galleryPg.s1p1")}</p>
          <p className="font-body text-sm leading-relaxed text-foreground/65">{t("galleryPg.s1p2")}</p>
        </Reveal>
        <Reveal delay={1}>
          <img src={ATELIER_IMG} alt={t("galleryPg.s1ImgAlt")} className="w-full h-auto object-cover" />
        </Reveal>
      </section>

      <section className="px-[8vw] md:px-[10vw] pb-16 md:pb-24" style={{ backgroundColor: "rgb(249, 249, 249)" }}>
        <div className="pt-16 md:pt-20 mb-12 md:mb-16">
          <Reveal as="p" className="font-body text-xs tracking-[0.4em] uppercase mb-3 text-primary">
            {t("galleryPg.collectionEyebrow")}
          </Reveal>
          <Reveal as="h2" className="font-display text-4xl md:text-5xl text-foreground" delay={1}>
            {t("galleryPg.collectionTitle")}
          </Reveal>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {works.map((w, i) => {
            const m = WORKS_META[i] || {};
            return (
              <Reveal key={i} className="group cursor-pointer border border-border" delay={(i % 3) + 1}>
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img
                    src={m.img}
                    alt={w.artist}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-3 right-3 px-2 py-1 font-body text-xs bg-primary text-primary-foreground">
                    {badge(m.badge)}
                  </div>
                </div>
                <div className="p-5 space-y-2">
                  <p className="font-display text-2xl text-foreground">{w.artist}</p>
                  {w.sub && (
                    <p className="font-body text-xs tracking-[0.2em] uppercase text-primary">{w.sub}</p>
                  )}
                  <p className="font-body text-xs text-foreground/60">{meta(m.meta)}</p>
                  <p className="font-body text-xs tracking-wide text-foreground/50">{w.where}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="px-[8vw] md:px-[10vw] py-20 md:py-28 text-center bg-white">
        <Reveal as="h2" className="font-display text-4xl md:text-6xl mb-6 text-foreground">
          {t("galleryPg.residencyTitle")}
        </Reveal>
        <Reveal as="p" className="font-body text-sm leading-relaxed max-w-xl mx-auto mb-10 text-foreground/70" delay={1}>
          {t("galleryPg.residencyText")}
        </Reveal>
        <LangLink
          className="font-body text-xs tracking-[0.3em] uppercase px-8 py-3 inline-block bg-primary text-primary-foreground hover:bg-secondary transition-colors duration-300"
          to="/contact"
        >
          {t("galleryPg.residencyCta")}
        </LangLink>
      </section>
    </div>
  );
}
