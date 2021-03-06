import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { TextFieldGroup } from "../common/TextFieldGroup";
import { TextAreaFieldGroup } from "../common/TextAreaFieldGroup";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { static } from "express";

class AddExperience extends Component {
  constructor(props) {
    super(props);
    this.state = {
      company: "",
      title: "",
      location: "",
      from: "",
      to: "",
      current: false,
      description: "",
      errors: {},
      disabled: false
    };
  }
  render() {
    const { errors } = this.state;
    return (
      <div class="section add-experience">
        <div class="container">
          <div class="row">
            <div class="col-md-8 m-auto">
              <a href="dashboard.html" class="btn btn-light">
                Go Back
              </a>
              <h1 class="display-4 text-center">Add Your Experience</h1>
              <p class="lead text-center">
                Add any developer/programming positions that you have had in the
                past
              </p>
              <small class="d-block pb-3">* = required field</small>
              <form action="add-education.html">
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control form-control-lg"
                    placeholder="* Job Title"
                    name="title"
                    required
                  />
                </div>
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control form-control-lg"
                    placeholder="* Company"
                    name="company"
                    required
                  />
                </div>
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control form-control-lg"
                    placeholder="Location"
                    name="location"
                  />
                </div>
                <h6>From Date</h6>
                <div class="form-group">
                  <input
                    type="date"
                    class="form-control form-control-lg"
                    name="from"
                  />
                </div>
                <h6>To Date</h6>
                <div class="form-group">
                  <input
                    type="date"
                    class="form-control form-control-lg"
                    name="to"
                  />
                </div>
                <div class="form-check mb-4">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    name="current"
                    value=""
                    id="current"
                  />
                  <label class="form-check-label" for="current">
                    Current Job
                  </label>
                </div>
                <div class="form-group">
                  <textarea
                    class="form-control form-control-lg"
                    placeholder="Job Description"
                    name="description"
                  ></textarea>
                  <small class="form-text text-muted">
                    Some of your responsabilities, etc
                  </small>
                </div>
                <input type="submit" class="btn btn-info btn-block mt-4" />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
AddExperience.propTypes = {
  profile: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  profile: state.profile,
  errors: state.errors
});

export default connect(mapStateToProps)(withRouter(AddExperience));
