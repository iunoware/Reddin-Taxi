import { useEffect } from "react";
import { Link } from "react-router-dom";
import GlassButton from "../components/GlassButton";

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

          {/* <Link to="/contact">
            <button className="mt-10 px-10 py-4 text-white text-lg font-semibold rounded-full transition-all duration-300 hover:-translate-y-2  backdrop-blur-xs shadow-[0_1px_30px_rgba(0,0,0,0.2),inset_0_1px_rgba(255,255,255,0.3),inset_0_-1px_rgba(255,255,255,0.3)] cursor-pointer">
              Request Luxury Transfer
            </button>
          </Link> */}
          <GlassButton
            text="Request Luxury Transfer"
            glass={true}
            // bg="bg-black"
            link="/contact"
            className="mt-10 rounded-2xl"
          />
        </div>
      </div>

      {/* Who We Are Section - Redesigned */}
      <section className="relative w-full bg-[#e0e0e0] py-24 overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="text-left z-10 order-2 lg:order-1">
              <h2 className="text-5xl md:text-6xl cinzel font-semibold text-red-600 tracking-tight mb-8 cinzel drop-shadow-lg">
                Who We Are
              </h2>
              <div className="w-44 h-1 bg-linear-to-r from-red-600 to-transparent mb-10 opacity-80"></div>

              <p className="text-lg font-light leading-relaxed mb-12 max-w-lg">
                <span className="text-red-600">Reddin Tours & Travels</span> is the
                embodiment of premium mobility. We don't just transport; we curate
                journeys defined by privacy, elegance, and cinematic comfort across India.
              </p>

              <div className="space-y-10">
                {/* Highlight 1 */}
                <div className="flex items-start gap-5 shadow-[5px_5px_10px_#8d8d8d,-5px_-5px_10px_#ffffff] p-3 rounded-2xl group">
                  <div className="p-3 rounded-full text-red-600 shadow-[5px_5px_10px_#8d8d8d,-5px_-5px_10px_#ffffff] transition-all duration-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.2}
                      stroke="currentColor"
                      className="w-7 h-7"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9.813 15.904 9 19h4.253l-.813-3.096m-4.253 0c-.966-.546-1.272-1.928-.75-2.923l2.876-5.592a1.146 1.146 0 0 1 2.155 0l2.875 5.592c.523.995.217 2.378-.75 2.923m-6.353 0h6.353M12 2.25a9.75 9.75 0 0 1 9.75 9.75v.516c0 .783-.625 1.487-1.406 1.41a9.75 9.75 0 0 0-1.036-.086c-1.002 0-1.875.75-1.875 1.76v1.385c0 .324.253.587.575.602.836.038 1.636.326 2.298.814l.2.146c.362.264.445.765.181 1.128A9.75 9.75 0 0 1 12 21.75c-5.385 0-9.75-4.365-9.75-9.75 0-3.69 2.067-6.9 5.093-8.541"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl text-red-700 font-medium mb-1 cinzel tracking-wide">
                      Cinematic Comfort
                    </h3>
                    <p className="text-sm text-gray-900 font-light tracking-wide">
                      Bespoke interiors designed for silence and serenity.
                    </p>
                  </div>
                </div>

                {/* Highlight 2 */}
                <div className="flex items-start p-3 rounded-2xl shadow-[5px_5px_10px_#8d8d8d,-5px_-5px_10px_#ffffff] gap-5 group">
                  <div className="p-3 rounded-full text-red-600 shadow-[5px_5px_10px_#8d8d8d,-5px_-5px_10px_#ffffff] transition-all duration-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.2}
                      stroke="currentColor"
                      className="w-7 h-7"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl text-red-700 font-medium mb-1 cinzel tracking-wide">
                      Safety & Privacy
                    </h3>
                    <p className="text-sm text-gray-900 font-light tracking-wide">
                      Discreet service with top-tier safety standards.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Abstract Visual */}
            <div className="relative h-[500px] w-full bg-linear-to-br from-zinc-900 via-zinc-800 to-black rounded-[40px] border border-white/5 overflow-hidden shadow-2xl order-1 lg:order-2 group">
              <div className="absolute inset-0 flex items-center justify-center p-10">
                <div className="relative w-full h-full flex flex-col items-center justify-center">
                  {/* 2 floating cards */}
                  <div className="absolute top-12 right-12 w-3/4 h-2/3 bg-[url('/images/urbania-fleet.png')] bg-cover bg-center rounded-3xl shadow-2xl transform rotate-3 transition-transform duration-1000 group-hover:rotate-6"></div>
                  <div className="absolute bottom-12 left-8 w-2/3 h-1/2 bg-[url('/images/urbania-fleet.png')] bg-cover bg-center rounded-3xl shadow-2xl transform -rotate-2 z-10 transition-transform duration-1000 group-hover:-rotate-3"></div>

                  {/* Floating Badge */}
                  <div className="absolute bottom-8 right-8 flex items-center gap-3 bg-black/60 backdrop-blur-xl px-5 py-3 rounded-full border border-white/10 shadow-xl z-20 transition-all duration-300 hover:bg-black/80 hover:scale-105 cursor-default">
                    <div className="w-2 h-2 rounded-full bg-amber-400 animate-pulse shadow-[0_0_10px_rgba(251,191,36,0.8)]"></div>
                    <span className="text-[10px] text-amber-100 tracking-[0.2em] uppercase font-semibold">
                      Premium Urbania
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
