// Room detail overlay — 1:1 with reference/rooms/<slug>.pretty.html
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { BOOK_URL } from "../../data/rooms";

const ChevronLeft = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="m15 18-6-6 6-6" />
  </svg>
);

const ChevronRight = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="m9 18 6-6-6-6" />
  </svg>
);

export default function RoomDetailModal({ room, onClose }) {
  const { t } = useTranslation();
  const [idx, setIdx] = useState(0);
  const artworkRef = useRef(null);

  // Body scroll lock + ESC close
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e) => {
      if (e.key === "Escape") onClose?.();
      if (e.key === "ArrowLeft") setIdx((i) => (i - 1 + room.images.length) % room.images.length);
      if (e.key === "ArrowRight") setIdx((i) => (i + 1) % room.images.length);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [room, onClose]);

  if (!room) return null;
  const current = room.images[idx];
  // Per-room copy from locales (rooms.<slug>.intro). Equipment items resolved
  // via their key ids: rooms.equip.<id> in locales.
  const intro = t(`rooms.${room.slug}.intro`, room.intro);
  const equipLabels = (room.equip || []).map((id) => t(`rooms.equip.${id}`, id));

  const prev = () => setIdx((i) => (i - 1 + room.images.length) % room.images.length);
  const next = () => setIdx((i) => (i + 1) % room.images.length);
  const scrollToArtwork = () =>
    artworkRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <div className="fixed inset-0 z-50 bg-background overflow-y-auto" style={{ opacity: 1 }}>
      <button
        onClick={onClose}
        className="fixed top-6 left-6 z-10 flex items-center gap-2 border border-border hover:border-primary/50 bg-background px-4 py-2.5 font-body text-xs tracking-[0.2em] uppercase text-foreground/60 hover:text-primary transition-colors"
      >
        <ChevronLeft className="w-3.5 h-3.5" />
        {t("modal.backToRooms", "Voir les autres chambres")}
      </button>

      <div className="max-w-6xl mx-auto px-6 md:px-12 py-20 md:py-24">
        {/* Eyebrow */}
        <div className="flex items-center gap-3 mb-4 flex-wrap">
          <p className="font-body text-xs tracking-[0.4em] uppercase text-primary">
            {t(`rooms.${room.slug}.category`, room.category)}
          </p>
          <p className="font-body text-xs tracking-[0.4em] uppercase text-primary/50">
            {t(`rooms.${room.slug}.adults`, room.adults)}
          </p>
          <p className="font-body text-xs tracking-[0.4em] uppercase text-primary/50">
            {room.area}
          </p>
        </div>

        {/* Title */}
        <h2 className="font-display text-5xl md:text-7xl text-foreground mb-8">
          {room.name}
        </h2>

        {/* Two-column: carousel + info */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 mb-12">
          {/* Carousel */}
          <div className="space-y-3">
            <div className="relative overflow-hidden aspect-[4/3]">
              <img
                key={current.src}
                src={current.src}
                alt={`${current.alt} — Atlantis 12, Essaouira`}
                className="w-full h-full object-cover absolute inset-0"
                style={{ objectPosition: "center", opacity: 1 }}
              />
              <button
                onClick={prev}
                aria-label={t("modal.prevImage", "Image précédente")}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center bg-background/70 hover:bg-background transition-colors"
              >
                <ChevronLeft className="w-4 h-4 text-foreground/70" />
              </button>
              <button
                onClick={next}
                aria-label={t("modal.nextImage", "Image suivante")}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center bg-background/70 hover:bg-background transition-colors"
              >
                <ChevronRight className="w-4 h-4 text-foreground/70" />
              </button>
            </div>
            {/* Thumbs */}
            <div className="flex gap-2 overflow-x-auto hide-scrollbar">
              {room.images.map((img, i) => (
                <button
                  key={img.src}
                  onClick={() => setIdx(i)}
                  aria-label={img.alt}
                  className={`flex-shrink-0 w-16 h-12 overflow-hidden border-2 transition-colors ${
                    i === idx ? "border-primary" : "border-transparent"
                  }`}
                >
                  <img src={img.src} alt={img.alt} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Info column */}
          <div className="flex flex-col justify-between gap-8">
            <div className="space-y-4">
              <p className="font-body text-sm leading-relaxed text-foreground/65">
                {intro}
              </p>
            </div>
            <div>
              <p className="font-body text-xs tracking-[0.2em] uppercase text-primary/60 mb-3">
                {t("modal.equipment", "Équipements")}
              </p>
              <div className="flex flex-wrap gap-2">
                {equipLabels.map((label, i) => (
                  <span
                    key={i}
                    className="font-body text-xs px-3 py-1 border border-border text-foreground/60"
                  >
                    {label}
                  </span>
                ))}
              </div>
            </div>
            <button
              onClick={scrollToArtwork}
              className="flex items-center gap-3 cursor-pointer group mt-2 text-left"
            >
              <div className="w-px h-6 bg-foreground/25 group-hover:bg-primary/60 transition-colors duration-300 flex-shrink-0" />
              <span className="font-body text-xs tracking-[0.25em] uppercase text-foreground/35 group-hover:text-primary transition-colors duration-300">
                {t("modal.discoverArtwork", "Découvrir l'œuvre de la chambre")}
              </span>
            </button>
          </div>
        </div>

        {/* Artwork */}
        <div
          ref={artworkRef}
          id="room-artwork"
          className="border-t border-border pt-10 grid md:grid-cols-3 gap-8 items-center"
        >
          <img
            src={room.artwork.src}
            alt={room.artwork.alt}
            width="600"
            height="800"
            loading="lazy"
            decoding="async"
            className="w-full aspect-[3/4] object-cover"
          />
          <div className="md:col-span-2 space-y-4">
            <p className="font-body text-xs tracking-[0.3em] uppercase text-primary">
              {t("modal.artworkLabel", "L'œuvre de la chambre")}
            </p>
            <p className="font-body text-sm leading-relaxed text-foreground/60">
              {t(
                "modal.artworkDescription",
                "Chaque chambre d'Atlantis 12 abrite une ou plusieurs œuvres originales sélectionnées en dialogue direct avec l'espace. Ces pièces font partie de la collection permanente et peuvent être acquises sur demande auprès de l'équipe."
              )}
            </p>
            <div className="w-10 h-px bg-border mt-4 mb-3" />
            <p className="font-body text-sm italic text-foreground/50">
              {t("modal.collection", "Collection permanente Atlantis 12")}
            </p>
          </div>
        </div>

        {/* CTA row */}
        <div className="mt-10 flex gap-4 items-center">
          {room.showConsulter && (
            <div className="font-body text-sm text-primary font-medium">
              {t("modal.consultUs", "Nous consulter")}
            </div>
          )}
          <a
            href={BOOK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-xs tracking-[0.3em] uppercase text-background bg-primary px-8 py-3 hover:bg-secondary transition-colors duration-300 ml-auto"
          >
            {t("modal.bookRoom", "Réserver cette chambre")}
          </a>
        </div>
      </div>
    </div>
  );
}
