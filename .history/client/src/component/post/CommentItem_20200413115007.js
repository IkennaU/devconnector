import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { deleteComment } from "../../actions/postActions";

class CommentItem extends Component {
  render() {
    return <div></div>;
  }
}
CommentItem.propTypes = {};

export default connect(mapStateToProps)(CommentItem);
