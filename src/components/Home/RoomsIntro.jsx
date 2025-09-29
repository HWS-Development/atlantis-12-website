// src/components/Home/RoomsIntroArt.jsx
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function RoomsIntroArt() {
  const { t } = useTranslation();

  // allow \n in i18n text to become paragraphs
  const paragraphs = String(t("home.roomsIntro.text"))
    .split("\n")
    .filter(Boolean);

  return (
    <section
      id="rooms"
      className="
        relative
        h-[70vh] md:h-[92vh]
        overflow-hidden
        bg-[url('/images/exterior.jpg')]  /* <-- set your background image */
        bg-cover bg-center bg-no-repeat
      "
      aria-label={t("home.roomsIntro.imgAlt")}
    >
      {/* subtle vignette so white card pops on bright photos */}
      <div className="absolute inset-0 pointer-events-none bg-black/20" />

      {/* centered glass card */}
      <div className="relative z-10 w-full h-full flex items-center justify-center px-4">
        <div
          className="
            w-full max-w-[820px]
            bg-white/40 md:bg-white/50
            backdrop-blur-sm
            shadow-xl
            border border-white/60
            px-5 py-6 md:px-10 md:py-10
            text-center
          "
        >
          {/* Title (italic) */}
          <h2 className="font-serif italic text-[30px] md:text-[42px] leading-tight text-black mb-1">
            {t("home.roomsIntro.title")}
          </h2>

          {/* Lead / subhead */}
          <p className="text-black/80 text-base md:text-xl mb-5 md:mb-7">
            {t("home.roomsIntro.lead")}
          </p>

          {/* Body (multi paragraphs from \n) */}
          <div className="space-y-4 md:space-y-5 text-[15px] md:text-base leading-relaxed text-black/85">
            {paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          {/* CTA – orange, centered */}
          <div className="mt-6 md:mt-8">
            <Link
              to="/rooms"
              className="
                inline-flex items-center justify-center
                px-6 md:px-8 py-2.5 md:py-3
                rounded-md font-semibold
                text-white
                bg-[#E28927] hover:bg-[#d67e1f] active:bg-[#c7751c]
                shadow-sm
                transition-colors
              "
            >
              {t("home.roomsIntro.cta")}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
