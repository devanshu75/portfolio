import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  const linkHover = {
    hover: {
      scale: 1.05,
      color: "#ffffff",
      textShadow: "0px 0px 6px rgba(255,255,255,0.7)",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 15,
      },
    },
  };

  return (
    <footer className=" text-white text-center mt-15">
      <div className="footer bg-blue-600 py-10">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          Let’s Collaborate
        </h2>
        <p className="max-w-3xl mx-auto text-sm sm:text-base mb-6">
          Let’s bring your next big idea to life. I’m here to collaborate and
          create something extraordinary—don’t hesitate to get in touch today.
          Whether you have a project in mind or just want to learn more, reach
          out to start the conversation.
        </p>
        <a href="#contact">
          <button className="bg-white text-blue-600 font-semibold px-6 py-2 rounded hover:bg-gray-100 transition cursor-pointer">
            Contact Me →
          </button>
        </a>

        <div className="flex flex-col md:flex-row justify-around items-center mt-10 text-sm font-medium gap-6 flex-wrap w-full">
          {/* Left - Menu Links */}
          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            <motion.a
              href="#home"
              className="text-white"
              variants={linkHover}
              whileHover="hover"
            >
              Home
            </motion.a>
            <motion.a
              href="#aboutme"
              className="text-white"
              variants={linkHover}
              whileHover="hover"
            >
              About me
            </motion.a>
            <motion.a
              href="#projects"
              className="text-white"
              variants={linkHover}
              whileHover="hover"
            >
              Projects
            </motion.a>
            <motion.a
              href="#blog"
              className="text-white"
              variants={linkHover}
              whileHover="hover"
            >
              Blog
            </motion.a>
          </div>

          {/* Right - Social Links */}
          <div className="flex flex-wrap justify-center md:justify-end gap-4">
            <motion.a
              href="#facebook"
              className="text-white"
              variants={linkHover}
              whileHover="hover"
            >
              Facebook
            </motion.a>
            <motion.a
              href="#instagram"
              className="text-white"
              variants={linkHover}
              whileHover="hover"
            >
              Instagram
            </motion.a>
            <motion.a
              href="#linkedin"
              className="text-white"
              variants={linkHover}
              whileHover="hover"
            >
              LinkedIn
            </motion.a>
          </div>
        </div>
      </div>

      <div className="bg-white text-black text-xs py-2 w-full">
        <p className="text-center">
          Copyright © <span className="font-semibold">@Davanshu Rana</span>. All
          Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
