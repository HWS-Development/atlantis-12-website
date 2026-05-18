// ReviewsSection — "CE QU'ILS EN DISENT — Paroles de voyageurs"
//   Fetches live Google reviews via Maps JavaScript API (Places library).
//   Falls back to static i18n reviews if API unavailable or key restricted.
import { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import Reveal from "../Common/Reveal";

const PLACE_ID = "ChIJz4yJ76SaDBkRKk9cbaQh9Fc"; // Atlantis 12 Essaouira
const API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY || "";

const GOOGLE_REVIEWS_URL =
  "https://www.google.com/maps/place/?q=place_id:" + PLACE_ID;

function StarIcon({ size = "w-5 h-5", filled = true }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill={filled ? "currentColor" : "none"}
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`${size} text-primary`}
      aria-hidden
    >
      <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
    </svg>
  );
}

function QuoteIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-8 h-8 text-primary/20"
      aria-hidden
    >
      <path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" />
      <path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" />
    </svg>
  );
}

function ChevronLeft() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
      <path d="m15 18-6-6 6-6" />
    </svg>
  );
}
function ChevronRight() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}
function GoogleG() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4" aria-hidden>
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
    </svg>
  );
}

// Helper: get initials from author_name
function getInitials(name) {
  if (!name) return "?";
  const parts = name.trim().split(/\s+/);
  if (parts.length === 1) return parts[0][0].toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

// Load Google Maps JS API script (once)
let mapsPromise = null;
function loadGoogleMapsAPI() {
  if (mapsPromise) return mapsPromise;
  if (!API_KEY) return Promise.reject(new Error("No API key"));
  // Check if already loaded
  if (window.google?.maps?.places) return Promise.resolve(window.google.maps.places);

  mapsPromise = new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${API_KEY}&libraries=places`;
    script.async = true;
    script.defer = true;
    script.onload = () => {
      if (window.google?.maps?.places) resolve(window.google.maps.places);
      else reject(new Error("Places library not available"));
    };
    script.onerror = () => reject(new Error("Failed to load Google Maps API"));
    document.head.appendChild(script);
  });
  return mapsPromise;
}

export default function ReviewsSection() {
  const { t } = useTranslation();
  const mapRef = useRef(null); // hidden div for PlacesService

  // Static fallback reviews from i18n
  const reviewsRaw = t("home.reviews.items", { returnObjects: true });
  const staticReviews = Array.isArray(reviewsRaw) ? reviewsRaw : [];

  // Live Google data
  const [liveReviews, setLiveReviews] = useState(null); // null = not loaded yet
  const [rating, setRating] = useState(5.0);
  const [reviewCount, setReviewCount] = useState(staticReviews.length || 3);

  useEffect(() => {
    if (!API_KEY) return;

    loadGoogleMapsAPI()
      .then((placesLib) => {
        // PlacesService needs a DOM element (can be hidden)
        const service = new placesLib.PlacesService(mapRef.current);
        service.getDetails(
          {
            placeId: PLACE_ID,
            fields: ["rating", "user_ratings_total", "reviews"],
            language: "fr",
          },
          (place, status) => {
            if (status === window.google.maps.places.PlacesServiceStatus.OK && place) {
              if (place.rating) setRating(place.rating);
              if (place.user_ratings_total) setReviewCount(place.user_ratings_total);
              if (place.reviews && place.reviews.length > 0) {
                // Map Google reviews to our format
                const mapped = place.reviews
                  .filter((r) => r.rating >= 4) // Only show 4+ star reviews
                  .slice(0, 5) // Max 5 reviews
                  .map((r) => ({
                    name: r.author_name,
                    initials: getInitials(r.author_name),
                    quote: r.text,
                    rating: r.rating,
                    photo: r.profile_photo_url,
                    relativeTime: r.relative_time_description,
                  }));
                if (mapped.length > 0) setLiveReviews(mapped);
              }
            }
          }
        );
      })
      .catch(() => {
        // Silently fallback to static reviews
      });
  }, []);

  // Determine which reviews to show
  const isLive = liveReviews && liveReviews.length > 0;
  const reviewItems = isLive
    ? liveReviews
    : staticReviews.map((r, i) => ({
        name: ["Jin-Ah Noh", "Alphabet Tj", "Dawn Yager"][i] || `Voyageur ${i + 1}`,
        initials: ["JN", "AT", "DY"][i] || "?",
        quote: r.quote || "",
        rating: 5,
        photo: null,
        relativeTime: r.breakdown || "",
      }));

  const total = reviewItems.length || 1;
  const [active, setActive] = useState(0);
  const prev = () => setActive((i) => (i - 1 + total) % total);
  const next = () => setActive((i) => (i + 1) % total);

  const current = reviewItems[active] || {};

  return (
    <section className="pt-20 md:pt-32 pb-10 md:pb-14 page-x bg-card/40 overflow-hidden">
      {/* Hidden div for PlacesService */}
      <div ref={mapRef} style={{ display: "none" }} />

      {/* Header row */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14 md:mb-20">
        <div>
          <Reveal as="p" className="eyebrow-primary mb-3">
            {t("home.reviews.eyebrow", "Ce qu'ils en disent")}
          </Reveal>
          <Reveal as="h2" delay={1} className="font-display text-4xl md:text-5xl text-foreground">
            {t("home.reviews.title", "Paroles de voyageurs")}
          </Reveal>
        </div>

        <Reveal
          delay={2}
          className="flex items-center gap-5 bg-background border border-primary/15 px-6 py-4 self-start md:self-auto"
        >
          <div className="text-center">
            <p className="font-display text-5xl text-foreground leading-none">{rating.toFixed(1)}</p>
            <p className="font-body text-xs text-foreground/40 mt-1">/ 5</p>
          </div>
          <div className="space-y-1.5">
            <div className="flex gap-0.5">
              {[0, 1, 2, 3, 4].map((i) => (
                <StarIcon key={i} filled={i < Math.round(rating)} />
              ))}
            </div>
            <p className="font-body text-xs text-foreground/50">
              {reviewCount} {t("home.reviews.verified", "avis vérifiés")}
            </p>
            <p className="font-body text-xs tracking-[0.15em] uppercase text-primary/70">
              {t("home.reviews.recommend", "100 % recommandent")}
            </p>
          </div>
        </Reveal>
      </div>

      {/* Quote area */}
      <div className="relative">
        <Reveal className="grid md:grid-cols-[1fr_auto] gap-10 md:gap-16 items-start" key={active}>
          <div className="space-y-6">
            <QuoteIcon />
            <p className="font-display text-2xl md:text-3xl text-foreground/80 leading-relaxed italic">
              « {current.quote || t("home.reviews.placeholder", "Chargement des avis...")} »
            </p>
            <div className="flex items-center gap-4 pt-2">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center bg-primary/10 border border-primary/20 flex-shrink-0 overflow-hidden"
                title={current.name}
              >
                {current.photo ? (
                  <img src={current.photo} alt={current.name} className="w-full h-full object-cover rounded-full" />
                ) : (
                  <span className="font-body text-sm font-medium text-primary">
                    {current.initials}
                  </span>
                )}
              </div>
              <div>
                <p className="font-body text-sm font-medium text-foreground">
                  {current.name}
                </p>
                {current.relativeTime && (
                  <p className="font-body text-xs text-foreground/50">
                    {current.relativeTime}
                  </p>
                )}
              </div>
              <div className="ml-4 pl-4 border-l border-primary/15 space-y-1">
                <div className="flex gap-0.5">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <StarIcon key={i} size="w-3.5 h-3.5" filled={i < (current.rating || 5)} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Controls */}
        {total > 1 && (
          <div className="flex items-center gap-4 mt-10">
            <button
              type="button"
              onClick={prev}
              aria-label={t("home.reviews.prev", "Avis précédent")}
              className="w-9 h-9 flex items-center justify-center border border-primary/15 text-foreground/40 hover:border-primary hover:text-primary transition-colors duration-300"
            >
              <ChevronLeft />
            </button>
            <button
              type="button"
              onClick={next}
              aria-label={t("home.reviews.next", "Avis suivant")}
              className="w-9 h-9 flex items-center justify-center border border-primary/15 text-foreground/40 hover:border-primary hover:text-primary transition-colors duration-300"
            >
              <ChevronRight />
            </button>

            {/* Dots */}
            <div className="flex gap-2 ml-2">
              {reviewItems.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setActive(i)}
                  aria-label={`Avis ${i + 1}`}
                  className={`h-1 rounded-full transition-all duration-300 ${
                    i === active ? "w-8 bg-primary" : "w-2 bg-primary/15 hover:bg-primary/40"
                  }`}
                />
              ))}
            </div>

            {/* Initials avatars (md+) */}
            <div className="ml-auto hidden md:flex gap-2">
              {reviewItems.map((r, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setActive(i)}
                  title={r.name}
                  aria-label={r.name}
                  className={`w-8 h-8 rounded-full flex items-center justify-center bg-primary/10 border overflow-hidden transition-all duration-300 ${
                    i === active
                      ? "border-primary ring-2 ring-primary ring-offset-1"
                      : "border-primary/20 opacity-50 hover:opacity-80"
                  }`}
                >
                  {r.photo ? (
                    <img src={r.photo} alt={r.name} className="w-full h-full object-cover rounded-full" />
                  ) : (
                    <span className="font-body text-xs text-primary">{r.initials}</span>
                  )}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Google reviews CTA */}
        <div className="mt-10 text-center">
          <a
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 btn-outline-primary"
          >
            <GoogleG />
            {t("home.reviews.googleCta", "Voir tous nos avis Google")}
          </a>
        </div>
      </div>
    </section>
  );
}
