// import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import PageHero from "../components/Common/PageHero";

export default function About() {
  const { t } = useTranslation();
  const paras = t("aboutPage.paragraphs", { returnObjects: true }); // array of lines

  return (
    <>
      {/* <Helmet>
        <title>{t("aboutPage.seoTitle")}</title>
        <meta name="description" content={t("aboutPage.seoDesc")} />
      </Helmet> */}

      <PageHero
        image="/images/view.jpg"
        title={t("nav.story")}
        align="left"
        height="md"
        overlay="dark"
      />
      <section className="container-std section text-center text-lg italic text-black/70 ">
        <article className="max-w-3xl mx-auto">
          {paras.map((p, i) => (
            <p key={i} className={`mb-3 ${i < 6 ? "italic" : ""}`}>
              {p}
            </p>
          ))}

          {/* Optional PDF link */}
          {t("aboutPage.pdfHref") && (
            <p className="mt-4">
              <a
                href={t("aboutPage.pdfHref")}
                target="_blank"
                rel="noreferrer"
                className="text-[#2F5F2E] underline hover:opacity-80"
              >
                {t("aboutPage.pdfText")}
              </a>
            </p>
          )}
        </article>
      </section>

      {/* Full-width image like the screenshot */}
      <div className="w-full">
        <img
          src="https://images.unsplash.com/photo-1473448912268-2022ce9509d8?w=2500&q=80&auto=format&fit=crop"
          alt=""
          className="w-full h-[48vh] md:h-[56vh] object-cover"
          loading="lazy"
        />
      </div>
    </>
  );
}
