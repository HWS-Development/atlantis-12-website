import { useState } from "react";
import { useTranslation } from "react-i18next";

/** Local images you can provide (recommended) */
const IMG_BY_KEY = {
  forest:    "/images/activities/thuya-forest.jpg",
  mogador:   "/images/activities/mogador-medina.jpg",
  hinterland:"/images/activities/hinterland.jpg",
  massage:   "/images/activities/massage.jpg",
  painting:  "/images/activities/painting.jpg",
  custom:    "/images/activities/your-wish.jpg",
};

/** Network fallbacks (kept as a safety net) */
const FALLBACKS = [
  "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1600&h=900&q=80",
  "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=1600&h=900&q=80",
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&h=900&q=80",
  "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1600&h=900&q=80",
  "https://images.unsplash.com/photo-1520975922284-8b456906c813?auto=format&fit=crop&w=1600&h=900&q=80",
  "https://images.unsplash.com/photo-1548786811-ff3a3c4b2ad6?auto=format&fit=crop&w=1600&h=900&q=80",
];

function Img({ src, alt, onFallback }) {
  const [loaded, setLoaded] = useState(false);
  return (
    <div className="relative w-full aspect-[16/10] bg-gray-100 overflow-hidden">
      {/* skeleton */}
      {!loaded && (
        <div className="absolute inset-0 animate-pulse bg-gray-200" />
      )}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onLoad={() => setLoaded(true)}
        onError={(e) => {
          if (onFallback) onFallback();
          // prevent infinite loop if fallback also fails
          if (!e.currentTarget.dataset.fallback) {
            e.currentTarget.dataset.fallback = "1";
            e.currentTarget.src = FALLBACKS[Math.floor(Math.random() * FALLBACKS.length)];
          }
        }}
        className={`absolute inset-0 w-full h-full object-cover transition-transform duration-700 ${
          loaded ? "group-hover:scale-105" : ""
        }`}
      />
      {/* dark gradient for legibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/15 to-transparent pointer-events-none" />
    </div>
  );
}

export default function ActivitiesHighlight() {
  const { t } = useTranslation();
  const raw = t("home.activities.items", { returnObjects: true }) ?? [];

  // Attach a stable key + image to each card
  const items = raw.map((a, i) => {
    const k = a.key || ["forest","mogador","hinterland","massage","painting","custom"][i] || `k${i}`;
    const img = a.img || a.image || IMG_BY_KEY[k] || FALLBACKS[i % FALLBACKS.length];
    return { ...a, key: k, img };
  });

  return (
    <section id="experience" className="container-std section-tight">
      <h2 className="uppercase tracking-[.22em] text-[26px] text-black/60 text-center mb-6 font-bold">
        {t("home.activities.title")}
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((act) => (
          <article
            key={act.key}
            className="bg-white rounded-xl2 shadow-soft hover:shadow-lg transition overflow-hidden group"
          >
            {/* Image */}
            <div className="relative">
              <Img
                src={act.img}
                alt={act.title}
                onFallback={() => {
                  // optional: analytics/logging can go here
                }}
              />
              {/* leaf badge */}
              <span className="absolute top-2 left-2 inline-flex w-9 h-9 items-center justify-center rounded-full bg-white/95 text-[#2F5F2E] shadow">
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <path d="M4 12c7-2 9-4 16-8-2 7-4 9-8 16-2-3-4-5-8-8z" />
                </svg>
              </span>
            </div>

            {/* Copy */}
            <div className="p-4">
              <h3 className="font-serif text-lg md:text-xl text-black mb-1">{act.title}</h3>
              <p className="text-sm text-black/75 leading-relaxed">{act.desc}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
