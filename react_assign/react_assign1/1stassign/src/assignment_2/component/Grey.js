import React from "react";
import { Link } from "react-router-dom";

export default function Grey() {
  return (
    <div className="gry">
      <Link to="/">
        <li>Home</li>
      </Link>
      <Link to="/student">
        <li>Student</li>
      </Link>
      <Link to="/employee">
        <li>Employee</li>
      </Link>
    </div>
  );
}
