import React from "react";

import Event from "./components/events";
import Navbar from "./components/navBar";
import EventCard from "./components/eventCard";
import Footer from "./components/footer";

function App() {
  return (
    <>

      <Navbar />
      <Event/>
      <EventCard/>

      <Footer/> 

    </>
  );
}

export default App;
