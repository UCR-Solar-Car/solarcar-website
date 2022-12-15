import React from "react";
import CoreValues from "../components/CoreValues";
import Introduction from "../components/Introduction";
import Landing from "../components/Landing";
import ProjectManagers from "../components/ProjectManagers";

const index = () => {
  return (
    <div>
      <Landing />
      <Introduction />
      <CoreValues />
      <ProjectManagers />
    </div>
  );
};

export default index;
