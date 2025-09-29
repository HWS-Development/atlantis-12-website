// src/components/Home/AboutSnippet.jsx
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function AboutSnippet() {
  const { t } = useTranslation();

  return (
    <section
      id="about"
      className="
        relative overflow-hidden
        h-[60vh] md:h-screen
        bg-[url('/images/food1.jpg')]  /* swap if you prefer */
        bg-cover bg-center
      "
      aria-label={t('home.about.title', 'Une maison d’hôtes née d’un rêve')}
    >
      {/* subtle dark vignette to make text pop */}
      <div className="absolute inset-0 bg-black/30" />

      {/* center wrapper */}
      <div className="relative h-full flex items-center justify-center px-4">
        {/* frosted / translucent panel */}
        <div
          className="
            w-full max-w-[700px]
            bg-white/50 backdrop-blur-x
            shadow-[0_20px_60px_rgba(0,0,0,.25)]
            px-6 py-7 md:px-12 md:py-10
            text-center
          "
        >
          {/* small script-like brand line */}
          <div className="font-serif italic text-[28px] md:text-[36px] text-black/80 leading-snug">
            <span className="tracking-wide">atlantis,</span>
          </div>

          <h2 className="mt-2 font-serif text-xl md:text-2xl text-black/85">
            {t("home.about.title", "une maison d’hôtes née d’un rêve")}
          </h2>

          <p className="mt-4 md:mt-5 text-[15px] md:text-[16px] text-black/80 leading-relaxed">
            {t("home.about.text")}
          </p>

          <div className="mt-6 md:mt-7">
            <Link
              to="/about"
              className="
                inline-flex items-center justify-center
                px-6 md:px-7 py-3
                text-white font-semibold
                bg-[#E88C22] hover:bg-[#d97f1d]
                shadow-[0_10px_22px_rgba(232,140,34,.35)]
                transition-colors
              "
            >
              {t("home.about.cta", "En savoir plus")}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
