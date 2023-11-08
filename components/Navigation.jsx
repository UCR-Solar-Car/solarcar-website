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
    <div className="bg-gradient-to-b z-50 from-black/80 fixed w-full flex justify-between items-center flex-row">
      <Link href="/" className="w-1/6">
        <img alt="logo" src="logo.png" />
      </Link>
      <div className="w-1/2 flex justify-end md:justify-between items-center mr-5 ">
        <motion.div
          whileHover={{ scale: 1.2 }}
          transition={{ type: "spring", stiffness: 500 }}
          className="hidden md:block m-3"
        >
          <Link
            href="/about"
            className=" no-underline font-zendots text-sm md:text-xl text-[#ffffff] hover:text-solar-lightblue"
          >
            About
          </Link>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.2 }}
          transition={{ type: "spring", stiffness: 500 }}
          className="hidden md:block m-3"
        >
          <Link
            href="/team"
            className=" no-underline font-zendots text-sm md:text-xl text-[#ffffff] hover:text-solar-lightblue"
          >
            Team
          </Link>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.2 }}
          transition={{ type: "spring", stiffness: 500 }}
          className="hidden md:block m-3"
        >
          <Link
            href="/sponsors"
            className=" no-underline font-zendots text-sm md:text-xl text-[#ffffff] hover:text-solar-lightblue"
          >
            Sponsors
          </Link>
        </motion.div>
        <motion.div
          className="hidden md:block m-3 "
          whileHover={{ scale: 1.2 }}
          transition={{ type: "spring", stiffness: 500 }}
        >
          <Link
            href="/adopt"
            className="py-2 px-4 rounded-full no-underline font-zendots text-sm md:text-xl text-solar-gray hover:text-solar-gray bg-solar-gold"
          >
            Donate
          </Link>
        </motion.div>
        <motion.div
          onClick={() => {
            setOpen(false);
          }}
          variants={sidebar}
          animate={open ? "open" : "closed"}
          className="fixed h-screen w-full md:w-1/3 bg-solar-yellow top-0 right-0 flex justify-start items-center z-50"
        >
          <CgChevronDoubleLeft
            className="text-solar-gray text-5xl hover:cursor-pointer hover:text-solar-blue fixed top-2 right-2"
            onClick={() => {
              setOpen(false);
            }}
          />
          <div className="flex flex-col ml-8">
            <motion.div
              whileHover={{ x: 10 }}
              transition={{ type: "spring", stiffness: 500 }}
              className="m-1"
            >
              <Link
                className="no-underline font-zendots text-2xl text-solar-gray hover:text-solar-blue"
                href="/about"
              >
                About Us
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ x: 10 }}
              transition={{ type: "spring", stiffness: 500 }}
              className="m-1"
            >
              <Link
                className="m-1 no-underline font-zendots text-2xl text-solar-gray hover:text-solar-blue"
                href="/team"
              >
                Team
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ x: 10 }}
              transition={{ type: "spring", stiffness: 500 }}
              className="m-1"
            >
              <Link
                className="no-underline font-zendots text-2xl text-solar-gray hover:text-solar-blue"
                href="/sponsors"
              >
                Sponsors
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ x: 10 }}
              transition={{ type: "spring", stiffness: 500 }}
              className="m-1"
            >
              <Link
                className="no-underline font-zendots text-2xl text-solar-gray hover:text-solar-blue"
                href="/recruitment"
              >
                Recruitment
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ x: 10 }}
              transition={{ type: "spring", stiffness: 500 }}
              className="m-1"
            >
              <Link
                className="no-underline font-zendots text-2xl text-solar-gray hover:text-solar-blue"
                href="/links"
              >
                Lead Application
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ x: 10 }}
              transition={{ type: "spring", stiffness: 500 }}
              className="m-1"
            >
              <Link
                className="no-underline font-zendots text-2xl text-solar-gray hover:text-solar-blue"
                href="/resources"
              >
                Events
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.2 }}
              transition={{ type: "spring", stiffness: 500 }}
              className="m-3"
            >
              <Link
                className="py-2 px-4 rounded-full no-underline font-zendots text-xl text-solar-gray hover:text-solar-gray bg-solar-gold"
                href="/adopt"
              >
                Donate
              </Link>
            </motion.div>
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
