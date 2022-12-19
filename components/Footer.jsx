import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";

function footer() {
  return (
    <div className="flex w-full h-auto bg-solar-black justify-center border-t-8 border-solar-gold">
      <div className="flex text-solar-white space-x-12 m-2 text-5x1">
        <a href="https://www.facebook.com/UCRSolarCar/">
          <FaFacebookSquare />
        </a>
        <a href="">
          <FaDiscord />
        </a>
        <a href="https://www.instagram.com/ucrsolarcar/?hl=en">
          <FaInstagram />
        </a>
        <a href="https://www.linkedin.com/company/ucr-solar-car">
          <FaLinkedin />
        </a>
        <a href="">
          <FaEnvelope />
        </a>
      </div>
    </div>
  );
}
export default footer;
