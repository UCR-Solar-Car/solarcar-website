import React from "react";

const Subteam = ({ team, blurb, index }) => {
  return (
    <span
      // key={index}
      className={`${
        index % 2 === 0
          ? "bg-solar-gold text-black"
          : "bg-solar-gray text-solar-gold"
      } p-2 h-4/5 w-full flex items-center justify-center `}
    >
      <div
        className={`${
          index % 2 === 0 ? " flex flex-row" : "flex flex-row-reverse"
        } p-4 flex items-center justify-center w-full `}
      >
        <p
          className={`${
            index % 2 === 0
              ? "border-r-2 border-black "
              : "border-l-2 border-solar-gold "
          }  text-5xl font-josefin p-10 flex items-center text-center justify-center `}
        >
          {team}
        </p>

        <p className="text-2xl font-raleway p-10 text-center ">{blurb}</p>

        {/* <p className= "text-5xl font-ubuntu p-10 flex items-center text-center justify-center">{team}</p>

        <p className={`${
          index % 2 === 0 ? "border-l-2 border-black " : "border-r-2 border-solar-gold "
        }  text-xl font-ubuntu p-10 text-center `}>{blurb}</p> */}
      </div>
    </span>
  );
};

export default Subteam;
