import React from "react";
import "./style.css";
import news from "../../../assets/vite.png";
import { faNewspaper } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const TopNews = () => {
  return (
    <section id="news" className="topNews-section">
      <div className="latest-news">
        <h1>latest News</h1>
        <FontAwesomeIcon className="newspaper" icon={faNewspaper} />
      </div>
      <div className="top-news">
        <div className="container">
          <h1>Headline</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem,
            earum consectetur eaque autem fugiat aliquid.
          </p>
        </div>
        <div className="container">
          <h1>Headline</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem,
            earum consectetur eaque autem fugiat aliquid.
          </p>
        </div>
        <div className="container">
          <h1>Headline</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem,
            earum consectetur eaque autem fugiat aliquid.
          </p>
        </div>
        <div className="container">
          <h1>Headline</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem,
            earum consectetur eaque autem fugiat aliquid.
          </p>
        </div>
        <div className="container">
          <h1>Headline</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem,
            earum consectetur eaque autem fugiat aliquid.
          </p>
        </div>
        <div className="container">
          <h1>Headline</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem,
            earum consectetur eaque autem fugiat aliquid.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TopNews;
