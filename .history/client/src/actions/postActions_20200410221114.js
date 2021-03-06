import axios from "axios";

import { ADD_POST, GET_ERRORS } from "./types";

//  Add Posts
export function addPost(postData) {
  return function innerFunction(dispatch) {
    axios
      .post("/api/posts", postData)
      .then((res) => dispatch({ type: ADD_POST, payload: res.data }));
  };
}
