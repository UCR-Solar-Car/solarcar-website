import React from "react";
import { FaDiscord, FaLink, FaEnvelope } from "react-icons/fa";

const Recruitment = () => {
  return (
    <div className="w-full relative flex justify-center items-center">
      <div className="w-full">
        <img src="/BackLeftRender 1.png" alt="" className="w-[100vw]" />
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
          <div className="px-4 py-2 border-4 border-solar-white text-solar-white rounded-full flex justify-center items-center font-raleway">
            <FaDiscord className="mr-2 text-3xl" />
            <p className="m-0 text-2xl">Discord</p>
          </div>
          <div className="px-4 py-2 border-4 border-solar-white text-solar-white rounded-full flex justify-center items-center font-raleway">
            <FaLink className="mr-2 text-3xl" />
            <p className="m-0 text-2xl">Highlander Link</p>
          </div>
          <div className="px-4 py-2 border-4 border-solar-white text-solar-white rounded-full flex justify-center items-center font-raleway">
            <FaEnvelope className="mr-2 text-3xl" />
            <p className="m-0 text-2xl">Questions</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recruitment;
