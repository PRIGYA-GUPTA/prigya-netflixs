import styles from "./signup.module.css";
import logo from "./netflixlogo.png";
import { Link, useNavigate } from "react-router-dom";

import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "./firebase";
import Eng from "./Eng";
import { useState } from "react";

function SignUp() {
  const navigate = useNavigate();
  const [values, setValues] = useState({ name: "", email: "", password: "" });
  const [errorMsg, setErrorMsg] = useState("");
  const [submitdisable, setSubmitdisable] = useState(false);
  const Items = [
    "FAQ",
    "Help Centre",
    "Terms of Use",
    "Privacy",
    "Cookie Preferences",
    "Corporate Information",
  ];
  const handleSubmission = () => {
    setSubmitdisable(true);
    createUserWithEmailAndPassword(auth, values.email, values.password)
      .then(async (res) => {
        setSubmitdisable(false);
        const user = res.user;
        await updateProfile(user, {
          displayName: values.name,
        });
        navigate("/signin");
      })
      .catch((err) => {
        console.log(err);
        setSubmitdisable(false);
        setErrorMsg(err.message);
      });
  };
  return (
    <div className="maindivsign">
      <div className="sign">
        <div>
          <img src={logo} style={{ width: "200px" }}></img>
        </div>
        <div className="signincon">
          <div className="signdiv">
            <h1>Sign Up</h1>
            <label>Name</label>
            <input
              type="name"
              className="email1"
              placeholder="Enter your name"
              onChange={(e) =>
                setValues((prev) => ({ ...prev, name: e.target.value }))
              }
            ></input>
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter email address"
              className="email1"
              onChange={(e) =>
                setValues((prev) => ({ ...prev, email: e.target.value }))
              }
            ></input>

            <label>Password</label>
            <input
              type="password"
              placeholder="Enter password"
              className="email1"
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
              onClick={handleSubmission}
              disabled={submitdisable}
            >
              Signup
            </button>
            <p style={{ color: "#fff", marginTop: "10px" }}>
              Already have an account
              <Link to="/signin" style={{ color: "#fff" }}>
                Sign in now
              </Link>
            </p>
            {/* <div className="checkdiv">
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
                <p style={{ color: "#fff" }}> Sign up now.</p>
              </div>
              <div className="Spandiv">
                <span>
                  This page is protected by Google reCAPTCHA to ensure you're
                  not a bot.
                </span>
                <a href="#"> Learn more.</a>
              </div>
            </div> */}
          </div>
        </div>
      </div>
      <div className="footer1">
        <div className="container1">
          <p>Questions? Call 000-800-919-1694</p>
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4">
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
    </div>
  );
}

export default SignUp;
