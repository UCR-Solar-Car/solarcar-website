import React from "react";
import Link from 'next/link';


const Introduction = () => {
  return(
    <div className="box-content w-12/12  p-5 m-4 flex self-auto flex-col justify-center items-center ">
      <h1 className = "text-solar-gold font-josefin text-center text-6xl my-5">{">>About Us"}</h1>
      <div className = "px-5 py-5">
        <p className = "text-white font-raleway text-center text-2xl leading-10">The University of California Riverside Solar Car team consists of many talented, undergraduate students who aim to construct a 
          full-scaled solar car to compete in the Formula Sun Grand Prix, and the American Solar Challenge: a national collegiate competition 
          which requires teams and their solar-powered vehicles to finish a 2,000 mile cross-country journey.
        </p>
      </div>
      <div className="mxauto py-5">
        <Link href="./about">
          <button className = "rounded-full bg-solar-lightblue font-josefin text-solar-gray px-5 w-72 h-14 mx-auto my-3s">
            {"LEARN MORE>>"}
          </button>
        </Link>
      </div>

    </div>
  )
};

export default Introduction;