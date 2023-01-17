import React from "react";

const AdoptText = () => {
  return (
    <div className="w-full bg-solar-black flex justify-center items-center">
      <div className=" text-solar-white font-ubuntu text-2xl text-center w-9/12 my-4">
        Welcome to the{" "}
        <span className="text-solar-gold">Adopt a Cell Program</span>! Here you
        can adopt one of the solar cells that will be placed on the final solar
        vehicle.
        <br />
        <br />
        <span className="text-solar-gold">
          To adopt a solar cell, we kindly request a $10 for every solar cell!
        </span>
        <br />
        <br />
        You may adopt multiple solar cells! Once you have donated, a member of
        our team will confirm the donation and you will officially have adopted
        a solar cell.
        <br />
        <br />
        <span className="text-solar-gold">
          Please check out the various cells we have available to pick from!
        </span>
        <br />
        <br />
        You can donate cash to one of the leads or Paypal.
      </div>
    </div>
  );
};

export default AdoptText;
