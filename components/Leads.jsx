import React from "react";
import Col  from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Lead from "./Lead";

const leads = [
  { name: "Leen Eisa", position: "Co-Project Manager", photo: "Leen.jpg" },
  { name: "Sunny Zeng", position: "Co-Project Manager", photo: "Sunny.jpg" },
  { name: "Kiana Tristan", position: "Battery Lead", photo: "Kiana.jpg" },
  {
    name: "Daisy Rojas Garcia",
    position: "Electrical Lead",
    photo: "Daisy.jpg",
  },
  { name: "Karam Shanti", position: "Electrical Lead", photo: "Karam.jpg" },
  {
    name: "Divyank Shah",
    position: "Driver Interface Lead",
    photo: "Divyank.jpg",
  },
  { name: "Hallie Pham", position: "Telemetry Lead", photo: "Hallie.jpg" },
  {
    name: "Patrick Aventino",
    position: "Mechanical Lead",
    photo: "Patrick.jpg",
  },
  {
    name: "Esmeralda Merida",
    position: "Mechanical Lead",
    photo: "Esmeralda.jpg",
  },
  { name: "Jose Delgado", position: "Business Lead", photo: "temp.png" },
  { name: "Sekirou Shimono", position: "Business Lead", photo: "temp.png" },
];

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
