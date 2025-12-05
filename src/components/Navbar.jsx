/* eslint-disable react-hooks/exhaustive-deps */
// /* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Link } from "react-router-dom";
// import gsap from "gsap";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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

  return (
    // <nav
    //   className={`fixed w-full z-50 m-3 rounded-full transition-all duration-300 ${
    //     isScrolled
    //       ? "bg-white/1 backdrop-blur-xs shadow-[0_8px_32px_rgba(0,0,0,0.1),inset_0_1px_0_rgba(255,255,255,0.5),inset_0_-1px_0_rgba(255,255,255,0.1),inset_0_0_6px_3px_rgba(255,255,255,0.3)] py-4"
    //       : "bg-transparent py-6"
    //   }`}
    // >
    <>
      <nav
        className={`fixed w-[94%] sm:w-[96%] md:w-[97.5%] lg:w-[98.5%] z-50 m-3 rounded-full transition-all duration-300 ${
          isScrolled
            ? "bg-white/1 backdrop-blur-md py-3 shadow-[0_8px_24px_rgba(0,0,0,0.15),inset_0_0.5px_5px_rgba(255,255,255,0.4)]"
            : "bg-transparent py-4"
        }`}
      >
        <div className=" px-6 flex justify-between items-center">
          {/* Logo */}
          <a
            href="#"
            className="text-2xl font-bold text-(--c-navy) tracking-tight"
          >
            {/* Sabari<span className="text-(--c-yellow)">Taxi</span> */}
            <img
              src="/images/logo.png"
              alt="Reddin Taxi"
              className="h-12 w-auto"
            />
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="text-gray-200 hover:text-white transition-colors font-medium"
              >
                {link.name}
              </Link>
            ))}
            <a
              href="tel:+919677511942"
              className="bg-(--c-navy) text-white px-6 py-2.5 rounded-full font-medium hover:bg-opacity-90 transition-all flex items-center gap-2"
            >
              <Phone size={18} />
              Call Taxi
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-(--c-navy)"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 w-full rounded-2xl text-white bg-white/1 backdrop-blur-sm shadow-[0_8px_24px_rgba(0,0,0,0.15),inset_0_0.5px_5px_rgba(255,255,255,0.4)] py-6 px-6 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-(--c-navy) text-lg font-medium"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="tel:+919677511942"
              className="bg-(--c-yellow) text-(--c-navy) px-6 py-3 rounded-lg font-bold text-center"
            >
              Call Now
            </a>
          </div>
        )}
      </nav>
    </>
  );
}
