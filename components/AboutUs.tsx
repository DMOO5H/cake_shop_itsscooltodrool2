import Image from "next/image";
import AboutUsImage from "../assets/AboutUsImage.jpeg";

export default function AboutUs() {
    return (
        <section className="flex items-center justify-center bg-linear-to-br from-pink-100 via-pink-50 to-pink-50 py-20 px-6 lg:px-10">
            <div className="max-w-7xl w-full mx-auto flex flex-col md:flex-row items-center gap-8">
                {/* Left: image card */}
                <div className="w-full md:w-1/2 flex justify-center">
                    <div className="bg-white rounded-2xl shadow-lg overflow-hidden p-4 w-full max-w-md">
                        <div className="relative w-full h-64 md:h-80">
                            <Image src={AboutUsImage.src} alt="Our bakery" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
                        </div>
                    </div>
                </div>

                {/* Right: text on pink background */}
                <div className="w-full md:w-1/2 text-center md:text-left text-gray-800 px-4">
                    <h2 className="text-4xl font-bold">About Us</h2>
                    <p className="mt-4 text-base leading-relaxed">
                        Its Cool To Drool Cake Shop is a family-run bakery creating handcrafted cakes
                        made from premium ingredients. We blend classic techniques with creative
                        flavors to make every celebration memorable.
                    </p>
                    <p className="mt-3 text-base leading-relaxed">
                        Visit our shop or order online for customized cakes, cupcakes, and treats
                        baked fresh daily — made with love for every special moment.
                    </p>
                </div>
            </div>
        </section>
    );
}