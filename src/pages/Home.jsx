import HomeHero from "../components/Home/HomeHero";
import BookingWidget from "../components/Booking/BookingWidget";
import AboutSnippet from "../components/Home/AboutSnippet";
import ActivitiesHighlight from "../components/Home/ActivitiesHighlight";
import RoomsTeaser from "../components/Home/RoomsTeaser";
import ServicesIcons from "../components/Home/ServicesIcons";
import LocationMap from "../components/Home/LocationMap";

export default function Home() {
  return (
    <div className="flex flex-col gap-16 md:gap-20">
      <HomeHero />
      {/* <section className="container-std -mt-10 md:-mt-12 relative z-10">
        <BookingWidget />
      </section> */}
      <AboutSnippet />
      <section style={{ backgroundColor: '#DDE8D1' }}>
        <ActivitiesHighlight />
      </section>
      <RoomsTeaser />
      <ServicesIcons />
      <LocationMap />
    </div>
  );
}
