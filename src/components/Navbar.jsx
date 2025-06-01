import React, { useState } from "react";

import ResponsiveMenu from "./ResponsiveMenu";

import logo from "../assets/logo.svg";

import { NavbarMenu } from "../mockData/data";

import { motion } from "framer-motion";

import { MdMenu } from "react-icons/md";
import { FaLongArrowAltRight } from "react-icons/fa";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="bg-blue-400">
        <div className="container:md flex justify-between items-center px-5 py-3">
          {/*Logo Section*/}
          <div className="logo">
            <img
              src={logo}
              alt="Brand logo"
              className="w-35 sm:w-28 md:w-32 lg:w-50 object-contain"
            />
          </div>

          {/*Menu Section*/}
          <div className="hidden lg:block">
            <ul className="flex items-center gap-6">
              {NavbarMenu.map((item) => (
                <motion.li
                  key={item.id}
                  className="relative"
                  whileHover="hover"
                  initial="rest"
                  animate="rest"
                >
                  <motion.a
                    href={item.link}
                    className="inline-block py-1 px-3 font-semibold text-white"
                    variants={{
                      rest: { color: "#ffffff" },
                      hover: { color: "#ffffff" },
                    }}
                  >
                    {item.title}
                    <motion.span
                      className="absolute left-0 bottom-0 w-full h-[2px] bg-white origin-left"
                      variants={{
                        rest: { scaleX: 0 },
                        hover: { scaleX: 1 },
                      }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      style={{ transformOrigin: "left" }}
                    />
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </div>

          {/*Icons Section*/}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-4">
              <a href="#contact" className="hidden lg:flex ">
                <button
                  className="bg-white text-blue-400 font-semibold px-6 py-2
    duration-200 flex items-center gap-2
    whitespace-nowrap text-sm sm:text-base cursor-pointer rounded"
                >
                  Contact Me
                  <motion.span
                    className="inline-block"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <FaLongArrowAltRight />
                  </motion.span>
                </button>
              </a>
            </div>
          </div>

          {/* mobile hamburger Menu Section */}
          <div className="lg:hidden" onClick={() => setOpen(!open)}>
            <MdMenu className="text-4xl text-white" />
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar section */}
      <ResponsiveMenu open={open} setOpen={setOpen} />
    </>
  );
};

export default Navbar;
