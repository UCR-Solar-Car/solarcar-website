import React from "react";
import Link from "next/link";

const Introduction = () => {
  return (
    <div className=" flex items-center justify-center ">
      <div className="box-content w-10/12  p-5 m-4 flex self-auto flex-col justify-center items-center ">
        <p className="font-ubuntu text-center text-5xl my-5">
          <span className="text-solar-gold">Founded by co-founders </span>
          <span className="text-solar-white">Kyle Semelka </span>
          <span className="text-solar-gold">and </span>
          <span className="text-solar-white">Paven Bhogal </span>
          <span className="text-solar-gold">in 2017</span>
        </p>
        <img className="w-full object-cover" src={"GroupPhoto.png"} alt="" />
        <p className="text-solar-gold font-ubuntu text-center text-6xl my-5">
          {">>About Us"}
        </p>
        {/* <div className="px-5 py-5"> */}
        <p className="text-white font-raleway text-center text-2xl ">
          The University of California Riverside Solar Car team consists of many
          talented, undergraduate students who aim to construct a full-scaled
          solar car to compete in the Formula Sun Grand Prix, and the American
          Solar Challenge: a national collegiate competition which requires
          teams and their solar-powered vehicles to finish a 2,000 mile
          cross-country journey.
        </p>

        <Link
          href="/about"
          className="rounded-full m-5 bg-solar-lightblue hover:bg-transparent font-ubuntu text-solar-gray hover:text-white py-2 px-4 border no-underline "
        >
          {"LEARN MORE >>"}
        </Link>
      </div>
    </div>
  );
};

export default Introduction;
