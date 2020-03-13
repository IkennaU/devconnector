import axios from "axios";
import { GET_PROFILE, PROFILE_LOADING, GET_ERRORS } from "./types";

// Get Current Profile
export const getCurrentProfile = () => dispatch => {
  dispatch(setProfileLoading());
};
