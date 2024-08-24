import React from "react";
import { FaHtml5, FaCss3, FaJsSquare, FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { Link, useNavigate } from "react-router-dom";

const Portfolio = () => {
  // const navigate = useNavigate();

  return (
    <div className="bg-gradient-to-r from-[#273b1a] to-[#3b4c26] py-20">
      <div className=" lg:flex flex-col items-center justify-between gap-x-40">
        <h2 className="bg-gradient-to-r from-[#bcffa4] to-[#f29b73] text-transparent bg-clip-text lg:text-[3rem] leading-normal text-2xl text-center">
          Selected Projects
        </h2>

        <div className="container mx-auto px-3">
          <section class="py-12" id="interactive-demos">
            <div class="container mx-auto px-6">
              <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <div class="bg-white rounded-lg shadow-lg overflow-hidden">
                  <div class="relative">
                    <img src="" alt="Demo 1" class="w-full h-48 object-cover" />
                    <button
                      onClick={() => navigate("/crepus")}
                      class="absolute inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 text-white text-xl font-semibold opacity-0 hover:opacity-100 transition-opacity duration-300"
                    >
                      View Demo
                    </button>
                  </div>
                  <div class="p-6 flex flex-col items-center justify-center">
                    <Link to="/crepus" class="text-xl font-semibold mb-2">
                      Crepus et belle
                    </Link>
                    <p class="text-gray-600">
                      Crepus et belle, french for kinky and beatiful was built
                      for a natural hair salon that promotes natural hair
                      growth. It is a static website built with HTML and CSS
                    </p>
                  </div>
                </div>
                <div class="bg-white rounded-lg shadow-lg overflow-hidden">
                  <div class="relative">
                    <img
                      src="path/to/your-image2.jpg"
                      alt="Demo 2"
                      class="w-full h-48 object-cover"
                    />
                    <button class="absolute inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 text-white text-xl font-semibold opacity-0 hover:opacity-100 transition-opacity duration-300">
                      View Demo
                    </button>
                  </div>
                  <div class="p-6 flex flex-col items-center justify-center">
                    <Link to="" class="text-xl font-semibold mb-2">
                      Hot chops
                    </Link>
                    <p class="text-gray-600">
                      Hot chops was built for a restaurant where users can view
                      their menu and book appointments for their next dinner. It
                      was built with HTML, CSS and JavaScript
                    </p>
                  </div>
                </div>
                <div class="bg-white rounded-lg shadow-lg overflow-hidden">
                  <div class="relative">
                    <img
                      src="path/to/your-image2.jpg"
                      alt="Demo 2"
                      class="w-full h-48 object-cover"
                    />
                    <button
                      onClick={() => navigate("/bloom")}
                      class="absolute inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 text-white text-xl font-semibold opacity-0 hover:opacity-100 transition-opacity duration-300"
                    >
                      View Demo
                    </button>
                  </div>
                  <div class="p-6 flex flex-col items-center justify-center">
                    <Link to="/bloom" class="text-xl font-semibold mb-2">
                      Bloom and balance
                    </Link>
                    <p class="text-gray-600">
                      Brief description of Demo 2. This is a small overview of
                      what the demo entails.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;

{
  /* <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <img
                src={project.thumbnail}
                alt={project.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">{project.name}</h3>
                <p className="text-gray-700 mb-4">{project.description}</p>
                <div className="flex space-x-2 mb-4">
                  {project.techStack.map((icon, i) => (
                    <span key={i} className="text-2xl">
                      {icon}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </section> */
}
