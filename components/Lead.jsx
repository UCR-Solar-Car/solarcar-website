import React from "react";

const Lead = ({ position, name, photo }) => {
  return (
    <div>
      <img src={photo} alt=" " />

      <p className=" text-solar-gold text-center font-ubuntu text-xl p-2.5 m-0">
        {position}
      </p>
      <p className="text-solar-white text-center font-raleway text-lg p-0 m-0">
        {name}
      </p>
    </div>
  );
};

export default Lead;
