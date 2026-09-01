const ROOM_SLUGS = {
  "la-plumeria": "la-plumeria",
  lipomea: "l-ipomea",
  lagave: "l-agave",
  "la-coquelicot": "la-coquelicot",
  lorchis: "l-orchis",
};

export default function handler(request, response) {
  const room = Array.isArray(request.query.room) ? request.query.room[0] : request.query.room;
  const slug = ROOM_SLUGS[room];

  response.setHeader("Location", slug ? `/chambres/${slug}` : "/chambres");
  response.status(308).end();
}
