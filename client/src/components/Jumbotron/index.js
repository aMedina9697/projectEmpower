import React from "react";
import "./jumbo.css"

function Jumbotron({ children }) {
  return (
    <div
      style={{ clear: "both", textAlign: "center" }}
      className="jumbotron"
    >
      {children}
    </div>
  );
}

export default Jumbotron;
