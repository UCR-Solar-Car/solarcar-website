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
    "Roger Teng",
    "Zerong Cai",
    "Hugo Jr Gonzalez Cantu",
    "Emilio Rivas",
    "Kevin Ramirez",
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
    "Justin Yee",
  ],
];

const Teams = () => {
  return (
    <div>
      <Row>
        {teams.map((team, index) => (
          <Col key={index} xl={3} xs={6} className="flex items-stretch m-0 p-0">
            <Team team={team} index={index} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Teams;
