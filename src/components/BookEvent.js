import React from "react";
import {Link } from "react-router-dom"

const BookEvent = () => {
  return (
<div>
    <header>
          <div class="p-4 p-lg-5 bg-light rounded-3 text-center">
            <div class="m-4 m-lg-5">
              <div className="form">
                <div className="signup-container">
                  <div className="left-container">
                    <h1>Eventify</h1>
                  </div>
                  <div className="right-container">
                    <header>
                      <h1>Book Event </h1>
                      <div className="set">
                        <div className="pets-name">
                          <label htmlFor="events-name">
                            <strong>Event:</strong> The 1975
                          </label>
                        </div>
                      </div>
                      <div className="set">
                        <div className="pets-breed">
                          <label htmlFor="events-name">
                            <strong>Venue:</strong> The Forum
                          </label>
                        </div>
                        <div className="pets-birthday">
                          <label htmlFor="pets-birthday">
                            <strong>Event Date:</strong>{" "}
                          </label>
                        </div>
                      </div>
                      <div className="set">
                        <div className="pets-breed">
                          <label htmlFor="events-venue">
                            Tickets Available: 28
                          </label>
                        </div>
                        <div className="pets-birthday">
                          <label htmlFor="pets-birthday">Time: 8:00</label>
                        </div>
                      </div>
                    </header>
                    <footer>
                      <div className="set">
                        <Link to="/"><button id="back" >Back</button></Link>
                        <button id="next">RSVP Event</button>
                      </div>
                    </footer>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <label htmlFor="pet-weight-0-25">Event description</label>
</header>
</div>
  );
};

export default BookEvent;
