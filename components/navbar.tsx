'use client';       

import logoHorizontal  from "../assets/logo-horizontal.png";
import Image from "next/image";

export default function Navbar() {
    return (
        <nav className="flex flex-row items-center justify-between bg-teal-500">
            <div className="">
            <Image src={logoHorizontal.src} alt= "Logo" className="logo" width={450} height={200}/>
            </div>
            <div className="flex flex-row items-center justify-between px-8 gap-20 text-amber-700 text-2xl">
                <a href="#home" >
                    Home
                </a>
                <a href="#ourcakes">
                    Our Cakes
                </a>
                <a href="#aboutus">
                    About Us
                </a>
                <a href="#contactus">
                    Contact Us
                </a>
            </div>
            <div className="flex flex-row items-center justify-between px-8 text-white text-2xl" >
                <button className="bg-amber-700 px-4 py-2 rounded-lg hover:bg-amber-600 transition-colors duration-300">
                    Place Order
                </button>
            </div>
        </nav>
    );
}