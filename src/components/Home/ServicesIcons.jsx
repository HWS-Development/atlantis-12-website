import { useTranslation } from "react-i18next";

/* --- Inline icons: clean, legible, monoline --- */
const icons = {
  breakfast: (
    <svg viewBox="0 0 24 24" className="w-6 h-6">
      <path d="M4 10h14a3 3 0 0 1 0 6H4zM4 10V6h11" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  park: (
    <svg viewBox="0 0 24 24" className="w-6 h-6">
      <path d="M12 3v18M6 12h12M8 6h8M7 21h10" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  pool: (
    <svg viewBox="0 0 24 24" className="w-6 h-6">
      <path d="M3 17c1.5 1 3 .8 4.5 0s3-1 4.5 0 3 1 4.5 0 3-1 4.5 0" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M7 6c3-2 7-2 10 0" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
    </svg>
  ),
  wifi: (
    <svg viewBox="0 0 24 24" className="w-6 h-6">
      <path d="M2 8a15 15 0 0 1 20 0M5 11a10 10 0 0 1 14 0M8 14a5 5 0 0 1 8 0" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/><circle cx="12" cy="18" r="1.6" fill="currentColor"/>
    </svg>
  ),
  concierge: (
    <svg viewBox="0 0 24 24" className="w-6 h-6">
      <path d="M3 20h18M4 20a8 8 0 0 1 16 0" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9 12h6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
    </svg>
  ),
  table: (
    <svg viewBox="0 0 24 24" className="w-6 h-6">
      <path d="M3 12h18M6 12v7M18 12v7M7 8h10l2 4H5l2-4Z" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
};

/* Try to guess the icon from the title, otherwise fallback to a dot */
const getIcon = (title="") => {
  const t = title.toLowerCase();
  if (t.includes("break") || t.includes("petit")) return icons.breakfast;
  if (t.includes("park") || t.includes("parc")) return icons.park;
  if (t.includes("pool") || t.includes("piscine")) return icons.pool;
  if (t.includes("wifi") || t.includes("wi-fi")) return icons.wifi;
  if (t.includes("concierge")) return icons.concierge;
  if (t.includes("table")) return icons.table;
  return <span className="w-2 h-2 rounded-full bg-current" />;
};

export default function ServicesIcons() {
  const { t } = useTranslation();
  const items = t("home.services.items", { returnObjects: true }) || [];

  return (
    <section className="container-std section-tight">
      <h2 className="uppercase tracking-[.22em] text-[26px] text-black/60 text-center mb-6">
        {t("home.services.title", "Services")}
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {items.map((svc, i) => (
          <div
            key={i}
            className="group relative rounded-xl2 border border-black/10 bg-white/90
                       p-5 text-center shadow-soft hover:shadow-lg transition
                       hover:-translate-y-0.5"
          >
            {/* Icon chip */}
            <div className="mx-auto mb-3 w-12 h-12 rounded-full bg-[#E9F1E4] text-[#2F5F2E]
                            flex items-center justify-center ring-1 ring-[#2F5F2E]/10">
              {getIcon(svc.title)}
            </div>

            <h3 className="font-medium text-[15px] text-black">
              {svc.title}
            </h3>
            {svc.desc && (
              <p className="text-[12.5px] text-black/65 mt-1 leading-relaxed">
                {svc.desc}
              </p>
            )}

            {/* subtle underline on hover */}
            <span className="absolute left-1/2 -translate-x-1/2 bottom-3 w-0 h-[2px] bg-[#2F5F2E] transition-all duration-300 group-hover:w-16" />
          </div>
        ))}
      </div>
    </section>
  );
}
