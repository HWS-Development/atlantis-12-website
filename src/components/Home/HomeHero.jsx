// HomeHero — matches live site exactly:
//   <section id="hero" h-screen> with centered watercolor logo (mix-blend-multiply)
//   + "PROCHE D'ESSAOUIRA, MAROC" eyebrow positioned at bottom 18%
//   + scroll-down button (1px vertical line, gentle bob animation) at bottom 8.
import { useTranslation } from "react-i18next";
import Reveal from "../Common/Reveal";

// Watercolor brand mark — same asset as live atlantis12essaouira.com (base44 CDN)
const HERO_LOGO =
  "/images/cdn/095e56924_logo-atlantis12-aquarelle-maison-hotes-art-essaouira.png";

export default function HomeHero() {
  const { t } = useTranslation();

  const scrollDown = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <section id="hero" className="relative w-full h-screen overflow-hidden">
      {/* Centered logo + eyebrow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <Reveal className="relative flex flex-col items-center hero-logo-in">
          <img
            src={HERO_LOGO}
            alt="Atlantis 12"
            width={440}
            height={440}
            className="w-[280px] md:w-[380px] lg:w-[440px] object-contain hero-logo-img"
            style={{ mixBlendMode: "multiply" }}
          />
          <p
            className="font-body absolute bottom-[18%] left-1/2 -translate-x-1/2 whitespace-nowrap text-center"
            style={{
              color: "rgba(60, 75, 50, 0.6)",
              fontSize: "12px",
              letterSpacing: "0.4em",
              textTransform: "uppercase",
            }}
          >
            {t("home.hero.eyebrow", "Proche d'Essaouira, Maroc")}
          </p>
        </Reveal>
      </div>

      {/* Scroll-down indicator (thin vertical line, gentle bob) */}
      <button
        type="button"
        onClick={scrollDown}
        aria-label={t("home.hero.scrollDown", "Défiler vers le bas")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 group"
      >
        <div className="w-px h-8 bg-foreground/30 group-hover:bg-primary/60 transition-colors scroll-bob" />
      </button>
    </section>
  );
}
