import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
          As a Frontend Developer, I specialize in crafting engaging user
          interfaces using technologies like JavaScript, Node.js, React.js, and
          MongoDB. My project portfolio showcases applications built with these
          tools, demonstrating my proficiency in creating dynamic and responsive
          web experiences.
        </p>

        <br />

        <p className="text-xl">
          I am committed to staying abreast of industry trends and continuously
          expanding my knowledge in frontend development. With a keen eye for
          design and a passion for delivering seamless user interactions, I
          thrive in collaborative environments where I can leverage my skills to
          bring innovative ideas to life.
        </p>
      </div>
    </div>
  );
};

export default About;
