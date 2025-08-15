import { useEffect } from "react";

export default function Lightbox({ items, index, onClose, onPrev, onNext }) {
  useEffect(() => {
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose, onPrev, onNext]);

  const item = items[index];

  return (
    <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-0 md:p-6"
         role="dialog" aria-modal="true" onClick={onClose}>
      <div className="bg-white md:rounded-xl2 shadow-soft w-full md:max-w-5xl max-h-[100vh] md:max-h-[90vh] flex flex-col"
           onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b sticky top-0 bg-white z-10">
          <button className="btn btn-outline btn-sm" onClick={onClose}>✕</button>
        </div>

        {/* Image */}
        <div className="relative">
          <div className="relative w-full h-[60vh] md:h-[70vh] bg-black/5">
            <img src={item?.src} className="w-full h-full object-contain bg-black" />
          </div>
          <button onClick={onPrev}
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 rounded-full px-3 py-2 shadow"
                  aria-label="Previous">‹</button>
          <button onClick={onNext}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 rounded-full px-3 py-2 shadow"
                  aria-label="Next">›</button>
        </div>
      </div>
    </div>
  );
}
