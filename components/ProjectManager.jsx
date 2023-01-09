import React from "react";

const ProjectManager = ({ reverse, children, name, imgSrc }) => {
  return (
    <div>
      <div
        className={`w-full text-4xl font-ubuntu py-3 px-5 text-solar-gray ${
          reverse
            ? "bg-solar-lightblue text-left"
            : "bg-solar-yellow text-right"
        }`}
      >
        {name}
      </div>
      <div className="flex w-full bg-solar-gray justify-center items-start">
        <div
          className={`mt-24 sm:flex w-11/12 ${
            reverse ? "flex-row-reverse" : "flex-row"
          }`}
        >
          <div className="w-full sm:w-1/2 flex justify-center">
            <svg
              className="w-full flex"
              preserveAspectRatio="xMidYMid meet"
              x="0"
              y="0"
              viewBox="0 0 600 600"
              transform="scale(1)"
            >
              <defs>
                <mask id={`${reverse ? "shape1" : "shape2"}`}>
                  <path
                    d={`${
                      reverse
                        ? "M127.2 -132.7C145.5 -78.5 127.6 -26.7 109.4 13.7C91.2 54.2 72.7 83.4 38.5 112.3C4.3 141.2 -45.6 169.7 -86.8 158.3C-128 146.8 -160.5 95.4 -180.6 33.7C-200.6 -28 -208.2 -100 -176 -157.4C-143.9 -214.7 -71.9 -257.4 -8.7 -250.4C54.5 -243.4 108.9 -186.9 127.2 -132.7"
                        : "M88.1 -90.1C117.5 -33.3 147 3.5 153.1 58.4C159.3 113.3 142.1 186.4 98.5 209.1C55 231.8 -15 204.2 -66.1 167.9C-117.1 131.5 -149.2 86.5 -171 28.3C-192.8 -29.8 -204.3 -100.9 -174.1 -157.8C-143.9 -214.7 -71.9 -257.4 -21.3 -240.4C29.3 -223.4 58.6 -146.8 88.1 -90.1"
                    }`}
                    fill="#FFFFFF"
                    transform="scale(1.3 1.2) translate(260 260)"
                  />
                </mask>
              </defs>
              <image
                mask={`url(#${reverse ? "shape2" : "shape1"})`}
                href={imgSrc}
                width="100%"
                height="100%"
                transform="scale(1) "
              />
            </svg>
          </div>
          <div
            className={`mb-5 h-2 w-9/12 sm:h-32 sm:w-2 mx-5 ${
              reverse ? "bg-solar-yellow" : "bg-solar-lightblue"
            }`}
          ></div>
          <p className="h-full w-full sm:w-1/2 text-white text-lg font-raleway font-[100]">
            {children}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectManager;
