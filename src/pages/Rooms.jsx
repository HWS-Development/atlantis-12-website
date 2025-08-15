import { useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { rooms } from "../data/rooms";
import RoomCard from "../components/Rooms/RoomCard";
import RoomModal from "../components/Rooms/RoomModal";

export default function Rooms() {
  const [openId, setOpenId] = useState(null);
  const { t } = useTranslation();

  const openRoom = (id) => {
    setOpenId(id);
    if (window.location.hash !== `#${id}`) history.pushState(null, "", `#${id}`);
  };
  const closeRoom = () => {
    setOpenId(null);
    if (window.location.hash) history.replaceState(null, "", " ");
  };

  useEffect(() => {
    const handleHash = () => {
      const id = window.location.hash.replace("#", "");
      if (id && rooms.find((r) => r.id === id)) setOpenId(id);
      else setOpenId(null);
    };
    handleHash();
    window.addEventListener("hashchange", handleHash);
    return () => window.removeEventListener("hashchange", handleHash);
  }, []);

  const selectedRoom = useMemo(() => rooms.find((r) => r.id === openId) || null, [openId]);

  return (
    <section className="container-std py-10 md:py-14">
      <header className="mb-6">
        <h1 className="font-serif text-3xl md:text-4xl">{t("rooms.title")}</h1>
        <p className="text-charcoal/75 mt-2">{t("rooms.subtitle")}</p>
      </header>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {rooms.map((room) => (
          <RoomCard key={room.id} room={room} onOpen={openRoom} />
        ))}
      </div>

      {selectedRoom && <RoomModal room={selectedRoom} onClose={closeRoom} />}
    </section>
  );
}
