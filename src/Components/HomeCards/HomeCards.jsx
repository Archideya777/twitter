import React from "react";
import "./HomeCards.css";

function HomeCards({ img, profileName, profileEmail, profileAbout, spaseImg }) {
  return (
    <>
      <li className="home-cards d-flex">
        <img height={60} src={img} className="my-5" alt="" />
        <div className="card-body">
          <div className="d-flex ">
            <h5 className="profile-name">{profileName}</h5>
            <p className="profile-email">{profileEmail}</p>
          </div>
          <p className="profile-about">{profileAbout}</p>
          <div className="profile-stas w-75 d-flex align-items-center justify-content-between">
            <div className="d-flex">
              <img className="profile-stas-img" src="./img/sms.svg" alt="" />{" "}
              <span className="num">0</span>
            </div>
            <img className="profile-stas-img" src="./img/reweet.svg" alt="" />
            <img className="profile-stas-img" src="./img/like.svg" alt="" />
            <img className="profile-stas-img" src="./img/share.svg" alt="" />
            <img
              className="profile-stas-img"
              src="./img/statistic.svg"
              alt=""
            />
          </div>
        </div>
        <img height={4} className="my-5" src="./img/bar.svg" alt="" />
      </li>
    </>
  );
}

export default HomeCards;
