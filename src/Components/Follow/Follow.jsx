import React from "react";
import "./follow.css";

function Follow({ text, email, img }) {
  return (
    <div>
      <li className="follow-card d-flex align-items-center justify-content-between">
        <img src={img[0]} alt="" />
        <div className="card-text">
          <p className="user-name">{text[0]}</p>
          <p className="user-bio">{email[0]}</p>
        </div>
        <button className="follow-btn">Follow</button>
      </li>
      <li className="follow-card d-flex align-items-center justify-content-between">
        <img src={img[1]} alt="" />
        <div className="card-text">
          <p className="user-name">{text[1]}</p>
          <p className="user-bio">{email[1]}</p>
        </div>
        <button className="follow-btn">Follow</button>
      </li>
    </div>
  );
}

export default Follow;
