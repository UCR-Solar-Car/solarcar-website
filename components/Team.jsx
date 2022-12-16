import React from "react";

const Team = ({ team }) => {
  return (
    <div>
      <div className="text-solar-white">HEADER</div>
      <div>
        {team.map((member, index) => (
          <p className="text-solar-white" key={index}>
            {member}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Team;
