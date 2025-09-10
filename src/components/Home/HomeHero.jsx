// src/components/Home/HomeHero.jsx
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export default function HomeHero() {
  const { t } = useTranslation();
  const slides = [
    "/images/exterior.jpg",
    "/images/view.jpg",
  ];
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIdx((p) => (p + 1) % slides.length), 6000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative h-[56vh] md:h-[90vh] overflow-hidden">
      {slides.map((src, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-[1200ms] ${
            i === idx ? "opacity-100" : "opacity-0"
          }`}
        >
          <img src={src} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/30" /> {/* stronger overlay */}
        </div>
      ))}

      {/* green welcome band (kept) */}
      <div className="absolute w-full top-36 z-10">
        <div className="legacy-hero-banner">
          <div className="uppercase tracking-[.08em] text-xl md:text-2xl opacity-90">
            {t("home.hero.welcome", "Bienvenue à")}
          </div>
          <br />
          <h1 className="font-serif text-2xl md:text-4xl">Atlantis 12</h1>
          <div className="text-xl md:text-2xl opacity-90">
            {t("home.hero.tagline", "maison d’hôtes et d’art — Essaouira")}
          </div>
        </div>
      </div>

      {/* compact booking bar with labels */}
      <div className="absolute bottom-2 md:bottom-20 left-1/2 -translate-x-1/2 z-10 w-[100%] md:w-auto">
        <div className="mx-auto md:max-w-4xl">
          <div className="bg-white/92 backdrop-blur rounded-xl px-3 py-3 md:px-4 md:py-3 shadow-lg">
            <form
              action="https://atlantis-12-maison-d-hotes-et-d-art.hotelrunner.com/bv3/search"
              target="_blank"
              className="grid grid-cols-2 md:grid-cols-[1fr,1fr,100px,100px,110px] gap-2 md:gap-3 items-end"
            >
              <div className="flex flex-col">
                <label htmlFor="checkin" className="text-[14px] text-black/90 mb-1">
                  {t("home.hero.labels.checkin")}
                </label>
                <input id="checkin" type="date" name="checkin" className="field field-sm" />
              </div>

              <div className="flex flex-col">
                <label htmlFor="checkout" className="text-[14px] text-black/90 mb-1">
                  {t("home.hero.labels.checkout")}
                </label>
                <input id="checkout" type="date" name="checkout" className="field field-sm" />
              </div>

              <div className="flex flex-col">
                <label htmlFor="adults" className="text-[14px] text-black/90 mb-1">
                  {t("home.hero.labels.adults")}
                </label>
                <input id="adults" type="number" min="1" defaultValue="2" name="adults" className="field field-sm" />
              </div>

              <div className="flex flex-col">
                <label htmlFor="children" className="text-[14px] text-black/90 mb-1">
                  {t("home.hero.labels.children")}
                </label>
                <input id="children" type="number" min="0" defaultValue="0" name="children" className="field field-sm" />
              </div>

              <button className="btn-legacy btn-legacy-primary h-12">
                {t("home.hero.search", "Rechercher")}
              </button>
            </form>
          </div>
        </div>
      </div>

    </section>
  );
}
