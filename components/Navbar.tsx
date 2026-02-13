import { Phone, ShoppingCart } from "lucide-react";
import cakeLogo from "../assets/navbar-logo.svg";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-8 py-4 relative z-10">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <Image src={cakeLogo} alt="Logo" className="w-10 h-10 object-contain" />
        <span className="text-xl font-extrabold text-foreground tracking-tight">
          It&apos;s Cool To Drool
        </span>
      </div>

      {/* Nav Links */}
      <div className="hidden md:flex items-center gap-8">
        <a
          href="#"
          className="text-foreground font-bold underline underline-offset-4 decoration-2"
        >
          Home
        </a>
        <a
          href="#menu"
          className="text-foreground/80 font-semibold hover:text-foreground transition-colors"
        >
          Menu
        </a>
        <a
          href="#about"
          className="text-foreground/80 font-semibold hover:text-foreground transition-colors"
        >
          About Us
        </a>
      </div>

      {/* Right side */}
      <div className="hidden md:flex items-center gap-6">
        <a
          href="#contacts"
          className="text-foreground/80 font-semibold hover:text-foreground transition-colors"
        >
          Contact
        </a>
        <div className="flex items-center gap-1.5 text-foreground">
          <Phone className="w-4 h-4" />
          <span className="font-semibold text-sm">+7 (912) 243-16-34</span>
        </div>
        <div className="flex items-center gap-2 text-foreground">
          <ShoppingCart className="w-5 h-5" />
          <span className="font-bold text-sm">$2,304</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
