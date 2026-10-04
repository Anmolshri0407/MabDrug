
import Navbar from "./components/Navbar";

import Hero from "./sections/Hero";
import AboutPreview from "./sections/AboutPreview";
import CoreValues from "./sections/CoreValues";
import ProductPreview from "./sections/ProductsPreview";
import QualityCompliance from "./sections/QualitySection";
import ContactEnquiry from "./sections/ContactSection";

import Footer from "./components/Footer";


function App() {
  return (
    <div className="w-full overflow-x-hidden">

      {/* ================= NAVBAR ================= */}
      <Navbar />

      <main className="flex flex-col gap-8">

        {/* ================= HERO ================= */}
        <Hero />

        {/* ================= CORE VALUES ================= */}
        <CoreValues />

        {/* ================= PRODUCTS ================= */}
        <ProductPreview />

        {/* ================= QUALITY ================= */}
        <QualityCompliance />

        {/* ================= ABOUT ================= */}
        <AboutPreview />

        {/* ================= CONTACT / ENQUIRY ================= */}
        <ContactEnquiry />

      </main>

      {/* ================= FOOTER ================= */}
      <Footer />

    </div>
  );
}

export default App;

