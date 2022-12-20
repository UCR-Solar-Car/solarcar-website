import React from "react";
import CoreValues from "../components/CoreValues";
import Introduction from "../components/Introduction";
import Landing from "../components/Landing";
import ProjectManagers from "../components/ProjectManagers";
import Test from "../components/Test";

const index = () => {
  return (
    <div>
      <Test/>
      <Landing />
      <Introduction />
      <CoreValues />
      <ProjectManagers />
    </div>
  );
};

export default index;
