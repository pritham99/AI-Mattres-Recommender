import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";

function Login() {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [nameError, setNameError] = useState("");
  const [mobileError, setMobileError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    let valid = true;

    if (!name) {
      setNameError("Name is required");
      valid = false;
    } else if (!/^[A-Za-z\s]+$/.test(name)) {
      setNameError("Enter letters only");
      valid = false;
    } else {
      setNameError("");
    }

    if (!mobile) {
      setMobileError("Mobile number is required");
      valid = false;
    } else if (!/^\d{10}$/.test(mobile)) {
      setMobileError("Mobile number must be exactly 10 digits");
      valid = false;
    } else {
      setMobileError("");
    }

    if (valid) {
      localStorage.setItem("username", name);
      navigate("/dashboard");
    }
  };

  return (
    <div className="login-container">
      <div className="moon">🌙</div>
      <h1 className="login-title">AI Mattress Recommender</h1>
      <form className="login-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => {
            const val = e.target.value;
            if (/^[A-Za-z\s]*$/.test(val)) {
              setName(val);
              setNameError("");
            } else {
              setNameError("Enter letters only");
            }
          }}
        />
        {nameError && <p className="error-message">{nameError}</p>}

        <input
          type="text"
          placeholder="Enter your mobile number"
          value={mobile}
          onChange={(e) => {
            const val = e.target.value;
            if (/^\d{0,10}$/.test(val)) {
              setMobile(val);
              if (val.length === 10) setMobileError("");
              else setMobileError("Must be 10 digits");
            } else {
              setMobileError("Enter numbers only");
            }
          }}
        />
        {mobileError && <p className="error-message">{mobileError}</p>}

        <button type="submit">Get Started</button>
      </form>
    </div>
  );
}

export default Login;
