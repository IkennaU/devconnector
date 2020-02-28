import React from "react";
import Navbar from "./component/layout/Navbar";
import Footer from "./component/layout/Footer";
import Landing from "./component/layout/Landing";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Landing />
      <h1>My React App</h1>
      <Footer />
    </div>
  );
}

export default App;
