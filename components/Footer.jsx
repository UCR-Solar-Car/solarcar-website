import React from "react";
import { FaFacebookSquare as FaceBookIcon } from "react-icons/fa";
import { FaDiscord as DiscordIcon } from "react-icons/fa";
import { FaInstagram as InstagramIcon } from "react-icons/fa";
import { FaLinkedin as LinkedinIcon } from "react-icons/fa";
import { FaEnvelope as EmailIcon } from "react-icons/fa";

function footer() {
  return (
    <div className="flex w-[100%] h-auto bg-[#1F1E21] justify-center border-t-8 border-[#FEC155]">
      <div className="flex text-white space-x-12 m-2 text-[50px]">
        <a href="https://www.facebook.com/UCRSolarCar/">
          <FaceBookIcon />
        </a>
        <a href="">
          <DiscordIcon />
        </a>
        <a href="https://www.instagram.com/ucrsolarcar/?hl=en">
          <InstagramIcon />
        </a>
        <a href="https://www.linkedin.com/company/ucr-solar-car">
          <LinkedinIcon />
        </a>
        <a href="">
          <EmailIcon />
        </a>
      </div>
    </div>
  );
}
export default footer;
