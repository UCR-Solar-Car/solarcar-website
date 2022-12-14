import React from "react";
import Header from "../components/Header";
import SponsorOutreach from "../components/SponsorOutreach";
import Sponsors from "../components/Sponsors";

const sponsors = () => {
  return (
    <div>
      <Header
        image="https://ieee.ucr.edu/sites/default/files/styles/scale_367/public/2lt0u4l.jpg?itok=8IIhrRvt"
        title="Sponsors"
      />
      <Sponsors />
      <SponsorOutreach />
    </div>
  );
};

export default sponsors;
