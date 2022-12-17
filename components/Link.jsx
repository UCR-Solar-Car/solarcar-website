import React from "react";

// const Link = () => {
//   return <div>Link</div>;
// };

// export default Link;


function YellowRectangleWithButton() {
  return (
    <div className='bg-#FEC155 h-331 w-358 relative'>
      <div
        className='text-center mt-30'
        style={{
          fontFamily: 'Raleway',
          fontSize: '48px',
          fontWeight: '400',
          color: '#1F1E21',
          lineHeight: '56.35px',
        }}
      >
        Project Manager
      </div>
      <div
        className='text-center absolute bottom-0 left-0 right-0 mb-33'
        style={{
          marginLeft: 'auto',
          marginRight: 'auto',
          width: '232px',
          height: '94px',
        }}
      >
        <a href='https://ieee.ucr.edu/projects/solar-car' className='text-blue-500'>
          <button className='text-white bg-#2A363D hover:bg-blue-700 w-full h-full'>
            <div
              style={{
                fontFamily: 'Josefin Sans',
                fontSize: '40px',
                lineHeight: '40px',
                textAlign: 'center',
                color: '#FFD680',
              }}
            >
              APPLY
            </div>
          </button>
        </a>
      </div>
    </div>
  );
}

export default YellowRectangleWithButton;