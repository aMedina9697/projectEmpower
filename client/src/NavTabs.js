import React from "react";
import { Link } from "react-router-dom";

function NavTabs() {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <Link to="/Profile" className={window.location.pathname === "/Profile" ? "nav-link active" : "nav-link"}>
          insert winky font awesome
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Notes"
          className={window.location.pathname === "/Notes" ? "nav-link active" : "nav-link"}
        >
          insert Notes font awesome
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Products"
          className={window.location.pathname === "/Products" ? "nav-link active" : "nav-link"}
        >
          insert products font awesome
        </Link>
      </li>
    </ul>
  );
}

export default NavTabs;