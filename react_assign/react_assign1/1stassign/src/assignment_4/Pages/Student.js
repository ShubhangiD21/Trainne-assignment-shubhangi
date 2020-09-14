import React, { Component } from "react";
import Grey from "../Component/Grey";
import Studentinfo from "../Data/Studentinfo.json";

export default class Student extends Component {
  render() {
    return (
      <div className="Student">
        <div>
          <Grey />
        </div>
        <div class="gren">
          <h1>
            <u>
              <b>!!! Student Information !!!</b>{" "}
            </u>
          </h1>
          <table className="table">
            <thead>
              <th>Student_Id</th>
              <th>Student_Name</th>
              <th>Student_Education</th>
              <th>Student_Fees</th>
            </thead>
            <tbody>
              {Studentinfo.map((data) => {
                return (
                  <tr>
                    <td>{data.stud_id}</td>
                    <td>{data.stud_name}</td>
                    <td>{data.stud_education}</td>
                    <td>{data.stud_fees}</td>
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
