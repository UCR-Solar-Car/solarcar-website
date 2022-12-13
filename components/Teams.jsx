import React from "react";
import { Col, Row } from "react-bootstrap";
import Team from "./Team";

const Teams = () => {
  return (
    <div>
      <Row>
        <Col>
          <Team />
        </Col>
        <Col>
          <Team />
        </Col>
        <Col>
          <Team />
        </Col>
        <Col>
          <Team />
        </Col>
        <Col>
          <Team />
        </Col>
      </Row>
    </div>
  );
};

export default Teams;
