import React from "react";
import { FaDiscord, FaLink, FaEnvelope } from "react-icons/fa";

const Recruitment = () => {
  return (
    <div className="w-full relative flex justify-center items-center">
      <div className="w-full">
        <img
          src="/BackLeftRender 1.png"
          alt=""
          className="w-full h-50 object-cover object-center"
        />
      </div>
      <div className="absolute top-0 left-0 w-full flex justify-center items-center flex-col m-0 p-0  bg-gradient-to-b from-transparent to-black h-full">
        <div className="w-10/12 flex justify-start items-center">
          <p className="font-raleway text-2xl m-0 p-4 w-1/2">
            UCR Solar Car is always on the lookout for dedicated and talented
            students and faculty to join us!
          </p>
        </div>
        <div className="w-10/12 flex justify-end items-center">
          <p className="font-raleway text-2xl text-solar-white m-0 p-4 w-1/2 border-l-8 border-solar-gold">
            With our multidisciplinary teams, there&apos;s a spot for everyone!
            If interested, reach out for more information! To recieve official
            announcements and updates, join our Discord server below! Here, you
            can contact team leads and meet your teammates! If you have any
            additional questions, please contact us through email below!
          </p>
        </div>
        <div className="w-10/12 flex justify-evenly items-center my-4">
          <div className="px-4 py-2 border-4 rounded-full flex justify-center items-center overflow-hidden relative group cursor-pointer border-solar-white text-solar-white">
            <a
              href="https://discord.gg/eGskEcjNvb"
              className="text-solar-white flex no-underline"
            >
              <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 bg-solar-white hover:text-solar-black top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease -translate-x-14"></span>
              <FaDiscord className="mr-2 text-3xl relative hover:text-solar-black transition duration-300 group-hover:text-solar-black ease" />
              <button className="m-0 text-2xl relative hover:text-solar-black transition duration-300 group-hover:text-solar-black ease">
                Discord
              </button>
            </a>
          </div>
          <div className="px-4 py-2 border-4 rounded-full flex justify-center items-center overflow-hidden relative group cursor-pointer border-solar-white text-solar-white">
            <a
              href="https://highlanderlink.ucr.edu/organization/ieee"
              className="text-solar-white flex no-underline"
            >
              <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45  bg-solar-white hover:text-solar-black top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease -translate-x-4"></span>
              <FaLink className="mr-2 text-3xl relative hover:text-solar-black transition duration-300 group-hover:text-solar-black ease" />
              <button className="m-0 text-2xl relative hover:text-solar-black transition duration-300 group-hover:text-solar-black ease">
                Highlander Link
              </button>
            </a>
          </div>
          <div className="px-4 py-2 border-4 rounded-full flex justify-center items-center overflow-hidden relative group cursor-pointer border-solar-white text-solar-white">
            <a
              href="mailto:ucrsolarcar@gmail.com"
              className="text-solar-white flex no-underline"
            >
              <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45  bg-solar-white hover:text-solar-black top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease -translate-x-12"></span>
              <FaEnvelope className="mr-2 text-3xl relative hover:text-solar-black transition duration-300 group-hover:text-solar-black ease" />
              <button className="m-0 text-2xl relative hover:text-solar-black transition duration-300 group-hover:text-solar-black ease">
                Questions
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recruitment;
