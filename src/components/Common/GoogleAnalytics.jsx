import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { COOKIE_CONSENT_EVENT, COOKIE_CONSENT_KEY } from "./CookieConsent";

const MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID;

export default function GoogleAnalytics() {
  const location = useLocation();
  const [hasConsent, setHasConsent] = useState(false);

  useEffect(() => {
    const updateConsent = (event) => {
      const value = event?.detail || window.localStorage.getItem(COOKIE_CONSENT_KEY);
      setHasConsent(value === "accepted");
    };

    updateConsent();
    window.addEventListener(COOKIE_CONSENT_EVENT, updateConsent);
    return () => window.removeEventListener(COOKIE_CONSENT_EVENT, updateConsent);
  }, []);

  useEffect(() => {
    if (!MEASUREMENT_ID || !hasConsent || document.querySelector(`script[data-ga4="${MEASUREMENT_ID}"]`)) return;

    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${MEASUREMENT_ID}`;
    script.dataset.ga4 = MEASUREMENT_ID;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    window.gtag = window.gtag || function gtag() {
      window.dataLayer.push(arguments);
    };
    window.gtag("js", new Date());
    window.gtag("config", MEASUREMENT_ID, { send_page_view: false });
  }, [hasConsent]);

  useEffect(() => {
    if (!MEASUREMENT_ID || !hasConsent || !window.gtag) return;
    window.gtag("event", "page_view", {
      page_path: `${window.location.pathname}${window.location.search}`,
      page_location: window.location.href,
      page_title: document.title,
    });
  }, [hasConsent, location.pathname, location.search]);

  return null;
}
