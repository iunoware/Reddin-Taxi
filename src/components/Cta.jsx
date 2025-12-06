import React from "react";
import { MapPin, Calendar, ArrowRight } from "lucide-react";

export default function Cta() {
    return (
        <div className="fixed bottom-0 md:bottom-8 left-0 right-0 z-50 px-4 md:px-8 pointer-events-none">
            <div className="pointer-events-auto max-w-7xl mx-auto bg-[#0a0a0a]/90 backdrop-blur-xl border border-white/10 rounded-t-2xl md:rounded-2xl shadow-[0_-10px_40px_-5px_rgba(0,0,0,0.5)] overflow-hidden">

                {/* Subtle top highlight */}
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-yellow-500/50 to-transparent"></div>

                <div className="flex flex-col lg:flex-row items-center justify-between p-6 gap-6 md:gap-8">

                    {/* Left: Text Content */}
                    <div className="text-center lg:text-left shrink-0">
                        <h3 className="text-xl md:text-2xl font-serif text-white mb-1 tracking-wide">
                            Ready to Book Your <span className="text-yellow-500 italic">Luxury Journey?</span>
                        </h3>
                        <p className="text-sm text-gray-400 font-light">
                            Experience comfort, style, and premium service.
                        </p>
                    </div>

                    {/* Middle: Inputs */}
                    <div className="flex flex-col md:flex-row gap-3 w-full lg:max-w-3xl bg-white/5 p-2 rounded-xl border border-white/5">
                        {/* Pickup */}
                        <div className="flex items-center gap-3 bg-[#0f0f0f] border border-white/10 rounded-lg px-4 py-3 flex-1 focus-within:border-yellow-500/50 transition-colors">
                            <MapPin className="w-4 h-4 text-yellow-500 shrink-0" />
                            <input
                                type="text"
                                placeholder="Pickup Location"
                                className="bg-transparent border-none outline-none text-sm text-white placeholder-gray-500 w-full"
                            />
                        </div>

                        {/* Drop-off */}
                        <div className="flex items-center gap-3 bg-[#0f0f0f] border border-white/10 rounded-lg px-4 py-3 flex-1 focus-within:border-yellow-500/50 transition-colors">
                            <MapPin className="w-4 h-4 text-zinc-600 shrink-0" />
                            <input
                                type="text"
                                placeholder="Drop-off Destination"
                                className="bg-transparent border-none outline-none text-sm text-white placeholder-gray-500 w-full"
                            />
                        </div>

                        {/* Date Start */}
                        <div className="flex items-center gap-3 bg-[#0f0f0f] border border-white/10 rounded-lg px-4 py-3 flex-1 md:max-w-[180px] focus-within:border-yellow-500/50 transition-colors">
                            <Calendar className="w-4 h-4 text-gray-400 shrink-0" />
                            <input
                                type="text"
                                placeholder="Date"
                                className="bg-transparent border-none outline-none text-sm text-white placeholder-gray-500 w-full"
                                onFocus={(e) => e.target.type = 'date'}
                                onBlur={(e) => e.target.type = 'text'}
                            />
                        </div>
                    </div>

                    {/* Right: Button */}
                    <button className="w-full lg:w-auto shrink-0 bg-gradient-to-r from-yellow-600 to-yellow-500 hover:from-yellow-500 hover:to-yellow-400 text-black font-semibold py-4 px-8 rounded-xl shadow-[0_0_20px_-5px_rgba(234,179,8,0.4)] hover:shadow-[0_0_30px_-5px_rgba(234,179,8,0.6)] transition-all flex items-center justify-center gap-2 group">
                        <span>Book Now</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>

                </div>
            </div>
        </div>
    );
}
