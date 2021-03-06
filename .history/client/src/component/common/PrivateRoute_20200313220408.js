import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

function PrivateRoute({ component: Component, auth, ...rest }) {
  return <div></div>;
}
PrivateRoute.propTypes = {
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({ auth: state.auth });

export default connect(mapStateToProps)(PrivateRoute);
