import React from "react";
import { Link } from "react-router-dom";

const EventCard = ({ event }) => {
  const { id, name, image, date, description, venue, time,tickets } = event;
  const handleViewEvent = () => {
    console.log("View event");
  };
  return (
    <div class="col-md-4">
      <div class="card-event">
        <img
          src="https://i.imgur.com/ZTkt4I5.jpg"
          class="card-img-top"
          alt="..."
        />
        <div class="card-body">
          <h4 class="card-title">{name}</h4> <br></br>
          <h5 class="card-subtitle mb-2 text-muted">
            {date} @ {time}
          </h5>
          <h6 class="card-subtitle mb-2 text-muted"></h6>
          <p class="card-text">{description}</p>
          <a href="#" class="btn mr-2" onClick={handleViewEvent}>
            <i class="fas fa-link"></i>View Event
          </a>
          <a href="#" class="btn ">
          <Link class="nav-link" to="/bookevent">
          Book Now
                </Link>
            <i class="fab fa-github"></i>
          </a>

            <i class="fab fa-github"> {tickets}  tickets available</i>

        </div>
      </div>
    </div>
  );
};
export default EventCard;
