// Global fixed bottom bar — present on every page of atlantis12essaouira.com
// Markup mirrors reference/<page>/body.pretty.html (last <div class="fixed bottom-0 …">)
import { useState } from "react";
import { useTranslation } from "react-i18next";

const CalendarIcon = () => (
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
    className="w-4 h-4 opacity-70 flex-shrink-0"
  >
    <path d="M8 2v4" />
    <path d="M16 2v4" />
    <rect width="18" height="18" x="3" y="4" rx="2" />
    <path d="M3 10h18" />
  </svg>
);

const ChevronDown = ({ open }) => (
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
    className={`w-5 h-5 flex-shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
  >
    <path d="m6 9 6 6 6-6" />
  </svg>
);

const PlusIcon = ({ open }) => (
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
    className={`w-4 h-4 md:w-6 md:h-6 flex-shrink-0 transition-transform duration-300 ${open ? "rotate-45" : ""}`}
  >
    <path d="M5 12h14" />
    <path d="M12 5v14" />
  </svg>
);

export default function BottomReservationBar() {
  const { t } = useTranslation();
  const [reserveOpen, setReserveOpen] = useState(false);
  const [whyOpen, setWhyOpen] = useState(false);

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 m-0 p-0">
      {/* Why-book panel (expanded above the bar) */}
      {whyOpen && (
        <div className="bg-card border-t border-primary/15 px-6 md:px-12 py-6 md:py-8 max-h-[60vh] overflow-y-auto">
          <div className="max-w-3xl mx-auto space-y-4">
            <p className="font-display text-2xl md:text-3xl text-foreground">
              {t("bottomBar.why.title", "Pourquoi réserver sur notre site ?")}
            </p>
            <ul className="font-body text-sm leading-relaxed text-foreground/75 space-y-2 list-disc pl-5">
              <li>{t("bottomBar.why.li1", "Tarif direct, sans commission de plateforme.")}</li>
              <li>{t("bottomBar.why.li2", "Confirmation immédiate de notre part, par email ou WhatsApp.")}</li>
              <li>
                {t(
                  "bottomBar.why.li3",
                  "Une vraie conversation : nous adaptons votre séjour (transferts, repas, expériences) à vos envies."
                )}
              </li>
              <li>{t("bottomBar.why.li4", "Annulation simple et flexible, sans intermédiaire.")}</li>
            </ul>
            <p className="font-body text-xs text-foreground/50 pt-2">
              {t("bottomBar.why.contact", "Pour toute question :")}{" "}
              <a className="underline" href="mailto:contact@atlantis12essaouira.com">
                contact@atlantis12essaouira.com
              </a>{" "}
              ·{" "}
              <a className="underline" href="https://wa.me/212666292285" target="_blank" rel="noreferrer">
                WhatsApp +212 666 29 22 85
              </a>
            </p>
          </div>
        </div>
      )}

      {/* Reservation widget panel (expanded above the bar) */}
      {reserveOpen && (
        <div className="bg-background border-t border-primary/15 px-6 md:px-12 py-6 md:py-8 max-h-[70vh] overflow-y-auto">
          <div className="max-w-3xl mx-auto space-y-4">
            <p className="font-display text-2xl md:text-3xl text-foreground">
              {t("bottomBar.reserve.title", "Réserver votre séjour")}
            </p>
            <p className="font-body text-sm text-foreground/65">
              {t(
                "bottomBar.reserve.intro",
                "Écrivez-nous vos dates et le nombre de voyageurs — nous revenons vers vous rapidement avec une confirmation et les détails pratiques."
              )}
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href="mailto:contact@atlantis12essaouira.com?subject=Demande%20de%20r%C3%A9servation%20%E2%80%94%20Atlantis%2012"
                className="font-body text-xs tracking-[0.3em] uppercase text-primary border border-primary/40 px-6 py-2.5 hover:bg-primary/10 transition-colors"
              >
                {t("bottomBar.email", "Email")}
              </a>
              <a
                href="https://wa.me/212666292285"
                target="_blank"
                rel="noreferrer"
                className="font-body text-xs tracking-[0.3em] uppercase text-primary border border-primary/40 px-6 py-2.5 hover:bg-primary/10 transition-colors"
              >
                {t("bottomBar.whatsapp", "WhatsApp")}
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Bar itself — verbatim layout */}
      <div
        className="flex items-center justify-between py-3.5 bg-primary text-primary-foreground gap-4 m-0"
        style={{
          width: "100vw",
          marginLeft: "calc(50% - 50vw)",
          paddingLeft: "1.5rem",
          paddingRight: "1.5rem",
        }}
      >
        <button
          type="button"
          className="flex items-center gap-2 min-w-0"
          onClick={() => {
            setReserveOpen((v) => !v);
            setWhyOpen(false);
          }}
        >
          <CalendarIcon />
          <span
            className="font-body uppercase whitespace-nowrap overflow-hidden text-ellipsis"
            style={{
              fontSize: "clamp(8px, 3vw, 14px)",
              fontWeight: 800,
              letterSpacing: "0.1em",
              color: "rgb(255, 255, 255)",
            }}
          >
            {t("bottomBar.bar.cta", "Réserver votre séjour")}
          </span>
          <ChevronDown open={reserveOpen} />
        </button>

        <button
          type="button"
          className="flex items-center justify-center gap-1 md:gap-2 px-2 md:px-4 py-2 hover:bg-primary-foreground/10 transition-colors ml-auto flex-shrink-0"
          onClick={() => {
            setWhyOpen((v) => !v);
            setReserveOpen(false);
          }}
        >
          <span className="font-display hidden md:block" style={{ fontSize: "0.85rem" }}>
            {t("bottomBar.bar.whyDesktop", "pourquoi réserver sur notre site ?")}
          </span>
          <span className="font-display block md:hidden" style={{ fontSize: "0.75rem" }}>
            {t("bottomBar.bar.whyMobile", "Pourquoi ici ?")}
          </span>
          <PlusIcon open={whyOpen} />
        </button>
      </div>
    </div>
  );
}
