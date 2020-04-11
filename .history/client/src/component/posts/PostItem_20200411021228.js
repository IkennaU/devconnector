import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import classnames from "classnames";
import { Link } from "react-router-dom";

export class PostItem extends Component {
  render() {
    const { post, auth } = this.props;
    return (
      <div classNames="card card-body mb-3">
        <div classNames="row">
          <div classNames="col-md-2">
            <a href="profile.html">
              <img
                classNames="rounded-circle d-none d-md-block"
                src={post.avatar}
                alt=""
              />
            </a>
            <br />
            <p classNames="text-center">{post.name}</p>
          </div>
          <div classNames="col-md-10">
            <p classNames="lead">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
              possimus corporis sunt necessitatibus! Minus nesciunt soluta
              suscipit nobis. Amet accusamus distinctio cupiditate blanditiis
              dolor? Illo perferendis eveniet cum cupiditate aliquam?
            </p>
            <button type="button" classNames="btn btn-light mr-1">
              <i classNames="text-info fas fa-thumbs-up"></i>
              <span classNames="badge badge-light">4</span>
            </button>
            <button type="button" classNames="btn btn-light mr-1">
              <i classNames="text-secondary fas fa-thumbs-down"></i>
            </button>
            <a href="post.html" classNames="btn btn-info mr-1">
              Comments
            </a>
            <button type="button" classNames="btn btn-danger mr-1">
              <i classNames="fas fa-times" />
            </button>
          </div>
        </div>
      </div>
    );
  }
}
PostItem.propTypes = {
  post: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({ auth: state.auth });

export default connect(mapStateToProps)(PostItem);
