import React, { Component } from "react";
import propTypes from "prop-types";
import { connect } from "react-redux";
import { getCurrentProfile } from "../../actions/profileActions";

class Dashboard extends Component {
  componentDidMount() {
    this.props.getCurrentProfile();
  }
  render() {
    return (
      <div>
        <h1>Dashboard</h1>
      </div>
    );
  }
}
const mapStateToProps = state => ({ profile: state.profile, auth: state.auth });

export default connect(null, { getCurrentProfile })(Dashboard);
