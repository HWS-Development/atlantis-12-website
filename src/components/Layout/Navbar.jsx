import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Navbar() {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const [submenu, setSubmenu] = useState(false);

  // --- sticky topbar states ---
  const { pathname } = useLocation();
  const isHome = pathname === "/";
  const [sticky, setSticky] = useState(false);

  // lock scroll when menu is open
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = open ? "hidden" : prev || "";
    return () => (document.body.style.overflow = prev || "");
  }, [open]);

  // sticky header for non-home pages
  useEffect(() => {
    if (isHome) {
      setSticky(false);
      return;
    }
    const onScroll = () => setSticky(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  /** BOOK BUTTON */
  const BookBtn = ({ className = "" }) => (
    <a
      href="https://atlantis-12-maison-d-hotes-et-d-art.hotelrunner.com/bv3/search"
      target="_blank"
      rel="noreferrer"
      className={`inline-flex items-center justify-center rounded-full px-5 py-2 hover:bg-white/90 text-black/80 font-semibold shadow-sm ${className}`}
    >
      {t("nav.book")}
    </a>
  );

  /** LANGUAGE SWITCHER */
  function LangPill({ className = "" }) {
    const { i18n } = useTranslation();
    const [openSel, setOpenSel] = useState(false);

    const langs = [
      { code: "fr", label: "FR", flag: "/images/frenchflagframed.svg" },
      { code: "en", label: "EN", flag: "/images/vecteezy_american-flag-on-white-background_4693397.svg" },
    ];
    const current = langs.find((l) => l.code === i18n.language) || langs[0];

    const changeLang = (lng) => {
      i18n.changeLanguage(lng);
      document.documentElement.lang = lng;
      setOpenSel(false);
    };

    return (
      <div className={`relative ${className}`}>
        <button
          onClick={() => setOpenSel((v) => !v)}
          className="flex items-center gap-1 bg-black/30 backdrop-blur rounded-full px-2 py-1"
        >
          <img src={current.flag} alt={current.label} className="w-10 h-5 rounded-full" />
          <svg className="w-5 h-5 text-white ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M6 9l6 6 6-6" />
          </svg>
        </button>

        {openSel && (
          <div className="absolute right-0 mt-1 w-28 bg-white rounded-lg shadow-lg overflow-hidden z-50">
            {langs.map((l) => (
              <button
                key={l.code}
                onClick={() => changeLang(l.code)}
                className="flex items-center gap-2 w-full px-3 py-2 text-sm hover:bg-gray-100"
              >
                <img src={l.flag} alt={l.label} className="w-5 h-5 rounded-full" />
                <span>{l.label}</span>
              </button>
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <>
      {/* ===== Floating controls on homepage ===== */}
      <div className="fixed inset-x-0 top-0 z-40 pointer-events-none relative">
        <div className="pointer-events-auto absolute right-20 top-5 flex items-center gap-3">
          <LangPill />
        </div>

        <div className="h-0">
          {/* BURGER BUTTON */}
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            className="pointer-events-auto absolute left-40 top-24 inline-grid place-items-center w-12 h-12 rounded-full hover:bg-white/85 shadow-md"
          >
            <svg width="28" height="28" viewBox="0 0 24 24" stroke="#000000" fill="none">
              <path strokeWidth="2" strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          </button>

          <div className="pointer-events-auto absolute right-40 top-24 flex items-center gap-3">
            <BookBtn />
          </div>
        </div>
      </div>

      {/* ===== Sticky topbar (non-home pages) ===== */}
      {!isHome && (
        <div
          className={`fixed inset-x-0 top-0 z-50 transition-transform duration-300 ${
            sticky ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          <div className="bg-[#8EA17D] opacity-90 text-white shadow-sm py-2">
            <div className="container-std h-14 flex items-center justify-between">
              {/* Burger */}
              <button
                type="button"
                onClick={() => setOpen(true)}
                aria-label="Open menu"
                className="inline-grid place-items-center w-10 h-10 rounded-full bg-white/85 hover:bg-white shadow"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" stroke="#2F2F2F" fill="none">
                  <path strokeWidth="2" strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
                </svg>
              </button>

              <Link to="/" className="flex items-center gap-2">
                <img src="/images/logo atlantis final - blanc sans mot.png" alt="Atlantis 12" className="h-9" />
              </Link>

              <div className="flex items-center gap-3">
                <BookBtn className="bg-white/90" />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ============ NEW LEFT PANEL MENU ============== */}
      <div
        className={`fixed inset-0 z-50 transition ${
          open ? "pointer-events-auto" : "pointer-events-none"
        }`}
        aria-hidden={!open}
      >
        {/* BACKDROP */}
        <div
          className={`absolute inset-0 bg-black/10 transition-opacity ${
            open ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setOpen(false)}
        />

        {/* LEFT PANEL BEIGE */}
        <div
          className={`absolute left-0 top-0 h-full w-[85vw] max-w-[420px] bg-[#F5EFDD] p-8 pt-16 transition-transform duration-300 ${
            open ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {/* Close Button */}
          <button
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            className="absolute top-6 left-6 inline-grid place-items-center w-10 h-10 text-black"
          >
            <svg width="28" height="28" viewBox="0 0 24 24" stroke="black" fill="none">
              <path strokeWidth="2" strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>

          {/* MENU CONTENT */}
          <nav className="mt-10 text-[#553D2A] font-light text-[20px] space-y-6">

            <MenuItem onClick={() => setOpen(false)} to="/">
              Bienvenue !
            </MenuItem>

            {/* DROPDOWN — LA MAISON D'HÔTES */}
            <div>
              <button
                onClick={() => setSubmenu((v) => !v)}
                className="flex items-center justify-between w-full"
              >
                <span>La maison d’hôtes</span>

                <svg
                  width="18"
                  height="18"
                  fill="none"
                  stroke="#553D2A"
                  strokeWidth="2"
                  className={`transition-transform ${submenu ? "rotate-180" : ""}`}
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </button>

              {submenu && (
                <div className="ml-6 mt-4 space-y-4 text-[18px]">
                  <MenuItem to="/rooms" onClick={() => setOpen(false)}>
                    HÉBERGEMENTS
                  </MenuItem>

                  <MenuItem to="/table" onClick={() => setOpen(false)}>
                    LA TABLE D’HÔTES
                  </MenuItem>

                 
                  <NavLink to="/activites" onClick={() => setOpen(false)} 
 className="block hover:opacity-60">
  ACTIVITÉS
</NavLink>
                </div>
              )}
            </div>

            <MenuItem to="/gallery" onClick={() => setOpen(false)}>
              La maison d’art
            </MenuItem>

            <MenuItem to="/contact" onClick={() => setOpen(false)}>
              Contact
            </MenuItem>

            <a
              href="https://atlantis-12-maison-d-hotes-et-d-art.hotelrunner.com/bv3/search"
              target="_blank"
              rel="noreferrer"
              onClick={() => setOpen(false)}
              className="block font-medium hover:opacity-60"
            >
              RÉSERVER
            </a>
          </nav>

          {/* INSTAGRAM ICON BOTTOM */}
          <div className="absolute bottom-10 left-10 flex items-center gap-6">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="inline-grid place-items-center w-12 h-12 rounded-full bg-black text-white"
            >
              <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
                <path d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm5 5a5 5 0 100 10 5 5 0 000-10zm6-1a1 1 0 100 2 1 1 0 000-2z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

/* ===== Helpers ===== */
function MenuItem({ to, children, onClick }) {
  return (
    <NavLink to={to} onClick={onClick} className="block hover:opacity-60">
      {children}
    </NavLink>
  );
}

function SocialIcon({ href, label, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="inline-grid place-items-center w-12 h-12 rounded-full bg-white text-black hover:bg-white/90 shadow"
    >
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        {children}
      </svg>
    </a>
  );
}
