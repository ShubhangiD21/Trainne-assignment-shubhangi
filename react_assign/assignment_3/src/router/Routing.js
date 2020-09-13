import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import AboutUs from "../pages/AboutUs";
import ContactUs from "../pages/ContactUs";

export default class Routing extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/aboutus" component={AboutUs}></Route>
          <Route path="/contactus" component={ContactUs}></Route>
          <Route path="/" component={Home}></Route>
        </Switch>
      </div>
    );
  }
}
