import { useTranslation } from "react-i18next";

export default function ActivitiesLegacy() {
  const { t } = useTranslation();
  const activities = t("home.activities.items", { returnObjects: true });

  return (
    <section className="container-std section-tight">
  <h2 className="title-smallcaps text-center mb-6">{t("home.activities.title","Activités")}</h2>
  <div className="grid md:grid-cols-3 gap-y-8 gap-x-8 text-center">
        {activities.map((act, i) => (
          <div key={i} className="max-w-md mx-auto">
            <h3 className="font-serif text-lg md:text-xl font-semibold leading-snug">
              {act.title}
            </h3>
            <p className="mt-2 italic text-black/70 leading-relaxed">{act.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
