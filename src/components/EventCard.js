import React from "react";

const EventCard = ({ event }) => {
  const { id, name, image, date, description, venue, time } = event;

  return (
    <div class="col-md-4">
      <div class="card-event">
        <img
          src="https://i.imgur.com/ZTkt4I5.jpg"
          class="card-img-top"
          alt="..."
        />
        <div class="card-body">
          <h5 class="card-title">{name}</h5>
          <h6 class="card-subtitle mb-2 text-muted">{venue}</h6>
          <span>
            <i className="icon heartbeat" />
            <br></br>{date}
          </span>
          <p class="card-text">{description}</p>

          <a href="#" class="btn mr-2">
            <i class="fas fa-link"></i>View Event
          </a>
          <a href="#" class="btn ">
            <i class="fab fa-github"></i> Book Now
          </a>
        </div>
      </div>
    </div>
  );
};
export default EventCard;
