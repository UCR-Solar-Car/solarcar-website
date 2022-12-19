import React from "react";

// const Link = () => {
//   return <div>Link</div>;
// };

// export default Link;
// overflow: hidden;

const Link = () => {
  return (
    <div className="bg-[#FEC155] h-331 w-358 relative block">
      <div
        className="text-center mt-100 p-6"
        style={{
          fontFamily: "Raleway",
          fontSize: "37px",
          fontWeight: "400",
          color: "#1F1E21",
          lineHeight: "38px",
          width: "100%", // Add this line
          letterSpacing: "0.00001px",
        }}
      >
        Project Manager
      </div>
      <div
        // className="text-center absolute bottom-0 left-0 right-0 mb-33"
        style={{
          backgroundColor: "#2A363D",
          marginLeft: "auto",
          marginRight: "auto",
          width: "160px",
          height: "60px",
          // letterSpacing: "2100px"
          // padding: "25px"
          // padding: "7px"
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
