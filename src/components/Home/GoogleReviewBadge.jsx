const MAP_LINK = "https://maps.app.goo.gl/6EN1hJTrw8mtqWaf6";

export default function GoogleReviewBadge() {
  return (
    <a
      href={MAP_LINK}
      target="_blank" rel="noreferrer"
      className="fixed left-3 bottom-[12px] z-40 bg-white rounded-lg shadow-lg
                 border border-black/10 px-3 py-2 flex items-center gap-3 hover:shadow-xl transition"
      aria-label="Open Google reviews"
    >
      <img
        src="https://dev-reviews-mkp.nyc3.cdn.digitaloceanspaces.com/dev-mkp-google-reviews/google-reviews/Icons/LeadIconPack/icon-brand-google-original.svg"
        alt="Google" className="w-6 h-6"
      />
      <div className="leading-tight">
        <div className="text-[13px] font-medium -mb-0.5">Atlantis 12, maison d’hôtes…</div>
        <div className="flex items-center gap-2">
          <span className="font-semibold">5.0</span>
          <span className="text-[#F29900]">★★★★★</span>
          {/* <span className="text-[12px] text-black/60">10 REVIEWS</span> */}
        </div>
      </div>
    </a>
  );
}
