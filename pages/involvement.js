import React from "react";
import Header from "../components/Header";
import Clubroom from "../components/Clubroom";
import Organizations from "../components/Organizations";

const involvement = () => {
  return (
    <div>
      <Header image="Adopt.JPG" title="Get Involved" />
      <Clubroom />
      <Organizations />
    </div>
  );
};

export default involvement;
