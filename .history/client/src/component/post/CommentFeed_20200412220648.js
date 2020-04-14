import React, { Component } from "react";
import PropTypes from "prop-types";

class CommentFeed extends Component {
  render() {
    return <div></div>;
  }
}
CommentFeed.propTypes = {
  comments: PropTypes.array.isRequired,
  postId: PropTypes.string.isRequired,
};

export default CommentFeed;
