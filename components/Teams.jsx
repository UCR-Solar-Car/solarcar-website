import React from "react";
import { Col, Row } from "react-bootstrap";
import Team from "./Team";

const teams = [
  [
    "ELECTRICAL",
    "Leen Eisa",
    "Sunny Zeng",
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
    "Patrick Aventino",
    "Joel Liu",
    "Esmeralda Merida",
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
    "SOFTWARE",
    "SOFTWARE",
    "SOFTWARE",
    "SOFTWARE",
    "SOFTWARE",
    "SOFTWARE",
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
    "BUSINESS",
    "BUSINESS",
    "BUSINESS",
    "BUSINESS",
    "BUSINESS",
    "BUSINESS",
    "BUSINESS",
  ],
];

const Teams = () => {
  return (
    <div>
      <Row>
        {teams.map((team, index) => (
          <Col key={index}>
            <Team team={team} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Teams;
