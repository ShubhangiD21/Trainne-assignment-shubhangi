import React from "react";
import { Link } from "react-router-dom";

export default function link() {
  return (
    <div>
      return (
      <div className="sd-header">
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/aboutus">
          <li>AboutUs</li>
        </Link>
        <Link to="/contactus">
          <li>ContactUs</li>
        </Link>
      </div>
    </div>
  );
}
