// I18nUrlSync — two-way binds the active i18n language to the URL `?lng=` query param.
//
// Why: even though i18next persists language to localStorage, full-page reloads
// (or any nav that loses React state) can momentarily render with the fallback
// language before the detector kicks in. By making `?lng=` part of every URL we:
//   - guarantee the correct language is applied on the very first render
//   - allow shareable / deep-linkable URLs that preserve language
//   - survive any kind of internal navigation (Link, <a>, manual URL change)
//
// Behaviour:
//   - On mount and on every URL change: if `?lng=` is present and differs from
//     the current i18n language, switch i18n to it.
//   - If `?lng=` is absent, append the current i18n language to the URL (replace,
//     no history entry) so that subsequent navigation can copy it forward.
//   - On i18n.languageChanged: update `?lng=` in the URL (replace).

import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const SUPPORTED = ["fr", "en"];

function normalize(lng) {
  if (!lng) return null;
  const short = String(lng).toLowerCase().split("-")[0];
  return SUPPORTED.includes(short) ? short : null;
}

export default function I18nUrlSync() {
  const { i18n } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();

  // URL -> i18n  (and fill in URL if missing)
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const urlLng = normalize(params.get("lng"));
    const curLng = normalize(i18n.language) || "fr";

    if (urlLng && urlLng !== curLng) {
      i18n.changeLanguage(urlLng);
      return;
    }
    if (!urlLng) {
      params.set("lng", curLng);
      navigate(
        { pathname: location.pathname, search: `?${params.toString()}`, hash: location.hash },
        { replace: true }
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname, location.search]);

  // i18n -> URL
  useEffect(() => {
    const handler = (lng) => {
      const short = normalize(lng) || "fr";
      const params = new URLSearchParams(window.location.search);
      if (params.get("lng") === short) return;
      params.set("lng", short);
      navigate(
        {
          pathname: window.location.pathname,
          search: `?${params.toString()}`,
          hash: window.location.hash,
        },
        { replace: true }
      );
    };
    i18n.on("languageChanged", handler);
    return () => i18n.off("languageChanged", handler);
  }, [i18n, navigate]);

  return null;
}
