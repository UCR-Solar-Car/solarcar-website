import React from "react";

const Header = ({ image, title, position = "0" }) => {
  return (
    <div className="relative">
      <div className="relative overflow-hidden h-[45vh]">
        <img
          className={`w-full absolute object-cover -top-[${position}%]`}
          src={image}
          alt="Header Image"
        />
        <div className=" h-[45vh]"></div>
        <div className="bg-gradient-to-b from-white to-black p-2 absolute top-0 left-0 w-full h-full opacity-50"></div>
      </div>

      <div className="flex justify-center items-center absolute bottom-[10%] w-full left-1/2 -translate-x-1/2 ">
        <p className="font-raleway text-3xl text-solar-white m-0">
          {">> "}
          {title}
        </p>
      </div>
    </div>
  );
};

export default Header;
