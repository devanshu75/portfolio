import React from "react";

const AboutMe = () => {
  return (
    <div className="container text-center px-4" id="aboutme">
      <h1 className="text-size font-semibold mb-3">About Me</h1>
      <p className="w-full lg:w-[70%] mx-auto text-base">
        Hello! I’m <strong>Devanshu Rana</strong>, a UI/UX designer passionate
        about creating digital experiences that blend beauty with functionality.
        Over the years, I’ve worked with a variety of clients, from start-ups to
        established brands, helping them bring their ideas to life through
        thoughtful, user-centred design.
      </p>

      <p className="w-full lg:w-[70%] mx-auto text-base mt-4">
        My expertise lies in turning complex concepts into intuitive and
        visually compelling solutions. Whether it’s crafting wireframes,
        building interactive prototypes, or designing complete user interfaces,
        I approach every project with a commitment to delivering exceptional
        results tailored to your needs.
      </p>
    </div>
  );
};

export default AboutMe;
