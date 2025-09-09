import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function RoomsTeaserLegacy() {
  const { t } = useTranslation();

  const items = [
    {
      id: "1",
      name: "Suite Atlantique",
      img: "https://images.unsplash.com/photo-1600585154206-0c3b3a99fd3a?w=1200&q=80&auto=format&fit=crop",
    },
    {
      id: "2",
      name: "Superior Double Room",
      img: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1200&q=80&auto=format&fit=crop",
    },
    {
      id: "3",
      name: "Suite Jardin",
      img: "https://images.unsplash.com/photo-1613977257361-609c6a1e9ef9?w=1200&q=80&auto=format&fit=crop",
    },
  ];
  const Fallback = "https://images.unsplash.com/photo-1600585154206-0c3b3a99fd3a?w=1200&q=80&auto=format&fit=crop";

  return (
    <section id="rooms" className="container-std section">
      <div className="mb-5 flex items-center justify-between">
        <h2 className="font-serif text-2xl md:text-3xl">
          {t("home.rooms.title", "Chambres & Suites")}
        </h2>
        <Link to="/rooms" className="btn-legacy btn-legacy-primary">
          {t("home.rooms.all", "Voir toutes les chambres")}
        </Link>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((r) => (
          <div className="block rounded-xl2 overflow-hidden border border-black/10 bg-white hover:shadow-md transition">
          <div className="aspect-[4/3] bg-black/[.02]">
            <img
              src={r.img}
              onError={(e)=>{ e.currentTarget.src = Fallback; }}
              alt={r.name}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="p-3"><div className="font-serif">{r.name}</div></div>
        </div>
        ))}
      </div>
    </section>
  );
}
