import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
// import { HelmetProvider } from "react-helmet-async"; // uncomment if you keep SEO library
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import Navbar from "./components/Layout/Navbar";
import Footer from "./components/Layout/Footer";

export default function App() {
  return (
    // <HelmetProvider>  {/* remove if not using react-helmet-async */}
      <BrowserRouter>
        <div className="min-h-full flex flex-col">
          <Navbar />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/rooms" element={<Rooms />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/contact" element={<Contact />} />
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
