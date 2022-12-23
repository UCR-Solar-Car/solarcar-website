import React from "react";

const Landing = () => {
  return (
    <div className="w-full flex justify-center items-center overflow-clip">
      <div className="md:translate-x-[100px] lg:translate-x-[180px] w-full md:flex md:flex-row justify-center items-center mt-32">
        <div className="md:w-1/3 lg:w-1/4 flex flex-col justify-start items-center md:items-start ">
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
        <img
          alt="side render"
          src="SideRender.png"
          className="translate-y-[-70px] md:translate-y-[0px] md:w-3/4 m-0"
        />
      </div>
    </div>
  );
};

export default Landing;
