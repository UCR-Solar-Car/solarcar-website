import React from "react";
import Event from "./Event";

const events = [
  {
    name: "Event Name",
    date: "Thursday, Match 31, 2022",
    time: "Time: 10:00 AM to 7:00 PM",
    location: "Panda Express",
    address: "900 University Ave. Riverside CA 92521",
    link: "https://www.google.com",
  },
  {
    name: "Event Name",
    date: "Thursday, Match 31, 2022",
    time: "Time: 10:00 AM to 7:00 PM",
    location: "Panda Express",
    address: "900 University Ave. Riverside CA 92521",
    link: "https://www.google.com",
  },
  {
    name: "Event Name",
    date: "Thursday, Match 31, 2022",
    time: "Time: 10:00 AM to 7:00 PM",
    location: "Panda Express",
    address: "900 University Ave. Riverside CA 92521",
    link: "https://www.google.com",
  },
];

const Events = () => {
  return (
    <div className="">
      {events.map((event, index) => (
        <Event
          key={index}
          name={event.name}
          date={event.date}
          time={event.time}
          location={event.location}
          address={event.address}
          link={event.link}
        />
      ))}
    </div>
  );
};

export default Events;
