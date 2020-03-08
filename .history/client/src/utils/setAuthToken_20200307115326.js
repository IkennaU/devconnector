import axios from "axios";

const setAuthToken = () => {
  if (token) {
    axios.defaults.headers.common["Authourization"] = token;
  } else {
      delete.axios.defaults.headers.common["Authourization"]
  }
};
