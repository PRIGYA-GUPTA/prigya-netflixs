import React, { useState, useEffect } from "react";
import axios from "./axios";

import "./Styles/row.css";
import MovieCard from "./Card";

const base_url = "https://image.tmdb.org/t/p/original";

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [hoveredMovie, setHoveredMovie] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }

    fetchData();
  }, [fetchUrl]);

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
              <MovieCard movie={movie} />
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
    </div>
  );
}

export default Row;
