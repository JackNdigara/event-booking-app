import React from "react";

const Event = () => {
  return (
    <div>
      {/* <!-- Header--> */}
      <header class="py-5">
        <div class="container px-lg-5">
          <div class="p-4 p-lg-5 bg-light rounded-3 text-center">
            <div class="m-4 m-lg-5">
              <h1 class="display-5 fw-bold"> Welcome to Eventify </h1>
              <p class="fs-4">
                Events Booking platform deal in events booking and events
                planning we offer members opportunity to book events with us,
                track event status and offer detailed information about upcoming
                events
              </p>
              <a class="btn btn-primary btn-lg" href="#!">
                Upcoming Events
              </a>
            </div>
          </div>
        </div>
      </header>
      {/* <!-- Page Content--> */}
      <section class="pt-4">
        <div class="container px-lg-5">
          <h3>Featured Events</h3>
        </div>
      </section>
    </div>
  );
};

export default Event;
