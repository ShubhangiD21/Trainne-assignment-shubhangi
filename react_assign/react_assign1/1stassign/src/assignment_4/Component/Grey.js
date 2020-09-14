import React from "react";
import { Link } from "react-router-dom";

export default function Grey() {
  return (
    <div>
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
        <Link to="/leave">
          <li> Employee Leave_Info</li>
        </Link>
      </div>
    </div>
  );
}
