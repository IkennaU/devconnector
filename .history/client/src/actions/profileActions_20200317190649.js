import axios from "axios";
import {
  GET_PROFILE,
  PROFILE_LOADING,
  CLEAR_CURRENT_PROFILE,
  GET_ERRORS,
  SET_CURRENT_USER
} from "./types";

// Get Current Profile
export const getCurrentProfile = () => dispatch => {
  dispatch(setProfileLoading());
  axios
    .get("/api/profile")
    .then(res => dispatch({ type: GET_PROFILE, payload: res.data }))
    .catch(err => dispatch({ type: GET_PROFILE, payload: {} }));
};
// Create Profile
export const createProfile = (profileData, history) => dispatch => {
  axios
    .post("/api/profile", profileData)
    .then(res => history.push("/dashboard"))
    .catch(err => dispatch({ type: GET_ERRORS, payload: err.response.data }));
};
// Add Experience
export const addExperience = (expData, history) => dispatch => {
  axios
    .post("/api/profile/experience", expData)
    .then(res => history.push("/dashboard"))
    .catch(err => dispatch({ type: GET_ERRORS, payload: err.response.data }));
};
// Delete Account and Profile
export const deleteAccount = () => dispatch => {
  if (window.confirm("Are You Sure? This Cannot Be Undone...!")) {
    axios
      .delete("/api/profile")
      .then(res => dispatch({ type: SET_CURRENT_USER, payload: {} }))
      .catch(err => dispatch({ type: GET_ERRORS, payload: err.response.data }));
  }
};
// Profile Loading
export const setProfileLoading = () => {
  return {
    type: PROFILE_LOADING
  };
};
// Clear Profile
export const clearCurrentProfile = () => {
  return {
    type: CLEAR_CURRENT_PROFILE
  };
};
