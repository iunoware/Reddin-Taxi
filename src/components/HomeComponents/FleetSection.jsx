import GlassButton from "../GlassButton";
import { Users, Gauge, Armchair, Star, Check, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const FleetSection = () => {
  const vans = [
    {
      name: "Urbania VIP",
      image: "/images/van-1.webp",
      features: [
        "Premium Leather Seating",
        "LED Ambience Lighting",
        "Air-Suspension Comfort",
        // "Personal Charging Ports",
        // "High-End Sound System",
      ],
    },
    {
      name: "Urbania VIP",
      image: "/images/van-2.webp",
      features: [
        "Premium Leather Seating",
        "LED Ambience Lighting",
        "Air-Suspension Comfort",
        // "Personal Charging Ports",
        // "High-End Sound System",
      ],
    },
    {
      name: "Urbania VIP",
      image: "/images/spacious.webp",
      features: [
        "Premium Leather Seating",
        "LED Ambience Lighting",
        "Air-Suspension Comfort",
        // "Personal Charging Ports",
        // "High-End Sound System",
      ],
    },
    {
      name: "Urbania VIP",
      image: "/images/interior-design.webp",
      features: [
        "Premium Leather Seating",
        "LED Ambience Lighting",
        "Air-Suspension Comfort",
        // "Personal Charging Ports",
        // "High-End Sound System",
      ],
    },
    {
      name: "Urbania VIP",
      image: "/images/interior-seat.webp",
      features: [
        "Premium Leather Seating",
        "LED Ambience Lighting",
        "Air-Suspension Comfort",
        // "Personal Charging Ports",
        // "High-End Sound System",
      ],
    },
  ];

  return (
    <section className="relative bg-black py-10 px-6 md:px-20 overflow-hidden text-white">
      <div className="max-w-8xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-col gap-16">
          {/* Left Side: Content & Stats */}
          <div className="w-full flex flex-col items-center justify-center space-y-10 sticky top-24 h-fit">
            <div
              data-aos="fade-up"
              className="space-y-6 flex flex-col items-center justify-center"
            >
              <h4 className="text-yellow-500 tracking-[0.2em] text-sm font-bold uppercase">
                The Collection
              </h4>
              <h2 className="text-5xl md:text-6xl cinzel leading-tight">
                Our
                <span className="text-gray-400 italic">{""} Luxury Fleet</span>
              </h2>
              <p className="text-gray-400 text-center text-lg leading-relaxed font-light">
                Experience the pinnacle of group travel with our exclusive fleet of four
                luxury-modified Urbania vans. Designed for business-class comfort, each
                vehicle offers a sanctuary of sophistication on wheels.
              </p>
            </div>

            {/* Stats Bar */}
            <div className="space-y-6">
              <div className="h-px w-full bg-linear-to-r from-yellow-500/50 to-transparent"></div>
              <div className="grid md:grid-cols-4 grid-cols-1 place-items-center gap-6">
                {[
                  {
                    label: "Luxury Urbania Vans",
                    icon: <Shield className="w-5 h-5 text-red-500" />,
                  },
                  // {
                  //   label: "8-17 Seat Options",
                  //   icon: <Users className="w-5 h-5 text-red-500" />,
                  // },
                  {
                    label: "Premium Interiors",
                    icon: <Armchair className="w-5 h-5 text-red-500" />,
                  },
                  {
                    label: "Professional Chauffeurs",
                    icon: <Gauge className="w-5 h-5 text-red-500" />,
                  },
                ].map((stat, idx) => (
                  <div
                    key={idx}
                    data-aos="fade-up"
                    className="flex items-center gap-4 group"
                  >
                    <div className="p-2 bg-red-500/10 rounded-lg group-hover:bg-red-500/20 transition-colors">
                      {stat.icon}
                    </div>
                    <span className="text-lg font-medium text-gray-200">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
              <div className="h-px w-full bg-linear-to-r from-yellow-500/50 to-transparent"></div>
            </div>

            {/* <GlassButton
              text1="View Full Specifications"
              text2="Experience the Luxury"
              glass={true}
              link="/contact"
              className="text-center"
            /> */}
          </div>

          {/* Right Side: Fleet Grid */}
          <div className="w-full pt-15 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {vans.map((item, index) => (
              <div
                key={index}
                // data-aos="fade-up"
                className="group p-3 relative bg-white/5 backdrop-blur-md shadow-[0_8px_24px_rgba(0,0,0,0.15),inset_0_0.5px_5px_rgba(255,255,255,0.4)] rounded-2xl overflow-hidden hover:border-yellow-500/30 transition-all duration-500 hover:-translate-y-1"
              >
                {/* Image Container */}
                <div className="relative rounded-xl h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-linear-to-t transition-opacity ease-in from-black/60 group-hover:from-black/30  rounded-xl via-transparent to-transparent z-10"></div>
                  <img
                    src={item.image}
                    alt="Luxury Urbania"
                    className="w-full h-full rounded-xl object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 right-4 z-20 bg-black/50 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                    <div className="flex items-center gap-1">
                      <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                      <span className="text-xs font-bold text-white">Premium</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-1 cinzel">
                    {item.name}
                  </h3>
                  <p className="text-red-200 text-sm mb-4 font-medium">
                    {/* Luxury Class • {index % 2 === 0 ? "12 Seater" : "17 Seater"} */}
                    Luxury Class • "12 Seater"
                  </p>

                  <div className="space-y-2 mb-6">
                    {item.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2 text-gray-400 text-sm"
                      >
                        <div className="w-1 h-1 rounded-full bg-yellow-500"></div>
                        {feature}
                      </div>
                    ))}
                  </div>

                  {/* <Link to="/contact">
                    <button className="w-full cursor-pointer backdrop-blur-md bg-red-800 shadow-[0_1px_30px_rgba(0,0,0,0.2),inset_0_1px_rgba(255,255,255,0.3),inset_0_-1px_rgba(255,255,255,0.3)] px-6 hover:-translate-y-2 transition-all duration-300 rounded-2xl py-3">
                      Experience Luxury
                    </button>
                  </Link> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FleetSection;
