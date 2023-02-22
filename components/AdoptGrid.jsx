import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const cells = new Array(255).fill(0);
const names = new Array(5).fill("Scotty Highlander");

const AdoptGrid = () => {
  return (
    <div className="bg-solar-black flex justify-center items-center flex-col">
      <div className="w-10/12 flex justify-center items-center flex-col my-4">
        <div className="flex justify-evenly w-full items-center">
          <span className="bg-solar-gray border-2 border-solar-white text-solar-white font-ubuntu px-4 py-2 text-xl text-center">
            Available Cells
          </span>
          <span className="bg-solar-gold text-solar-black border-2 border-white font-ubuntu px-4 py-2 text-xl text-center">
            Reserved Cells
          </span>
          <span className="bg-solar-blue text-solar-black border-2 border-white font-ubuntu px-4 py-2 text-xl text-center">
            Taken Cells
          </span>
        </div>
        <Row className="my-4">
          {cells.map((_, index) => (
            <Col
              xl={1}
              xs={2}
              key={index}
              className="text-white bg-solar-gray font-ubuntu border-2 flex justify-center items-center w-20 h-20 m-0 p-0 text-3xl"
            >
              {index + 1}
            </Col>
          ))}
        </Row>
      </div>
      <p className="text-solar-gold font-ubuntu text-4xl font-bold text-center">
        A Huge Thank You to Our Current Adopters
      </p>
      {names.map((name, index) => (
        <span
          className={`${
            index % 2 == 0
              ? "bg-solar-gold text-solar-gray"
              : "bg-solar-gray text-solar-gold"
          } w-full font-ubuntu text-2xl p-3 text-center`}
          key={index}
        >
          {name}
        </span>
      ))}
    </div>
  );
};

export default AdoptGrid;
