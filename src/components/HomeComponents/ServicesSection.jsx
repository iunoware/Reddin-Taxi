import GlassButton from "../GlassButton";
import { Briefcase, Users, Crown, Armchair, ArrowRight } from "lucide-react";

const ServicesSection = () => {
  return (
    // black & red version

    // red and white version
    <section className="relative bg-white py-24 px-6 md:px-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-red-600/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-red-900/10 rounded-full blur-[100px]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          {/* Text Content */}
          <div data-aos="fade-right" className="space-y-8 animate-fade-in-up">
            <div>
              <h2 className="text-4xl md:text-6xl font-bold text-black mb-6 cinzel leading-tight">
                Experience Luxury <br />
                <span className="text-transparent bg-clip-text bg-linear-to-r from-red-400 to-red-600">
                  Travel Like Never Before
                </span>
              </h2>
              <p className="text-xl text-gray-700 font-light italic border-l-4 border-white pl-6 py-2">
                “Where comfort meets class, and every journey becomes
                unforgettable.”
              </p>
            </div>
            <p className="text-black/90 leading-relaxed text-lg font-light">
              With our fleet of four state-of-the-art luxury buses, we redefine
              group travel with unmatched comfort and style. Whether it’s
              corporate events, long-distance tours, pilgrimages, school trips,
              airport transfers, or private charters — our services are designed
              to deliver a seamless, premium travel experience.
            </p>
            {/* <button className="relative hover:scale-96 transition-all  bg-black backdrop-blur-md shadow-[0_8px_24px_rgba(0,0,0,0.15),inset_0_0.5px_5px_rgba(255,255,255,0.4)] text-white px-2 py-1 md:px-5 md:py-3 rounded-xl font-semibold text-lg cursor-pointer ease-in">
              <span className="relative z-10 flex items-center gap-3">
                Explore Our Premium Services
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </button> */}
            <GlassButton
              text1="Explore Our Premium Services "
              textColor="text-white"
              bg="bg-black"
              link="/contact"
              className="block text-center w-fit"
            />
          </div>

          {/* my images side */}
          <div className="grid space-x-4 md:grid-cols-12 grid-cols-1 gap-5">
            <div
              data-aos="fade-up-right"
              className="md:col-span-5 md:-translate-y-4"
            >
              <img
                src="/images/as-1.webp"
                alt="Best Tours and Travels"
                className="md:rounded-tl-4xl h-full w-full object-center object-cover"
              />
            </div>
            <div className="md:col-span-7">
              <img
                data-aos="fade-up-left"
                src="/images/as-4.webp"
                alt="South Indian Tours and Travels"
                className="md:rounded-tr-4xl h-full w-full object-center object-cover"
              />
            </div>
            <div className="md:col-span-7 ">
              <img
                data-aos="fade-up-right"
                src="/images/as-3.webp"
                alt="Tours and Travels"
                className="h-full w-full md:rounded-bl-4xl object-center object-cover"
              />
            </div>
            <div className="md:col-span-5 md:translate-y-4">
              <img
                data-aos="fade-up-left"
                src="/images/as-2.webp"
                alt="Tours and Travels India"
                className="md:rounded-br-4xl h-full w-full object-center object-cover"
              />
            </div>
          </div>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: <Briefcase className="w-8 h-8 text-white" />,
              delay: "200",
              title: "Corporate & Event Travel",
              desc: "Professional, punctual, and premium transport for companies and large events.",
            },
            {
              icon: <Users className="w-8 h-8 text-white" />,
              delay: "300",
              title: "Tour Packages & Group Trips",
              desc: "Comfortable and scenic travel for family tours, educational trips, and holiday tours.",
            },
            {
              icon: <Crown className="w-8 h-8 text-white" />,
              delay: "400",
              title: "Customizable Buses for Special Moments",
              desc: "Customize the entire bus for weddings, VIP travel, and special occasions.",
            },
            {
              icon: <Armchair className="w-8 h-8 text-white" />,
              delay: "500",
              title: "Long-Distance Luxury Travel",
              desc: "Relax in pushback seats, AC, entertainment system, and spacious interiors on long routes.",
            },
          ].map((service, index) => (
            <div
              key={index}
              className="group relative bg-gray-100 shadow-xl backdrop-blur-md border border-white/10 rounded-2xl hover:bg-black transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)] overflow-hidden"
            >
              <div
                data-aos="fade-up"
                data-aos-delay={service.delay}
                className="p-8"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-gray-400/20 rounded-bl-full -mr-4 -mt-4 transition-all group-hover:bg-white/10"></div>

                <div className="mb-6 p-4 bg-red-400 rounded-xl w-fit group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 border border-white/5 shadow-inner">
                  {service.icon}
                </div>

                <h3 className="text-xl font-bold text-black mb-4 cinzel group-hover:text-red-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-black/60 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                  {service.desc}
                </p>

                <div className="absolute bottom-0 left-0 w-full h-1 bg-linear-to-r from-red-400 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
