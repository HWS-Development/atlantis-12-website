import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function AboutSnippet() {
  const { t } = useTranslation();

  return (
    <section
      id="about"
      className="h-[46vh] md:h-screen relative overflow-hidden bg-[url('/images/food1.jpg')] bg-cover bg-center bg-no-repeat"
    >
      {/* hero background area (uses section bg) */}

      {/* white overlay card */}
      <div className="container-std flex justify-center items-center h-full">
        <div className="relative">
          <div className="mx-auto max-w-[760px] bg-white rounded-xl shadow-soft p-6 md:p-8 text-center">
            <h2 className="font-serif text-2xl md:text-3xl mb-2 font-bold">
              {t("home.about.title", "Une maison d’hôtes née d’un rêve")}
            </h2>
            <p className="text-sm md:text-base text-black/80 leading-relaxed">
              {t("home.about.text")}
            </p>

            {/* NEW: button to the full story page */}
            <div className="mt-5">
              <Link to="/about" className="btn-legacy btn-legacy-primary">
                {t("home.about.cta", "En savoir plus")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
