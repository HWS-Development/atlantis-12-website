import { useEffect, useRef, useState } from "react";
import LangLink from "../Common/LangLink";
import { useTranslation } from "react-i18next";

const LOGO = "/images/logo/logo-atlantis12-simplifie.png";

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [openMenu, setOpenMenu] = useState(false);
  const wrapRef = useRef(null);

  useEffect(() => {
    const onDoc = (e) => {
      if (!wrapRef.current?.contains(e.target)) setOpenMenu(false);
    };
    const onKey = (e) => e.key === "Escape" && setOpenMenu(false);
    document.addEventListener("mousedown", onDoc);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDoc);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  const switchLang = () => {
    const next = i18n.language?.startsWith("fr") ? "en" : "fr";
    const relativePath = window.location.pathname.replace(/^\/en(?=\/|$)/, "") || "/";
    const nextPath = next === "en" ? `/en${relativePath === "/" ? "" : relativePath}` : relativePath;
    window.location.assign(`${nextPath}${window.location.hash}`);
  };

  const navBtnBase =
    "font-body uppercase px-2 md:px-4 py-2 transition-all duration-300 border whitespace-nowrap " +
    "border-primary/60 text-primary hover:border-primary hover:bg-primary/10";

  const menuItems = [
    ["/la-maison", t("nav.house", "La Maison")],
    ["/chambres", t("nav.rooms", "Hébergements")],
    ["/table-dhotes", t("nav.table", "Table d'hôtes")],
    ["/experiences", t("nav.experiences", "Expériences")],
    ["/contact", t("nav.contact", "Contact")],
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-background border-b border-primary/10">
      <div className="flex items-center justify-between px-6 md:px-10 py-3 md:py-4">
        <LangLink
          to="/"
          className="flex items-center flex-shrink-0 bg-background -ml-2 mr-3 md:mr-0"
          aria-label="Atlantis 12 - accueil"
          onClick={() => window.scrollTo({ top: 0, left: 0, behavior: "smooth" })}
        >
          <img
            src={LOGO}
            alt="Atlantis 12"
            className="h-10 md:h-12 w-auto object-contain"
            style={{ mixBlendMode: "multiply" }}
          />
        </LangLink>

        <nav className="flex items-center gap-2 md:gap-4" ref={wrapRef}>
          <div className="relative">
            <button
              type="button"
              onClick={() => setOpenMenu((v) => !v)}
              aria-haspopup="menu"
              aria-expanded={openMenu}
              className={navBtnBase}
              style={{ fontSize: "10px", letterSpacing: "0.15em" }}
            >
              {t("nav.guesthouse", "Maison d'hôtes")}
              <span
                className={`ml-1.5 inline-block transition-transform duration-200 ${
                  openMenu ? "rotate-180" : ""
                }`}
              >
                ▾
              </span>
            </button>

            {openMenu && (
              <div
                role="menu"
                className="absolute right-0 mt-2 min-w-[220px] bg-background border border-primary/15 shadow-lg py-2 z-50"
              >
                {menuItems.map(([to, label]) => (
                  <LangLink
                    key={to}
                    to={to}
                    role="menuitem"
                    onClick={() => setOpenMenu(false)}
                    className="block px-5 py-2 font-body uppercase text-primary hover:bg-primary/5"
                    style={{ fontSize: "10px", letterSpacing: "0.15em" }}
                  >
                    {label}
                  </LangLink>
                ))}
              </div>
            )}
          </div>

          <LangLink
            to="/maison-dart"
            className={navBtnBase}
            style={{ fontSize: "10px", letterSpacing: "0.15em" }}
          >
            {t("nav.art", "Maison d'art")}
          </LangLink>

          <button
            type="button"
            onClick={switchLang}
            className="font-body tracking-[0.2em] uppercase px-2 md:px-3 py-2 transition-all duration-300 text-primary/60 hover:text-primary"
            style={{ fontSize: "10px" }}
            aria-label="Switch language"
          >
            {i18n.language?.startsWith("fr") ? "EN" : "FR"}
          </button>
        </nav>
      </div>
    </header>
  );
}
