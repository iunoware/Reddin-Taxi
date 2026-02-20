import React from "react";
import { Check, Info, Car, Calendar, User, Gauge } from "lucide-react";

export default function PricingTable() {
  const pricingData = [
    {
      variant: "Urbania Premium (9 Seater)",
      perKm: "₹28",
      perDay: "₹6,500",
      driver: "₹800",
    },
    {
      variant: "Urbania Luxury (13 Seater)",
      perKm: "₹32",
      perDay: "₹7,500",
      driver: "₹800",
    },
    {
      variant: "Urbania Executive (17 Seater)",
      perKm: "₹36",
      perDay: "₹8,500",
      driver: "₹900",
    },
    {
      variant: "Urbania Elite Traveller",
      perKm: "₹40",
      perDay: "₹9,500",
      driver: "₹1,000",
    },
    {
      variant: "Urbania Business Tourer",
      perKm: "₹45",
      perDay: "₹11,000",
      driver: "₹1,200",
    },
  ];

  return (
    <section className="relative w-full py-24 px-4 bg-[#e0e0e0] overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-[600px] bg-linear-to-b from-[#0D0F14] to-transparent -z-10"></div>
      <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-[#C9A35C]/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <span
            data-aos="fade-up"
            className="text-red-500 font-semibold tracking-[0.2em] text-sm uppercase"
          >
            Transparent Pricing
          </span>
          <h2
            data-aos="fade-up"
            className="cinzel text-4xl md:text-5xl font-bold text-black drop-shadow-lg"
          >
            Exclusive Rate Card
          </h2>
          <p
            data-aos="fade-up"
            className="text-gray-800 max-w-2xl mx-auto font-light leading-relaxed"
          >
            Experience premium travel with our transparent, all-inclusive pricing
            structure. No hidden costs, just pure luxury.
          </p>
        </div>

        {/* Table Container */}
        <div className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-[0_20px_70px_-10px_rgba(0,0,0,0.15)] overflow-hidden border border-white/50">
          {/* Table Header (Desktop) */}
          <div className="hidden md:grid grid-cols-4 bg-[#0D0F14] text-white p-6 items-center">
            <div className="pl-6 font-medium tracking-wide text-gray-300">
              Vehicle Variant
            </div>
            <div className="text-center font-medium tracking-wide text-gray-300 flex items-center justify-center gap-2">
              <Gauge size={16} className="text-[#C9A35C]" /> Per KM Rate
            </div>
            <div className="text-center font-medium tracking-wide text-gray-300 flex items-center justify-center gap-2">
              <Calendar size={16} className="text-[#C9A35C]" /> Per Day (Rental)
            </div>
            <div className="text-center font-medium tracking-wide text-gray-300 flex items-center justify-center gap-2">
              <User size={16} className="text-[#C9A35C]" /> Driver Bata
            </div>
          </div>

          {/* Table Body */}
          <div className="divide-y divide-gray-100">
            {pricingData.map((item, index) => (
              <div
                key={index}
                data-aos="fade-up"
                className="grid grid-cols-1 md:grid-cols-4 p-6 md:p-8 hover:bg-gray-50 transition-colors duration-300 items-center group"
              >
                {/* Variant Name */}
                <div className="col-span-1 mb-4 md:mb-0 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 group-hover:bg-[#C9A35C] group-hover:text-white transition-colors">
                    <Car size={20} />
                  </div>
                  <span className="font-bold text-gray-900 text-lg md:text-base cinzel">
                    {item.variant}
                  </span>
                </div>

                {/* Mobile Labels & Values */}
                <div className="col-span-1 md:col-span-3 grid grid-cols-3 gap-4 md:gap-0">
                  {/* Per KM */}
                  <div className="text-center border-r md:border-none border-gray-100 px-2">
                    <span className="md:hidden text-xs text-gray-400 uppercase tracking-wider block mb-1">
                      Per KM
                    </span>
                    <span className="text-xl font-bold text-gray-800 tracking-tight">
                      {item.perKm}
                    </span>
                  </div>

                  {/* Per Day */}
                  <div className="text-center border-r md:border-none border-gray-100 px-2">
                    <span className="md:hidden text-xs text-gray-400 uppercase tracking-wider block mb-1">
                      Per Day
                    </span>
                    <span className="text-xl font-bold text-gray-800 tracking-tight">
                      {item.perDay}
                    </span>
                  </div>

                  {/* Driver */}
                  <div className="text-center px-2">
                    <span className="md:hidden text-xs text-gray-400 uppercase tracking-wider block mb-1">
                      Driver
                    </span>
                    <span className="text-xl font-bold text-gray-800 tracking-tight">
                      {item.driver}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Footer Note */}
          <div className="p-6 bg-gray-50 border-t border-gray-100 flex items-start gap-3">
            <Info size={18} className="text-[#C9A35C] mt-0.5 shrink-0" />
            <p className="text-sm text-gray-500 leading-relaxed">
              * Pricing excludes tolls, parking fees, and interstate taxes. Minimum
              billing criteria applies for hourly rentals. Rates valid for 2024-2025
              season.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
