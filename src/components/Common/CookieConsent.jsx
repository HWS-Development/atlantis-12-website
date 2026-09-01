import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import LangLink from "./LangLink";

export const COOKIE_CONSENT_KEY = "atlantis-cookie-consent";
export const COOKIE_CONSENT_EVENT = "atlantis:cookie-consent";

const MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID;

export default function CookieConsent() {
  const { t } = useTranslation();
  const [consent, setConsent] = useState(undefined);

  useEffect(() => {
    setConsent(window.localStorage.getItem(COOKIE_CONSENT_KEY));
  }, []);

  if (!MEASUREMENT_ID || consent !== null) return null;

  const choose = (value) => {
    window.localStorage.setItem(COOKIE_CONSENT_KEY, value);
    window.dispatchEvent(new CustomEvent(COOKIE_CONSENT_EVENT, { detail: value }));
    setConsent(value);
  };

  return (
    <aside
      className="fixed inset-x-4 bottom-20 md:bottom-6 md:left-auto md:right-6 z-[100] max-w-lg bg-background border border-primary/30 shadow-2xl p-5 md:p-6"
      aria-label={t("cookieConsent.label")}
    >
      <p className="font-display text-xl text-foreground mb-2">{t("cookieConsent.title")}</p>
      <p className="font-body text-sm leading-relaxed text-foreground/75">
        {t("cookieConsent.text")}{" "}
        <LangLink to="/politique-de-confidentialite" className="underline underline-offset-2 hover:text-primary">
          {t("cookieConsent.learnMore")}
        </LangLink>
      </p>
      <div className="flex flex-wrap gap-3 mt-5">
        <button type="button" className="btn-primary px-5 py-2" onClick={() => choose("accepted")}>
          {t("cookieConsent.accept")}
        </button>
        <button type="button" className="btn-outline-primary px-5 py-2" onClick={() => choose("declined")}>
          {t("cookieConsent.decline")}
        </button>
      </div>
    </aside>
  );
}
