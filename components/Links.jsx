import React, { useEffect, useState } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Link from "./Link";

const links = new Array(10).fill({
  title: "Project Manager",
  link: "https://github.com/UCR-Solar-Car",
});

const Links = () => {
  const [screenSize, setScreenSize] = useState("");
  useEffect(() => {
    addEventListener("resize", () => {
      setScreenSize(
        window.innerWidth >= 992 ? "lg" : window.innerWidth >= 576 ? "sm" : "xs"
      );
    });
  }, []);
  return (
    <div className="flex justify-center items-center">
      <Row className="w-10/12">
        {links.map((link, index) => (
          <Col key={index} xs={6} sm={4} lg={3} className="p-2">
            {screenSize == "xs" ? (
              <Link
                link={link.link}
                title={link.title}
                backgroundColor={
                  Math.floor((index + 1) / 2) % 2 == 0
                    ? "solar-blue "
                    : "solar-gold "
                }
              />
            ) : screenSize == "lg" && index % 8 < 4 ? (
              <Link
                link={link.link}
                title={link.title}
                backgroundColor={index % 2 == 0 ? "solar-blue " : "solar-gold "}
              />
            ) : (
              <Link
                link={link.link}
                title={link.title}
                backgroundColor={index % 2 != 0 ? "solar-blue " : "solar-gold "}
              />
            )}
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Links;
