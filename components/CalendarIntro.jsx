import React from "react";

const CalendarIntro = () => {
  return (
    <div className=" bg-solar-black flex items-center justify-center ">
      <div className="w-11/12 m-32 flex self-auto flex-col justify-center items-center font-josefin text-center text-4xl">
        <p className="text-solar-gold m-0">
          Below we have our schedule for meetings!
        </p>
        <p className="text-solar-white m-0">
          Please refer to it to ensure you are able to attend the correct
          subteam meeting.
        </p>
        <p className="text-solar-blue m-0">
          If unsure, please contact one of your team leads. Meeting places will
          be different for every team, please refer to Discord if you are
          unsure.
        </p>
      </div>
    </div>
  );
};

export default CalendarIntro;
