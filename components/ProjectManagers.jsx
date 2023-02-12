import React from "react";
import ProjectManager from "./ProjectManager";

const ProjectManagers = () => {
  return (
    <div className="bg-solar-black">
      <ProjectManager name="Leen Eisa" reverse={false} imgSrc="Leen.jpg">
        Joining UCR Solar Car has to be one of the best things I have done in
        UCR. I originally joined the team to get more involved in UCR as
        everything was online. I continue to be a part of this amazing team as I
        want to see the end result of this project and work alongside great team
        members and ethusiastic students.
        <br />
        <br />
        I enjoy applying the things we have learnt in class in a real life
        setting. Being a part of Solar Car got me exposed to the different
        engineering teams and how they work hand in hand together.
        <br />
        <br />
        As my time at UCR is coming to an end,my main takeaway is the importance
        of team work and loving the work we do are key factors in making the
        experience better and more educational. Being a part of solar car spiked
        my interest in focusing more on electrical engineering and as a result I
        will be graduating with an EE degree.
      </ProjectManager>

      <ProjectManager name="Sunny Zeng" reverse={true} imgSrc="Sunny.jpg">
        Learning about the Solar car team through an IEEE flyer, I joined hoping
        for hands-on opportunities to learn more electrical engineering skills
        and meet fellow peers. The activites and supportive environment I
        experienced as a member inspired me to take on more responsibilities,
        thus further becoming an electrical team leader and finally a project
        manager.
        <br />
        <br />
        Now, I work towards taking our solar car to competitions and foster a
        supportive environment for all members. In addition, I have learned the
        importance of safety when performing hands-on tasks and also developed
        an interest in power engineering with a focus on the latter in embedded
        systems.
        <br />
        <br />
      </ProjectManager>
    </div>
  );
};

export default ProjectManagers;
