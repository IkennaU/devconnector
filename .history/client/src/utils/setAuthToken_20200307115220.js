import axios from "axios";

const setAuthToken = () => {
  if (token) {
    axios.defaults.headers.common[Authourization] = token;
  } else {
  }
};
