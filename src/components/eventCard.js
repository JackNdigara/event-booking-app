import React from "react";

const EventCard = () => {





  return (
    <div class="container mx-auto mt-4">
      <div class="row">
        <div class="col-md-4">
          <div class="card-event">
            <img
              src="https://i.imgur.com/ZTkt4I5.jpg"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">Dev Fest Nairobi 2022</h5>
              <h6 class="card-subtitle mb-2 text-muted">Event by Google</h6>
              <p class="card-text">
              GDG DevFest Nairobi is a 100% community organized
              conference with 2000+ amazing engineers (embarking on a nomadic
               journey from all corners of the continent)
              </p>
              <a href="#" class="btn mr-2">
                <i class="fas fa-link"></i> View Event
              </a>
              <a href="#" class="btn ">
                <i class="fab fa-github"></i> Book Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default EventCard;
