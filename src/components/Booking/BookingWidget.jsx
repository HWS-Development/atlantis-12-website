import { useState } from "react";
import { useTranslation } from "react-i18next";

const BASE_URL = "https://atlantis-12-maison-d-hotes-et-d-art.hotelrunner.com/bv3/search";

export default function BookingWidget({ compact = false }) {
  const { t } = useTranslation();
  const [checkin, setCheckin] = useState("");
  const [checkout, setCheckout] = useState("");
  const [adults, setAdults] = useState(2);

  const go = () => {
    const params = new URLSearchParams();
    if (checkin) params.set("checkin", checkin);
    if (checkout) params.set("checkout", checkout);
    if (adults) params.set("adults", String(adults));
    const url = params.toString() ? `${BASE_URL}?${params.toString()}` : BASE_URL;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className={`card ${compact ? "p-3 md:p-4" : "p-4 md:p-6"} bg-sand/90 backdrop-blur`}>
      {!compact && <h3 className="font-serif text-lg md:text-xl mb-3">{t("home.booking.title")}</h3>}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-2 md:gap-3 items-end">
        <div className="col-span-2 md:col-span-2">
          <label className="block text-xs md:text-sm mb-1">{t("home.booking.checkin")}</label>
          <input type="date" value={checkin} onChange={e=>setCheckin(e.target.value)}
                 className="w-full border rounded-xl2 px-3 py-2" />
        </div>
        <div className="col-span-2 md:col-span-2">
          <label className="block text-xs md:text-sm mb-1">{t("home.booking.checkout")}</label>
          <input type="date" value={checkout} onChange={e=>setCheckout(e.target.value)}
                 className="w-full border rounded-xl2 px-3 py-2" />
        </div>
        <div className="col-span-2 md:col-span-1">
          <label className="block text-xs md:text-sm mb-1">{t("home.booking.adults")}</label>
          <input type="number" min="1" value={adults}
                 onChange={e=>setAdults(parseInt(e.target.value || "1",10))}
                 className="w-full border rounded-xl2 px-3 py-2" />
        </div>
      </div>
        <div className="flex justify-center items-center w-full pt-4">
          <button onClick={go} className="px-12 py-3 rounded-full bg-olive text-white font-medium shadow-md
               hover:bg-olive-dark hover:shadow-lg hover:-translate-y-[1px] transition-all duration-300">{t("home.booking.search")}</button>
        </div>
    </div>
  );
}
