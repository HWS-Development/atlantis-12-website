import { useTranslation } from "react-i18next";
import Reveal from "../Common/Reveal";
import ResponsiveImage from "../Common/ResponsiveImage";

const HERO_LOGO = "/images/logo/logo-aquarelle-maison-dhotes-art-atlantis12-essaouira.png";

export default function HomeHero() {
  const { t } = useTranslation();

  const scrollDown = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="hero"
      className="relative w-full h-screen overflow-hidden"
      style={{ height: "100svh", minHeight: "100svh" }}
    >
      <h1 className="sr-only">
        {t("home.hero.seoHeading", "Atlantis 12, maison d'hôtes et d'art à Essaouira")}
      </h1>
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none px-6">
        <Reveal className="relative flex flex-col items-center hero-logo-in w-full max-w-[440px]">
          <ResponsiveImage
            src={HERO_LOGO}
            alt="Atlantis 12"
            width={866}
            height={1024}
            sizes="(min-width: 1024px) 440px, (min-width: 768px) 380px, (min-width: 640px) 300px, 260px"
            loading="eager"
            fetchPriority="high"
            className="w-[260px] sm:w-[300px] md:w-[380px] lg:w-[440px] h-auto object-contain hero-logo-img mx-auto"
            style={{ mixBlendMode: "multiply" }}
          />
          <p
            className="font-body absolute bottom-[18%] left-1/2 -translate-x-1/2 whitespace-nowrap text-center hero-text-shadow"
            style={{
              color: "rgba(60, 75, 50, 0.6)",
              fontSize: "12px",
              letterSpacing: "0.4em",
              textTransform: "uppercase",
              fontWeight: 600,
            }}
          >
            {t("home.hero.eyebrow", "Proche d'Essaouira, Maroc")}
          </p>
        </Reveal>
      </div>

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
