import Navbar from "./Navbar";
import Hero from "./Hero";
import AboutUs from "./AboutUs";
import FeatureSection from "./FeatureSection";
import Footer from "./Footer";

export default function HomePage() {
  return (
    <div>
      <Navbar />
      <Hero />
      <AboutUs />
      <FeatureSection />
      <Footer />
    </div>
  );
}