import "./email.css";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "./firebase";
import React, { useState } from "react";

function Email() {
  const [values, setValues] = useState({
    email: "",
  });
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();
  const handleSubmission = () => {
    console.log("handleSubmission called");
    const x = values.email;
    console.log(x);
    if (!values.email || !emailRegex.test(values.email)) {
      setErrorMsg("Please fill the valid email");
      return;
    }

    // Pass the email to the /signin route
    navigate("/signin", { state: { email: values.email } });
    console.log(`Navigating to /signin with email: ${values.email}`);
  };

  return (
    <div>
      <div className="herofooter">
        <input
          type="email"
          className="email"
          placeholder="Email address"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, email: event.target.value }))
          }
        ></input>

        <div className="herostart" onClick={handleSubmission}>
          <span className="start">Get Started &gt;</span>
        </div>
        <br></br>
        <b className="error">{errorMsg}</b>
      </div>
    </div>
  );
}

export default Email;
