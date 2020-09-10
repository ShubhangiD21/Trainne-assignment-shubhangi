import React, { Component } from 'react'
import {Switch ,Route } from 'react-router-dom';
import Home from "../pages/Home";
import Student from "../pages/Student";
import Employee from "../pages/Employee";

export default class Rounting extends Component {
  render() {
    return (
      <div>
        
        <Switch>
              <Route path="/employee" component={Employee}></Route>
              <Route path="/student" component={Student}></Route> 
              <Route path="/" component={Home}></Route>
     
        </Switch>

      </div>
    )
  }
}
