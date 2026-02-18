import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star, ArrowRight } from "lucide-react";

const slides = [
  {
    id: 1,
    image: "/images/interior-seat.webp",
    title: "Ultra-Comfort Seating",
    description:
      "Plush reclining leather captain seats with diamond-stitched patterns and ambient lighting.",
  },
  {
    id: 2,
    image: "/images/interior-design.webp",
    title: "Modern Interior Design",
    description:
      "Sleek wood-finish panels and minimalistic ceiling design for a premium feel.",
  },
  {
    id: 3,
    image: "/images/laser-interior.webp",
    title: "Cinematic Ambience",
    description: "Soft LED mood lighting and warm golden glows for a relaxing journey.",
  },
  {
    id: 4,
    image: "/images/as-2.webp",
    title: "Spacious VIP Cabin",
    description:
      "Ample legroom, premium flooring, and built-in storage in a spacious luxury environment.",
  },
];

export default function ExpCarousel() {
  const [current, setCurrent] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrent((prev) => (prev + 1) % slides.length);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    setIsAutoPlaying(false);
  };

  return (
    <section className="relative py-20 bg-[#0F0F0F] overflow-hidden">
      {/* Cinematic Background Glow */}
      <div className="absolute inset-0 bg-radial-[circle_at_center_#2a2a2a_0%,#0F0F0F_70%] opacity-40 pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-12 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-yellow-500 tracking-[0.2em] text-sm font-semibold uppercase mb-2">
            Experience Excellence
          </p>
          <h2
            data-aos="fade-down"
            className="text-3xl md:text-5xl cinzel text-white tracking-tight"
          >
            Interior <span className="italic text-gray-500">Experience</span>
          </h2>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-6xl mx-auto h-[600px] md:h-[700px] rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/5">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 w-full h-full transition-all duration-1000 ease-in-out transform ${
                index === current
                  ? "opacity-100 scale-100 z-10"
                  : "opacity-0 scale-105 z-0"
              }`}
            >
              {/* Image */}
              <div className="absolute inset-0">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
                {/* Vignette & Gradients */}
                <div className="absolute inset-0 bg-linear-to-t from-black via-black/20 to-transparent opacity-90"></div>
                <div className="absolute inset-0 bg-linear-to-r from-black/50 via-transparent to-black/50"></div>
              </div>

              {/* Content Overlay */}
              <div className="absolute bottom-0 left-0 w-full p-8 md:p-16 flex flex-col items-start justify-end h-full">
                <div
                  className={`transition-all duration-1000 delay-300 transform ${
                    index === current
                      ? "translate-y-0 opacity-100"
                      : "translate-y-10 opacity-0"
                  }`}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-px w-12 bg-yellow-500"></div>
                    <span className="text-yellow-400 text-sm tracking-widest uppercase font-medium">
                      0{index + 1} / 0{slides.length}
                    </span>
                  </div>
                  <h3 className="text-4xl md:text-6xl font-serif text-white mb-4 leading-none">
                    {slide.title}
                  </h3>
                  <p className="text-gray-300 text-lg max-w-xl font-light leading-relaxed mb-8">
                    {slide.description}
                  </p>

                  {/* Interactive Button-like element */}
                  <button className="group relative overflow-hidden rounded-full py-3 px-8 bg-transparent border border-white/20 text-white transition-all hover:bg-white/10 hover:border-white/40 hover:scale-105 active:scale-95 flex items-center gap-2">
                    <span className="relative z-10 font-medium">Explore Details</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}

          {/* Navigation Buttons */}
          <div className="absolute bottom-8 right-8 md:bottom-16 md:right-16 z-20 flex gap-4">
            <button
              onClick={prevSlide}
              className="w-12 h-12 rounded-full border border-white/10 bg-black/30 backdrop-blur-md flex items-center justify-center text-white hover:bg-white hover:text-black hover:scale-110 transition-all duration-300 group"
              aria-label="Previous Slide"
            >
              <ChevronLeft className="w-6 h-6 group-hover:-translate-x-0.5 transition-transform" />
            </button>
            <button
              onClick={nextSlide}
              className="w-12 h-12 rounded-full border border-white/10 bg-black/30 backdrop-blur-md flex items-center justify-center text-white hover:bg-white hover:text-black hover:scale-110 transition-all duration-300 group"
              aria-label="Next Slide"
            >
              <ChevronRight className="w-6 h-6 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>

          {/* Progress Bar */}
          <div className="absolute bottom-0 left-0 w-full h-1 bg-white/10 z-20">
            <div
              className="h-full bg-yellow-500 transition-all duration-500 ease-out"
              style={{ width: `${((current + 1) / slides.length) * 100}%` }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
}
