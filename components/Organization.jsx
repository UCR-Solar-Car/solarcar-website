import React from "react";
import { FaDiscord, FaInstagram, FaLink } from "react-icons/fa";
import { motion } from "framer-motion";

const Organization = ({ title, image, discord, ig, website }) => {
  return (
    <div className=" w-72 flex flex-col items-center justify-center">
      <img className="aspect-square w-full" src={image} alt="Component Image" />

      <p className="text-solar-white mt-2 mb-2 text-center font-ubuntu w-full text-3xl">
        {title}
      </p>

      <div className="flex flex-row justify-center items-center w-3/4 sm:w-1/2 text-5xl">
        {discord != "" && (
          <motion.a
            whileHover={{ scale: 1.2 }}
            transition={{ type: "spring", stiffness: 500 }}
            href={discord}
            target="_blank"
            noreferrer="noopener"
            className="text-solar-white hover:text-solar-gold mr-2 ml-2"
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
            className="text-solar-white hover:text-solar-gold mr-2 ml-2"
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
            className="text-solar-white hover:text-solar-gold mr-2 ml-2"
          >
            <FaLink />
          </motion.a>
        )}
      </div>
    </div>
  );
};

export default Organization;
