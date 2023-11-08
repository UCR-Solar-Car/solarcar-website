import React from "react";
import Organization from "./Organization";
import organizations from "./data/organizations";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const Organizations = () => {
  return (
    <div className=" flex items-center justify-center mb-4 ">
      <Row className="w-10/12 flex justify-center items-start">
        {organizations.map((organizations, index) => (
          <Col xl={3} md={6} sm={6} xs={6} key={index} className="p-3">
            <Organization
              image={organizations.image}
              title={organizations.title}
              ig={organizations.ig}
              discord={organizations.discord}
              website={organizations.website}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Organizations;
