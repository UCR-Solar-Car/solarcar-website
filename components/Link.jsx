import React from "react";

const Link = ({ backgroundColor }) => {
  return (
    <div className={`bg-${backgroundColor} h-331 w-358 `}>
      <div className="text-center mt-100 p-6 font-raleway text-3xl text-solar-black">
        Project Manager
      </div>
      <div className="box-border w-232 h-105 bg-gray mt-100 pb-8 px-8 pt-6 p-9  justify-center items-center">
        {/* <div
        style={{
          backgroundColor: "#2A363D",
          marginLeft: "auto",
          marginRight: "auto",
          width: "160px",
          height: "60px",
        }}
      > */}
        <a
          href="https://ieee.ucr.edu/projects/solar-car"
          className="text-blue-500"
        >
          <button className="text-white bg-solar-gray hover:bg-blue-700 w-full h-full p-2.5">
            <div
              className={`text-center font-josefin text-${backgroundColor} text-2xl`}
            >
              APPLY
            </div>
          </button>
        </a>
      </div>
    </div>
  );
};

export default Link;
