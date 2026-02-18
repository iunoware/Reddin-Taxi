import React from "react";
import { ChevronRight, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const navLinks = [
    { head: "Home", path: "/" },
    { head: "About", path: "/about" },
    { head: "Packages", path: "/packages" },
    { head: "Contact", path: "/contact" },
  ];

  return (
    <footer className="relative bg-[#0D0F14] text-white pt-20 pb-10 overflow-hidden font-sans border-t border-[#C9A35C]/20">
      {/* Background Ambience */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-9xl h-full pointer-events-none">
        <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] bg-[#C9A35C]/5 filter blur-[100px] rounded-full"></div>
        <div className="absolute bottom-[-20%] left-[-10%] w-[400px] h-[400px] bg-blue-900/5 filter blur-[80px] rounded-full"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          {/* Column 1: Brand Info */}
          <div className="space-y-6">
            <div>
              {/* <h2 className="cinzel text-3xl font-bold tracking-wider text-red-600 drop-shadow-sm">
                REDDIN TRAVELS
              </h2> */}
              <Link to="/" className="text-2xl font-bold text-(--c-navy) tracking-tight">
                <img src="/images/logo-w.png" alt="Reddin Taxi" className="h-20 w-auto" />
              </Link>

              <p className="flex gap-3 md:-mx-5 items-center text-gray-400 text-sm mt-3 leading-relaxed tracking-wide">
                <Phone className="h-4" />
                <a
                  href="tel:+918098702345"
                  className="hover:text-white duration-75 transition-all"
                >
                  +91 8098 70 2345{" "}
                </a>
                <a
                  href="tel:+918098502345"
                  className="hover:text-white duration-75 transition-all"
                >
                  +91 8098 50 2345
                </a>
              </p>
            </div>
            <div className="flex md:-mx-5 gap-3 items-center text-gray-400 leading-relaxed tracking-wide ">
              <MapPin size={55} />
              <p className="text-sm ">
                No. 1011, 3rd Floor, Asia Complex, Kamaraj Nagar, Tiruchendur Road, Opp.
                To Tirunelveli Court, Tirunelveli–627002, Tamilnadu, India.
              </p>
            </div>
          </div>
          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6 tracking-wide border-b border-[#C9A35C]/30 pb-2 inline-block">
              Quick Highlights
            </h3>
            <ul className="space-y-3">
              {navLinks.map((link, i) => (
                <li key={i}>
                  <Link
                    to={link.path}
                    className="group flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    <ChevronRight
                      size={14}
                      className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 text-white"
                    />
                    <span className="text-sm font-medium">{link.head}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6 tracking-wide border-b border-[#C9A35C]/30 pb-2 inline-block">
              Our Services
            </h3>
            <ul className="space-y-3">
              {[
                "Airport Pickup & Drop",
                "Outstation Trips",
                "Corporate Travel",
                "City Tours",
                "Group Travel & Events",
              ].map((service) => (
                <li
                  key={service}
                  className="text-gray-400 flex items-start gap-2 text-sm hover:text-white transition-colors duration-300 cursor-pointer"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-[#C9A35C] mt-1.5 opacity-60"></div>
                  <Link to="/packages">{service}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Social Media */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6 tracking-wide border-b border-[#C9A35C]/30 pb-2 inline-block">
              Connect With Us
            </h3>
            <div className="flex flex-col gap-4">
              <SocialLink
                icon={<InstagramIcon />}
                label="Instagram"
                href="https://www.instagram.com/redinn_travels?igsh=NmhtNXJka2ljcHUx"
              />
              <SocialLink icon={<FacebookIcon />} label="Facebook" href="#" />
              <SocialLink
                icon={<WhatsAppIcon />}
                label="WhatsApp"
                href="https://wa.me/918098702345"
              />
              {/* <SocialLink icon={<YouTubeIcon />} label="YouTube" href="#" /> */}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-center gap-4">
          <p className="text-gray-300 text-sm tracking-wider">
            &copy; {currentYear}{" "}
            <a rel="noopener noreferrer" href="https://www.iunoware.com/" target="_blank">
              Iunoware Pvt Ltd
            </a>
            . All rights reserved.
          </p>
          {/* <div className="flex gap-6">
            <a
              href="#"
              className="text-gray-500 text-xs hover:text-[#C9A35C] transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-gray-500 text-xs hover:text-[#C9A35C] transition-colors"
            >
              Terms of Service
            </a>
          </div> */}
        </div>
      </div>
    </footer>
  );
}

// Components for clean code

function SocialLink({ icon, label, href }) {
  return (
    <a
      href={href}
      target="_blank"
      className="flex items-center gap-3 text-white hover:scale-103 group transition-all duration-300"
    >
      <div className="p-2 rounded-lg bg-white/5 backdrop-blur-xs shadow-[0_1px_30px_rgba(0,0,0,0.2),inset_0_1px_rgba(255,255,255,0.3),inset_0_-1px_rgba(255,255,255,0.3)]">
        {icon}
      </div>
      <span className="text-sm font-medium tracking-wide">{label}</span>
      <ChevronRight
        size={14}
        className="opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-2 transition-all duration-300 text-white"
      />
    </a>
  );
}

// SVG Icons (Inline for reliability without extra deps)

function InstagramIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
      <g id="SVGRepo_iconCarrier">
        {" "}
        <path
          d="M17.6 6.31999C16.8669 5.58141 15.9943 4.99596 15.033 4.59767C14.0716 4.19938 13.0406 3.99622 12 3.99999C10.6089 4.00135 9.24248 4.36819 8.03771 5.06377C6.83294 5.75935 5.83208 6.75926 5.13534 7.96335C4.4386 9.16745 4.07046 10.5335 4.06776 11.9246C4.06507 13.3158 4.42793 14.6832 5.12 15.89L4 20L8.2 18.9C9.35975 19.5452 10.6629 19.8891 11.99 19.9C14.0997 19.9001 16.124 19.0668 17.6222 17.5816C19.1205 16.0965 19.9715 14.0796 19.99 11.97C19.983 10.9173 19.7682 9.87634 19.3581 8.9068C18.948 7.93725 18.3505 7.05819 17.6 6.31999ZM12 18.53C10.8177 18.5308 9.65701 18.213 8.64 17.61L8.4 17.46L5.91 18.12L6.57 15.69L6.41 15.44C5.55925 14.0667 5.24174 12.429 5.51762 10.8372C5.7935 9.24545 6.64361 7.81015 7.9069 6.80322C9.1702 5.79628 10.7589 5.28765 12.3721 5.37368C13.9853 5.4597 15.511 6.13441 16.66 7.26999C17.916 8.49818 18.635 10.1735 18.66 11.93C18.6442 13.6859 17.9355 15.3645 16.6882 16.6006C15.441 17.8366 13.756 18.5301 12 18.53ZM15.61 13.59C15.41 13.49 14.44 13.01 14.26 12.95C14.08 12.89 13.94 12.85 13.81 13.05C13.6144 13.3181 13.404 13.5751 13.18 13.82C13.07 13.96 12.95 13.97 12.75 13.82C11.6097 13.3694 10.6597 12.5394 10.06 11.47C9.85 11.12 10.26 11.14 10.64 10.39C10.6681 10.3359 10.6827 10.2759 10.6827 10.215C10.6827 10.1541 10.6681 10.0941 10.64 10.04C10.64 9.93999 10.19 8.95999 10.03 8.56999C9.87 8.17999 9.71 8.23999 9.58 8.22999H9.19C9.08895 8.23154 8.9894 8.25465 8.898 8.29776C8.8066 8.34087 8.72546 8.403 8.66 8.47999C8.43562 8.69817 8.26061 8.96191 8.14676 9.25343C8.03291 9.54495 7.98287 9.85749 8 10.17C8.0627 10.9181 8.34443 11.6311 8.81 12.22C9.6622 13.4958 10.8301 14.5293 12.2 15.22C12.9185 15.6394 13.7535 15.8148 14.58 15.72C14.8552 15.6654 15.1159 15.5535 15.345 15.3915C15.5742 15.2296 15.7667 15.0212 15.91 14.78C16.0428 14.4856 16.0846 14.1583 16.03 13.84C15.94 13.74 15.81 13.69 15.61 13.59Z"
          fill="#fff"
        ></path>{" "}
      </g>
    </svg>
  );
}

// function YouTubeIcon() {
//   return (
//     <svg
//       width="20"
//       height="20"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="1.5"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
//       <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
//     </svg>
//   );
// }
