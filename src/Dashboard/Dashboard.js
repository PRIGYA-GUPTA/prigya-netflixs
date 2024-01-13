import requests from "./request";
import "./Styles/dash.css";
import Row from "./Row";
import Banner from "./Banner";
import React, { useEffect, useState } from "react";
import { ref, set } from "firebase/database";
import { db } from "../firebase";
import { auth } from "../firebase";
import { onValue } from "firebase/database";
import Footer from "../Footer";
function Dashboard() {
  const [trailerUrl, setTrailerUrl] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [list, setList] = useState([]);
  const [showError, setShowError] = useState(false);
  useEffect(() => {
    document.body.style.overflowX = "hidden";
  }, []);

  // useEffect(() => {
  //   console.log(`User ID: ${auth.currentUser.uid}`);
  //   db.ref(`lists/${auth.currentUser.uid}`).on("value", (snapshot) => {
  //     setList(snapshot.val() || []);
  //     console.log("if bala dahshhhhh part movie card ka");
  //     console.log(list);
  //   });
  // }, []);
  // useEffect(() => {
  //   console.log("if bala dahshhhhh part movie card ka");
  //   console.log(list);
  // }, [list]);

  useEffect(() => {
    console.log(`User ID: ${auth.currentUser.uid}`);
    onValue(ref(db, `lists/${auth.currentUser.uid}`), (snapshot) => {
      setList(snapshot.val() || []);
      console.log("if bala dahshhhhh part movie card ka");
      console.log(list);
    });
  }, []);

  return (
    <div className="dash">
      <Banner
        trailerUrl={trailerUrl}
        setTrailerUrl={setTrailerUrl}
        setIsOpen={setIsOpen}
        showError={showError}
        setShowError={setShowError}
        isOpen={isOpen}
        list={list}
        setList={setList}
      />
      <Row
        title="Netflix original"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
        list={list}
        setList={setList}
      />
      <Row
        title="Trending"
        fetchUrl={requests.fetchTrending}
        list={list}
        setList={setList}
      />
      <Row
        title="Top Rated"
        fetchUrl={requests.fetchTopRated}
        list={list}
        setList={setList}
      />
      <Row
        title="Action Movies"
        fetchUrl={requests.fetchActionMovies}
        list={list}
        setList={setList}
      />
      <Row
        title="Comedy Movies"
        fetchUrl={requests.fetchComedyMovies}
        list={list}
        setList={setList}
      />
      <Row
        title="Horror Movies"
        fetchUrl={requests.fetchHorrorMovies}
        list={list}
        setList={setList}
      />
      <Row
        title="Romance Movies"
        fetchUrl={requests.fetchRomanceMovies}
        list={list}
        setList={setList}
      />
      <Row
        title="Documentaries"
        fetchUrl={requests.fetchDocumentaries}
        list={list}
        setList={setList}
      />
      <Footer />
    </div>
  );
}

export default Dashboard;
