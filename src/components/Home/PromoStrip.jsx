import { useTranslation } from "react-i18next";

export default function PromoStrip() {
  const { t } = useTranslation();
  return (
    <section className="legacy-green text-white">
      <div className="container-std py-3 flex items-center justify-center">
        <a
          href="#contact"
          className="btn-legacy btn-legacy-primary"
          aria-label={t("home.promo.cta")}
        >
          {t("home.promo.cta")}
        </a>
      </div>
    </section>
  );
}
