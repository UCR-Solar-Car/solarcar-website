import React from "react";
import Header from "../components/Header";
import Clubroom from "../components/Clubroom";
import Organization from "../components/Organization";

const involvement = () => {
  return (
    <div>
      <Header image="Adopt.JPG" title="Get Involved" />
      <Clubroom />
      <div className="flex flex-row justify-evenly items-center w-5/6">
        <Organization
          image="WINC.PNG"
          title="Women in Computing (WINC)"
          ig="https://www.instagram.com/wincucr/?hl=en"
          discord="https://discord.gg/szzhxz3S"
          website="https://winc.cs.ucr.edu/"
        />
        <Organization
          image="WINC.PNG"
          title="Women in Computing (WINC)"
          ig="https://www.instagram.com/wincucr/?hl=en"
          discord="https://discord.gg/szzhxz3S"
          website="https://winc.cs.ucr.edu/"
        />
      </div>
    </div>
  );
};

export default involvement;
