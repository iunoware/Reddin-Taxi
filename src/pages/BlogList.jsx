// /* eslint-disable react-hooks/exhaustive-deps */
// import { useEffect, useState } from "react";
import SEO from "../components/SEO";
import { Link } from "react-router-dom";

export default function BlogList() {
  const blogPosts = [
    // 1
    {
      id: 1,
      metaTitle:
        "Why Road Travel is Becoming the New Trend in India | Luxury Tours and Travels in Tirunelveli",
      metaDescription:
        "Discover why road travel is becoming the new trend in India. Explore premium tours and travels in Tirunelveli, tourist van rental services, Urbania travel van Tirunelveli, group travel package in Tamil Nadu, and individual travels.",
      title: "Why Road Travel is Becoming the New Trend in India",
      url: "why-road-travel-is-trending-in-india",
      summary:
        "Road travel is transforming the way people explore India. Discover how premium tourist van rental services, Urbania travel van Tirunelveli, group travel package in Tamil Nadu, and individual travels are redefining modern journeys.",
      image: "/images/tirunelveli-car-rental-service.png",
      alt: "road travel in india",
      category: "Travel",
      date: "May 7, 2026",
    },
    // 2
    {
      id: 2,

      metaTitle:
        "Best Family Tourist Places in Tamil Nadu for a Perfect Road Trip | Reddin Tours and Travels",

      metaDescription:
        "Explore the best family tourist places in Tamil Nadu with comfortable road trips, luxury tourist van rental, Urbania van rental Tirunelveli, and customized family travel packages from Reddin Tours and Travels.",

      title:
        "10 Best Family Tourist Places in Tamil Nadu for a Perfect Road Trip",

      url: "best-family-tourist-places-in-tamil-nadu",

      summary:
        "Discover the best family tourist places in Tamil Nadu for unforgettable road trips. Explore hill stations, beaches, temples, and family-friendly destinations with comfortable tourist van rental and luxury travel services.",

      image: "/images/best-family-tourist-places-tamilnadu.webp",

      alt: "best family tourist places in tamil nadu",

      category: "Travel",

      date: "May 12, 2026",
    },
    // 3
    {
      id: 3,

      metaTitle:
        "How to Choose the Best Tours and Travels in Tirunelveli | Urbania Van Rental Services",

      metaDescription:
        "Looking for the best tours and travels in Tirunelveli? Discover how to choose the right travel agency with premium tourist van rental, Urbania van rental Tirunelveli, and luxury travel services for family and group trips.",

      title: "How to Choose the Best Tours and Travels in Tirunelveli",

      url: "how-to-choose-best-tours-and-travels-in-tirunelveli",

      summary:
        "Learn how to choose the best tours and travels in Tirunelveli for family vacations, group tours, corporate travel, and road trips. Explore the benefits of Urbania van rental Tirunelveli, tourist van rental services, and comfortable luxury travel options.",

      image: "/images/best-tours-and-travels-tirunelveli.webp",

      alt: "best tours and travels in tirunelveli",

      category: "Travel",

      date: "May 16, 2026",
    },
  ];

  return (
    <div className=" bg-white text-gray-900">
      <SEO
        title="Redinn Tours and Travels | Marketing, Advertising & Business Insights"
        // description="Grow your business with iunoware’s digital marketing services including SEO, social media marketing, paid ads, and data-driven growth strategies."
        // keywords="Digital Marketing Company, leading digital marketing agency, Top Digital Marketing Agency, digital marketing agency, digital marketing specialist, digital marketing services, Expert digital marketing agency, marketing firm, online advertising, SEO services,  social media marketing, content marketing, branding solutions, business growth, digital strategies, Digital Marketing"
      />

      {/* Hero Section */}

      <section className="">
        <div className="h-[700px] lg:p-10 p-3">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8 justify-center place-items-center h-full">
            <div className="lg:translate-x-20 z-10 mb-20 flex flex-col gap-5 justify-center md:items-start items-center h-full order-2 lg:order-1">
              <h1 className="text-4xl md:text-5xl font-semibold tracking-wide mb-4">
                Redinn Travels Blogs
              </h1>
              <p className="max-w-3xl tracking-wide text-center md:text-start mx-auto text-lg md:text-xl text-gray-800 leading-relaxed">
                Travel guides, road trip ideas, destination tips, and luxury
                group travel experiences from{" "}
                <strong>Reddin Tours & Travels.</strong>
              </p>
            </div>

            <div className="order-1 lg:order-2" data-aos="fade-left">
              <img
                loading="lazy"
                src="/images/blog-hero.png"
                alt="it course fees in Madurai"
                className="h-70 sm:h-90 md:h-[420px] lg:h-[400px] w-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Blog Grid Section */}
      <section className="w-full -translate-y-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="flex flex-col bg-white rounded-xl overflow-hidden h-full transition-transform hover:scale-103 duration-300"
            >
              <div
                className="h-48 w-full rounded-xl bg-center bg-cover"
                // style={{ backgroundImage: `url(${post.image})` }}
                aria-label={`Cover image for ${post.title}`}
              >
                <img
                  src={post.image}
                  alt="Software company in Madurai"
                  className="h-full w-full rounded-xl object-cover object-center"
                />
              </div>

              {/* Content Section */}
              <div className="flex flex-col grow p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold uppercase tracking-wider text-blue">
                    {post.category}
                  </span>
                  <span className="text-xs text-gray-400">{post.date}</span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight group-hover:text-blue transition-colors">
                  {post.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed mb-4 grow line-clamp-3">
                  {post.summary}
                </p>

                <Link
                  to={`/blogs/${post.url}`}
                  state={{ blogId: post.id }}
                  className="mt-auto pt-4 border-t border-gray-50"
                >
                  <span className="inline-block text-sm font-medium text-blue cursor-pointer hover:underline">
                    Read Article &rarr;
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Simple Footer / Pagination Placeholder (Optional Visual Only) */}
      <div className="w-full text-center pb-20">
        <span className="text-gray-600 text-sm">
          Showing {blogPosts.length} recent articles
        </span>
      </div>
    </div>
  );
}
