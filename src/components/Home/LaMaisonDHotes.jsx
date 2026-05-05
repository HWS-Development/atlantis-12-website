import React from "react";
import { useTranslation } from "react-i18next";

export default function LaMaisonDHotes() {
  const { t } = useTranslation();

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        
        {/* ===== TITLE (DANCING SCRIPT) ===== */}
        <h2
          className="font-[DancingScript] text-4xl md:text-5xl text-[#7a5a39] font-normal mb-2"
          style={{ fontFamily: "'Dancing Script', cursive" }}
        >
        <span className="tracking-wide !font-dancing">{t("maison.title")}</span>
        </h2>

        {/* ===== SUBTITLE ===== */}
        <p className="text-black font-semibold tracking-wide mb-10">
          {t("maison.subtitle")}
        </p>

        {/* ===== MAIN TEXT BLOCK ===== */}
        <div className="text-black/80 leading-relaxed space-y-6 text-[10px] md:text-base mb-16">
          <p>{t("maison.p1")}</p>
          <p>{t("maison.p2")}</p>
          <p>{t("maison.p3")}</p>
          <p>{t("maison.p4")}</p>
        </div>

        {/* ===== IMAGE GRID (WITH CENTER QUOTE IMAGE) ===== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mb-10">

          <img src="/images/Screenshot 2025-11-26 130047.png" className="w-full h-[300px] object-cover rounded-lg" />
          <img src="/images/Screenshot 2026-01-20 132450.png" className="w-full h-[300px] object-cover rounded-lg" />
          <img src="/images/view.jpg" className="w-full h-[300px] object-cover rounded-lg" />

          <img src="/images/Screenshot 2026-01-20 132359.png" className="w-full h-[300px] object-cover rounded-lg" />

          {/* CENTER IMAGE (QUOTE IMAGE, NOT TEXT) */}
          <img
            src="/images/Screenshot 2026-01-20 132409.png"    // ⬅️ Replace with your real file
            alt="Inspirational quote"
            className="w-full h-[300px] object-cover rounded-lg"
          />

          <img src="/images/Screenshot 2026-01-20 132422.png" className="w-full h-[300px] object-cover rounded-lg" />
          <img src="/images/Screenshot 2026-01-20 132431.png" className="w-full h-[300px] object-cover rounded-lg" />
          <img src="/images/Screenshot 2026-01-20 133558.png" className="w-full h-[300px] object-cover rounded-lg" />
          <img src="/images/Screenshot 2026-02-19 162251.png" className="w-full h-[300px] object-cover rounded-lg" />

        </div>

        {/* ===== FOOTER QUOTE ===== */}
        <p className="italic text-black/80 text-center text-[15px] md:text-base mt-8">
          {t("maison.footer")}
        </p>

      </div>
    </section>
  );
}
