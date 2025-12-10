import React from "react";
import { Briefcase, Plane, Crown, MapPin, Users, Star } from "lucide-react";

const services = [
  {
    title: "Corporate Travel & Business Trips",
    icon: <Briefcase size={28} />,
    size: "col-span-1 md:col-span-2 md:row-span-2",
    img: "bg-[url('/images/corporate-tour.webp')] bg-cover bg-center",
  },
  {
    title: "Airport Transfers",
    icon: <Plane size={24} />,
    size: "col-span-1 md:col-span-1 md:row-span-1",
    img: "bg-[url('/images/Airport-transfers.webp')] bg-cover bg-center",
  },
  {
    title: "Wedding & VIP Events",
    icon: <Crown size={24} />,
    size: "col-span-1 md:col-span-1 md:row-span-1",
    img: "bg-[url('/images/wedding.webp')] bg-cover bg-center",
  },
  {
    title: "Outstation Luxury Tours",
    icon: <MapPin size={24} />,
    size: "col-span-1 md:col-span-1 md:row-span-1",
    img: "bg-[url('/images/outstation-trips.webp')] bg-cover bg-center",
  },
  {
    title: "Group & Family Trips",
    icon: <Users size={28} />,
    size: "col-span-1 md:col-span-2 md:row-span-1",
    img: "bg-[url('/images/grouptrip.webp')] bg-cover bg-center",
  },
  {
    title: "Celebrity / Executive Shuttle",
    icon: <Star size={28} />,
    size: "col-span-1 md:col-span-3 md:row-span-1",
    img: "bg-[url('/images/celebrety.webp')] bg-cover bg-center ",
  },
];

const OurServices = () => {
  return (
    <section className="relative w-full py-24 px-4 md:px-10 lg:px-20  overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2
            data-aos="fade-down"
            className="text-4xl cinzel md:text-6xl font-serif font-bold mb-4 tracking-wide drop-shadow-xl relative inline-block"
          >
            Services{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-red-400 to-red-600">
              We Offer
            </span>
            <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-24 h-0.5 bg-linear-to-r from-transparent via-[#D4AF37] to-transparent"></span>
          </h2>
          <p className="text-black text-lg md:text-xl font-light tracking-wide mt-6 max-w-2xl mx-auto">
            Premium travel solutions crafted for comfort, style, and a seamless
            journey.
          </p>
        </div>

        {/* Mosaic Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px]">
          {services.map((service, index) => (
            <div
              key={index}
              data-aos="fade-up"
              className={`group relative overflow-hidden rounded-2xl border border-white/5 hover:border-[#D4AF37]/50 transition-all duration-500 hover:shadow-[0_0_30px_-5px_rgba(212,175,55,0.15)] ${service.size}`}
            >
              {/* Background with Zoom Effect */}
              <div
                className={`absolute inset-0 ${service.img} transition-transform duration-700 ease-out group-hover:scale-105 `}
              >
                {/* Fallback gradient if not an image url */}
                {!service.img.includes("url") && (
                  <div className="w-full h-full bg-linear-to-br from-neutral-800 to-black opacity-50"></div>
                )}
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 flex items-end justify-between transition-all duration-500 group-hover:-translate-y-2">
                <div>
                  <div className="mb-3 text-[#D4AF37] opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 origin-left">
                    {service.icon}
                  </div>
                  <h3 className="text-xl md:text-2xl font-medium text-white tracking-wide border-l-2 border-[#D4AF37] pl-3">
                    {service.title}
                  </h3>
                </div>
              </div>

              {/* Hover Glow Accent */}
              <div className="absolute -inset-1 bg-linear-to-r from-[#D4AF37] to-transparent opacity-0 group-hover:opacity-1 blur-xl transition-opacity duration-700 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
