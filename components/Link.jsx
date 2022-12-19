import React from "react";

const Link = () => {
  return (
    <div className="bg-solar-gold">
      <div className="text-center mt-100 p-6 font-raleway text-3xl text-solar-black">
        Project Manager
      </div>
      <div
        style={{
          backgroundColor: "#2A363D",
          marginLeft: "auto",
          marginRight: "auto",
          width: "160px",
          height: "60px",
        }}
      >
        <a
          href="https://ieee.ucr.edu/projects/solar-car"
          className="text-blue-500"
        >
          <button className="text-white bg-#2A363D hover:bg-blue-700 w-full h-full p-2.5">
            <div
              style={{
                fontFamily: "Josefin Sans",
                fontSize: "28px",
                lineHeight: "20px",
                textAlign: "center",
                color: "#FFD680",
              }}
            >
              APPLY
            </div>
          </button>
        </a>
      </div>
    </div>
  );
};

export default Link;
