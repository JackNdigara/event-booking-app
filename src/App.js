import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FeaturedAttendees from "./components/attendees/FeaturedAttendees";
import FormLogin from "./components/Login/FormLogin";
import Navbar from "./components/navbar/Navbar";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("")
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
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route
            path="/form"
            element={<FormLogin data={data} setData={setData} />}
          />

          <Route
            path="/featured"
            element={<FeaturedAttendees data={setData} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
