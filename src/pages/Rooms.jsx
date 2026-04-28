import React, { useState } from "react";
import { useTranslation } from "react-i18next";

// 3 photos par chambre. Remplacez par vos chemins réels (ex: ipomea-2.jpg, ipomea-3.jpg).
const rooms = [
  {
    key: "ipomea",
    images: [
      "/images/rooms/Screenshot 2026-01-20 140225.png",
      "/images/rooms/Screenshot 2026-01-20 140225.png",
      "/images/rooms/Screenshot 2026-01-20 140225.png",
    ],
  },
  {
    key: "coquelicot",
    images: [
      "/images/rooms/Screenshot 2026-01-20 140235.png",
      "/images/rooms/Screenshot 2026-01-20 140235.png",
      "/images/rooms/Screenshot 2026-01-20 140235.png",
    ],
  },
  {
    key: "orchis",
    images: [
      "/images/rooms/Screenshot 2026-01-20 140243.png",
      "/images/rooms/Screenshot 2026-01-20 140243.png",
      "/images/rooms/Screenshot 2026-01-20 140243.png",
    ],
  },
  {
    key: "agave",
    images: [
      "/images/rooms/Screenshot 2026-01-20 140259.png",
      "/images/rooms/Screenshot 2026-01-20 140259.png",
      "/images/rooms/Screenshot 2026-01-20 140259.png",
    ],
  },
];

const plumeriaImg = "/images/rooms/409ce7_751da624774c41e3be834451482cc9bd~mv2.avif";
const plumeriaImages = [plumeriaImg, plumeriaImg, plumeriaImg];

function RoomSlider({ images, alt, className = "", cta, ctaLabel }) {
  const [idx, setIdx] = useState(0);
  const safeImages = images?.filter(Boolean).length ? images : [images?.[0] || "/images/placeholder.jpg"];

  const goPrev = (e) => {
    e.stopPropagation();
    setIdx((p) => (p - 1 + safeImages.length) % safeImages.length);
  };
  const goNext = (e) => {
    e.stopPropagation();
    setIdx((p) => (p + 1) % safeImages.length);
  };

  return (
    <div className={`relative group overflow-hidden ${className}`}>
      {safeImages.map((src, i) => (
        <img
          key={i}
          src={src}
          alt={`${alt} ${i + 1}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
            i === idx ? "opacity-100 z-0" : "opacity-0 z-0 pointer-events-none"
          }`}
        />
      ))}

      {/* Arrows */}
      <button
        type="button"
        onClick={goPrev}
        aria-label="Photo précédente"
        className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/90 hover:bg-white
                   flex items-center justify-center shadow-md transition"
      >
        <svg className="w-6 h-6 text-[#8b5e34]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        type="button"
        onClick={goNext}
        aria-label="Photo suivante"
        className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/90 hover:bg-white
                   flex items-center justify-center shadow-md transition"
      >
        <svg className="w-6 h-6 text-[#8b5e34]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* CTA overlay */}
      {cta && (
        <a
          href="https://atlantis-12-maison-d-hotes-et-d-art.hotelrunner.com/bv3/search"
          target="_blank"
          rel="noreferrer"
          className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition bg-black/10 z-[1]"
        >
          <span className="bg-white px-6 py-2 rounded-full shadow hover:bg-[#DDC5AD] text-sm font-medium text-[#5a3e28] transition">
            {ctaLabel}
          </span>
        </a>
      )}
    </div>
  );
}

export default function Rooms() {
  const { t } = useTranslation();

  return (
    <main className="bg-white">

      {/* ===== HERO IMAGE ===== */}
      <div className="w-full h-[340px] md:h-[500px] overflow-hidden">
        <img
          src="/images/rooms/409ce7_4febeb2f90464e69900f042f5a6e1329~mv2.avif"
          alt={t("rooms.title")}
          className="w-full h-full object-cover"
        />
      </div>

      {/* ===== INTRO ===== */}
      <section className="max-w-4xl mx-auto px-4 py-14 text-center">
        <h2
          className="font-[DancingScript] text-4xl md:text-5xl text-[#7a5a39] font-normal mb-2"
          style={{ fontFamily: "'Dancing Script', cursive" }}
        >
       
        <span className="tracking-wide !font-dancing ">{t("rooms.title")}</span>

        </h2>

        <p className="text-black font-semibold tracking-wide mb-10">
          {t("rooms.subtitle")}
        </p>


        <div className="text-black/80 leading-relaxed space-y-6 text-[10px] md:text-base mb-16 whitespace-pre-line">
          <p>{t("rooms.p1")}</p>
          <p>{t("rooms.p2")}</p>
          <p>{t("rooms.p3")}</p>
        </div>
      </section>

      {/* ===== ROOMS GRID ===== */}
      <section className="max-w-5xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10">
        {rooms.map((room) => (
          <div key={room.key} className="text-center">
            <RoomSlider
              images={room.images}
              alt={t(`rooms.items.${room.key}.title`)}
              className="w-full h-[400px]"
              cta
              ctaLabel={t("rooms.cta")}
            />


            <h3 className="font-script text-xl text-[#8b5e34] mt-6">
            
                     <span className="tracking-wide !font-dancing text-3xl md:text-4xl font-semibold">  {t(`rooms.items.${room.key}.title`)}</span>

            </h3>

            <p className="text-sm text-black/70 mt-2 line-clamp-3">
              {t(`rooms.items.${room.key}.desc`)}
            </p>
          </div>
        ))}
      </section>

      {/* ===== FEATURED ROOM ===== */}
      <section className="max-w-5xl mx-auto px-2 py-16 text-center">
        <RoomSlider
          images={plumeriaImages}
          alt={t("rooms.items.plumeria.title")}
          className="w-full h-[360px] mb-6"
          cta
          ctaLabel={t("rooms.cta")}
        />

        <h3 className="font-script text-3xl text-[#8b5e34]">
       
<span className="tracking-wide !font-dancing text-3xl md:text-4xl font-semibold">
  {t("rooms.items.plumeria.title")}
</span>

        </h3>

        <p className="text-sm text-black/70 mt-2 text-center max-w-xl mx-auto overflow-hidden"
   style={{ display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
  {t("rooms.items.plumeria.desc")}
</p>




        <p className="mt-10 font-semibold">
          {t("rooms.footer")}
        </p>
      </section>
    </main>
  );
}
