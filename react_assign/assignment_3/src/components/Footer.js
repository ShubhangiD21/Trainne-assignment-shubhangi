import "../style/Footer.css";
import { Link } from "react-router-dom";
import React, { Component } from "react";

export default class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
    };
  }

  doSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.email);
  };

  doChange = (event) => {
    this.setState({
      email: event.target.value,
    });
  };

  render() {
    return (
      <div className="Footer">
        <div className="Footer_link">
          <Link className="lnk" to="/">
            <li className="Footer_lnk">Home</li>
          </Link>
          <Link className="lnk" to="/aboutus">
            <li className="Footer_lnk">AboutUs</li>
          </Link>
        </div>
        <div className="Footer_copyright">
          <p>
            Copyright © All rights reserved design by <strong>Liviano</strong>
          </p>
        </div>
        <div className="Footer_form">
          <form className="Footer_frm" onSubmit={this.doSubmit}>
            <input
              type="email"
              name="email"
              id="email"
              onChange={this.doChange}
              value={this.state.email}
            ></input>
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    );
  }
}
