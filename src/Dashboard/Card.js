import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { faThumbsUp as solidThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { faThumbsUp as regularThumbsUp } from "@fortawesome/free-regular-svg-icons";
import { auth } from "../firebase";
import { ref, set } from "firebase/database";
import movieTrailer from "movie-trailer";
import { useEffect } from "react";
import { db } from "../firebase";

function truncate(str, n) {
  return str?.length > n ? str.substr(0, n - 1) + "..." : str;
}

const base_url = "https://image.tmdb.org/t/p/original";
function MovieCard({
  movie,
  setTrailerUrl,
  setIsOpen,
  setShowError,
  list,
  setList,
}) {
  const handleClick = (movie) => {
    movieTrailer(movie?.name || "")
      .then((url) => {
        const urlParams = new URLSearchParams(new URL(url).search);
        // const con = urlParams.get("v");
        // console.log(con);
        setTrailerUrl(urlParams.get("v"));
        setIsOpen(true);
      })
      .catch((error) => {
        console.log(error);

        setShowError(true); // Show error modal when there's an error
      });
  };

  const handleClickThumb = () => {
    if (list.some((m) => m.id === movie.id)) {
      const newList = list.filter((m) => m.id !== movie.id);
      setList(newList);

      set(ref(db, `lists/${auth.currentUser.uid}`), newList); // Save the new list to the database
      console.log("if bala part movie card ka");
      console.log(newList);
    } else {
      const newList = [...list, movie];
      setList(newList);
      set(ref(db, `lists/${auth.currentUser.uid}`), newList); // Save the new list to the database
      console.log("else bala part movie card ka");
      console.log(newList);
    }
  };

  return (
    <div>
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

          <div className="card-body">
            <h5 className="card-title">
              {movie?.title || movie?.name || movie?.original_name}
            </h5>
            <p className="card-text">{truncate(movie?.overview, 150)}</p>

            <FontAwesomeIcon
              onClick={() => handleClick(movie)}
              icon={faPlay}
              size="2x"
            />

            {list.some((m) => m.id === movie.id) ? (
              <FontAwesomeIcon
                icon={solidThumbsUp}
                size="2x"
                style={{ marginLeft: "10px" }}
                onClick={handleClickThumb}
              />
            ) : (
              <FontAwesomeIcon
                icon={regularThumbsUp}
                size="2x"
                style={{ marginLeft: "10px" }}
                onClick={handleClickThumb}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
