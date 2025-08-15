import { useTranslation } from "react-i18next";

/* simple inline SVG icons (no extra deps) */
const Icon = {
  breakfast: (
    <svg viewBox="0 0 24 24" className="w-7 h-7">
      <path d="M3 10h12a4 4 0 0 0 0-8H3v8Zm0 0v10m12-10v10M3 20h12M19 7v13m0-13h2a2 2 0 0 1 0 4h-2"
        fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  park: (
    <svg viewBox="0 0 24 24" className="w-7 h-7">
      <path d="M12 2 6 12h4v8h4v-8h4L12 2Z" fill="none" stroke="currentColor" strokeWidth="1.6"
        strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  pool: (
    <svg viewBox="0 0 24 24" className="w-7 h-7">
      <path d="M4 18c1.5-1 3.5-1 5 0s3.5 1 5 0 3.5-1 5 0M4 14c1.5-1 3.5-1 5 0s3.5 1 5 0 3.5-1 5 0M9 4v8m6-8v8"
        fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  wifi: (
    <svg viewBox="0 0 24 24" className="w-7 h-7">
      <path d="M2 8a16 16 0 0 1 20 0M5 11a11 11 0 0 1 14 0M8 14a6 6 0 0 1 8 0M12 18h.01"
        fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  concierge: (
    <svg viewBox="0 0 24 24" className="w-7 h-7">
      <path d="M4 18h16M5 18a7 7 0 0 1 14 0" fill="none" stroke="currentColor" strokeWidth="1.6"
        strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="12" cy="7" r="3" fill="none" stroke="currentColor" strokeWidth="1.6"/>
    </svg>
  ),
  table: (
    <svg viewBox="0 0 24 24" className="w-7 h-7">
      <path d="M3 10h18M6 10v10M18 10v10M9 10V6h6v4" fill="none" stroke="currentColor" strokeWidth="1.6"
        strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
};

export default function ServicesIcons() {
  const { t } = useTranslation();
  const items = t("home.services.items", { returnObjects: true });

  // map titles to icons in order
  const iconList = [Icon.breakfast, Icon.park, Icon.pool, Icon.wifi, Icon.concierge, Icon.table];

  return (
    <section className="container-std py-10 md:py-14">
      <h2 className="font-serif text-3xl mb-8">{t("home.services.title")}</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 md:gap-6">
        {items.map((srv, i) => (
          <div key={i} className="bg-sand-soft texture rounded-xl2 p-5 text-center shadow-soft hover:shadow-lg transition">
            <div className="mx-auto mb-3 text-olive">{iconList[i]}</div>
            <p className="text-sm font-medium text-charcoal/80">{srv.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
