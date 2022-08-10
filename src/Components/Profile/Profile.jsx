import React from "react";
import HomeCard from "../HomeCards/HomeCard";
import HomeCards from "../HomeCards/HomeCards";
import "./profile.css";
import { NavLink, Outlet } from "react-router-dom";

function Profile() {
  const card = {
    img: [
      "./img/card1.svg",
      "./img/card2.svg",
      "./img/card3.svg",
      "./img/tweet.svg",
      "./img/tweet.png",
    ],
    spaceImg: ["./img/card3.png", "./img/tweet.png"],
    profileName: ["Designsta", "cloutexhibition", "CreativePhoto", "Bobur"],
    profileEmail: [
      "@inner · 25m",
      "@RajLahoti · 22m",
      "@cloutexhibition · 1h",
      "@bobur_mavlonov · Apr 1",
    ],
    profileAbout: [
      "Twitterdagi ayol-erkak qarama-qarshiliginglardan o'zinglar zerikmadinglarmi?",
      "YPIP dasturining bu yilgi sezoni ham o’z nihoyasiga yetmoqda. Mentorlik davomida talaba va yangi bitiruvchilarni o’sayotganini ko’rib hursand bo’ladi odam.",
      "Обетда..... Кечиринглар",
      "4-kursni tugatgunimcha kamida bitta biznesim bo'lishini, uylanish uchun moddiy jihatdan to'la-to'kis tayyor bo'lishni, sog'lik va jismoniy holatni normallashtirishni reja qildim",
      "Bizda shunaqa bir illat bor: gap bo'lsa bo'ldi, nima deyayotganimizga qarab ham o'tirmaymiz.  Bitta biznes trener nito gapirib qo'ysa, hamma biznes trenerlar yomonga chiqadi slishkom aqlli odamlar nazdida. Gap faqat biznes trenerlar haqida emas.",
      "A bo'pti maskamasman",
    ],
  };
  return (
    <>
      <section className="profile">
        <header className="profile-header d-flex">
          <img src="./img/Arrow.svg" alt="" />
          <div className="profile-header_right mx-5">
            <h5 className="profile-header_name">Bobur</h5>
            <p className="profile-header_subscribe">1,070 Tweets</p>
          </div>
        </header>
        <div className="body">
          <div>
            <img className="" width={800} src="./img/profile.png" alt="" />
            <div className="d-flex align-items-center justify-content-between">
              <img
                className="profile-img"
                width={140}
                src="./img/profileimg.png"
                alt=""
              />
              <p className="edit-btn">Edit profile</p>
            </div>
          </div>
          <div>
            <div className="profile-card_text">
              <h5 className="user-name username">Bobur</h5>
              <p className="user-bio">@bobur_mavlonov</p>
              <p className="user-mail">
                UX&UI designer at <span className="blue">@abutechuz</span>
              </p>
              <div className="d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center">
                  <img className="svg" src="./img/location.svg" alt="" />
                  <p className="user-bio">Mashag’daman</p>
                </div>
                <div className="d-flex align-items-center">
                  <img className="svg" src="./img/mail.svg" alt="" />
                  <p className="user-bio blue">t.me/boburjon_mavlonov</p>
                </div>
                <div className="d-flex align-items-center">
                  <img className="svg" src="./img/boom.svg" alt="" />
                  <p className="user-bio">Born November 24, 2000</p>
                </div>
                <div className="d-flex align-items-center">
                  <img className="svg" src="./img/location.svg" alt="" />
                  <p className="user-bio">Mashag’daman</p>
                </div>
                <div className="d-flex align-items-center">
                  <img className="svg" src="./img/calendar.svg" alt="" />
                  <p className="user-bio">Joined May 2020</p>
                </div>
              </div>
              <div className="d-flex">
                <p className="follow">
                  <span className="follow-num">67</span> Following
                </p>
                <p className="follow">
                  <span className="follow-num">47 </span> Followers
                </p>
              </div>
              <ul className="d-flex tweet-lists align-tems-center justify-content-around">
                <li>
                  <NavLink
                    className={({ isAvtivet }) =>
                      isAvtivet ? "out_active" : "out-item"
                    }
                    to="/profile/item"
                  >
                    Tweets
                  </NavLink>
                </li>
                <li>
                  <NavLink className="out-item" to="/profile/tweet">
                    Tweets & replies
                  </NavLink>
                </li>
                <li>
                  <NavLink className="out-item" to="/profile/media">
                    Media
                  </NavLink>
                </li>
                <li>
                  <NavLink className="out-item" to="/profile/likes">
                    Likes
                  </NavLink>
                </li>
              </ul>
              <Outlet />
              <ul className="tweet-main">
                <HomeCards
                  img={card.img[3]}
                  profileName={card.profileName[3]}
                  profileEmail={card.profileEmail[3]}
                  profileAbout={card.profileAbout[3]}
                />
                <HomeCards
                  img={card.img[3]}
                  profileName={card.profileName[3]}
                  profileEmail={card.profileEmail[3]}
                  profileAbout={card.profileAbout[4]}
                />
                <HomeCard
                  img={card.img[3]}
                  spaceImg={card.spaceImg[1]}
                  profileName={card.profileName[3]}
                  profileEmail={card.profileEmail[3]}
                  profileAbout={card.profileAbout[5]}
                />
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Profile;
