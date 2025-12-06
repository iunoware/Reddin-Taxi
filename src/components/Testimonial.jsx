import React from "react";
import { Star, Quote } from "lucide-react";

const testimonials = [
    {
        id: 1,
        name: "Sarah Jenkins",
        role: "CEO, TechFlow",
        text: "The absolute pinnacle of travel. Every detail was curated to perfection.",
        rating: 5,
        position: "top-10 left-[5%] md:top-20 md:left-[10%] z-10",
        delay: "0s",
        size: "small",
    },
    {
        id: 2,
        name: "James H. Sterlington",
        role: "Global Investor",
        text: "Reddin Travels redefined luxury for us. The attention to detail was simply world-class.",
        rating: 5,
        position: "top-[40%] left-[50%] -translate-x-1/2 -translate-y-1/2 z-20",
        delay: "1s",
        size: "featured",
    },
    {
        id: 3,
        name: "Marcus Aurelius",
        role: "Director",
        text: "Impeccable timing and unmatched comfort. A truly royal experience.",
        rating: 5,
        position: "bottom-20 right-[5%] md:bottom-24 md:right-[15%] z-10",
        delay: "2s",
        size: "small",
    },
    {
        id: 4,
        name: "Elena V.",
        role: "Fashion Designer",
        text: "The ambience provided the perfect creative luxury space I needed.",
        rating: 5,
        position: "top-20 right-[5%] md:top-32 md:right-[20%] z-10",
        delay: "3s",
        size: "small",
    },
    {
        id: 5,
        name: "Robert Fox",
        role: "Executive",
        text: "Professionalism at its finest. Highly recommended for VIP transport.",
        rating: 5,
        position: "bottom-10 left-[5%] md:bottom-32 md:left-[20%] z-10",
        delay: "1.5s",
        size: "small",
    },
];

export default function Testimonial() {
    return (
        <section className="relative w-full min-h-[800px] overflow-hidden bg-gradient-to-br from-[#050505] via-[#0a0a0a] to-[#121212] flex items-center justify-center py-20">

            {/* Background Layer - Subtle Image & Gradient */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/images/interior-ambience.png"
                    alt="Luxury Background"
                    className="w-full h-full object-cover opacity-[0.07] blur-sm scale-110"
                />
                <div className="absolute inset-0 bg-radial-[circle_at_center,_var(--tw-gradient-stops)] from-transparent via-[#050505]/80 to-[#050505]"></div>
            </div>

            {/* Floating Gold Particles (Decorative) */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
                {[...Array(8)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute rounded-full bg-yellow-500/30 blur-[1px] animate-pulse"
                        style={{
                            width: Math.random() * 4 + 2 + "px",
                            height: Math.random() * 4 + 2 + "px",
                            top: Math.random() * 100 + "%",
                            left: Math.random() * 100 + "%",
                            animationDuration: Math.random() * 3 + 2 + "s"
                        }}
                    />
                ))}
            </div>

            {/* Testimonials Container */}
            <div className="relative w-full max-w-7xl h-[800px] md:h-[600px] mx-auto px-4">

                {/* Header (Optional, subtle) */}
                <div className="absolute top-0 left-0 w-full text-center z-30 md:hidden">
                    <p className="text-yellow-500 uppercase tracking-widest text-xs mb-2">Client Stories</p>
                    <h2 className="text-2xl text-white font-serif">Voices of Luxury</h2>
                </div>

                {testimonials.map((item) => (
                    <div
                        key={item.id}
                        className={`absolute transition-all duration-700 hover:z-50 hover:scale-105 cursor-default
              ${item.position}
              ${item.size === 'featured'
                                ? 'w-[90%] md:w-[600px] p-8 md:p-12 bg-white/5 border-yellow-500/30 shadow-[0_0_60px_-10px_rgba(234,179,8,0.15)]'
                                : 'w-[280px] md:w-[320px] p-6 bg-white/5 border-white/10 shadow-lg backdrop-blur-sm hidden md:block'}
              rounded-2xl backdrop-blur-xl border flex flex-col gap-4 group
            `}
                        style={{
                            animation: `float 6s ease-in-out infinite`,
                            animationDelay: item.delay
                        }}
                    >
                        {/* Refraction Gloss */}
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                        {/* Quote Icon */}
                        <div className="absolute -top-4 -left-2 bg-black/50 backdrop-blur-md rounded-full p-2 border border-white/10">
                            <Quote className={`w-4 h-4 ${item.size === 'featured' ? 'text-yellow-500' : 'text-gray-400'}`} />
                        </div>

                        {/* Text */}
                        <div>
                            {item.size === 'featured' && (
                                <div className="flex gap-1 mb-4">
                                    {[1, 2, 3, 4, 5].map((_, i) => (
                                        <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                                    ))}
                                </div>
                            )}
                            <p className={`${item.size === 'featured' ? 'text-xl md:text-3xl leading-relaxed' : 'text-sm text-gray-300'} text-white font-light font-sans`}>
                                "{item.text}"
                            </p>
                        </div>

                        {/* User Info */}
                        <div className="flex items-center gap-3 mt-auto">
                            <div className={`rounded-full bg-gradient-to-tr from-gray-700 to-black ${item.size === 'featured' ? 'w-12 h-12' : 'w-8 h-8'} flex items-center justify-center text-white font-serif border border-white/10`}>
                                {item.name.charAt(0)}
                            </div>
                            <div>
                                <h4 className={`${item.size === 'featured' ? 'text-lg text-white' : 'text-sm text-gray-200'} font-medium`}>
                                    {item.name}
                                </h4>
                                <p className={`${item.size === 'featured' ? 'text-sm text-yellow-500/80' : 'text-xs text-gray-500'}`}>
                                    {item.role}
                                </p>
                            </div>

                            {/* Rating for small cards */}
                            {item.size !== 'featured' && (
                                <div className="ml-auto flex gap-0.5">
                                    {[1, 2, 3, 4, 5].map((_, i) => (
                                        <Star key={i} className="w-3 h-3 text-yellow-500/70 fill-yellow-500/70" />
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                ))}

                {/* Mobile View: Stack non-featured cards neatly below */}
                <div className="md:hidden flex flex-col gap-4 mt-[350px] px-2 relative z-10">
                    {testimonials.filter(t => t.size !== 'featured').map((item) => (
                        <div key={item.id} className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-5">
                            <p className="text-gray-300 text-sm mb-3">"{item.text}"</p>
                            <div className="flex items-center gap-2">
                                <span className="text-white text-xs font-bold">{item.name}</span>
                                <span className="text-gray-500 text-xs">- {item.role}</span>
                            </div>
                        </div>
                    ))}
                </div>

            </div>

            {/* CSS for custom float animation */}
            <style>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
      `}</style>
        </section>
    );
}

