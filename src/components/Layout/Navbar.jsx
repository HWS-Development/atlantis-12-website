import { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [open, setOpen] = useState(false);

  // lock scroll when mobile menu is open
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = open ? "hidden" : prev || "";
    return () => (document.body.style.overflow = prev || "");
  }, [open]);

  const LangSwitch = ({ className = "" }) => (
    <div className={`flex items-center gap-1 bg-white/15 rounded-full px-2 py-1 ${className}`}>
      <button
        onClick={() => {
          i18n.changeLanguage("fr");
          document.documentElement.lang = "fr";
        }}
        className={`text-white text-xs px-2 py-0.5 rounded-full ${
          i18n.language === "fr" ? "bg-white/25" : ""
        }`}
        aria-label="Français"
      >
        🇫🇷 FR
      </button>
      <button
        onClick={() => {
          i18n.changeLanguage("en");
          document.documentElement.lang = "en";
        }}
        className={`text-white text-xs px-2 py-0.5 rounded-full ${
          i18n.language === "en" ? "bg-white/25" : ""
        }`}
        aria-label="English"
      >
        🇬🇧 EN
      </button>
    </div>
  );

  return (
    <header className="legacy-green text-white">
      <div className="container-std h-20 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src="/images/logo-1.avif" alt="Atlantis 12" className="h-12" />
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-4">
          <NavLink to="/" className="nav-link-legacy">
            {t("nav.home")}
          </NavLink>

          {/* Story & Experiences are in-page anchors on Home */}
          <a href="/#about" className="nav-link-legacy">
            {t("nav.story")}
          </a>
          <a href="/#experience" className="nav-link-legacy">
            {t("nav.experiences")}
          </a>

          <NavLink to="/rooms" className="nav-link-legacy">
            {t("nav.rooms")}
          </NavLink>
          <NavLink to="/gallery" className="nav-link-legacy">
            {t("nav.gallery")}
          </NavLink>
          <NavLink to="/contact" className="nav-link-legacy">
            {t("nav.contact")}
          </NavLink>

          <a
            href="https://atlantis-12-maison-d-hotes-et-d-art.hotelrunner.com/bv3/search"
            target="_blank"
            rel="noreferrer"
            className="btn-legacy btn-legacy-primary ml-2"
          >
            {t("nav.book")}
          </a>

          <LangSwitch className="ml-3" />
        </nav>

        {/* MOBILE HAMBURGER */}
        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center rounded-md p-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
          aria-controls="mobile-menu"
          aria-expanded={open}
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          {/* icon */}
          {!open ? (
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeWidth="2" strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          ) : (
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeWidth="2" strokeLinecap="round" d="M6 6l12 12M18 6l-12 12" />
            </svg>
          )}
        </button>
      </div>

      {/* MOBILE OVERLAY + PANEL */}
      <div
        id="mobile-menu"
        className={`md:hidden fixed inset-0 z-50 transition ${
          open ? "pointer-events-auto" : "pointer-events-none"
        }`}
        aria-hidden={!open}
      >
        {/* backdrop */}
        <div
          className={`absolute inset-0 bg-black/40 transition-opacity ${
            open ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setOpen(false)}
        />
        {/* slide-over panel */}
        <div
          className={`absolute top-0 right-0 h-full w-[84%] max-w-xs legacy-green text-white shadow-xl transition-transform duration-300
            ${open ? "translate-x-0" : "translate-x-full"}`}
        >
          <div className="h-20 px-5 flex items-center justify-end border-b border-white/15">
            {/* <Link to="/" onClick={() => setOpen(false)} className="flex items-center gap-2">
              <img src="/images/logo-1.avif" alt="Atlantis 12" className="h-10" />
            </Link> */}
            <LangSwitch />
          </div>

          <nav className="px-5 py-6 space-y-2">
            <Link
              to="/"
              onClick={() => setOpen(false)}
              className="block nav-link-legacy !text-base"
            >
              {t("nav.home")}
            </Link>
            <a
              href="/#about"
              onClick={() => setOpen(false)}
              className="block nav-link-legacy !text-base"
            >
              {t("nav.story")}
            </a>
            <a
              href="/#experience"
              onClick={() => setOpen(false)}
              className="block nav-link-legacy !text-base"
            >
              {t("nav.experiences")}
            </a>
            <Link
              to="/rooms"
              onClick={() => setOpen(false)}
              className="block nav-link-legacy !text-base"
            >
              {t("nav.rooms")}
            </Link>
            <Link
              to="/gallery"
              onClick={() => setOpen(false)}
              className="block nav-link-legacy !text-base"
            >
              {t("nav.gallery")}
            </Link>
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="block nav-link-legacy !text-base"
            >
              {t("nav.contact")}
            </Link>

            <a
              href="https://atlantis-12-maison-d-hotes-et-d-art.hotelrunner.com/bv3/search"
              target="_blank"
              rel="noreferrer"
              className="btn-legacy btn-legacy-primary w-full mt-4"
              onClick={() => setOpen(false)}
            >
              {t("nav.book")}
            </a>
          </nav>

          {/* small footer (optional) */}
          <div className="mt-auto px-5 pb-6 text-xs text-white/80">
            © {new Date().getFullYear()} Atlantis 12
          </div>
        </div>
      </div>
    </header>
  );
}
