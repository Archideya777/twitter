import React from "react";

function HomeCard({ img, profileName, profileEmail, profileAbout, spaceImg }) {
  return (
    <>
      <li className="home-cards">
        <div className="d-flex">
          <img src={img} alt="" />
          <div className="card-body">
            <div className="d-flex ">
              <h5 className="profile-name">{profileName}</h5>
              <p className="profile-email">{profileEmail}</p>
            </div>
            <p className="profile-about">{profileAbout}</p>
          </div>

          <img src="./img/bar.svg" alt="" />
        </div>
        <img className="card3 mb-5" src={spaceImg} alt="" />
        <div className="profile-stas w-75 d-flex align-items-center justify-content-between profile-imgs">
          <img src="./img/sms.svg" alt="" />
          <img src="./img/reweet.svg" alt="" />
          <img src="./img/like.svg" alt="" />
          <img src="./img/share.svg" alt="" />
          <img src="./img/statistic.svg" alt="" />
        </div>
      </li>
    </>
  );
}

export default HomeCard;
