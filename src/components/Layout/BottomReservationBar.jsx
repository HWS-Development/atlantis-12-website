// Global fixed bottom bar — matches live atlantis12essaouira.com:
//   - Default: green bar with "RÉSERVER VOTRE SÉJOUR" (left) and "pourquoi réserver sur notre site ?" (right)
//   - Click left button: full-width white panel slides up with date pickers + room select + guests + CTA
//   - Click right button: floating white card above the bar with checkmark bullets ("Pourquoi réserver avec nous ?")
//   - CTA "VÉRIFIER LES DISPONIBILITÉS" redirects to HotelRunner search.
import { useState } from "react";
import { useTranslation } from "react-i18next";
import ROOMS, { BOOK_URL } from "../../data/rooms";

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

// Default check-in = today + 7d, check-out = today + 14d (matches screenshot example).
function defaultDates() {
  const fmt = (d) => d.toISOString().slice(0, 10);
  const a = new Date();
  a.setDate(a.getDate() + 7);
  const b = new Date();
  b.setDate(b.getDate() + 14);
  return { arrival: fmt(a), departure: fmt(b) };
}

export default function BottomReservationBar() {
  const { t } = useTranslation();
  const [reserveOpen, setReserveOpen] = useState(false);
  const [whyOpen, setWhyOpen] = useState(false);

  const init = defaultDates();
  const [arrival, setArrival] = useState(init.arrival);
  const [departure, setDeparture] = useState(init.departure);
  const [roomSlug, setRoomSlug] = useState(""); // "" = any
  const [guests, setGuests] = useState(2);

  const submitBooking = (e) => {
    e?.preventDefault?.();
    // HotelRunner BV3 search; pass dates and adults (best-effort param names).
    const url = new URL(BOOK_URL);
    url.searchParams.set("check_in", arrival);
    url.searchParams.set("check_out", departure);
    url.searchParams.set("adults", String(guests));
    if (roomSlug) url.searchParams.set("room", roomSlug);
    window.open(url.toString(), "_blank", "noopener,noreferrer");
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 m-0 p-0">
      {/* "Pourquoi réserver" — floating white card, right-aligned above the bar */}
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
                  t("bottomBar.why.li2", "Pension complète possible"),
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
              </ul>
            </div>
          </div>
        </>
      )}

      {/* "Réserver un séjour" — full-width white panel above the bar */}
      {reserveOpen && (
        <div className="bg-white border-t border-black/5 shadow-[0_-4px_20px_rgba(0,0,0,0.04)]">
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

            <form
              onSubmit={submitBooking}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
            >
              <div>
                <label className="block font-body text-[11px] tracking-[0.25em] uppercase text-foreground/60 mb-2">
                  {t("bottomBar.form.arrival", "Arrivée")}
                </label>
                <input
                  type="date"
                  value={arrival}
                  onChange={(e) => setArrival(e.target.value)}
                  className="w-full border border-foreground/15 px-3 py-2.5 font-body text-sm text-foreground/80 focus:outline-none focus:border-primary"
                />
              </div>

              <div>
                <label className="block font-body text-[11px] tracking-[0.25em] uppercase text-foreground/60 mb-2">
                  {t("bottomBar.form.departure", "Départ")}
                </label>
                <input
                  type="date"
                  value={departure}
                  min={arrival}
                  onChange={(e) => setDeparture(e.target.value)}
                  className="w-full border border-foreground/15 px-3 py-2.5 font-body text-sm text-foreground/80 focus:outline-none focus:border-primary"
                />
              </div>

              <div>
                <label className="block font-body text-[11px] tracking-[0.25em] uppercase text-foreground/60 mb-2">
                  {t("bottomBar.form.room", "Chambre")}
                </label>
                <select
                  value={roomSlug}
                  onChange={(e) => setRoomSlug(e.target.value)}
                  className="w-full border border-foreground/15 px-3 py-2.5 font-body text-sm text-foreground/80 focus:outline-none focus:border-primary bg-white"
                >
                  <option value="">{t("bottomBar.form.anyRoom", "Toutes les chambres")}</option>
                  {ROOMS.map((r) => (
                    <option key={r.slug} value={r.slug}>
                      {r.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block font-body text-[11px] tracking-[0.25em] uppercase text-foreground/60 mb-2">
                  {t("bottomBar.form.guests", "Voyageurs")}
                </label>
                <div className="flex items-center border border-foreground/15">
                  <button
                    type="button"
                    aria-label="-"
                    onClick={() => setGuests((g) => Math.max(1, g - 1))}
                    className="px-3 py-2.5 font-body text-base text-foreground/60 hover:text-primary transition-colors"
                  >
                    −
                  </button>
                  <span className="flex-1 text-center font-body text-sm text-foreground/80">
                    {guests}
                  </span>
                  <button
                    type="button"
                    aria-label="+"
                    onClick={() => setGuests((g) => Math.min(10, g + 1))}
                    className="px-3 py-2.5 font-body text-base text-foreground/60 hover:text-primary transition-colors"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="sm:col-span-2 lg:col-span-4">
                <button
                  type="submit"
                  className="font-body text-xs tracking-[0.3em] uppercase text-white bg-primary px-8 py-3.5 hover:bg-secondary transition-colors duration-300"
                >
                  {t("bottomBar.form.cta", "Vérifier les disponibilités")}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Bar itself */}
      <div
        className="flex items-center justify-between py-3.5 text-primary-foreground gap-4 m-0"
        style={{
          backgroundColor: "#496246",
          width: "100vw",
          marginLeft: "calc(50% - 50vw)",
          paddingLeft: "1.5rem",
          paddingRight: "1.5rem",
        }}
      >
        <button
          type="button"
          className="flex items-center gap-[10px] min-w-0"
          onClick={() => {
            setReserveOpen((v) => !v);
            setWhyOpen(false);
          }}
        >
          <CalendarIcon />
          <span
            className="font-display whitespace-nowrap overflow-hidden text-ellipsis"
            style={{
              fontSize: "clamp(14px, 2.8vw, 19px)",
              fontWeight: 400,
              color: "rgb(255, 255, 255)",
            }}
          >
            {t("bottomBar.bar.cta", "Réserver votre séjour")}
          </span>
          <ChevronDown open={reserveOpen} />
        </button>

        <button
          type="button"
          className="flex items-center justify-center gap-2 md:gap-3 px-2 md:px-4 py-2 hover:bg-primary-foreground/10 transition-colors ml-auto flex-shrink-0"
          onClick={() => {
            setWhyOpen((v) => !v);
            setReserveOpen(false);
          }}
        >
          <span
            className="font-body italic whitespace-nowrap font-bold"
            style={{ fontSize: "clamp(11px, 2.4vw, 15px)", color: "rgb(255,255,255)" }}
          >
            {t("bottomBar.bar.why", "pourquoi réserver sur notre site ?")}
          </span>
          <PlusIcon open={whyOpen} />
        </button>
      </div>
    </div>
  );
}
