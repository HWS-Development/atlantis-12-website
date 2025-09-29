import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Navbar() {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);

  // lock scroll when menu is open
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = open ? "hidden" : prev || "";
    return () => (document.body.style.overflow = prev || "");
  }, [open]);

  // const changeLang = (lng) => {
  //   i18n.changeLanguage(lng);
  //   document.documentElement.lang = lng;
  // };

  const BookBtn = ({ className = "" }) => (
    <a
      href="https://atlantis-12-maison-d-hotes-et-d-art.hotelrunner.com/bv3/search"
      target="_blank"
      rel="noreferrer"
      className={`inline-flex items-center justify-center rounded-full px-5 py-2 bg-white/90 text-[#2E3B1F] font-semibold shadow-sm hover:bg-white ${className}`}
    >
      {t("nav.book")}
    </a>
  );

function LangPill({ className = "" }) {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);

  const langs = [
    { code: "fr", label: "FR", flag: "/images/frenchflagframed.svg" },
    { code: "en", label: "EN", flag: "/images/vecteezy_american-flag-on-white-background_4693397.svg" }, // replace later
  ];

  const current = langs.find((l) => l.code === i18n.language) || langs[0];

  const changeLang = (lng) => {
    i18n.changeLanguage(lng);
    document.documentElement.lang = lng;
    setOpen(false);
  };

  return (
    <div className={`relative ${className}`}>
      {/* Current language pill */}
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-1 bg-black/30 backdrop-blur rounded-full px-2 py-1"
      >
        <img src={current.flag} alt={current.label} className="w-5 h-5 rounded-full" />
        <span className="text-white text-xs font-semibold">{current.label}</span>
        <svg
          className="w-3 h-3 text-white ml-1"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>

      {/* Dropdown */}
      {open && (
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
      {/* Floating controls over hero */}
      <div className="fixed inset-x-0 top-0 z-40 pointer-events-none relative">
          <div className="pointer-events-auto absolute right-20 top-5 flex items-center gap-3">
            <LangPill />
          </div>
        <div className=" h-0">
          {/* Burger (top-left) */}
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            className="pointer-events-auto absolute left-40 top-24 inline-grid place-items-center w-12 h-12 rounded-full bg-white/85 hover:bg-white shadow-md"
          >
            {/* burger icon */}
            <svg width="28" height="28" viewBox="0 0 24 24" stroke="#2F2F2F" fill="none">
              <path strokeWidth="2" strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          </button>

          {/* Right-side actions: language + book */}
          <div className="pointer-events-auto absolute right-40 top-24 flex items-center gap-3">
            <BookBtn />
          </div>
        </div>
      </div>

      {/* Overlay + LEFT MENU PANEL */}
      <div
        className={`fixed inset-0 z-50 transition ${
          open ? "pointer-events-auto" : "pointer-events-none"
        }`}
        aria-hidden={!open}
      >
        {/* backdrop (very light so hero remains visible) */}
        <div
          className={`absolute inset-0 bg-black/20 transition-opacity ${
            open ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setOpen(false)}
        />

        {/* Left block that matches screenshot */}
        <div
          className={`absolute bg-white left-0 pt-16 h-full w-[86vw] max-w-[460px] p-6 transition-transform duration-300 ${
            open ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {/* The green box itself */}
          <div className="bg-[#8EA17D] text-white w-full p-6 md:p-8 shadow-xl">
            <nav className="space-y-3">
              <MenuItem onClick={() => setOpen(false)} to="/">
                {t("nav.home").toUpperCase()}
              </MenuItem>

              {/* Maison d'hôtes -> About section */}
              <a
                href="/#about"
                onClick={() => setOpen(false)}
                className="block text-md md:text-lg font-semibold tracking-wide"
              >
                {t("nav.story").toUpperCase()}
              </a>

              {/* Hébergements -> Rooms page */}
              <a
                href="/#rooms"
                onClick={() => setOpen(false)}
                className="block text-md md:text-lg font-semibold tracking-wide"
              >
                {t("nav.rooms").toUpperCase()}
              </a>

              {/* Maison d'art -> Gallery page */}
              <NavLink
                to="/gallery"
                onClick={() => setOpen(false)}
                className="block text-md md:text-lg font-semibold tracking-wide"
              >
                {t("nav.gallery").toUpperCase()}
              </NavLink>

              {/* Activités -> experience section on home */}
              <a
                href="/#experience"
                onClick={() => setOpen(false)}
                className="block text-md md:text-lg font-semibold tracking-wide"
              >
                {t("nav.experiences").toUpperCase()}
              </a>

              <NavLink to="/table" 
                onClick={() => setOpen(false)}
                className="block text-md md:text-lg font-semibold tracking-wide">
                {t("nav.table")}
              </NavLink>
              {/* Contact */}
              <NavLink
                to="/contact"
                onClick={() => setOpen(false)}
                className="block text-md md:text-lg font-semibold tracking-wide"
              >
                {t("nav.contact").toUpperCase()}
              </NavLink>

              {/* Réserver */}
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

          {/* Social row below the green box (same line-up as screenshot) */}
          <div className="mt-6 flex items-center gap-6 pl-2">
            

            <a
               href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="inline-grid place-items-center w-12 h-12 rounded-full bg-white text-black hover:bg-white/90 shadow"
            >
              <svg width="32" height="32" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                <path d="M290.4 275.7C274 286 264.5 304.5 265.5 323.8C266.6 343.2 278.2 360.4 295.6 368.9C313.1 377.3 333.8 375.5 349.6 364.3C366 354 375.5 335.5 374.5 316.2C373.4 296.8 361.8 279.6 344.4 271.1C326.9 262.7 306.2 264.5 290.4 275.7zM432.7 207.3C427.5 202.1 421.2 198 414.3 195.3C396.2 188.2 356.7 188.5 331.2 188.8C327.1 188.8 323.3 188.9 320 188.9C316.7 188.9 312.8 188.9 308.6 188.8C283.1 188.5 243.8 188.1 225.7 195.3C218.8 198 212.6 202.1 207.3 207.3C202 212.5 198 218.8 195.3 225.7C188.2 243.8 188.6 283.4 188.8 308.9C188.8 313 188.9 316.8 188.9 320C188.9 323.2 188.9 327 188.8 331.1C188.6 356.6 188.2 396.2 195.3 414.3C198 421.2 202.1 427.4 207.3 432.7C212.5 438 218.8 442 225.7 444.7C243.8 451.8 283.3 451.5 308.8 451.2C312.9 451.2 316.7 451.1 320 451.1C323.3 451.1 327.2 451.1 331.4 451.2C356.9 451.5 396.2 451.9 414.3 444.7C421.2 442 427.4 437.9 432.7 432.7C438 427.5 442 421.2 444.7 414.3C451.9 396.3 451.5 356.9 451.2 331.3C451.2 327.1 451.1 323.2 451.1 319.9C451.1 316.6 451.1 312.8 451.2 308.5C451.5 283 451.9 243.6 444.7 225.5C442 218.6 437.9 212.4 432.7 207.1L432.7 207.3zM365.6 251.8C383.7 263.9 396.2 282.7 400.5 304C404.8 325.3 400.3 347.5 388.2 365.6C382.2 374.6 374.5 382.2 365.6 388.2C356.7 394.2 346.6 398.3 336 400.4C314.7 404.6 292.5 400.2 274.4 388.1C256.3 376 243.8 357.2 239.5 335.9C235.2 314.6 239.7 292.4 251.7 274.3C263.7 256.2 282.6 243.7 303.9 239.4C325.2 235.1 347.4 239.6 365.5 251.6L365.6 251.6zM394.8 250.5C391.7 248.4 389.2 245.4 387.7 241.9C386.2 238.4 385.9 234.6 386.6 230.8C387.3 227 389.2 223.7 391.8 221C394.4 218.3 397.9 216.5 401.6 215.8C405.3 215.1 409.2 215.4 412.7 216.9C416.2 218.4 419.2 220.8 421.3 223.9C423.4 227 424.5 230.7 424.5 234.5C424.5 237 424 239.5 423.1 241.8C422.2 244.1 420.7 246.2 419 248C417.3 249.8 415.1 251.2 412.8 252.2C410.5 253.2 408 253.7 405.5 253.7C401.7 253.7 398 252.6 394.9 250.5L394.8 250.5zM544 160C544 124.7 515.3 96 480 96L160 96C124.7 96 96 124.7 96 160L96 480C96 515.3 124.7 544 160 544L480 544C515.3 544 544 515.3 544 480L544 160zM453 453C434.3 471.7 411.6 477.6 386 478.9C359.6 480.4 280.4 480.4 254 478.9C228.4 477.6 205.7 471.7 187 453C168.3 434.3 162.4 411.6 161.2 386C159.7 359.6 159.7 280.4 161.2 254C162.5 228.4 168.3 205.7 187 187C205.7 168.3 228.5 162.4 254 161.2C280.4 159.7 359.6 159.7 386 161.2C411.6 162.5 434.3 168.3 453 187C471.7 205.7 477.6 228.4 478.8 254C480.3 280.3 480.3 359.4 478.8 385.9C477.5 411.5 471.7 434.2 453 452.9L453 453z"/>
              </svg>  
            </a>
            <SocialIcon href="https://facebook.com" label="Facebook">
              <path d="M14 9h3V6h-3a4 4 0 00-4 4v3H7v3h3v8h3v-8h3l1-3h-4v-3a1 1 0 011-1z" />
            </SocialIcon>
            <SocialIcon href="https://twitter.com" label="Twitter">
              <path d="M22 5.8a8.4 8.4 0 01-2.4.7A4.1 4.1 0 0021.4 4a8.2 8.2 0 01-2.6 1A4.1 4.1 0 0012 8.1c0 .3 0 .6.1.9A11.6 11.6 0 013 5.1a4.1 4.1 0 001.3 5.5 4.1 4.1 0 01-1.9-.5v.1a4.1 4.1 0 003.3 4 4.2 4.2 0 01-1.9.1 4.1 4.1 0 003.8 2.8A8.3 8.3 0 012 18.6 11.7 11.7 0 008.3 20c7 0 10.8-5.8 10.8-10.8v-.5A7.7 7.7 0 0022 5.8z" />
            </SocialIcon>
            <SocialIcon href="https://linkedin.com" label="LinkedIn">
              <path d="M6 9h4v12H6zM8 3a2 2 0 110 4 2 2 0 010-4zm6 6h3.6v1.8h.1a4 4 0 013.6-2c3.8 0 4.5 2.5 4.5 5.7V21h-4v-5.5c0-1.3 0-3-1.9-3s-2.1 1.5-2.1 2.9V21h-4V9z" />
            </SocialIcon>
            <SocialIcon href="https://youtube.com" label="YouTube">
              <path d="M23.5 7.2a3 3 0 00-2.1-2.1C19.6 4.6 12 4.6 12 4.6s-7.6 0-9.4.5A3 3 0 00.5 7.2 31.8 31.8 0 000 12a31.8 31.8 0 00.5 4.8 3 3 0 002.1 2.1c1.8.5 9.4.5 9.4.5s7.6 0 9.4-.5a3 3 0 002.1-2.1A31.8 31.8 0 0024 12a31.8 31.8 0 00-.5-4.8zM10 15.5V8.5l6.5 3.5L10 15.5z" />
            </SocialIcon>
            <SocialIcon href="https://tiktok.com" label="TikTok">
              <path d="M20 8.6a6.9 6.9 0 01-4-1.3v7.2a5.2 5.2 0 11-5.2-5.2c.3 0 .6 0 .9.1v3a2.2 2.2 0 102.2 2.2V2h3a6.9 6.9 0 004 4v2.6z" />
            </SocialIcon>
          </div>

          {/* Close (X) button */}
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
    <NavLink
      to={to}
      onClick={onClick}
      className="block text-md md:text-lg font-semibold tracking-wide"
    >
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
