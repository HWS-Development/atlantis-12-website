import { useTranslation } from "react-i18next";
import Seo from "../components/Common/Seo";

export default function MentionsLegales() {
  const { t } = useTranslation();

  return (
    <div className="bg-white min-h-screen pt-28 pb-20 px-[8vw] md:px-[10vw]">
      <Seo
        title={t("mentions.seoTitle")}
        description={t("mentions.seoDesc")}
      />
      <div className="max-w-3xl mx-auto">
        <h1 className="font-display text-4xl md:text-5xl text-foreground mb-10">{t("mentions.title")}</h1>

        <section className="mb-8">
          <h2 className="font-body text-lg font-bold text-foreground mb-3">{t("mentions.editorTitle")}</h2>
          <div className="font-body text-sm leading-relaxed text-foreground/75 space-y-1">
            <p className="font-semibold">{t("mentions.company")}</p>
            <p>{t("mentions.address")}</p>
            <p>{t("mentions.rc")}</p>
            <p>{t("mentions.ice")}</p>
            <p>{t("mentions.director")}</p>
            <p>{t("mentions.phone")}</p>
            <p>{t("mentions.email")}</p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="font-body text-lg font-bold text-foreground mb-3">{t("mentions.postalTitle")}</h2>
          <p className="font-body text-sm leading-relaxed text-foreground/75">
            {t("mentions.postalAddress")}
          </p>
        </section>

        <section className="mb-8">
          <h2 className="font-body text-lg font-bold text-foreground mb-3">{t("mentions.websiteTitle")}</h2>
          <p className="font-body text-sm leading-relaxed text-foreground/75">
            <a href="https://www.atlantis12essaouira.com" className="underline hover:text-primary transition-colors">
              www.atlantis12essaouira.com
            </a>
          </p>
        </section>
      </div>
    </div>
  );
}
