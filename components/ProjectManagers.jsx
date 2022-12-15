import React from "react";
import ProjectManager from "./ProjectManager";

const ProjectManagers = () => {
  return (
    <div>
      <ProjectManager name="Leen Eisa" reverse={false} imgSrc="Leen.jpg">
        Lorem ipsum is placeholder text commonly used in the graphic, print, and
        publishing industries for previewing layouts and visual mockups.Lorem
        ipsum is placeholder text commonly used in the graphic, print, and
        <br />
        <br />
        publishing industries for previewing layouts and visual mockups. Lorem
        ipsum is placeholder text commonly used in the graphic, print, and
        publishing industries for previewing layouts and visual mockups. Lorem
        <br />
        <br />
        ipsum is placeholder text commonly used in the graphic, print, and
        publishing industries for previewing layouts and visual mockups.
      </ProjectManager>
      <ProjectManager name="David Wilson" reverse={true} imgSrc="David.jpg">
        Lorem ipsum is placeholder text commonly used in the graphic, print, and
        publishing industries for previewing layouts and visual mockups.Lorem
        ipsum is placeholder text commonly used in the graphic, print, and
        publishing industries for previewing layouts and visual mockups. Lorem
        <br />
        <br />
        ipsum is placeholder text commonly used in the graphic, print, and
        publishing industries for previewing layouts and visual mockups. Lorem
        ipsum is placeholder text commonly used in the graphic, print, and
        <br />
        <br />
        publishing industries for previewing layouts and visual mockups.
      </ProjectManager>
    </div>
  );
};

export default ProjectManagers;
