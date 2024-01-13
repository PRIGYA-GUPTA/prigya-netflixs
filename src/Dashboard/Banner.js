import { useEffect, useState } from "react";
import axios from "./axios";
import requests from "./request";
import "./Styles/banner.css";
import movieTrailer from "movie-trailer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import List from "./List";

import YouTube from "react-youtube";

function Banner({
  setTrailerUrl,
  setIsOpen,
  setShowError,
  trailerUrl,
  isOpen,
  showError,
  list,
  setList,
}) {
  const [movie, setMovie] = useState([]);
  const [showList, setShowList] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  useEffect(() => {
    document.body.style.overflow = showError ? "hidden" : "auto";
  }, [showError]);

  useEffect(() => {
    document.body.style.overflow = showList ? "hidden" : "auto";
  }, [showList]);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const opts = {
    top: 0,
    left: 0,

    playerVars: {
      autoplay: 1,
    },
    width: windowWidth < 600 ? 340 : 640,
  };

  const handleList = () => {
    // Console log the list when the "My List" button is clicked
    setShowList(true);
    // console.log(list);
  };
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);

      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      // console.log(movie);
      return request;
    }

    fetchData();
  }, []);

  const handleClick = (movie) => {
    movieTrailer(movie?.name || "")
      .then((url) => {
        const urlParams = new URLSearchParams(new URL(url).search);
        const con = urlParams.get("v");
        // console.log(con);
        setTrailerUrl(urlParams.get("v"));
        setIsOpen(true);
      })
      .catch((error) => {
        console.log(error);

        setShowError(true); // Show error modal when there's an error
      });
  };
  const handleClose = () => {
    setShowError(false); // Hide error modal when close button is clicked
  };
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <header
      className="banner"
      style={{
        position: "relative",

        backgroundImage: `url(
        "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
        )`,
        backgroundPosition: "center top",
      }}
    >
      <div className="banner_contents">
        <h1 className="banner_title" style={{ filter: "brightness(100%)" }}>
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner_buttons">
          <button className="banner_button" onClick={() => handleClick(movie)}>
            Play
          </button>
          <button className="banner_button" onClick={handleList}>
            My List
          </button>
        </div>
        <h1 className="banner_description">{truncate(movie?.overview, 100)}</h1>
      </div>
      <div className="banner--fadeBottom" />
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
              className="fontIcon"
              onClick={handleClose}
              style={{ position: "fixed" }}
              icon={faTimes}
              size="2x"
            />
          </div>

          {/* Your modal code here */}
        </div>
      )}

      {showList && <List list={list} setShowList={setShowList} />}
    </header>
  );
}

export default Banner;
