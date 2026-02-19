import Image from "next/image";
import Background from "../assets/Background.jpeg";

export default function Hero() {
    return (
        <section className="relative">
            <div className="relative w-full h-170 md:h-190">
                <Image src={Background} alt="Background" fill className="object-cover" sizes="100vw" />

                <div className="absolute inset-0 flex items-center">
                    <div className="container mx-auto px-6 md:px-12 lg:px-24">
                        <div className="max-w-xl text-left text-rose-900/90">
                            <p className="text-lg md:text-xl italic text-rose-200 mb-4">Sweeten Your Day with Our</p>
                            <h1 className="text-4xl md:text-6xl font-serif leading-tight tracking-wide text-rose-800 drop-shadow-[0_2px_6px_rgba(0,0,0,0.25)]">IRRESISTIBLE<br/>CAKES</h1>
                            <p className="mt-6 text-sm md:text-base text-rose-700">Discover the most delicious, custom-made cakes for every occasion!</p>
                            <button className="mt-8 inline-block bg-rose-300 text-rose-900 px-6 py-3 rounded shadow-md hover:bg-rose-100 transition-colors duration-300">View Cakes</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}