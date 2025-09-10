import { useEffect } from "react";
import { useTranslation } from "react-i18next";

function Row({ left, right }) {
  return (
    <div className="grid md:grid-cols-[260px,1fr] gap-6 py-5 border-b border-black/10">
      <div className="font-semibold">{left}</div>
      <div className="text-[15px] leading-relaxed">{right}</div>
    </div>
  );
}

export default function CancellationPolicy() {
  const { t } = useTranslation();

  // set tab title without Helmet
  useEffect(() => {
    document.title = t("legal.cancellation.seoTitle");
  }, [t]);

  const rows = t("legal.cancellation.rows", { returnObjects: true });

  return (
    <>
      <header className="container-std section-tight">
        <h1 className="text-2xl md:text-3xl font-serif">
          {t("legal.cancellation.title")} – {t("brand.name","Atlantis 12")}
        </h1>
        <p className="text-black/70 mt-2 max-w-3xl">
          {t("legal.cancellation.intro")}
        </p>
      </header>

      <main className="container-std section-tight max-w-4xl bg-white rounded-xl2 p-4 md:p-6 shadow-soft">
        {rows.map((r, i) => <Row key={i} left={r.left} right={r.right} />)}
      </main>
    </>
  );
}
