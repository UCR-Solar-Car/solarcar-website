import React from "react";
import Header from "../components/Header"
import Clubroom from "../components/Clubroom";
import Organization from "../components/Organization";


const involvement = () => {
  return (
    <div>
      <Header image="Adopt.JPG" title="Get Involved" />
      <Clubroom />
      <Organization />
    </div>
  );
};

export default involvement;
