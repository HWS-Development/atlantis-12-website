import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

const BOOK_URL = "https://atlantis-12-maison-d-hotes-et-d-art.hotelrunner.com/bv3/search";

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [open, setOpen] = useState(false);

  const changeLang = (lng) => i18n.changeLanguage(lng);

  const linkCls = ({ isActive }) =>
    `px-3 py-2 rounded-md ${isActive ? "text-olive font-semibold" : "text-charcoal/80 hover:text-olive"}`;

  return (
    <header className="bg-white/80 backdrop-blur sticky top-0 z-50 border-b border-sand">
      <div className="container-std flex items-center justify-between h-16">
        <Link to="/" className="font-serif text-2xl"> <img src="/images/logo-1.avif" width={'120'} alt="" srcset="" /> </Link>

        <nav className="hidden md:flex items-center gap-1">
          <NavLink to="/" className={linkCls}>{t("nav.home")}</NavLink>
          <NavLink to="/rooms" className={linkCls}>{t("nav.rooms")}</NavLink>
          <NavLink to="/gallery" className={linkCls}>{t("nav.gallery")}</NavLink>
          <NavLink to="/contact" className={linkCls}>{t("nav.contact")}</NavLink>
        </nav>

        <div className="hidden md:flex items-center gap-2">
          <button onClick={() => changeLang("fr")} className="btn btn-ghost text-sm">FR</button>
          <button onClick={() => changeLang("en")} className="btn btn-ghost text-sm">EN</button>
          <a href={BOOK_URL} target="_blank" rel="noreferrer" className="btn btn-primary text-sm">
            {t("nav.book")}
          </a>
        </div>

        {/* Mobile */}
        <button className="md:hidden px-3 py-2" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          ☰
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-sand">
          <div className="container-std py-3 space-y-2">
            <NavLink to="/" onClick={() => setOpen(false)} className="block">{t("nav.home")}</NavLink>
            <NavLink to="/rooms" onClick={() => setOpen(false)} className="block">{t("nav.rooms")}</NavLink>
            <NavLink to="/gallery" onClick={() => setOpen(false)} className="block">{t("nav.gallery")}</NavLink>
            <NavLink to="/contact" onClick={() => setOpen(false)} className="block">{t("nav.contact")}</NavLink>
            <div className="flex items-center gap-3 pt-2">
              <button onClick={() => {changeLang("fr"); setOpen(false);}} className="btn btn-ghost text-sm">FR</button>
              <button onClick={() => {changeLang("en"); setOpen(false);}} className="btn btn-ghost text-sm">EN</button>
              <a href={BOOK_URL} target="_blank" rel="noreferrer" className="btn btn-primary text-sm">{t("nav.book")}</a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
