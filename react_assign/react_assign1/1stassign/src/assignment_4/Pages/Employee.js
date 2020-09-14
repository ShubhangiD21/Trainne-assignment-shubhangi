import React, { Component } from "react";
import Grey from "../Component/Grey";
import Employeeinfo from "../Data/Employeeinfo.json";

export default class Employee extends Component {
  render() {
    return (
      <div className="Employee">
        <div>
          <Grey />
        </div>
        <div class="gren">
          <h1>
            <u>
              <b>!!! Employee Information !!!</b>{" "}
            </u>
          </h1>
          <table className="table">
            <thead>
              <th>Employee_Id</th>
              <th>Employee_Name</th>
              <th>Employee_Salary</th>
            </thead>
            <tbody>
              {Employeeinfo.map((data) => {
                return (
                  <tr>
                    <td>{data.emp_id}</td>
                    <td>{data.emp_name}</td>
                    <td>{data.emp_salary}</td>
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
