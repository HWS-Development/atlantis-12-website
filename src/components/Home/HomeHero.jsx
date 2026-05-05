// src/components/Home/HomeHero.jsx
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

// Ajoutez vos photos dans public/images/ puis mettez les chemins ici
const slides = [
  "/images/home herp.jpeg",
  "/images/Screenshot 2026-01-20 132450.png",
  "/images/Screenshot 2026-01-20 133451.png",
];

export default function HomeHero() {
  const { t } = useTranslation();
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIdx((p) => (p + 1) % slides.length), 5000);
    return () => clearInterval(id);
  }, []);

  const goPrev = () => setIdx((p) => (p - 1 + slides.length) % slides.length);
  const goNext = () => setIdx((p) => (p + 1) % slides.length);

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Slides */}
      {slides.map((src, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-[1200ms] ease-out
                      ${i === idx ? "opacity-100" : "opacity-0"}`}
          aria-hidden={i !== idx}
        >
          <img
            src={src}
            alt=""
            className="w-full h-full object-cover"
            fetchpriority={i === 0 ? "high" : "auto"}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/25 to-black/20" />
        </div>
      ))}

      {/* Flèches */}
      <button
        type="button"
        onClick={goPrev}
        aria-label="Photo précédente"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/20 hover:bg-white/40
                   flex items-center justify-center transition"
      >
        <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        type="button"
        onClick={goNext}
        aria-label="Photo suivante"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/20 hover:bg-white/40
                   flex items-center justify-center transition"
      >
        <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Indicateurs (points) */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setIdx(i)}
            aria-label={`Photo ${i + 1}`}
            className={`w-2.5 h-2.5 rounded-full transition ${i === idx ? "bg-white" : "bg-white/50 hover:bg-white/70"}`}
          />
        ))}
      </div>

      {/* Centered logo/lockup */}
      <div className="relative z-10 min-h-screen grid place-items-center text-center px-6">
        <div className="text-white select-none">
          {/* If you have the combined white logo, use it. Fallback to text below */}
          <img
            src="/images/logo atlantis final - blanc sans mot.png"
            alt="Atlantis 12 — maison d’hôtes et d’art"
            className="mx-auto w-[150px] md:w-[160px] drop-shadow-md mb-4"
          />
          {/* Fallback (remove if using the SVG above) */}
          
          <h1 className="text-4xl md:text-6xl tracking-wide drop-shadow-md !font-dancing">
            {t('brand.name')}
          </h1>
          <p className="mt-2 text-lg md:text-xl opacity-90 font-bold">
            {t('home.hero.tagline')}
          </p>
          <p className="mt-2 md:mt-3 text-white/90 text-sm md:text-base">
            {t('home.hero.labels.subtitle')}
          </p>
         
        </div>
      </div>

      {/* Optional: subtle scroll indicator */}
      {/* 
      <div className="absolute bottom-8 inset-x-0 z-10 grid place-items-center">
        <div className="text-white/80 text-sm tracking-widest">SCROLL</div>
        <div className="mt-2 h-6 w-[1px] bg-white/50" />
      </div>
      */}
    </section>
  );
}
