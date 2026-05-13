// /experiences — rebuilt 1:1 from reference/experiences/body.pretty.html
import { useTranslation } from "react-i18next";
import Reveal from "../components/Common/Reveal";

const CDN = "/images/cdn";
const HERO = `${CDN}/7d3ecd4c5_balade-cheval-coucher-soleil-plage-essaouira.jpg`;

const HOUSE_META = [
  {
    img: `${CDN}/1710b9e6c_massage-bien-etre-arganiers-atlantis12-essaouira.jpg`,
    bg: "white",
    titleColor: "rgb(44, 62, 37)",
    bodyColor: "rgb(74, 74, 74)",
    accent: "rgb(74, 103, 65)",
  },
  {
    img: `${CDN}/fa543714a_atelier-peinture-intuitive-lahcen-fikri-atlantis12-essaouirajpg.jpg`,
    bg: "white",
    titleColor: "rgb(44, 62, 37)",
    bodyColor: "rgb(74, 74, 74)",
    accent: "rgb(74, 103, 65)",
    reverse: true,
  },
  {
    img: `${CDN}/3070ceb17_balade-dromadaire-depart-atlantis12-essaouira.jpg`,
    bg: "rgb(44, 62, 37)",
    titleColor: "rgb(245, 240, 232)",
    bodyColor: "rgb(176, 204, 160)",
    accent: "rgb(143, 175, 126)",
  },
  {
    img: `${CDN}/b95316e3e_yoga-terrasse-atlantis12-essaouira-foretjpg.jpg`,
    bg: "white",
    titleColor: "rgb(44, 62, 37)",
    bodyColor: "rgb(74, 74, 74)",
    accent: "rgb(74, 103, 65)",
    reverse: true,
  },
];

const PARTNER_IMGS = [
  `${CDN}/ea4939afd_balade-cheval-plage-coucher-soleil-essaouira.jpg`,
  `${CDN}/a4bc0de3e_kitesurf-coucher-soleil-atlantique-essaouirajpg.jpg`,
  `${CDN}/ef8b0b32f_quad-dunes-plage-sauvage-essaouira.jpg`,
  `${CDN}/8d6a1fc06_hammam-traditionnel-soins-essaouira.jpg`,
  `${CDN}/5a8f61c86_excursion-moto-electrique-arganiers-essaouirajpg.jpg`,
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
            className="font-body text-[10px] tracking-[0.4em] uppercase mb-3"
            style={{ color: "rgba(255, 255, 255, 0.75)" }}
          >
            {t("activitesPg.heroEyebrow")}
          </Reveal>
          <Reveal as="h1" className="font-display text-[82px] font-bold text-white mt-2" delay={1}>
            {t("activitesPg.heroTitle")}
          </Reveal>
        </div>
      </div>

      <section className="bg-white">
        <div className="px-[60px] pt-[60px] pb-[40px] max-w-[680px] mx-auto text-center">
          <Reveal as="p" className="font-body text-[15px] leading-[1.8]" style={{ color: "rgb(74, 74, 74)" }}>
            {t("activitesPg.intro")}
          </Reveal>
        </div>

        <div className="p-[60px]">
          <Reveal
            as="p"
            className="font-body text-[10px] tracking-[4px] uppercase"
            style={{ color: "rgb(74, 103, 65)" }}
          >
            {t("activitesPg.houseEyebrow")}
          </Reveal>
          <Reveal as="h2" className="font-display text-[52px] font-bold text-foreground mt-2" delay={1}>
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
                <h3 className="font-display text-[50px] font-bold mb-4" style={{ color: meta.titleColor }}>
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

      <section className="bg-white py-20">
        <div className="px-[60px] mb-12 text-center">
          <Reveal
            as="p"
            className="font-body text-[10px] tracking-[4px] uppercase"
            style={{ color: "rgb(74, 103, 65)" }}
          >
            {t("activitesPg.partnersEyebrow")}
          </Reveal>
          <Reveal as="h2" className="font-display text-[52px] font-bold text-foreground mt-2" delay={1}>
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
              <h3 className="font-display text-[30px] font-bold text-foreground mb-3">{p.title}</h3>
              <p className="font-body text-[13px] leading-[1.8]" style={{ color: "rgb(74, 74, 74)" }}>
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
            <h3 className="font-display text-[34px] font-bold mb-4" style={{ color: "rgb(245, 240, 232)" }}>
              {t("activitesPg.customTitle")}
            </h3>
            <p className="font-body text-[13px] leading-[1.8] mb-4" style={{ color: "rgb(176, 204, 160)" }}>
              {t("activitesPg.customText")}
            </p>
            <a
              href="mailto:contact@atlantis12essaouira.com"
              className="font-body text-[9px] tracking-[4px] uppercase border-b pb-1"
              style={{ color: "rgb(143, 175, 126)", display: "inline-block", borderColor: "rgb(143, 175, 126)" }}
            >
              {t("activitesPg.customCta")}
            </a>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
