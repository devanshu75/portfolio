import React from "react";
import { motion } from "framer-motion";
import { LuPhone } from "react-icons/lu";
import { MdOutlineEmail } from "react-icons/md";

const Contact = () => {
  return (
    <section
      className="flex flex-col lg:flex-row min-h-screen w-full bg-gray-100"
      id="contact"
    >
      {/* Left Form Section */}
      <div className="bg-white w-full lg:w-1/2 p-10 lg:p-20 flex flex-col justify-center">
        <h2 className="text-5xl font-extrabold leading-tight mb-2">
          <span className="text-transparent stroke-black">Say</span>
          <br />
          <span className="text-black">HELLO</span>
        </h2>
        <p className="text-lg font-semibold mb-6">Tell us about your project</p>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full border-b border-gray-300 focus:outline-none py-2 bg-transparent required"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="w-full border-b border-gray-300 focus:outline-none py-2 bg-transparent required"
          />
          <input
            type="text"
            placeholder="Mobile Number"
            className="w-full border-b border-gray-300 focus:outline-none py-2 bg-transparent required"
          />
          <textarea
            placeholder="Message"
            rows="4"
            className="w-full border-b border-gray-300 focus:outline-none py-2 bg-transparent required"
          ></textarea>
          <button
            type="submit"
            className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-700 transition-all"
          >
            SUBMIT
          </button>
        </form>
      </div>

      {/* Right Info Section */}
      <div className="bg-black text-white w-full lg:w-1/2 flex items-center justify-center py-10 lg:py-0">
        <div className="flex flex-col lg:flex-row gap-16 text-center">
          {/* Phone */}
          <div className="flex flex-col items-center">
            <motion.div
              className="bg-gray-800 p-4 rounded-full mb-2"
              initial={{ scale: 0, rotate: -90 }}
              animate={{ scale: 1, rotate: 0 }}
              whileHover={{ scale: 1.2, rotate: 10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <LuPhone />
            </motion.div>
            <a href="tel:+918806408608" className="text-lg font-medium mt-1">
              +91 8806408608
            </a>
          </div>

          {/* Email */}
          <div className="flex flex-col items-center">
            <motion.div
              className="bg-gray-800 p-4 rounded-full mb-2"
              initial={{ scale: 0, rotate: -90 }}
              animate={{ scale: 1, rotate: 0 }}
              whileHover={{ scale: 1.2, rotate: 10 }}
              transition={{ type: "spring", stiffness: 300, delay: 0.2 }}
            >
              <MdOutlineEmail />
            </motion.div>
            <a
              href="mailto:devanshurana75@gmail.com"
              className="text-lg font-medium mt-1"
            >
              devanshurana75@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
