import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function WhyBookBox() {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);

  if (open) {
    return (
      <div
        className="fixed left-3 bottom-3 z-40 bg-[#c48a55] text-white rounded-xl shadow-xl px-6 py-5
                   max-w-sm w-[320px]"
      >
        <button
          type="button"
          onClick={() => setOpen(false)}
          aria-label={t("whyBookBox.close")}
          className="absolute top-3 right-4 text-2xl leading-none"
        >
          ×
        </button>
        <h2 className="text-center font-semibold tracking-wide mb-4">
          {t("whyBookBox.titleLine1")}
          <br />
          {t("whyBookBox.titleLine2")}
        </h2>
        <ul className="space-y-1 text-sm text-center">
          <li>{t("whyBookBox.items.bestPrice")}</li>
          <li>{t("whyBookBox.items.fullBoard")}</li>
          <li>{t("whyBookBox.items.secure")}</li>
          <li>{t("whyBookBox.items.service")}</li>
        </ul>
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={() => setOpen(true)}
      className="fixed left-3 bottom-3 z-40 bg-[#c48a55] text-white rounded-xl shadow-xl
                 px-5 py-3 flex items-center gap-3"
      aria-label={t("whyBookBox.open")}
    >
      <div className="text-xs font-semibold text-left leading-tight">
        {t("whyBookBox.titleLine1")}
        <br />
        {t("whyBookBox.titleLine2")}
      </div>
      <span className="text-2xl leading-none font-semibold">+</span>
    </button>
  );
}

