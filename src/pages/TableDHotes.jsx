// /table-dhotes — rebuilt 1:1 from reference/table-dhotes/body.pretty.html
import { useTranslation } from "react-i18next";
import Reveal from "../components/Common/Reveal";
import Seo from "../components/Common/Seo";

const TABLE_PATH = "/images/table-dhotes";
const HERO_IMG = `${TABLE_PATH}/table-dhotes-salle-commune-plafond-peint-sculptures-oeuvres-atlantis12-essaouira.jpg`;
const TABLE_IMG = `${TABLE_PATH}/table-dhotes-diner-table-dressee-bougies-oeuvre-salle-atlantis12-essaouira.jpg`;
const ARTICHAUT_IMG = `${TABLE_PATH}/entree-artichaut-poulpe-crevette-table-dhotes-atlantis12-essaouira.jpg`;
const COUSCOUS_IMG = `${TABLE_PATH}/table-dhotes-couscous-crevettes-salle-oeuvre-atlantis12-essaouira.jpg`;
const JAOUHARA_IMG = `${TABLE_PATH}/table-dhotes-dessert-jaouhara-msemen-creme-fruits-secs-atlantis12-essaouira.jpg`;
const BREAKFAST_IMG = `${TABLE_PATH}/table-dhotes-petit-dejeuner-marocain-patio-ete-atlantis12-essaouira.jpg`;

export default function TableDHotes() {
  const { t } = useTranslation();
  return (
    <div className="bg-background min-h-screen text-foreground pb-14">
      <Seo
        title="La Table d'hôtes - Cuisine marocaine du marché | Atlantis 12 Essaouira"
        description="Une seule table, une cuisine du marché, des saveurs marocaines au gré des saisons. La table d'hôtes d'Atlantis 12 : un moment de partage autant qu'un repas. Réservée aux résidents."
      />
      <div className="relative h-[70vh] overflow-hidden">
        <img
          src={HERO_IMG}
          alt={t("tablePg.heroAlt")}
          className="w-full h-full object-cover"
          style={{ objectPosition: "center 60%" }}
        />
        <div className="absolute bottom-12 left-[8vw] md:left-[10vw]">
          <Reveal as="p" className="font-body text-xs tracking-[0.4em] uppercase text-white/70 mb-3 font-semibold">
            {t("tablePg.heroEyebrow")}
          </Reveal>
          <Reveal as="h1" className="font-display text-5xl md:text-7xl text-white" delay={1}>
            {t("tablePg.heroTitle1")}
            <br />
            <span className="text-white">{t("tablePg.heroTitle2")}</span>
          </Reveal>
        </div>
      </div>

      <section className="px-[8vw] md:px-[10vw] py-12 md:py-16 grid md:grid-cols-2 gap-12 md:gap-20">
        <Reveal className="space-y-5">
          <h2 className="font-display text-5xl md:text-6xl text-foreground font-bold">{t("tablePg.s1Title")}</h2>
          <div className="w-10 h-px bg-primary/50" />
          <p className="font-body text-sm leading-relaxed text-foreground/65">{t("tablePg.s1p1")}</p>
          <p className="font-body text-sm leading-relaxed text-foreground/65">{t("tablePg.s1p2")}</p>
          <p className="font-body text-sm leading-relaxed text-foreground/65">{t("tablePg.s1p3")}</p>
        </Reveal>
        <Reveal delay={1}>
          <img src={TABLE_IMG} alt={t("tablePg.s1ImgAlt")} className="w-full h-auto object-cover" />
        </Reveal>
      </section>

      <section className="px-[8vw] md:px-[10vw] py-12 md:py-16 bg-card/40 max-w-[720px] mx-auto text-center">
        <Reveal as="h2" className="font-display text-4xl md:text-5xl text-foreground mb-8 font-bold">
          {t("tablePg.s2Title")}
        </Reveal>
        <Reveal as="p" className="font-body text-sm tracking-[0.3em] uppercase text-foreground/70 mb-8" delay={1}>
          {t("tablePg.s2Courses")}
        </Reveal>
        <Reveal as="p" className="font-body text-sm leading-relaxed text-foreground/65 mb-8" delay={2}>
          {t("tablePg.s2Lead")}
        </Reveal>
        <p className="font-body text-xs text-foreground/40 tracking-wide">{t("tablePg.s2Price")}</p>
        <Reveal className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6" delay={3}>
          <div className="flex flex-col items-center">
            <img src={ARTICHAUT_IMG} alt={t("tablePg.s2ImgAlt")} className="w-full h-auto object-cover" />
            <p className="font-body text-sm italic text-foreground/60 mt-4">{t("tablePg.s2Caption")}</p>
          </div>
          <div className="flex flex-col items-center">
            <img src={COUSCOUS_IMG} alt={t("tablePg.s2Img2Alt")} className="w-full h-auto object-cover" />
            <p className="font-body text-sm italic text-foreground/60 mt-4">{t("tablePg.s2Img2Caption")}</p>
          </div>
        </Reveal>
      </section>

      <section
        className="px-[8vw] md:px-[10vw] py-12 md:py-16 grid md:grid-cols-2 gap-12 md:gap-20"
        style={{ backgroundColor: "rgb(245, 237, 224)" }}
      >
        <Reveal className="flex items-center">
          <img src={JAOUHARA_IMG} alt={t("tablePg.s3ImgAlt")} className="w-full h-full object-cover" />
        </Reveal>
        <Reveal className="space-y-5" delay={1}>
          <h2 className="font-display text-4xl md:text-5xl text-foreground">{t("tablePg.s3Title")}</h2>
          <div className="w-10 h-px bg-primary/50" />
          <p className="font-body text-sm leading-relaxed text-foreground/65">{t("tablePg.s3p1")}</p>
          <p className="font-body text-sm leading-relaxed text-foreground/65">{t("tablePg.s3p2")}</p>
          <p className="font-body text-sm leading-relaxed text-foreground/65">{t("tablePg.s3p3")}</p>
        </Reveal>
      </section>

      <section className="px-[8vw] md:px-[10vw] py-12 md:py-16 grid md:grid-cols-2 gap-12 md:gap-20">
        <Reveal className="flex items-center">
          <img src={BREAKFAST_IMG} alt={t("tablePg.s4ImgAlt")} className="w-full h-full object-cover" />
        </Reveal>
        <Reveal className="space-y-5" delay={1}>
          <p className="font-body text-xs tracking-[0.4em] uppercase text-primary">{t("tablePg.s4Eyebrow")}</p>
          <h2 className="font-display text-4xl md:text-5xl text-foreground">{t("tablePg.s4Title")}</h2>
          <div className="w-10 h-px bg-primary/40" />
          <p className="font-body text-sm leading-relaxed text-foreground/65">{t("tablePg.s4p1")}</p>
          <p className="font-body text-xs text-foreground/40 tracking-wide">{t("tablePg.s4p2")}</p>
        </Reveal>
      </section>
    </div>
  );
}
