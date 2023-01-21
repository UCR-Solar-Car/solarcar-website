import React from "react";
import CoreValues from "../components/CoreValues";
import Introduction from "../components/Introduction";
import Landing from "../components/Landing";
import ProjectManagers from "../components/ProjectManagers";
import FAQ from "../components/FAQ";

const index = () => {
  return (
    <div>
      <Landing />
      <Introduction />
      <CoreValues />
      <ProjectManagers />
      <FAQ />
    </div>
  );
};

export default index;
