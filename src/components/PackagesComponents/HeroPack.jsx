import { Star } from "lucide-react";
import GlassButton from "../GlassButton";

export default function HeroPack() {
  function scrollSection(href) {
    const section = document.getElementById(href);
    if (!section) return;
    section.scrollIntoView({ behavior: "smooth" });
  }

  return (
    // <section className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-center bg-cover bg-[url('/images/package-hero.webp')]">
    //   <div className="bg-black/60 absolute w-full h-full"></div>

    //   {/* Content Container */}
    //   <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
    //     {/* Top Badge */}
    //     <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 bg-white/5 backdrop-blur-xs shadow-[0_1px_30px_rgba(0,0,0,0.2),inset_0_1px_rgba(255,255,255,0.3),inset_0_-1px_rgba(255,255,255,0.3)]">
    //       <Star size={14} className="text-yellow-500" fill="currentColor" />
    //       <span className="text-white text-xs font-bold tracking-[0.2em] uppercase">
    //         Premium Fleet
    //       </span>
    //     </div>

    //     {/* Main Heading */}
    //     <h1 className="cinzel text-5xl md:text-7xl lg:text-6xl text-white mb-6 tracking-tight leading-tight drop-shadow-2xl">
    //       Business-Class <br />
    //       <span className="text-gray-400">On Wheels</span>
    //     </h1>

    //     <p className="font-sans text-gray-300 text-lg md:text-2xl max-w-2xl mx-auto font-light leading-relaxed mb-10 tracking-wide">
    //       Redefining road travel with unmatched luxury, privacy, and comfort.
    //       The journey matters as much as the destination.
    //     </p>

    //     {/* Decorative Divider */}
    //     {/* <div className="w-24 h-1 bg-linear-to-r from-transparent via-yellow-600 to-transparent mx-auto rounded-full"></div> */}
    //   </div>

    //   {/* Glassmorphism Bottom Overlay */}
    //   <div className="absolute bottom-0 left-0 w-full h-32 bg-linear-to-t from-[#0D0F14] to-transparent z-0"></div>

    //   {/* cta like card */}
    // </section>

    <div className="relative w-screen h-screen bg-[url(/images/hero-white.jpg)] bg-cover bg-center">
      <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/30 to-transparent"></div>

      <div className="relative z-10 flex flex-col justify-center h-full px-3 md:px-20 text-white max-w-4xl">
        <h1 className="text-3xl basker font-bold md:text-6xl leading-tight mb-2 md:mb-6 drop-shadow-lg">
          Business-Class <br />
          <span className="text-red-600">On Wheels</span>
        </h1>

        <p className="text-lg md:text-xl text-gray-100 mb-10 max-w-xl drop-shadow-md font-light">
          Redefining road travel with unmatched luxury, privacy, and comfort. The journey
          matters as much as the destination.
        </p>

        <div className="flex flex-row items-center gap-6">
          <GlassButton
            text1="Book Your Trip"
            glass={true}
            link="/contact"
            className="text-center"
          />

          <button
            onClick={() => scrollSection("pricingPreview")}
            className="bg-white cursor-pointer text-black rounded-2xl px-8 py-3 text-lg"
          >
            Explore Services
          </button>

          {/* <GlassButton
            text1="Explore Services"
            textColor="text-black"
            bg="bg-white"
            // link="/contact"
            onClick={() => scrollSection("pricingPreview")}
            className="text-center"
          /> */}
        </div>

        <div className="flex absolute bottom-10 justify-between w-full">
          <div className="">
            <p className="md:text-5xl text-2xl font-bold">5+</p>
            <h2 className="text-sm md:text-md">Luxury-Class Vehicles</h2>
          </div>
          <div className="">
            <p className="md:text-5xl text-2xl font-bold">100%</p>
            <h2 className="text-sm md:text-md">Customer Satisfaction Score</h2>
          </div>
          <div className="">
            <p className="md:text-5xl text-2xl font-bold">100%</p>
            <h2 className="text-sm md:text-md pr-2 md:pr-0">Safety</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
