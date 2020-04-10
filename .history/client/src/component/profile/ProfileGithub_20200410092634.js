import React, { Component } from "react";
import { Link } from "react-router-dom";
import propTypes from "prop-types";

class ProfileGithub extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clientId: "97a4fffcb55a0ee8872a",
      clientSecret: "4cfab20d2095ba3492ff91689bcda6dc43a89950",
      count: 5,
      sort: "created: asc",
      repos: [],
    };
  }
  componentDidMount() {
    const { username } = this.props;
    const { clientId, clientSecret, count, sort } = this.state;
  }
  render() {
    return (
      <div>
        <h1>TODO: PROFILE GITHUB</h1>
      </div>
    );
  }
}

export default ProfileGithub;
