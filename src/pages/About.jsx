/* eslint-disable no-unused-vars */
import { useEffect } from "react";
import { Link } from "react-router-dom";
import GlassButton from "../components/GlassButton";
import {
  Shield,
  Star,
  Car,
  Timer,
  MousePointerClick,
  MapPin,
  Globe,
  Clock,
} from "lucide-react";
import Heading from "../components/Heading";
import Cta from "../components/Cta";

export default function About() {
  useEffect(() => {
    document.title = "Redinn Tours & Travels | About us";
  }, []);

  const fleets = [
    {
      img: "/images/urbania-fleet.webp",
      title: "Urbania Royale",
      seater: "Luxury Class • 17 Seater",
      features: [
        "Premium Leather Seating",
        "LED Ambience Lighting",
        "Air-Suspension Comfort",
      ],
    },
    {
      img: "/images/urbania-fleet.webp",
      title: "Urbania VIP",
      seater: "Luxury Class • 17 Seater",
      features: [
        "Premium Leather Seating",
        "LED Ambience Lighting",
        "Air-Suspension Comfort",
      ],
    },
    {
      img: "/images/urbania-fleet.webp",
      title: "Urbania 3",
      seater: "Luxury Class • 17 Seater",
      features: [
        "Premium Leather Seating",
        "LED Ambience Lighting",
        "Air-Suspension Comfort",
      ],
    },
    {
      img: "/images/urbania-fleet.webp",
      title: "Urbania 4",
      seater: "Luxury Class • 17 Seater",
      features: [
        "Premium Leather Seating",
        "LED Ambience Lighting",
        "Air-Suspension Comfort",
      ],
    },
    {
      img: "/images/urbania-fleet.webp",
      title: "Urbania 5",
      seater: "Luxury Class • 17 Seater",
      features: [
        "Premium Leather Seating",
        "LED Ambience Lighting",
        "Air-Suspension Comfort",
      ],
    },
  ];

  const differences = [
    {
      svg: <Shield size={30} className="text-red-600" />,
      title: "Skilled Travel Drivers",
      content:
        "Professional, polite, and experienced drivers who ensure a smooth and safe journey from start to finish.",
    },
    {
      svg: <Car size={30} className="text-red-600" />,
      title: "Well-Maintained Vehicles",
      content:
        "Every vehicle is cleaned, sanitized, and serviced regularly to deliver a spotless, comfortable travel experience.",
    },
    {
      svg: <Timer size={30} className="text-red-600" />,
      title: "On-Time Reliability",
      content:
        "We value your time. We arrive as promised, ensuring timely pickups and smooth, delay-free travel.",
    },
    {
      svg: <MousePointerClick size={30} className="text-red-600" />,
      title: "Seamless Booking",
      content:
        "Simple, fast, and transparent booking with clear communication from your first inquiry to your final stop.",
    },
  ];

  const whyChoose = [
    {
      svg: (
        <svg
          className="w-9 h-9 text-[#C9A35C] drop-shadow-[0_0_8px_rgba(201,163,92,0.6)]"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
          />
        </svg>
      ),
      title: "Premium Luxury Experience",
      content:
        "Experience our luxurious fleet, crafted for your comfort and sophistication.",
    },
    {
      svg: (
        <svg
          className="w-9 h-9 text-[#C9A35C] drop-shadow-[0_0_8px_rgba(201,163,92,0.6)]"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
          />
        </svg>
      ),
      title: "Skilled chauffeurs",
      content:
        "Our verified, elite chauffeurs guarantee a discreet, safe, and impeccably smooth journey..",
    },
    {
      svg: (
        <svg
          className="w-9 h-9 text-[#C9A35C] drop-shadow-[0_0_8px_rgba(201,163,92,0.6)]"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      title: "On-Time and Reliable",
      content:
        "Punctuality is our signature. We value your time with prompt arrivals and seamless execution.",
    },
  ];

  const coverage = [
    {
      svg: <MapPin size={32} strokeWidth={1.5} />,
      title: "600+",
      content: "Destinations",
    },
    {
      svg: <Clock size={32} strokeWidth={1.5} />,
      title: "24/7",
      content: "Service",
    },
    {
      svg: <Globe size={32} strokeWidth={1.5} />,
      title: "100%",
      content: "Nationwide Reach",
    },
  ];

  return (
    <div className="">
      {/* hero section */}
      <div className="relative w-full h-screen overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            loading="lazy"
            src="/images/about-hero.webp"
            alt="Luxury Travel"
            className="w-full h-full object-cover"
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        {/* Content Container */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <h1 className="text-3xl md:text-4xl text-white drop-shadow-lg basker font-semibold">
            <span className="text-red-500">Reddin Tours & Travels</span> - Redefining
            Luxury Travel in India
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-200 max-w-3xl font-light tracking-wide">
            Premium vans crafted for comfort, elegance, and hospitality.
          </p>

          <GlassButton
            text1="Experience Luxury"
            // text2="Experience Luxury"
            glass={true}
            // bg="bg-amber-500"
            link="/contact"
            className="mt-10 shadow-2xl"
          />
        </div>
      </div>

      {/* Who We Are Section - Redesigned */}
      <section className="relative w-full py-24 overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="text-left z-10 order-2 lg:order-1">
              <h2
                data-aos="fade-up"
                className="text-5xl md:text-6xl basker text-red-600/90 font-semibold tracking-tight mb-8 basker drop-shadow-lg"
              >
                Who We Are
              </h2>
              <div
                data-aos="fade-up"
                className="w-44 h-1 bg-linear-to-r from-red-500 to-transparent mb-10 opacity-80"
              ></div>

              <p
                data-aos="fade-up"
                className="text-lg font-light leading-relaxed mb-12 max-w-lg"
              >
                <strong className="text-red-500 font-semibold">
                  Reddin Tours & Travels
                </strong>{" "}
                is the embodiment of premium mobility. We don't just transport; we curate
                journeys defined by privacy, elegance, and cinematic comfort across India.
              </p>

              <div className="space-y-10">
                {/* Highlight 1 */}
                <div data-aos="fade-up">
                  <div className="flex items-start gap-5 shadow-[4px_4px_10px_#8d8d8d,-4px_-4px_10px_#ffffff] p-3 rounded-2xl group">
                    <div className="p-3 rounded-xl text-red-500 shadow-[4px_4px_10px_#8d8d8d,-4px_-4px_10px_#ffffff] transition-all duration-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.2}
                        stroke="currentColor"
                        className="w-7 h-7"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9.813 15.904 9 19h4.253l-.813-3.096m-4.253 0c-.966-.546-1.272-1.928-.75-2.923l2.876-5.592a1.146 1.146 0 0 1 2.155 0l2.875 5.592c.523.995.217 2.378-.75 2.923m-6.353 0h6.353M12 2.25a9.75 9.75 0 0 1 9.75 9.75v.516c0 .783-.625 1.487-1.406 1.41a9.75 9.75 0 0 0-1.036-.086c-1.002 0-1.875.75-1.875 1.76v1.385c0 .324.253.587.575.602.836.038 1.636.326 2.298.814l.2.146c.362.264.445.765.181 1.128A9.75 9.75 0 0 1 12 21.75c-5.385 0-9.75-4.365-9.75-9.75 0-3.69 2.067-6.9 5.093-8.541"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="md:text-xl text-lg text-red-500 font-medium mb-1 basker tracking-wide">
                        Cinematic Comfort
                      </h3>
                      <p className="text-sm text-black/90 font-light tracking-wide">
                        Bespoke interiors designed for silence and serenity.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Highlight 2 */}
                <div
                  data-aos="fade-up"
                  className="flex items-start p-3 rounded-2xl shadow-[3px_3px_10px_#8d8d8d,-3px_-3px_10px_#ffffff] gap-5 group"
                >
                  <div className="p-3 rounded-xl text-red-500 shadow-[3px_3px_10px_#8d8d8d,-3px_-3px_10px_#ffffff] transition-all duration-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.2}
                      stroke="currentColor"
                      className="w-7 h-7"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="md:text-xl text-lg text-red-500 font-medium mb-1 basker tracking-wide">
                      Safety & Privacy
                    </h3>
                    <p className="text-sm text-black/90 font-light tracking-wide">
                      Discreet service with top-tier safety standards.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Abstract Visual */}
            <div
              data-aos="fade-left"
              className="relative h-[500px] w-full bg-linear-to-br from-zinc-900 via-zinc-800 to-black rounded-[40px] border border-white/5 overflow-hidden shadow-2xl order-1 lg:order-2 group"
            >
              <div className="absolute inset-0 flex items-center justify-center p-10">
                <div className="relative w-full h-full flex flex-col items-center justify-center">
                  {/* 2 floating cards */}
                  <div className="absolute top-12 -left-2 md:left-8 right-8 w-3/4 h-2/3 bg-[url('/images/corporate-tour.webp')] bg-cover bg-center rounded-3xl shadow-2xl transform rotate-3 transition-transform duration-1000 group-hover:rotate-6"></div>
                  <div className="absolute bottom-12 md:left-34 left-22 w-2/3 h-1/2 bg-[url('/images/interior-ambience.webp')] bg-cover bg-center rounded-3xl shadow-2xl transform -rotate-2 z-10 transition-transform duration-1000 group-hover:-rotate-3"></div>

                  {/* Floating Badge */}
                  <div className="absolute bottom-8 right-8 flex items-center gap-3 bg-black/60 backdrop-blur-xl px-5 py-3 rounded-full border border-white/10 shadow-xl z-20 transition-all duration-300 hover:bg-black/80 hover:scale-105 cursor-default">
                    <div className="w-2 h-2 rounded-full bg-amber-400 animate-pulse shadow-[0_0_10px_rgba(251,191,36,0.8)]"></div>
                    <span className="text-[10px] text-amber-100 tracking-[0.2em] uppercase font-semibold">
                      Premium Urbania
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      {/* <section className="relative w-full py-24 px-6 overflow-hidden">
        <div className="container mx-auto max-w-6xl relative z-10">
          <Heading title="Our Vision & Mission" />

          <div className="flex flex-col md:flex-row gap-8 lg:gap-12 justify-center items-stretch">
            <div className="flex-1 p-10 lg:p-12 rounded-3xl hover:scale-103 bg-white/70 shadow-lg transition-all duration-500 flex flex-col justify-center text-center items-center group relative overflow-hidden">
              <div className="absolute inset-0 bg-linear-to-br from-white/40 to-transparent opacity-50 pointer-events-none"></div>
              <h3 className="text-3xl md:text-4xl font-medium mb-6 tracking-wide text-transparent bg-clip-text bg-linear-to-r from-yellow-500 to-yellow-600 drop-shadow-sm relative z-10">
                Our Vision
              </h3>
              <p className="text-[#111111] leading-relaxed text-lg md:text-xl font-light tracking-wide max-w-md relative z-10">
                To redefine premium travel by delivering unmatched luxury, comfort, and
                safety in every journey.
              </p>
            </div>

            <div className="flex-1 p-10 lg:p-12 rounded-3xl hover:scale-103 bg-white/70 shadow-lg transition-all duration-500 hover:shadow-[0_0_40px_rgba(201,163,92,0.25)] flex flex-col justify-center text-center items-center group relative overflow-hidden">
              <div className="absolute inset-0 bg-linear-to-br from-white/40 to-transparent opacity-50 pointer-events-none"></div>
              <h3 className="text-3xl md:text-4xl font-medium mb-6 tracking-wide text-transparent bg-clip-text bg-linear-to-r from-yellow-500 to-yellow-600 drop-shadow-sm relative z-10">
                Our Mission
              </h3>
              <p className="text-[#111111] leading-relaxed text-lg md:text-xl font-light tracking-wide max-w-md relative z-10">
                Our mission is to offer luxury travel with top-quality service, premium
                comfort, and warm hospitality on every trip.
              </p>
            </div>
          </div>
        </div>
      </section> */}

      {/* Premium Fleet */}
      <section className="relative bg-[#dedede] w-full py-18 overflow-hidden">
        <div className="px-4 lg:px-12 relative z-10">
          <div data-aos="fade-up">
            <Heading title="Our Premium Fleet" className="mb-3!" />
          </div>
          <p
            data-aos="fade-up"
            className="text-gray-700 font-light tracking-wide text-lg mb-10 text-center"
          >
            Choose the perfect chariot for your journey.
          </p>

          {/* new fleet card */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            {/* new online courses */}
            {fleets.map((fleet, i) => (
              <div
                key={fleet.title}
                data-aos="fade-up"
                className="rounded-2xl h-fit shadow-[3px_3px_10px_#8d8d8d,-3px_-3px_10px_#ffffff] m-4"
              >
                <div className="rounded-xl shadow-[inset_5px_5px_10px_#8d8d8d,inset_-5px_-5px_10px_#ffffff] m-2 flex align-bottom overflow-hidden">
                  <img
                    loading="lazy"
                    src={fleet.img}
                    alt="Luxury van"
                    className="rounded-xl w-full h-50 object-cover object-center hover:scale-104 transition-all duration-200"
                  />
                </div>
                <div className="p-5 w-full">
                  <h2 className="font-semibold text-2xl text-red-700">{fleet.title}</h2>
                  <p className="ml-3 text-sm text-gray-700">{fleet.seater}</p>
                  <ul className="space-y-1 my-2">
                    {fleet.features.map((feature, i) => (
                      <li key={i}>
                        <Star
                          className="inline pb-1"
                          color="#FFD700"
                          fill="#FFD700"
                          size={18}
                        />{" "}
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* <GlassButton
                    text1="Book this fleet"
                    text2="Experience Luxury"
                    // glass={true}
                    textColor="text-white"
                    bg="bg-black"
                    link="/contact"
                    className="mt-10 hover:shadow-[0_0_30px_-5px_rgba(255,2,2,0.9)] transition-shadow duration-300 w-full block text-center"
                  /> */}
                  <Link to="/contact">
                    <button className="mt-10 rounded-2xl px-8 py-3 bg-black text-white cursor-pointer hover:scale-102 transition-all duration-300 hover:shadow-[0_0_30px_-5px_rgba(255,2,2,0.9)] w-full block text-center">
                      Experience luxury
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="relative w-full py-24 px-6 overflow-hidden bg-[url('/images/luxury-bg-red.webp')] bg-center bg-cover">
        <div className="absolute inset-0 bg-linear-to-br from-black/90 via-black/60 to-transparent z-0"></div>
        <div className="container mx-auto relative z-10 max-w-7xl">
          {/* <div data-aos="fade-up">
            <Heading title="Why Choose Us" className="text-white!" />
          </div> */}
          <h2
            data-aos="fade-up"
            className="text-4xl md:text-5xl text-center lg:text-6xl basker text-white mb-15 drop-shadow-2xl"
          >
            Why{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-gray-200 to-gray-500">
              Choose Us
            </span>
          </h2>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
            {whyChoose.map((c, i) => (
              <div
                // data-aos="fade-up"
                key={i}
              >
                <div className="group shadow-[0_1px_30px_rgba(0,0,0,0.2),inset_0_1px_rgba(255,255,255,0.3),inset_0_-1px_rgba(255,255,255,0.3)] relative p-8 md:p-10 rounded-3xl bg-[linear-gradient(145deg,rgba(255,255,255,0.03)_0%,rgba(255,255,255,0.005)_100%)] backdrop-blur-sm transition-all duration-500 hover:-translate-y-3 flex flex-col items-center text-center">
                  <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none shadow-[0_0_50px_rgba(201,163,92,0.15),inset_0_0_20px_rgba(201,163,92,0.05)]"></div>

                  <div className="w-20 h-20 mb-8 rounded-full flex items-center justify-center border border-transparent bg-white/5 group-hover:border-[#C9A35C]/50 transition-all duration-500 shadow-[0_1px_30px_rgba(0,0,0,0.2),inset_0_1px_rgba(255,255,255,0.3),inset_0_-1px_rgba(255,255,255,0.3)]">
                    {c.svg}
                  </div>

                  <h3 className="text-xl text-white font-medium mb-4 tracking-wide font-sans">
                    {c.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed font-light tracking-wide font-sans">
                    {c.content}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="relative w-full py-24 px-3 overflow-hidden">
        <div className="px-6 lg:px-12 relative z-10">
          <div data-aos="fade-up">
            <Heading title="What Makes Us Different" className="mb-2!" />
          </div>
          <p
            data-aos="fade-up"
            className="text-lg text-center mb-10 text-[#444] font-light max-w-2xl mx-auto"
          >
            Setting the benchmark for luxury travel with standards that exceed
            expectations.
          </p>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-8 place-items-center h-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {differences.map((d, i) => (
                <div data-aos="fade-right" key={i}>
                  <div className="p-8 rounded-3xl backdrop-blur-md shadow-[5px_5px_10px_#8d8d8d,-5px_-5px_10px_#ffffff] transition-all duration-300 flex flex-col items-start hover:-translate-y-1 group">
                    <div className="mb-3 p-3 rounded-full shadow-[5px_5px_10px_#8d8d8d,-5px_-5px_10px_#ffffff]">
                      {d.svg}
                    </div>
                    <h3 className="text-xl font-bold text-[#111] mb-3">{d.title}</h3>
                    <p className="text-[#333] text-sm leading-relaxed">{d.content}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="order-1 lg:order-2" data-aos="fade-left">
              <img
                loading="lazy"
                src="/images/different-3.webp"
                alt="no.1 luxury tours and travels in TamilNadu"
                className="h-70 rounded-3xl sm:h-90 md:h-[420px] lg:h-[520px] w-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Coverage Across India */}
      <section className="relative w-full py-24 bg-[url('/images/luxury-bg-red.webp')] bg-cover bg-center overflow-hidden border-t border-white/5">
        {/* Floating Glowing Markers */}
        <div className="absolute inset-0 pointer-events-none">
          {/* North */}
          <div className="absolute top-[20%] left-[45%] md:left-[48%] animate-pulse">
            <div className="w-2 h-2 bg-amber-400 rounded-full shadow-[0_0_15px_rgba(251,191,36,0.8)]"></div>
          </div>
          {/* West */}
          <div className="absolute top-[50%] left-[20%] md:left-[40%] animate-pulse delay-700">
            <div className="w-2 h-2 bg-amber-400 rounded-full shadow-[0_0_15px_rgba(251,191,36,0.8)]"></div>
          </div>
          {/* South */}
          <div className="absolute top-[80%] left-[40%] md:left-[46%] animate-pulse delay-300">
            <div className="w-2 h-2 bg-amber-400 rounded-full shadow-[0_0_15px_rgba(251,191,36,0.8)]"></div>
          </div>
          {/* East */}
          <div className="absolute top-[45%] left-[70%] md:left-[55%] animate-pulse delay-500">
            <div className="w-2 h-2 bg-amber-400 rounded-full shadow-[0_0_15px_rgba(251,191,36,0.8)]"></div>
          </div>
          {/* Central */}
          <div className="absolute top-[55%] left-[50%] md:left-[48%] animate-pulse delay-200">
            <div className="w-3 h-3 bg-white rounded-full shadow-[0_0_20px_rgba(255,255,255,0.8)]"></div>
          </div>
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-linear-to-br from-black/90 via-black/60 to-transparent z-0"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            {/* Tagline */}
            <div className="mb-4 flex items-center gap-2 px-4 py-1.5 rounded-full border border-amber-500/30 bg-amber-900/10 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
              <span className="text-amber-400 text-xs font-medium tracking-widest uppercase">
                Pan-India Presence
              </span>
            </div>

            <h2
              data-aos="fade-up"
              className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-6 drop-shadow-2xl"
            >
              Coverage Across{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-gray-200 to-gray-600">
                India
              </span>
            </h2>

            <p
              data-aos="fade-up"
              className="text-lg md:text-xl text-gray-300 font-light tracking-wide mb-12 max-w-2xl leading-relaxed"
            >
              Serving customers across every state with reliable,{" "}
              <strong className="text-red-400 font-normal">
                premium travel solutions
              </strong>
              . From the mountains to the coast, we are where you need us.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
              {coverage.map((c, i) => (
                <div
                  key={i}
                  className="p-6 hover:-translate-y-2 rounded-2xl bg-white/2 backdrop-blur-sm shadow-[0_1px_30px_rgba(0,0,0,0.2),inset_0_1px_rgba(255,255,255,0.3),inset_0_-1px_rgba(255,255,255,0.3)] transition-all duration-300 group"
                >
                  <div className="flex items-center justify-center mb-4 text-amber-500 group-hover:scale-110 transition-transform duration-300">
                    {c.svg}
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-1">{c.title}</h3>
                  <p className="text-gray-400 text-sm tracking-wider uppercase">
                    {c.content}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Service Philosophy Section */}
      {/* <section
        id="service-philosophy"
        aria-label="Service Philosophy"
        className="w-full py-24 px-6 relative"
      >
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif text-slate-900 mb-4 drop-shadow-sm">
              Our Service Philosophy
            </h2>
            <p className="text-lg text-slate-600 font-light tracking-wide max-w-2xl mx-auto">
              Comfort, safety and courtesy —{" "}
              <span className="text-red-600 font-medium">every mile, every time.</span>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="p-8 rounded-3xl bg-white/80 border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.1)] hover:-translate-y-1 transition-all duration-300 backdrop-blur-sm">
              <div className="w-14 h-14 rounded-2xl bg-red-50 flex items-center justify-center mb-6 text-red-600">
                <Star size={28} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                Professionalism
              </h3>
              <p className="text-slate-600 font-light leading-relaxed">
                Trained chauffeurs, on-time performance, and professional conduct on every
                trip.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-white/80 border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.1)] hover:-translate-y-1 transition-all duration-300 backdrop-blur-sm">
              <div className="w-14 h-14 rounded-2xl bg-red-50 flex items-center justify-center mb-6 text-red-600">
                <Shield size={28} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                Safety & Reliability
              </h3>
              <p className="text-slate-600 font-light leading-relaxed">
                Rigorous vehicle checks, hygiene protocols, and transparent timing so you
                travel worry-free.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-white/80 border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.1)] hover:-translate-y-1 transition-all duration-300 backdrop-blur-sm">
              <div className="w-14 h-14 rounded-2xl bg-red-50 flex items-center justify-center mb-6 text-red-600">
                <Car size={28} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                Personalized Comfort
              </h3>
              <p className="text-slate-600 font-light leading-relaxed">
                Tailored interiors, climate control, and thoughtful extras to suit
                families, corporates, and events.
              </p>
            </div>
          </div>

          <div className="text-center max-w-2xl mx-auto">
            <p className="text-lg text-slate-700 font-light mb-8 leading-relaxed">
              We design every ride to feel effortless — from booking to drop-off.
            </p>
            <Link
              to="/contact"
              aria-label="Learn more about Reddin service standards"
              className="inline-flex items-center gap-2 text-red-600 hover:text-red-700 font-medium tracking-wide border-b border-red-200 hover:border-red-600 pb-0.5 transition-all duration-200 group"
            >
              Learn more about our service standards
              <MousePointerClick
                size={16}
                className="group-hover:translate-x-0.5 transition-transform"
              />
            </Link>
          </div>
        </div>
      </section> */}

      {/* cta */}
      <Cta />
    </div>
  );
}
