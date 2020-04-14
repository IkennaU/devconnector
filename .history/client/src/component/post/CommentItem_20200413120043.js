import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { deleteComment } from "../../actions/postActions";

class CommentItem extends Component {
  render() {
    const { comment, postId, auth } = this.props;
    return (
      <div className="card card-body mb-3">
        <div className="row">
          <div className="col-md-2">
            <a href="profile.html">
              <img
                className="rounded-circle d-none d-md-block"
                src="https://www.gravatar.com/avatar/anything?s=200&d=mm"
                alt=""
              />
            </a>
            <br />
            <p className="text-center">Kevin Smith</p>
          </div>
          <div className="col-md-10">
            <p className="lead">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
              possimus corporis sunt necessitatibus! Minus nesciunt soluta
              suscipit nobis.
            </p>
          </div>
        </div>
      </div>
    );
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
