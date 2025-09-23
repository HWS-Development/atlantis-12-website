// Existing sections (kept as-is)
import HomeHero from "../components/Home/HomeHero";
import AboutSnippet from "../components/Home/AboutSnippet";
import ActivitiesHighlight from "../components/Home/ActivitiesHighlight";
// import RoomsTeaser from "../components/Home/RoomsTeaser";
import ServicesIcons from "../components/Home/ServicesIcons";
import LocationMap from "../components/Home/LocationMap";

// New sections (added, with their own names)
// import PromoStrip from "../components/Home/PromoStrip";
import RoomsIntro from "../components/Home/RoomsIntro"; // rename file if needed
import HomeContactInline from "../components/Home/HomeContactInline";
// Optional small badge — comment out if you don't want it
// import RetreatModal from "../components/Common/RetreatModal";
// import StickyRetreatButton from "../components/Common/StickyRetreatButton";
import GoogleReviewBadge from "../components/Home/GoogleReviewBadge";

export default function Home() {
  return (
    <>
    <GoogleReviewBadge />
    {/* <RetreatModal /> */}
    {/* page content */}
    {/* <StickyRetreatButton /> */}
      {/* Optional floating badge linking to Google listing */}
      {/* <GoogleReviewBadge /> */}

      {/* Old-site hero with compact booking (your HomeHero implementation already updated) */}
      <HomeHero />

      {/* New: thin green promo bar (Sahara & Creativity) */}
      {/* <PromoStrip /> */}

      {/* Old name, updated to overlay style */}
      <AboutSnippet />

      {/* New: text + tall image “Rooms intro” block, with CTA to /rooms */}
      <RoomsIntro />

      {/* Old names, kept */}
      <ActivitiesHighlight />
      {/* <RoomsTeaser /> */}
      <ServicesIcons />
      <LocationMap />

      {/* New: compact contact form at the bottom of Home */}
      <HomeContactInline />
    </>
  );
}
