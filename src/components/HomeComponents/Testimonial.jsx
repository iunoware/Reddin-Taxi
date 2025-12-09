import React, { useState, useRef } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import GlassButton from "../GlassButton";

const testimonials = [
  {
    id: 1,
    name: "Rajesh Kannan .",
    role: "Travel Vloger",
    profile: "RK",
    // image:
    //   // "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1888&auto=format&fit=crop",
    quote:
      "Reddin made our 8‑hour trip feel like a business‑class ride. Pure comfort!",
    rating: 4,
  },
  {
    id: 2,
    name: "James D.",
    role: "Corporate Executive",
    profile: "JD",
    // image:
    //   "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop",
    quote:
      "Luxury, smooth travel, and a calm experience—Reddin never disappoints.",
    rating: 4.5,
  },
  {
    id: 3,
    name: "Sophia Rani L.",
    role: "Event Coordinator",
    profile: "SR",
    // image:
    //   "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop",
    quote:
      "The best family trip we’ve had. Spacious, Luxury, and totally relaxing.",
    rating: 4,
  },
  {
    id: 4,
    name: "Sophia L.",
    role: "Event Coordinator",
    profile: "SL",
    // image:
    //   "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop",
    quote:
      "On‑time, elegant, and super comfortable. Reddin set a new standard for us.",
    rating: 5,
  },
];

const Testimonial = () => {
  const [active, setActive] = useState(0);
  const containerRef = useRef(null);
  const cardRef = useRef(null);
  const textRef = useRef(null);

  const nextTestimonial = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useGSAP(() => {
    // Card Animation
    gsap.fromTo(
      cardRef.current,
      { opacity: 0.5, scale: 0.95, y: 30 },
      { opacity: 1, scale: 1, y: 0, duration: 0.3, ease: "power2.out" }
    );

    // Dynamic background particles
    const particles = document.querySelectorAll(".particle");
    particles.forEach((p, i) => {
      gsap.to(p, {
        y: "random(-30, 30)",
        x: "random(-30, 30)",
        duration: "random(5, 10)",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: i * 0.2,
      });
    });
  }, [active]); // Re-run animation on change

  // Auto-rotation
  React.useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 5000);

    return () => clearInterval(interval);
  }, [active]);

  return (
    <section
      ref={containerRef}
      className="relative w-full min-h-screen  text-black overflow-hidden items-center justify-center flex flex-col lg:flex-row font-sans"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        {/* <div className="absolute top-[-20%] left-[-10%] w-[50vw] h-[50vw] bg-red-600/10 rounded-full blur-[120px] pointer-events-none animate-pulse" /> */}
        {/* <div className="absolute bottom-[-20%] right-[-10%] w-[40vw] h-[40vw] bg-red-800/10 rounded-full blur-[100px] pointer-events-none" /> */}

        {/* Faint Golden Particles */}
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="particle absolute rounded-full bg-red-800"
            style={{
              width: Math.random() * 3 + 1 + "px",
              height: Math.random() * 3 + 1 + "px",
              top: Math.random() * 100 + "%",
              left: Math.random() * 100 + "%",
              opacity: Math.random() * 0.3 + 0.1,
              filter: "blur(0.5px)",
            }}
          />
        ))}
      </div>

      {/* Left Side: Testimonial Carousel */}
      <div className="relative z-10 w-full lg:w-1/2 h-[50vh] lg:h-full flex items-center justify-center p-8">
        {/* Navigation Buttons */}
        <button
          onClick={prevTestimonial}
          className="absolute left-4 lg:left-12 p-3 rounded-full border border-white/10 bg-black text-white/50 transition-all backdrop-blur-sm z-20 group"
        >
          <ChevronLeft
            size={24}
            className="group-hover:-translate-x-1 transition-transform"
          />
        </button>
        <button
          onClick={nextTestimonial}
          className="absolute right-4 lg:right-12 p-3 rounded-full border border-white/10 bg-black text-white/50 transition-all backdrop-blur-sm z-20 group"
        >
          <ChevronRight
            size={24}
            className="group-hover:translate-x-1 transition-transform"
          />
        </button>

        {/* Glass Card */}
        <div
          ref={cardRef}
          className="relative w-full max-w-lg bg-[#111]  border border-white/10 rounded-3xl p-10 lg:p-14 shadow-[0_0_50px_-10px_rgba(0,0,0,0.5)] overflow-hidden group"
        >
          {/* Glow Effect on Card Hover */}
          {/* <div className="absolute -inset-1 bg-linear-to-r from-red-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-2xl" /> */}

          <div className="relative z-10 flex flex-col items-center text-center">
            {/* Quote Icon */}
            <div className="mb-6 bg-clip-text text-white/10 ">
              <Quote size={40} className="fill-current" />
            </div>

            {/* Text */}
            <p className=" text-xl lg:text-2xl leading-relaxed text-gray-200 mb-8 italic tracking-wide">
              "{testimonials[active].quote}"
            </p>

            {/* Stars */}
            <div className="flex gap-1 mb-6 text-yellow-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} fill="currentColor" strokeWidth={0} />
              ))}
            </div>

            {/* User Info */}
            <div className="flex items-center gap-4">
              <div className="relative">
                {/* <img
                  src={testimonials[active].image}
                  alt={testimonials[active].name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-yellow-500/30 shadow-lg"
                /> */}
                <div className="w-12 flex items-center justify-center h-12 rounded-full object-cover border-2 border-yellow-500/30 shadow-lg bg-white">
                  <p className="text-2xl font-bold ">
                    {testimonials[active].profile}
                  </p>
                </div>
                <div className="absolute inset-0 rounded-full ring-2 ring-yellow-500/20 ring-offset-2 ring-offset-black/0 animate-pulse-slow"></div>
              </div>
              <div className="text-left">
                <h4 className="text-lg font-bold text-white tracking-wide">
                  {testimonials[active].name}
                </h4>
                <p className="text-xs text-yellow-500/80 uppercase tracking-widest">
                  {testimonials[active].role}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side: Heading & Desc */}
      <div className="relative z-10 w-full lg:w-1/2 h-auto lg:h-full flex flex-col justify-center px-8 lg:px-20 text-center lg:text-left py-12 lg:py-0">
        <div ref={textRef} className="max-w-xl mx-auto lg:mx-0">
          <div className="flex items-center justify-center lg:justify-start gap-4 mb-4">
            <div className="h-px w-12 bg-linear-to-r from-red-600/30 to-red-400/60"></div>
            <span className="text-black uppercase tracking-[0.2em] text-sm font-medium">
              Testimonials
            </span>
          </div>

          <h2 className="text-4xl lg:text-6xl font-extrabold text-black mb-6 leading-tight font-[Audiowide] tracking-tight">
            What Our{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-red-400 via-red-500 to-red-700">
              Clients Say
            </span>
          </h2>

          <p className="text-black text-lg leading-relaxed mb-8 max-w-md mx-auto lg:mx-0">
            Hear from those who have experienced the pinnacle of luxury travel
            with Reddin. Your journey, redefined.
          </p>

          <GlassButton text1="View All Reviews" bg="bg-black" link="/contact" />
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
