import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import classnames from "classnames";
import { Link } from "react-router-dom";

export class PostItem extends Component {
  onDeleteClick(id) {
    console.log(id);
  }
  render() {
    const { post, auth } = this.props;
    return (
      <div class="card card-body mb-3">
        <div class="row">
          <div class="col-md-2">
            <a href="profile.html">
              <img
                class="rounded-circle d-none d-md-block"
                src={post.avatar}
                alt=""
              />
            </a>
            <br />
            <p class="text-center">{post.name}</p>
          </div>
          <div class="col-md-10">
            <p class="lead">{post.text}</p>
            <button type="button" class="btn btn-light mr-1">
              <i class="text-info fas fa-thumbs-up"></i>
              <span class="badge badge-light">{post.likes.length}</span>
            </button>
            <button type="button" class="btn btn-light mr-1">
              <i class="text-secondary fas fa-thumbs-down"></i>
            </button>
            <Link to={`/post/${post._id}`} class="btn btn-info mr-1">
              Comments
            </Link>
            {post.user === auth.user.id ? (
              <button
                onClick={this.onDeleteClick.bind(this, post._id)}
                type="button"
                class="btn btn-danger mr-1"
              >
                <i class="fas fa-times" />
              </button>
            ) : null}
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
