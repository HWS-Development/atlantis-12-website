import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import LangLink from "../components/Common/LangLink";
import PageHero from "../components/Common/PageHero";

function Section({ title, paragraphs = [], bullets = [] }) {
  return (
    <section className="mb-6">
      <h3 className="font-semibold text-lg mb-1">{title}</h3>
      {paragraphs.map((p, i) => (
        <p key={i} className="mb-2 text-[15px] leading-relaxed">{p}</p>
      ))}
      {bullets.length > 0 && (
        <ul className="list-disc pl-5 space-y-1 text-[15px]">
          {bullets.map((b, i) => <li key={i}>{b}</li>)}
        </ul>
      )}
    </section>
  );
}

export default function TermsConditions() {
  const { t } = useTranslation();

  // set tab title without Helmet
  useEffect(() => {
    document.title = t("legal.terms.seoTitle");
  }, [t]);

  const sections = t("legal.terms.sections", { returnObjects: true });

  return (
    <>
      <PageHero
        image="/images/misc/terrasse-vue-foret-atlantis12-essaouira.webp"
        align="left"
        height="md"
        overlay="dark"
      />
      <header className="container-std section-tight">
        <h1 className="text-2xl md:text-3xl font-serif text-center">
          {t("legal.terms.title")}
        </h1>
        <p className="text-center text-sm mt-1 text-black/60">
          {t("legal.terms.lastUpdated")}
        </p>
      </header>

      <main className="container-std section-tight max-w-3xl">
        {sections.map((s, i) => (
          <Section key={i} title={s.title} paragraphs={s.paragraphs} bullets={s.bullets} />
        ))}

        <div className="mt-8 text-sm">
          <span className="text-black/70">{t("legal.terms.seeCancellation")} </span>
          <LangLink to="/cancellation" className="text-[#2F5F2E] underline">
            {t("legal.cancellation.title")}
          </LangLink>
          .
        </div>
      </main>
    </>
  );
}
