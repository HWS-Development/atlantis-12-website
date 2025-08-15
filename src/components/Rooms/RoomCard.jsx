export default function RoomCard({ room, onOpen }) {
    return (
      <button
        onClick={() => onOpen(room.id)}
        className="card overflow-hidden text-left group"
        aria-label={`Open details for ${room.name}`}
      >
        <div className="aspect-[4/3]">
          <img
            src={room.images[0]}
            alt={room.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="p-4">
          <h3 className="font-serif text-xl">{room.name}</h3>
          <p className="mt-1 text-sm text-charcoal/70">{room.short}</p>
        </div>
      </button>
    );
  }
  