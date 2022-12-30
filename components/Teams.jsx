import React from "react";
import { Col, Row } from "react-bootstrap";
import Team from "./Team";

const teams = [
  [
    "ELECTRICAL",
    "Jose Cervantes",
    "Aaron Yang",
    "Patrick Webb",
    "Yungong Wang",
    "Dennis Kang",
    "Ryan Yang",
    "Roger Teng",
    "Kyle Ludwig",
    "Aaron Chau",
    "Eric Shu",
    "Roger Teng",
    "Zerong Cai",
    "Hugo Jr Gonzalez Cantu",
    "Emilio Rivas",
    "Kevin Ramirez",
  ],
  [
    "MECHANICAL",
    "Aaric Borst",
    "Joel Liu",
    "Alex Rivera",
    "Shing Hung",
    "Mena Hanna",
    "Merielle Young",
    "Alex Chieu",
    "Brandon Colo Del Cid",
    "Amman Patel",
    "Tyler Phoen",
  ],
  [
    "SOFTWARE",
    "Aryan Kanuparti",
    "Colin Thekkinedath",
    "Jason Lin",
    "Mariam Golwalla",
    "Isean Bhanot",
    "Avnish Kovi",
    "Valerie Wong",
    "Aarav Sane",
    "David Chong",
    "Sachin Chopra",
  ],
  [
    "TELEMETRY",
    "Vy Vo",
    "Nicholas Kang",
    "Michael Lo",
    "Eric Shu",
    "Ethan Peng",
    "Nathan Ha",
    "Brandon Sun",
  ],
];

const Teams = () => {
  return (
    <div>
      <Row>
        {teams.map((team, index) => (
          <Col key={index} className="flex items-stretch m-0 p-0">
            <Team team={team} index={index} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Teams;
