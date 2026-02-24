'use client';       

import logoHorizontal  from "../assets/logo-horizontal.png";
import Image from "next/image";

export default function Navbar() {
    
    const openWhatsApp = () => {
        const phone = "+62811925133"
        const messsage = "Hello! I would like to place an order. Can you please assist me with the details?"
        const url = `https://wa.me/${phone}?text=${encodeURIComponent(messsage)}`;
        window.open(url, "_blank");
    }

    return (
        <nav className="flex flex-row items-center justify-between bg-teal-500 border-b-8 border-[#EFBF04]">
            <div className="">
            <Image src={logoHorizontal.src} alt= "Logo" className="logo" width={450} height={200}/>
            </div>
            <div className="flex flex-row items-center justify-between px-8 gap-20 text-white text-2xl">
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
                <button onClick={openWhatsApp} className="bg-amber-600 px-4 py-2 rounded-lg hover:bg-[#EFBF04] transition-colors duration-300">
                    Place Order
                </button>
            </div>
        </nav>
    );
}
