import React from "react";
import "./first.css";

export default function FirstSection({ head, para, img, children }) {
  return (
    <div className="firstSection">
      <div className="first">
        <div className="firstDiv">
          <h1 className="firstHead">{head}</h1>
          <p className="firstPara">{para}</p>
        </div>

        <div className="tv">
          <img className="tv" src={img}></img>
          {children}
        </div>
      </div>
    </div>
  );
}
