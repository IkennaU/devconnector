import React from "react";
import spinner from "./spinner.gif";

function spinner() {
  return (
    <div>
      <img src={spinner} alt="Loading..." />
    </div>
  );
}

export default spinner;
