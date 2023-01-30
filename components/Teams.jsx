import React from "react";
import { Col, Row } from "react-bootstrap";
import Team from "./Team";
import teams from "./data/teams";

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
