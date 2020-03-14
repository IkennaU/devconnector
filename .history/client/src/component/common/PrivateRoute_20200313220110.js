import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

function PrivateRoute() {
  return <div></div>;
}
const mapStateToProps = state => {};

export default connect(mapStateToProps)(PrivateRoute);
