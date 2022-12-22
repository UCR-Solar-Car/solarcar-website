import React from "react";
import { Col, Row } from "react-bootstrap";
import Link from "./Link";

const links = new Array(10).fill("");

const Links = () => {
  return (
    <div className="flex justify-center items-center">
      <Row className="w-10/12">
        {links.map((link, index) => (
          <Col key={index} xl={3} className="p-2">
            <Link />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Links;
