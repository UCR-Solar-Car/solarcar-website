import React from "react";
import RotatingModel from "./RotatingModel";

const Landing = () => {
  return (
    <div className="w-full flex justify-center items-center overflow-clip">
      <div className="md:translate-x-32 w-full md:flex md:flex-row justify-center items-center mt-32">
        <div className="md:w-1/3 flex flex-col justify-start items-center md:items-start ">
          <p className="font-josefin text-solar-gold text-5xl md:text-4xl lg:text-5xl m-0">
            UC Riverside
          </p>
          <p className="font-josefin text-white text-5xl md:text-4xl lg:text-5xl mb-2">
            Solar Car
          </p>
          <p className="w-8/12 text-center md:hidden font-raleway text-white md:text-sm lg:text-base m-0">
            Since 2017, UC Riverside Solar Car has been developing, innovating,
            and improving Solar Cars that push what we have ever seen before!
          </p>
          <p className="text-left hidden md:block font-raleway text-white md:text-sm lg:text-base m-0">
            Since 2017, UC Riverside Solar Car has been developing, innovating,
            and improving Solar Cars that push what we have ever seen before!
          </p>
          <div className="flex flex-row justify-start items-center">
            <div className="h-4 bg-solar-gold w-1 mr-2" />
            <p className="font-zendots text-solar-gold md:text-base lg:text-xl m-0">
              30+ Students
            </p>
          </div>
          <div className="flex flex-row justify-start items-center">
            <div className="h-4 bg-solar-lightblue w-1 mr-2" />
            <p className="font-zendots text-solar-lightblue md:text-base lg:text-xl m-0">
              8+ Majors
            </p>
          </div>
        </div>
        <div className="w-2/3 m-0">
          <RotatingModel />
        </div>
      </div>
    </div>
  );
};

export default Landing;
