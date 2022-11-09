import React from "react";
import { useState,useEffect } from "react";

import Event from "./components/events";
import Navbar from "./components/navBar";
import EventCard from "./components/eventCard";
import Footer from "./components/footer";
import FeaturedEvents from "./components/featuredEvents";

function App() {
  const [bots, setBots] = useState([]);


  useEffect(() => {
    fetch("http://localhost:3000/bots")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setBots(data);
        console.log(data);
      });
  }, []);
  return (
    <>

      <Navbar />
      <Event/>
      <EventCard/>
      <FeaturedEvents bots={bots}/>

      <Footer/>

    </>
  );
}

export default App;
