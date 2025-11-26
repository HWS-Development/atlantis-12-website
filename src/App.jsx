import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
// import { HelmetProvider } from "react-helmet-async"; // uncomment if you keep SEO library
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import Navbar from "./components/Layout/Navbar";
import Footer from "./components/Layout/Footer";
import ScrollToHash from "./components/Common/ScrollToHash";
import WhatsAppButton from "./components/Common/WhatsAppButton";
import About from "./pages/About";
import ScrollToTop from "./components/ui/ScrollToTop";
import Activites from "./pages/Activites";


// import Retreat from "./pages/Retreat";
import TermsConditions from "./pages/TermsConditions";
import CancellationPolicy from "./pages/CancellationPolicy";
import TableDHotes from "./pages/TableDHotes";
// import { useEffect } from "react";

export default function App() {
  // useEffect(() => {
  //   window.dispatchEvent(new CustomEvent("retreat:open"));
  // }, [])
  return (
    // <HelmetProvider>  {/* remove if not using react-helmet-async */}
      <BrowserRouter>
        <div className="min-h-full flex flex-col">
          <Navbar />
        <ScrollToTop />
          <ScrollToHash />
          <WhatsAppButton />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} /> 
              <Route path="/rooms" element={<Rooms />} />
              <Route path="/activites" element={<Activites />} />

              <Route path="/gallery" element={<Gallery />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/table" element={<TableDHotes />} />
              <Route path="/terms" element={<TermsConditions />} />
              <Route path="/cancellation" element={<CancellationPolicy />} />
              {/* <Route path="/retreat" element={<Retreat />} /> */}
              {/* 404 fallback */}
              <Route
                path="*"
                element={
                  <div className="container-std py-20">
                    <h1 className="text-3xl mb-4">404</h1>
                    <Link className="btn btn-primary" to="/">
                      Go Home
                    </Link>
                  </div>
                }
              />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    // </HelmetProvider>
  );
}
