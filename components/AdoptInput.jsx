import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";

const user = {
  name: "",
  cell: "",
  email: "",
  phone: "",
  paypal: "",
  donate: false,
};

const AdoptInput = () => {
  const [data, setData] = useState(user);

  const handleTyping = (e) => {
    //was the validation supposed to be here instead like while users are typing?//
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    //currently set up validation for submission, can type anything in the boxes
    // Input validation for cell number field
    if (
      Number.isInteger(Number(data.cell)) &&
      data.cell >= 1 &&
      data.cell <= 255
    ) {
      console.log("Submit Pressed: Cell number is valid");
    } else {
      console.log("Cell number is not valid");
    }

    // Input validation for phone number field
    if (data.phone.length === 10) {
      console.log("Submit Pressed: Phone number is valid");
    } else {
      console.log("Phone number is not valid");
    }

    // Input validation for email field
    const emailRegex = /^[^\s@] + @[^\s@] + \.[^\s@] + $/;
    if (emailRegex.test(data.email)) {
      console.log("Submit Pressed: Email is valid");
    } else {
      console.log("Email is not valid");
    }
  };

  // const handleSubmit = () => {
  //   console.log("Submit Pressed");
  // };

  return (
    <div className="bg-solar-black text-white">
      <Row className="flex justify-center items-center py-4 ">
        <Col xs={6} className="text-right m-0 p-0">
          <label
            className="text-solar-gold font-josefin font-bold text-xl text-right"
            htmlFor="cell"
          >
            Cell Number:
          </label>
        </Col>
        <Col xs={6} className="text-left m-0 p-0">
          <input
            required
            className="text-solar-blue font-raleway py-1 px-2 mx-4 my-2 focus:outline-none placeholder:text-solar-blue"
            name="cell"
            type="number"
            onChange={handleTyping}
            value={data.cell}
            placeholder="ex. 111"
          />
        </Col>
        <Col xs={6} className="text-right m-0 p-0">
          <label
            className="text-solar-gold font-josefin font-bold text-xl text-right"
            htmlFor="cell"
          >
            Name to Display:
          </label>
        </Col>
        <Col xs={6} className="text-left m-0 p-0">
          <input
            required
            className="text-solar-blue font-raleway py-1 px-2 mx-4 my-2 focus:outline-none placeholder:text-solar-blue"
            name="name"
            type="text"
            onChange={handleTyping}
            value={data.name}
            placeholder="ex. Scotty Highlander"
          />
        </Col>
        <Col xs={6} className="text-right m-0 p-0">
          <label
            className="text-solar-gold font-josefin font-bold text-xl text-right"
            htmlFor="cell"
          >
            Email:
          </label>
        </Col>
        <Col xs={6} className="text-left m-0 p-0">
          <input
            required
            className="text-solar-blue font-raleway py-1 px-2 mx-4 my-2 focus:outline-none placeholder:text-solar-blue"
            name="email"
            type="email"
            onChange={handleTyping}
            value={data.email}
            placeholder="ex. scotty@ucr.edu"
          />
        </Col>
        <Col xs={6} className="text-right m-0 p-0">
          <label
            className="text-solar-gold font-josefin font-bold text-xl text-right"
            htmlFor="cell"
          >
            Phone Number:
          </label>
        </Col>
        <Col xs={6} className="text-left m-0 p-0">
          <input
            required
            className="text-solar-blue font-raleway py-1 px-2 mx-4 my-2 focus:outline-none placeholder:text-solar-blue"
            name="phone"
            type="tel"
            onChange={handleTyping}
            value={data.phone}
            placeholder="ex. 123-456-7890"
          />
        </Col>
        <Col xs={6} className="text-right m-0 p-0">
          <label
            className="text-solar-gold font-josefin font-bold text-xl text-right"
            htmlFor="cell"
          >
            PayPal Username:
          </label>
        </Col>
        <Col xs={6} className="text-left m-0 p-0">
          <input
            required
            className="text-solar-blue font-raleway py-1 px-2 mx-4 my-2 focus:outline-none placeholder:text-solar-blue"
            name="paypal"
            type="text"
            onChange={handleTyping}
            value={data.paypal}
            placeholder="ex. @scotty_highlander"
          />
        </Col>
        <Col
          xl={2}
          xs={5}
          className="text-left m-0 p-0 flex justify-center items-center my-4"
        >
          <input
            name="donate"
            type="checkbox"
            className="bg-red-500"
            onChange={() => {
              setData({ ...data, donate: !data.donate });
            }}
          />
          <label
            htmlFor="donate"
            className="text-solar-gold font-josefin font-bold text-xl mx-2 p-0 my-0"
          >
            I have donated!
          </label>
        </Col>
        <Col
          xl={2}
          xs={5}
          className="text-left m-0 p-0 flex justify-end items-center my-4"
        >
          <button
            onClick={handleSubmit}
            className="bg-solar-gold text-solar-black font-josefin px-4 py-2 text-xl text-center"
          >
            Adopt a Cell
          </button>
        </Col>
      </Row>
    </div>
  );
};

export default AdoptInput;
