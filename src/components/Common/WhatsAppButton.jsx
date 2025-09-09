import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export default function WhatsAppButton() {
  const { t } = useTranslation();
  const [open, setOpen] = useState(true);

  useEffect(() => {
    const id = setTimeout(() => setOpen(false), 4000);
    return () => clearTimeout(id);
  }, []);

  return (
    <>
      {/* bubble */}
      {open && (
        <div className="fixed right-5 bottom-28 z-40 bg-white border border-black/10 shadow-lg rounded-xl px-3 py-2 text-sm">
          {t("whatsapp.bubble")}
        </div>
      )}
      {/* button */}
      <a
        href="https://wa.me/212000000000" /* TODO: put real number */
        target="_blank" rel="noreferrer"
        className="fixed right-5 bottom-16 z-40 h-12 w-12 rounded-full bg-[#25D366] text-white
                   flex items-center justify-center shadow-xl hover:scale-105 transition"
        aria-label={t("whatsapp.cta")}
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
      >
        {/* WhatsApp icon */}
        <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
          <path d="M20 4.9A10 10 0 1 0 4.9 20L4 24l4-1a10 10 0 0 0 12-12ZM7 10.5c0 1.2.7 2.6 1.7 3.5 1 1 2.3 1.7 3.5 1.7.8 0 1.1-.3 1.5-.9l.2-.3c.1-.2.1-.4-.1-.5l-1.2-1c-.2-.1-.4-.1-.5.1l-.3.5c-.1.2-.3.3-.5.3-.7 0-2-1.2-2.3-1.9-.1-.2 0-.4.1-.5l.4-.4c.2-.2.2-.4.1-.6L9.8 9c-.1-.2-.3-.3-.5-.3H9c-.5 0-2 .7-2 1.8Z"/>
        </svg>
      </a>
    </>
  );
}
