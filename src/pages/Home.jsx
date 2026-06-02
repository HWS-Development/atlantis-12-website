import HomeHero from "../components/Home/HomeHero";
import IntroSection from "../components/Home/IntroSection";
import RoomsHomeSection from "../components/Home/RoomsHomeSection";
import ReviewsSection from "../components/Home/ReviewsSection";

export default function Home() {
  return (
    <div className="bg-background min-h-screen font-body text-foreground">
      <HomeHero />
      <IntroSection />
      <RoomsHomeSection />
      <ReviewsSection />
    </div>
  );
}
