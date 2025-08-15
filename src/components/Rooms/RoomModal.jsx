import { useEffect, useState, useId } from "react";
import { useTranslation } from "react-i18next";
import { HOTELRUNNER_BOOK } from "../../data/rooms";

export default function RoomModal({ room, onClose }) {
  const [idx, setIdx] = useState(0);
  const { t } = useTranslation();
  const headingId = useId();

  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") setIdx((p) => (p + 1) % room.images.length);
      if (e.key === "ArrowLeft") setIdx((p) => (p - 1 + room.images.length) % room.images.length);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose, room.images.length]);

  const next = () => setIdx((p) => (p + 1) % room.images.length);
  const prev = () => setIdx((p) => (p - 1 + room.images.length) % room.images.length);

  return (
    <div
      className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-0 md:p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby={headingId}
      onClick={onClose}
    >
      <div
        className="bg-white md:rounded-xl2 shadow-soft w-full md:max-w-4xl max-h-[100vh] md:max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky header (keeps Close visible) */}
        <div className="flex items-center justify-between px-4 py-3 border-b sticky top-0 bg-white z-10">
          <h3 id={headingId} className="font-serif text-lg md:text-xl">{room.name}</h3>
          <button className="btn btn-outline btn-sm" onClick={onClose} aria-label={t("rooms.modal.close")}>
            {t("rooms.modal.close")}
          </button>
        </div>

        {/* Scrollable body */}
        <div className="overflow-y-auto">
          {/* Gallery with fixed heights per breakpoint (prevents overflow) */}
          <div className="relative w-full h-56 sm:h-64 md:h-80 bg-black/5">
            <img
              src={room.images[idx]}
              alt={`${room.name} photo ${idx + 1}`}
              className="w-full h-full object-cover"
            />
            <button
              onClick={prev}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 rounded-full px-3 py-2 shadow"
              aria-label="Previous image"
            >
              ‹
            </button>
            <button
              onClick={next}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 rounded-full px-3 py-2 shadow"
              aria-label="Next image"
            >
              ›
            </button>
          </div>

          {/* Content */}
          <div className="p-4 md:p-6 grid md:grid-cols-3 gap-6">
            <div className="md:col-span-2">
              <p className="text-charcoal/80">{room.description}</p>

              <div className="mt-4">
                <h4 className="font-semibold mb-2">{t("rooms.modal.amenities")}</h4>
                <ul className="flex flex-wrap gap-2">
                  {room.amenities.map((a, i) => (
                    <li key={i} className="px-3 py-1 rounded-full bg-sand-soft text-sm">
                      {a}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <aside className="space-y-3">
              <div className="bg-sand-soft rounded-xl2 p-3 text-sm">
                <div><strong>{t("rooms.modal.capacity")}:</strong> {room.capacity}</div>
                <div><strong>{t("rooms.modal.size")}:</strong> {room.size}</div>
                <div><strong>{t("rooms.modal.bed")}:</strong> {room.bed}</div>
              </div>
              <a
                href={HOTELRUNNER_BOOK}
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary w-full"
              >
                {t("rooms.modal.book")}
              </a>
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
}
