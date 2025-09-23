import { useTranslation } from "react-i18next";

const MAP_LINK = "https://maps.app.goo.gl/6EN1hJTrw8mtqWaf6";
const MAP_EMBED =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3400.3571414543617!2d-9.692721124548028!3d31.541811874204157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdad9b7a667f5f1f%3A0xcbe94fd87069019d!2sAtlantis%2012%20Maison%20d'h%C3%B4tes%20%26%20d'art!5e0!3m2!1sen!2sma!4v1755096575772!5m2!1sen!2sma";

export default function LocationLegacy() {
  const { t } = useTranslation();

  return (
    <section className="container-std section">
  <h2 className="title-smallcaps mb-4 font-bold">Location</h2>
  <div className="grid md:grid-cols-3 gap-6">
    <div className="md:col-span-2 rounded-xl2 overflow-hidden shadow-soft border border-black/10">
          <iframe
            title="Atlantis 12 Map"
            src={MAP_EMBED}
            className="w-full h-[280px] md:h-[360px]"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        {/* Info card */}
        <aside className="rounded-xl2 border border-black/10 bg-white shadow-soft p-4">
          <h3 className="font-serif text-lg mb-2">Atlantis 12</h3>
          <p className="text-sm text-black/80">
            Douar Laaraïche, Route de Safi, Essaouira, Maroc
          </p>
          <ul className="mt-3 text-sm text-black/80 space-y-1">
            <li>~ 20 min de la médina d’Essaouira</li>
            <li>~ 25 min de l’aéroport d’Essaouira</li>
            <li>Parking sur place</li>
          </ul>

          <div className="mt-4 flex gap-2">
            <a href={MAP_LINK} target="_blank" rel="noreferrer" className="btn-legacy btn-legacy-primary">
              {t("home.location.openMap", "Ouvrir dans Google Maps")}
            </a>
            <a href="/contact" className="btn-legacy" style={{ backgroundColor: "#2F5F2E", color: "#fff" }}>
              {t("home.location.contact", "Contact")}
            </a>
          </div>
        </aside>
      </div>
    </section>
  );
}
