import React from "react";
import { Col, Row } from "react-bootstrap";
import { FaLink } from "react-icons/fa";

const Event = ({ name, date, time, location, address, link }) => {
  return (
    <div className="bg-solar-gray flex justify-center items-center w-full flex-col">
      <span className="bg-solar-gold w-full text-solar-gray font-josefin text-3xl p-2 text-center">
        {name}
      </span>
      <div className="w-10/12 text-solar-gold flex justify-center items-center">
        <Row className="w-full p-0 m-0">
          <Col
            xl={5}
            className=" w-full my-4 flex justify-center items-start flex-col"
          >
            <p className="m-0 p-0 font-bold text-xl font-josefin">When?</p>
            <p className="m-0 p-0 text-xl font-josefin">{date}</p>
            <p className="m-0 p-0 text-xl font-josefin">{time}</p>
          </Col>
          <Col
            xl={5}
            className=" w-full my-4 flex justify-center items-start flex-col"
          >
            <p className="m-0 p-0 font-bold text-xl font-josefin">Where?</p>
            <p className="m-0 p-0 text-xl font-josefin">{location}</p>
            <p className="m-0 p-0 text-xl font-josefin">{address}</p>
          </Col>
          <Col xl={2} className="flex justify-center items-center">
            <a
              href={link}
              target="_blank"
              className="bg-solar-gold hover:text-solar-gray no-underline text-solar-gray font-josefin px-4 py-2 text-xl text-center flex justify-center items-center"
              rel="noreferrer"
            >
              <FaLink className="text-solar-gray " />
              Details
            </a>
          </Col>
          <Col>
            <p className="m-0 p-0 font-bold text-xl font-josefin text-solar-gray">
              .
            </p>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Event;
