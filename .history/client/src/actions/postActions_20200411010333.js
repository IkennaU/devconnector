import axios from "axios";

import { ADD_POST, GET_ERRORS, POST_LOADING } from "./types";

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
export function getPost() {
  return function innerFunction(dispatch) {
    axios
      .post("/api/posts", postData)
      .then((res) => dispatch({ type: ADD_POST, payload: res.data }))
      .catch((err) =>
        dispatch({ type: GET_ERRORS, payload: err.response.data })
      );
  };
}
// Set Loading
export function setPostLoading() {
  return { type: POST_LOADING };
}
