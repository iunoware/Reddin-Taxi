import GlassButton from "../components/GlassButton";

const Cta = () => {
  return (
    // <section className="w-full max-w-7xl  mx-auto px-4 py-16 sm:px-6 lg:px-8">
    //   <div className="flex flex-col md:flex-row bg-red-50 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
    //     {/* Left Side: Content */}
    //     <div className="w-full md:w-1/2 p-10 md:p-16 flex flex-col justify-center items-start space-y-6">
    //       <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight leading-tight">
    //         Plan Your Trip
    //       </h2>
    //       <p className="text-lg text-gray-700 leading-relaxed font-medium">
    //         Your next premium journey begins with a single click.
    //       </p>
    //       <button
    //         type="button"
    //         className="inline-flex items-center justify-center px-8 py-3 text-base md:text-lg font-semibold text-white bg-red-600 rounded-full hover:bg-red-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-600 shadow-md"
    //       >
    //         Get Started
    //       </button>
    //     </div>

    //     {/* Right Side: Illustration */}
    //     <div className="w-full md:w-1/2 relative overflow-visible bg-red-100 min-h-[300px]">
    //       {/* Note: In a real scenario, this would be the AI generated image.
    //           Using a placeholder from public/images as fallback since AI generation is currently rate limited. */}
    //       <img
    //         src="/images/cta.png"
    //         alt="Cheerful family ready for a travel journey"
    //         className="absolute inset-0 w-full h-full object-cover object-center"
    //         loading="lazy"
    //       />
    //     </div>
    //   </div>
    // </section>
    <section className="flex items-center justify-center pb-10">
      <div className="bg-black/40 md:h-100 min-w-[90vw] rounded-2xl absolute z-10"></div>
      <div className="bg-[url('/images/luxury-bg.png')] relative rounded-2xl m-25 h-200 md:h-100 place-content-center grid grid-cols-1 gap-5 md:grid-cols-2 min-w-[90vw] ">
        {/* Right side */}
        <div className="flex flex-col items-center justify-center z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight leading-tight">
            Plan Your Trip
          </h2>
          <p className="text-lg pt-2 text-white leading-relaxed font-medium">
            Your next premium journey begins with a single click.
          </p>
          {/* <button
            type="button"
            className="inline-flex items-center justify-center px-8 py-3 text-base md:text-lg font-semibold text-white bg-red-600 rounded-full hover:bg-red-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-600 shadow-md"
          >
            Get Started
          </button> */}
          <GlassButton
            text1="Book this fleet"
            // text2="Experience Luxury"
            glass={true}
            // textColor="text-white"
            // bg="bg-black"
            link="/contact"
            className="mt-5"
          />
        </div>
        <div className="relative">
          {/* <div className="bg-red-200/40 absolute right-0 -top-30 w-60 h-60 rounded-full"></div> */}
          {/* IMG Side */}
          <img
            src="/images/cta-fam.png"
            alt=""
            className="md:h-[650px] z-10 object-center md:absolute -top-80 "
          />
        </div>
      </div>
    </section>
  );
};

export default Cta;
