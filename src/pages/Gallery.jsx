// src/pages/MaisonDArt.jsx
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

export default function Gallery() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col">

      {/* HERO */}
      <section className="relative h-[340px] md:h-[500px] overflow-hidden">
        <img
          src="/images/home herp.jpeg"
          alt={t("maisonDArt.heroAlt")}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20" />
      </section>

      {/* TITLE + CONTENT */}
      <section className="bg-white py-14 md:py-20">
        <div className="max-w-4xl mx-auto text-center px-6 space-y-7">

          <h2
            className="font-[DancingScript] text-4xl md:text-5xl text-[#7a5a39] font-normal mb-2"
            style={{ fontFamily: "'Dancing Script', cursive" }}
          >
          <span className="tracking-wide !font-dancing">{t("maisonDArt.title")}</span>
  
          </h2>

          <p className="text-black font-semibold tracking-wide mb-10">
            {t("maisonDArt.subtitle")}
          </p>

          <div className="text-black/80 leading-relaxed space-y-6 text-[10px] md:text-base mb-16">
            <p className="whitespace-pre-line">{t("maisonDArt.p1")}</p>
            <p>{t("maisonDArt.p2")}</p>
            <p>{t("maisonDArt.p3")}</p>
            <p className="whitespace-pre-line">{t("maisonDArt.p4")}</p>
            <p className="whitespace-pre-line">
            {t("maisonDArt.tagline")}
          </p>
          </div>

          
        </div>
      </section>

      {/* GALLERY SWIPER */}
      <section className="bg-white pb-20">
        <div className="max-w-6xl mx-auto px-6">
          <Swiper
            modules={[Navigation]}
            navigation
            spaceBetween={20}
            slidesPerView={1.2}
            breakpoints={{
              640: { slidesPerView: 2.2 },
              1024: { slidesPerView: 3.2 },
              1440: { slidesPerView: 4.2 }
            }}
          >
            <SwiperSlide>
              <img src="/images/Screenshot 2025-11-26 130125.png" className="rounded-xl2 object-cover h-[380px] w-full" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/images/Screenshot 2025-11-26 130035.png" className="rounded-xl2 object-cover h-[380px] w-full" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/images/Screenshot 2025-11-26 130047.png" className="rounded-xl2 object-cover h-[380px] w-full" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/images/Screenshot 2025-11-26 130059.png" className="rounded-xl2 object-cover h-[380px] w-full" />
            </SwiperSlide>
             <SwiperSlide>
              <img src="/images/Screenshot 2025-11-26 130113.png" className="rounded-xl2 object-cover h-[380px] w-full" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/images/Screenshot 2025-11-26 130138.png" className="rounded-xl2 object-cover h-[380px] w-full" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/images/Screenshot 2025-11-26 130147.png" className="rounded-xl2 object-cover h-[380px] w-full" />
            </SwiperSlide>
          </Swiper>
        </div>
      </section>

    </div>
  );
}
