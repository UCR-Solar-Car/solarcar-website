import React from "react";
import { Col, Row } from "react-bootstrap";

const platinum = new Array(2).fill(
  "https://assets.noviams.com/novi-file-uploads/tta/members/members-triad_lg_stk_k_gld_cmyk-[converted]-1.jpg"
);

const gold = new Array(3).fill(
  "https://assets.noviams.com/novi-file-uploads/tta/members/members-triad_lg_stk_k_gld_cmyk-[converted]-1.jpg"
);

const silver = new Array(1).fill(
  "https://assets.noviams.com/novi-file-uploads/tta/members/members-triad_lg_stk_k_gld_cmyk-[converted]-1.jpg"
);

const bronze = new Array(3).fill(
  "https://assets.noviams.com/novi-file-uploads/tta/members/members-triad_lg_stk_k_gld_cmyk-[converted]-1.jpg"
);

const friend = new Array(5).fill(
  "https://assets.noviams.com/novi-file-uploads/tta/members/members-triad_lg_stk_k_gld_cmyk-[converted]-1.jpg"
);

const Sponsors = () => {
  return (
    <div className="w-full flex justify-center items-center flex-col bg-solar-white">
      <span className="bg-solar-gold w-full font-josefin text-5xl p-4 text-center">
        Platinum
      </span>
      <Row className="w-10/12 flex justify-center items-center">
        {platinum.map((sponsor, index) => (
          <Col xl={6} key={index} className="flex justify-center items-center">
            <img src={sponsor} alt="sponsor" />
          </Col>
        ))}
      </Row>
      <span className="bg-solar-gold w-full font-josefin text-5xl p-4 text-center">
        Gold
      </span>
      <Row className="w-10/12 flex justify-center items-center">
        {gold.map((sponsor, index) => (
          <Col xl={3} key={index} className="flex justify-center items-center">
            <img src={sponsor} alt="sponsor" />
          </Col>
        ))}
      </Row>
      <span className="bg-solar-gold w-full font-josefin text-5xl p-4 text-center">
        Silver
      </span>
      <Row className="w-10/12 flex justify-center items-center">
        {silver.map((sponsor, index) => (
          <Col xl={3} key={index} className="flex justify-center items-center">
            <img src={sponsor} alt="sponsor" />
          </Col>
        ))}
      </Row>
      <span className="bg-solar-gold w-full font-josefin text-5xl p-4 text-center">
        Bronze
      </span>
      <Row className="w-10/12 flex justify-center items-center">
        {bronze.map((sponsor, index) => (
          <Col xl={2} key={index} className="flex justify-center items-center">
            <img src={sponsor} alt="sponsor" />
          </Col>
        ))}
      </Row>
      <span className="bg-solar-gold w-full font-josefin text-5xl p-4 text-center">
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
