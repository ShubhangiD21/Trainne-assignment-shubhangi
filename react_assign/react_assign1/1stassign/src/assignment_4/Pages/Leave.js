import React, { Component } from "react";
import Grey from "../Component/Grey";
import Leaveinfo from "../Data/Leaveinfo.json";

export default class Leave extends Component {
  render() {
    return (
      <div className="leave">
        <div>
          <Grey />
        </div>
        <div class="gren">
          <h1>
            <u>
              <b>!!! Employee Leave_Information !!!</b>{" "}
            </u>
          </h1>
          <table className="table">
            <thead>
              <th>Employee_Id</th>
              <th>Employee_Name</th>
              <th>Leave_Date</th>
            </thead>
            <tbody>
              {Leaveinfo.map((data) => {
                return (
                  <tr>
                    <td>{data.emp_id}</td>
                    <td>{data.emp_name}</td>
                    <td>{data.leave_date}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
