import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";

import moviesearch from "../assets/moviesearch.png";
import todotask from "../assets/todotask.png";
import ecommerce from "../assets/ecommerce.png";

const Project = () => {
  return (
    <div className="container mx-auto px-4 py-12" id="projects">
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 flex items-center justify-center gap-2">
        Projects
        <motion.span
          animate={{ y: [0, -6, 0] }}
          transition={{
            duration: 1.2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          🚀
        </motion.span>
      </h2>

      <div className="p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white/10 backdrop-blur-md border border-gray-200 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
            <div className="overflow-hidden">
              <img
                className="w-full object-cover transform hover:scale-105 transition-transform duration-300"
                src={moviesearch}
                alt="Movie Search"
              />
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                Movie Search
              </h2>
              <p className="text-gray-600 text-sm mb-4">
                A React app to search for movies using the OMDB API.
              </p>
              <div className="flex gap-2 mb-4">
                <span className="bg-gray-200 text-gray-800 text-xs font-semibold px-3 py-1 rounded-full">
                  React
                </span>
                <span className="bg-gray-200 text-gray-800 text-xs font-semibold px-3 py-1 rounded-full">
                  TMDB API
                </span>
                <span className="bg-gray-200 text-gray-800 text-xs font-semibold px-3 py-1 rounded-full">
                  TailwindCSS
                </span>
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/devanshu75/react-movie"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-lg text-sm hover:bg-gray-700 transition"
                >
                  <FaGithub />
                  GitHub
                </a>
                <a
                  href="https://willowy-cocada-118f5d.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-500 transition group"
                >
                  Live Demo
                  <FaArrowRightLong className="transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </div>

          {/* Card 2 (copy-paste and customize as needed) */}
          <div className="bg-white/10 backdrop-blur-md border border-gray-200 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
            <div className="overflow-hidden">
              <img
                className="w-fullobject-cover transform hover:scale-105 transition-transform duration-300"
                src={todotask}
                alt="Movie Search"
              />
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                Todo App
              </h2>
              <p className="text-gray-600 text-sm mb-4">
                A React app to search for movies using the OMDB API.
              </p>
              <div className="flex gap-2 mb-4">
                <span className="bg-gray-200 text-gray-800 text-xs font-semibold px-3 py-1 rounded-full">
                  React
                </span>
                <span className="bg-gray-200 text-gray-800 text-xs font-semibold px-3 py-1 rounded-full">
                  LocalStorage
                </span>
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/devanshu75/react-crud-operation"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-lg text-sm hover:bg-gray-700 transition"
                >
                  <FaGithub />
                  GitHub
                </a>
                <a
                  href="https://elegant-alpaca-93acaa.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-500 transition group"
                >
                  Live Demo
                  <FaArrowRightLong className="transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </div>

          {/* Card 3 (repeat again if needed) */}
          <div className="bg-white/10 backdrop-blur-md border border-gray-200 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
            <div className="overflow-hidden">
              <img
                className="w-full object-cover transform hover:scale-105 transition-transform duration-300"
                src={ecommerce}
                alt="Movie Search"
              />
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                Movie Search
              </h2>
              <p className="text-gray-600 text-sm mb-4">
                A React app to search for movies using the OMDB API.
              </p>
              <div className="flex gap-2 mb-4">
                <span className="bg-gray-200 text-gray-800 text-xs font-semibold px-3 py-1 rounded-full">
                  React
                </span>
                <span className="bg-gray-200 text-gray-800 text-xs font-semibold px-3 py-1 rounded-full">
                  Tailwind
                </span>
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/devanshu75/react-movie"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-lg text-sm hover:bg-gray-700 transition"
                >
                  <FaGithub />
                  GitHub
                </a>
                <a
                  href="https://rococo-donut-b24a2d.netlify.app/state"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-500 transition group"
                >
                  Live Demo
                  <FaArrowRightLong className="transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
