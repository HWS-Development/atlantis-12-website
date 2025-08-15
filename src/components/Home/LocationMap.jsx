import { useTranslation } from "react-i18next";

const MAP_LINK = "https://maps.app.goo.gl/6EN1hJTrw8mtqWaf6";

export default function LocationMap() {
  const { t } = useTranslation();

  return (
    <section className="py-10 md:py-14"> {/* warm sand strip */}
      <div className="container-std">
        <h2 className="font-serif text-3xl mb-4">{t("home.location.title")}</h2>
        <p className="text-charcoal/75 mb-6">{t("home.location.intro")}</p>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Map */}
          <div className="md:col-span-2 card overflow-hidden">
            <div className="relative w-full h-[320px] md:h-[420px]">
              <iframe
                title="Atlantis 12 Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3400.3571414543617!2d-9.692721124548028!3d31.541811874204157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdad9b7a667f5f1f%3A0xcbe94fd87069019d!2sAtlantis%2012%20Maison%20d'h%C3%B4tes%20%26%20d'art!5e0!3m2!1sen!2sma!4v1755096575772!5m2!1sen!2sma"
                className="absolute inset-0 w-full h-full"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Info panel */}
          <aside className="card p-5 md:p-6 flex flex-col justify-between">
            <div>
              <h3 className="font-serif text-xl mb-2">{t("brand")}</h3>
              <p className="text-sm text-charcoal/80">{t("home.location.address")}</p>

              <ul className="mt-4 space-y-2 text-sm text-charcoal/80">
                {t("home.location.points", { returnObjects: true }).map((line, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="mt-1 inline-block w-2 h-2 rounded-full bg-olive" />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={MAP_LINK}
                target="_blank"
                rel="noreferrer"
                className="px-5 py-2 rounded-full border border-olive text-olive hover:bg-olive hover:text-white transition"
              >
                {t("home.location.openMap")}
              </a>
              <a
                href="/contact"
                className="px-5 py-2 rounded-full bg-olive text-white hover:opacity-90 transition"
              >
                {t("home.location.contact")}
              </a>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
