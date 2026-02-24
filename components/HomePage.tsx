'use client";'

import Hero from "./Hero";
import AboutUs from "./AboutUs";
import FeatureSection from "./FeatureSection";
import Footer from "./Footer";
import Navbar from "./Navbar";


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