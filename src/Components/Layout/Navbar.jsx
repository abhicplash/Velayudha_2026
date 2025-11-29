import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../Assets/logo/logo.png";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [view, setView] = useState(false);
  return (
    <div className="navbar-container">
      <div className="image-container">
        <img src={logo} alt="logo-image" className="nav-logo" />
        <h2>Velayudha Pharmacy & Clinic</h2>
      </div>
      <div
        className="nav-icon"
        onClick={() => {
          setView(!view);
        }}
      >
        <FaBars />
      </div>
      {view ? (
        <div className="list-mob">
          <Link to={"/"}>
            <li>Home</li>
          </Link>{" "}
          <Link to={"/"}>
            <li>About</li>
          </Link>{" "}
          <Link to={"/"}>
            <li>Services</li>
          </Link>{" "}
          <Link to={"/"}>
            <li>Contact</li>
          </Link>
        </div>
      ) : null}
      <div className="list-desk">
        <Link to={"/"}>
          <li>Home</li>
        </Link>{" "}
        <Link to={"/"}>
          <li>About</li>
        </Link>
        <Link to={"/"}>
          <li>Services</li>
        </Link>{" "}
        <Link to={"/"}>
          <li>Contact</li>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
