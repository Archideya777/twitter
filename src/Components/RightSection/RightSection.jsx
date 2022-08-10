import React from "react";
import Follow from "../Follow/Follow";
import "./rightsection.css";

function RightSection() {
  let data = {
    img: ["./img/follow1.svg", "./img/follow2.svg"],
    text: ["Mushtariy", "Shuhratbek"],
    email: ["@Mushtar565266", "@mrshukhrat"],
  };

  return (
    <>
      <section className="right-section">
        <div className="input-section">
          <img className="search" src="./img/search.svg" alt="" />
          <input className="input" type="text" placeholder="Search Twitter" />
        </div>
        {/* <div className="imgs">
          <img src="./img/imgs.png" alt="" />
        </div> */}
        {/* <ul className="follows">
          <h4 className="follows-text">You might like</h4>
          <Follow text={data.text} email={data.email} img={data.img} />
          <a className="show" href="#">
            Show more
          </a>
        </ul> */}
        <ul className="trend">
          <div className="trend-head  d-flex align-items-center justify-content-between">
            <h4 className="trend-text">Trends for you</h4>
            <img src="./img/settings.svg" alt="" />
          </div>
          <li className="d-flex align-items-center justify-content-between mt-3">
            <div className="trend-body_left">
              <p className="trend-body_left__first">Trending in Germany</p>
              <p className="trend-body_left-middle">Revolution</p>
              <p className="trend-body_left__first">50.4K Tweets</p>
            </div>
            <img src="./img/bar.svg" alt="" />
          </li>
          <li className="d-flex align-items-center justify-content-between mt-3">
            <div className="trend-body_left">
              <p className="trend-body_left__first">Trending in Germany</p>
              <p className="trend-body_left-middle">Revolution</p>
              <p className="trend-body_left__first">50.4K Tweets</p>
            </div>
            <img src="./img/bar.svg" alt="" />
          </li>
          <li className="d-flex align-items-center justify-content-between mt-3 mb-4">
            <div className="trend-body_left">
              <p className="trend-body_left__first">Trending in Germany</p>
              <p className="trend-body_left-middle">Revolution</p>
              <p className="trend-body_left__first">50.4K Tweets</p>
            </div>
            <img src="./img/bar.svg" alt="" />
          </li>
          <a className="show" href="#">
            Show more
          </a>
        </ul>
        <ul className="follows">
          <h4 className="follows-text">You might like</h4>
          <Follow text={data.text} email={data.email} img={data.img} />
          <a className="show" href="#">
            Show more
          </a>
        </ul>
        <p className="info">
          Terms of Service Privacy Policy Cookie Policy <br /> Imprint Ads Info
          More ··· © 2021 Twitter, Inc.
        </p>
      </section>
    </>
  );
}

export default RightSection;
