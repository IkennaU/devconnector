import axios from "axios";

import {
  ADD_POST,
  GET_ERRORS,
  GET_POSTS,
  GET_POST,
  POST_LOADING,
  DELETE_POST,
} from "./types";

//  Add Posts
export function addPost(postData) {
  return function (dispatch) {
    axios
      .post("/api/posts", postData)
      .then((res) => dispatch({ type: ADD_POST, payload: res.data }))
      .catch((err) =>
        dispatch({ type: GET_ERRORS, payload: err.response.data })
      );
  };
}
//  Get Posts
export function getPosts() {
  return function (dispatch) {
    dispatch(setPostLoading());
    axios
      .get("/api/posts")
      .then((res) => dispatch({ type: GET_POSTS, payload: res.data }))
      .catch((err) => dispatch({ type: GET_POSTS, payload: null }));
  };
}
//  Get Post
export function getPost(id) {
  return function (dispatch) {
    dispatch(setPostLoading());
    axios
      .get(`/api/posts/${id}`)
      .then((res) => dispatch({ type: GET_POST, payload: res.data }))
      .catch((err) => dispatch({ type: GET_POST, payload: null }));
  };
}
// Delete Post
export const deletePost = (id) => (dispatch) => {
  axios
    .delete(`/api/posts/${id}`)
    .then((res) => dispatch({ type: DELETE_POST, payload: id }))
    .catch((err) => dispatch({ type: GET_ERRORS, payload: err.response.data }));
};
// Add Like
export function addLike(id) {
  return function (dispatch) {
    axios
      .post(`/api/posts/like/${id}`)
      .then((res) => dispatch(getPosts()))
      .catch((err) =>
        dispatch({ type: GET_ERRORS, payload: err.response.data })
      );
  };
}
// Remove Like
export const removeLike = (id) => (dispatch) => {
  axios
    .post(`/api/posts/unlike/${id}`)
    .then((res) => dispatch(getPosts()))
    .catch((err) => dispatch({ type: GET_ERRORS, payload: err.response.data }));
};
//  Add Comment
export function addComment(postId, commentData) {
  return function (dispatch) {
    axios
      .post(`/api/posts/comment/${postId}`, commentData)
      .then((res) => dispatch({ type: GET_POST, payload: res.data }))
      .catch((err) =>
        dispatch({ type: GET_ERRORS, payload: err.response.data })
      );
  };
}
//  Delete Comment
export function deleteComment(postId, commentId) {
  return function (dispatch) {
    axios
      .delete(`/api/posts/comment/${postId}/${commentId}`)
      .then((res) => dispatch({ type: GET_POST, payload: res.data }))
      .catch((err) =>
        dispatch({ type: GET_ERRORS, payload: err.response.data })
      );
  };
}
// Set Loading
export function setPostLoading() {
  return { type: POST_LOADING };
}
