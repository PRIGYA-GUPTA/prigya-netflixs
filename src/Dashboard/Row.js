import React, { useState, useEffect } from "react";
import axios from "./axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

import "./Styles/row.css";
import MovieCard from "./Card";

import YouTube from "react-youtube";

const base_url = "https://image.tmdb.org/t/p/original";

function Row({ title, fetchUrl, isLargeRow, list, setList }) {
  const [movies, setMovies] = useState([]);
  const [hoveredMovie, setHoveredMovie] = useState(null);
  const [trailerUrl, setTrailerUrl] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [showError, setShowError] = useState(false);

  const opts = {
    top: 0,
    left: 0,

    playerVars: {
      autoplay: 1,
    },
  };

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }

    fetchData();
  }, [fetchUrl]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  useEffect(() => {
    document.body.style.overflow = showError ? "hidden" : "auto";
  }, [showError]);
  const handleClose = () => {
    setShowError(false); // Hide error modal when close button is clicked
  };
  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row_posters">
        {movies.map((movie) => (
          <div
            key={movie.id}
            onMouseEnter={() => setHoveredMovie(movie)}
            onMouseLeave={() => setHoveredMovie(null)}
            className={`row_poster ${isLargeRow && "row_posterLarge"}`}
          >
            {hoveredMovie && hoveredMovie.id === movie.id ? (
              <MovieCard
                movie={movie}
                setTrailerUrl={setTrailerUrl}
                setIsOpen={setIsOpen}
                showError={showError}
                setShowError={setShowError}
                list={list}
                setList={setList}
              />
            ) : (
              <img
                src={`${base_url}${
                  isLargeRow ? movie.poster_path : movie.backdrop_path
                }`}
                className={`row_poster ${isLargeRow && "row_posterLarge"}`}
                alt={movie.name}
              />
            )}
          </div>
        ))}
      </div>
      {isOpen && trailerUrl && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
          }}
        >
          <FontAwesomeIcon
            onClick={() => setIsOpen(false)}
            style={{ position: "absolute", top: 20, right: 20 }}
            icon={faTimes}
            size="2x"
          />

          <YouTube videoId={trailerUrl} opts={opts} />
        </div>
      )}

      {showError && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
          }}
        >
          <div
            style={{
              width: "32rem",
              height: "250px",
              backgroundColor: "rgba(0, 0, 0, 0.9)",
              justifyContent: "center",
              alignItems: "center",
              color: "#fff",
              padding: "48px",
              borderRadius: "12px",
            }}
          >
            <h2>Oops!</h2>

            <p>
              We're sorry, but we're unable to load this file due to a server
              error. Our team has been notified and is working to resolve the
              issue. Please try again later.
            </p>

            <FontAwesomeIcon
              onClick={handleClose}
              style={{ position: "absolute", top: 260, right: 540 }}
              icon={faTimes}
              size="2x"
            />
          </div>
          {/* Your modal code here */}
        </div>
      )}
    </div>
  );
}

export default Row;
