import React from "react";
import Crew from "../components/Crew";
import Header from "../components/Header";

const team = () => {
  return (
    <div>
      <Header
        image="https://ieee.ucr.edu/sites/default/files/styles/scale_367/public/2lt0u4l.jpg?itok=8IIhrRvt"
        title="The Team"
      />
      <Crew />
    </div>
  );
};

export default team;
