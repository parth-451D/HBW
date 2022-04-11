import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../styles/Navbar.scss";

const Navbar = () => {
  const [header, setHeader] = useState("");
  const listenScrollEvent = (event) => {
    if (window.scrollY < 73) {
      return setHeader("");
    } else if (window.scrollY > 70) {
      return setHeader("alt-color");
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);

    return () => window.removeEventListener("scroll", listenScrollEvent);
  }, []);
  return (
    <div className={`Navbar ${header}`}>
      <div className="navTop">
        <div>
          <Link to="/">
            <h1 className="alt-font">Comfirt Rooms</h1>
          </Link>
        </div>
        <div className="sub-div">
        <Link to="/booking">
          <button className="btn">Booking</button>
        </Link>
        <Link to="/login">
          <button className="btn">Login</button>
        </Link>
        </div>
      </div>
      <div className="navBottom">
        <Link to="/rooms">
          Rooms <span>&#183;</span>
        </Link>
        <Link to="/about">About</Link>
      </div>
    </div>
  );
};

export default Navbar;
