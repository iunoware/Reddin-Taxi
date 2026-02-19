const images = [
  // 1
  {
    src: "/images/as-2.webp",
    alt: "Wide interior of our aesthetic cafe in Madurai",
    className: "md:col-span-8 md:row-span-2",
    aspect: "aspect-[16/10] md:aspect-auto md:h-full",
  },
  // 2
  {
    src: "/images/as-3.webp",
    alt: "Detail of seating area in the best ambience cafe in Madurai",
    className: "md:col-span-4 md:row-span-1",
    aspect: "aspect-square md:aspect-auto md:h-full",
  },
  // 3
  {
    src: "/images/laser-interior.webp",
    alt: "Atmospheric corner at the best cafe in Madurai",
    className: "md:col-span-4 md:row-span-1",
    aspect: "aspect-square md:aspect-auto md:h-full",
  },
  // 4
  {
    src: "/images/interior-design.webp",
    alt: "Minimal tabletop scene in an aesthetic cafe in Madurai",
    className: "md:col-span-4 md:row-span-2",
    aspect: "aspect-[3/4] md:aspect-auto md:h-full",
  },
  // 5
  {
    src: "/images/interior-seat.webp",
    alt: "Light falling on surfaces",
    className: "md:col-span-5 md:row-span-1",
    aspect: "aspect-video md:aspect-auto md:h-full",
  },
  // 7
  {
    src: "/images/interior-4.webp",
    alt: "Architectural detail",
    className: "md:col-span-3 md:row-span-2",
    aspect: "aspect-[2/3] md:aspect-auto md:h-full",
  },
  // 6
  {
    src: "/images/spacious.webp",
    alt: "Calm cafe atmosphere",
    className: "md:col-span-5 md:row-span-1",
    aspect: "aspect-video md:aspect-auto md:h-full",
  },
  // 8
  {
    src: "/images/van-1.webp",
    alt: "Interior perspective",
    className: "md:col-span-4 md:row-span-1",
    aspect: "aspect-square md:aspect-auto md:h-full",
  },
  // 9
  {
    src: "/images/van-2.webp",
    alt: "Quiet moment",
    className: "md:col-span-5 md:row-span-1",
    aspect: "aspect-video md:aspect-auto md:h-full",
  },
];

export default function Gallery() {
  return (
    <>
      <section
        // ref={containerRef}
        className="w-full relative py-24 md:py-40"
      >
        <div className="container mx-auto px-6 md:px-12 lg:px-24">
          {/* Editorial Heading Block */}
          {/* <div className="mb-20 md:mb-32 max-w-sm">
            <h2 className="text-reveal text-3xl md:text-4xl cinzel font-semibold tracking-tight text-transparent bg-clip-text bg-linear-to-r from-red-400 to-red-600 mb-6">
              Luxury, Redefined Inside
            </h2>
            <div className="text-reveal w-12 h-1px bg-neutral-300 mb-6"></div>
            <p className="text-reveal text-sm md:text-base font-sans tracking-wide text-neutral-800 font-light leading-relaxed uppercase">
              Experience interiors that elevate travel into an indulgence.
            </p>
          </div> */}

          <div className="text-center mb-16">
            <h2
              data-aos="fade-down"
              className="text-4xl cinzel md:text-6xl font-serif font-bold mb-4 tracking-wide drop-shadow-xl relative inline-block"
            >
              Luxury,{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-red-400 to-red-600">
                Redefined Inside
              </span>
              <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-24 h-0.5 bg-linear-to-r from-transparent via-[#D4AF37] to-transparent"></span>
            </h2>
            <p className="text-black text-lg md:text-xl font-light tracking-wide mt-6 max-w-2xl mx-auto">
              Experience interiors that elevate travel into an indulgence.
            </p>
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 md:auto-rows-[250px] lg:auto-rows-[300px]">
            {images.map((img, idx) => (
              <div
                key={idx}
                className={`group bento-item relative rounded-md overflow-hidden bg-neutral-100 ${img.className}`}
              >
                <div className={`relative w-full parallax-img ${img.aspect}`}>
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    className="object-cover w-full h-full rounded-md"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
