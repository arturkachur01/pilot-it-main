import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image"; 
import AOS from "aos";
import "aos/dist/aos.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from "../components/Navbar";
import ContactForm from "../components/ContactForm";
import Main from "../components/Main";
import PartnerLogos from "../components/PartnerLogos";
import Services from "../components/Services";
import CaseStudies from "../components/CaseStudies";

const UI_Main: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const checkScrollTop = () => {
      if (!showScrollTop && window.scrollY > window.innerHeight * 0.6) {
        setShowScrollTop(true);
      } else if (showScrollTop && window.scrollY <= window.innerHeight * 0.6) {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", checkScrollTop);
    return () => window.removeEventListener("scroll", checkScrollTop);
  }, [showScrollTop]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      setHasScrolled(scrollTop > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 500,
      once: true,
    });
  }, []);

  return (
    <div
      className="flex min-h-screen flex-col font-sans"
      style={{
        background: "linear-gradient(to right, #FAFAFA, #ebd0f2)",
      }}
    >
      <Navbar />
      <Main />
      <PartnerLogos />
      <Services />
      <CaseStudies />
      <ContactForm />

      {showScrollTop && (
        <div
          style={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            cursor: "pointer",
          }}
          className="fixed bottom-5 right-5 transform cursor-pointer rounded-full transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-110 active:bg-purple-300 active:shadow-lg"
          onClick={scrollTop}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            fill="#8053ff"
            className="bi bi-arrow-up-circle"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z"
            />
          </svg>
        </div>
      )}
    </div>
  );
};

export default UI_Main;
