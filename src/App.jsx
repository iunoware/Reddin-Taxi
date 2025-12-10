import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Packages from "./pages/Packages";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer";
import Enquiry from "./components/Enquiry";
import Popup from "./components/Popup";
import AOS from "aos";
import "aos/dist/aos.css";

// gsap scroll smoother
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { ScrollSmoother } from "gsap/ScrollSmoother";
// import { useGSAP } from "@gsap/react";

// gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

function App() {
  useEffect(() => {
    AOS.init({
      once: false,
      mirror: true,
      easing: "ease-in-out",
      duration: 500,
    });
  }, []);

  // useGSAP(() => {
  //   ScrollSmoother.create({
  //     wrapper: "#smoothWrapper",
  //     content: "#smoothContainer",
  //     smooth: 1,
  //     effects: true,
  //   });
  // }, []);

  return (
    <Router>
      <Popup />
      <ScrollToTop />
      <Navbar />
      <Enquiry />
      <div id="smoothWrapper">
        <div id="smoothContainer">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/packages" element={<Packages />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
