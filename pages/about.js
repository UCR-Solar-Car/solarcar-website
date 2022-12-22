import React from "react";
import AboutParagraph from "../components/AboutParagraph";
import AboutTiles from "../components/AboutTiles";
import Gallery from "../components/Gallery";
import Header from "../components/Header";

const about = () => {
  return (
    <div>
      <Header image="SolarCar.jpg" title="About Us" />
      <AboutTiles />
      <AboutParagraph />
      <Gallery />
    </div>
  );
};

export default about;
