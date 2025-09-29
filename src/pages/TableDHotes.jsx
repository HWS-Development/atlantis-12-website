// src/pages/TableDHotes.jsx
import { useTranslation } from "react-i18next";

export default function TableDHotes() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col">

      {/* HERO (full-bleed image) */}
      <section className="relative h-[48vh] md:h-[64vh] overflow-hidden">
        <img
          src="/images/view.jpg"              // <-- replace with your hero image
          alt={t("table.heroAlt")}
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
        />
        {/* optional very subtle darken so white text below pops against the transition */}
        <div className="absolute inset-0 bg-black/10" />
      </section>

      {/* TITLE + COPY */}
      <section className="bg-white">
        <div className="container-std max-w-4xl mx-auto py-12 md:py-16 text-center">
          {/* Handwritten-looking headline (uses your serif or script font if available) */}
          <h1 className="font-serif text-4xl md:text-5xl mb-3">
            {t("table.title")}
          </h1>
          <div className="text-black/70 font-semibold mb-8">
            {t("table.sub")}
          </div>

          {/* Paragraphs */}
          <div className="space-y-6 text-[15px] md:text-base leading-7 text-black/80">
            <p>{t("table.p1")}</p>
            <p>{t("table.p2")}</p>
            <p>{t("table.p3")}</p>
            <p>{t("table.p4")}</p>
          </div>
        </div>
      </section>

      {/* 3-IMAGE STRIP */}
      <section className="bg-[#F7F3EA]">
        <div className="container-std py-8 md:py-12">
          <div className="grid gap-4 md:gap-6 md:grid-cols-3">
            <figure className="rounded-xl2 overflow-hidden shadow-soft">
              <img
                src="/images/food.jpg"      // <-- replace with your image
                alt={t("table.galleryAlt1")}
                className="w-full h-56 md:h-64 object-cover"
                loading="lazy"
              />
            </figure>
            <figure className="rounded-xl2 overflow-hidden shadow-soft">
              <img
                src="/images/food1.jpg"      // <-- replace
                alt={t("table.galleryAlt2")}
                className="w-full h-56 md:h-64 object-cover"
                loading="lazy"
              />
            </figure>
            <figure className="rounded-xl2 overflow-hidden shadow-soft">
              <img
                src="/images/food2.jpg"      // <-- replace
                alt={t("table.galleryAlt3")}
                className="w-full h-56 md:h-64 object-cover"
                loading="lazy"
              />
            </figure>
          </div>
        </div>
      </section>
    </div>
  );
}
