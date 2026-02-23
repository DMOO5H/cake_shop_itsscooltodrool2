import { MapPin, Phone, Clock, Mail } from "lucide-react";
import cakeLogo from "../assets/navbar-logo.svg";
import Image from "next/image";

const Footer = () => {
  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "Menu", href: "#cakes" },
    { label: "About Us", href: "#about" },
    { label: "Contacts", href: "#contacts" },
  ];

  return (
    <footer
      id="contacts"
      className="bg-primary/90 backdrop-blur-sm pt-16 pb-8 px-8"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Image
                src={cakeLogo}
                alt="Logo"
                width={40}
                height={40}
                className="w-10 h-10 object-contain"
                priority
              />
              <span className="text-xl font-extrabold text-primary-foreground">
                It&apos;s Cool to Drool
              </span>
            </div>
            <p className="text-primary-foreground/70 font-medium text-sm leading-relaxed">
              The most delicious custom cakes with delivery across the city.
              We&apos;ll make your celebration unforgettable!
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-primary-foreground font-extrabold text-lg mb-4">
              Navigation
            </h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground font-medium text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <h4 className="text-primary-foreground font-extrabold text-lg mb-4">
              Contacts
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-primary-foreground/70 text-sm font-medium">
                <Phone className="w-4 h-4 flex-shrink-0" />
                +62 812-3456-7890
              </li>
              <li className="flex items-center gap-2 text-primary-foreground/70 text-sm font-medium">
                <Mail className="w-4 h-4 flex-shrink-0" />
                hello@itscooltodrool.com
              </li>
              <li className="flex items-start gap-2 text-primary-foreground/70 text-sm font-medium">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                Bandung, West Java, Indonesia
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-primary-foreground font-extrabold text-lg mb-4">
              Working Hours
            </h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-primary-foreground/70 text-sm font-medium">
                <Clock className="w-4 h-4 flex-shrink-0" />
                Mon–Fri: 9:00 — 20:00
              </li>
              <li className="text-primary-foreground/70 text-sm font-medium pl-6">
                Sat–Sun: 10:00 — 18:00
              </li>
            </ul>
          </div>
        </div>

        {/* Divider & Copyright */}
        <div className="border-t border-primary-foreground/20 pt-6">
          <p className="text-center text-primary-foreground/50 text-sm font-medium">
            © {new Date().getFullYear()} It&apos;s Cool to Drool — All rights
            reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
