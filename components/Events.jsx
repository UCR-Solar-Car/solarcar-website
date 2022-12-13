import React from "react";
import { Col, Row } from "react-bootstrap";
import Event from "./Event";

const Events = () => {
  return (
    <div>
      <Row>
        <Col>
          <Event />
        </Col>
        <Col>
          <Event />
        </Col>
        <Col>
          <Event />
        </Col>
        <Col>
          <Event />
        </Col>
        <Col>
          <Event />
        </Col>
      </Row>
    </div>
  );
};

export default Events;
