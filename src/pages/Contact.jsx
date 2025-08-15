import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import emailjs from "@emailjs/browser";

const MAP_LINK = "https://maps.app.goo.gl/6EN1hJTrw8mtqWaf6";
const MAP_EMBED =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3400.3571414543617!2d-9.692721124548028!3d31.541811874204157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdad9b7a667f5f1f%3A0xcbe94fd87069019d!2sAtlantis%2012%20Maison%20d'h%C3%B4tes%20%26%20d'art!5e0!3m2!1sen!2sma!4v1755096575772!5m2!1sen!2sma";

export default function Contact() {
  const { t, i18n } = useTranslation();
  const formRef = useRef(null);
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [errors, setErrors] = useState({});

  const validate = (data) => {
    const e = {};
    if (!data.name?.trim()) e.name = true;
    if (!data.email?.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) e.email = true;
    if (!data.message?.trim()) e.message = true;
    return e;
  };

  const onSubmit = async (ev) => {
    ev.preventDefault();
    const fd = new FormData(formRef.current);
    const data = Object.fromEntries(fd.entries());
    const e = validate(data);
    setErrors(e);
    if (Object.keys(e).length) return;

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
      formRef.current.reset();
      setTimeout(() => setStatus("idle"), 4000);
    } catch (err) {
      console.error(err);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  return (
    <section className="container-std py-10 md:py-14">
      <header className="mb-8">
        <h1 className="font-serif text-3xl md:text-4xl">{t("contact.title")}</h1>
        <p className="text-charcoal/75 mt-2">{t("contact.subtitle")}</p>
      </header>

      <div className="grid md:grid-cols-3 gap-6">
        {/* Form */}
        <form ref={formRef} onSubmit={onSubmit} className="md:col-span-2 card p-5 md:p-6 space-y-4">
        <h1 className="font-serif text-3xl md:text-4xl py-6 text-center">{t("contact.form.title")}</h1>
          <div>
            <label className="block text-sm mb-1">{t("contact.form.name")}</label>
            <input
              name="name"
              type="text"
              className={`w-full border rounded-xl2 px-3 py-2 ${errors.name ? "border-red-400" : ""}`}
              placeholder="Jane Doe"
            />
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm mb-1">{t("contact.form.email")}</label>
              <input
                name="email"
                type="email"
                className={`w-full border rounded-xl2 px-3 py-2 ${errors.email ? "border-red-400" : ""}`}
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="block text-sm mb-1">{t("contact.form.phone")}</label>
              <input
                name="phone"
                type="tel"
                className="w-full border rounded-xl2 px-3 py-2"
                placeholder="+212 6 12 34 56 78"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm mb-1">{t("contact.form.message")}</label>
            <textarea
              name="message"
              rows="5"
              className={`w-full border rounded-xl2 px-3 py-2 ${errors.message ? "border-red-400" : ""}`}
              placeholder="..."
            />
          </div>

          <div className="flex items-center gap-3">
            <button
              type="submit"
              className="btn btn-primary px-8 py-3"
              disabled={status === "sending"}
            >
              {status === "sending" ? "..." : t("contact.form.send")}
            </button>

            {status === "success" && (
              <span className="text-green-700">{t("contact.form.success")}</span>
            )}
            {status === "error" && (
              <span className="text-red-600">{t("contact.form.error")}</span>
            )}
          </div>
        </form>

        {/* Info + Map */}
        <aside className="card p-5 md:p-6 flex flex-col gap-4">
          <div>
            <h3 className="font-serif text-xl mb-2">{t("contact.info.address_title")}</h3>
            <p className="text-sm text-charcoal/80">{t("contact.info.address")}</p>
          </div>

          <div>
            <h3 className="font-serif text-xl mb-2">{t("contact.info.contact_title")}</h3>
            <ul className="space-y-1 text-sm text-charcoal/80">
              <li>
                <strong>{t("contact.info.email_label")}:</strong>{" "}
                <a className="underline" href="mailto:resa@atlantis12essaouira.com">resa@atlantis12essaouira.com</a>
              </li>
              <li>
                <strong>{t("contact.info.phone_label")}:</strong>{" "}
                <a className="underline" href="tel:+212612345678">+212 666 29 22 85</a>
              </li>
              <li>
                <strong>{t("contact.info.whatsapp")}:</strong>{" "}
                <a className="underline" href="https://wa.me/212666292285" target="_blank" rel="noreferrer">
                  +212 666 29 22 85
                </a>
              </li>
            </ul>
          </div>

          <div className="rounded-xl2 overflow-hidden shadow-soft">
            <div className="relative w-full h-[260px] md:h-[300px]">
              <iframe
                title="Atlantis 12 Map"
                src={MAP_EMBED}
                className="absolute inset-0 w-full h-full"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <div>
            <a
              href={MAP_LINK}
              target="_blank"
              rel="noreferrer"
              className="btn btn-secondary "
            >
              {t("contact.info.open_map")}
            </a>
          </div>
        </aside>
      </div>
    </section>
  );
}
