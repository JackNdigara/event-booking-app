import React from "react";
import { useState, useEffect } from "react";

import Event from "./components/events";
import Navbar from "./components/navBar";
import Footer from "./components/footer";
import FeaturedEvents from "./components/featuredEvents";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/events/Home";
import FormLogin from "./components/Login/FormLogin";
import BookEvent from "./components/BookEvent";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://127.0.0.1:9292/events")
      .then((res) => res.json())
      .then((data) => {
        const newA = data.sort(function (a, b) {
          var dateA = new Date(a.date),
            dateB = new Date(b.date);
          return dateA - dateB;
        });
        setData(newA);
      });
  }, []);
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home events={data} />} />
          <Route path="/events" element={<Event events={data} />} />
          <Route
            path="/form"
            element={<FormLogin data={data} setData={setData} />}
          />
          <Route
            path="/bookevent"
            element={<BookEvent  />}
          />


        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
