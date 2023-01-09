import React from "react";

const AboutTiles = () => {
  return (
    <div className="font-raleway text-2xl">
      <div className="flex justify-center items-center bg-solar-gold">
        <img src="/Chassis 1.png" alt="" className="w-1/2" />
      </div>
      <div className="w-full h-full p-4 bg-solar-gold">
        Having begun as a small project with a few members and nothing but an
        idea and a dream, the team and project have both developed into a large
        project for all members and contributors to the project
      </div>
      <div className="flex justify-center items-center bg-solar-blue">
        <img src="Battery 1.png" alt="" className="w-1/2" />
      </div>
      <div className="w-full p-4 bg-solar-blue">
        involving many members who work on our solar vehicle, countless hours of
        electrical and mechanical meetings, lead meetings, and hours outside of
        school.
      </div>
    </div>
  );
};

export default AboutTiles;
