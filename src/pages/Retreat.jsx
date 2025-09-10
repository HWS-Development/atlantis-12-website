import { useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";

export default function Retreat() {
  const { t, i18n } = useTranslation();

  // default tab based on current site language
  const defaultTab = i18n.language?.toLowerCase().startsWith("fr") ? "fr" : "en";
  const [tab, setTab] = useState(defaultTab);

  // PDF URLs from i18n (set them below in JSON)
  const pdfFr = t("retreatPage.pdf.fr");
  const pdfEn = t("retreatPage.pdf.en");

  const pdfUrl = useMemo(() => (tab === "fr" ? pdfFr : pdfEn), [tab, pdfFr, pdfEn]);

  useEffect(() => {
    document.title = t("retreatPage.seoTitle");
  }, [t]);

  return (
    <div className="min-h-screen">
      {/* Optional header/hero */}
      <header className="container-std section-tight">
        <h1 className="font-serif text-2xl md:text-3xl">{t("retreatPage.title")}</h1>
        <p className="text-black/70">{t("retreatPage.subtitle")}</p>

        {/* Language tabs */}
        <div className="mt-4 inline-flex rounded-full border border-black/15 bg-white shadow-soft">
          <button
            onClick={() => setTab("fr")}
            className={`px-4 py-2 text-sm rounded-full transition ${
              tab === "fr" ? "bg-[#2F5F2E] text-white" : "text-black/70 hover:bg-black/5"
            }`}
          >
            Français
          </button>
          <button
            onClick={() => setTab("en")}
            className={`px-4 py-2 text-sm rounded-full transition ${
              tab === "en" ? "bg-[#2F5F2E] text-white" : "text-black/70 hover:bg-black/5"
            }`}
          >
            English
          </button>
        </div>
      </header>

      {/* PDF viewer */}
      <section className="container-std section-tight">
        <div className="rounded-xl2 overflow-hidden border border-black/10 shadow-soft bg-white">
          {/* try iframe first */}
          <iframe
            title={t("retreatPage.iframeTitle")}
            src={pdfUrl}
            className="w-full h-[82vh]"
          />
          {/* fallback */}
          <div className="p-4 text-sm text-black/70">
            {t("retreatPage.pdfFallback")}{" "}
            <a
              href={pdfUrl}
              target="_blank"
              rel="noreferrer"
              className="text-[#2F5F2E] underline"
            >
              {t("retreatPage.openInNew")}
            </a>
          </div>
        </div>

        {/* action buttons */}
        <div className="mt-4 flex flex-wrap gap-3">
          <a
            href={pdfUrl}
            download
            className="btn-legacy btn-legacy-primary"
          >
            {t("retreatPage.download")}
          </a>
          <a
            href={t("retreatPage.bookLink")}
            target="_blank"
            rel="noreferrer"
            className="btn-legacy btn-legacy-secondary"
          >
            {t("retreatPage.bookCta")}
          </a>
        </div>
      </section>
    </div>
  );
}
