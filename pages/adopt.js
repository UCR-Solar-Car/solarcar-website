import React from "react";
import AdoptInput from "../components/AdoptInput";
import AdoptText from "../components/AdoptText";
import Header from "../components/Header";

const adopt = () => {
  return (
    <div>
      <Header
        image="https://ieee.ucr.edu/sites/default/files/styles/scale_367/public/2lt0u4l.jpg?itok=8IIhrRvt"
        title="Adopt a Cell"
      />
      <AdoptText />
      <AdoptInput />
    </div>
  );
};

export default adopt;
