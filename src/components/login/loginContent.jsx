import React, { useState } from "react";
import "./login.css";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { Button } from "@mui/material";

export const LoginContent = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let valid = true;

    setEmailError("");
    setPasswordError("");

    if (!email || !email.includes("@")) {
      setEmailError("Please enter a valid email.");
      valid = false;
    }

    if (!password) {
      setPasswordError("Password cannot be empty.");
      valid = false;
    }

    if (valid) {
      console.log("Email:", email);
      console.log("Password:", password);
    }
  };

  return (
    <div className="login">
      <div className="loginContent">
        <h2 className="loginTitle">Login</h2>
        <div>
          <form onSubmit={handleSubmit}>
            <div style={{ marginBlock: "5px" }} className="loginEmailInput">
              <input
                type="email"
                className="loginInput"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            {emailError && <span className="errorText">{emailError}</span>}
            <div className="passwordField passwordInputContainer">
              <input
                type={showPassword ? "text" : "password"}
                className="loginPasswordInput"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="button"
                className="togglePasswordButton"
                onClick={togglePasswordVisibility}
                aria-label="Toggle Password Visibility"
              >
                {showPassword ? <VisibilityOffIcon /> : <RemoveRedEyeIcon />}
              </button>
            </div>
            {passwordError && (
              <span className="errorText">{passwordError}</span>
            )}
            <Button
              type="submit"
              variant="contained"
              sx={{ marginTop: "30px", width: "90%" }}
            >
              Submit
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};
