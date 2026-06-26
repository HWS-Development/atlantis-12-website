import { useTranslation } from "react-i18next";
import LangLink from "../components/Common/LangLink";
import Reveal from "../components/Common/Reveal";

const ABOUT_PATH = "/images/about";
const HERO_IMG = `${ABOUT_PATH}/maison-vue-jardin-atlantis12-essaouira.webp`;
const FOUNDERS_IMG = `${ABOUT_PATH}/IMG_3456.webp`;

const GALLERY_SRCS = [
  `${ABOUT_PATH}/entree.webp`,
  `${ABOUT_PATH}/patio.webp`,
  `${ABOUT_PATH}/patiodenuit.webp`,
  `${ABOUT_PATH}/piscine.webp`,
  `${ABOUT_PATH}/rooftopdenuit.webp`,
  `${ABOUT_PATH}/salon1.webp`,
  `${ABOUT_PATH}/salon2.webp`,
  `${ABOUT_PATH}/chevaletsalon.webp`,
  `${ABOUT_PATH}/coquillage.webp`,
  `${ABOUT_PATH}/petit-dejeuner.webp`,
  `${ABOUT_PATH}/cafe.webp`,
  `${ABOUT_PATH}/thealamenthe.webp`,
];

export default function About() {
  const { t } = useTranslation();
  const genese = t("aboutPg.geneseParas", { returnObjects: true }) || [];
  const essence = t("aboutPg.essenceParas", { returnObjects: true }) || [];
  const galleryLabels = t("aboutPg.gallery", { returnObjects: true }) || [];

  return (
    <div className="bg-background min-h-screen text-foreground overflow-x-hidden">
      <div className="relative h-[70vh] overflow-hidden">
        <img src={HERO_IMG} alt={t("aboutHero.heroAlt")} className="w-full h-full object-cover" />
        <div className="absolute bottom-12 left-[8vw] md:left-[10vw]">
          <Reveal as="p" className="font-body text-xs tracking-[0.4em] uppercase text-white/70 mb-3 font-semibold hero-text-shadow">
            {t("aboutHero.eyebrow")}
          </Reveal>
          <Reveal as="h1" className="font-display text-5xl md:text-7xl text-white hero-text-shadow" delay={1}>
            {t("aboutHero.title1")}
            <br />
            <span className="text-white">{t("aboutHero.title2")}</span>
          </Reveal>
        </div>
      </div>

      <section className="px-[8vw] md:px-[10vw] py-10">
        <div className="grid md:grid-cols-2 gap-12 md:gap-24 items-start">
          <Reveal className="space-y-6">
            <p className="font-body text-xs tracking-[0.4em] uppercase text-primary">{t("aboutPg.geneseEyebrow")}</p>
            <h2 className="font-display text-4xl md:text-5xl text-foreground leading-tight">
              {t("aboutPg.geneseTitle")}
            </h2>
            <div className="w-10 h-px bg-primary/50" />
            {genese.slice(0, 5).map((p, i) => (
              <p key={i} className="font-body text-sm leading-relaxed text-foreground">
                {p}
              </p>
            ))}
          </Reveal>

          <Reveal className="space-y-6" delay={1}>
            <div>
              <img
                src={FOUNDERS_IMG}
                alt={t("aboutPg.foundersAlt")}
                className="w-full aspect-[3/2] object-cover"
                style={{ objectPosition: "center 15%" }}
              />
              <p className="font-body text-xs text-foreground/35 mt-2 text-right">{t("aboutPg.photoCredit")}</p>
            </div>
            <p className="font-body text-sm leading-relaxed text-foreground">{genese[5]}</p>
            <p className="font-display text-xl text-foreground/80">{t("aboutPg.welcome")}</p>
          </Reveal>
        </div>
      </section>

      <section className="px-[8vw] md:px-[10vw] py-10 bg-background">
        <div className="max-w-3xl">
          <Reveal as="p" className="font-body text-xs tracking-[0.4em] uppercase text-primary mb-4">
            {t("aboutPg.essenceEyebrow")}
          </Reveal>
          <Reveal as="h2" className="font-display text-4xl md:text-5xl text-foreground mb-8" delay={1}>
            {t("aboutPg.essenceTitle")}
          </Reveal>
          <div className="w-10 h-px bg-primary/50 mb-10" />
          <Reveal className="space-y-6 font-body text-sm leading-relaxed text-foreground" delay={2}>
            {essence.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="px-[8vw] md:px-[10vw] py-10">
        <Reveal as="p" className="font-body text-xs tracking-[0.4em] uppercase text-primary mb-4">
          {t("aboutPg.galleryEyebrow")}
        </Reveal>
        <Reveal as="h2" className="font-display text-4xl md:text-5xl text-foreground mb-12" delay={1}>
          {t("aboutPg.galleryTitle")}
        </Reveal>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {GALLERY_SRCS.map((src, i) => (
            <Reveal key={src} delay={(i % 3) + 1}>
              <button className="block w-full overflow-hidden group relative aspect-[4/3]">
                <img
                  src={src}
                  alt={galleryLabels[i] || ""}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-secondary/0 group-hover:bg-secondary/30 transition-colors duration-300 flex items-end">
                  <p className="font-body text-xs tracking-widest uppercase text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
                    {galleryLabels[i]}
                  </p>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="px-[8vw] md:px-[10vw] py-10">
        <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-start md:items-center justify-between">
          <Reveal as="h2" className="font-display text-4xl md:text-5xl text-foreground">
            {t("aboutPg.ctaTitle")}
          </Reveal>
          <div className="flex flex-wrap gap-4 shrink-0">
            <LangLink
              className="font-body text-xs tracking-[0.3em] uppercase text-primary border border-primary/40 px-6 py-3 hover:bg-primary/10 transition-colors duration-300"
              to="/chambres"
            >
              {t("aboutPg.ctaRooms")}
            </LangLink>
            <LangLink
              className="font-body text-xs tracking-[0.3em] uppercase text-background bg-primary px-6 py-3 hover:bg-secondary transition-colors duration-300"
              to="/contact"
            >
              {t("aboutPg.ctaContact")}
            </LangLink>
          </div>
        </div>
      </section>
    </div>
  );
}
