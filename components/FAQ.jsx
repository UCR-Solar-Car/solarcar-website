import React from "react";
import Accordion from "react-bootstrap/Accordion";
import { Col, Row } from "react-bootstrap";
import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";

const faqs = [
  {
    q: "This is a question is it 1?",
    a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Varius sit amet mattis vulputate enim nulla aliquet. Amet tellus cras adipiscing enim eu turpis egestas pretium.",
  },
  {
    q: "This is a question is it 2?",
    a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Varius sit amet mattis vulputate enim nulla aliquet. Amet tellus cras adipiscing enim eu turpis egestas pretium.",
  },
  {
    q: "This is a question is it 3?",
    a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Varius sit amet mattis vulputate enim nulla aliquet. Amet tellus cras adipiscing enim eu turpis egestas pretium.",
  },
  {
    q: "This is a question is it 4?",
    a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Varius sit amet mattis vulputate enim nulla aliquet. Amet tellus cras adipiscing enim eu turpis egestas pretium.",
  },
  {
    q: "This is a question is it 5?",
    a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Varius sit amet mattis vulputate enim nulla aliquet. Amet tellus cras adipiscing enim eu turpis egestas pretium.",
  },
  {
    q: "This is a question is it 6?",
    a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Varius sit amet mattis vulputate enim nulla aliquet. Amet tellus cras adipiscing enim eu turpis egestas pretium.",
  },
  {
    q: "This is a question is it 7?",
    a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Varius sit amet mattis vulputate enim nulla aliquet. Amet tellus cras adipiscing enim eu turpis egestas pretium.",
  },
  {
    q: "This is a question is it 8?",
    a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Varius sit amet mattis vulputate enim nulla aliquet. Amet tellus cras adipiscing enim eu turpis egestas pretium.",
  },
];

const Question = ({ index, question, answer }) => {
  const [toggle, setToggle] = useState(false);

  return (
    <Col className="pb-2">
      <Accordion.Item
        className={"!border-none underlayColor=transparent"}
        eventKey={index}
      >
        <Accordion.Button
          onClick={() => setToggle(!toggle)}
          className="!bg-solar-gray text-white after:hidden p-0 focus:!shadow-none"
        >
          <div className="!border-solar-gold !border-l-8 w-full flex justify-between items-center p-3">
            <p className="text-white text-3xl m-0 ">{question}</p>
            <div className="text-2xl m-2">
              {toggle ? <FaMinus /> : <FaPlus />}
            </div>
          </div>
        </Accordion.Button>

        <Accordion.Body
          className="!bg-solar-black flex justify-left items-center !border-l-8 !border-solar-blue"
          eventKey={index}
        >
          <p className=" text-white text-lg p-3 ">{answer}</p>
        </Accordion.Body>
      </Accordion.Item>
    </Col>
  );
};

const FAQ = () => {
  return (
    <div className=" flex flex-col font-raleway bg-solar-black">
      <p className="text-left text-white font-ubuntu text-5xl m-4">
        {">> Frequently Asked Questions"}
      </p>
      <Row>
        <Col xl={6} md={6} xs={12} className="m-0 p-0">
          <div className="flex justify-center">
            <Row className="w-10/12 flex m-0">
              <Accordion defaultActiveKey="0" alwaysOpen>
                {faqs.slice(0, faqs.length / 2).map((question, index) => (
                  <Question
                    question={question.q}
                    answer={question.a}
                    index={index}
                    key={index}
                  />
                ))}
              </Accordion>
            </Row>
          </div>
        </Col>

        <Col xl={6} md={6} xs={12} className="m-0 p-0">
          <div className="flex justify-center">
            <Row className="w-10/12 flex">
              <Accordion defaultActiveKey="0" alwaysOpen>
                {faqs
                  .slice(faqs.length / 2, faqs.length)
                  .map((question, index) => (
                    <Question
                      question={question.q}
                      answer={question.a}
                      index={index}
                      key={index}
                    />
                  ))}
              </Accordion>
            </Row>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default FAQ;
