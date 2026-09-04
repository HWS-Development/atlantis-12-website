import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import HotelRunnerSearchWidget from "../Common/HotelRunnerSearchWidget";
import { OPEN_BOOKING_EVENT } from "../../data/rooms";

const CalendarIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="rgb(255,255,255)"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-[15px] h-[15px] flex-shrink-0"
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
    stroke="rgb(255,255,255)"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`w-[15px] h-[15px] flex-shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
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
    stroke="rgb(255,255,255)"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`w-4 h-4 md:w-6 md:h-6 flex-shrink-0 transition-transform duration-300 ${open ? "rotate-45" : ""}`}
  >
    <path d="M5 12h14" />
    <path d="M12 5v14" />
  </svg>
);

const CloseIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-5 h-5"
  >
    <path d="M18 6 6 18" />
    <path d="m6 6 12 12" />
  </svg>
);

const CheckIcon = () => (
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
    className="w-4 h-4 flex-shrink-0 text-primary"
  >
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

export default function BottomReservationBar() {
  const { t } = useTranslation();
  const [reserveOpen, setReserveOpen] = useState(false);
  const [whyOpen, setWhyOpen] = useState(false);

  useEffect(() => {
    const openBooking = () => {
      setReserveOpen(true);
      setWhyOpen(false);
    };

    window.addEventListener(OPEN_BOOKING_EVENT, openBooking);
    return () => window.removeEventListener(OPEN_BOOKING_EVENT, openBooking);
  }, []);

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 m-0 p-0">
      {whyOpen && (
        <>
          <button
            type="button"
            aria-label={t("bottomBar.close", "Fermer")}
            onClick={() => setWhyOpen(false)}
            className="fixed inset-x-0 top-[82px] bottom-[53px] bg-[#d0d0d0]/85"
          />

          <div className="pointer-events-none absolute bottom-full right-0 left-0 flex justify-end px-4 md:px-10 pb-[6px]">
            <div className="pointer-events-auto w-full max-w-[448px] md:mr-[18vw] rounded-[3px] bg-white px-8 pt-8 pb-7 shadow-[0_18px_40px_rgba(0,0,0,0.12)]">
              <div className="mb-6 flex items-start justify-between gap-4">
                <p className="font-display text-[24px] leading-none text-primary">
                  {t("bottomBar.why.title", "Pourquoi réserver avec nous ?")}
                </p>
                <button
                  type="button"
                  aria-label={t("bottomBar.close", "Fermer")}
                  onClick={() => setWhyOpen(false)}
                  className="-mt-1 text-[#c2c2b8] transition-colors hover:text-[#a7a79e]"
                >
                  <CloseIcon />
                </button>
              </div>

              <ul className="space-y-6">
                {[
                  t("bottomBar.why.li1", "Meilleur tarif garanti"),
                  t("bottomBar.why.li2", "Demi-pension, exclusivement sur notre site"),
                  t("bottomBar.why.li3", "Réservation en ligne sécurisée"),
                  t("bottomBar.why.li4", "Service personnalisé"),
                ].map((label, i) => (
                  <li key={i} className="flex items-center gap-4">
                    <CheckIcon />
                    <span className="font-body text-[15px] leading-[1.25] text-[#8f978d]">
                      {label}
                    </span>
                  </li>
                ))}
                <li className="flex items-center gap-4">
                  <CheckIcon />
                  <span className="font-body text-[15px] leading-[1.25] font-bold" style={{ color: "#4A6741" }}>
                    {t("bottomBar.why.li5", "Visite de l'atelier de l'artiste")}
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </>
      )}

      {reserveOpen && (
        <div className="max-h-[calc(100dvh-64px)] overflow-y-auto overscroll-contain bg-white border-t border-black/5 shadow-[0_-4px_20px_rgba(0,0,0,0.04)]">
          <div className="max-w-5xl mx-auto px-6 md:px-10 py-7 md:py-9">
            <div className="flex items-start justify-between mb-5">
              <p className="font-display text-2xl md:text-3xl text-foreground">
                {t("bottomBar.reserve.title", "Réserver un séjour")}
              </p>
              <button
                type="button"
                aria-label={t("bottomBar.close", "Fermer")}
                onClick={() => setReserveOpen(false)}
                className="text-foreground/40 hover:text-foreground transition-colors mt-2"
              >
                <CloseIcon />
              </button>
            </div>
            <HotelRunnerSearchWidget />
          </div>
        </div>
      )}

      <div
        className="flex items-center justify-between py-3.5 text-white gap-4 m-0 border-t"
        style={{
          backgroundColor: "#496246",
          borderTopColor: "#C8B99A",
          boxShadow: "0 -2px 6px rgba(0,0,0,0.15)",
          width: "100vw",
          marginLeft: "calc(50% - 50vw)",
          paddingLeft: "1.5rem",
          paddingRight: "1.5rem",
          paddingBottom: "calc(0.875rem + env(safe-area-inset-bottom, 0px))",
        }}
      >
        <button
          type="button"
          className="flex flex-shrink-0 items-center gap-[10px]"
          onClick={() => {
            setReserveOpen((v) => !v);
            setWhyOpen(false);
          }}
        >
          <CalendarIcon />
          <span
            className="font-display whitespace-nowrap md:hidden"
            style={{
              fontSize: "clamp(20px, 5.2vw, 22px)",
              fontWeight: 600,
              color: "#ffffff",
            }}
          >
            {t("bottomBar.bar.ctaMobile", "Réserver")}
          </span>
          <span
            className="font-display whitespace-nowrap overflow-hidden text-ellipsis hidden md:inline"
            style={{
              fontSize: "23px",
              fontWeight: 600,
              color: "#ffffff",
            }}
          >
            {t("bottomBar.bar.cta", "Réserver votre séjour")}
          </span>
          <ChevronDown open={reserveOpen} />
        </button>

        <button
          type="button"
          className="flex min-w-0 items-center justify-end gap-2 md:gap-3 px-1 md:px-4 py-2 hover:bg-white/10 transition-colors ml-auto"
          onClick={() => {
            setWhyOpen((v) => !v);
            setReserveOpen(false);
          }}
        >
          <span
            className="font-display whitespace-nowrap overflow-hidden text-ellipsis"
            style={{ fontSize: "clamp(17px, 3vw, 19px)", color: "#ffffff", fontWeight: 400 }}
          >
            {t("bottomBar.bar.why", "pourquoi réserver sur notre site ?")}
          </span>
          <PlusIcon open={whyOpen} />
        </button>
      </div>
    </div>
  );
}
