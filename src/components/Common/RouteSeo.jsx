import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { getSeoMetadata, normalizeSeoLanguage } from "../../seo/metadata";

const ROUTE_KEYS = {
  "/": "home",
  "/la-maison": "about",
  "/about": "about",
  "/chambres": "rooms",
  "/rooms": "rooms",
  "/table-dhotes": "table",
  "/table": "table",
  "/experiences": "experiences",
  "/activites": "experiences",
  "/contact": "contact",
  "/maison-dart": "gallery",
  "/gallery": "gallery",
  "/essaouira": "essaouira",
};

function ensureTag(selector, create) {
  let el = document.querySelector(selector);
  if (!el) {
    el = create();
    document.head.appendChild(el);
  }
  return el;
}

function setMeta(selector, attr, name, content) {
  if (!content) return;
  const el = ensureTag(selector, () => {
    const meta = document.createElement("meta");
    meta.setAttribute(attr, name);
    return meta;
  });
  el.setAttribute("content", content);
}

export default function RouteSeo() {
  const location = useLocation();
  const { i18n } = useTranslation();

  useEffect(() => {
    const routeKey = ROUTE_KEYS[location.pathname];
    if (!routeKey) return;

    const language = normalizeSeoLanguage(i18n.language);
    const metadata = getSeoMetadata(routeKey, language);
    if (!metadata) return;

    document.documentElement.lang = language;
    document.title = metadata.title;

    setMeta('meta[name="description"]', "name", "description", metadata.description);
    setMeta('meta[property="og:title"]', "property", "og:title", metadata.title);
    setMeta('meta[property="og:description"]', "property", "og:description", metadata.description);
    setMeta('meta[property="og:image"]', "property", "og:image", metadata.ogImage);
    setMeta('meta[property="og:url"]', "property", "og:url", metadata.canonical);
    setMeta('meta[name="twitter:title"]', "name", "twitter:title", metadata.title);
    setMeta('meta[name="twitter:description"]', "name", "twitter:description", metadata.description);
    setMeta('meta[name="twitter:image"]', "name", "twitter:image", metadata.ogImage);
  }, [i18n.language, location.pathname]);

  return null;
}
