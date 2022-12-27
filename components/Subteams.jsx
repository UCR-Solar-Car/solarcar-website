import React from "react";
import { Row } from "react-bootstrap";
import Subteam from "./Subteam";

const subteamsArr = [
  {
    team: "Electrical",
    blurb:
      "The Electrical team creates the electrical subsystem to ensure that the power running to and from the solar car is regulated properly and safely. The main parts of our electrical subsystem are processing power to and from our Solar Panels, regulating power going into and out of our battery, and ensuring that there is a stable communication happening between our other systems.",
  },
  {
    team: "Mechanical",
    blurb:
      "The Mechanical team designs and manufactures the chassis, suspension, steering, braking, and aeroshell of the solar vehicle, utilizing Solidworks 3D CAD, research, and various manufacturing methods.",
  },
  {
    team: "Telemetry",
    blurb:
      "The Telemetry team creates the car's CAN network, using CAN Bus Shields on an Arduino to process CAN signals from different ECUs and display it on the driver’s dashboard.",
  },
  {
    team: "Driver Interface",
    blurb:
      "The Driver Interface team focuses on creating a physical dashboard with critical vehicle information displayed through a Raspberry Pi and QT C++. We are also responsible for transmitting information to virtual dashboards for engineers to analyze and determine points of improvement and efficiency for our vehicle.",
  },
  {
    team: "Business",
    blurb:
      "The Business team maintains and expands the business aspect of Solar Car. This includes managing social/fundraiser events, updating social medias, and reaching out for sponsorships via emails, calls, and forms.",
  },
];

const Subteams = () => {
  return (
    <>
      <div>
        <Row className=" flex justify-center items-center">
          {subteamsArr.map((subteam, index) => (
            <Subteam
              key={index}
              index={index}
              team={subteam.team}
              blurb={subteam.blurb}
            />
          ))}
        </Row>
      </div>
    </>
  );
};

export default Subteams;
