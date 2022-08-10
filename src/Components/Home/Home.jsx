import React from "react";
import HomeCard from "../HomeCards/HomeCard";
import HomeCards from "../HomeCards/HomeCards";
import "./Home.css";

function Home() {
  const card = {
    img: [
      "./img/card1.svg",
      "./img/card2.svg",
      "./img/card3.svg",
      "./img/profile.svg",
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
    ],
  };

  return (
    <div>
      <section className="home-page">
        <header className="home-page-header d-flex align-items-center justify-content-between">
          <h5>Home</h5>
          <img src="./img/stars.svg" alt="" />
        </header>
        <div className="input-sec d-flex align-items-center justify-contet-between">
          <div className="input-sec_left d-flex">
            <img
              height={60}
              className="profile-img my-3"
              src="./img/Profil1.svg"
              alt=""
            />
            <div>
              <input
                className="home-page_input"
                type="text"
                placeholder="What’s happening"
              />
              <div className="svgs d-flex">
                <img className="svg-img" src="./img/gallery.svg" alt="" />
                <img className="svg-img" src="./img/gif.svg" alt="" />
                <img className="svg-img" src="./img/bars.svg" alt="" />
                <img className="svg-img" src="./img/smile.svg" alt="" />
                <img className="svg-img" src="./img/clock.svg" alt="" />
              </div>
            </div>
          </div>
          <button className="home-page_btn">Tweet</button>
        </div>
        <HomeCards
          img={card.img[0]}
          profileName={card.profileName[0]}
          profileEmail={card.profileEmail[0]}
          profileAbout={card.profileAbout[0]}
        />
        <HomeCards
          img={card.img[1]}
          profileName={card.profileName[1]}
          profileEmail={card.profileEmail[1]}
          profileAbout={card.profileAbout[1]}
        />
        <HomeCard
          img={card.img[2]}
          spaceImg={card.spaceImg[0]}
          profileName={card.profileName[2]}
          profileEmail={card.profileEmail[2]}
          profileAbout={card.profileAbout[2]}
        />
      </section>
    </div>
  );
}

export default Home;
