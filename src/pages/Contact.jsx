import { useState } from "react";
import { useTranslation } from "react-i18next";
import Reveal from "../components/Common/Reveal";

const FORMSPREE_ENDPOINT = import.meta.env.VITE_FORMSPREE_ENDPOINT || "https://formspree.io/f/mvzjqwyo";

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

export default function Contact() {
  const { t, i18n } = useTranslation();
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitStatus, setSubmitStatus] = useState("idle");
  const subjects = t("contactPage.subjects", { returnObjects: true });
  const isSending = submitStatus === "sending";

  const onChange = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));
  const onSubmit = async (e) => {
    e.preventDefault();
    setSubmitStatus("sending");

    try {
      if (!FORMSPREE_ENDPOINT) throw new Error("Missing Formspree endpoint");

      const subject = form.subject || t("contactPage.form.mailSubject");
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          subject,
          message: form.message,
          language: i18n.language || "fr",
          _replyto: form.email,
          _subject: `Atlantis 12 - ${subject}`,
        }),
      });

      if (!response.ok) throw new Error("Contact request failed");

      setForm({ name: "", email: "", subject: "", message: "" });
      setSubmitStatus("success");
    } catch {
      setSubmitStatus("error");
    }
  };

  return (
    <div className="bg-background min-h-screen text-foreground">
      <div className="w-full flex items-center justify-center pt-28 pb-4 bg-white" style={{ lineHeight: 0 }}>
        <img
          src="/images/logo/logo-aquarelle-maison-hotes-art-atlantis12-essaouira.png"
          alt={t("contactPage.logoAlt")}
          className="w-[220px] md:w-[260px] h-auto object-contain block"
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
          {t("contactPage.heroSubline", "ATLANTIS 12, MAISON D'HÃ”TES ET D'ART Ã€ ESSAOUIRA")}
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
                className="w-full bg-white border border-border px-4 py-3 font-body text-sm text-foreground placeholder:text-[#1F1F1F] focus:outline-none focus:border-primary transition-colors"
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
                className="w-full bg-white border border-border px-4 py-3 font-body text-sm text-foreground placeholder:text-[#1F1F1F] focus:outline-none focus:border-primary transition-colors"
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
                className="w-full bg-white border border-border px-4 py-3 font-body text-sm text-foreground placeholder:text-[#1F1F1F] focus:outline-none focus:border-primary transition-colors resize-none"
              />
            </div>
            <button
              type="submit"
              disabled={isSending}
              className={`w-full md:w-auto px-10 py-3 font-body text-xs tracking-[0.3em] uppercase transition-colors duration-300 ${
                isSending ? "cursor-wait opacity-70" : "hover:opacity-90"
              }`}
              style={{ backgroundColor: "#4A6741", color: "#FFFFFF" }}
            >
              {isSending ? t("contactPage.form.sending") : t("contactPage.form.send")}
            </button>
            <div aria-live="polite" className="min-h-5">
              {submitStatus === "success" && (
                <p className="font-body text-sm text-primary">{t("contactPage.form.success")}</p>
              )}
              {submitStatus === "error" && (
                <p className="font-body text-sm text-red-700">{t("contactPage.form.error")}</p>
              )}
            </div>
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
              src="https://www.google.com/maps?q=Atlantis+12+Essaouira+Morocco&output=embed"
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
