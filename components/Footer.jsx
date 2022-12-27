import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

const openInNewTab = (url) => {
  window.open(url, "_blank", "noopener,noreferrer");
};

function footer() {
  return (
    <div className="flex w-full bg-solar-black justify-center py-8">
      <div className="flex justify-evenly items-center w-3/4 sm:w-1/2 text-5xl">
        <button
          onClick={() => openInNewTab("https://www.facebook.com/UCRSolarCar/")}
        >
          <motion.a
            whileHover={{ scale: 1.2 }}
            transition={{ type: "spring", stiffness: 500 }}
            className="text-solar-white hover:text-solar-gold"
          >
            <FaFacebookSquare />
          </motion.a>
        </button>

        <button onClick={() => openInNewTab("https://discord.gg/eGskEcjNvb")}>
          <motion.a
            whileHover={{ scale: 1.2 }}
            transition={{ type: "spring", stiffness: 500 }}
            className="text-solar-white hover:text-solar-gold"
          >
            <FaDiscord />
          </motion.a>
        </button>

        <button
          onClick={() =>
            openInNewTab("https://www.instagram.com/ucrsolarcar/?hl=en")
          }
        >
          <motion.a
            whileHover={{ scale: 1.2 }}
            transition={{ type: "spring", stiffness: 500 }}
            className="text-solar-white hover:text-solar-gold"
          >
            <FaInstagram />
          </motion.a>
        </button>

        <button
          onClick={() =>
            openInNewTab("https://www.linkedin.com/company/ucr-solar-car")
          }
        >
          <motion.a
            whileHover={{ scale: 1.2 }}
            transition={{ type: "spring", stiffness: 500 }}
            className="text-solar-white hover:text-solar-gold"
          >
            <FaLinkedin />
          </motion.a>
        </button>

        <button onClick={() => openInNewTab("mailto:ucrsolarcar@gmail.com")}>
          <motion.a
            whileHover={{ scale: 1.2 }}
            transition={{ type: "spring", stiffness: 500 }}
            className="text-solar-white hover:text-solar-gold"
          >
            <FaEnvelope />
          </motion.a>
        </button>
      </div>
    </div>
  );
}
export default footer;
