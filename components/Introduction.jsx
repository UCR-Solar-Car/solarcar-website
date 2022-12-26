import React from "react";
import Link from "next/link";

const Introduction = () => {
  return (
    <div className=" flex items-center justify-center ">
      <div className="box-content w-10/12  p-5 m-4 flex self-auto flex-col justify-center items-center ">
        <p className="font-josefin text-center text-6xl my-5">
          <span className="text-solar-gold">Founded by co-founders </span>
          <span className="text-solar-white">Kyle Semelka </span>
          <span className="text-solar-gold">and </span>
          <span className="text-solar-white">Paven Bhogal </span>
          <span className="text-solar-gold">in 2017</span>
        </p>
        <img className="w-full h-[75vh] object-cover" src={"GroupPhoto.png"} />
        <p className="text-solar-gold font-josefin text-center text-6xl my-5">
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
        {/* </div> */}
        {/* <div className=" py-5"> */}
        <Link href="./about">
          <p className="rounded-full bg-solar-lightblue font-josefin text-solar-gray px-5 mx-auto">
            {"LEARN MORE>>"}
          </p>
        </Link>
        {/* </div> */}
      </div>
    </div>
  );
};

export default Introduction;
