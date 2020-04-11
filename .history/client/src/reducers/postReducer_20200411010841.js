import { ADD_POST, GET_POST, POST_LOADING } from "../actions/types";

var initialState = { posts: [], post: [], loading: false };

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_POST:
      return { ...state, posts: [action.payload, ...state.posts] };
    default:
      return state;
  }
}
