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
      <section className="relative h-[48vh] md:h-[60vh] overflow-hidden">
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

          <h1 className="font-dancing text-4xl md:text-5xl">
              <span className="tracking-wide !font-dancing">{t("maisonDArt.title")}</span>

            
          </h1>

          <p className="text-black/70 font-semibold leading-relaxed">
            {t("maisonDArt.subtitle")}
          </p>

          <div className="text-[15px] md:text-base leading-7 text-black/80 space-y-6">
            <p>{t("maisonDArt.p1")}</p>
            <p>{t("maisonDArt.p2")}</p>
            <p>{t("maisonDArt.p3")}</p>
            <p>{t("maisonDArt.p4")}</p>
          </div>

          <p className="font-semibold text-black/80 mt-4">
            {t("maisonDArt.tagline")}
          </p>
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
              <img src="/images/about-us.jpg" className="rounded-xl2 object-cover h-[380px] w-full" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/images/exterior.jpg" className="rounded-xl2 object-cover h-[380px] w-full" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/images/exterior1.jpg" className="rounded-xl2 object-cover h-[380px] w-full" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/images/exterior2.jpg" className="rounded-xl2 object-cover h-[380px] w-full" />
            </SwiperSlide>
             <SwiperSlide>
              <img src="/images/exterior2.jpg" className="rounded-xl2 object-cover h-[380px] w-full" />
            </SwiperSlide>
          </Swiper>
        </div>
      </section>

    </div>
  );
}
