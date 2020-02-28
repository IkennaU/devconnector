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

      <Footer />
    </div>
  );
}

export default App;
