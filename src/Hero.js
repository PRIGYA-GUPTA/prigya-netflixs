import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGreaterThan } from "@fortawesome/free-solid-svg-icons";
import "./hero.css";
import Email from "./Email";
export default function Hero() {
  return (
    <div className="mainhero">
      <div className="herohead">
        <h1>Enjoy big movies, hit series and more from ₹ 149.</h1>
        <p>Join today. Cancel anytime.</p>
        <p>
          Ready to watch? Enter your email to create or restart your membership.
        </p>

        <Email />
      </div>
    </div>
  );
}
