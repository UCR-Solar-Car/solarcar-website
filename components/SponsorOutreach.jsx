import React from "react";

const SponsorOutreach = () => {
  return (
    <div className="bg-solar-black w-full flex justify-center items-center flex-col">
      <div className="w-10/12 text-solar-white font-ubuntu text-3xl text-center py-4">
        Interested in becoming a sponser? <br />
        Learn more below!
      </div>
      <a
        href="/adopt"
        target="_blank"
        className="border-2 text-white !no-underline border-solar-white hover:bg-solar-blue px-12 py-2 rounded-full"
      >
        BECOME A SPONSOR {">>"}
      </a>
    </div>
  );
};

export default SponsorOutreach;
