export default function Home() {
  return (
    <div className="overflow-x-clip  ">
      {/* hero section */}
      <div className="relative w-screen h-screen bg-[url(/images/hero-3.png)] bg-cover bg-center">
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/30 to-transparent"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col justify-center h-full px-10 md:px-20 text-white max-w-4xl">
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
            <button className="bg-red-500 hover:bg-red-600 text-white px-2 py-1 md:px-8 md:py-4 rounded-xl font-semibold text-lg transition-all shadow-lg hover:shadow-teal-500/30 cursor-pointer">
              Book Your Trip
            </button>
            <button className="border-2 border-white/80 hover:bg-white/10 text-white px-2 py-1 md:px-8 md:py-4 rounded-full font-semibold text-lg transition-all backdrop-blur-sm cursor-pointer">
              Explore Services
            </button>
          </div>
          {/* stats */}
          <div className="flex absolute bottom-10 justify-between w-full">
            <div className="">
              <p className="text-5xl font-bold">5+</p>
              <h2>Luxury-Class Vehicles</h2>
            </div>
            <div className="">
              <p className="text-5xl font-bold">100%</p>
              <h2>Customer Satisfaction Score</h2>
            </div>
            <div className="">
              <p className="text-5xl font-bold">0</p>
              <h2>Safety Compromises</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
