import React from "react";

const Link = ({ backgroundColor, link, title }) => {
  return (
    <div
      className={`bg-${backgroundColor} aspect-square w-full flex flex-col justify-between items-center`}
    >
      <div className="text-center font-raleway text-2xl text-solar-black h-2/3 flex justify-center items-center mx-2">
        {title}
      </div>
      <a
        target="_blank"
        rel="noreferrer"
        href={link}
        className={`no-underline mb-3 text-center font-josefin text-${backgroundColor} hover:text-solar-gray text-lg bg-solar-gray hover:bg-transparent py-2 w-9/12 border-solar-gray border-2`}
      >
        APPLY
      </a>
    </div>
  );
};

export default Link;
