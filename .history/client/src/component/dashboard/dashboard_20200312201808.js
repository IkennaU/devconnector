import React, { Component } from "react";
import propTypes from "prop-types";
import { connect } from "react-redux";
import { getCurrentProfile } from "../../actions/profileActions";

class dashboard extends Component {
  render() {
    return (
      <div>
        <h1>Dashboard</h1>
      </div>
    );
  }
}

export default connect()(dashboard);
