import React from "react";
import "./first.css";
import video1 from "./net.m4v";

export default function FirstSection({ head, para, img }) {
  return (
    <div className="firstSection">
      <div className="first">
        <div className="firstDiv">
          <h1 className="firstHead">{head}</h1>
          <p className="firstPara">{para}</p>
        </div>

        <div className="tv">
          <img className="tv" src={img}></img>
          <video
            className="tv_video"
            src={video1}
            controls="controls"
            autoPlay="true"
          ></video>
        </div>
      </div>
    </div>
  );
}
