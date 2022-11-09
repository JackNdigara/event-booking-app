import React from "react";
import { useState, useEffect } from "react";

import Event from "./components/events";
import Navbar from "./components/navBar";
import Footer from "./components/footer";
import FeaturedEvents from "./components/featuredEvents";

function App() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:9292/events")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setEvents(data);
        console.log(data);
      });
  }, []);
  return (
    <div>
      <Navbar />
      <Event />
      <FeaturedEvents events={events} />

      <Footer />
    </div>
  );
}

export default App;
