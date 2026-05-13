// Home — matches live atlantis12essaouira.com structure exactly:
//   <Hero> -> <IntroSection> -> <RoomsHomeSection> -> <ReviewsSection>
// Header & Footer are rendered globally by App.jsx.
//
// The live site main wrapper has: bg-background min-h-screen font-body text-foreground pb-14
import HomeHero from "../components/Home/HomeHero";
import IntroSection from "../components/Home/IntroSection";
import RoomsHomeSection from "../components/Home/RoomsHomeSection";
import ReviewsSection from "../components/Home/ReviewsSection";

export default function Home() {
  return (
    <div className="bg-background min-h-screen font-body text-foreground pb-14">
      <HomeHero />
      <IntroSection />
      <RoomsHomeSection />
      <ReviewsSection />
    </div>
  );
}
