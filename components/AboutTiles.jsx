import React from "react";

const AboutTiles = () => {
  return (
    <div className="font-raleway text-2xl">
      <div className="flex justify-center items-center bg-solar-gold">
        <img
          src="Chassis 1.png"
          alt="A picture of the solar vehicle's chassis"
          className="w-1/2"
        />
        <div className="w-1/2 h-full p-4">
          Having begun as a small project with a few members and nothing but an
          idea and a dream, the team and project have both developed into a
          large project for all members and contributors to the project
        </div>
      </div>
      <div className="flex justify-center items-center bg-solar-blue">
        <div className="w-1/2 p-4">
          involving many members who work on our solar vehicle, countless hours
          of electrical and mechanical meetings, lead meetings, and hours
          outside of school.
        </div>
        <img src="Battery 1.png" alt="" className="w-1/2" />
      </div>
    </div>
  );
};

export default AboutTiles;
