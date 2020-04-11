import React, { Component } from "react";
import PropTypes from "prop-types";
import PostItem from "../posts/PostItem";

export class PostFeed extends Component {
  render() {
    return <div></div>;
  }
}
PostFeed.propTypes = { posts: PropTypes.array.isRequired };

export default PostFeed;
