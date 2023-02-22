import React from "react";
import Header from "../components/Header";
import Subteams from "../components/Subteams";
import Recruitment from "../components/Recruitment";
import CalendarIntro from "../components/CalendarIntro";

const recruitment = () => {
  return (
    <div>
      <Header image="About.PNG" title="Recruitment" />
      <Recruitment />
      <Subteams />
      <CalendarIntro />
    </div>
  );
};

export default recruitment;
