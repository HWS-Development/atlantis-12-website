import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import BookingWidget from "../Booking/BookingWidget";

export default function HomeHero() {
  const { t } = useTranslation();

  const slides = [
    "/images/exterior.jpg",
    "/images/rooms/Superior Double Room1.jpg",
    "/images/view.jpg",
  ];
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIdx((p) => (p + 1) % slides.length), 5000);
    return () => clearInterval(id);
  }, [slides.length]);

  return (
    <>
      <section className="relative h-[62vh] md:h-[70vh] overflow-hidden">
        {/* slides */}
        {slides.map((src, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-1000  ${
              i === idx ? "opacity-100" : "opacity-0"
            }`}
          >
            <img src={src} alt={`Slide ${i + 1}`} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/45" />
            <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/35 to-transparent" />
          </div>
        ))}

        {/* text block (reserve space for booking on md+) */}
        <div className="absolute inset-0 z-20 flex items-center">
          <div className="container-std md:pb-40"> {/* <-- reserves space so title & booking don't overlap */}
            <div className="max-w-2xl text-white">
              <h1 className="text-3xl md:text-5xl font-serif drop-shadow mb-2 md:mb-3">
                {t("home.hero.title")}
              </h1>
              <p className="text-base md:text-xl drop-shadow mb-4 md:mb-6">
                {t("home.hero.subtitle")}
              </p>
              {/* <div className="flex flex-wrap gap-3">
                <Link to="/rooms" className="btn btn-ghost">
                  {t("home.hero.ctaRooms")}
                </Link>
                <a
                  href="https://atlantis-12-maison-d-hotes-et-d-art.hotelrunner.com/bv3/search"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary"
                >
                  {t("home.hero.ctaBook")}
                </a>
              </div> */}
            </div>
          </div>
        </div>

        {/* booking overlay (desktop only) */}
        <div className="hidden md:block absolute left-1/2 -translate-x-1/2 bottom-4 md:bottom-6 w-[92%] md:w-auto z-30">
          <div className="container-std !px-0">
            <div className="md:max-w-4xl mx-auto">
              <BookingWidget compact />
            </div>
          </div>
        </div>
      </section>

      {/* mobile booking (rendered below hero so nothing overlaps) */}
      <div className="md:hidden container-std -mt-6">
        <BookingWidget />
      </div>
    </>
  );
}
