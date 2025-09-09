const MAP_LINK = "https://maps.app.goo.gl/6EN1hJTrw8mtqWaf6";

export default function GoogleReviewBadge() {
  return (
    <a
      href={MAP_LINK}
      target="_blank"
      rel="noreferrer"
      className="fixed left-3 top-[72px] z-40 bg-white/95 border border-black/10 rounded-xl shadow-soft
                 px-3 py-2 flex items-center gap-2 hover:shadow-md transition"
      aria-label="Open Google reviews"
    >
      <img
        src="https://www.gstatic.com/images/branding/product/1x/google_g_24dp.png"
        alt=""
        className="w-4 h-4"
      />
      <span className="text-sm font-medium">5.0</span>
      <span aria-hidden="true">★ ★ ★ ★ ★</span>
    </a>
  );
}
