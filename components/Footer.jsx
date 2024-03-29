import React from "react";
import {
  FaFacebookSquare,
  FaDiscord,
  FaInstagram,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <div className="flex w-full bg-solar-black justify-center py-8">
      <div className="flex justify-evenly items-center w-3/4 sm:w-1/2 text-5xl">
        <motion.a
          whileHover={{ scale: 1.2 }}
          transition={{ type: "spring", stiffness: 500 }}
          href="https://www.facebook.com/UCRSolarCar/"
          target="_blank"
          noreferrer="noopener"
          className="text-solar-white hover:text-solar-gold"
        >
          <FaFacebookSquare />
        </motion.a>

        <motion.a
          whileHover={{ scale: 1.2 }}
          transition={{ type: "spring", stiffness: 500 }}
          href="https://discord.gg/eGskEcjNvb"
          target="_blank"
          noreferrer="noopener"
          className="text-solar-white hover:text-solar-gold"
        >
          <FaDiscord />
        </motion.a>

        <motion.a
          whileHover={{ scale: 1.2 }}
          transition={{ type: "spring", stiffness: 500 }}
          href="https://www.instagram.com/ucrsolarcar/?hl=en"
          target="_blank"
          noreferrer="noopener"
          className="text-solar-white hover:text-solar-gold"
        >
          <FaInstagram />
        </motion.a>

        <motion.a
          whileHover={{ scale: 1.2 }}
          transition={{ type: "spring", stiffness: 500 }}
          href="https://www.linkedin.com/company/ucr-solar-car"
          target="_blank"
          noreferrer="noopener"
          className="text-solar-white hover:text-solar-gold"
        >
          <FaLinkedin />
        </motion.a>

        <motion.a
          whileHover={{ scale: 1.2 }}
          transition={{ type: "spring", stiffness: 500 }}
          href="mailto:ucrsolarcar@gmail.com"
          target="_blank"
          noreferrer="noopener"
          className="text-solar-white hover:text-solar-gold"
        >
          <FaEnvelope />
        </motion.a>
      </div>
    </div>
  );
};
export default Footer;
