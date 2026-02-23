import Footer from "@/components/Footer";
import HeroSection from "@/components/Hero";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen hero-gradient overflow-hidden">
      <Navbar />
      <HeroSection />
      <Footer />
    </div>
  );
}
