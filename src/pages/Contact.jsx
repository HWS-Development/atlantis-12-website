import { useState } from "react";
import { useTranslation } from "react-i18next";
import Reveal from "../components/Common/Reveal";

const Icon = ({ d, className = "w-4 h-4 mt-1 text-primary flex-shrink-0" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    dangerouslySetInnerHTML={{ __html: d }}
  />
);
const MAIL_SVG = '<rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>';
const PHONE_SVG = '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>';
const PIN_SVG = '<path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/>';
const CLOCK_SVG = '<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>';

const MAPS_URL =
  "https://www.google.com/maps/search/Atlantis+12+maison+d%27h%C3%B4tes+et+d%27art+Essaouira/@31.541854,-9.690154,17z";

export default function Contact() {
  const { t } = useTranslation();
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const subjects = t("contactPage.subjects", { returnObjects: true });

  const onChange = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));
  const onSubmit = (e) => {
    e.preventDefault();
    const body = encodeURIComponent(
      `${form.message}\n\n- ${form.name} <${form.email}>\n${t("contactPage.form.subject")} : ${form.subject}`
    );
    window.location.href = `mailto:contact@atlantis12essaouira.com?subject=${encodeURIComponent(
      form.subject || t("contactPage.form.mailSubject")
    )}&body=${body}`;
  };

  return (
    <div className="bg-background min-h-screen text-foreground">
      <div className="w-full flex items-center justify-center pt-28 pb-4 bg-white" style={{ lineHeight: 0 }}>
        <img
          src="/images/logo/logo-atlantis12-blanc.png"
          alt={t("contactPage.logoAlt")}
          className="w-[220px] md:w-[240px] h-auto object-contain block"
        />
      </div>

      <div className="px-[8vw] md:px-[10vw] pt-2 pb-4 mt-0">
        <Reveal as="p" className="font-body text-xs tracking-[0.4em] uppercase text-primary mb-3">
          {t("contactPage.eyebrow")}
        </Reveal>
        <Reveal as="h1" className="font-display text-5xl md:text-7xl text-foreground" delay={1}>
          {t("contactPage.title")}
        </Reveal>
        <Reveal as="p" className="font-body text-xs tracking-[0.3em] uppercase text-primary/70 mt-3 font-semibold" delay={2}>
          {t("contactPage.heroSubline", "ATLANTIS 12, MAISON D'HÔTES ET D'ART À ESSAOUIRA")}
        </Reveal>
      </div>

      <section className="px-[8vw] md:px-[10vw] pb-20 md:pb-28 grid md:grid-cols-2 gap-12 md:gap-20">
        <Reveal>
          <form className="space-y-5" onSubmit={onSubmit}>
            <div className="space-y-1">
              <label className="font-body text-xs tracking-[0.2em] uppercase text-primary/70">{t("contactPage.form.name")}</label>
              <input
                type="text"
                required
                value={form.name}
                onChange={onChange("name")}
                placeholder={t("contactPage.form.namePh")}
                className="w-full bg-white border border-border px-4 py-3 font-body text-sm text-foreground focus:outline-none focus:border-primary transition-colors"
              />
            </div>
            <div className="space-y-1">
              <label className="font-body text-xs tracking-[0.2em] uppercase text-primary/70">{t("contactPage.form.email")}</label>
              <input
                type="email"
                required
                value={form.email}
                onChange={onChange("email")}
                placeholder={t("contactPage.form.emailPh")}
                className="w-full bg-white border border-border px-4 py-3 font-body text-sm text-foreground focus:outline-none focus:border-primary transition-colors"
              />
            </div>
            <div className="space-y-1">
              <label className="font-body text-xs tracking-[0.2em] uppercase text-primary/70">{t("contactPage.form.subject")}</label>
              <select
                value={form.subject}
                onChange={onChange("subject")}
                className="w-full bg-white border border-border px-4 py-3 font-body text-sm text-foreground focus:outline-none focus:border-primary transition-colors"
              >
                <option value="">{t("contactPage.form.subjectPh")}</option>
                {Array.isArray(subjects) && subjects.map((s) => (
                  <option key={s}>{s}</option>
                ))}
              </select>
            </div>
            <div className="space-y-1">
              <label className="font-body text-xs tracking-[0.2em] uppercase text-primary/70">{t("contactPage.form.message")}</label>
              <textarea
                required
                rows={6}
                value={form.message}
                onChange={onChange("message")}
                placeholder={t("contactPage.form.messagePh")}
                className="w-full bg-white border border-border px-4 py-3 font-body text-sm text-foreground focus:outline-none focus:border-primary transition-colors resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full md:w-auto px-10 py-3 font-body text-xs tracking-[0.3em] uppercase hover:opacity-90 transition-colors duration-300"
              style={{ backgroundColor: "#4A6741", color: "#FFFFFF" }}
            >
              {t("contactPage.form.send")}
            </button>
          </form>
        </Reveal>

        <Reveal className="space-y-10" delay={1}>
          <div className="space-y-5">
            <InfoRow svg={MAIL_SVG} label={t("contactPage.info.email")}>
              <a
                href="mailto:contact@atlantis12essaouira.com"
                className="font-body text-sm text-foreground/70 hover:text-foreground transition-colors"
              >
                contact@atlantis12essaouira.com
              </a>
            </InfoRow>
            <InfoRow svg={PHONE_SVG} label={t("contactPage.info.whatsapp")}>
              <a
                href="https://wa.me/212666292285"
                className="font-body text-sm text-foreground/70 hover:text-foreground transition-colors"
              >
                +212 666 29 22 85
              </a>
            </InfoRow>
            <InfoRow svg={PIN_SVG} label={t("contactPage.info.address")}>
              <p className="font-body text-sm text-foreground/70">
                {t("contactPage.info.addressLine")}
              </p>
            </InfoRow>
            <InfoRow svg={CLOCK_SVG} label={t("contactPage.info.reception")}>
              <p className="font-body text-sm text-foreground/70">{t("contactPage.info.hours")}</p>
            </InfoRow>
          </div>

          <div className="w-full aspect-[4/3] overflow-hidden relative border border-border">
            <iframe
              title="Atlantis 12 - Google Maps"
              src={`https://www.google.com/maps/embed/v1/place?key=${import.meta.env.VITE_GOOGLE_MAPS_API_KEY || 'AIzaSyDuDKKhgnHf7iCjAr4BdhrHtO8jTumEWDc'}&q=Atlantis+12+maison+d'hôtes+et+d'art,Essaouira,Morocco&zoom=15`}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 w-full h-full"
            />
          </div>
        </Reveal>
      </section>
    </div>
  );
}

function InfoRow({ svg, label, children }) {
  return (
    <div className="flex items-start gap-4">
      <Icon d={svg} />
      <div>
        <p className="font-body text-xs tracking-[0.2em] uppercase text-primary/60 mb-0.5">{label}</p>
        {children}
      </div>
    </div>
  );
}
