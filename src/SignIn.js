import "./signin.css";
import logo from "./netflixlogo.png";
import { Link, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import { auth } from "./firebase";
import React, { useContext } from "react";
import { AuthContext } from "./AuthContext";
import Eng from "./Eng";
import { useState, useEffect } from "react";
function SignIn() {
  const location = useLocation();
  const { setIsAuthenticated } = useContext(AuthContext);
  const email = location.state?.email || "";
  console.log(`Received email: ${email}`);
  const navigate = useNavigate();
  const [values, setValues] = useState({ email: email, password: "" });
  const [errorMsg, setErrorMsg] = useState("");
  const [submitdisable, setSubmitdisable] = useState(false);

  useEffect(() => {
    document.body.style.overflowX = "hidden";
  }, []);

  const handleSubmit = () => {
    console.log(values.email);
    setSubmitdisable(true);
    signInWithEmailAndPassword(auth, values.email, values.password)
      .then(async (res) => {
        setSubmitdisable(false);
        setIsAuthenticated(true);
        navigate("/dashboard");
      })
      .catch((err) => {
        setSubmitdisable(false);
        setErrorMsg(err.message);
      });
  };

  const Items = [
    "FAQ",
    "Help Centre",
    "Terms of Use",
    "Privacy",
    "Cookie Preferences",
    "Corporate Information",
  ];
  return (
    <Container fluid className="p-0 maindivsign">
      <div className="sign">
        <div>
          <img src={logo} style={{ width: "200px" }}></img>
        </div>
        <div className="signincon">
          <div className="signdiv">
            <h1>Sign In</h1>
            <input
              type="email"
              className="email1"
              placeholder="Enter email address"
              value={values.email}
              onChange={(e) =>
                setValues((prev) => ({ ...prev, email: e.target.value }))
              }
            ></input>
            <input
              type="password"
              className="email1"
              placeholder="Enter password"
              onChange={(e) =>
                setValues((prev) => ({ ...prev, password: e.target.value }))
              }
            ></input>
            {/* <div
              className="divsign1"
              onClick={handleSubmit}
              disable={submitdisable}
            >
              <Link
                to="/dashboard"
                style={{ textDecoration: "none", color: "white" }}
              >
                <span className="signin1">Sign In</span>
              </Link>
            </div> */}
            <b className="error">{errorMsg}</b>
            <button
              className="signbutton"
              onClick={handleSubmit}
              disabled={submitdisable}
            >
              Signin
            </button>

            <div className="checkdiv">
              <div className="checkRem">
                <div>
                  <input type="checkbox"></input>
                  <label>Remember me</label>
                </div>
                <div>
                  <p>Need help?</p>
                </div>
              </div>
              <div className="netdiv">
                <p>New to Netflix? </p>
                <p style={{ color: "#fff" }}>
                  <Link to="/signup" style={{ color: "#fff" }}>
                    Sign up now
                  </Link>
                </p>
              </div>
              <div className="Spandiv">
                <span>
                  This page is protected by Google reCAPTCHA to ensure you're
                  not a bot.
                </span>
                <a href="#"> Learn more.</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer1">
        <div className="container1">
          <p>Questions? Call 000-800-919-1694</p>
          <div className="row row-cols-2 row-cols-sm-2 row-cols-md-4">
            {Items.map((item, index) => (
              <div className="col1" key={index}>
                <p>{item}</p>
              </div>
            ))}
          </div>
          <div className="eng-wrapper1">
            <Eng />
          </div>
          <p style={{ paddingTop: "1.5rem" }}>Netflix India</p>
        </div>
      </div>
    </Container>
  );
}

export default SignIn;
