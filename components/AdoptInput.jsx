import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";

const user = {
  name: "",
  cell: "",
  email: "",
  phone: "",
  paypal: "",
};

const AdoptInput = () => {
  const [data, setData] = useState(user);

  const handleTyping = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <div className="bg-solar-black text-white">
      <Row className="flex justify-center items-center py-4">
        <Col xl={6} className="text-right m-0 p-0">
          <label
            className="text-solar-gold font-josefin font-bold text-xl text-right"
            htmlFor="cell"
          >
            Cell Number:
          </label>
        </Col>
        <Col xl={6} className="text-left m-0 p-0">
          <input
            className="text-solar-blue font-raleway py-1 px-2 mx-4 my-2 focus:outline-none placeholder:text-solar-blue"
            name="cell"
            type="number"
            onChange={handleTyping}
            value={data.cell}
            placeholder="ex. 111"
          />
        </Col>
        <Col xl={6} className="text-right m-0 p-0">
          <label
            className="text-solar-gold font-josefin font-bold text-xl text-right"
            htmlFor="cell"
          >
            Name to Display:
          </label>
        </Col>
        <Col xl={6} className="text-left m-0 p-0">
          <input
            className="text-solar-blue font-raleway py-1 px-2 mx-4 my-2 focus:outline-none placeholder:text-solar-blue"
            name="name"
            type="text"
            onChange={handleTyping}
            value={data.name}
            placeholder="ex. Scotty Highlander"
          />
        </Col>
        <Col xl={6} className="text-right m-0 p-0">
          <label
            className="text-solar-gold font-josefin font-bold text-xl text-right"
            htmlFor="cell"
          >
            Email:
          </label>
        </Col>
        <Col xl={6} className="text-left m-0 p-0">
          <input
            className="text-solar-blue font-raleway py-1 px-2 mx-4 my-2 focus:outline-none placeholder:text-solar-blue"
            name="name"
            type="email"
            onChange={handleTyping}
            value={data.email}
            placeholder="ex. scotty@ucr.edu"
          />
        </Col>
        <Col xl={6} className="text-right m-0 p-0">
          <label
            className="text-solar-gold font-josefin font-bold text-xl text-right"
            htmlFor="cell"
          >
            Phone Number:
          </label>
        </Col>
        <Col xl={6} className="text-left m-0 p-0">
          <input
            className="text-solar-blue font-raleway py-1 px-2 mx-4 my-2 focus:outline-none placeholder:text-solar-blue"
            name="name"
            type="tel"
            onChange={handleTyping}
            value={data.phone}
            placeholder="ex. 123-456-7890"
          />
        </Col>
        <Col xl={6} className="text-right m-0 p-0">
          <label
            className="text-solar-gold font-josefin font-bold text-xl text-right"
            htmlFor="cell"
          >
            PayPal Username:
          </label>
        </Col>
        <Col xl={6} className="text-left m-0 p-0">
          <input
            className="text-solar-blue font-raleway py-1 px-2 mx-4 my-2 focus:outline-none placeholder:text-solar-blue"
            name="name"
            type="text"
            onChange={handleTyping}
            value={data.paypal}
            placeholder="ex. @scotty_highlander"
          />
        </Col>
      </Row>
    </div>
  );
};

export default AdoptInput;
