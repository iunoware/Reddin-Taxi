import GlassButton from "../GlassButton";
import { Check, Star, Crown, Zap } from "lucide-react";

const packages = [
  {
    title: "Standard Premium",
    delay: "200",
    price: "₹2999",
    period: "+ other charges",
    description: "Perfect for airport transfers and short luxury city commutes.",
    icon: <Star className="w-6 h-6 text-yellow-500" />,
    features: [
      "Luxury Leather Seating",
      "Complimentary Water",
      "Professional Chauffeur",
      "Standard Baggage Allowance",
      "Free Wi-Fi Access",
    ],
    highlight: false,
    premium: false,
  },
  {
    title: "Elite Royal Experience",
    delay: "400",
    price: "₹9999",
    period: "+ other charges",
    description: "The ultimate VIP experience with unmatched luxury and privacy.",
    icon: <Crown className="w-6 h-6 text-black/90" />,
    features: [
      "Full Flat-Bed Recliners",
      "Champagne Service",
      "Personal Concierge",
      "Private Cabin Partition",
      "Massage Functionality",
    ],
    highlight: true,
    premium: true,
  },
  {
    title: "Executive Comfort",
    delay: "300",
    price: "₹5499",
    period: "+ other charges",
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
    premium: false,
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
          <h2
            data-aos="fade-down"
            className="text-3xl cinzel md:text-5xl font-serif text-black font-bold mb-4 tracking-tight"
          >
            Curated <span className="text-red-500 italic font-normal">Packages</span>
          </h2>
          <div className="w-20 h-1 bg-linear-to-r from-transparent via-red-600 to-transparent mx-auto rounded-full mb-6"></div>
          <p className="text-black max-w-2xl mx-auto text-lg font-light leading-relaxed">
            Choose the level of luxury that suits your journey. Exceptional service is
            standard across all tiers.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {packages.map((pkg, index) => (
            <div key={index} data-aos="fade-up-right" data-aos-delay={pkg.delay}>
              <div
                className={`${
                  pkg.premium
                    ? "lg:scale-110 scale-100 bg-linear-to-b from-amber-200  via-zinc-900/10 to-transparent"
                    : "lg:scale-97 scale-100 bg-linear-to-b from-zinc-700/50 via-zinc-900/10 to-transparent"
                } relative shadow-lg group rounded-2xl p-1 transition-all duration-500 hover:-translate-y-2`}
              >
                <div
                  className={`${
                    pkg.premium
                      ? "bg-[url('/images/gold-bg.webp')] bg-cover bg-center"
                      : "bg-[#111]"
                  } h-full backdrop-blur-xl rounded-xl p-8 flex flex-col relative overflow-hidden`}
                >
                  {/* Glow Effect */}
                  {pkg.premium && (
                    <div>
                      <div className="absolute top-0 right-0 -mr-16 -mt-16 w-32 h-32 bg-yellow-500/50 blur-3xl rounded-full group-hover:bg-yellow-500/60 transition-all duration-700"></div>
                      {/* <div className="absolute top-0 left-0 -mr-16 -mt-16 w-32 h-32 bg-yellow-500/50 blur-3xl rounded-full group-hover:bg-yellow-500/60 transition-all duration-700"></div> */}
                    </div>
                  )}

                  {/* Header */}
                  <div className="mb-6 relative">
                    <div className="flex items-center justify-between mb-4">
                      <div
                        className={`p-3 rounded-full ${
                          pkg.highlight
                            ? `bg-yellow-500/10 text-yellow-500`
                            : `${
                                index === 0 &&
                                "bg-zinc-800 text-gray-400 group-hover:text-yellow-500 group-hover:bg-yellow-500/10"
                              }`
                        } transition-colors duration-300`}
                      >
                        {pkg.icon}
                      </div>
                      {pkg.highlight && (
                        <span className="px-3 py-1 text-xs font-semibold tracking-wider text-black bg-yellow-500 rounded-full uppercase">
                          {!pkg.premium ? "Most Popular" : "Most Elite"}
                        </span>
                      )}
                    </div>
                    <h3
                      className={`${
                        pkg.premium ? "text-black" : "text-white"
                      } text-2xl font-semibold mb-2`}
                    >
                      {pkg.title}
                    </h3>
                    <p
                      className={`${
                        pkg.premium ? "text-black/90" : "text-gray-500"
                      } text-sm leading-relaxed min-h-10`}
                    >
                      {pkg.description}
                    </p>
                  </div>

                  {/* Price */}
                  <div className="mb-8 flex items-baseline gap-1">
                    <span
                      className={`${
                        pkg.premium ? "text-black" : "text-white"
                      } text-4xl font-semibold `}
                    >
                      {pkg.price}
                    </span>
                    <span
                      className={`${
                        pkg.premium ? "text-black/90" : "text-gray-500"
                      }  text-sm font-light`}
                    >
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
                        className={`${
                          pkg.premium ? "text-black" : "text-gray-300"
                        } flex items-center gap-3 text-sm transition-colors duration-300`}
                      >
                        <Check
                          className={`w-4 h-4 ${
                            pkg.highlight && index === 2
                              ? "text-yellow-500"
                              : "text-zinc-600 "
                          } transition-colors duration-300`}
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* {pkg.highlight ? (
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
                  )} */}
                  {index === 0 ? (
                    <GlassButton
                      text1="Book Now"
                      glass={true}
                      link="/contact"
                      className="text-center"
                    />
                  ) : (
                    <></>
                  )}
                  {index === 1 ? (
                    <GlassButton
                      text1="Book Now"
                      bg="bg-black"
                      textColor="text-white"
                      // glass={true}
                      link="/contact"
                      className="text-center"
                    />
                  ) : (
                    <></>
                  )}
                  {index === 2 ? (
                    <GlassButton
                      text1="Book Now"
                      bg="bg-white"
                      textColor="text-black"
                      // glass={true}
                      link="/contact"
                      className="text-center"
                    />
                  ) : (
                    <></>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
