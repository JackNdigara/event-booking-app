import React from "react";
import EventCard from "./EventCard";

const FeaturedEvents = ({ events }) => {
  const eventList = events.map((event) => (
    <EventCard key={event.id} event={event} />
  ));
  // console.log(events.name)

  return (
    <div className="ui four column grid">
      <div className="row">{eventList}</div>
    </div>
  );
};
export default FeaturedEvents;
