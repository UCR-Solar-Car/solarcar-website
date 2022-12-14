import React from "react";
import { Col, Row } from "react-bootstrap";

const cells = new Array(255).fill(0);

const AdoptGrid = () => {
  return (
    <div className="bg-solar-black flex justify-center items-center">
      <div className="w-10/12 flex justify-center items-center flex-col my-4">
        <div className="flex justify-evenly w-full items-center">
          <span className="bg-solar-gray border-2 border-solar-white text-solar-white font-josefin px-4 py-2 text-xl text-center">
            Available Cells
          </span>
          <span className="bg-solar-gold text-solar-black border-2 border-white font-josefin px-4 py-2 text-xl text-center">
            Reserved Cells
          </span>
          <span className="bg-solar-blue text-solar-black border-2 border-white font-josefin px-4 py-2 text-xl text-center">
            Taken Cells
          </span>
        </div>
        <Row className="my-4">
          {cells.map((cell, index) => (
            <Col
              xl={1}
              key={index}
              className="text-white bg-solar-gray font-josefin border-2 flex justify-center items-center w-20 h-20 m-0 p-0 text-3xl"
            >
              {index + 1}
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default AdoptGrid;
