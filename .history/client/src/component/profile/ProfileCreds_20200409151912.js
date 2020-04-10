import React, { Component } from "react";
import Moment from "react-moment";

class ProfileCreds extends Component {
  render() {
    const { experience, education } = this.props;
    const expItems = experience.map((exp) => (
      <li key={exp._id} className="list-group-item">
        <h4>{exp.company}</h4>
        <p></p>
      </li>
    ));
    return (
      <div>
        <h1>TODO: PROFILE CREDS</h1>
      </div>
    );
  }
}

export default ProfileCreds;
