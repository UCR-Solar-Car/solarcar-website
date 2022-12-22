import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";

function footer() {
  return (
    <div className="flex w-full h-auto bg-solar-black justify-center  py-8">
      <div className="flex justify-evenly items-center w-1/2 text-5xl">
        <a
          href="https://www.facebook.com/UCRSolarCar/"
          className="text-solar-white hover:text-solar-gold"
        >
          <FaFacebookSquare />
        </a>
        <a href="" className="text-solar-white hover:text-solar-gold">
          <FaDiscord />
        </a>
        <a
          href="https://www.instagram.com/ucrsolarcar/?hl=en"
          className="text-solar-white hover:text-solar-gold"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.linkedin.com/company/ucr-solar-car"
          className="text-solar-white hover:text-solar-gold"
        >
          <FaLinkedin />
        </a>
        <a href="" className="text-solar-white hover:text-solar-gold">
          <FaEnvelope />
        </a>
      </div>
    </div>
  );
}
export default footer;
