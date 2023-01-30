import React from "react";
import { Col, Row } from "react-bootstrap";

const platinum = [
  "https://www.wcgec.ucr.edu/sites/default/files/styles/form_preview/public/logo-riverside-public-utilities_0.png?itok=ACMJ-VyZ",
  "https://images.g2crowd.com/uploads/product/image/social_landscape/social_landscape_55da269609bde6556a387629b0594314/altium-altium-designer.png",
  "https://static.wixstatic.com/media/4b18cd_11a2c1b493b745e4b68a31828ed390bb~mv2.png/v1/fit/w_2500,h_1330,al_c/4b18cd_11a2c1b493b745e4b68a31828ed390bb~mv2.png",
];

const gold = [
  "https://assets.noviams.com/novi-file-uploads/tta/members/members-triad_lg_stk_k_gld_cmyk-[converted]-1.jpg",
  "https://logos-download.com/wp-content/uploads/2016/11/ESRI_logo_logotype.png",
  "https://companieslogo.com/img/orig/ANSS_BIG-4e994f5d.png?t=1652258615",
];

const silver = [
  "https://upload.wikimedia.org/wikipedia/commons/2/21/IEEE_logo.svg",
];

const bronze = [
  "https://www.newdaysolar.com/media/logo/NDS-Logo.svg",
  "https://www.sensata.com/sites/default/files/media/images/2022-10-25/gigavac_logo_gradient_R_bg.png",
];

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
