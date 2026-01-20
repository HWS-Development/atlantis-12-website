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
          <h1 className="font-serif text-4xl md:text-5xl mb-3   text-[#8b5e34]">
                                  <span className="tracking-wide !font-dancing">{t("table.title")}</span>

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
      {/* STACKED GALLERY (1 / 2 / 2 layout like your screenshot) */}
<section className="bg-[#F7F3EA] py-10">
  <div className="container-std max-w-5xl mx-auto space-y-4">

    {/* TOP BIG IMAGE */}
    <figure className="overflow-hidden shadow-soft">
      <img
        src="/images/Screenshot 2026-01-20 133451.png"  // replace with your top big image
        alt={t('table.galleryAlt1')}
        className="w-full h-[360px] md:h-[550px] object-cover"
        loading="lazy"
      />
    </figure>

    {/* MIDDLE ROW — 2 images */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
      <figure className=" overflow-hidden shadow-soft">
        <img
          src="/images/Screenshot 2026-01-20 133510.png"
          alt={t('table.galleryAlt2')}
          className="w-full h-[260px] md:h-[635px] object-cover"
          loading="lazy"
        />
      </figure>
      <figure className=" overflow-hidden shadow-soft">
        <img
          src="/images/Screenshot 2026-01-20 133521.png"
          alt={t('table.galleryAlt3')}
          className="w-full h-[260px] md:h-[635px] object-cover"
          loading="lazy"
        />
      </figure>
    </div>

    {/* MIDDLE ROW — 2 images */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
      <figure className=" overflow-hidden shadow-soft">
        <img
          src="/images/Screenshot 2026-01-20 133546.png"
          alt={t('table.galleryAlt2')}
          className="w-full h-[260px] md:h-[635px] object-cover"
          loading="lazy"
        />
      </figure>
      <figure className=" overflow-hidden shadow-soft">
        <img
          src="/images/Screenshot 2026-01-20 133534.png"
          alt={t('table.galleryAlt3')}
          className="w-full h-[260px] md:h-[635px] object-cover"
          loading="lazy"
        />
      </figure>
    </div>

     <figure className="overflow-hidden shadow-soft">
      <img
        src="/images/Screenshot 2026-01-20 133558.png"  // replace with your top big image
        alt={t('table.galleryAlt1')}
        className="w-full h-[360px] md:h-[600px] object-cover"
        loading="lazy"
      />
    </figure>


      {/* MIDDLE ROW — 2 images */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
      <figure className=" overflow-hidden shadow-soft">
        <img
          src="/images/Screenshot 2026-01-20 133621.png"
          alt={t('table.galleryAlt2')}
          className="w-full h-[260px] md:h-[600px] object-cover"
          loading="lazy"
        />
      </figure>
      <figure className=" overflow-hidden shadow-soft">
        <img
          src="/images/Screenshot 2026-01-20 133612.png"
          alt={t('table.galleryAlt3')}
          className="w-full h-[260px] md:h-[600px] object-cover"
          loading="lazy"
        />
      </figure>
    </div>

  </div>
</section>



    </div>
  );
}
