import { Star } from "lucide-react";
import GlassButton from "../GlassButton";

export default function HeroPack() {
  function scrollSection(href) {
    const section = document.getElementById(href);
    if (!section) return;
    section.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div className="relative w-screen h-screen bg-[url(/images/tirunelveli-travel-agency.jpg)] bg-cover bg-center">
      <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/30 to-transparent"></div>

      <div className="relative z-10 flex flex-col justify-center h-full px-3 md:px-20 text-white max-w-4xl">
        <h1 className="text-3xl basker font-bold md:text-6xl leading-tight mb-2 md:mb-6 drop-shadow-lg">
          Business-Class <br />
          <span className="text-red-600">On Wheels</span>
        </h1>

        <p className="text-lg md:text-xl text-gray-100 mb-10 max-w-xl drop-shadow-md font-light">
          Redefining road travel through unmatched luxury, absolute privacy, and refined
          comfort—because the journey deserves as much attention as the destination.
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
            className="bg-white cursor-pointer text-black rounded-2xl px-8 py-3 text-sm md:text-lg"
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

        <div className="flex flex-wrap justify-between items-start bottom-10 absolute w-full px-5 gap-5">
          <div className="px-3">
            <p className="md:text-5xl text-2xl font-bold">5+</p>
            <h2 className="text-sm md:text-md">Luxury-Class Vehicles</h2>
          </div>
          <div className="px-3">
            <p className="md:text-5xl text-2xl font-bold">100%</p>
            <h2 className="text-sm md:text-md text-wrap">Customer Satisfaction Score</h2>
          </div>
          <div className="px-3">
            <p className="md:text-5xl text-2xl font-bold">100%</p>
            <h2 className="text-sm md:text-md pr-2 md:pr-0">Safety</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
