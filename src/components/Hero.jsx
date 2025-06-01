import React from "react";
import ProfilePic from "../assets/profile-pic.jpg";

const Hero = () => {
  return (
    <section className="flex flex-col md:flex-row justify-between items-center p-8 md:p-16" id="home">
      <div>
        <h1 className="text-4xl md:text-[3.5rem] lg:text-[5rem] font-bold">
          Hello
          <span role="img" aria-label="wave" className="animate-wave">
            👋
          </span>
          <br />I am <span className="text-blue-500">Devanshu Rana</span>
        </h1>
        <p className="text-lg text-gray-600">
          Frontend Developer | UI Engineer
        </p>
        <a
          href="src/assets/Devanshu-UI-Developer.pdf"
          className="inline-block my-2 px-4 py-2 bg-blue-500 text-white shadow rounded"
          target="_blank"
        >
          Resume
        </a>
      </div>
      <div
        className="mt-8 md:mt-0 w-full max-w-sm aspect-square 
             overflow-hidden flex items-center justify-center 
             bg-[linear-gradient(135deg,#38bdf8,#6366f1)] 
             animate-[morph_8s_ease-in-out_infinite] rounded-full"
      >
        <img
          src={ProfilePic}
          alt="Profile Picture"
        />
      </div>
    </section>
  );
};

export default Hero;
