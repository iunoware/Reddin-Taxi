/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  Linkedin,
  Facebook,
  Instagram,
  MessageCircle,
} from "lucide-react";
import Heading from "../components/Heading";
import toast from "react-hot-toast";

export default function Contact() {
  const [isDisabled, setIsDisabled] = useState(false);

  useEffect(() => {
    document.title = "Redinn tours & travels | Contact us";
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;

    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: new FormData(form),
      });

      // const result = await response.json();

      toast.success("Form submitted successfully");
      setIsDisabled(true);

      setTimeout(() => {
        window.location.reload();
      }, 2000);
    } catch (err) {
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="overflow-x-hidden">
      <div className="">
        {/* Hero */}
        <div className="text-center relative pt-10 h-[90vh] mb-16 md:mb-24 bg-[url('/images/luxury-bg-red.webp')] bg-cover bg-center flex flex-col justify-center items-center">
          {/* <div className="absolute inset-0 h-full w-full bg-black/10"></div> */}

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full shadow-[0_1px_30px_rgba(0,0,0,0.2),inset_0_1px_rgba(255,255,255,0.3),inset_0_-1px_rgba(255,255,255,0.3)] backdrop-blur-sm mb-6">
            <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
            <span className="text-amber-400 text-xs font-medium tracking-widest uppercase">
              24/7 Support Available
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-serif font-medium text-white mb-6 tracking-tight drop-shadow-2xl">
            Let's Start Your{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-red-600 to-red-400">
              Journey
            </span>
          </h1>

          <p className="text-lg md:text-xl text-white font-light max-w-2xl mx-auto leading-relaxed">
            Ready for a premium travel experience? Get in touch with us for
            bespoke bookings, inquiries, or support.
          </p>
        </div>

        {/* form section */}
        <section className="w-full flex justify-center items-center">
          <div className="relative bg-[#111] shadow-2xl h-fit sm:w-[80%] w-[90%] -translate-y-55 rounded-2xl sm:p-10">
            {/* heading */}
            <div
              className="flex flex-col justify-start items-start w-full p-4"
              // data-aos="fade-down"
            >
              <h2 className="text-3xl text-white text-center sm:text-start mt-5">
                Plan Your Journey
              </h2>
            </div>

            <div>
              {/* contact form */}
              <div>
                <form
                  action="https://sheetdb.io/api/v1/hes12fn5dscth"
                  method="POST"
                  id="sheetdb-form"
                  onSubmit={handleSubmit}
                  // data-aos="fade-up"
                  className="flex w-full flex-col gap-4 space-y-4 rounded-lg p-6"
                >
                  <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-12">
                    <div className="space-y-8">
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
                          required
                          placeholder="Mobile number"
                        ></input>
                      </div>

                      {/* pick up */}
                      <div>
                        <label
                          className="block text-lg text-white font-medium"
                          htmlFor="pickUpLocation"
                        >
                          Pick up location{" "}
                          <span className="text-red-500">*</span>
                        </label>

                        <input
                          className="mt-1 w-full rounded-lg text-white p-3 backdrop-blur-md shadow-[0_1px_30px_rgba(0,0,0,0.2),inset_0_1px_rgba(255,255,255,0.3),inset_0_-1px_rgba(255,255,255,0.3)] outline-none"
                          id="pickUpLocation"
                          name="data[pick-up-location]"
                          type="text"
                          required
                          placeholder="pick Up Location"
                        ></input>
                      </div>
                    </div>

                    <div className="space-y-8">
                      {/* drop */}
                      <div>
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
                      </div>

                      {/* no of people */}
                      <div>
                        <label
                          className="block text-lg text-white font-medium"
                          htmlFor="passengers"
                        >
                          Number of passengers{" "}
                          <span className="text-red-500">*</span>
                        </label>

                        <input
                          className="mt-1 w-full rounded-lg text-white p-3 backdrop-blur-md shadow-[0_1px_30px_rgba(0,0,0,0.2),inset_0_1px_rgba(255,255,255,0.3),inset_0_-1px_rgba(255,255,255,0.3)] outline-none"
                          id="passengers"
                          name="data[passengers]"
                          type="text"
                          required
                          placeholder="number of passengers"
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
                          placeholder="your message"
                        ></input>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-center items-center">
                    <button
                      disabled={isDisabled}
                      className={`${
                        isDisabled ? "cursor-not-allowed" : "cursor-pointer"
                      } block w-[50%] bg-red-800 shadow-[0_1px_30px_rgba(0,0,0,0.2),inset_0_1px_rgba(255,255,255,0.3),inset_0_-1px_rgba(255,255,255,0.3)] rounded-lg px-12 py-3 text-sm font-medium text-white transition-all duration-300 `}
                      type="submit"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>

              {/* contact details */}
              <div className="flex items-center justify-center my-20">
                <div className="flex flex-wrap justify-center items-center gap-6 lg:gap-8 max-w-[1220px]">
                  <div className="group w-65 h-65 shadow-[0_1px_30px_rgba(0,0,0,0.2),inset_0_1px_rgba(255,255,255,0.3),inset_0_-1px_rgba(255,255,255,0.3)] relative p-8 md:p-10 rounded-3xl bg-[linear-gradient(145deg,rgba(255,255,255,0.03)_0%,rgba(255,255,255,0.005)_100%)] backdrop-blur-sm transition-all duration-500 hover:-translate-y-3 flex flex-col items-center text-center">
                    <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none shadow-[0_0_50px_rgba(201,163,92,0.15),inset_0_0_20px_rgba(201,163,92,0.05)]"></div>

                    <div className="w-15 h-15 mb-4 rounded-full flex items-center justify-center border border-transparent bg-white/5 group-hover:border-[#C9A35C]/50 transition-all duration-500 shadow-[0_1px_30px_rgba(0,0,0,0.2),inset_0_1px_rgba(255,255,255,0.3),inset_0_-1px_rgba(255,255,255,0.3)]">
                      <Phone className="text-amber-300" />
                    </div>

                    <h3 className="text-xl text-white font-medium mb-4 tracking-wide font-sans">
                      phone number
                    </h3>
                    <a
                      href="tel:+918098702345"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 text-sm leading-relaxed font-light tracking-wide font-sans"
                    >
                      +91 8098 70 2345
                    </a>
                    <a
                      href="tel:+918098502345"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 text-sm leading-relaxed font-light tracking-wide font-sans"
                    >
                      +91 8098 50 2345
                    </a>
                  </div>

                  <div className="group w-65 h-65 shadow-[0_1px_30px_rgba(0,0,0,0.2),inset_0_1px_rgba(255,255,255,0.3),inset_0_-1px_rgba(255,255,255,0.3)] relative p-8 md:p-10 rounded-3xl bg-[linear-gradient(145deg,rgba(255,255,255,0.03)_0%,rgba(255,255,255,0.005)_100%)] backdrop-blur-sm transition-all duration-500 hover:-translate-y-3 flex flex-col items-center text-center">
                    <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none shadow-[0_0_50px_rgba(201,163,92,0.15),inset_0_0_20px_rgba(201,163,92,0.05)]"></div>

                    <div className="w-15 h-15 mb-4 rounded-full flex items-center justify-center border border-transparent bg-white/5 group-hover:border-[#C9A35C]/50 transition-all duration-500 shadow-[0_1px_30px_rgba(0,0,0,0.2),inset_0_1px_rgba(255,255,255,0.3),inset_0_-1px_rgba(255,255,255,0.3)]">
                      <MessageCircle className="text-amber-300" />
                    </div>

                    <h3 className="text-xl text-white font-medium mb-4 tracking-wide font-sans">
                      Whatsapp
                    </h3>
                    <a
                      href="https://wa.me/918098702345"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 text-sm leading-relaxed font-light tracking-wide font-sans"
                    >
                      +91 8098 70 2345
                    </a>
                    <a
                      href="https://wa.me/918098502345"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 text-sm leading-relaxed font-light tracking-wide font-sans"
                    >
                      +91 8098 50 2345
                    </a>
                  </div>

                  <div className="group w-65 h-65 shadow-[0_1px_30px_rgba(0,0,0,0.2),inset_0_1px_rgba(255,255,255,0.3),inset_0_-1px_rgba(255,255,255,0.3)] relative p-8 md:p-10 rounded-3xl bg-[linear-gradient(145deg,rgba(255,255,255,0.03)_0%,rgba(255,255,255,0.005)_100%)] backdrop-blur-sm transition-all duration-500 hover:-translate-y-3 flex flex-col items-center text-center">
                    <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none shadow-[0_0_50px_rgba(201,163,92,0.15),inset_0_0_20px_rgba(201,163,92,0.05)]"></div>

                    <div className="w-15 h-15 mb-4 rounded-full flex items-center justify-center border border-transparent bg-white/5 group-hover:border-[#C9A35C]/50 transition-all duration-500 shadow-[0_1px_30px_rgba(0,0,0,0.2),inset_0_1px_rgba(255,255,255,0.3),inset_0_-1px_rgba(255,255,255,0.3)]">
                      <Mail className="text-amber-300" />
                    </div>

                    <h3 className="text-xl text-white font-medium mb-4 tracking-wide font-sans">
                      E-Mail
                    </h3>
                    <a
                      href="https://mail.google.com/mail/?view=cm&fs=1&to=Info@redinntravels.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 text-sm leading-relaxed font-light tracking-wide font-sans"
                    >
                      Info@redinntravels.com
                    </a>
                  </div>

                  <div className="group w-65 h-65 shadow-[0_1px_30px_rgba(0,0,0,0.2),inset_0_1px_rgba(255,255,255,0.3),inset_0_-1px_rgba(255,255,255,0.3)] relative p-8 md:p-10 rounded-3xl bg-[linear-gradient(145deg,rgba(255,255,255,0.03)_0%,rgba(255,255,255,0.005)_100%)] backdrop-blur-sm transition-all duration-500 hover:-translate-y-3 flex flex-col items-center text-center">
                    <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none shadow-[0_0_50px_rgba(201,163,92,0.15),inset_0_0_20px_rgba(201,163,92,0.05)]"></div>

                    <div className="w-15 h-15 mb-4 rounded-full flex items-center justify-center border border-transparent bg-white/5 group-hover:border-[#C9A35C]/50 transition-all duration-500 shadow-[0_1px_30px_rgba(0,0,0,0.2),inset_0_1px_rgba(255,255,255,0.3),inset_0_-1px_rgba(255,255,255,0.3)]">
                      <Instagram className="text-amber-300" />
                    </div>

                    <h3 className="text-xl text-white font-medium mb-4 tracking-wide font-sans">
                      Instagram
                    </h3>
                    <a
                      href="https://www.instagram.com/redinn_travels?igsh=NmhtNXJka2ljcHUx"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 text-sm leading-relaxed font-light tracking-wide font-sans"
                    >
                      reddin_travels
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* map */}
        {/* <section className="-translate-y-20">
          <Heading title="Where We’re Located" className="mb-3! text-black!" />

          <div className="flex justify-center items-center my-10 rounded-2xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2778.8828526487146!2d78.12773375447937!3d9.939464744955368!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00c598c62fb90d%3A0x55eb753f30a250b!2sIUNOWARE%20PRIVATE%20LIMITED!5e0!3m2!1sen!2sin!4v1765285082215!5m2!1sen!2sin"
              className="rounded-2xl m-5"
              height="450px"
              width="800px"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </section> */}

        <section className="w-full flex flex-col gap-5 justify-center items-center pb-15">
          <div data-aos="fade-down">
            <Heading title="Where We’re Located" />
          </div>
          <p className="text-center px-3" data-aos="fade-down">
            We're easy to reach and here to assist you anytime.
          </p>

          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8 place-items-center mt-5">
            <div
              className="flex justify-center items-center"
              data-aos="fade-right"
            >
              <img
                loading="lazy"
                src="/images/different-3.webp"
                alt="Map boy images"
                className="sm:w-[400px] w-[300px] h-auto"
              />
            </div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1964.9653535425039!2d78.1280295!3d9.9397236!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00c598c62fb90d%3A0x55eb753f30a250b!2sIUNOWARE%20PRIVATE%20LIMITED!5e0!3m2!1sen!2sin!4v1763549365310!5m2!1sen!2sin"
              className="rounded-2xl m-3 h-[450px] md:w-[700px] lg:col-span-2"
              allowFullScreen=""
              loading="lazy"
              data-aos="fade-left"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </section>
      </div>
    </div>
  );
}
