import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const CoreValues = () => {
  return (
    <div className="font-raleway font-light flex flex-col items-center">
      <p className="m-4 font-ubuntu w-10/12 text-left text-solar-white font-light text-5xl">
        {">> Core Values"}
      </p>
      <Row className="text-solar-white mx-auto h-full flex justify-between item-center w-10/12">
        {/* Large and Xl screens */}
        <Col
          sm={6}
          lg={3}
          className="text-center my-3 p-3 border-l-2 d-none d-md-block"
        >
          <p className="flex justify-center text-solar-lightblue text-4xl align-top">
            Leadership
          </p>
          <p className="flex justify-center w-11/12  p-2 text-2xl">
            The UCR Solar Car team encourages members to be strong leaders in
            their perspective industries and smart decisions makers
          </p>
        </Col>
        <Col
          sm={6}
          lg={3}
          className="text-center my-3 p-3 border-l-2 d-none d-md-block"
        >
          <p className="flex justify-center  text-solar-gold text-4xl align-top">
            Innovation
          </p>
          <p className="flex justify-center w-11/12 text-2xl p-2">
            The leads and all other members of the team work hard everyday to
            make creative improvements to the solar car electrically,
            mechanically, and design wise
          </p>
        </Col>
        <Col
          sm={6}
          lg={3}
          className="text-center h-full my-3 p-3 border-l-2 d-none d-md-block"
        >
          <p className="flex justify-center text-solar-lightblue text-4xl align-top">
            Dedication
          </p>
          <p className="flex justify-center w-11/12 text-2xl p-2">
            Countless hours are dedicated outside of school to improve and
            perfect our solar car. Without the dedication of our team, progress
            and completion would not be possible
          </p>
        </Col>
        <Col
          sm={6}
          lg={3}
          className="text-center my-3 p-3 border-x-2 d-none d-lg-block"
        >
          <p className="flex justify-center  text-solar-gold text-4xl align-top">
            Teamwork
          </p>
          <p className="flex justify-center w-11/12 text-2xl p-2">
            The UCR Solar Car would not be possible without all members of the
            team, so we encourage strong collaboration, open communication, and
            team bonding
          </p>
        </Col>

        {/* medium screens */}
        <Col
          sm={6}
          lg={3}
          className="text-center my-3 p-3 border-l-2 d-none d-md-block d-lg-none"
        >
          <p className="flex justify-center  text-solar-gold text-5xl align-top">
            Teamwork
          </p>
          <p className="flex justify-center w-11/12 text-2xl p-2">
            The UCR Solar Car would not be possible without all members of the
            team, so we encourage strong collaboration, open communication, and
            team bonding
          </p>
        </Col>

        {/* Small Screens*/}
        <Col sm={12} className="text-center my-3 p-3 border-t-2 d-md-none">
          <p className="flex justify-center text-solar-lightblue text-5xl align-top">
            Leadership
          </p>
          <p className="flex justify-center w-11/12 text-2xl p-2">
            The UCR Solar Car team encourages members to be strong leaders in
            their perspective industries and smart decisions makers
          </p>
        </Col>
        <Col sm={12} className="text-center my-3 p-3 border-t-2 d-md-none">
          <p className="flex justify-center text-solar-gold text-5xl align-top">
            Innovation
          </p>
          <p className="flex justify-center w-11/12 text-2xl p-2">
            The leads and all other members of the team work hard everyday to
            make creative improvements to the solar car electrically,
            mechanically, and design wise
          </p>
        </Col>
        <Col
          sm={12}
          className="text-center h-full w-full my-3 p-3 border-t-2 d-md-none"
        >
          <p className="flex justify-center text-solar-lightblue text-5xl align-top">
            Dedication
          </p>
          <p className="flex justify-center w-11/12 text-2xl p-2">
            Countless hours are dedicated outside of school to improve and
            perfect our solar car. Without the dedication of our team, progress
            and completion would not be possible
          </p>
        </Col>
        <Col sm={12} className="text-center my-3 p-3 border-y-2 d-md-none">
          <p className="flex justify-center text-solar-gold text-5xl align-top">
            Teamwork
          </p>
          <p className="flex justify-center w-11/12 text-2xl p-2">
            The UCR Solar Car would not be possible without all members of the
            team, so we encourage strong collaboration, open communication, and
            team bonding
          </p>
        </Col>
      </Row>
    </div>
  );
};

export default CoreValues;
