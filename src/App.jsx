import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Layout/Navbar";
import Footer from "./components/Layout/Footer";
import BottomReservationBar from "./components/Layout/BottomReservationBar";
import ScrollToHash from "./components/Common/ScrollToHash";
import ScrollToTop from "./components/UI/ScrollToTop";
import I18nUrlSync from "./components/Common/I18nUrlSync";
import LangLink from "./components/Common/LangLink";
import RouteSeo from "./components/Common/RouteSeo";
import GoogleAnalytics from "./components/Common/GoogleAnalytics";

import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Activites from "./pages/Activites";
import TermsConditions from "./pages/TermsConditions";
import CancellationPolicy from "./pages/CancellationPolicy";
import TableDHotes from "./pages/TableDHotes";
import Essaouira from "./pages/Essaouira";
import MentionsLegales from "./pages/MentionsLegales";
import CGV from "./pages/CGV";
import PolitiqueConfidentialite from "./pages/PolitiqueConfidentialite";

export default function App() {
  const englishPath = window.location.pathname === "/en" || window.location.pathname.startsWith("/en/");

  return (
    <BrowserRouter basename={englishPath ? "/en" : undefined}>
      <div className="min-h-full flex flex-col">
        <Navbar />
        <ScrollToTop />
        <ScrollToHash />
        <I18nUrlSync />
        <RouteSeo />
        <GoogleAnalytics />

        {/* Live site lets the fixed header OVERLAP page content (Hero handles its own
            full-viewport height). Inner pages add their own top padding if needed. */}
        <main className="flex-1 page-content-safe-bottom">
          <Routes>
            <Route path="/" element={<Home />} />

            {/* Live-site canonical URLs */}
            <Route path="/la-maison"    element={<About />} />
            <Route path="/chambres"     element={<Rooms />} />
            <Route path="/table-dhotes" element={<TableDHotes />} />
            <Route path="/maison-dart"  element={<Gallery />} />
            <Route path="/experiences"  element={<Activites />} />
            <Route path="/essaouira"    element={<Essaouira />} />
            <Route path="/contact"      element={<Contact />} />

            {/* Legacy aliases (kept so old links still resolve) */}
            <Route path="/about"        element={<About />} />
            <Route path="/rooms"        element={<Rooms />} />
            <Route path="/table"        element={<TableDHotes />} />
            <Route path="/activites"    element={<Activites />} />
            <Route path="/gallery"      element={<Gallery />} />

            <Route path="/terms"        element={<TermsConditions />} />
            <Route path="/cancellation" element={<CancellationPolicy />} />
            <Route path="/mentions-legales" element={<MentionsLegales />} />
            <Route path="/cgv" element={<CGV />} />
            <Route path="/politique-de-confidentialite" element={<PolitiqueConfidentialite />} />

            <Route
              path="*"
              element={
                <div className="container-std py-20 text-center">
                  <h1 className="text-3xl mb-4">404</h1>
                  <LangLink className="btn-outline-primary" to="/">Go Home</LangLink>
                </div>
              }
            />
          </Routes>
        </main>
        <Footer />
        <BottomReservationBar />
      </div>
    </BrowserRouter>
  );
}
