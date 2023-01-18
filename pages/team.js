import React from "react";
import Crew from "../components/Crew";
import Header from "../components/Header";

const team = () => {
  return (
    <div>
      <Header image="Team.JPG" title="The Team" position="30" />
      <Crew />
    </div>
  );
};

export default team;
