import { useEffect, useState, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const LS_KEY = "retreat_seen_v1"; // change to reset

export default function RetreatModal() {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);

  // Open on first visit
  useEffect(() => {
    const seen = localStorage.getItem(LS_KEY);
    if (!seen) {
      setOpen(true);
      localStorage.setItem(LS_KEY, String(Date.now()));
    }
  }, []);

  // Allow global open from the sticky button
  useEffect(() => {
    const handler = () => setOpen(true);
    window.addEventListener("retreat:open", handler);
    return () => window.removeEventListener("retreat:open", handler);
  }, []);

  const close = useCallback(() => setOpen(false), []);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-black/50" onClick={close} />
      <div className="absolute inset-0 flex items-center justify-center p-4">
        <div className="relative w-full max-w-3xl bg-white rounded-xl shadow-2xl">
          <button
            onClick={close}
            className="absolute text-4xl right-4 top-4 text-black/50 hover:text-black"
            aria-label={t("retreat.close")}
          >
            ×
          </button>

          <div className="p-5 md:p-8 border rounded-lg mx-4 my-6">
            <div className="text-center">
              <div className="uppercase tracking-wide text-sm text-black/70 mb-1">
                {t("retreat.titleLine")}
              </div>
              <h2 className="font-serif text-3xl md:text-[40px] text-[#2F5F2E] font-semibold">
                {t("retreat.name")}
              </h2>

              <p className="mt-4 text-[#E0791F] font-semibold text-lg">
                {t("retreat.tagFr")}
              </p>
              <p className="italic text-[#E0791F] -mt-1">
                {t("retreat.tagEn")}
              </p>

              <p className="mt-4 text-black/85">
                {t("retreat.blurbFr")}
              </p>
              <p className="italic text-black/70">
                {t("retreat.blurbEn")}
              </p>
            </div>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
              <Link
                to="/retreat"
                className="inline-flex items-center justify-center border border-[#2F5F2E]
                           text-[#2F5F2E] rounded-md py-2.5 font-semibold"
              >
                {t("retreat.infoFr")}
              </Link>
              <Link
                to="/retreat"
                className="inline-flex items-center justify-center border border-[#2F5F2E]
                           text-[#2F5F2E] rounded-md py-2.5 font-semibold"
              >
                {t("retreat.infoEn")}
              </Link>
            </div>

            <div className="mt-3 text-center text-sm text-black/70">
              {t("retreat.limitedFr")}<br className="hidden md:block" />
              {t("retreat.limitedEn")}
            </div>

            <div className="mt-6 text-center">
              <a
                href='https://atlantis-12-maison-d-hotes-et-d-art.hotelrunner.com/bv3/search'
                target="_blank" rel="noreferrer"
                className="inline-flex items-center justify-center
                           bg-[#E79A2E] text-white rounded-md py-3 px-6 font-bold"
              >
                {t("retreat.book")}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
