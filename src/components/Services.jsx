import React from "react";
import { FaNodeJs, FaPython } from "react-icons/fa";
import { SiMongodb, SiExpress } from "react-icons/si";
import { useInView } from "react-intersection-observer";
import "../App.css";

const Services = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Triggers only once when the element comes into view
    threshold: 0.2, // 20% of the element must be visible to trigger
  });

  return (
    <div className="bg-gradient-to-b from-[#273b1a] to-[#3b4c26]">
      <div className="container mx-auto px-3 pt-20" ref={ref}>
        <div className="lg:flex items-center justify-between gap-x-40">
          <span
            className={`lg:w-1/2 ${inView ? "animate-inView" : "opacity-0"}`}
          >
            <h1 className="bg-gradient-to-r from-[#bcffa4] to-[#f29b73] text-transparent bg-clip-text lg:text-[3rem] leading-normal text-2xl text-center">
              My Skill Set & Expertise
            </h1>
          </span>
          <div className="lg:w-60 w-20 lg:h-60 h-20 rounded-[560px] rounded-r-none border border-r-0 border-[#4c613e] opacity-40 lg:static absolute top"></div>
        </div>
        <section className="grid lg:grid-cols-4 grid-cols-1 gap-8">
          <div
            className={`pt-8 flex items-center flex-col pb-12 px-6 hover:bg-[#1c2f13] hover:border-b-4 hover:border-[#ff8267] transition duration-300 transform hover:scale-105 ${
              inView ? "animate-appear-delay1" : "opacity-0"
            }`}
          >
            <SiMongodb size={90} className="text-4xl text-white mb-4 " />
            <h1 className="text-white text-2xl mb-">MongoDB</h1>
            <p className="text-[#93a98b] mb-6 text-center">
              Experience in using MongoDB for database management and NoSQL data
              storage.
            </p>
          </div>

          <div
            className={`pt-8 pb-12 px-6 flex items-center flex-col hover:bg-[#1c2f13] hover:border-b-4 hover:border-[#ff8267] transition duration-300 transform hover:scale-105 ${
              inView ? "animate-appear-delay2" : "opacity-0"
            }`}
          >
            <SiExpress size={90} className="text-4xl text-white mb-4 " />
            <h1 className="text-white text-2xl mb-">Express.js</h1>
            <p className="text-[#93a98b] mb-6 text-center">
              Proficient in building web applications and APIs using Express.js.
            </p>
          </div>

          <div
            className={`pt-8 pb-12 px-6 flex items-center flex-col hover:bg-[#1c2f13] hover:border-b-4 hover:border-[#ff8267] transition duration-300 transform hover:scale-105 ${
              inView ? "animate-appear-delay3" : "opacity-0"
            }`}
          >
            <FaNodeJs size={90} className="text-4xl text-white mb-4 " />
            <h1 className="text-white text-2xl mb-">Node.js</h1>
            <p className="text-[#93a98b] mb-6 text-center">
              Developed backend services and real-time applications using
              Node.js.
            </p>
          </div>

          <div
            className={`pt-8 pb-12 px-6 flex items-center flex-col hover:bg-[#1c2f13] hover:border-b-4 hover:border-[#ff8267] transition duration-300 transform hover:scale-105 ${
              inView ? "animate-appear-delay4" : "opacity-0"
            }`}
          >
            <FaPython size={90} className="text-4xl text-white mb-4 " />
            <h1 className="text-white text-2xl mb-">Python</h1>
            <p className="text-[#93a98b] mb-6 text-center">
              Skilled in Python programming for automation, data analysis, and
              web development.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Services;
