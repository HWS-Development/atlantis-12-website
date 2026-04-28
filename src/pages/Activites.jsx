import React from "react";
import { useTranslation } from "react-i18next";

export default function Activites() {
  const { t } = useTranslation();

  return (
    <section className="bg-white pt-0">

      {/* ===== HERO IMAGE ===== */}
      <div className="w-full h-[340px] md:h-[500px] overflow-hidden">
        <img
          src="/images/409ce7_e97346edf0664695a5cf6a498dccf59f~mv2.avif"
          alt="Activités Atlantis"
          className="w-full h-full object-cover"
        />
      </div>

      {/* ===== TITLE + SUBTITLE ===== */}
      <div className="max-w-4xl mx-auto text-center px-6 py-12 md:py-16">
        <h2
          className="font-[DancingScript] text-4xl md:text-5xl text-[#7a5a39] font-normal mb-2"
          style={{ fontFamily: "'Dancing Script', cursive" }}
        >
        <span className="tracking-wide !font-dancing">{t("activites.title")}</span>

        </h2>

        <p className="text-black font-semibold tracking-wide mb-10">
          {t("activites.subtitle")}
        </p>

        {/* ===== PARAGRAPHS ===== */}
        <div className="text-black/80 leading-relaxed space-y-6 text-[10px] md:text-base mb-16 whitespace-pre-line">
          <p>{t("activites.p1")}</p>
          <p>{t("activites.p2")}</p>
          <p>{t("activites.p3")}</p>
          <p>{t("activites.p4")}</p>
        </div>
      </div>

      {/* ===== IMAGE GRID ===== */}
      <div className="max-w-6xl mx-auto px-4 pb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">

          {/* Replace with your images to match client design */}
          <img src="/images/Screenshot 2026-01-20 134804.png" className="w-full h-[350px] object-cover" />
          <img src="/images/Screenshot 2026-01-20 134814.png" className="w-full h-[350px] object-cover" />
          <img src="/images/Screenshot 2026-01-20 134826.png" className="w-full h-[350px] object-cover" />
          <img src="/images/Screenshot 2026-01-20 134838.png" className="w-full h-[350px] object-cover" />
          <img src="/images/Screenshot 2026-01-20 134847.png" className="w-full h-[350px] object-cover" />
          <img src="/images/Screenshot 2026-01-20 134857.png" className="w-full h-[350px] object-cover" />
          <img src="/images/Screenshot 2026-01-20 134907.png" className="w-full h-[350px] object-cover" />
          <img src="/images/Screenshot 2026-01-20 134916.png" className="w-full h-[350px] object-cover" />
          <img src="/images/Screenshot 2026-01-20 134926.png" className="w-full h-[350px] object-cover" />
          <img src="/images/Screenshot 2026-01-20 134937.png" className="w-full h-[350px] object-cover" />
          <img src="/images/Screenshot 2026-01-20 134946.png" className="w-full h-[350px] object-cover" />
          <img src="/images/Screenshot 2026-01-20 134954.png" className="w-full h-[350px] object-cover" />
          <img src="/images/Screenshot 2026-02-19 162322.png" className="w-full h-[350px] object-cover" />
          <img src="/images/Screenshot 2026-02-19 162233.png" className="w-full h-[350px] object-cover" />
          <img src="/images/Screenshot 2026-02-19 162243.png" className="w-full h-[350px] object-cover" />
          <img src="/images/Screenshot 2026-02-19 162251.png" className="w-full h-[350px] object-cover" />
          <img src="/images/Screenshot 2026-02-19 162301.png" className="w-full h-[350px] object-cover" />
          <img src="/images/Screenshot 2026-02-19 162311.png" className="w-full h-[350px] object-cover" />

        </div>
      </div>

    </section>
  );
}
