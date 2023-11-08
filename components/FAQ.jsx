import React from "react";
import Accordion from "react-bootstrap/Accordion";
import { Col, Row } from "react-bootstrap";
import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";

const faqs = [
  {
    q: "What does the UCR solar car team do?",
    a: "The solar car team at UCR is a club that is made of 4 sub-teams that include Electrical, Telemetry, Mechanical, and Software. The goal is to construct a full-scaled solar car to compete in the Formula Sun Grand Prix, and the American Solar Challenge: a national collegiate competition which requires teams and their solar-powered vehicles to finish a 2,000 mile cross-country journey.",
  },
  {
    q: "How can I join the UCR solar car team?",
    a: "There is no application for joining the solar car team. You can join our Discord server to meet fellow solar car team members and to keep posted on upcoming meetings, and events.",
  },
  {
    q: "Can anyone join the UCR solar car team?",
    a: "The UCR solar car team is open to any UCR student regardless of major. Freshman and transfer students are welcome to join!",
  },
  {
    q: "When are the general meetings, events, socials?",
    a: "For the lasted information regarding any general meetings, indivualul team meetings, meetings events, or socials refer to our Discord server.",
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
