import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export default function LoginLayout() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [rememberMe, setRememberMe] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Email validation
    const emailPattern = /^[a-zA-Z0-9._%+-]+@dreamonline\.co\.jp$/;
    if (!emailPattern.test(email)) {
      setEmailError("Please provide your organization email");
      return;
    } else {
      setEmailError("");
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailError("");
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setPasswordError("");
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row no-gutter">
          <div className="col-md-6 d-none d-md-flex bg-image"></div>

          <div className="col-md-6 bg-light">
            <div className="login d-flex align-items-center py-5">
              <div className="container">
                <div className="row">
                  <div className="col-lg-10 col-xl-7 mx-auto">
                    <h3 className="display-4">Sign In</h3>
                    <p className="text-muted mb-4"></p>
                    <form onSubmit={handleSubmit}>
                      <div className="form-group mb-3">
                        <input
                          id="inputEmail"
                          type="email"
                          placeholder="Email address"
                          required
                          className={`form-control rounded-pill border-0 shadow-sm px-4 ${
                            emailError ? "is-invalid" : ""
                          }`}
                          value={email}
                          onChange={handleEmailChange}
                          name="email"
                        />
                        {emailError && (
                          <div className="invalid-feedback">{emailError}</div>
                        )}
                      </div>
                      <div className="form-group mb-3">
                        <input
                          id="inputPassword"
                          type="password"
                          placeholder="Password"
                          required
                          className="form-control rounded-pill border-0 shadow-sm px-4 text-primary"
                          name="password"
                          value={password}
                          onChange={handlePasswordChange}
                        />
                      </div>
                      <div className="custom-control custom-checkbox mb-3">
                        <input
                          id="customCheck1"
                          type="checkbox"
                          className="custom-control-input"
                        />
                        <label
                          htmlFor="customCheck1"
                          className="custom-control-label"
                        >
                          &nbsp;Remember password
                        </label>
                      </div>
                      <button
                        type="submit"
                        className="btn btn-primary btn-block text-uppercase mb-2 rounded-pill shadow-sm w-100"
                      >
                        Sign in
                      </button>
                    </form>
                    <span className="d-block text-center my-4 text-muted">
                      Don't have an account ?{" "}
                      <NavLink to="/register">Sign Up</NavLink>
                    </span>
                    <span className="d-block text-center my-4 text-muted">
                      &mdash; or &mdash;
                    </span>
                    <div className="social-login">
                      <a
                        href="#"
                        className="facebook btn d-flex justify-content-center align-items-center"
                      >
                        <span className="icon-facebook mr-3"></span> Login with
                        Facebook
                      </a>
                      <a
                        href="#"
                        className="twitter btn d-flex justify-content-center align-items-center"
                      >
                        <span className="icon-twitter mr-3"></span> Login with
                        Twitter
                      </a>
                      <a
                        href="#"
                        className="google btn d-flex justify-content-center align-items-center"
                      >
                        <span className="icon-google mr-3"></span> Login with
                        Google
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
