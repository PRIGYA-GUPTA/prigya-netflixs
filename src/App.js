import "./App.css";
import React, { useEffect } from "react";
import FirstSection from "./FirstSection";
import Hor from "./Hor";
import Main from "./Main";
import tv from "./Images/tv.png";
import rajma from "./Images/rajma.png";
import mobile from "./Images/mobile.jpg";
import SecondSection from "./SecondSection";
import child from "./Images/child.png";
import Faq from "./Faq";
import Email from "./Email";
import Strange from "./Strange";
import Footer from "./Footer";
import Nav from "./Nav";
import Hero from "./Hero";
import SignIn from "./SignIn";
import video1 from "./net.m4v";
import video2 from "./saif.m4v";
import { AuthProvider } from "./AuthContext";
import ProtectedRoute from "./ProtectedRoute";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Dashboard from "./Dashboard/Dashboard";
import SignUp from "./SignUp";

function HomePage() {
  return (
    <div className="app">
      <Main>
        <Nav /> <Hero />
      </Main>
      <Hor />
      <FirstSection
        head="Enjoy on your TV"
        para=" Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more."
        img={tv}
      >
        <video
          className="tv_video"
          src={video1}
          autoPlay="true"
          loop="true"
          muted="true"
        ></video>
      </FirstSection>
      <Hor />
      <SecondSection
        img={mobile}
        head="Download your shows to watch offline"
        para="Save your favourites easily and always have something to watch."
      >
        <Strange />
      </SecondSection>
      <Hor />
      <FirstSection
        head="Watch everywhere"
        para="Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV."
        img={rajma}
      >
        <video
          className="tv_video2"
          src={video2}
          autoPlay="true"
          loop="true"
          muted="true"
        ></video>
      </FirstSection>
      <Hor />
      <SecondSection
        img={child}
        head="Create profiles for kids"
        para="Send children on adventures with their favourite characters in a space made just for them—free with your membership."
      />
      <Hor />
      <Faq />
      <Hor />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/" element={<HomePage />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />

          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}
export default App;
