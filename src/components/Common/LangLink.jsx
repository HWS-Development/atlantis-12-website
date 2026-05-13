// LangLink — drop-in replacement for react-router-dom's <Link> that preserves
// the current `?lng=` query parameter so the active language follows the user
// across SPA navigation (and survives any accidental full reloads).
//
// Usage: same API as <Link>. `to` may be a string or an object {pathname, search, hash}.

import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

const SUPPORTED = ["fr", "en"];
const normalize = (lng) => {
  if (!lng) return null;
  const s = String(lng).toLowerCase().split("-")[0];
  return SUPPORTED.includes(s) ? s : null;
};

export default function LangLink({ to, ...rest }) {
  const { i18n } = useTranslation();
  const location = useLocation();
  const lng =
    normalize(new URLSearchParams(location.search).get("lng")) ||
    normalize(i18n.language) ||
    "fr";

  let target;
  if (typeof to === "string") {
    // split off existing query/hash
    const [pathPart, hashPart] = to.split("#");
    const [pathname, searchStr] = pathPart.split("?");
    const params = new URLSearchParams(searchStr || "");
    if (!params.get("lng")) params.set("lng", lng);
    target = {
      pathname,
      search: `?${params.toString()}`,
      hash: hashPart ? `#${hashPart}` : "",
    };
  } else {
    const params = new URLSearchParams((to.search || "").replace(/^\?/, ""));
    if (!params.get("lng")) params.set("lng", lng);
    target = { ...to, search: `?${params.toString()}` };
  }

  return <Link to={target} {...rest} />;
}
