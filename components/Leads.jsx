import React from "react";
import { Col, Row } from "react-bootstrap";
import Lead from "./Lead";

const leads = [
  ["Leen Eisa", "Co-Project Manager", "Leen.jpg"],
  ["Sunny Zeng", "Co-Project Manager", "Sunny.jpg"],
  ["Kiana Tristan", "Battery Lead", "Kiana.jpg"],
  ["Daisy Rojas Garcia", "Electrical Lead", "Daisy.jpg"],
  ["Karam Shanti", "Electrical Lead", "Karam.jpg"],
  ["Divyank Shah", "Driver Interface Lead", "Divyank.jpg"],
  ["Hallie Pham", "Telemetry Lead", "Hallie.jpg"],
  ["Patrick Aventino", "Mechanical Lead", "Patrick.jpg"],
  ["Esmeralda Merida", "Mechanical Lead", "Esmeralda.jpg"],
  ["Jose Delgado", "Business Lead", "temp.png"],
  ["Sekirou Shimono", "Business Lead", "temp.png"],
];

const Leads = () => {
  return (
    <div className=" flex items-center justify-center ">
      <Row className="w-10/12 flex justify-center">
        {leads.map((lead, index) => (
          <Col xl={3} md={6} xs={12} key={index} className="p-4">
            <Lead name={lead[0]} position={lead[1]} photo={lead[2]} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Leads;
