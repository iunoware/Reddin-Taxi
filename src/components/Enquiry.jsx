import { Phone } from "lucide-react";
import React, { useState, useEffect } from "react";

export default function Enquiry() {
  const [reached, setReached] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function handleScroll() {
      window.scrollY > 250 ? setVisible(true) : setVisible(false);
      window.scrollY < 250 ? setVisible(false) : setVisible(true);
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* {visible ? ( */}
      <a
        href="tel:+918098702345"
        className={`fixed z-40 bottom-10 ${
          visible ? "right-10" : "-right-20"
        }  transition-all  duration-200 group rounded-full text-white bg-black/50 backdrop-blur-md py-2 shadow-[0_1px_30px_rgba(0,0,0,0.2),inset_0_1px_rgba(255,255,255,0.3),inset_0_-1px_rgba(255,255,255,0.3)]`}
      >
        <Phone className="h-8 w-11 m-2 transition-all  duration-200 group-active:scale-95 group-hover:scale-108 group-hover:text-yellow-400" />
      </a>
      {/* ) : (
        ""
      )} */}
    </>
  );
}
