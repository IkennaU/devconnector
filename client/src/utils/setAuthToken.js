import axios from "axios";

const setAuthToken = token => {
  if (token) {
    axios.defaults.headers.common["Authourization"] = token;
  } else {
    delete axios.defaults.headers.common["Authourization"];
  }
};

export default setAuthToken;
