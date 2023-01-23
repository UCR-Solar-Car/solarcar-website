import React from "react";

const AboutParagraph = () => {
  return (
    <div className="flex flex-col items-center">
      <p className="text-center text-3xl font-raleway w-10/12 my-20">
        <span className="text-solar-white">
          Today, the University of California Riverside Solar Car team consists
          of many talented, undergraduate students who aim to construct a
          full-scaled solar car to compete in the Formula Sun Grand Prix, and
          the American Solar Challenge:&nbsp;
        </span>
        <span className="text-solar-gold">
          a national collegiate competition which requires teams and their
          solar-powered vehicles to finish a 2,000 mile cross-country journey.
        </span>
      </p>
      <div className="bg-solar-gold w-[100%] h-10"></div>
      <div className="flex">
        <img
          className="w-1/2"
          src="BackLeftTransparent 1.png"
          alt="Back Left Transparent"
        ></img>
        <img
          className="w-1/2"
          src="BackLeftRender 1.png"
          alt="Back Left Render"
        ></img>
      </div>
    </div>
  );
};

export default AboutParagraph;
