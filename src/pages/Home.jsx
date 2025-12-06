import ServicesSection from "../components/ServicesSection";
import FleetSection from "../components/FleetSection";
import OurServices from "../components/OurServices";
import WhyChooseUs from "../components/WhyChooseUs";
import ExpCarousel from "../components/ExpCarousel";
import Packages from "../components/Packages";
import Testimonial from "../components/Testimonial";
import Cta from "../components/Cta";

export default function Home() {
  return (
    <>
      <div className="overflow-x-clip">
        {/* hero section */}
        <div className="relative w-screen h-screen bg-[url(/images/hero-3.png)] bg-cover bg-center">
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/30 to-transparent"></div>

          {/* Content */}
          <div className="relative z-10 flex flex-col justify-center h-full px-3 md:px-20 text-white max-w-4xl">
            <h1 className="text-4xl  cinzel font-bold md:text-7xl leading-tight mb-2 md:mb-6 drop-shadow-lg">
              Travel Beyond <br />
              <span className="text-red-600">Ordinary</span>
            </h1>

            <p className="text-lg md:text-2xl text-gray-100 mb-10 max-w-2xl drop-shadow-md font-light">
              Luxury bus journeys crafted for comfort, safety, and unforgettable
              experiences.
            </p>

            {/* links */}
            <div className="flex flex-row items-center gap-6">
              <button className="relative hover:scale-96 transition-all  bg-white/1 backdrop-blur-md shadow-[0_8px_24px_rgba(0,0,0,0.15),inset_0_0.5px_5px_rgba(255,255,255,0.4)] text-white px-2 py-1 md:px-5 md:py-3 rounded-xl font-semibold text-lg cursor-pointer ease-in">
                Book Your Trip
              </button>
              <button className=" hover:scale-96 bg-white/80 text-black px-2 py-1 md:px-5 md:py-3 rounded-xl font-semibold text-lg transition-all cursor-pointer">
                Explore Services
              </button>
            </div>

            {/* stats */}
            <div className="flex absolute bottom-10 justify-between w-full">
              <div className="">
                <p className="md:text-5xl text-2xl font-bold">5+</p>
                <h2 className="text-sm md:text-md">Luxury-Class Vehicles</h2>
              </div>
              <div className="">
                <p className="md:text-5xl text-2xl font-bold">100%</p>
                <h2 className="text-sm md:text-md">
                  Customer Satisfaction Score
                </h2>
              </div>
              <div className="">
                <p className="md:text-5xl text-2xl font-bold">0</p>
                <h2 className="text-sm md:text-md pr-2 md:pr-0">
                  Safety Compromises
                </h2>
              </div>
            </div>
          </div>
        </div>

        {/* about the service section */}
        <ServicesSection />

        {/* our luxury fleet section */}
        <FleetSection />

        {/* Our services */}
        <OurServices />

        {/* Why Choose Us */}
        <WhyChooseUs />
      </div>

      {/* Interior Experience */}
      <ExpCarousel />

      {/* packages */}
      <Packages />

      {/* testimonial */}
      <Testimonial />

      {/* CTA */}
      <Cta />
    </>
  );
}
