import GlassButton from "../components/GlassButton";
import { Check, Star, Crown, Zap } from "lucide-react";

const packages = [
  {
    title: "Standard Premium",
    price: "₹2999",
    period: "+ trip",
    description:
      "Perfect for airport transfers and short luxury city commutes.",
    icon: <Star className="w-6 h-6 text-yellow-500" />,
    features: [
      "Luxury Leather Seating",
      "Complimentary Water",
      "Professional Chauffeur",
      "Standard Baggage Allowance",
      "Free Wi-Fi Access",
    ],
    highlight: false,
  },
  {
    title: "Executive Comfort",
    price: "₹5499",
    period: "+ trip",
    description: "Designed for business travel and extended comfort journeys.",
    icon: <Zap className="w-6 h-6 text-yellow-500" />,
    features: [
      "Reclining Captain Seats",
      "Workstation Tables",
      "Priority Boarding",
      "Premium Refreshments",
      "Enhanced Privacy Tint",
    ],
    highlight: true,
  },
  {
    title: "Elite Royal Experience",
    price: "₹9999",
    period: "+ trip",
    description:
      "The ultimate VIP experience with unmatched luxury and privacy.",
    icon: <Crown className="w-6 h-6 text-yellow-500" />,
    features: [
      "Full Flat-Bed Recliners",
      "Champagne Service",
      "Personal Concierge",
      "Private Cabin Partition",
      "Massage Functionality",
    ],
    highlight: false,
  },
];

export default function Packages() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 from-zinc-800/20 via-[#0d0d0d] to-[#0d0d0d] pointer-events-none bg-[radial-linear(circle_at_top,var(--tw-linear-stops))]"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl cinzel md:text-5xl font-serif text-black font-bold mb-4 tracking-tight">
            Curated{" "}
            <span className="text-red-500 italic font-normal">Packages</span>
          </h2>
          <div className="w-20 h-1 bg-linear-to-r from-transparent via-red-600 to-transparent mx-auto rounded-full mb-6"></div>
          <p className="text-black max-w-2xl mx-auto text-lg font-light leading-relaxed">
            Choose the level of luxury that suits your journey. Exceptional
            service is standard across all tiers.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`relative group rounded-2xl p-1 transition-all duration-500 hover:-translate-y-2 ${
                pkg.highlight
                  ? "bg-linear-to-b from-yellow-600 via-yellow-900/20 to-transparent shadow-[0_0_50px_-10px_rgba(234,179,8,0.2)]"
                  : "bg-linear-to-b from-zinc-700/50 via-zinc-900/10 to-transparent hover:from-yellow-800/30"
              }`}
            >
              <div className="h-full bg-[#111] backdrop-blur-xl rounded-xl p-8 flex flex-col border border-white/5 relative overflow-hidden">
                {/* Glow Effect */}
                <div className="absolute top-0 right-0 -mr-16 -mt-16 w-32 h-32 bg-yellow-500/10 blur-3xl rounded-full group-hover:bg-yellow-500/20 transition-all duration-700"></div>

                {/* Header */}
                <div className="mb-6 relative">
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`p-3 rounded-full ${
                        pkg.highlight
                          ? "bg-yellow-500/10 text-yellow-500"
                          : "bg-zinc-800 text-gray-400 group-hover:text-yellow-500 group-hover:bg-yellow-500/10"
                      } transition-colors duration-300`}
                    >
                      {pkg.icon}
                    </div>
                    {pkg.highlight && (
                      <span className="px-3 py-1 text-xs font-semibold tracking-wider text-black bg-yellow-500 rounded-full uppercase">
                        Most Popular
                      </span>
                    )}
                  </div>
                  <h3 className="text-2xl font-serif text-white mb-2">
                    {pkg.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed min-h-10">
                    {pkg.description}
                  </p>
                </div>

                {/* Price */}
                <div className="mb-8 flex items-baseline gap-1">
                  <span className="text-4xl font-light text-white">
                    {pkg.price}
                  </span>
                  <span className="text-gray-500 text-sm font-light">
                    {pkg.period}
                  </span>
                </div>

                {/* Divider */}
                <div className="w-full h-px bg-linear-to-r from-transparent via-zinc-700 to-transparent mb-8"></div>

                {/* Features */}
                <ul className="space-y-4 mb-8 flex-1">
                  {pkg.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-3 text-sm text-gray-300 group-hover:text-white transition-colors duration-300"
                    >
                      <Check
                        className={`w-4 h-4 ${
                          pkg.highlight
                            ? "text-yellow-500"
                            : "text-zinc-600 group-hover:text-yellow-500"
                        } transition-colors duration-300`}
                      />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Button */}
                {/* <button
                  className={`w-full py-4 px-6 rounded-lg text-sm font-semibold tracking-wide uppercase transition-all duration-300 ${
                    pkg.highlight
                      ? "bg-white text-black hover:bg-white/5 hover:text-white hover:shadow-[0_8px_24px_rgba(0,0,0,0.15),inset_0_0.5px_5px_rgba(255,255,255,0.4)] "
                      : "bg-white/5 backdrop-blur-md text-white shadow-[0_8px_24px_rgba(0,0,0,0.15),inset_0_0.5px_5px_rgba(255,255,255,0.4)]"
                  }`}
                >
                  Book Now
                </button> */}
                {pkg.highlight ? (
                  <GlassButton
                    text1="Book Now"
                    bg="bg-white"
                    textColor="text-black"
                    // glass={true}
                    link="/contact"
                    className="text-center"
                  />
                ) : (
                  <GlassButton
                    text1="Book Now"
                    glass={true}
                    link="/contact"
                    className="text-center"
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
