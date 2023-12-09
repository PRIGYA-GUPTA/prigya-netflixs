import "./signin.css";
import logo from "./netflixlogo.png";
import { Link } from "react-router-dom";
import Eng from "./Eng";
function SignIn() {
  const Items = [
    "FAQ",
    "Help Centre",
    "Terms of Use",
    "Privacy",
    "Cookie Preferences",
    "Corporate Information",
  ];
  return (
    <div className="maindivsign">
      <div className="sign">
        <div>
          <img src={logo} style={{ width: "200px" }}></img>
        </div>
        <div className="signincon">
          <div className="signdiv">
            <h1>Sign In</h1>
            <input type="email" className="email1"></input>
            <input type="password" className="email1"></input>
            <div className="divsign1">
              <Link
                to="/dashboard"
                style={{ textDecoration: "none", color: "white" }}
              >
                <span className="signin1">Sign In</span>
              </Link>
            </div>

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
                <p style={{ color: "#fff" }}> Sign up now.</p>
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

export default SignIn;
