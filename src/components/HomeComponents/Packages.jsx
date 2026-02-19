/* eslint-disable no-unused-vars */
import GlassButton from "../GlassButton";
import { Check, Star, Crown, Zap, X, BriefcaseBusiness, Flashlight } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef, useEffect, useState } from "react";

const packages = [
  {
    title: "Standard Premium",
    delay: "200",
    price: "₹7999",
    amount: 7999,
    period: "+ other charges",
    description: "Perfect for airport transfers and short luxury city commutes.",
    icon: <Star className="w-6 h-6 text-yellow-500" />,
    features: [
      "Luxury Leather Seating",
      "Complimentary Water",
      "Professional Chauffeur",
      "Standard Baggage Allowance",
      "Free Wi-Fi Access",
    ],
    highlight: false,
    premium: false,
  },
  {
    title: "Elite Royal Experience",
    delay: "400",
    price: "₹9999",
    amount: 9999,
    period: "+ other charges",
    description: "The ultimate VIP experience with unmatched luxury and privacy.",
    icon: <Crown className="w-6 h-6 text-black/90" />,
    features: [
      "Full Flat-Bed Recliners",
      "Champagne Service",
      "Personal Concierge",
      "Private Cabin Partition",
      "Massage Functionality",
    ],
    highlight: true,
    premium: true,
  },
  {
    title: "Executive Comfort",
    delay: "300",
    price: "₹7999",
    amount: 7999,
    period: "+ other charges",
    description: "Designed for business travel and extended comfort journeys.",
    icon: <Zap className="w-6 h-6 text-yellow-500" />,
    features: [
      "Reclining Captain Seats",
      "Workstation Tables",
      "Priority Boarding",
      "Premium Refreshments",
      "Enhanced Privacy Tint",
    ],
    highlight: true,
    premium: false,
  },
];

export default function Packages() {
  const formRef = useRef();

  // for popup
  const [pkg, setPkg] = useState("Standard Premium");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  function handleModalClose() {
    sessionStorage.setItem("hasVisitedWebsite", "true");
    setIsModalVisible(false);
  }

  useEffect(() => {
    isModalVisible
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto");
  }, [isModalVisible]);

  let dummyVar;
  // whatsapp form
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const [error, setError] = useState("");

  function clearInput() {
    setName("");
    setPhone("");
    setMessage("");
  }

  function inputCheck(e) {
    e.preventDefault();

    const phoneRegex = /^[0-9]{10}$/;

    if (!name.trim()) return setError("Enter your name");
    if (!phoneRegex.test(phone)) return setError("Enter valid phone number");
    if (!message.trim()) return setError("Enter your message");

    setError("");

    window.open(whatsappLink(), "_blank");
    clearInput();
  }

  function whatsappLink() {
    if (!name || !phone || !message) return;
    return `https://wa.me/918098702345?text=Hi%20Redinn%20Travels!%0A%0AI’m%20interested%20in%20booking%20a%20trip%20and%20here%20are%20my%20details:%0A%0AName: ${name.trim()}%0APhone: ${phone.trim()}%0AMessage: ${message.trim()}%0APackage: ${pkg}%0A%0A`;
  }
  // whatsapp form

  const sectionRef = useRef();
  // const numberRef = useRef();

  useGSAP(
    () => {
      gsap.utils.toArray("[data-price]").forEach((el) => {
        const endValue = Number(el.dataset.amount);
        const obj = { value: 0 };

        gsap.to(obj, {
          value: endValue,
          duration: 7,
          ease: "power1.inOut",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
            // once: true,
          },
          onUpdate: () => {
            el.textContent = `₹${Math.floor(obj.value).toLocaleString("en-IN")}`;
          },
          onComplete: () => {
            el.textContent = "₹****";
          },
        });
      });
    },
    { scope: sectionRef },
  );

  // function popUp(pkg) {
  //   console.log(pkg);
  // }

  return (
    <>
      <section ref={sectionRef} className="relative py-24 overflow-hidden">
        {/* Background Ambience */}
        <div className="absolute inset-0 from-zinc-800/20 via-[#0d0d0d] to-[#0d0d0d] pointer-events-none bg-[radial-linear(circle_at_top,var(--tw-linear-stops))]"></div>

        <div className="container mx-auto px-6 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2
              data-aos="fade-down"
              className="text-3xl cinzel md:text-5xl font-serif text-black font-bold mb-4 tracking-tight"
            >
              Curated <span className="text-red-500 italic font-normal">Packages</span>
            </h2>
            <div className="w-20 h-1 bg-linear-to-r from-transparent via-red-600 to-transparent mx-auto rounded-full mb-6"></div>
            <p className="text-black max-w-2xl mx-auto text-lg font-light leading-relaxed">
              Choose the level of luxury that suits your journey. Exceptional service is
              standard across all tiers.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {packages.map((pkg, index) => (
              <div key={index} data-aos="fade-up-right" data-aos-delay={pkg.delay}>
                <div
                  className={`${
                    pkg.premium
                      ? "lg:scale-110 scale-100 bg-linear-to-b from-amber-200  via-zinc-900/10 to-transparent"
                      : "lg:scale-97 scale-100 bg-linear-to-b from-zinc-700/50 via-zinc-900/10 to-transparent"
                  } relative shadow-lg group rounded-2xl p-1 transition-all duration-500 hover:-translate-y-2`}
                >
                  <div
                    className={`${
                      pkg.premium
                        ? "bg-[url('/images/gold-bg.webp')] bg-cover bg-center"
                        : "bg-[#111]"
                    } h-full backdrop-blur-xl rounded-xl p-8 flex flex-col relative overflow-hidden`}
                  >
                    {/* Glow Effect */}
                    {pkg.premium && (
                      <div>
                        <div className="absolute top-0 right-0 -mr-16 -mt-16 w-32 h-32 bg-yellow-500/50 blur-3xl rounded-full group-hover:bg-yellow-500/60 transition-all duration-700"></div>
                        {/* <div className="absolute top-0 left-0 -mr-16 -mt-16 w-32 h-32 bg-yellow-500/50 blur-3xl rounded-full group-hover:bg-yellow-500/60 transition-all duration-700"></div> */}
                      </div>
                    )}

                    {/* Header */}
                    <div className="mb-6 relative">
                      <div className="flex items-center justify-between mb-4">
                        <div
                          className={`p-3 rounded-full ${
                            pkg.highlight
                              ? `bg-yellow-500/10 text-yellow-500`
                              : `${
                                  index === 0 &&
                                  "bg-zinc-800 text-gray-400 group-hover:text-yellow-500 group-hover:bg-yellow-500/10"
                                }`
                          } transition-colors duration-300`}
                        >
                          {pkg.icon}
                        </div>
                        {pkg.highlight && (
                          <span className="px-3 py-1 text-xs font-semibold tracking-wider text-black bg-yellow-500 rounded-full uppercase">
                            {!pkg.premium ? "Most Popular" : "Most Elite"}
                          </span>
                        )}
                      </div>
                      <h3
                        className={`${
                          pkg.premium ? "text-black" : "text-white"
                        } text-2xl font-semibold mb-2`}
                      >
                        {pkg.title}
                      </h3>
                      <p
                        className={`${
                          pkg.premium ? "text-black/90" : "text-gray-500"
                        } text-sm leading-relaxed min-h-10`}
                      >
                        {pkg.description}
                      </p>
                    </div>

                    {/* Price */}
                    <div className="mb-8 flex items-baseline gap-1">
                      <span
                        data-price
                        data-amount={pkg.amount}
                        className={`${
                          pkg.premium ? "text-black" : "text-white"
                        } text-4xl font-semibold`}
                      >
                        {/* {pkg.price} */}0
                      </span>
                      <span
                        className={`${
                          pkg.premium ? "text-black/90" : "text-gray-500"
                        }  text-sm font-light`}
                      >
                        {pkg.period}
                      </span>
                    </div>

                    {/* Divider */}
                    <div className="w-full h-px bg-linear-to-r from-transparent via-zinc-700 to-transparent mb-8"></div>

                    {/* Features */}
                    <ul className="space-y-4 mb-8 flex-1">
                      {pkg.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className={`${
                            pkg.premium ? "text-black" : "text-gray-300"
                          } flex items-center gap-3 text-sm transition-colors duration-300`}
                        >
                          <Check
                            className={`w-4 h-4 ${
                              pkg.highlight && index === 2
                                ? "text-yellow-500"
                                : "text-zinc-600 "
                            } transition-colors duration-300`}
                          />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    {/* {pkg.highlight ? (
                    <GlassButton
                      text1="Book Now"
                      bg="bg-white"
                      textColor="text-black"
                      // glass={true}
                      link="/contact"
                      className="text-center"
                    />
                  ) : (
                    <GlassButton
                      text1="Book Now"
                      glass={true}
                      link="/contact"
                      className="text-center"
                    />
                  )} */}
                    {index === 0 ? (
                      <div
                        onClick={() => {
                          setPkg("Standard Premium");
                          setIsModalVisible(true);
                        }}
                      >
                        <GlassButton
                          text1="Get Pricing"
                          glass={true}
                          // link="/contact"
                          className="text-center w-full"
                        />
                      </div>
                    ) : (
                      <></>
                    )}
                    {index === 1 ? (
                      <div
                        onClick={() => {
                          setPkg("Elite Royal Experience");
                          setIsModalVisible(true);
                        }}
                      >
                        <GlassButton
                          text1="Get Pricing"
                          bg="bg-black"
                          textColor="text-white"
                          // glass={true}
                          // link="/contact"
                          className="text-center w-full"
                        />
                      </div>
                    ) : (
                      <></>
                    )}
                    {index === 2 ? (
                      <div
                        onClick={() => {
                          setPkg("Executive Comfort");
                          setIsModalVisible(true);
                        }}
                      >
                        <GlassButton
                          text1="Get Pricing"
                          bg="bg-white"
                          textColor="text-black"
                          // glass={true}
                          // link="/contact"
                          className="text-center w-full"
                        />
                      </div>
                    ) : (
                      <></>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* popup */}
      <section className={`${isModalVisible ? "no-doc-scroll" : ""}`}>
        <div
          className={`${
            isModalVisible ? "block" : "hidden"
          } fixed inset-0 z-99 grid place-content-center bg-black/50 backdrop-blur-sm p-2`}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modalTitle"
        >
          <div className="w-full rounded-lg p-2">
            {/* <div className="mt-4">
            <p className="text-pretty text-gray-700">a small pop up modal check</p>
          </div> */}
            <div className="relative w-full py-10 px-4 flex items-center justify-center overflow-hidden">
              <div className="flex items-start justify-between absolute top-15 right-10">
                {/* <h2 id="modalTitle" className="text-xl font-bold text-gray-900 sm:text-2xl">
                Modal Title
                </h2> */}
                <div></div>

                <button
                  type="button"
                  className=" z-99 -me-4 -mt-4 rounded-full p-2 cursor-pointer text-white transition-all duration-200 hover:rotate-90"
                  aria-label="Close"
                  onClick={() => {
                    handleModalClose();
                    setIsSubmitted(false);
                    setIsDisabled(false);
                  }}
                >
                  <X />
                </button>
              </div>

              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] -z-10"></div>

              <div className="relative w-full max-w-5xl bg-[#0F0F0F] rounded-2xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] flex flex-col md:flex-row overflow-hidden ">
                <div className="flex-1 p-10 md:p-14 hidden md:flex flex-col justify-center relative z-10">
                  <div className="absolute top-0 right-0 p-10 opacity-5 pointer-events-none">
                    <BriefcaseBusiness
                      size={200}
                      className="text-white"
                      strokeWidth={0.5}
                    />
                  </div>

                  <div className="flex items-center gap-2 mb-6">
                    <span className="text-yellow-500 tracking-[0.2em] text-xs font-semibold uppercase">
                      First Class
                    </span>
                  </div>

                  <h2 className="cinzel text-2xl md:text-3xl text-white leading-[1.1] mb-6">
                    Plan Your <br />
                    <span className="italic text-gray-400">{pkg}</span>
                  </h2>

                  <p className="font-sans text-gray-200 text-sm mb-10 max-w-md leading-relaxed">
                    Your next luxury ride begins with a single click. Experience comfort,
                    safety, and elegance like never before.
                  </p>
                </div>

                <div className="relative hidden md:flex flex-col justify-center items-center py-4">
                  <div className="h-full border-l-2 border-dashed border-gray-300 relative z-20"></div>
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-10 h-10 bg-gray-500 rounded-full shadow-[inset_0_-2px_4px_rgba(0,0,0,0.05)] z-20"></div>
                  <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-10 h-10 bg-gray-500 rounded-full shadow-[inset_0_2px_4px_rgba(0,0,0,0.05)] z-20"></div>
                </div>

                {/* right side */}
                <div className="md:w-3/5 bg-linear-to-br from-[#61616141] to-[#111] p-10 flex flex-col items-center justify-center relative">
                  <h2 className="cinzel block md:hidden text-2xl md:text-3xl text-white leading-[1.1] mb-6">
                    Plan Your <br />
                    <span className="italic text-gray-400">{pkg}</span>
                  </h2>
                  <form
                    className={`${isSubmitted ? "hidden" : "flex"} w-full flex-col gap-4 space-y-4 rounded-lg p-2`}
                    // onClick={() => popUp}
                    // id="sheetdb-form"
                    ref={formRef}
                    // action="https://sheetdb.io/api/v1/hes12fn5dscth"
                    // method="POST"
                    // onSubmit={handleSubmit}
                    // data-aos="fade-up"
                  >
                    {/* <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-12"> */}
                    <div className="flex flex-col gap-4">
                      {/* <div className="space-y-8"> */}

                      {/* package */}
                      <div>
                        <input
                          className="mt-1 w-full rounded-lg text-white p-3 backdrop-blur-md shadow-[0_1px_30px_rgba(0,0,0,0.2),inset_0_1px_rgba(255,255,255,0.3),inset_0_-1px_rgba(255,255,255,0.3)] outline-none"
                          id="pkg"
                          hidden
                          name="data[package]"
                          type="text"
                          value={pkg}
                          required
                          readOnly
                        ></input>
                      </div>

                      {/* name */}
                      <div>
                        <label
                          className="block text-lg text-white font-medium"
                          htmlFor="name"
                        >
                          Name <span className="text-red-500">*</span>
                        </label>

                        <input
                          className="mt-1 w-full rounded-lg text-white p-3 backdrop-blur-md shadow-[0_1px_30px_rgba(0,0,0,0.2),inset_0_1px_rgba(255,255,255,0.3),inset_0_-1px_rgba(255,255,255,0.3)] outline-none"
                          id="name"
                          name="data[name]"
                          type="text"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          required
                          placeholder="Your name"
                        ></input>
                      </div>

                      {/* phone */}
                      <div>
                        <label
                          className="block text-lg text-white font-medium"
                          htmlFor="mobile"
                        >
                          Phone <span className="text-red-500">*</span>
                        </label>

                        <input
                          className="mt-1 w-full rounded-lg text-white p-3 backdrop-blur-md shadow-[0_1px_30px_rgba(0,0,0,0.2),inset_0_1px_rgba(255,255,255,0.3),inset_0_-1px_rgba(255,255,255,0.3)] outline-none"
                          id="mobile"
                          name="data[mobile]"
                          type="tel"
                          pattern="[0-9]{10}"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          required
                          placeholder="Mobile number"
                        ></input>
                      </div>

                      {/* message */}
                      <div>
                        <label
                          className="block text-lg text-white font-medium"
                          htmlFor="message"
                        >
                          Your message <span className="text-red-500">*</span>
                        </label>

                        <input
                          className="mt-1 w-full rounded-lg text-white p-3 backdrop-blur-md shadow-[0_1px_30px_rgba(0,0,0,0.2),inset_0_1px_rgba(255,255,255,0.3),inset_0_-1px_rgba(255,255,255,0.3)] outline-none"
                          id="message"
                          name="data[message]"
                          type="text"
                          required
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          placeholder="your message"
                        ></input>
                      </div>
                      {/* </div> */}
                    </div>

                    <div>
                      <h3 className="cinzel text-center text-white">{error}</h3>
                    </div>

                    <div className="flex justify-center items-center">
                      <a
                        onClick={inputCheck}
                        target="_blank"
                        rel="noopener noreferrer"
                        id="submitBtn"
                        // disabled={isDisabled}
                        // onClick={() => setIsSubmitted(false)}
                        className={`${
                          isDisabled ? "cursor-not-allowed" : "cursor-pointer"
                        } block w-full text-center text-sm bg-red-800 shadow-[0_1px_30px_rgba(0,0,0,0.2),inset_0_1px_rgba(255,255,255,0.3),inset_0_-1px_rgba(255,255,255,0.3)] rounded-lg px-12 py-3 font-medium text-white transition-all duration-300 `}
                        type="submit"
                      >
                        Send Message
                      </a>
                    </div>
                  </form>

                  {/* successful submission */}
                  <div
                    className={`${isSubmitted ? "flex" : "hidden"} text-white flex-col justify-center items-center gap-5`}
                  >
                    <div className="h-20 w-20 animate-bounce rounded-full p-5 bg-green-300/30 border-2 border-green-500 flex justify-center items-center">
                      <Check className="text-green-400" size={45} />
                    </div>
                    <h3 className="text-2xl text-center cinzel">
                      Your form has been submitted successfully
                    </h3>

                    <button
                      onClick={() => {
                        setIsSubmitted(false);
                        setIsDisabled(false);
                      }}
                      className={`block w-fit cursor-pointer text-center text-sm hover:-translate-y-1 shadow-[0_1px_30px_rgba(0,0,0,0.2),inset_0_1px_rgba(255,255,255,0.3),inset_0_-1px_rgba(255,255,255,0.3)] rounded-lg px-12 py-3 font-medium text-white transition-all duration-300 `}
                    >
                      Submit another response
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
