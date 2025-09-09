import { useTranslation } from "react-i18next";

export default function AboutOverlay() {
  const { t } = useTranslation();

  return (
    <section id="about" className="relative overflow-hidden">
      {/* Background image like the old page */}
      <div className="h-[60vh] md:h-[80vh]">
        <img
          src="/images/food1.jpg"
          alt=""
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>

      {/* Centered white card */}
      <div className="container-std">
      <div className="relative -mt-24 md:-mt-28">  {/* was higher; bring it down a bit */}
      <div className="mx-auto max-w-[760px] bg-white rounded-xl shadow-soft p-6 md:p-8 text-center">
            <h2 className="font-serif text-2xl md:text-3xl mb-2">
              {t("home.about.title", "Une maison d’hôtes née d’un rêve")}
            </h2>
            <p className="text-sm md:text-base text-black/80 leading-relaxed">
              {t(
                "home.about.text",
                "Le rêve d’Asmae et de Lahcen — deux univers complémentaires, l’événementiel pour elle, la peinture et le jazz pour lui — de créer une parenthèse rare, accueillante, inspirante et profondément humaine."
              )}
            </p>
            {/* <div className="mt-5">
              <a href="#rooms" className="btn-legacy btn-legacy-primary">
                {t("home.about.cta", "En savoir plus")}
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
