// import { useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Linkedin, Facebook, Instagram } from "lucide-react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import blogDetailAll from "../components/BlogDetailAll";
// import { table, th, tr } from "motion/react-client";

export default function BlogDetails() {
  // image object
  //   {
  //   type: "image",
  //   path: "/images/traditional-marketing-service-in-tirunelveli.webp",
  //   alt: "top-software-training-institute-in-madurai",
  // },

  // new
  const { blogIndividual } = useParams();
  const selectedBlog = blogDetailAll.find(
    (blog) => blog.url === blogIndividual,
  );

  // old
  // const location = useLocation();
  // const { blogId } = location.state || {};

  // stores the specific blog in selectedBlog variable
  // const selectedBlog = blogDetailAll.find((blog) => blog.id === blogId);
  // console.log(selectedBlog);

  if (!selectedBlog) {
    return (
      <>
        <h1 className="text-center py-50 h-screen text-3xl">Blog not found</h1>
      </>
    );
  }

  return (
    <div className="">
      {/* HERO SECTION */}

      {/* {selectedBlog.map((blogDetails, i) => ( */}
      {/* we can't use map function on selectedBlog, because it only return only one object */}
      <div>
        <SEO
          title={`Iunoware | ${selectedBlog.metaTitle}`}
          description={selectedBlog.metaDescription}
          // keywords="Digital Marketing Company, leading digital marketing agency, Top Digital Marketing Agency, digital marketing agency, digital marketing specialist, digital marketing services, Expert digital marketing agency, marketing firm, online advertising, SEO services,  social media marketing, content marketing, branding solutions, business growth, digital strategies, Digital Marketing"
        />
        <div className="w-full pt-25 lg:px-40 md:px-30 sm:px-10 px-5 h-[400px] md:h-[500px] lg:h-[700px] relative rounded-2xl">
          <img
            src={`${selectedBlog?.image}`}
            alt="Abstract representation of global digital network connectivity"
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>

        <article className="max-w-3xl mx-auto px-6 my-16  md:my-24">
          <header className="mb-12 border-b border-gray-200 pb-10">
            <div className="flex items-center space-x-4 mb-6">
              <span className="bg-blue-50 text-blue-700 text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full">
                {selectedBlog?.category}
              </span>
              <span className="text-gray-500 text-sm font-medium">
                {selectedBlog?.date}
              </span>
              {/* <span className="text-gray-400 text-sm font-medium">• 8 min read</span> */}
            </div>

            <h1 className="text-3xl md:text-5xl font-semibold text-gray-900 leading-tight mb-6">
              {selectedBlog?.title}
            </h1>

            <p className="text-xl text-gray-500 leading-relaxed font-light">
              {selectedBlog?.summary}
            </p>
          </header>

          {/* Main Body Content */}
          <div className="prose prose-lg prose-slate max-w-none text-gray-800 leading-8">
            {/* {selectedBlog?.fullContent} */}

            {selectedBlog.fullContent.map((block, i) => {
              if (block.type === "paragraph")
                return (
                  <p
                    className="text-lg text-gray-800 leading-relaxed font-light my-5"
                    key={i}
                  >
                    {block.text}
                  </p>
                );
              if (block.type === "heading")
                return (
                  <h2
                    className="text-black font-semibold tracking-wide text-2xl mt-10"
                    key={i}
                  >
                    {block.text}
                  </h2>
                );
              if (block.type === "list")
                return (
                  <ul className="mt-5" key={i}>
                    {block.items.map((item, j) => (
                      <li
                        className="list-disc text-lg text-gray-800 leading-relaxed font-light ml-10"
                        key={j}
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                );
              if (block.type === "table")
                return (
                  <table className="overflow-hidden rounded-xl border my-10">
                    <thead className="bg-red-200">
                      <tr className="">
                        {block.headers.map((header, i) => (
                          <th
                            key={i}
                            className={`text-left p-3 text-lg font-semibold text-black`}
                          >
                            {header}
                          </th>
                        ))}
                      </tr>
                    </thead>

                    <tbody>
                      {block.rows.map((row, i) => (
                        <tr
                          key={i}
                          className={`${i % 2 === 0 ? "" : "bg-red-200"}`}
                        >
                          {row.map((column, j) => (
                            <td key={j} className="p-3 ">
                              {column}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                );
              if (block.type === "image")
                return (
                  <img
                    key={i}
                    src={block.path}
                    alt={block.alt}
                    className="w-full h-full object-cover rounded-2xl my-8"
                  />
                );
              if (block.type === "faq")
                return (
                  <div key={i}>
                    <h2 className="text-black font-semibold text-2xl mb-4 mt-10">
                      Frequently Asked Questions (FAQ)
                    </h2>
                    {block.content.map((point, i) => (
                      <details
                        key={i}
                        className="group mb-4 cursor-pointer border-s-4 border-blue bg-gray-50 p-4 [&amp;_summary::-webkit-details-marker]:hidden"
                      >
                        <summary className="flex items-center justify-between gap-1.5 text-gray-900">
                          <h2 className="text-lg font-medium">
                            {i + 1}. {point.question}
                          </h2>

                          <svg
                            className="size-5 shrink-0 transition-transform duration-300 group-open:-rotate-180"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M19 9l-7 7-7-7"
                            ></path>
                          </svg>
                        </summary>

                        <p className="pt-4 text-gray-900">{point.answer}</p>
                      </details>
                    ))}
                  </div>
                );
            })}
          </div>
        </article>
      </div>
      {/* ))} */}

      {/* contact section */}
      <section className="max-w-3xl mx-auto px-6 my-16  md:my-24">
        <h2 className="text-black font-semibold text-2xl mt-10">
          Contact Iunoware Pvt Ltd - Start Your IT Career Today
        </h2>

        <ul className="mt-5 space-y-3">
          <li className="flex gap-5 justify-start items-center">
            <div className="text-black font-semibold text-lg">Call Us: </div>
            <div>
              <a href="tel:/+916381268955" className="font-semibold text-black">
                +91 63812 68955
              </a>{" "}
              /
              <a href="tel:/+919842453740" className="font-semibold text-black">
                +91 98424 53740
              </a>
            </div>
          </li>

          <li className="flex gap-5 justify-start items-center">
            <div className="text-black font-semibold text-lg">Email: </div>
            <div>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=info@iunoware.com"
                target="_blank"
                className="font-semibold text-black"
              >
                <div>info@iunoware.com</div>
              </a>
            </div>
          </li>

          <li className="flex gap-5 justify-start items-center">
            <div className="text-black font-semibold text-lg">
              Follow us on:{" "}
            </div>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/iunoware?igsh=YmlycTZ5bWZwMDF4"
                rel="noreferrer"
                target="_blank"
                className="hover:-translate-y-1 transition-transform duration-200"
              >
                <Instagram className="text-red-500" size={30} />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61569943926291"
                // href="https://www.facebook.com/profile.php?id=61581100037905" //iunoware digi link
                rel="noreferrer"
                target="_blank"
                className="hover:-translate-y-1 transition-transform duration-200"
              >
                <Facebook className="text-blue-500" size={30} />
              </a>
              <a
                href="https://www.linkedin.com/company/iunoware-private-limited/posts/?feedView=all"
                rel="noreferrer"
                target="_blank"
                className="hover:-translate-y-1 transition-transform duration-200"
              >
                <Linkedin className="text-sky-600" size={30} />
              </a>
            </div>
          </li>
        </ul>
      </section>
    </div>
  );
}
