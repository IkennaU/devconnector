import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./component/layout/Navbar";
import Footer from "./component/layout/Footer";
import Landing from "./component/layout/Landing";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Route exact path="/" component={Landing} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
