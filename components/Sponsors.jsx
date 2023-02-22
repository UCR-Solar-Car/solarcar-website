import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import platinum from "./data/sponsors";
import gold from "./data/sponsors";
import silver from "./data/sponsors";
import bronze from "./data/sponsors";

const friend = [];

const Sponsors = () => {
  return (
    <div className="w-full flex justify-center items-center flex-col bg-solar-white">
      <span className="bg-solar-gold w-full font-ubuntu text-5xl p-4 text-center">
        Platinum
      </span>
      <Row className="w-10/12 flex justify-center items-center">
        {platinum.map((sponsor, index) => (
          <Col xl={6} key={index} className="flex justify-center items-center">
            <img src={sponsor} alt="sponsor" />
          </Col>
        ))}
      </Row>
      <span className="bg-solar-gold w-full font-ubuntu text-5xl p-4 text-center">
        Gold
      </span>
      <Row className="w-10/12 flex justify-center items-center">
        {gold.map((sponsor, index) => (
          <Col xl={3} key={index} className="flex justify-center items-center">
            <img src={sponsor} alt="sponsor" />
          </Col>
        ))}
      </Row>
      <span className="bg-solar-gold w-full font-ubuntu text-5xl p-4 text-center">
        Silver
      </span>
      <Row className="w-10/12 flex justify-center items-center">
        {silver.map((sponsor, index) => (
          <Col xl={5} key={index} className="flex justify-center items-center">
            <img src={sponsor} alt="sponsor" />
          </Col>
        ))}
      </Row>
      <span className="bg-solar-gold w-full font-ubuntu text-5xl p-4 text-center">
        Bronze
      </span>
      <Row className="w-10/12 flex justify-center items-center">
        {bronze.map((sponsor, index) => (
          <Col xl={5} key={index} className="flex justify-center items-center">
            <img src={sponsor} alt="sponsor" />
          </Col>
        ))}
      </Row>
      <span className="bg-solar-gold w-full font-ubuntu text-5xl p-4 text-center">
        Friend
      </span>
      <Row className="w-10/12 flex justify-center items-center">
        {friend.map((sponsor, index) => (
          <Col xl={2} key={index} className="flex justify-center items-center">
            <img src={sponsor} alt="sponsor" />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Sponsors;
