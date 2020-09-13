import React from "react";
import { Link } from "react-router-dom";
import "../style/Header.css";
import logo from "../img/livi.png";

export default function Header() {
  return (
    <div className="Header">
      <div className="Header_img">
        <img src={logo} alt="Liviano Logo"></img>
      </div>
      <div className="Header_links">
        <Link className="lnk" to="/">
          <li className="hlink">Home</li>
        </Link>
        <Link className="lnk" to="/aboutus">
          <li className="hlink">AboutUs</li>
        </Link>
        <Link className="lnk" to="/contactus">
          <li className="hlink">ContactUs</li>
        </Link>
      </div>
    </div>
  );
}
