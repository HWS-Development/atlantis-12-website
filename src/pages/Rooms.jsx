import { useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { rooms } from "../data/rooms";
import RoomCard from "../components/Rooms/RoomCard";
import RoomModal from "../components/Rooms/RoomModal";
import PageHero from "../components/Common/PageHero";

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

  // Decorate a room with translated name + full description for the modal
  const decorate = (r) => ({
    ...r,
    name: t(r.nameKey),
    description: t(r.descKey || r.shortKey),
  });

  const selectedRoom = useMemo(() => {
    const raw = rooms.find((r) => r.id === openId);
    return raw ? decorate(raw) : null;
  }, [openId, t]);

  // Split into featured hero + others for a tidy layout
  const hero = rooms.find((r) => r.featured);
  const others = rooms
    .filter((r) => !r.featured)
    .sort((a, b) => (a.weight ?? 999) - (b.weight ?? 999));

  return (
    <>
      <PageHero
        image="/images/view.jpg"
        title={t("rooms.title")}
        subtitle={t("rooms.subtitle")}
        align="left"
        height="md"
        overlay="dark"
      />
    <section className="container-std py-10 md:py-14">
      <header className="mb-6">
        <h1 className="font-serif text-3xl md:text-4xl">{t("rooms.title")}</h1>
        <p className="text-charcoal/75 mt-2">{t("rooms.subtitle")}</p>
      </header>

      {/* Hero (La Pluméria) */}
      {hero && (
        <div className="mb-6">
          <RoomCard
            room={hero}
            featured
            onOpen={openRoom}
          />
        </div>
      )}

      {/* 2x2 grid for the other four */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
        {others.map((room) => (
          <RoomCard key={room.id} room={room} onOpen={openRoom} />
        ))}
      </div>

      {selectedRoom && <RoomModal room={selectedRoom} onClose={closeRoom} />}
    </section>
    </>
  );
}
