import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import img1 from "./netflixlogo.png";
import "./nav.css";
import Eng from "./Eng";
import SignIn from "./SignIn";
import { Link } from "react-router-dom";
export default function Nav() {
  return (
    <div className="header">
      <div>
        <img src={img1} className="logo" alt="img1"></img>
      </div>

      <div className="main">
        <Eng />

        <div className="divsign">
          <Link to="/signin" style={{ textDecoration: "none", color: "white" }}>
            <span className="signin">Sign In</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
