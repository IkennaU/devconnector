import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { deleteComment } from "../../actions/postActions";

class CommentItem extends Component {
  render() {
    const { comment, postId, auth } = this.props;
    return <div></div>;
  }
}
CommentItem.propTypes = {
  deleteComment: PropTypes.func.isRequired,
  comment: PropTypes.object.isRequired,
  postId: PropTypes.string.isRequired,
  auth: PropTypes.object.isRequired,
};
const mapStateToProps = () => ({ auth: state.auth });

export default connect(mapStateToProps, { deleteComment })(CommentItem);
