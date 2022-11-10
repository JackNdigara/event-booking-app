import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";


const EventDetail = () => {
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

  return (
    <div>
      <div class="container py-3">
        <div class="title h1 text-center">{event.name}</div>
        {/* <!-- Card Start --> */}
        <div class="card">
          <div class="row ">
            <div class="col-md-7 px-3">
              <div class="card-block px-6">
                <h4 class="card-title">{event.name} </h4>
                <p class="card-text">{event.description}</p>

                
               <h4>Venue: {event.venue} <h4>Date: {event.date}</h4> </h4>
               <h4>Slots: {event.tickets}</h4>
               <Link to="/"> <a href="#" class="mt-auto btn btn-primary">
                  Back
                </a></Link>

              </div>
            </div>
            {/* <!-- Carousel start --> */}
            <div class="col-md-5">
              <div
                id="CarouselTest"
                class="carousel slide"
                data-ride="carousel"
              >
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img
                      class="d-block"
                      src="https://picsum.photos/450/300?image=1072"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetail;
