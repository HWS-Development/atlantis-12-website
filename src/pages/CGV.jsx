import { useTranslation } from "react-i18next";
import Seo from "../components/Common/Seo";

export default function CGV() {
  const { t } = useTranslation();

  return (
    <div className="bg-white min-h-screen pt-28 pb-20 px-[8vw] md:px-[10vw]">
      <Seo
        title={t("cgv.seoTitle")}
        description={t("cgv.seoDesc")}
      />
      <div className="max-w-3xl mx-auto">
        <h1 className="font-display text-4xl md:text-5xl text-foreground mb-4">
          {t("cgv.title")}
        </h1>
        <p className="font-body text-xs text-foreground/50 mb-10">{t("cgv.lastUpdated")}</p>

        {/* 1. Objet / Purpose */}
        <Section n="1" title={t("cgv.s1Title")}>
          <P>{t("cgv.s1p1")}</P>
          <P>{t("cgv.s1p2")}</P>
        </Section>

        {/* 2. Services */}
        <Section n="2" title={t("cgv.s2Title")}>
          <P>{t("cgv.s2p1")}</P>
          <Ul>
            <li>{t("cgv.s2li1")}</li>
            <li>{t("cgv.s2li2")}</li>
            <li>{t("cgv.s2li3")}</li>
            <li>{t("cgv.s2li4")}</li>
            <li>{t("cgv.s2li5")}</li>
            <li>{t("cgv.s2li6")}</li>
          </Ul>
          <P>{t("cgv.s2p2")}</P>
        </Section>

        {/* 3. Prix et taxes / Prices and Taxes */}
        <Section n="3" title={t("cgv.s3Title")}>
          <P>{t("cgv.s3p1")}</P>
          <P>{t("cgv.s3p2")}</P>
          <Ul>
            <li>{t("cgv.s3li1")}</li>
            <li>{t("cgv.s3li2")}</li>
          </Ul>
          <P>{t("cgv.s3p3")}</P>
          <P>{t("cgv.s3p4")}</P>
          <P>{t("cgv.s3p5")}</P>
        </Section>

        {/* 4. Processus de réservation / Booking Process */}
        <Section n="4" title={t("cgv.s4Title")}>
          <P className="font-semibold">{t("cgv.s4sub1")}</P>
          <P>{t("cgv.s4p1")}</P>
          <P className="font-semibold">{t("cgv.s4sub2")}</P>
          <P>{t("cgv.s4p2")}</P>
          <P className="font-semibold">{t("cgv.s4sub3")}</P>
          <P>{t("cgv.s4p3")}</P>
          <P>{t("cgv.s4p4")}</P>
          <P className="font-semibold">{t("cgv.s4sub4")}</P>
          <P>{t("cgv.s4p5")}</P>
          <P>{t("cgv.s4p6")}</P>
          <P className="font-semibold mt-4">{t("cgv.s4sub5")}</P>
          <P>{t("cgv.s4p7")}</P>
        </Section>

        {/* 5. Obligations / House Rules */}
        <Section n="5" title={t("cgv.s5Title")}>
          <P>{t("cgv.s5p1")}</P>
          <P>{t("cgv.s5p2")}</P>
          <P className="font-semibold">{t("cgv.s5sub1")}</P>
          <Ul>
            <li>{t("cgv.s5li1")}</li>
            <li>{t("cgv.s5li2")}</li>
          </Ul>
          <P className="font-semibold">{t("cgv.s5sub2")}</P>
          <Ul>
            <li>{t("cgv.s5li3")}</li>
            <li>{t("cgv.s5li4")}</li>
            <li>{t("cgv.s5li5")}</li>
          </Ul>
          <P>{t("cgv.s5p3")}</P>
          <P>{t("cgv.s5p4")}</P>
        </Section>

        {/* 6. Responsabilité / Liability */}
        <Section n="6" title={t("cgv.s6Title")}>
          <P>{t("cgv.s6p1")}</P>
          <P>{t("cgv.s6p2")}</P>
          <P>{t("cgv.s6p3")}</P>
          <Ul>
            <li>{t("cgv.s6li1")}</li>
            <li>{t("cgv.s6li2")}</li>
            <li>{t("cgv.s6li3")}</li>
            <li>{t("cgv.s6li4")}</li>
            <li>{t("cgv.s6li5")}</li>
          </Ul>
          <P>{t("cgv.s6p4")}</P>
          <P>{t("cgv.s6p5")}</P>
        </Section>

        {/* 7. Annulation / Cancellation */}
        <Section n="7" title={t("cgv.s7Title")}>
          <P>{t("cgv.s7p1")}</P>
          <P>{t("cgv.s7p2")}</P>
          <Ul>
            <li>{t("cgv.s7li1")}</li>
            <li>{t("cgv.s7li2")}</li>
            <li>{t("cgv.s7li3")}</li>
            <li>{t("cgv.s7li4")}</li>
          </Ul>
        </Section>

        {/* 8. Force majeure */}
        <Section n="8" title={t("cgv.s8Title")}>
          <P>{t("cgv.s8p1")}</P>
          <Ul>
            <li>{t("cgv.s8li1")}</li>
            <li>{t("cgv.s8li2")}</li>
            <li>{t("cgv.s8li3")}</li>
            <li>{t("cgv.s8li4")}</li>
            <li>{t("cgv.s8li5")}</li>
            <li>{t("cgv.s8li6")}</li>
            <li>{t("cgv.s8li7")}</li>
          </Ul>
        </Section>

        {/* 9. Propriété intellectuelle / Intellectual Property */}
        <Section n="9" title={t("cgv.s9Title")}>
          <P>{t("cgv.s9p1")}</P>
          <P>{t("cgv.s9p2")}</P>
        </Section>

        {/* 10. Modification / Amendment */}
        <Section n="10" title={t("cgv.s10Title")}>
          <P>{t("cgv.s10p1")}</P>
          <P>{t("cgv.s10p2")}</P>
        </Section>

        {/* 11. Droit applicable / Governing Law */}
        <Section n="11" title={t("cgv.s11Title")}>
          <P>{t("cgv.s11p1")}</P>
          <P>{t("cgv.s11p2")}</P>
          <P>{t("cgv.s11p3")}</P>
        </Section>

        {/* 12. Convention de preuve / Evidence */}
        <Section n="12" title={t("cgv.s12Title")}>
          <P>{t("cgv.s12p1")}</P>
        </Section>
      </div>
    </div>
  );
}

function Section({ n, title, children }) {
  return (
    <section className="mb-8">
      <h2 className="font-body text-lg font-bold text-foreground mb-3">
        {n}. {title}
      </h2>
      <div className="space-y-2">{children}</div>
    </section>
  );
}

function P({ children, className = "" }) {
  return (
    <p className={`font-body text-sm leading-relaxed text-foreground/75 ${className}`}>
      {children}
    </p>
  );
}

function Ul({ children }) {
  return (
    <ul className="list-disc pl-5 font-body text-sm leading-relaxed text-foreground/75 space-y-1">
      {children}
    </ul>
  );
}
