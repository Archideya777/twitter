import React from "react";
import "./LeftSection.css";
import { NavLink } from "react-router-dom";

function LeftSection() {
  return (
    <>
      <section className="left-section">
        <img className="logo" src="./img/twitter.svg" alt="a twitter logo" />
        <ul className="list">
          <li className="list-section">
            <img className="img-active" src="./img/home.svg" alt="" />
            <NavLink to="/" className="items">
              Home
            </NavLink>
          </li>
          <li className="list-section">
            <img src="./img/explore.svg" alt="" />
            <NavLink to="/explore" className="items">
              Explore
            </NavLink>
          </li>
          <li className="list-section">
            <img src="./img/notif.svg" alt="" />
            <NavLink to="/notification" className="items">
              Notifications
            </NavLink>
          </li>
          <li className="list-section">
            <img src="./img/message.svg" alt="" />
            <NavLink to="/message" className="items">
              Messages
            </NavLink>
          </li>
          <li className="list-section">
            <img src="./img/bookmark.svg" alt="" />
            <NavLink to="/bookmarks" className="items">
              Bookmarks
            </NavLink>
          </li>
          <li className="list-section">
            <img src="./img/lists.svg" alt="" />
            <NavLink
              to="/lists"
              className={({ isActive }) => (isActive ? "active" : "items")}
            >
              Lists
            </NavLink>
          </li>
          <li className="list-section">
            <img src="./img/profile.svg" alt="" />
            <NavLink to="/profile" className="items">
              Profile
            </NavLink>
          </li>
          <li className="list-section">
            <img src="./img/more.svg" alt="" />
            <NavLink to="/" className="items">
              More
            </NavLink>
          </li>
        </ul>
        <button className="button">Tweet</button>
        <div className="left-sec_profile d-flex">
          <img src="./img/profilecard.svg" alt="" />
          <div className="profile-card_text">
            <h5 className="user-name username">Bobur</h5>
            <p className="user-bio mail">@bobur_mavlonov</p>
          </div>
          <img src="./img/bar.svg" alt="" />
        </div>
      </section>
    </>
  );
}

export default LeftSection;
