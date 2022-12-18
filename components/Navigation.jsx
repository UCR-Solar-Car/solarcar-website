import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { CgMenu, CgChevronDoubleLeft } from "react-icons/cg";
const Navigation = () => {
  const sidebar = {
    open: (height = 1000) => ({
      clipPath: `circle(${height * 2 + 200}px at 300px 40px)`,
      transition: {
        type: "spring",
        stiffness: 20,
        restDelta: 2,
      },
    }),
    closed: {
      clipPath: "circle(0px at 300px 40px)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };
  const [open, setOpen] = useState(false);
  return (
    <div className="w-full flex justify-between items-center flex-row">
      <Link href="/" className="w-1/6">
        <img alt="logo" src="logo.png"></img>
      </Link>
      <div className="w-1/2 flex justify-end md:justify-between items-center mr-5 ">
        <motion.a
          whileHover={{ scale: 1.2 }}
          transition={{ type: "spring", stiffness: 500 }}
          className="hidden md:block m-3 no-underline font-zendots text-sm md:text-xl text-[#ffffff] hover:text-solar-lightblue"
          href="/about"
        >
          About
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.2 }}
          transition={{ type: "spring", stiffness: 500 }}
          className="hidden md:block m-3 no-underline font-zendots text-sm md:text-xl text-[#ffffff] hover:text-solar-lightblue"
          href="/team"
        >
          Team
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.2 }}
          transition={{ type: "spring", stiffness: 500 }}
          className="hidden md:block m-3 no-underline font-zendots text-sm md:text-xl text-[#ffffff] hover:text-solar-lightblue"
          href="/sponsors"
        >
          Sponsors
        </motion.a>
        <motion.a
          className="hidden md:block py-2 px-4 rounded-full m-3 no-underline font-zendots text-sm md:text-xl text-solar-gray hover:text-solar-gray bg-solar-gold"
          href="/adopt"
          whileHover={{ scale: 1.2 }}
          transition={{ type: "spring", stiffness: 500 }}
        >
          Donate
        </motion.a>
        <motion.div
          onClick={() => {
            setOpen(false);
          }}
          variants={sidebar}
          animate={open ? "open" : "closed"}
          className="fixed h-screen w-full md:w-1/3 bg-solar-yellow top-0 right-0 flex justify-start items-center"
        >
          <CgChevronDoubleLeft
            className="text-solar-gray text-5xl hover:cursor-pointer hover:text-solar-blue fixed top-2 right-2"
            onClick={() => {
              setOpen(false);
            }}
          />
          <div className="flex flex-col ml-8">
            <motion.a
              whileHover={{ x: 10 }}
              transition={{ type: "spring", stiffness: 500 }}
              className="m-1 no-underline font-zendots text-2xl text-solar-gray hover:text-solar-blue"
              href="/about"
            >
              About Us
            </motion.a>
            <motion.a
              whileHover={{ x: 10 }}
              transition={{ type: "spring", stiffness: 500 }}
              className="m-1 no-underline font-zendots text-2xl text-solar-gray hover:text-solar-blue"
              href="/team"
            >
              Team
            </motion.a>
            <motion.a
              whileHover={{ x: 10 }}
              transition={{ type: "spring", stiffness: 500 }}
              className="m-1 no-underline font-zendots text-2xl text-solar-gray hover:text-solar-blue"
              href="/sponsors"
            >
              Sponsors
            </motion.a>
            <motion.a
              whileHover={{ x: 10 }}
              transition={{ type: "spring", stiffness: 500 }}
              className="m-1 no-underline font-zendots text-2xl text-solar-gray hover:text-solar-blue"
              href="/recruitment"
            >
              Recruitment
            </motion.a>
            <motion.a
              whileHover={{ x: 10 }}
              transition={{ type: "spring", stiffness: 500 }}
              className="m-1 no-underline font-zendots text-2xl text-solar-gray hover:text-solar-blue"
              href="/links"
            >
              Lead Application
            </motion.a>
            <motion.a
              whileHover={{ x: 10 }}
              transition={{ type: "spring", stiffness: 500 }}
              className="m-1 no-underline font-zendots text-2xl text-solar-gray hover:text-solar-blue"
              href="/resources"
            >
              Events
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2 }}
              transition={{ type: "spring", stiffness: 500 }}
              className="py-2 px-4 rounded-full m-3 no-underline font-zendots text-xl text-solar-gray hover:text-solar-gray bg-solar-gold"
              href="/adopt"
            >
              Donate
            </motion.a>
          </div>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.2 }}
          transition={{ type: "spring", stiffness: 500 }}
          className="hover:cursor-pointer"
          onClick={() => {
            setOpen(true);
          }}
        >
          <CgMenu className="text-white text-3xl" />
        </motion.div>
      </div>
    </div>
  );
};

export default Navigation;
