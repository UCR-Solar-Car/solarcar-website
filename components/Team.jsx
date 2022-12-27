import React from "react";

const Team = ({ team, index }) => {
  return (
    <div
      className={`${
        index % 2 === 0 ? "bg-solar-gold" : "bg-solar-black"
      } p-4 w-full`}
    >
      <div
        className={`${
          index % 2 === 0
            ? "text-solar-black border-solar-black"
            : "text-solar-gold border-solar-gold"
        }  text-center font-josefin text-2xl   px-2 py-4 mb-3`}
      >
        {team[0]}
      </div>
      <div>
        {team.slice(1).map((member, indexSecondary) => (
          <p
            className={`${
              index % 2 === 0 ? "text-solar-black" : "text-solar-gold"
            } text-center font-raleway text-xl p-2 m-0`}
            key={indexSecondary}
          >
            {member}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Team;
