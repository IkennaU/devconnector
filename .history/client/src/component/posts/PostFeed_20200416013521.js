import React, { Component } from "react";
import PropTypes from "prop-types";
import PostItem from "../posts/PostItem";

class PostFeed extends Component {
  render() {
    const { posts } = this.props;
    return posts.map((post) => (
      <PostItem key={post._id}>post={post} </PostItem>
    ));
  }
}
PostFeed.propTypes = { posts: PropTypes.array.isRequired };

export default PostFeed;

<h1></h1>;
