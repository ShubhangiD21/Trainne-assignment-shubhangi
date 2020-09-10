import React, { Component } from "react";
import Grey from "../component/Grey";

export default class Student extends Component {
  render() {
    return (
      <div className="Student">
        <div>
          <Grey />
        </div>

        <div className="gren">
          <h1>Student</h1>

          <table className="table">
            <thead>
              <tr>
                <th>Roll Number</th>
                <th>Stud_First Name</th>
                <th>Stud_Last Name</th>
                <th>Stud_Qualification</th>
                <th>Stud_Percentage</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1.</td>
                <td>Prajakta</td>
                <td>Patil</td>
                <td>BCOM</td>
                <td>80%</td>
              </tr>
              <tr>
                <td>2.</td>
                <td>Suresh</td>
                <td>Pawar</td>
                <td>BE</td>
                <td>90%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
