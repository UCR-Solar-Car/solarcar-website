//rafec
import React from "react";
import { FaDiscord } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLink } from "react-icons/fa";
import { motion } from "framer-motion";

const Component = ({ title, image, discord, ig, website }) => {
  return (
    <div className="w-full flex flex-col items-start justify-center">
      <img className="aspect-square w-full" src={image} alt="Component Image" />
      ,
      <p className="text-solar-white mt-5 mb-5 text-center font-ubuntu w-full">
        {title}
      </p>
      <div className="flex flex-row justify-evenly items-center w-3/4 sm:w-1/2 text-3xl">
        {discord != "" && (
          <motion.a
            whileHover={{ scale: 1.2 }}
            transition={{ type: "spring", stiffness: 500 }}
            href={discord}
            target="_blank"
            noreferrer="noopener"
            className="text-solar-white hover:text-solar-gold"
          >
            <FaDiscord />
          </motion.a>
        )}

        {ig != "" && (
          <motion.a
            whileHover={{ scale: 1.2 }}
            transition={{ type: "spring", stiffness: 500 }}
            href={ig}
            target="_blank"
            noreferrer="noopener"
            className="text-solar-white hover:text-solar-gold"
          >
            <FaInstagram />
          </motion.a>
        )}

        {website != "" && (
          <motion.a
            whileHover={{ scale: 1.2 }}
            transition={{ type: "spring", stiffness: 500 }}
            href={website}
            target="_blank"
            noreferrer="noopener"
            className="text-solar-white hover:text-solar-gold"
          >
            <FaLink />
          </motion.a>
        )}
      </div>
    </div>
  );
};

export default Component;
