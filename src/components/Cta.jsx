import GlassButton from "../components/GlassButton";
import {
  Plane,
  MapPin,
  ArrowRight,
  Star,
  Luggage,
  Backpack,
  BriefcaseBusiness,
} from "lucide-react";

export default function Cta() {
  return (
    <section className="relative  bg-[#e0e0e0] w-full py-10 px-4 flex items-center justify-center overflow-hidden">
      {/* Background Decorative Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[radial-gradient(circle_at_center,#ffffff_0%,#e5e7eb_100%)] -z-10"></div>

      {/* Ticket Container */}

      <div
        data-aos="fade-up-right"
        className="relative w-full max-w-5xl bg-[#0F0F0F] rounded-[2.5rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] flex flex-col md:flex-row overflow-hidden "
      >
        {/* Left Side: Content */}
        <div className="flex-1 p-10 md:p-14 flex flex-col justify-center relative z-10">
          {/* Subtle Watermark/Pattern */}
          <div className="absolute top-0 right-0 p-10 opacity-5 pointer-events-none">
            <BriefcaseBusiness size={200} className="text-white" strokeWidth={0.5} />
          </div>

          <div className="flex items-center gap-2 mb-6">
            {/* <span className="bg-red-50 text-red-600 px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase border border-red-100"> */}
            <span className="text-yellow-500 tracking-[0.2em] text-sm font-semibold uppercase">
              First Class
            </span>
            {/* <div className="h-px w-12 bg-red-200"></div> */}
          </div>

          <h2 className="cinzel text-4xl md:text-5xl text-white leading-[1.1] mb-6">
            Plan Your <br />
            <span className="italic text-gray-400">Premium Journey</span>
          </h2>

          <p className="font-sans text-gray-200 text-lg mb-10 max-w-md leading-relaxed">
            Your next luxury ride begins with a single click. Experience comfort, safety,
            and elegance like never before.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            {/* <button className="group relative px-8 py-4 bg-gray-900 text-white rounded-xl overflow-hidden shadow-lg transition-transform hover:scale-[1.02] active:scale-[0.98]">
              <div className="absolute inset-0 bg-linear-to-r from-gray-900 via-gray-800 to-gray-900 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              <span className="relative flex items-center gap-2 font-medium tracking-wide">
                Book Now <ArrowRight size={18} />
              </span>
            </button> */}

            <GlassButton
              text1={`Book Now `}
              glass={true}
              link="/packages"
              // className="text-center py-1"
            />
            {/* <button className="px-8 py-4 bg-white text-gray-900 border border-gray-200 rounded-xl font-medium tracking-wide hover:bg-gray-50 transition-colors shadow-sm hover:shadow-md">
              Contact Us
            </button> */}
            <GlassButton
              text1={`Contact Us `}
              // glass={true}
              textColor="text-black"
              bg="bg-white"
              link="/contact"
              // className="text-center py-1"
            />
          </div>
        </div>

        {/* Perforation Line (Visual Divider) */}
        <div className="relative hidden md:flex flex-col justify-center items-center py-4">
          <div className="h-full border-l-2 border-dashed border-gray-300 relative z-20"></div>
          {/* Top Notch */}
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-10 h-10 bg-[#e0e0e0] rounded-full shadow-[inset_0_-2px_4px_rgba(0,0,0,0.05)] z-20"></div>
          {/* Bottom Notch */}
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-10 h-10 bg-[#e0e0e0] rounded-full shadow-[inset_0_2px_4px_rgba(0,0,0,0.05)] z-20"></div>
        </div>

        {/* Mobile Perforation (Horizontal) */}
        <div className="relative md:hidden w-full px-4 flex items-center justify-between overflow-hidden">
          <div className="w-6 h-6 bg-gray-100 rounded-full -ml-3 shadow-inner"></div>
          <div className="flex-1 border-t-2 border-dashed border-gray-300"></div>
          <div className="w-6 h-6 bg-gray-100 rounded-full -mr-3 shadow-inner"></div>
        </div>

        {/* Right Side: Decorative */}
        <div className="md:w-1/3 bg-linear-to-br from-[#61616141] to-[#111] p-10 flex flex-col items-center justify-center relative">
          {/* Minimalist Map Graphic */}
          <div className="absolute inset-0 overflow-hidden opacity-30">
            <svg className="w-full h-full text-white" fill="none" viewBox="0 0 400 600">
              <path
                d="M50 50 C 100 100, 200 50, 250 150 S 100 300, 150 400"
                stroke="currentColor"
                strokeWidth="2"
                strokeDasharray="10 10"
                className="animate-pulse"
              />
              <circle
                cx="150"
                cy="400"
                r="4"
                fill="currentColor"
                className="text-red-400"
              />
              <circle cx="50" cy="50" r="4" fill="currentColor" className="text-white" />
            </svg>
          </div>

          <div className="relative z-10 text-center space-y-6">
            <div className="w-20 h-20 mx-auto bg-white/5 rounded-full flex items-center justify-center backdrop-blur-xs shadow-[0_1px_30px_rgba(0,0,0,0.2),inset_0_1px_rgba(255,255,255,0.3),inset_0_-1px_rgba(255,255,255,0.3)]">
              <MapPin className="text-white" size={32} />
            </div>

            <div className="space-y-1">
              <p className="text-xs font-bold text-gray-200 uppercase tracking-widest">
                Destination
              </p>
              <p className="text-xl font-bold text-gray-900 cinzel">Anywhere</p>
            </div>

            <div className="w-full h-px bg-linear-to-r from-transparent via-gray-300 to-transparent"></div>

            <div className="flex justify-center gap-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} size={16} fill="#FCA5A5" className="text-yellow-600" />
              ))}
            </div>
            <p className="text-xs text-gray-200 font-medium">5-Star Experience</p>
          </div>

          {/* Barcode Strip (Decorative) */}
          <div className="mt-8 w-full flex justify-center opacity-40">
            <div className="h-12 w-3/4 flex gap-1 justify-center">
              {[...Array(20)].map((_, i) => (
                <div
                  key={i}
                  className={`h-full bg-gray-100 ${i % 2 === 0 ? "w-1" : "w-0.5"}`}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
