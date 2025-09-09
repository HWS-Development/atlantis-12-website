import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function RoomsIntroLegacy() {
  const { t } = useTranslation();
  return (
    <section className="container-std section">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="font-serif text-2xl md:text-3xl mb-3">
            {t("home.roomsIntro.title")}
          </h2>
          <p className="italic text-black/70">
            {t("home.roomsIntro.lead")}
          </p>
          <p className="mt-2 text-black/80">
            {t("home.roomsIntro.text")}
          </p>
          <div className="mt-5">
            <Link to="/rooms" className="btn-legacy btn-legacy-primary">
              {t("home.roomsIntro.cta")}
            </Link>
          </div>
        </div>

        <div className="rounded-xl2 overflow-hidden shadow-soft">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&q=80&auto=format&fit=crop"
            alt={t("home.roomsIntro.imgAlt")}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
