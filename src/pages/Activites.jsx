import React from "react";
import { useTranslation } from "react-i18next";

export default function Activites() {
  const { t } = useTranslation();

  return (
    <section className="bg-white pt-0">

      {/* ===== HERO IMAGE ===== */}
      <div className="w-full h-[420px] md:h-[520px] overflow-hidden">
        <img
          src="/images/home herp.jpeg"
          alt="Activités Atlantis"
          className="w-full h-full object-cover"
        />
      </div>

      {/* ===== TITLE + SUBTITLE ===== */}
      <div className="max-w-4xl mx-auto text-center px-6 py-12 md:py-16">
        <h2 className="font-serif text-3xl md:text-4xl text-[#865c2c] italic mb-2">
                      <span className="tracking-wide !font-dancing">{t("activites.title")}</span>

        </h2>

        <p className="text-black/80 font-semibold mb-8">
          {t("activites.subtitle")}
        </p>

        {/* ===== PARAGRAPHS ===== */}
        <div className="text-black/80 leading-relaxed space-y-6 text-[15px] md:text-base">
          <p>{t("activites.p1")}</p>
          <p>{t("activites.p2")}</p>
          <p>{t("activites.p3")}</p>
        </div>
      </div>

      {/* ===== IMAGE GRID ===== */}
      <div className="max-w-6xl mx-auto px-4 pb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">

          {/* Replace with your images to match client design */}
          <img src="/images/activites/img1.jpg" className="w-full h-[260px] object-cover" />
          <img src="/images/activites/img2.jpg" className="w-full h-[260px] object-cover" />
          <img src="/images/activites/img3.jpg" className="w-full h-[260px] object-cover" />
          <img src="/images/activites/img4.jpg" className="w-full h-[260px] object-cover" />
          <img src="/images/activites/img5.jpg" className="w-full h-[260px] object-cover" />
          <img src="/images/activites/img6.jpg" className="w-full h-[260px] object-cover" />
          <img src="/images/activites/img7.jpg" className="w-full h-[260px] object-cover" />
          <img src="/images/activites/img8.jpg" className="w-full h-[260px] object-cover" />
          <img src="/images/activites/img9.jpg" className="w-full h-[260px] object-cover" />

        </div>
      </div>

    </section>
  );
}
