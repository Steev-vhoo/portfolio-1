import React, { useEffect } from "react";
import "./Header.css";
import "../../App.css";
import CTA from "./CTA";
import HeaderSocials from "./HeaderSocials";
import Me from "../../assets/me.jpg";

const Header = () => {
  useEffect(() => {
    const cta = document.querySelector(".cta");
    const text = document.querySelector(".slide-in");

    if (cta) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            cta.classList.add("visible");
          }
        },
        { threshold: 0.5 }
      );

      observer.observe(cta);

      return () => observer.disconnect();
    }

    if (text) {
      text.innerHTML = text.textContent
        .split("")
        .map((char, i) => <span style="--i: ${i};">${char}</span>)
        .join("");
    }
  }, []); // Check if you need dependencies here

  return (
    <header className="relative bg-gradient-to-r from-[#273b1a] to-[#3b4c26] flex justify-between items-center p-8">
      <div className="header__container bg-gradient-to-r from-[#273b1a] to-[#3b4c26] flex justify-between items-center p-8">
        <div className="w-1/3 ml-8">
          <img
            src={Me}
            alt="me"
            className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="text-left">
          <h5 className="text-[#c3d9bd] text-lg md:text-2xl mb-2 hover:underline transition-all">
            Hello I'm
          </h5>
          <h1 className="fade-in-scale text-[#c3d9bd] text-2xl md:text-4xl font-bold mb-2 hover:text-[#ffcc00] transition-all duration-300">
            Steve Owusu Boakye Ankrah
          </h1>
          <h5 className="text-[#c3d9bd] text-lg md:text-2xl mb-6">
            Junior Backend Developer
          </h5>
          <div className="flex space-x-4">
            <CTA />
          </div>
        </div>

        <HeaderSocials />
        <a href="#Contact" className="scroll__down text-white mt-8">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
