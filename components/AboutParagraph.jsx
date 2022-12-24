import React from "react";

const AboutParagraph = () => {
  return (
    <div className="flex items-center justify-center">
      <p className="text-center text-3xl font-raleway w-10/12">
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
      <div className="bg-solar-gold"></div>
    </div>
  );
};

export default AboutParagraph;
