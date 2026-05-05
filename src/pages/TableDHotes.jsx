// src/pages/TableDHotes.jsx
import { useTranslation } from "react-i18next";

export default function TableDHotes() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col">

      {/* HERO (full-bleed image) */}
      <section className="relative h-[340px] md:h-[500px] overflow-hidden">
        <img
          src="/images/Screenshot 2026-02-19 155559.png"              // <-- replace with your hero image
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
          <h2
          className="font-[DancingScript] text-4xl md:text-5xl text-[#7a5a39] font-normal mb-2"
          style={{ fontFamily: "'Dancing Script', cursive" }}
          >
            <span className="tracking-wide !font-dancing">{t("table.title")}</span>
          </h2>
         
          <p className="text-black font-semibold tracking-wide mb-10">
            {t("table.sub")}
          </p>

          {/* Paragraphs */}
          <div className="text-black/80 leading-relaxed space-y-6 text-[10px] md:text-base mb-16 whitespace-pre-line">
            <p>{t("table.p1")}</p>
            <p>{t("table.p2")}</p>
            <p>{t("table.p3")}</p>
            <p>{t("table.p4")}</p>
            <p>{t("table.p5")}</p>
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
        src="/images/11.jpg"  // replace with your top big image
        alt={t('table.galleryAlt1')}
        className="w-full h-[360px] md:h-[550px] object-cover"
        loading="lazy"
      />
    </figure>

    {/* MIDDLE ROW — 2 images */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
      <figure className=" overflow-hidden shadow-soft">
        <img
          src="/images/restaurant/restaurant/_DSC8576-HDR.jpg"
          alt={t('table.galleryAlt2')}
          className="w-full h-[260px] md:h-[635px] object-cover"
          loading="lazy"
        />
      </figure>
      <figure className=" overflow-hidden shadow-soft">
        <img
          src="/images/restaurant/restaurant/_DSC8946-HDR-Avec accentuation-Bruit.jpg"
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
          src="/images/Dinner/Dinner/_DSC8963-HDR-Avec accentuation-Bruit.jpg"
          alt={t('table.galleryAlt2')}
          className="w-full h-[260px] md:h-[635px] object-cover"
          loading="lazy"
        />
      </figure>
      <figure className=" overflow-hidden shadow-soft">
        <img
          src="/images/breakfast/breakfast/_DSC9016.jpg"
          alt={t('table.galleryAlt3')}
          className="w-full h-[260px] md:h-[635px] object-cover"
          loading="lazy"
        />
      </figure>
    </div>

     <figure className="overflow-hidden shadow-soft">
      <img
        src="/images/Dinner/Dinner/_DSC8957-Avec accentuation-Bruit.jpg"
        alt={t('table.galleryAlt1')}
        className="w-full h-[360px] md:h-[600px] object-cover"
        loading="lazy"
      />
    </figure>


      {/* MIDDLE ROW — 2 images */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
      <figure className=" overflow-hidden shadow-soft">
        <img
          src="/images/Dinner/Dinner/_DSC8989-Avec accentuation-Bruit.jpg"
          alt={t('table.galleryAlt2')}
          className="w-full h-[260px] md:h-[600px] object-cover"
          loading="lazy"
        />
      </figure>
      <figure className=" overflow-hidden shadow-soft">
        <img
          src="/images/Dinner/Dinner/_DSC8991-Avec accentuation-Bruit.jpg"
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
