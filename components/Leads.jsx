import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Lead from "./Lead";
import leads from "./data/leads";

const Leads = () => {
  return (
    <div className=" flex items-center justify-center mb-4 ">
      <Row className="w-10/12 flex justify-center">
        {leads.map((lead, index) => (
          <Col xl={3} md={6} sm={6} xs={6} key={index} className="p-4">
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
