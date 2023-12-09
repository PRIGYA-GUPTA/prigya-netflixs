import React from "react";
import { Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import box from "./Styles/boxshot.png";

function truncate(str, n) {
  return str?.length > n ? str.substr(0, n - 1) + "..." : str;
}

const base_url = "https://image.tmdb.org/t/p/original";
function MovieCard({ movie }) {
  return (
    <div style={{ width: "290px" }}>
      <div className="card">
        <img
          src={`${base_url}${movie?.poster_path}`}
          alt="..."
          style={{
            width: "275px",
            objectFit: "cover",
            objectPosition: "top",
            margin: "auto",
            marginTop: "10px",
          }}
        />

        {console.log(`${base_url}${movie?.poster_path}`)}
        <div className="card-body">
          <h5 className="card-title">
            {movie?.title || movie?.name || movie?.original_name}
          </h5>
          <p className="card-text">{truncate(movie?.overview, 150)}</p>

          <FontAwesomeIcon icon={faPlay} size="2x" />

          <FontAwesomeIcon
            icon={faThumbsUp}
            size="2x"
            style={{ marginLeft: "10px" }}
          />
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
