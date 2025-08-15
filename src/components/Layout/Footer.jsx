import { useTranslation } from "react-i18next";

const MAP_LINK = "https://maps.app.goo.gl/6EN1hJTrw8mtqWaf6";

export default function Footer() {
  const { t } = useTranslation();
  const year = new Date().getFullYear();
  return (
    <footer className="mt-16 bg-sand">
      <div className="container-std py-8 grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="font-serif text-xl mb-2">{t("brand")}</h3>
          <p className="text-sm text-charcoal/70">
            Essaouira, Maroc — <a className="underline" href={MAP_LINK} target="_blank" rel="noreferrer">Google Maps</a>
          </p>
        </div>
        <div className="text-sm">
          <div>resa@atlantis12essaouira.com</div>
          <div>+212 666 29 22 85</div>
        </div>
        <div className="text-sm text-right md:text-left">
          © {year} {t("brand")}. {t("footer.rights")}
        </div>
      </div>
    </footer>
  );
}
