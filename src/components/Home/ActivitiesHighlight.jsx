import { useTranslation } from "react-i18next";

/* tiny inline SVG icons (no extra deps) */
const icons = [
  // Thuya forest & wild beach
  () => (
    <svg viewBox="0 0 24 24" className="w-6 h-6">
      <path d="M12 2 7 11h3v9h4v-9h3L12 2Z" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  // Mogador / guided stroll
  () => (
    <svg viewBox="0 0 24 24" className="w-6 h-6">
      <path d="M4 20h16M6 20V8l6-4 6 4v12" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  // Hinterland / landscapes
  () => (
    <svg viewBox="0 0 24 24" className="w-6 h-6">
      <path d="M3 18l5-6 4 5 4-4 5 5H3Z" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  // Massage under argan trees
  () => (
    <svg viewBox="0 0 24 24" className="w-6 h-6">
      <circle cx="7" cy="17" r="2" fill="none" stroke="currentColor" strokeWidth="1.6"/>
      <path d="M10 17h9M7 15V7a3 3 0 0 1 3-3h0" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  // Intuitive painting
  () => (
    <svg viewBox="0 0 24 24" className="w-6 h-6">
      <path d="M3 21l6-2 9-9a2.8 2.8 0 1 0-4-4l-9 9-2 6Z" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  // Tell us your wishes
  () => (
    <svg viewBox="0 0 24 24" className="w-6 h-6">
      <path d="M21 15v4a2 2 0 0 1-2 2H6l-3 3V5a2 2 0 0 1 2-2h10" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M15 3h6v6" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M21 3 12 12" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
];

export default function ActivitiesHighlight() {
  const { t } = useTranslation();
  const activities = t("home.activities.items", { returnObjects: true });

  return (
    // Light green backdrop you chose earlier
    <section className="py-10 md:py-14" style={{ backgroundColor: '#DDE8D1' }}>
      <div className="container-std">
        <h2 className="font-serif text-3xl mb-8 text-center">
          {t("home.activities.title")}
        </h2>

        <div className="grid md:grid-cols-3 gap-5 md:gap-7">
          {activities.map((act, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <div
                key={idx}
                className="group relative overflow-hidden rounded-xl2 border border-olive/15 bg-white/90 backdrop-blur
                           shadow-soft hover:shadow-lg transition-all duration-300
                           hover:-translate-y-0.5"
              >
                {/* subtle gradient accent on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300
                                bg-[radial-gradient(120%_80%_at_0%_0%,rgba(94,107,78,0.08),transparent_60%)]" />

                <div className="relative p-5 md:p-6 text-center">
                  <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full
                                  bg-olive/10 text-olive">
                    <Icon />
                  </div>

                  <h3 className="font-serif text-lg md:text-xl font-semibold leading-snug">
                    {act.title}
                  </h3>

                  <p className="mt-2 italic text-charcoal/75 leading-relaxed">
                    {act.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
