import { useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import Lightbox from "../components/Gallery/Lightbox";
import { galleryItems } from "../data/gallery";

const CATS = ["all", "exteriors", "rooms", "pool", "dining", "nature"];

export default function Gallery() {
  const { t } = useTranslation();
  const [cat, setCat] = useState("all");
  const [lbIndex, setLbIndex] = useState(null); // null = closed

  const filtered = useMemo(
    () => (cat === "all" ? galleryItems : galleryItems.filter((i) => i.category === cat)),
    [cat]
  );

  // Open by hash (e.g., /gallery#g-room-2)
  useEffect(() => {
    const openFromHash = () => {
      const id = window.location.hash.replace("#", "");
      if (!id) return setLbIndex(null);
      const idx = filtered.findIndex((i) => i.id === id);
      setLbIndex(idx >= 0 ? idx : null);
    };
    openFromHash();
    window.addEventListener("hashchange", openFromHash);
    return () => window.removeEventListener("hashchange", openFromHash);
  }, [filtered]);

  const openAt = (idx) => {
    setLbIndex(idx);
    const id = filtered[idx].id;
    if (window.location.hash !== `#${id}`) history.pushState(null, "", `#${id}`);
  };
  const close = () => {
    setLbIndex(null);
    if (window.location.hash) history.replaceState(null, "", " ");
  };
  const next = () => setLbIndex((p) => (p === null ? 0 : (p + 1) % filtered.length));
  const prev = () => setLbIndex((p) => (p === null ? 0 : (p - 1 + filtered.length) % filtered.length));

  return (
    <section className="container-std py-10 md:py-14">
      {/* Header */}
      <header className="mb-6">
        <h1 className="font-serif text-3xl md:text-4xl">{t("gallery.title")}</h1>
        <p className="text-charcoal/75 mt-2">{t("gallery.subtitle")}</p>
      </header>

      {/* Filters */}
      <div className="flex flex-wrap gap-2 mb-6">
        {CATS.map((c) => (
          <button
            key={c}
            onClick={() => { setCat(c); close(); }}
            className={`btn btn-sm ${cat === c ? "btn-primary" : "btn-outline"}`}
          >
            {t(`gallery.filters.${c}`)}
          </button>
        ))}
      </div>

      {/* Masonry grid (CSS columns) */}
      {filtered.length === 0 ? (
        <div className="text-charcoal/70">{t("gallery.empty")}</div>
      ) : (
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 [column-fill:_balance]">
          {filtered.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => openAt(idx)}
              className="mb-4 w-full break-inside-avoid group relative"
              aria-label={`Open `}
            >
              <img
                src={item.src}
                className="w-full h-auto rounded-xl2 shadow-soft transition-transform duration-500 group-hover:scale-[1.01]"
              />
              <div className="absolute inset-0 rounded-xl2 bg-black/0 group-hover:bg-black/10 transition" />
            </button>
          ))}
        </div>
      )}

      {/* Lightbox */}
      {lbIndex !== null && (
        <Lightbox items={filtered} index={lbIndex} onClose={close} onPrev={prev} onNext={next} />
      )}
    </section>
  );
}
