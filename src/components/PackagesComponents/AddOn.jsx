import React from "react";
import { Plane, Luggage, Coffee, Armchair, UserCheck, Map } from "lucide-react";

export default function AddOn() {
  const addons = [
    {
      icon: <Plane size={24} />,
      title: "Airport Pickup & Drop",
      desc: "Seamless transfers to and from the terminal.",
    },
    {
      icon: <Luggage size={24} />,
      title: "Extra Luggage Handling",
      desc: "Hassle-free management for heavy baggage.",
    },
    {
      icon: <Coffee size={24} />,
      title: "On-Board Refreshments",
      desc: "Complimentary water & snacks for the journey.",
    },
    {
      icon: <Armchair size={24} />,
      title: "Premium Seat Upgrade",
      desc: "Enhanced cushioning for maximum comfort.",
    },
    {
      icon: <UserCheck size={24} />,
      title: "Dedicated Trip Manager",
      desc: "Personal assistance throughout your trip.",
    },
    {
      icon: <Map size={24} />,
      title: "Custom Route Planning",
      desc: "Tailored itineraries to suit your schedule.",
    },
  ];

  return (
    <section className="relative w-full py-24 px-4 bg-[#111] overflow-hidden">
      {/* Background Lighting Effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none">
        {/* <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-blue-900/20 rounded-full blur-[120px]"></div> */}
        {/* <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-purple-900/20 rounded-full blur-[120px]"></div> */}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        {/* Header */}
        <div className="mb-16 space-y-4">
          <span
            data-aos="fade-up"
            className="text-yellow-500 font-semibold tracking-[0.2em] text-sm uppercase"
          >
            Elevate Your Experience
          </span>
          <h2
            data-aos="fade-up"
            className="cinzel text-4xl md:text-5xl pt-3 text-white drop-shadow-lg"
          >
            Premium
            <span span className="text-gray-500 italic">
              {" "}
              Add-Ons
            </span>
          </h2>
          <p
            data-aos="fade-up"
            className="text-gray-400 max-w-2xl mx-auto font-light leading-relaxed"
          >
            Enhance your travel with optional upgrades tailored for comfort and
            convenience.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {addons.map((item, index) => (
            <div
              key={index}
              // data-aos="fade-up"
              className="group relative p-8 rounded-2xl bg-white/5 backdrop-blur-md border border-white/5 hover:border-white/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)] flex flex-col items-center text-center overflow-hidden"
            >
              {/* Hover Beam Effect */}
              <div className="absolute inset-0 bg-linear-to-tr from-white/0 via-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

              {/* Icon Container */}
              <div className="w-14 h-14 rounded-full bg-[#1A1D25] border border-white/10 flex items-center justify-center text-gray-300 group-hover:text-yellow-500 group-hover:border-yellow-500/30 transition-colors duration-300 mb-6 shadow-inner">
                {item.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-white mb-2 cinzel tracking-wide">
                {item.title}
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
