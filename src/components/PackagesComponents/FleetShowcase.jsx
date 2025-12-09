import React from "react";
import { Users, Briefcase, Wifi, Wind, Star, ArrowRight } from "lucide-react";

const fleetItems = [
  {
    id: 1,
    title: "Urbania – Premium 9 Seater",
    description: "Ideal for family vacations and small groups.",
    features: ["9 Luxury Seats", "Ample Luggage Space", "Individual AC Vents"],
    gradient: "from-blue-900/40 to-black",
  },
  {
    id: 2,
    title: "Urbania – Luxury 13 Seater",
    description: "Perfect balance of space and luxury for medium groups.",
    features: ["13 Reclining Seats", "Mood Lighting", "Premium Sound System"],
    gradient: "from-purple-900/40 to-black",
  },
  {
    id: 3,
    title: "Urbania – Executive 17 Seater",
    description: "The ultimate choice for corporate travel and large teams.",
    features: ["17 Executive Seats", "Wide Aisle", "Charging Ports"],
    gradient: "from-emerald-900/40 to-black",
  },
  {
    id: 4,
    title: "Urbania – Elite Traveller",
    description: "Designed for long-distance comfort and style.",
    features: ["Extra Legroom", "Pantry Area", "Smart TV"],
    gradient: "from-rose-900/40 to-black",
  },
  {
    id: 5,
    title: "Urbania – Business Tourer",
    description: "Mobile conference room for on-the-go meetings.",
    features: ["Conference Configuration", "High-Speed Wi-Fi", "Work Desks"],
    gradient: "from-amber-900/40 to-black",
  },
];

export default function FleetShowcase() {
  return (
    <section className="py-20 bg-[#111] text-white overflow-hidden relative">
      {/* Background Studio Elements */}
      {/* <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#1a1d26_0%,#000000_100%)]"></div> */}

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-yellow-500 text-xs font-bold tracking-[0.2em] uppercase block mb-3">
            The Production Line
          </span>
          <h2 className="cinzel text-4xl md:text-5xl  mb-4">
            Our <span className="text-gray-400 italic">Elite Fleet</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto font-light">
            Choose from our exclusive range of Force Urbania variants, each
            customized for a specific travel experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {fleetItems.map((item) => (
            <div
              key={item.id}
              className="group relative bg-white/5 backdrop-blur-xs shadow-[0_1px_30px_rgba(0,0,0,0.2),inset_0_1px_rgba(255,255,255,0.3),inset_0_-1px_rgba(255,255,255,0.3)] rounded-2xl overflow-hidden  hover:border-yellow-500/30 transition-all duration-500 hover:-translate-y-2"
            >
              {/* Image Placeholder Area (Simulating Studio Shot) */}
              <div
                className={`h-64 w-full  relative flex items-center justify-center overflow-hidden group-hover:scale-105 transition-transform duration-700`}
              >
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
                {/* Car Silhouette / Icon Placeholder */}
                <div className="text-center opacity-40 group-hover:opacity-60 transition-opacity">
                  {/* Simplified Car Shape using Lucide Icon for now, meant to be replaced by the image */}
                  {/* <div className="w-full flex justify-center transform scale-150">
                    <svg
                      width="120"
                      height="60"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1"
                      className="text-white drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)]"
                    >
                      <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" />
                      <circle cx="7" cy="17" r="2" />
                      <circle cx="17" cy="17" r="2" />
                    </svg>
                  </div> */}
                  <div className="w-full flex justify-center transform scale-150">
                    <img
                      src="/images/package-hero.webp"
                      alt="Urbania"
                      className="w-full"
                    />
                  </div>
                  <p className="text-xs tracking-widest mt-4 uppercase font-bold">
                    Image Coming Soon
                  </p>
                </div>

                {/* Reflective Floor Effect */}
                <div className="absolute bottom-0 w-full h-1/4 bg-linear-to-t from-black to-transparent opacity-80"></div>
              </div>

              {/* Content */}
              <div className="p-6 md:p-8">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-yellow-500 transition-colors bg-linear-to-r from-white to-gray-400 bg-clip-text">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                  {item.description}
                </p>

                <div className="space-y-3 mb-8">
                  {item.features.map((feat, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 text-sm text-gray-300"
                    >
                      <div className="w-5 h-5 rounded-full bg-white/5 flex items-center justify-center text-yellow-500">
                        <Star size={10} fill="currentColor" />
                      </div>
                      {feat}
                    </div>
                  ))}
                </div>

                <button className="w-full py-3 px-4 rounded-xl border border-white/10 hover:border-yellow-500 hover:bg-yellow-500/10 hover:text-yellow-500 text-white transition-all duration-300 flex items-center justify-between text-sm font-medium tracking-wide group/btn">
                  View Details
                  <ArrowRight
                    size={16}
                    className="transform group-hover/btn:translate-x-1 transition-transform"
                  />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
