import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";
const EventDetail = ({ events, setEvents }) => {
  const [event, setEvent] = useState("");
  const navigate = useNavigate();
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

  const handleTicket = () => {
    fetch(`http://127.0.0.1:9292/events/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        tickets: event.tickets - 1,
      }),
    });
    toast.success(
      `Ticket for ${event.name} booked , check your email for confirmation within 24 hours`,
      {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      }
    );
    setTimeout(() => {
      navigate("/");
    }, 8000);
  };
  return (
    <div>
      <ToastContainer />
      <div class="container py-3">
        <div class="title h1 text-center">{event.name}</div>
        {/* <!-- Card Start --> */}
        <div class="card">
          <div class="row ">
            <div class="col-md-7 px-3">
              <div class="card-block px-6">
                <h4 class="card-title">{event.name} </h4>
                <p class="card-text">{event.description}</p>
                <h4>
                  Venue: {event.venue} <h4>Date: {event.date}</h4>{" "}
                </h4>

                <h4>
                  Slots:
                  {event.tickets > 0 ? event.tickets : "Sold Out"}
                </h4>
                <Link to="/">
                  {" "}
                  <a href="#" class="mt-auto btn btn-primary">
                    Back
                  </a>
                </Link>

                {event.tickets > 0 ? (
                  <button
                    href="#"
                    class="mt-auto btn btn-primary mx-3"
                    onClick={handleTicket}
                  >
                    Book Now
                  </button>
                ) : null}
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
