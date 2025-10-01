import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Navbar() {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);

  // --- NEW: sticky topbar states ---
  const { pathname } = useLocation();
  const isHome = pathname === "/";
  const [sticky, setSticky] = useState(false);

  // lock scroll when menu is open
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = open ? "hidden" : prev || "";
    return () => (document.body.style.overflow = prev || "");
  }, [open]);

  // --- NEW: enable sticky header on non-home pages ---
  useEffect(() => {
    if (isHome) {
      setSticky(false);
      return;
    }
    const onScroll = () => setSticky(window.scrollY > 10);
    onScroll(); // run once on mount/route change
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

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

  function LangPill({ className = "" }) {
    const { i18n } = useTranslation();
    const [openSel, setOpenSel] = useState(false);

    const langs = [
      { code: "fr", label: "FR", flag: "/images/frenchflagframed.svg" },
      { code: "en", label: "EN", flag: "/images/vecteezy_american-flag-on-white-background_4693397.svg" }, // placeholder
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
      {/* ===== Existing floating controls over hero (KEEP) ===== */}
      <div className="fixed inset-x-0 top-0 z-40 pointer-events-none relative">
        <div className="pointer-events-auto absolute right-20 top-5 flex items-center gap-3">
          <LangPill />
        </div>
        <div className="h-0">
          {/* Burger (top-left) */}
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

          {/* Right-side actions */}
          <div className="pointer-events-auto absolute right-40 top-24 flex items-center gap-3">
            <BookBtn />
          </div>
        </div>
      </div>

      {/* ===== NEW: Sticky topbar for non-home pages ===== */}
      {!isHome && (
        <div
          className={`fixed inset-x-0 top-0 z-50 transition-transform duration-300 ${
            sticky ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          <div className="bg-[#8EA17D] opacity-90 text-white shadow-sm py-2 ">
            <div className="container-std h-14 flex items-center justify-between">
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
                {/* <LangPill /> */}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ===== Overlay + LEFT MENU PANEL (unchanged) ===== */}
      <div
        className={`fixed inset-0 z-50 transition ${open ? "pointer-events-auto" : "pointer-events-none"}`}
        aria-hidden={!open}
      >
        <div
          className={`absolute inset-0 bg-black/20 transition-opacity ${open ? "opacity-100" : "opacity-0"}`}
          onClick={() => setOpen(false)}
        />

        <div
          className={`absolute bg-white/90 left-0 pt-16 h-full w-[86vw] max-w-[460px] p-6 transition-transform duration-300 ${
            open ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="bg-[#8EA17D] text-white w-full p-6 md:p-8 shadow-xl">
            <nav className="space-y-3">
              <MenuItem onClick={() => setOpen(false)} to="/">
                {t("nav.home").toUpperCase()}
              </MenuItem>
              <a href="/#about" onClick={() => setOpen(false)} className="block text-md md:text-lg font-semibold tracking-wide">
                {t("nav.story").toUpperCase()}
              </a>
              <a href="/#rooms" onClick={() => setOpen(false)} className="block text-md md:text-lg font-semibold tracking-wide">
                {t("nav.rooms").toUpperCase()}
              </a>
              <NavLink to="/gallery" onClick={() => setOpen(false)} className="block text-md md:text-lg font-semibold tracking-wide">
                {t("nav.gallery").toUpperCase()}
              </NavLink>
              <a href="/#experience" onClick={() => setOpen(false)} className="block text-md md:text-lg font-semibold tracking-wide">
                {t("nav.experiences").toUpperCase()}
              </a>
              <NavLink to="/table" onClick={() => setOpen(false)} className="block text-md md:text-lg font-semibold tracking-wide">
                {t("nav.table")}
              </NavLink>
              <NavLink to="/contact" onClick={() => setOpen(false)} className="block text-md md:text-lg font-semibold tracking-wide">
                {t("nav.contact").toUpperCase()}
              </NavLink>
              <a
                href="https://atlantis-12-maison-d-hotes-et-d-art.hotelrunner.com/bv3/search"
                target="_blank"
                rel="noreferrer"
                className="block text-md md:text-lg font-semibold tracking-wide"
                onClick={() => setOpen(false)}
              >
                {t("nav.book").toUpperCase()}
              </a>
            </nav>
          </div>

          <div className="mt-6 flex items-center gap-6 pl-2">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="inline-grid place-items-center w-12 h-12 rounded-full bg-white text-black hover:bg-white/90 shadow"
              aria-label="Instagram"
            >
              {/* (…instagram svg…) */}
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm5 5a5 5 0 100 10 5 5 0 000-10zm6-1a1 1 0 100 2 1 1 0 000-2z"/></svg>
            </a>
            <SocialIcon href="https://facebook.com" label="Facebook">
              <path d="M14 9h3V6h-3a4 4 0 00-4 4v3H7v3h3v8h3v-8h3l1-3h-4v-3a1 1 0 011-1z" />
            </SocialIcon>
          </div>

          <button
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            className="absolute left-[calc(86vw_>_460px?460px:86vw)] top-[5px] right-6 ml-4 inline-grid place-items-center w-12 h-12 rounded-full bg-white/85 hover:bg-white shadow-md"
          >
            <svg width="28" height="28" viewBox="0 0 24 24" stroke="#2F2F2F" fill="none">
              <path strokeWidth="2" strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}

/** Helpers */
function MenuItem({ to, children, onClick }) {
  return (
    <NavLink to={to} onClick={onClick} className="block text-md md:text-lg font-semibold tracking-wide">
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
