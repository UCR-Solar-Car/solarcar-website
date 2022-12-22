import React from "react";
import AdoptGrid from "../components/AdoptGrid";
import AdoptInput from "../components/AdoptInput";
import AdoptText from "../components/AdoptText";
import Header from "../components/Header";

const adopt = () => {
  return (
    <div>
      <Header image="SolarCells.jpg" title="Adopt a Cell" />
      <AdoptText />
      <AdoptInput />
      <AdoptGrid />
    </div>
  );
};

export default adopt;
