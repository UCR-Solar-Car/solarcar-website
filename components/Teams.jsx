import React from "react";
import { Col, Row } from "react-bootstrap";
import Team from "./Team";

const teams = [
  [
    "ELECTRICAL",
    "ELECTRICAL",
    "ELECTRICAL",
    "ELECTRICAL",
    "ELECTRICAL",
    "ELECTRICAL",
  ],
  [
    "MECHANICAL",
    "MECHANICAL",
    "MECHANICAL",
    "MECHANICAL",
    "MECHANICAL",
    "MECHANICAL",
    "MECHANICAL",
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
    "TELEMETRY",
    "TELEMETRY",
    "TELEMETRY",
    "TELEMETRY",
    "TELEMETRY",
    "TELEMETRY",
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
          <Col key={index} className="flex items-stretch m-0 p-0">
            <Team team={team} index={index} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Teams;
