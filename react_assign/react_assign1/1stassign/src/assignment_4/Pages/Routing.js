import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Student from "../Pages/Student";
import Employee from "../Pages/Employee";
import Leave from "../Pages/Leave";

export default class Routing extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/employee" component={Employee}></Route>
          <Route path="/leave" component={Leave}></Route>
          <Route path="/student" component={Student}></Route>
          <Route path="/" component={Home}></Route>
        </Switch>
      </div>
    );
  }
}
