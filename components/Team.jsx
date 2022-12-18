import React from "react";

const Team = ({ team }) => {
  return (
    <div className="bg-solar-gold p-4 ">
      <div className="text-solar-black text-center font-josefin text-2xl border-b-2 border-solar-black px-2 py-4 mb-3">
        {team[0]}
      </div>
      <div>
        {team.slice(1).map((member, index) => (
          <p
            className="text-solar-black text-center font-raleway text-xl p-2 m-0"
            key={index}
          >
            {member}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Team;
