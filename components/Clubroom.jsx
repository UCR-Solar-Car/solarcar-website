import React from "react";

const Clubroom = () => {
  return (
    <div className="w-full relative flex justify-center items-center">
      <div className="w-full">
        <img src="/Chassis 1.png" alt="" className="w-full h-screen" />
      </div>
      <div className="absolute top-0 left-0 w-full flex justify-center items-center flex-col m-0 p-0  bg-gradient-to-b from-transparent to-black h-full">
        <div className="w-10/12 flex justify-start items-center">
          <p className="font-raleway text-5xl m-0 p-4 w-1/2 text-solar-white">
            Solarcar Clubroom
          </p>
        </div>
        <div className="w-10/12 flex items-center">
          <p className="font-raleway text-2xl text-solar-white m-0 p-4 w-2/3 border-l-8 border-solar-gold">
            With our multidisciplinary teams, there&apos;s a spot for everyone!
            If interested, reach out for more information! To recieve official
            announcements and updates, join our Discord server below! Here, you
            can contact team leads and meet your teammates! If you have any
            additional questions, please contact us through email below!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Clubroom;
