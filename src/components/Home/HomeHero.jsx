// src/components/Home/HomeHero.jsx
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export default function HomeHero() {
  const { t } = useTranslation();
  // swap these with your interior hero images
  const slides = [
    "/images/exterior.jpg"
  ];

  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIdx((p) => (p + 1) % slides.length), 7000);
    return () => clearInterval(id);
  }, [slides.length]);

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
          {/* richer overlay for readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/25 to-black/20" />
        </div>
      ))}

      {/* Centered logo/lockup */}
      <div className="relative z-10 min-h-screen grid place-items-center text-center px-6">
        <div className="text-white select-none">
          {/* If you have the combined white logo, use it. Fallback to text below */}
          <img
            src="/images/logo atlantis final - blanc sans mot.png"
            alt="Atlantis 12 — maison d’hôtes et d’art"
            className="mx-auto w-[220px] md:w-[320px] drop-shadow-md"
          />
          {/* Fallback (remove if using the SVG above) */}
          
          <h1 className="font-serif text-4xl md:text-6xl tracking-wide drop-shadow-md !font-dancing">
            {t('brand.name')}
          </h1>
          <p className="mt-2 text-lg md:text-xl opacity-90 italic">
            {t('home.hero.tagline')}
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
