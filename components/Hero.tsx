import Image from "next/image";
import Background from "../assets/Background.jpeg";

export default function Hero() {
    return (
        <section className="flex items-center justify-center bg-linear-to-br from-pink-100 via-pink-50 to-pink-50">
            <div className="max-w-7xl w-full mx-auto flex flex-col md:flex-row items-center gap-8 py-20 px-6 lg:px-10">
                <div className="w-full md:w-1/2 text-left text-rose-900/90 px-4">
                    <p className="text-lg md:text-xl italic text-rose-700 mb-4">Sweeten Your Day with Our</p>
                    <h1 className="text-4xl md:text-6xl font-serif leading-tight tracking-wide text-rose-800 drop-shadow-[0_2px_6px_rgba(0,0,0,0.25)]">IRRESISTIBLE<br/>CAKES</h1>
                    <p className="mt-6 text-sm md:text-base text-rose-700">Discover the most delicious, custom-made cakes for every occasion!</p>
                    <button className="mt-8 inline-block bg-rose-300 text-rose-900 px-6 py-3 rounded shadow-md hover:bg-rose-100 transition-colors duration-300">View Cakes</button>
                </div>
                <div className="w-full md:w-1/2 flex justify-center">
                    <div className="bg-white rounded-2xl shadow-lg overflow-hidden p-4 w-full max-w-md">
                        <div className="relative w-full h-64 md:h-96">
                            <Image src={Background.src} alt="Featured cake" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}