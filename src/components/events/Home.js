import React from "react";
import Event from "../events";
import FeaturedEvents from "../featuredEvents";
import BookEvent from "../BookEvent";
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


const Home = ({ events }) => {
  const [eventsDisplay, setEventsDisplay] = useState([]);

  function handleEvent(event) {
    const newEvent = eventsDisplay.slice();
    newEvent.push(event);
    console.log(event.id);
    {
      setEventsDisplay(newEvent);
    }
  }
  return (
    <div>
      {/* bots={botsDisplay} */}

      <Event events={events} />
      <FeaturedEvents events={events} onSubmittEvent={handleEvent} />
      {/* <BookEvent events={eventsDisplay} /> */}

    </div>
  );
};

export default Home;
