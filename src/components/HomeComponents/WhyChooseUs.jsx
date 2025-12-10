import { Shield, Clock, Award, Star, MapPin, UserCheck } from "lucide-react";

export default function WhyChooseUs() {
  const features = [
    {
      icon: <Shield className="w-8 h-8  text-red-500 " />,
      delay: "200",
      title: "Unmatched Safety",
      description:
        " rigorous safety protocols and premium insurance coverage for your peace of mind.",
    },
    {
      icon: <Clock className="w-8 h-8  text-red-500 " />,
      delay: "300",
      title: "Punctuality Guarantee",
      description:
        "Respecting your time with precision scheduling and real-time route optimization.",
    },
    {
      icon: <Award className="w-8 h-8  text-red-500 " />,
      delay: "400",
      title: "Premium Service",
      description:
        "Recognized globally for excellence in luxury hospitality and transportation.",
    },
    {
      icon: <UserCheck className="w-8 h-8 text-red-500 " />,
      delay: "200",
      title: "Professional Chauffeurs",
      description:
        "Hand-picked, highly trained professionals dedicated to your comfort and privacy.",
    },
    {
      icon: <Star className="w-8 h-8  text-red-500 " />,
      delay: "300",
      title: "Premium Fleet",
      description:
        "An exclusive collection of top-tier vehicles maintained to showroom standards.",
    },
    {
      icon: <MapPin className="w-8 h-8  text-red-500 " />,
      delay: "400",
      title: "On‑Board Amenities",
      description:
        "Complimentary water bottles, charging ports, Wi‑Fi (if you offer), blankets, etc.",
    },
  ];

  return (
    <section className="relative py-20 md:py-12 overflow-hidden">
      {/* Background Elements */}
      {/* <div className="absolute inset-0 bg-linear-to-b from-black/0 via-zinc-900/10 to-black pointer-events-none"></div> */}
      {/* <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-yellow-900/30 to-transparent"></div> */}

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-24">
          <h2 className="cinzel font-bold text-3xl md:text-5xl font-serif text-black mb-4 tracking-tight">
            The{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-yellow-400 to-yellow-600">
              Gold
            </span>{" "}
            Standard
          </h2>
          {/* <div className="w-24 h-1 bg-yellow-600 mx-auto rounded-full mb-6"></div> */}
          <p className="text-gray-700 max-w-2xl mx-auto text-lg md:text-xl font-light leading-relaxed">
            Experience the pinnacle of luxury travel where every detail is
            curated for your absolute comfort.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-x-12 md:gap-y-16">
          {features.map((feature, index) => (
            <div data-aos="fade-up" data-aos-delay={feature.delay} key={index}>
              <div className="group shadow-[3px_3px_10px_#8d8d8d,-3px_-3px_10px_#ffffff] flex flex-col md:flex-row items-start gap-5 p-6 rounded-xl overflow-hidden hover:border-red-500/30 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)]">
                {/* Icon Side */}
                <div className="shrink-0 relative">
                  {/* <div className="absolute inset-0 bg-red-400 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div> */}
                  <div className="relative p-3 shadow-[3px_3px_15px_#8d8d8d,-3px_-3px_15px_#ffffff] rounded-lg transition-colors duration-500">
                    {feature.icon}
                  </div>
                </div>

                {/* Text Side */}
                <div className="flex-1">
                  <h3 className="text-xl font-medium text-black group-hover:text-red-500 mb-2 transition-all duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed group-hover:text-gray-900 transition-all duration-300">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Decoration */}
        <div className="mt-20 md:mt-32 flex justify-center opacity-30">
          <div className="w-full max-w-xs h-px bg-linear-to-r from-transparent via-black to-transparent"></div>
        </div>
      </div>
    </section>
  );
}
