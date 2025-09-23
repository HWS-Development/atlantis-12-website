import { useTranslation } from "react-i18next";

export default function ServicesIcons() {
  const { t } = useTranslation();
  const items = t("home.services.items", { returnObjects: true }) || [];

  return (
    <section className="container-std section-tight">
      <h2 className="uppercase tracking-[.22em] text-[26px] text-black/60 text-center mb-6 font-bold">
        {t("home.services.title")}
      </h2>

      <ul role="list" className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {items.map((s) => (
          <li key={s.key}>
            <button
              type="button"
              className="
                w-full rounded-xl2 bg-white shadow-soft ring-1 ring-black/[.05]
                hover:shadow-lg hover:ring-[#5E6B4E]/20
                focus:outline-none focus-visible:ring-2 focus-visible:ring-[#5E6B4E]
                transition
              "
            >
              <div className="flex flex-col items-center gap-3 p-5">
                <span
                  aria-hidden
                  className="inline-grid place-content-center w-11 h-11 rounded-full
                             bg-[#E8F0E2] ring-1 ring-[#5E6B4E]/15"
                >
                  <span className="text-lg">{s.icon}</span>
                </span>
                <p className="text-sm font-medium text-black/80 text-center">{s.title}</p>
              </div>
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}
