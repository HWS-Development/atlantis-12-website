import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function StickyRetreatButton() {
  const { t } = useTranslation();

  return (
    <Link
      to="/retreat"
      className="fixed left-1/2 -translate-x-1/2 bottom-24 md:bottom-5 z-40
                 rounded-full bg-[#E79A2E] text-white px-5 md:px-6 py-2 md:py-2.5
                 shadow-[0_8px_18px_rgba(0,0,0,.2)] hover:brightness-95
                 text-sm md:text-base font-semibold"
      aria-label={t("retreat.cta")}
    >
      {t("retreat.cta")}
    </Link>
  );
}
