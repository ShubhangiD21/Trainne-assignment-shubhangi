import React, { Component } from "react";
import Grey from "../component/Grey";

export default class Employee extends Component {
  render() {
    return (
      <div className="Employee">
        <div>
          <Grey />
        </div>

        <div className="gren">
          <h1>Employee Detail</h1>

          <table className="table">
            <thead>
              <tr>
                <th>Employee_ID</th>
                <th>Emp_First Name</th>
                <th>Emp_Last Name</th>
                <th>Emp_Company Name</th>
                <th>Emp_Salary</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1.</td>
                <td>Prajakta</td>
                <td>Patil</td>
                <td>IBM</td>
                <td>50k</td>
              </tr>
              <tr>
                <td>2.</td>
                <td>Suresh</td>
                <td>Pawar</td>
                <td>Bajaj</td>
                <td>60k</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
