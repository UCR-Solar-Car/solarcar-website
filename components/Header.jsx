import React from "react";

const Header = ({ image, title }) => {
  return (
    <div className="relative">
      <div className="relative">
        <img
          className="w-full h-[35vh] object-cover"
          src={image}
          alt="Header Image"
        />
        <div className="bg-gradient-to-b from-white to-black p-2 absolute top-0 left-0 w-full h-full opacity-50"></div>
      </div>

      <div className="flex justify-center items-center absolute bottom-[10%] left-1/2 -translate-x-1/2 ">
        <p className="font-raleway text-3xl text-solar-white m-0">
          {">> "}
          {title}
        </p>
      </div>
    </div>
  );
};

export default Header;
