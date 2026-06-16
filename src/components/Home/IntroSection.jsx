// IntroSection — first content section after hero on live site.
//   Layout: section.px-[10vw].py-16, max-w-3xl
//   H2 (Dancing Script) "Une maison entre l'océan / et les thuyas" (line 2 in primary color)
//   <p> intro paragraph (max-w-xl, foreground/65)
//   2 outline-pill CTAs: "Découvrir la maison" (primary) / "La galerie d'art" (sage)
import LangLink from "../Common/LangLink";
import { useTranslation } from "react-i18next";
import Reveal from "../Common/Reveal";

export default function IntroSection() {
  const { t } = useTranslation();

  return (
    <section className="page-x py-10 md:py-16">
      <div className="max-w-3xl">
        <Reveal as="h2" className="font-display text-4xl md:text-6xl text-foreground leading-tight mb-8">
          {t("home.intro.titleLine1", "Une maison entre l'océan")}
          <br />
          <span className="text-primary">
            {t("home.intro.titleLine2", "et les thuyas")}
          </span>
        </Reveal>

        <Reveal
          as="p"
          delay={1}
          className="font-body text-sm leading-relaxed text-foreground max-w-xl"
        >
          {t("home.intro.body")}
        </Reveal>

        <Reveal delay={2} className="mt-8 flex flex-wrap gap-4">
          <LangLink to="/la-maison" className="btn-outline-primary">
            {t("home.intro.ctaHouse", "Découvrir la maison")}
          </LangLink>
          <LangLink to="/maison-dart" className="btn-outline-sage">
            {t("home.intro.ctaArt", "La galerie d'art")}
          </LangLink>
        </Reveal>
      </div>
    </section>
  );
}
