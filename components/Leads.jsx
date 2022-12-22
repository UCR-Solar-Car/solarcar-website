import React from "react";
import { Col, Row } from "react-bootstrap";
import Lead from "./Lead";
const leads = new Array(10).fill({
  position: "Co Project Manager",
  name: "Leen Eisa",
  photo: "Leen.jpg",
});

const Leads = () => {
  return (
    <div className=" flex justify-center items-center">
      <Row className="w-10/12">
        {leads.map((lead, index) => (
          <Col xl={3} md={6} xs={12} key={index} className="p-4">
            <Lead
              name={lead.name}
              position={lead.position}
              photo={lead.photo}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Leads;
