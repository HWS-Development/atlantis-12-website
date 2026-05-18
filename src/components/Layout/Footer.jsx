// Footer — matches live site exactly:
//   bg #2C3E25 (dark olive), top fade overlay,
//   3-col grid: CONTACT | MÉTÉO (live weather) | EXPLORER
//   bottom rule + © 2026 Atlantis 12
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import LangLink from "../Common/LangLink";
import Reveal from "../Common/Reveal";

const EMAIL = "contact@atlantis12essaouira.com";
const WHATSAPP = "https://wa.me/212666292285";

const accent = "rgb(143, 175, 126)";        // labels + body text on dark green (#8FAF7E)
const cream  = "rgb(245, 240, 232)";        // headings
const cream45 = "rgba(245, 240, 232, 0.45)";
const cream55 = "rgba(143, 175, 126, 0.85)"; // nav links
const cream65 = "rgb(143, 175, 126)";        // body text → sage green per G7
const cream25 = "rgba(245, 240, 232, 0.25)";
const cream40 = "rgba(143, 175, 126, 0.7)";  // secondary text
const cream10 = "rgba(245, 240, 232, 0.1)";

// Live weather (Open-Meteo, no API key) — Essaouira coords from schema.org JSON-LD
const WX_URL =
  "https://api.open-meteo.com/v1/forecast?latitude=31.5085&longitude=-9.7595&current=temperature_2m,wind_speed_10m,wind_direction_10m&wind_speed_unit=kmh";

function dirLabel(deg) {
  if (deg == null || Number.isNaN(deg)) return "";
  const dirs = ["N", "NE", "E", "SE", "S", "SO", "O", "NO"];
  return dirs[Math.round(((deg % 360) / 45)) % 8];
}

export default function Footer() {
  const { t } = useTranslation();
  const [wx, setWx] = useState({ temp: null, wind: null, dir: null });

  useEffect(() => {
    let cancelled = false;
    fetch(WX_URL)
      .then((r) => (r.ok ? r.json() : Promise.reject(r)))
      .then((j) => {
        if (cancelled) return;
        const c = j?.current || {};
        setWx({
          temp: c.temperature_2m != null ? Math.round(c.temperature_2m) : null,
          wind: c.wind_speed_10m != null ? Math.round(c.wind_speed_10m) : null,
          dir: c.wind_direction_10m,
        });
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, []);

  const explorer = [
    { to: "/la-maison",    label: t("footer.explorer.house",   "La Maison") },
    { to: "/chambres",     label: t("footer.explorer.rooms",   "Les Chambres") },
    { to: "/table-dhotes", label: t("footer.explorer.table",   "La Table") },
    { to: "/maison-dart",  label: t("footer.explorer.art",     "L'Art") },
  ];

  return (
    <footer
      id="footer"
      className="relative overflow-hidden"
      style={{ backgroundColor: "rgb(44, 62, 37)" }}
    >
      {/* Soft top→bottom darkening overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(transparent 0%, rgba(44, 62, 37, 0.5) 30%, rgb(44, 62, 37) 100%)",
        }}
      />

      <div className="relative z-10 page-x py-10 md:py-14">
        <div className="space-y-16 md:space-y-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-24">
            {/* CONTACT */}
            <Reveal className="space-y-5">
              <p className="font-body text-xs tracking-[0.4em] uppercase" style={{ color: accent }}>
                {t("footer.contact", "Contact")}
              </p>
              <div className="space-y-3">
                <a
                  href={`mailto:${EMAIL}`}
                  className="block font-body text-sm transition-colors hover:text-white"
                  style={{ color: cream65 }}
                >
                  {EMAIL}
                </a>
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block font-body text-sm transition-colors hover:text-white"
                  style={{ color: cream65 }}
                >
                  WhatsApp: +212 666 29 22 85
                </a>
                <p className="font-body text-sm" style={{ color: cream65 }}>
                  Douar Laraich, Route de Safi
                  <br />
                  44000, Essaouira - Maroc
                </p>
              </div>
            </Reveal>

            {/* MÉTÉO (live) */}
            <Reveal delay={1} className="space-y-5">
              <p className="font-body text-xs tracking-[0.4em] uppercase" style={{ color: accent }}>
                {t("footer.weather", "Météo")}
              </p>
              <div className="space-y-3">
                <div>
                  <p className="font-display text-4xl md:text-5xl" style={{ color: cream }}>
                    {wx.temp != null ? `${wx.temp}°C` : "-"}
                  </p>
                  <p className="font-body text-xs mt-2" style={{ color: cream40 }}>
                    {t("footer.wind", "Vent")} {dirLabel(wx.dir)}
                    {wx.wind != null ? ` - ${wx.wind} km/h` : ""}
                  </p>
                </div>
                <p className="font-body text-xs italic pt-3" style={{ color: cream45 }}>
                  {t(
                    "footer.weatherQuote",
                    "« Le vent d'Essaouira ne souffle pas, il raconte. »"
                  )}
                </p>
              </div>
            </Reveal>

            {/* EXPLORER */}
            <Reveal delay={2} className="space-y-5">
              <p className="font-body text-xs tracking-[0.4em] uppercase" style={{ color: accent }}>
                {t("footer.explore", "EXPLORER")}
              </p>
              <div className="flex flex-col gap-2.5">
                {explorer.map((l) => (
                  <LangLink
                    key={l.to}
                    to={l.to}
                    className="text-left transition-colors duration-300 font-body text-sm hover:text-white"
                    style={{ color: cream55 }}
                  >
                    {l.label}
                  </LangLink>
                ))}
                <LangLink
                  to="/essaouira"
                  className="text-left transition-colors duration-300 font-display text-xl md:text-2xl hover:opacity-80"
                  style={{ color: cream }}
                >
                  {t("footer.essaouiraLine1", "Ce qu'on aime (vraiment !)")}
                  <br />
                  {t("footer.essaouiraLine2", "à Essaouira")}
                </LangLink>
              </div>
            </Reveal>
          </div>
        </div>

        <div
          className="mt-8 md:mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4"
          style={{ borderTop: `1px solid ${cream10}` }}
        >
          <p className="font-body text-xs" style={{ color: cream25 }}>
            © {new Date().getFullYear()} Atlantis 12 - {t("footer.tagline", "Maison d'hôtes & d'art - Essaouira, Maroc")}
          </p>
          <div className="flex items-center gap-4 font-body text-xs" style={{ color: cream25 }}>
            <LangLink to="/mentions-legales" className="hover:opacity-80 transition-opacity">
              {t("footer.legalMentions", "Mentions légales")}
            </LangLink>
            <span>·</span>
            <LangLink to="/cgv" className="hover:opacity-80 transition-opacity">
              {t("footer.cgv", "CGV")}
            </LangLink>
            <span>·</span>
            <LangLink to="/politique-de-confidentialite" className="hover:opacity-80 transition-opacity">
              {t("footer.privacy", "Confidentialité")}
            </LangLink>
          </div>
        </div>
      </div>
    </footer>
  );
}
