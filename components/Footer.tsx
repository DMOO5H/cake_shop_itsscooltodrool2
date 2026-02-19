import { IconBrandX, IconBrandFacebook, IconBrandInstagram } from '@tabler/icons-react';

export default function Footer() {
    return (
        <footer className="flex flex-row items-center justify-between py-8 px-8 bg-teal-500 text-white">
            <span className="text-white text-xl">©2024 All Rights Reserved</span>
            <div className="flex flex-row items-center justify-between gap-8">
              <span className="text-white text-xl">Follow Us</span>
              <a
                href="#facebook"
                className="bg-white text-rose-500 w-10 h-10 rounded-full flex items-center justify-center hover:bg-pink-100 transition-all duration-300 shadow-md"
              >
                <IconBrandFacebook />
              </a>

              <a
                href="#instagram"
                className="bg-white text-rose-500 w-10 h-10 rounded-full flex items-center justify-center hover:bg-pink-100 transition-all duration-300 shadow-md"
              >
                <IconBrandInstagram />
              </a>
              <a
                href="#x"
                className="bg-white text-rose-500 w-10 h-10 rounded-full flex items-center justify-center hover:bg-pink-100 transition-all duration-300 shadow-md"
              >
                <IconBrandX />
              </a>
            </div>
        </footer>
    );
}