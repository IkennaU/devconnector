import { GET_PROFILE, PROFILE_LOADING } from "../actions/types";

const initialState = {
  profile: null,
  profiles: null,
  loading: false
};
export default function(state = initialState, action) {
  switch (action.type) {
    case PROFILE_LOADING:
      return { ...state, loading: true };
    default:
      return state;
  }
}
