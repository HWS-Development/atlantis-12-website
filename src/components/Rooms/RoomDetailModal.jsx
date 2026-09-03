import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { OPEN_BOOKING_EVENT } from "../../data/rooms";

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

export default function RoomDetailModal({ room, onClose, isPage = false }) {
  const { t } = useTranslation();
  const [idx, setIdx] = useState(0);
  const artworkRef = useRef(null);

  useEffect(() => {
    const prev = document.body.style.overflow;
    if (!isPage) document.body.style.overflow = "hidden";
    const onKey = (e) => {
      if (e.key === "Escape") onClose?.();
      if (e.key === "ArrowLeft") setIdx((i) => (i - 1 + room.images.length) % room.images.length);
      if (e.key === "ArrowRight") setIdx((i) => (i + 1) % room.images.length);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      if (!isPage) document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [isPage, room, onClose]);

  if (!room) return null;
  const current = room.images[idx];
  const intro = t(`rooms.${room.slug}.intro`, room.intro);
  const equipLabels = (room.equip || []).map((id) => t(`rooms.equip.${id}`, id));
  const artworkStatusLabel =
    room.artworkStatus === "available"
      ? t("galleryPg.badgeAvailable", "Disponible à l'acquisition")
      : t("galleryPg.badgePermanent", "Collection permanente");

  const prev = () => setIdx((i) => (i - 1 + room.images.length) % room.images.length);
  const next = () => setIdx((i) => (i + 1) % room.images.length);
  const Heading = isPage ? "h1" : "h2";
  const scrollToArtwork = () =>
    artworkRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  const openBooking = () => {
    onClose?.();
    window.dispatchEvent(new Event(OPEN_BOOKING_EVENT));
  };

  return (
    <div
      className={isPage ? "bg-background min-h-screen pt-16" : "fixed inset-0 z-50 bg-background overflow-y-auto"}
      style={{ opacity: 1 }}
    >

      <div className="max-w-6xl mx-auto px-6 md:px-12 py-20 md:py-24">
        <button
          onClick={onClose}
          className="mb-8 flex items-center gap-2 border border-border hover:border-primary/50 bg-background px-4 py-2.5 font-body text-xs tracking-[0.2em] uppercase text-foreground/60 hover:text-primary transition-colors max-w-full"
        >
          <ChevronLeft className="w-3.5 h-3.5" />
          <span className="break-words">{t("modal.backToRooms", "Voir les autres chambres")}</span>
        </button>

        <div className="flex items-center gap-3 mb-4 flex-wrap pr-8">
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

        <Heading className="font-display text-4xl md:text-7xl text-foreground mb-8 break-words">
          {room.name}
        </Heading>

        <div className="grid md:grid-cols-2 gap-8 md:gap-16 mb-12">
          <div className="space-y-3 min-w-0">
            <div className="relative overflow-hidden aspect-[4/3]">
              <img
                key={current.src}
                src={current.src}
                alt={`${current.alt} - Atlantis 12, Essaouira`}
                className={`w-full h-full absolute inset-0 ${current.fit === "contain" ? "object-contain" : "object-cover"}`}
                style={{ objectPosition: current.position || "center", opacity: 1 }}
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
            <div className="flex gap-2 overflow-x-auto hide-scrollbar pr-2 pb-1">
              {room.images.map((img, i) => (
                <button
                  key={img.src}
                  onClick={() => setIdx(i)}
                  aria-label={img.alt}
                  className={`flex-shrink-0 w-16 h-12 overflow-hidden border-2 transition-colors ${
                    i === idx ? "border-primary" : "border-transparent"
                  }`}
                >
                  <img src={img.src} alt={img.alt} className="w-full h-full object-cover" style={{ objectPosition: img.position || "center" }} />
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col justify-between gap-8 min-w-0">
            <div className="space-y-4">
              <p className="font-body text-sm leading-relaxed text-[#333333] break-words">
                {intro}
              </p>
            </div>
            <div>
              <p className="font-body text-xs tracking-[0.2em] uppercase text-primary/60 mb-3">
                {t("modal.equipment", "Équipements")}
              </p>
              <div className="flex flex-wrap gap-2">
                {equipLabels.map((label, i) => (
                    <span key={i} className="font-body text-xs px-3 py-1 border border-border text-foreground/60 break-words max-w-full">
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
            <p className="font-body text-xs tracking-[0.25em] uppercase text-primary/70">
              {artworkStatusLabel}
            </p>
            <p className="font-body text-sm leading-relaxed text-foreground/60">
              {t(
                "modal.artworkDescription",
                "Chaque chambre d'Atlantis 12 abrite une ou plusieurs œuvres originales sélectionnées en dialogue direct avec l'espace."
              )}
            </p>
            <div className="w-10 h-px bg-border mt-4 mb-3" />
          </div>
        </div>

        <div className="mt-10 flex gap-4 items-center flex-wrap">
          <button
            type="button"
            onClick={openBooking}
            className="font-body text-xs tracking-[0.3em] uppercase text-background bg-primary px-8 py-3 hover:bg-secondary transition-colors duration-300 ml-auto"
          >
            {t("modal.bookRoom", "Réserver cette chambre")}
          </button>
        </div>
      </div>
    </div>
  );
}
