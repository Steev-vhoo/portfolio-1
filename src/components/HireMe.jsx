import React from "react";
import MainImage from "../assets/me.jpg";
import { BsArrowRight } from "react-icons/bs";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
  FaGlobe,
} from "react-icons/fa";

const HireMe = () => {
  return (
    <div className="bg-gradient-to-b from-[#273b1a] to-[#3b4c26] h-full relative">
      <div className="px-3 pt-20 lg:flex items-end justify-between gap-8 container mx-auto">
        <div className="lg:w-2/3">
          <p className="text-[#c0d6bb] lg:text-2xl text-xl uppercase text-center">
            Hire me
          </p>
          <span className="flex pb-8 pt-4">
            <h1 className="bg-gradient-to-r from-[#bcffa4] to-[#f49872] text-transparent bg-clip-text lg:text-[3rem] leading-normal text-2xl">
              Stay Chill and Tell Your Plan
            </h1>
          </span>
        </div>
      </div>

      {/* Contact Information Section */}
      <div className="px-3 py-10 lg:flex items-center justify-between gap-8 container mx-auto text-[#c0d6bb]">
        <div className="w-1/3">
          <img src={MainImage} alt="" className="h-[106%] mt-8 w-full mb-6" />
        </div>
        <div className="lg:w-1/3">
          <h2 className="lg:text-3xl text-2xl mb-6 ">Contact Information</h2>
          <ul className="text-lg space-y-4">
            <li className="flex items-center">
              <FaEnvelope className="text-[#ff8267] mr-4" />
              <a
                href="mailto:your.email@example.com"
                className="hover:text-[#ff8267] transition-colors duration-300"
              >
                Osteevvhoo@gmail
              </a>
            </li>
            <li className="flex items-center">
              <FaPhone className="text-[#ff8267] mr-4" />
              <span>+233 559196426</span>
            </li>
            <li className="flex items-center">
              <FaMapMarkerAlt className="text-[#ff8267] mr-4" />
              <span>Accra, Ghana</span>
            </li>
            <li className="flex items-center">
              <FaGlobe className="text-[#ff8267] mr-4" />
              <a
                href="https://yourwebsite.com"
                className="hover:text-[#ff8267] transition-colors duration-300"
              >
                https://lastreetsagesteev.wordpress.com/
              </a>
            </li>
            <li className="flex items-center">
              <FaLinkedin className="text-[#ff8267] mr-4" />
              <a
                href="https://www.linkedin.com/in/stephen-owusu-boakye-ankrah-76944b158/"
                className="hover:text-[#ff8267] transition-colors duration-300"
              >
                LinkedIn Profile
              </a>
            </li>
            <li className="flex items-center">
              <FaGithub className="text-[#ff8267] mr-4" />
              <a
                href="https://github.com/Steev-vhoo"
                className="hover:text-[#ff8267] transition-colors duration-300"
              >
                GitHub Profile
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HireMe;
