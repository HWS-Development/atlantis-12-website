import { NavLink, Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  const goStory = (e) => {
    e.preventDefault();
    // go home, then push hash so ScrollToHash handles it
    navigate("/#about");
  };

  return (
    <header className="legacy-green text-white">
      <div className="container-std h-12 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img src="/logo.svg" alt="Atlantis 12" className="h-7" />
        </Link>

        <nav className="hidden md:flex items-center gap-4">
          <NavLink to="/" className="nav-link-legacy">{t("nav.home")}</NavLink>
          {/* story button */}
          <a href="/#about" onClick={goStory} className="nav-link-legacy">
            {t("nav.story")}
          </a>
          <NavLink to="/rooms" className="nav-link-legacy">{t("nav.rooms")}</NavLink>
          <NavLink to="/gallery" className="nav-link-legacy">{t("nav.experiences")}</NavLink>
          <NavLink to="/contact" className="nav-link-legacy">{t("nav.contact")}</NavLink>

          <a
            href="https://atlantis-12-maison-d-hotes-et-d-art.hotelrunner.com/bv3/search"
            target="_blank" rel="noreferrer"
            className="btn-legacy btn-legacy-primary ml-2"
          >
            {t("nav.book")}
          </a>

          {/* Language switcher */}
          <div className="ml-3 flex items-center gap-1 bg-white/15 rounded-full px-2 py-1">
            <button
              onClick={() => { i18n.changeLanguage("fr"); document.documentElement.lang = "fr"; }}
              className={`text-white text-xs px-2 py-0.5 rounded-full ${i18n.language==='fr' ? 'bg-white/25' : ''}`}
              aria-label="Français"
            >🇫🇷 FR</button>
            <button
              onClick={() => { i18n.changeLanguage("en"); document.documentElement.lang = "en"; }}
              className={`text-white text-xs px-2 py-0.5 rounded-full ${i18n.language==='en' ? 'bg-white/25' : ''}`}
              aria-label="English"
            >🇬🇧 EN</button>
          </div>
        </nav>
      </div>
    </header>
  );
}
