import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function About() {
  useEffect(() => {
    document.title = "Reddin Tours & Travels | About us";
  }, []);

  return (
    <>
      {/* hero section */}
      <div className="relative w-full h-screen overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/images/about-hero.webp"
            alt="Luxury Travel"
            className="w-full h-full object-cover"
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        {/* Content Container */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <h1 className="text-3xl md:text-4xl tracking-wider text-white drop-shadow-lg cinzel font-semibold">
            <span className="text-red-500">Reddin Tours & Travels</span> - Redefining
            Luxury Travel in India
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-200 max-w-3xl font-light tracking-wide">
            Premium vans crafted for comfort, elegance, and hospitality.
          </p>

          <Link to="/contact">
            <button className="mt-10 px-10 py-4 text-white text-lg font-semibold rounded-full transition-all duration-300 hover:-translate-y-2  backdrop-blur-xs shadow-[0_1px_30px_rgba(0,0,0,0.2),inset_0_1px_rgba(255,255,255,0.3),inset_0_-1px_rgba(255,255,255,0.3)] cursor-pointer">
              Request Luxury Transfer
            </button>
          </Link>
        </div>
      </div>

      {/* Who We Are Section */}
      <section className="relative bg-black/95 pb-24">
        <div className="relative pt-20 z-10 max-w-[1000px] mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-wide text-white drop-shadow-2xl cinzel">
            Who We Are
          </h2>
          <div className="h-[3px] w-44 bg-red-600 rounded-full mx-auto my-6 shadow-[0_0_15px_rgba(220,38,38,0.5)]"></div>
          <p className="text-white max-w-[800px] mx-auto text-xl leading-relaxed font-light mb-16 drop-shadow-md">
            Reddin Tours & Travels delivers premium luxury van travel across India.
            Precision-designed Urbania interiors, hospitality-first experience, and
            cinematic comfort for every journey.
          </p>

          {/* Glassmorphism Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="group p-8 bg-white/1 backdrop-blur-md rounded-2xl shadow-[0_1px_30px_rgba(0,0,0,0.2),inset_0_1px_rgba(255,255,255,0.3),inset_0_-1px_rgba(255,255,255,0.3)] hover:scale-105 transition-all duration-500">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-linear-to-br from-white/10 to-transparent border border-white/20 flex items-center justify-center shadow-inner">
                <span className="text-3xl text-red-500 drop-shadow-[0_0_10px_rgba(239,68,68,0.5)]">
                  ❖
                </span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3 tracking-wide">
                Luxury Interiors
              </h3>
              <p className="text-sm text-gray-400 font-light leading-relaxed">
                Hand-crafted seating and ambient lighting for unmatched comfort.
              </p>
            </div>

            {/* Card 2 */}
            <div className="group p-8 bg-white/1 backdrop-blur-md rounded-2xl shadow-[0_1px_30px_rgba(0,0,0,0.2),inset_0_1px_rgba(255,255,255,0.3),inset_0_-1px_rgba(255,255,255,0.3)] hover:scale-105 transition-all duration-500">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-linear-to-br from-white/10 to-transparent border border-white/20 flex items-center justify-center shadow-inner">
                <span className="text-3xl text-red-500 drop-shadow-[0_0_10px_rgba(239,68,68,0.5)]">
                  ★
                </span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3 tracking-wide">
                Premium Experience
              </h3>
              <p className="text-sm text-gray-400 font-light leading-relaxed">
                Hospitality-first service ensuring a seamless journey.
              </p>
            </div>

            {/* Card 3 */}
            <div className="group p-8 bg-white/1 backdrop-blur-md rounded-2xl shadow-[0_1px_30px_rgba(0,0,0,0.2),inset_0_1px_rgba(255,255,255,0.3),inset_0_-1px_rgba(255,255,255,0.3)] hover:scale-105 transition-all duration-500">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-linear-to-br from-white/10 to-transparent border border-white/20 flex items-center justify-center shadow-inner">
                <span className="text-3xl text-red-500 drop-shadow-[0_0_10px_rgba(239,68,68,0.5)]">
                  ∞
                </span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3 tracking-wide">
                All India Coverage
              </h3>
              <p className="text-sm text-gray-400 font-light leading-relaxed">
                Travel anywhere in India with our extensive network.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
