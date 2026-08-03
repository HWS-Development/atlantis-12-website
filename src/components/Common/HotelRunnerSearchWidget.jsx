import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { BOOK_URL } from "../../data/rooms";

const MESSAGE_SOURCE = "hotelrunner-search-widget";

function HotelRunnerSearchFrame({ language }) {
  const { t } = useTranslation();
  const frameRef = useRef(null);
  const [status, setStatus] = useState("loading");
  const [height, setHeight] = useState(150);

  useEffect(() => {
    const handleMessage = (event) => {
      if (event.source !== frameRef.current?.contentWindow) return;
      if (event.data?.source !== MESSAGE_SOURCE) return;

      if (Number.isFinite(event.data.height)) {
        setHeight(Math.min(720, Math.max(140, Math.ceil(event.data.height))));
      }

      if (event.data.status === "ready" || event.data.status === "error") {
        setStatus(event.data.status);
      }
    };

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  const locale = language === "en" ? "en-US" : "fr-FR";
  const fallbackUrl = `${BOOK_URL}?locale=${locale}&currency=MAD`;

  return (
    <div
      className="relative mx-auto w-full max-w-[560px] min-h-[140px]"
      aria-busy={status === "loading"}
    >
      {status === "loading" && (
        <p
          role="status"
          className="absolute inset-0 z-10 flex items-center justify-center font-body text-sm text-foreground/60"
        >
          {t("bottomBar.widget.loading", "Chargement du moteur de réservation…")}
        </p>
      )}

      {status === "error" && (
        <div role="alert" className="py-5 text-center">
          <p className="font-body text-sm text-foreground/70">
            {t(
              "bottomBar.widget.error",
              "Le moteur de réservation ne peut pas être chargé pour le moment."
            )}
          </p>
          <a
            href={fallbackUrl}
            className="mt-4 inline-flex bg-primary px-6 py-3 font-body text-xs uppercase tracking-[0.2em] text-white transition-colors hover:bg-secondary"
          >
            {t("bottomBar.widget.fallback", "Ouvrir HotelRunner")}
          </a>
        </div>
      )}

      <iframe
        ref={frameRef}
        src={`/hotelrunner-search-widget.html?lng=${language}`}
        title={t("bottomBar.widget.title", "Moteur de réservation HotelRunner")}
        className={`w-full border-0 transition-opacity duration-200 ${
          status === "error"
            ? "hidden"
            : status === "ready"
              ? "block opacity-100"
              : "pointer-events-none block opacity-0"
        }`}
        style={{ height: `${height}px` }}
        scrolling="no"
        onError={() => setStatus("error")}
      />
    </div>
  );
}

export default function HotelRunnerSearchWidget() {
  const { i18n } = useTranslation();
  const language = i18n.resolvedLanguage?.startsWith("en") ? "en" : "fr";

  return <HotelRunnerSearchFrame key={language} language={language} />;
}
