import React, { useState } from "react";
import "./login.css";

function Login({ login, isLogin }) {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const params = {
    username: userName,
    password: password,
  };
  console.log(params);

  return (
    <div>
      <div className="login">
        <img width={50} src="./img/twitter.svg" alt="" />
        <div className="login-text">
          <h1 className="login-title">Log in to Twitter</h1>
          <div className="inputs">
            <div>
              <input
                className="login-input"
                type="text"
                placeholder="Phone number, email address"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
            </div>
            <div>
              <input
                className="login-input"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button className="login-btn" onClick={() => login(params)}>
              Log In
            </button>
            <div className="d-flex link-sec">
              <a className="link" href="#">
                Forgot password?
              </a>
              <a className="link" href="#">
                Sign up to Twitter
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
