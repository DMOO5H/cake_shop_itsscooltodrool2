import heroCake from "@/assets/hero-cake.png";
import cakeSlice from "@/assets/cake-slice.png";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="relative px-8 pb-16 pt-8 overflow-hidden">
      {/* Floating decorative cakes */}
      <Image
        src={cakeSlice}
        alt=""
        className="absolute top-10 right-0 w-40 h-40 object-contain opacity-80 animate-float hidden lg:block translate-x-1/4"
      />
      <Image
        src={cakeSlice}
        alt=""
        className="absolute bottom-20 right-10 w-32 h-32 object-contain opacity-60 animate-float-slow hidden lg:block rotate-12"
      />

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Left content */}
        <div className="flex-1 z-10">
          <h1 className="text-5xl lg:text-6xl font-black text-foreground leading-tight mb-6 text-shadow-sm">
            Delicious Custom Cakes
            <br />
            Made Just for You
          </h1>
          <p className="text-foreground/85 text-lg leading-relaxed mb-8 max-w-md font-medium">
            Choose the perfect cake for anyone, for any occasion, in any flavor
            and style. We have something for everyone. Pick yours today!
          </p>
          <button className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-8 py-3.5 rounded-full text-lg transition-all hover:scale-105 shadow-lg">
            Choose a Cake
          </button>
        </div>

        {/* Right - Hero cake image */}
        <div className="flex-1 flex justify-center">
          <div className="relative bg-card/20 backdrop-blur-sm rounded-3xl p-6 shadow-2xl shadow-primary/20">
            <Image
              src={heroCake}
              alt="Wedding cake"
              className="w-80 lg:w-[420px] h-auto object-contain drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
