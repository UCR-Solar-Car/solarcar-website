import React from "react";
import Header from "../components/Header";
import SponsorOutreach from "../components/SponsorOutreach";
import Sponsors from "../components/Sponsors";

const sponsors = () => {
  return (
    <div>
      <Header image="Sponsors.jpg" title="Sponsors" />
      <Sponsors />
      <SponsorOutreach />
    </div>
  );
};

export default sponsors;
