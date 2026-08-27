import { useEffect } from "react";
import { useTranslation } from "react-i18next";

export default function I18nUrlSync() {
  const { i18n } = useTranslation();
  const language = window.location.pathname === "/en" || window.location.pathname.startsWith("/en/")
    ? "en"
    : "fr";

  useEffect(() => {
    if (!i18n.language?.startsWith(language)) i18n.changeLanguage(language);
  }, [i18n, language]);

  return null;
}
