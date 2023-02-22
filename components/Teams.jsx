import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Team from "./Team";
import teams from "./data/teams";

const Teams = () => {
  return (
    <React.Fragment>
      <Row>
        {teams.map((team, index) => (
          <Col key={index} xl={3} xs={6} className="flex items-stretch m-0 p-0">
            <Team team={team} index={index} />
          </Col>
        ))}
      </Row>
    </React.Fragment>
  );
};

export default Teams;
