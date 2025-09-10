import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import emailjs from "@emailjs/browser";

export default function HomeContactInline() {
  const { t, i18n } = useTranslation();
  const formRef = useRef(null);
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const onSubmit = async (e) => {
    e.preventDefault();
    const fd = new FormData(formRef.current);
    const data = Object.fromEntries(fd.entries());
    if (!data.name || !data.email || !data.message) return;

    setStatus("sending");
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: data.name,
          from_email: data.email,
          phone: data.phone || "",
          message: data.message,
          lang: i18n.language,
          page: window.location.href,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      setStatus("success");
      formRef.current?.reset();
      setTimeout(() => setStatus("idle"), 4000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  return (
    <section id="contact" className="container-std section">
      <h2 className="title-smallcaps text-[26px] text-center mb-6">
        {t("home.contact.title")}
      </h2>

      <form
        ref={formRef}
        onSubmit={onSubmit}
        className="mx-auto max-w-3xl grid md:grid-cols-2 gap-4 card-plain p-4"
      >
        <div className="md:col-span-1">
          <label className="block text-sm mb-1">{t("home.contact.name")}</label>
          <input name="name" type="text" className="field" placeholder="Jane Doe" />
        </div>
        <div className="md:col-span-1">
          <label className="block text-sm mb-1">{t("home.contact.phone")}</label>
          <input name="phone" type="tel" className="field" placeholder="+212 ..." />
        </div>
        <div className="md:col-span-2">
          <label className="block text-sm mb-1">{t("home.contact.email")}</label>
          <input name="email" type="email" className="field" placeholder="you@example.com" />
        </div>
        <div className="md:col-span-2">
          <label className="block text-sm mb-1">{t("home.contact.message")}</label>
          <textarea name="message" rows="4" className="field" placeholder="..."></textarea>
        </div>

        <div className="md:col-span-2 flex items-center gap-3">
          <button
            type="submit"
            className="btn-legacy btn-legacy-primary"
            disabled={status === "sending"}
          >
            {status === "sending" ? t("home.contact.sending") : t("home.contact.send")}
          </button>
          {status === "success" && (
            <span className="text-green-700">{t("home.contact.success")}</span>
          )}
          {status === "error" && (
            <span className="text-red-600">{t("home.contact.error")}</span>
          )}
        </div>
      </form>
    </section>
  );
}
