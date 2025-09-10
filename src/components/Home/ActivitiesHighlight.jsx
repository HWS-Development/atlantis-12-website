import { useTranslation } from "react-i18next";

export default function ActivitiesHighlight() {
  const { t } = useTranslation();
  const items = t("home.activities.items", { returnObjects: true });

  return (
    <section id="experience" className="container-std section-tight">
      <h2 className="uppercase tracking-[.22em] text-[26px] text-black/60 text-center mb-6">
        {t("home.activities.title")}
      </h2>

      <div className="grid md:grid-cols-3 gap-y-10 gap-x-10">
        {items.map((act, idx) => (
          <div key={idx} className="text-center">
            <div className="mx-auto mb-3 w-9 h-9 rounded-full border border-[#2F5F2E]/30
                            text-[#2F5F2E] flex items-center justify-center">
              {/* minimal leaf marker */}
              <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.6">
                <path d="M4 12c7-2 9-4 16-8-2 7-4 9-8 16-2-3-4-5-8-8z" />
              </svg>
            </div>
            <h3 className="font-serif text-[18px] font-semibold text-black">
              {act.title}
            </h3>
            <p className="italic text-[13px] text-black/70 mt-2 leading-relaxed">
              {act.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
