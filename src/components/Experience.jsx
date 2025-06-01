import React from "react";
import { motion } from "framer-motion";

// Animation Variants
const slideFromLeft = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const slideFromRight = {
  hidden: { opacity: 0, x: 100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const TimelineItem = ({
  number,
  title,
  company,
  duration,
  description,
  reverse,
}) => {
  const animationVariant = reverse ? slideFromRight : slideFromLeft;

  return (
    <motion.div
      className={`mb-10 flex flex-col ${
        reverse ? "sm:flex-row-reverse" : "sm:flex-row"
      } items-start sm:justify-between w-full relative`}
      variants={animationVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* Number Bubble */}
      <div
        className="z-20 flex items-center justify-center bg-blue-600 text-white shadow-xl w-8 h-8 rounded-full font-semibold text-center 
                absolute left-5 transform -translate-x-1/2 sm:left-1/2"
      >
        <span>{number}</span>
      </div>

      <div
        className={`ml-14 sm:ml-0 sm:w-5/12 ${
          reverse ? "" : "sm:order-1"
        } bg-white rounded-lg shadow-xl px-6 py-4`}
      >
        <h3 className="font-bold text-xl text-gray-800">{title}</h3>
        <h4 className="text-gray-600 mb-2">
          {company} | {duration}
        </h4>
        <p className="text-sm text-gray-700">{description}</p>
      </div>
    </motion.div>
  );
};

const Experience = () => {
  return (
    <div
      className="container bg-gray-100 mx-auto w-full h-full py-10 mt-5"
      id="experiences"
    >
      <h2 className="text-3xl font-bold text-center mb-10">Experience</h2>

      <div className="relative wrap overflow-hidden px-4 sm:px-10 h-full">
        {/* Vertical Line */}
        <div className="absolute left-5 sm:left-1/2 transform sm:-translate-x-1/2 border-l-4 border-gray-300 h-full"></div>

        <TimelineItem
          number="1"
          title="UI Engineer"
          company="INNsight Interactive pvt ltd"
          duration="Oct 2023 - Apr 2025"
          description="Worked as a UI Engineer converting Figma designs into responsive, accessible web pages using HTML, CSS, Bootstrap, and jQuery. Focused on performance, cross-browser compatibility, and user experience. Currently learning React.js to enhance frontend skills."
          reverse={false}
        />
        <TimelineItem
          number="2"
          title="Freelance Web Developer"
          company="self-employed"
          duration="September 2021 - September 2023"
          description="Interacted directly with clients to gather requirements, provide updates, and ensure expectations were met. Delivered high-quality, responsive websites on time while maintaining design accuracy and performance standards."
          reverse={true}
        />
        <TimelineItem
          number="3"
          title="Web Developer - Internship"
          company="Xsyser Infosystem pvt ltd"
          duration="May 2021- September 2021"
          description="I learned to modernize frontend architecture using HTML5, CSS3, and JavaScript, improve website performance, and work closely with clients and teams to deliver projects that meet expectations."
          reverse={false}
        />
      </div>
    </div>
  );
};

export default Experience;
