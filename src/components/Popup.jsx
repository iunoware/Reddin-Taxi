/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { X, BriefcaseBusiness, MapPin, Star } from "lucide-react";
import GlassButton from "./GlassButton";
import toast from "react-hot-toast";

export default function Popup() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  useEffect(() => {
    const hasVisited = sessionStorage.getItem("hasVisitedWebsite");

    if (hasVisited) return;

    const oneVH = window.innerHeight * 0.01;

    function handleScroll() {
      if (window.scrollY > oneVH) {
        const timer = setTimeout(() => {
          setIsModalVisible(true);
        }, 3000);

        // return () => clearTimeout(timer);
        window.removeEventListener("scroll", handleScroll);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function handleModalClose() {
    sessionStorage.setItem("hasVisitedWebsite", "true");
    setIsModalVisible(false);
  }

  useEffect(() => {
    isModalVisible
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto");
  }, [isModalVisible]);

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   const form = e.target;

  //   try {
  //     const response = await fetch(form.action, {
  //       method: "POST",
  //       body: new FormData(form),
  //     });

  //     // const result = await response.json();

  //     toast.success("Form submitted successfully");
  //     setIsDisabled(true);

  //     setTimeout(() => {
  //       window.location.reload();
  //     }, 2000);
  //   } catch (err) {
  //     toast.error("Something went wrong");
  //     console.log("error: ", err);
  //   }
  // };

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
    handleModalClose();
  }

  function whatsappLink() {
    if (!name || !phone || !message) return;
    return `https://wa.me/918098702345?text=Hi%20Redinn%20Travels!%0A%0AI’m%20interested%20in%20booking%20a%20trip%20and%20here%20are%20my%20details:%0A%0AName: ${name.trim()}%0APhone: ${phone.trim()}%0AMessage: ${message.trim()}%0A`;
  }
  // whatsapp form

  return (
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
                onClick={handleModalClose}
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
                  <span className="italic text-gray-400">Premium Journey</span>
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

              <div className="md:w-3/5 bg-linear-to-br from-[#61616141] to-[#111] p-10 flex flex-col items-center justify-center relative">
                <h2 className="cinzel block md:hidden text-2xl md:text-3xl text-white leading-[1.1] mb-6">
                  Plan Your <br />
                  <span className="italic text-gray-400">Premium Journey</span>
                </h2>
                <form
                  // action="https://sheetdb.io/api/v1/hes12fn5dscth"
                  // method="POST"
                  id="sheetdb-form"
                  // onSubmit={handleSubmit}
                  // data-aos="fade-up"
                  className="flex w-full flex-col gap-4 space-y-4 rounded-lg p-2"
                >
                  {/* <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-12"> */}
                  <div className="flex flex-col gap-4">
                    {/* <div className="space-y-8"> */}

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

                    {/* pick up */}
                    {/* <div>
                      <label
                        className="block text-lg text-white font-medium"
                        htmlFor="pickUpLocation"
                      >
                        Pick up location <span className="text-red-500">*</span>
                      </label>

                      <input
                        className="mt-1 w-full rounded-lg text-white p-3 backdrop-blur-md shadow-[0_1px_30px_rgba(0,0,0,0.2),inset_0_1px_rgba(255,255,255,0.3),inset_0_-1px_rgba(255,255,255,0.3)] outline-none"
                        id="pickUpLocation"
                        name="data[pick-up-location]"
                        type="text"
                        required
                        placeholder="pick Up Location"
                      ></input>
                    </div> */}
                    {/* </div> */}

                    {/* <div className="space-y-8"> */}
                    {/* drop */}
                    {/* <div>
                      <label
                        className="block text-lg text-white font-medium"
                        htmlFor="dropLocation"
                      >
                        Drop Location <span className="text-red-500">*</span>
                      </label>

                      <input
                        className="mt-1 w-full rounded-lg text-white p-3 backdrop-blur-md shadow-[0_1px_30px_rgba(0,0,0,0.2),inset_0_1px_rgba(255,255,255,0.3),inset_0_-1px_rgba(255,255,255,0.3)] outline-none"
                        id="dropLocation"
                        name="data[drop-location]"
                        type="text"
                        required
                        placeholder="Drop Location"
                      ></input>
                    </div> */}

                    {/* no of people */}
                    {/* <div>
                      <label
                        className="block text-lg text-white font-medium"
                        htmlFor="passengers"
                      >
                        Number of passengers <span className="text-red-500">*</span>
                      </label>

                      <input
                        className="mt-1 w-full rounded-lg text-white p-3 backdrop-blur-md shadow-[0_1px_30px_rgba(0,0,0,0.2),inset_0_1px_rgba(255,255,255,0.3),inset_0_-1px_rgba(255,255,255,0.3)] outline-none"
                        id="passengers"
                        name="data[passengers]"
                        type="text"
                        required
                        placeholder="number of passengers"
                      ></input>
                    </div> */}

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
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
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
                      // disabled={isDisabled}
                      onClick={inputCheck}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${
                        isDisabled ? "cursor-not-allowed" : "cursor-pointer"
                      } block w-full text-center text-sm bg-red-800 shadow-[0_1px_30px_rgba(0,0,0,0.2),inset_0_1px_rgba(255,255,255,0.3),inset_0_-1px_rgba(255,255,255,0.3)] rounded-lg px-12 py-3 font-medium text-white transition-all duration-300 `}
                      type="submit"
                    >
                      Send Message
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
