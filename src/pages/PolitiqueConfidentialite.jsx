import { useTranslation } from "react-i18next";
import Seo from "../components/Common/Seo";

export default function PolitiqueConfidentialite() {
  const { t } = useTranslation();

  return (
    <div className="bg-white min-h-screen pt-28 pb-20 px-[8vw] md:px-[10vw]">
      <Seo
        title={t("privacy.seoTitle")}
        description={t("privacy.seoDesc")}
      />
      <div className="max-w-3xl mx-auto">
        <h1 className="font-display text-4xl md:text-5xl text-foreground mb-10">
          {t("privacy.title")}
        </h1>

        <P>{t("privacy.intro")}</P>
        <P className="mt-2">{t("privacy.controller")}</P>

        {/* 1. Data Collected */}
        <Section n="1" title={t("privacy.s1Title")}>
          <P>{t("privacy.s1p1")}</P>
          <Ul>
            <li>{t("privacy.s1li1")}</li>
            <li>{t("privacy.s1li2")}</li>
            <li>{t("privacy.s1li3")}</li>
            <li>{t("privacy.s1li4")}</li>
            <li>{t("privacy.s1li5")}</li>
            <li>{t("privacy.s1li6")}</li>
            <li>{t("privacy.s1li7")}</li>
            <li>{t("privacy.s1li8")}</li>
            <li>{t("privacy.s1li9")}</li>
            <li>{t("privacy.s1li10")}</li>
          </Ul>
          <P>{t("privacy.s1p2")}</P>
          <P>{t("privacy.s1p3")}</P>
        </Section>

        {/* 2. Purposes */}
        <Section n="2" title={t("privacy.s2Title")}>
          <P>{t("privacy.s2p1")}</P>
          <Ul>
            <li>{t("privacy.s2li1")}</li>
            <li>{t("privacy.s2li2")}</li>
            <li>{t("privacy.s2li3")}</li>
            <li>{t("privacy.s2li4")}</li>
            <li>{t("privacy.s2li5")}</li>
            <li>{t("privacy.s2li6")}</li>
            <li>{t("privacy.s2li7")}</li>
          </Ul>
        </Section>

        {/* 3. Legal Basis */}
        <Section n="3" title={t("privacy.s3Title")}>
          <P>{t("privacy.s3p1")}</P>
          <Ul>
            <li>{t("privacy.s3li1")}</li>
            <li>{t("privacy.s3li2")}</li>
            <li>{t("privacy.s3li3")}</li>
            <li>{t("privacy.s3li4")}</li>
          </Ul>
        </Section>

        {/* 4. Data Sharing */}
        <Section n="4" title={t("privacy.s4Title")}>
          <P>{t("privacy.s4p1")}</P>
          <Ul>
            <li>{t("privacy.s4li1")}</li>
            <li>{t("privacy.s4li2")}</li>
            <li>{t("privacy.s4li3")}</li>
          </Ul>
          <P>{t("privacy.s4p2")}</P>
        </Section>

        {/* 5. Data Retention */}
        <Section n="5" title={t("privacy.s5Title")}>
          <P>{t("privacy.s5p1")}</P>
          <P>{t("privacy.s5p2")}</P>
        </Section>

        {/* 6. Data Security */}
        <Section n="6" title={t("privacy.s6Title")}>
          <P>{t("privacy.s6p1")}</P>
        </Section>

        {/* 7. Your Rights */}
        <Section n="7" title={t("privacy.s7Title")}>
          <P>{t("privacy.s7p1")}</P>
          <Ul>
            <li>{t("privacy.s7li1")}</li>
            <li>{t("privacy.s7li2")}</li>
            <li>{t("privacy.s7li3")}</li>
            <li>{t("privacy.s7li4")}</li>
            <li>{t("privacy.s7li5")}</li>
            <li>{t("privacy.s7li6")}</li>
            <li>{t("privacy.s7li7")}</li>
            <li>{t("privacy.s7li8")}</li>
          </Ul>
          <P>
            {t("privacy.s7p2")}{" "}
            <a href="mailto:contact@atlantis12essaouira.com" className="underline hover:text-primary transition-colors">
              contact@atlantis12essaouira.com
            </a>
          </P>
        </Section>

        {/* 8. International transfers */}
        <Section n="8" title={t("privacy.s8Title")}>
          <P>{t("privacy.s8p1")}</P>
          <P>{t("privacy.s8p2")}</P>
        </Section>

        {/* 9. Amendments */}
        <Section n="9" title={t("privacy.s9Title")}>
          <P>{t("privacy.s9p1")}</P>
        </Section>

        {/* 10. Contact */}
        <Section n="10" title={t("privacy.s10Title")}>
          <P>
            {t("privacy.s10p1")}{" "}
            <a href="mailto:contact@atlantis12essaouira.com" className="underline hover:text-primary transition-colors">
              contact@atlantis12essaouira.com
            </a>
          </P>
        </Section>

        {/* ===== COOKIE POLICY ===== */}
        <div className="mt-16 pt-16 border-t border-foreground/10">
          <h2 className="font-display text-3xl md:text-4xl text-foreground mb-8">
            {t("privacy.cookiesTitle")}
          </h2>

          {/* 1. What is a cookie? */}
          <Section n="1" title={t("privacy.c1Title")}>
            <P>{t("privacy.c1p1")}</P>
          </Section>

          {/* 2. Use of Cookies */}
          <Section n="2" title={t("privacy.c2Title")}>
            <P>{t("privacy.c2p1")}</P>
            <Ul>
              <li>{t("privacy.c2li1")}</li>
              <li>{t("privacy.c2li2")}</li>
              <li>{t("privacy.c2li3")}</li>
              <li>{t("privacy.c2li4")}</li>
              <li>{t("privacy.c2li5")}</li>
            </Ul>
          </Section>

          {/* 3. Third-Party Cookies */}
          <Section n="3" title={t("privacy.c3Title")}>
            <P>{t("privacy.c3p1")}</P>
            <Ul>
              <li>{t("privacy.c3li1")}</li>
              <li>{t("privacy.c3li2")}</li>
              <li>{t("privacy.c3li3")}</li>
            </Ul>
            <P>{t("privacy.c3p2")}</P>
          </Section>

          {/* 4. Managing Cookies */}
          <Section n="4" title={t("privacy.c4Title")}>
            <P>{t("privacy.c4p1")}</P>
            <Ul>
              <li>{t("privacy.c4li1")}</li>
              <li>{t("privacy.c4li2")}</li>
              <li>{t("privacy.c4li3")}</li>
            </Ul>
            <P>{t("privacy.c4p2")}</P>
          </Section>

          {/* 5. Contact */}
          <Section n="5" title={t("privacy.c5Title")}>
            <P>
              {t("privacy.c5p1")}{" "}
              <a href="mailto:contact@atlantis12essaouira.com" className="underline hover:text-primary transition-colors">
                contact@atlantis12essaouira.com
              </a>
            </P>
          </Section>
        </div>
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
