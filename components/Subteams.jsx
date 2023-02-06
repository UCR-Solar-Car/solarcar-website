import React from "react";
import Row from "react-bootstrap/Row";
import Subteam from "./Subteam";

const Subteams = () => {
  return (
    <>
      <div>
        <span
          // key={index}
          className="bg-solar-gray text-white
      p-5 h-4/5 w-full flex items-center justify-start font-josefin text-5xl "
        >
          {">>Subteams"}
        </span>
        <Row className=" flex justify-center items-center">
          {subteamsArr.map((subteam, index) => (
            <Subteam
              key={index}
              index={index}
              team={subteam.team}
              blurb={subteam.blurb}
            />
          ))}
        </Row>
      </div>
    </>
  );
};

export default Subteams;
