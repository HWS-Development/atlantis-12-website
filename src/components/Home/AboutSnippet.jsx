import { useTranslation } from "react-i18next";

export default function AboutSnippet() {
  const { t } = useTranslation();

  return (
    <section className="container-std py-10 md:py-14 ">
      <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center">
        <div>
          <h2 className="font-serif text-2xl md:text-3xl mb-3">{t("home.about.title")}</h2>
          <p className="text-charcoal/80 leading-relaxed">{t("home.about.text")}</p>
        </div>
        <div>
          <div className="aspect-[4/3] rounded-xl2 overflow-hidden shadow-soft">
            <img
              src="/images/about-us.jpg"
              alt="Warm Moroccan interior with artisanal touches"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
