import React from "react";
import "./nav.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Nav() {
  return (
    <ul className="nav nav-tabs fixed-bottom justified nav-fill">
      <li className="nav-item">
        <Link to="/Profile" className={window.location.pathname === "/Profile" ? "nav-link active" : "nav-link"}>
          <div id="smile-wink"><FontAwesomeIcon icon="smile-wink" /></div>
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Notes"
          className={window.location.pathname === "/Notes" ? "nav-link active" : "nav-link"}
        >
          <div id="comment"><FontAwesomeIcon icon="comment" /></div>
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Products"
          className={window.location.pathname === "/Products" ? "nav-link active" : "nav-link"}
        >
          <div id="plus"><FontAwesomeIcon icon="plus" /></div>
        </Link>
      </li>
    </ul>
  );
}

export default Nav;
