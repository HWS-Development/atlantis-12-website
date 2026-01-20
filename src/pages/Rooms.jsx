import React from "react";
import { useTranslation } from "react-i18next";

const rooms = [
  {
    key: "ipomea",
    image: "/images/rooms/Screenshot 2026-01-20 140225.png",
  },
  {
    key: "coquelicot",
    image: "/images/rooms/Screenshot 2026-01-20 140235.png",
  },
  {
    key: "orchis",
    image: "/images/rooms/Screenshot 2026-01-20 140243.png",
  },
  {
    key: "agave",
    image: "/images/rooms/Screenshot 2026-01-20 140259.png",
  },
];

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
        <h1 className="font-script text-3xl md:text-4xl text-[#8b5e34] mb-2">
       
       <span className="tracking-wide !font-dancing ">{t("rooms.title")}</span>

        </h1>

        <p className="font-semibold mb-6">
          {t("rooms.subtitle")}
        </p>

        <div className="text-black/80 space-y-4 text-sm md:text-base leading-relaxed">
          <p>{t("rooms.p1")}</p>
          <p>{t("rooms.p2")}</p>
          <p>{t("rooms.p3")}</p>
        </div>
      </section>

      {/* ===== ROOMS GRID ===== */}
      <section className="max-w-5xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10">
        {rooms.map((room) => (
          <div key={room.key} className="text-center">
            <div className="relative group overflow-hidden">
              <img
                src={room.image}
                alt={t(`rooms.items.${room.key}.title`)}
                className="w-full h-[400px] object-cover"
              />

              {/* Hover button */}
             <a
  href="https://atlantis-12-maison-d-hotes-et-d-art.hotelrunner.com/bv3/search"
  target="_blank"
  rel="noreferrer"
  className="
    absolute inset-0 flex items-center justify-center
    opacity-0 group-hover:opacity-100
    transition
    bg-black/10
  "
>
  <span
    className="bg-white px-6 py-2 rounded-full shadow hover:bg-[#DDC5AD] text-sm font-medium text-[#5a3e28] transition"
  >
   {t("rooms.cta")}
  </span>
</a>  
            </div>


            <h3 className="font-script text-xl text-[#8b5e34] mt-6">
            
                     <span className="tracking-wide !font-dancing text-3xl md:text-4xl font-semibold">  {t(`rooms.items.${room.key}.title`)}</span>

            </h3>

            <p className="text-sm text-black/70 mt-2">
              {t(`rooms.items.${room.key}.desc`)}
            </p>
          </div>
        ))}
      </section>

      {/* ===== FEATURED ROOM ===== */}
      <section className="max-w-5xl mx-auto px-2 py-16 text-center">
        <div className="relative group overflow-hidden mb-6">
          <img
            src="/images/rooms/409ce7_751da624774c41e3be834451482cc9bd~mv2.avif"
            alt={t("rooms.items.plumeria.title")}
            className="w-full h-[360px] object-cover"
          />

          <a
            href="https://atlantis-12-maison-d-hotes-et-d-art.hotelrunner.com/bv3/search"
            target="_blank"
            rel="noreferrer"
            className="
              absolute inset-0 flex items-center justify-center
              opacity-0 group-hover:opacity-100
              transition bg-black/10
            "
          >
            <span className="bg-white px-6 py-2 rounded-full shadow hover:bg-[#DDC5AD] text-sm font-medium text-[#5a3e28] transition">
              {t("rooms.cta")}
            </span>
          </a>
        </div>

        <h3 className="font-script text-3xl text-[#8b5e34]">
       
<span className="tracking-wide !font-dancing text-3xl md:text-4xl font-semibold">
  {t("rooms.items.plumeria.title")}
</span>

        </h3>

     <p className="text-sm text-black/70 mt-2 line-clamp-2 md:line-clamp-3">
  {t("rooms.items.plumeria.desc")}
</p>




        <p className="mt-10 font-semibold">
          {t("rooms.footer")}
        </p>
      </section>
    </main>
  );
}
