import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";
import { clearCurrentProfile } from "./actions/profileActions";
import { Provider } from "react-redux";
import store from "./store";
import PrivateRoute from "./component/common/PrivateRoute";
import Navbar from "./component/layout/Navbar";
import Footer from "./component/layout/Footer";
import Landing from "./component/layout/Landing";
import Register from "./component/auth/Register";
import Login from "./component/auth/Login";
import Dashboard from "./component/dashboard/Dashboard";

import "./App.css";

// check for token
if (localStorage.jwtToken) {
  setAuthToken(localStorage.jwtToken);
  const decoded = jwt_decode(localStorage.jwtToken);
  store.dispatch(setCurrentUser(decoded));
  // check for expired token after time elapse
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    store.dispatch(logoutUser());
    store.dispatch(clearCurrentProfile());
    // todo: clear profile
    // redirect to login
    window.location.href = "/login";
  }
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Navbar />
            <Route exact path="/" component={Landing} />
            <div className="container">
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
            </div>
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
