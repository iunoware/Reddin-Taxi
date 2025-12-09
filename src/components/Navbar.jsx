/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
// /* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Link } from "react-router-dom";
// import { useGSAP } from "@gsap/react";
// import gsap from "gsap";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  // const wordRef = useRef([]);

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 20);
      setIsOpen(isScrolled);
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Packages", href: "/packages" },
    { name: "Contact", href: "/contact" },
  ];

  // function handleEnter(i) {
  //   // useGSAP(() => {
  //   gsap.to(wordRef.current[i], {
  //     y: "-100%",
  //     duration: 0.2,
  //     ease: "power2.out",
  //   });
  //   // }, []);
  // }

  // function handleLeave(i) {
  //   gsap.to(wordRef.current[i], {
  //     y: "0%",
  //     duration: 0.2,
  //     ease: "power2.out",
  //   });
  // }

  return (
    <div className="flex justify-center items-start">
      <nav
        className={`fixed w-[94%] sm:w-[96%] md:w-[97.5%] z-50 m-3 rounded-full transition-all duration-700 ${
          isScrolled
            ? "sm:w-[70%] md:w-[70%] lg:w-[70%] bg-black/40 backdrop-blur-md py-2 shadow-[0_1px_30px_rgba(0,0,0,0.2),inset_0_1px_rgba(255,255,255,0.3),inset_0_-1px_rgba(255,255,255,0.3)]"
            : "bg-transparent py-4"
        }`}
      >
        <div className=" px-6 flex justify-between items-center">
          {/* Logo */}
          <Link
            to="/"
            className="text-2xl font-bold text-(--c-navy) tracking-tight"
          >
            <img
              src="/images/logo-w.png"
              alt="Reddin Taxi"
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex h-6 mt-1.5 overflow-hidden items-center space-x-8">
            {navLinks.map((link, i) => (
              <Link
                key={link.name}
                to={link.href}
                // ref={(e) => (wordRef.current[i] = e)}
                // onMouseEnter={() => handleEnter(i)}
                // onMouseLeave={() => handleLeave(i)}
                className="text-white/90 text-lg flex flex-col translate-y-2 hover:-translate-y-5 duration-400 transition-all font-medium"
              >
                <span>{link.name}</span>
                <span>{link.name}</span>
              </Link>
            ))}
            {/* <a
              href="tel:+919876543210"
              className="bg-(--c-navy) text-white px-6 py-2.5 rounded-full font-medium hover:bg-opacity-90 transition-all flex items-center gap-2"
            >
              <Phone size={18} />
              Call Taxi
            </a> */}
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`${
              isScrolled ? "pointer-events-auto" : "pointer-events-none"
            } md:hidden text-(--c-navy)`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X
                size={28}
                className={`text-white text-lg transition-all duration-500 ${
                  isScrolled ? "opacity-100" : "opacity-0"
                }`}
              />
            ) : (
              <Menu
                size={28}
                className={`text-white text-lg transition-all duration-700 ${
                  isScrolled ? "opacity-100" : "opacity-0"
                }`}
              />
            )}
          </button>
        </div>
      </nav>

      <nav className="fixed w-[94%] sm:w-[96%] md:w-[97.5%] lg:w-[98.5%] z-40 m-3 rounded-2xl transition-all duration-300">
        {/* Mobile Menu */}
        {/* {isOpen && ( */}
        <div
          className={`${
            isOpen ? "translate-y-0" : "-translate-y-80"
          } transition-all duration-400 md:hidden absolute top-22 left-0 w-full rounded-3xl bg-black/40 text-white backdrop-blur-md shadow-[0_1px_30px_rgba(0,0,0,0.2),inset_0_1px_rgba(255,255,255,0.3),inset_0_-1px_rgba(255,255,255,0.3)] py-6 px-6 flex flex-col space-y-4`}
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-(--c-navy) text-lg font-medium "
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          {/* <a
              href="tel:+919876543210"
              className="bg-(--c-yellow) text-(--c-navy) px-6 py-3 rounded-lg font-bold text-center"
            >
              Call Now
            </a> */}
        </div>
        {/* )} */}
      </nav>
    </div>
  );
}
