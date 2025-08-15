import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function RoomsTeaser() {
  const { t } = useTranslation();

  const rooms = [
    { id: 1, name: "Suite Atlantique", img: "/images/rooms/Double Room with Garden View1.jpg" },
    { id: 2, name: "Superior Double Room", img: "/images/rooms/Superior Double Room1.jpg" },
    { id: 3, name: "Suite Jardin",     img: "/images/rooms/4Double Room with Garden View1.jpg" }
  ];

  return (
    <section className="container-std py-10 md:py-14">
      <div className="flex items-end justify-between mb-4">
        <h2 className="font-serif text-3xl">{t("home.roomsTeaser.title")}</h2>
        <Link to="/rooms" className="btn btn-ghost">{t("home.roomsTeaser.seeAll")}</Link>
      </div>

      <div className="grid md:grid-cols-3 gap-4 md:gap-6">
        {rooms.map((r) => (
          <Link key={r.id} to={`/rooms#${r.id}`} className="card overflow-hidden group">
            <div className="aspect-[4/3]">
              <img
                src={r.img}
                alt={r.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-4">
              <h3 className="font-serif text-lg">{r.name}</h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
