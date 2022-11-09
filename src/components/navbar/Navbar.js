import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { SideBarData } from "./SideBarData";
function Navbar() {
  const [sideBar, setSideBar] = useState(false);
  const showSideBar = () => setSideBar(!sideBar);

  return (
    <div>
      <div className="navbar">
        <Link to="#" className="menu-bars">
          <FaBars onClick={showSideBar} />
        </Link>
        <div className="logo">Eventify</div>
      </div>

      <nav className={sideBar ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-items">
          <li className="navbar-toggle">
            <Link to="#" className="menu-bars">
              <AiOutlineClose onClick={showSideBar} />
            </Link>
          </li>
          {SideBarData.map((item, index) => (
            <li key={index} className={item.cName} onClick={showSideBar}>
              <Link to={item.path}>
                {item.icon}
                <span className="span">{item.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
