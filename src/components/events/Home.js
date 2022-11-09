import React from "react";
import Event from "../events";
import FeaturedEvents from "../featuredEvents";

const Home = ({ events }) => {
  return (
    <div>
      <Event events={events} />
      <FeaturedEvents events={events} />
    </div>
  );
};

export default Home;
