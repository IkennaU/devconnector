import axios from "axios";

import {
  ADD_POST,
  GET_ERRORS,
  POST_LOADING,
  GET_POST,
  DELETE_POST,
} from "./types";

//  Add Posts
export function addPost(postData) {
  return function innerFunction(dispatch) {
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
  return function innerFunction(dispatch) {
    dispatch(setPostLoading());
    axios
      .get("/api/posts")
      .then((res) => dispatch({ type: GET_POST, payload: res.data }))
      .catch((err) => dispatch({ type: GET_POST, payload: null }));
  };
}
// Delete Post
export const deletePost = (id) => (dispatch) => {
  {
    axios
      .delete(`/api/posts/${id}`)
      .then((res) => dispatch({ type: DELETE_POST, payload: id }))
      .catch((err) =>
        dispatch({ type: GET_ERRORS, payload: err.response.data })
      );
  }
};
// Set Loading
export function setPostLoading() {
  return { type: POST_LOADING };
}
