import { useTranslation } from "react-i18next";

export default function PhilosophySections() {
  const { t } = useTranslation();

  const sections = [
    {
      id: "create-connection",
      image: "/images/Screenshot 2026-01-20 141706.png",
      imageAlt: t("home.philosophy.createConnection.imageAlt"),
      titleKey: "home.philosophy.createConnection.title",
      textKey: "home.philosophy.createConnection.text",
      quoteKey: "home.philosophy.createConnection.quote",
      imageLeft: true,
    },
    {
      id: "preserve-rare",
      image: "/images/Screenshot 2026-01-20 133148.png",
      imageAlt: t("home.philosophy.preserveRare.imageAlt"),
      titleKey: "home.philosophy.preserveRare.title",
      textKey: "home.philosophy.preserveRare.text",
      quoteKey: "home.philosophy.preserveRare.quote", 
      imageLeft: false,
    },
    {
      id: "welcome-harmony",
      image: "/images/Screenshot 2026-01-20 133224.png",
      imageAlt: t("home.philosophy.welcomeHarmony.imageAlt"),
      titleKey: "home.philosophy.welcomeHarmony.title",
      textKey: "home.philosophy.welcomeHarmony.text",
      quoteKey: "home.philosophy.welcomeHarmony.quote",
      imageLeft: true,
    },
  ];

  return (
    <section className="bg-white py-20 md:py-28">
      <div className="container-std max-w-6xl mx-auto">

        {sections.map((section) => (
          <div
            key={section.id}
            className={`flex flex-col ${
              section.imageLeft ? "md:flex-row" : "md:flex-row-reverse"
            } items-center gap-10 md:gap-20 mb-24 last:mb-0`}
          >
            {/* IMAGE */}
            <div className="w-full md:w-1/2">
              <img
                src={section.image}
                alt={section.imageAlt}
                className="w-full h-[320px] md:h-[420px] object-cover rounded-md shadow-soft"
                loading="lazy"
              />
            </div>

            {/* TEXT */}
            <div className="w-full md:w-1/2">
              <h3 className="italic font-dancing text-2xl md:text-xl text-black m">
                {t(section.titleKey)}
              </h3>

              <div className="font-serif text-[15px] md:text-[16px] leading-8 text-black/80 space-y-6">
                {t(section.textKey)
                  .split("\n\n")
                  .filter(Boolean)
                  .map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
              </div>
              {section.quoteKey && (
                <blockquote className="font-serif text-[16px] md:text-[18px] leading-8 md:leading-9 text-black space-y-5">
                  {t(section.quoteKey)}
                </blockquote>
              )}
            </div>
          </div>
        ))}

      </div>
    </section>
  );
}
