import { useTranslation } from "react-i18next";
import Reveal from "../components/Common/Reveal";
import LangLink from "../components/Common/LangLink";

const EXP_PATH = "/images/experiences";
const HERO = `${EXP_PATH}/balade-cheval-coucher-soleil-plage-essaouira.jpg`;

const HOUSE_META = [
  {
    img: `${EXP_PATH}/massage-bien-etre-arganiers-atlantis12-essaouira.jpg`,
    bg: "white",
    titleColor: "rgb(44, 62, 37)",
    bodyColor: "#333333",
    accent: "rgb(74, 103, 65)",
  },
  {
    img: `${EXP_PATH}/atelier-peinture-lahcen-fikri-atlantis12-essaouira.jpg`,
    bg: "white",
    titleColor: "rgb(44, 62, 37)",
    bodyColor: "#333333",
    accent: "rgb(74, 103, 65)",
    reverse: true,
  },
  {
    img: `${EXP_PATH}/balade-dromadaire-depart-atlantis12-essaouira.jpg`,
    bg: "rgb(44, 62, 37)",
    titleColor: "rgb(245, 240, 232)",
    bodyColor: "rgb(143, 175, 126)",
    accent: "rgb(143, 175, 126)",
  },
  {
    img: `${EXP_PATH}/yoga-terrasse-atlantis12-essaouira-foretjpg.jpg`,
    bg: "white",
    titleColor: "rgb(44, 62, 37)",
    bodyColor: "#333333",
    accent: "rgb(74, 103, 65)",
    reverse: true,
  },
];

const PARTNER_IMGS = [
  `${EXP_PATH}/balade-cheval-plage-coucher-soleil-essaouira.jpg`,
  `${EXP_PATH}/kitesurf-coucher-soleil-atlantique-essaouirajpg.jpg`,
  `${EXP_PATH}/quad-dunes-plage-sauvage-essaouira.jpg`,
  `${EXP_PATH}/hammam-traditionnel-soins-essaouira.jpg`,
  `${EXP_PATH}/excursions-moto-electrique-arganiers-essaouira-v1.jpg`,
];

export default function Activites() {
  const { t } = useTranslation();
  const house = t("activitesPg.house", { returnObjects: true }) || [];
  const partners = t("activitesPg.partners", { returnObjects: true }) || [];
  const partnersCta = t("activitesPg.partnersCta");

  return (
    <div className="bg-white min-h-screen text-foreground">
      <div className="relative h-[70vh] overflow-hidden">
        <img
          src={HERO}
          alt={t("activitesPg.heroAlt")}
          className="w-full h-full object-cover"
          style={{ objectPosition: "center 40%" }}
        />
        <div className="absolute inset-0" style={{ background: "rgba(0, 0, 0, 0.35)" }} />
        <div className="absolute bottom-0 left-0 right-0 p-[60px]">
          <Reveal
            as="p"
            className="font-body text-[10px] tracking-[0.4em] uppercase mb-3 font-semibold hero-text-shadow"
            style={{ color: "rgba(255, 255, 255, 0.75)" }}
          >
            {t("activitesPg.heroEyebrow")}
          </Reveal>
          <Reveal as="h1" className="font-display text-5xl md:text-7xl text-white mt-2 hero-text-shadow" delay={1}>
            {t("activitesPg.heroTitle")}
          </Reveal>
          <Reveal as="p" className="font-body text-xs tracking-[0.3em] uppercase text-white/80 mt-3 font-semibold hero-text-shadow" delay={2}>
            {t("activitesPg.heroSubline", "À ATLANTIS 12 OU À ESSAOUIRA - MASSAGE, YOGA, ART & NATURE")}
          </Reveal>
        </div>
      </div>

      <section className="bg-white">
        <div className="px-[60px] pt-[32px] pb-[4px] max-w-[680px] mx-auto text-center">
          <Reveal as="p" className="font-body text-[15px] leading-[1.8]" style={{ color: "#333333" }}>
            {t("activitesPg.intro")}
          </Reveal>
        </div>

        <div className="px-[60px] pt-[4px] pb-[16px]">
          <Reveal
            as="p"
            className="font-body text-[10px] tracking-[4px] uppercase"
            style={{ color: "rgb(74, 103, 65)" }}
          >
            {t("activitesPg.houseEyebrow")}
          </Reveal>
          <Reveal as="h2" className="font-display text-4xl md:text-5xl text-foreground mt-2" delay={1}>
            {t("activitesPg.houseTitle")}
          </Reveal>
        </div>

        {house.map((row, i) => {
          const meta = HOUSE_META[i] || {};
          return (
            <Reveal
              key={i}
              className={`flex flex-col md:flex-row gap-[60px] px-[60px] py-[80px] ${meta.reverse ? "md:flex-row-reverse" : ""}`}
              style={{ backgroundColor: meta.bg }}
            >
              <div className="w-full md:w-[46%] flex-shrink-0">
                <img src={meta.img} alt={row.title} className="w-full h-[360px] object-cover" />
              </div>
              <div className="flex-1 flex flex-col justify-center">
                <p className="font-body text-[10px] tracking-[4px] uppercase" style={{ color: meta.accent }}>
                  {row.eyebrow}
                </p>
                <div className="w-[40px] h-px my-3" style={{ backgroundColor: meta.accent, opacity: 0.45 }} />
                <h3 className="font-display text-4xl md:text-5xl mb-4" style={{ color: meta.titleColor }}>
                  {row.title}
                </h3>
                <p className="font-body text-[15px] leading-[1.8]" style={{ color: meta.bodyColor }}>
                  {row.todo}
                </p>
                {row.cta && (
                  <p
                    className="font-body text-[9px] tracking-[4px] uppercase mt-4 border-b pb-1"
                    style={{ color: meta.accent, display: "inline-block", borderColor: meta.accent }}
                  >
                    {row.cta}
                  </p>
                )}
              </div>
            </Reveal>
          );
        })}
      </section>

      <section className="bg-white py-20 pb-8 md:pb-20">
        <div className="px-[60px] mb-12 text-center">
          <Reveal
            as="p"
            className="font-body text-[10px] tracking-[4px] uppercase"
            style={{ color: "rgb(74, 103, 65)" }}
          >
            {t("activitesPg.partnersEyebrow")}
          </Reveal>
          <Reveal as="h2" className="font-display text-4xl md:text-5xl text-foreground mt-2" delay={1}>
            {t("activitesPg.partnersTitle")}
          </Reveal>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px" style={{ backgroundColor: "rgba(74, 103, 65, 0.12)" }}>
          {partners.map((p, i) => (
            <Reveal key={i} className="bg-white p-[36px]" delay={(i % 3) + 1}>
              <img
                src={PARTNER_IMGS[i]}
                alt={p.title}
                className="w-full h-[280px] object-cover rounded-sm mb-[24px]"
              />
              <p className="font-body text-[10px] tracking-[3px] uppercase" style={{ color: "rgb(74, 103, 65)" }}>
                {p.eyebrow}
              </p>
              <div className="w-[30px] h-px my-3" style={{ backgroundColor: "rgb(74, 103, 65)" }} />
                <h3 className="font-display text-2xl md:text-3xl text-foreground mb-3">{p.title}</h3>
              <p className="font-body text-[13px] leading-[1.8]" style={{ color: "#333333" }}>
                {p.todo}
              </p>
              <p
                className="font-body text-[9px] tracking-[4px] uppercase mt-4 border-b pb-1"
                style={{ color: "rgb(74, 103, 65)", display: "inline-block", borderColor: "rgb(74, 103, 65)" }}
              >
                {partnersCta}
              </p>
            </Reveal>
          ))}

          <Reveal
            className="p-[36px] flex flex-col justify-center"
            style={{ backgroundColor: "rgb(44, 62, 37)" }}
            delay={1}
          >
            <p className="font-body text-[10px] tracking-[3px] uppercase" style={{ color: "rgb(143, 175, 126)" }}>
              {t("activitesPg.customEyebrow")}
            </p>
            <div className="w-[30px] h-px my-3" style={{ backgroundColor: "rgb(143, 175, 126)" }} />
            <h3 className="font-display text-3xl md:text-4xl mb-4" style={{ color: "rgb(245, 240, 232)" }}>
              {t("activitesPg.customTitle")}
            </h3>
          <p className="font-body text-[13px] leading-[1.8] mb-4" style={{ color: "rgb(143, 175, 126)" }}>
            {t("activitesPg.customText")}
          </p>
          <LangLink
            to="/contact"
            className="font-body text-[9px] tracking-[4px] uppercase border-b pb-1"
            style={{ color: "rgb(143, 175, 126)", display: "inline-block", borderColor: "rgb(143, 175, 126)" }}
          >
            {t("activitesPg.customCta")}
          </LangLink>
          </Reveal>
        </div>
      </section>

      <div className="h-[36px] md:hidden" style={{ backgroundColor: "#F5F0E8" }} />
    </div>
  );
}
