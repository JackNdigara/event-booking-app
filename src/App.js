import React from "react";
import { useState, useEffect } from "react";

import Event from "./components/events";
import Navbar from "./components/navBar";
import Footer from "./components/footer";
import FeaturedEvents from "./components/featuredEvents";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/events/Home";
import FormLogin from "./components/Login/FormLogin";

function App() {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    fetch("http://127.0.0.1:9292/events")
      .then((res) => res.json())
      .then((dat) => {
        const newA = dat.sort(function (a, b) {
          var dateA = new Date(a.date),
            dateB = new Date(b.date);
          return dateA - dateB;
        });
        setEvents(newA);
      });
  }, []);
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home events={events} />} />
          <Route path="/events" element={<Event events={events} />} />
          <Route
            path="/form"
            element={<FormLogin data={events} setData={setEvents} />}
          />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
