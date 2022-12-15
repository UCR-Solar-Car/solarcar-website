import React from "react";
import { AboutParagraph } from "../components/AboutParagraph";
import {AboutTiles} from "../components/AboutTiles";
import { Gallery } from "../components/Gallery";
import {Header} from "../components/Header";

const about = () => {
  return (
    <div>
      <Header
        image="https://ieee.ucr.edu/sites/default/files/styles/scale_367/public/2lt0u4l.jpg?itok=8IIhrRvt"
        title="About Us"
      />
      {/* <AboutTiles />
      <AboutParagraph />
      <Gallery /> */}
    </div>
  );
};

export default about;
