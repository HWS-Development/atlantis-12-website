import { useTranslation } from "react-i18next";

export default function RoomCard({ room, onOpen, featured = false }) {
  const { t } = useTranslation();
  const cover = room.images?.[0];

  return (
    <article className={`bg-white rounded-xl2 shadow-soft hover:shadow-lg transition overflow-hidden`}>
      {/* Image */}
      <div className="overflow-hidden">
        <img
          src={cover}
          alt={t(room.nameKey)}
          className={`w-full object-cover transition-transform duration-500 hover:scale-105
            ${featured ? "h-72 sm:h-80 md:h-96 lg:h-[440px]" : "h-56 md:h-64"}`}
          loading="lazy"
        />
      </div>

      {/* Body */}
      <div className={`flex flex-col justify-between  p-4  ${featured ? "md:p-5" : ""}`}>
        <div className="min-h-20">
          <h3 className={`font-serif ${featured ? "text-2xl" : "text-xl"} mb-2`}>
            {t(room.nameKey)}
          </h3>

          {/* short excerpt only */}
          <p
            className={`text-[14.5px] text-black/75 leading-relaxed ${
              featured ? "line-clamp-5" : "line-clamp-4"
            }`}
          >
            {t(room.shortKey)}
          </p>
        </div>

        <div className="mt-3">
          <button
            onClick={() => onOpen(room.id)}
            className="btn btn-secondary"
            aria-label={t("rooms.view")}
          >
            {t("rooms.view")}
          </button>
        </div>
      </div>
    </article>
  );
}
