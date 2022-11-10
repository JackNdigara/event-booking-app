import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const EventDetail = (events) => {
  const [event, setEvent] = useState("");
  const params = useParams();
  const { id } = params;

  useEffect(() => {
    fetch(`http://127.0.0.1:9292/events/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setEvent(data);
      });
  }, []);

  console.log(event);

  return <div>{event.name}</div>;
};

export default EventDetail;
