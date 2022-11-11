import React, { useState } from "react";
import Axios from "axios";
import "./Form.css";
import { BiCamera } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

function Form({ setData, data }) {
  const [selectedFile, setSelectedFile] = useState(null);
  const [eventName, setEventName] = useState("");
  const [tickets, setTickets] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [venue, setVenue] = useState("");
  const [time, setTime] = useState("");
  const [speakersName, setSpeakersName] = useState("");
  const [speakersBio, setSpeakersBio] = useState("");

  const navigate = useNavigate();
  const uploadImage = (files) => {
    const formData = new FormData();
    formData.append("file", files[0]);
    formData.append("upload_preset", "e2e6z2lx");
    Axios.post(
      "https://api.cloudinary.com/v1_1/dakiak4mc/image/upload",
      formData
    ).then((res) => {
      console.log(res.data.url);
      setSelectedFile(res.data.url);
    });
  };

  const addEvent = (e) => {
    e.preventDefault();
    Axios.post("http://127.0.0.1:9292/events", {
      name: eventName,
      image: selectedFile,
      tickets: tickets,
      description: description,
      date: date,
      venue: venue,
      time: time,
    }).then((res) => {
      setData([...data, res.data]);
    });
    setTimeout(() => {
      navigate("/");
    }, 2000);

    Axios.post("http://127.0.0.1:9292/speakers", {
      name: speakersName,
      bio: speakersBio,
      event_id: data.length + 1,
    });
  };

  return (
    <>
      <div class="registration-form">
        <form>
          <div class="form-icon">
            <span>{/* <i class="icon icon-user"></i> */}</span>
          </div>
          <div class="form-group">
            <input
              id="events-name"
              className="form-control item"
              placeholder="Enter Event Name"
              type="text"
              value={eventName}
              onChange={(e) => {
                setEventName(e.target.value);
              }}
            ></input>
          </div>
          <div class="form-group">
            <input
              type="file"
              className="form-control item"
              onChange={(e) => {
                uploadImage(e.target.files);
              }}
            ></input>
          </div>
          <div class="form-group">
            <input
              id="events-venue"
              className="form-control item"
              placeholder="Venue..."
              type="text"
              value={venue}
              onChange={(e) => {
                setVenue(e.target.value);
              }}
            ></input>
          </div>
          <div class="form-group">
            <input
              // id="pets-birthday"
              className="form-control item"
              type="date"
              value={date}
              onChange={(e) => {
                setDate(e.target.value);
              }}
            ></input>
          </div>
          <div class="form-group">
            <input
              // id="events-tickets"
              className="form-control item"
              placeholder="Number of tickets available..."
              type="number"
              value={tickets}
              onChange={(e) => {
                setTickets(e.target.value);
              }}
            ></input>
          </div>
          <div class="form-group">
            <input
              className="form-control item"
              placeholder="Time..."
              type="text"
              value={time}
              onChange={(e) => {
                setTime(e.target.value);
              }}
            ></input>
          </div>
          <div class="form-group">
            <input
              className="form-control item"
              value={speakersName}
              placeholder="Add main speaker speakers for this event"
              onChange={(e) => {
                setSpeakersName(e.target.value);
              }}
              type="text"
            />
          </div>
          <div class="form-group">
            <input
              className="form-control item"
              value={speakersBio}
              placeholder="Add the main speakers bio for this event"
              onChange={(e) => {
                setSpeakersBio(e.target.value);
              }}
              type="text"
            />
          </div>

          <div class="form-group">
            <input
              className="form-control item"
              type="text"
              value={description}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
              placeholder="Event Description"
            />
          </div>

          <div class="form-group d-flex justify-content-center">
            <button
              className="btn btn-primary"
              id="back"
              onClick={() => {
                navigate("/");
              }}
            >
              Back
            </button>
            <button
              id="next"
              onClick={(e) => addEvent(e)}
              className="btn btn-primary"
            >
              Next
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Form;
