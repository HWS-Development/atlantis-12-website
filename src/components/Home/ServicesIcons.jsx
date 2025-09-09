import { useTranslation } from "react-i18next";

export default function ServicesMono() {
  const { t } = useTranslation();
  const items =
    t("home.services.items", {
      returnObjects: true,
      defaultValue: [
        { title: "Petit-déjeuner", desc: "Un régal sucré–salé" },
        { title: "Parc", desc: "Arbres et fleurs sauvages" },
        { title: "Piscine", desc: "Juste ce qu’il faut pour se rafraîchir" },
        { title: "Wi-Fi gratuit", desc: "Comme à la campagne…" },
        { title: "Conciergerie", desc: "À l’écoute de vos envies" },
        { title: "Table d’hôtes", desc: "Selon arrivages et inspirations" },
      ],
    }) || [];

  return (
    <section className="container-std section-tight">
      <h2 className="title-smallcaps text-center mb-6">{t("home.services.title", "Services")}</h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((svc) => (
          <div className="rounded-xl2 px-5 py-4 text-center bg-white border border-black/10 text-black/75">
          <div className="font-medium">{svc.title}</div>
          <div className="text-xs mt-1 opacity-80">{svc.desc}</div>
        </div>
        ))}
      </div>
    </section>
  );
}
