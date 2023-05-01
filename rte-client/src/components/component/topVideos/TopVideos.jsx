import React from "react";
import logo from "../../../assets/logo.jpeg";
import "./style.css";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const TopVideos = () => {
  return (
    <section className="topVideos-section">
      <div className="latest-vids">
        <h1>latest Music Videos</h1>
        <FontAwesomeIcon className="youtube" icon={faYoutube} />
      </div>
      <div className="top-videos">
        <div className="container">
          <img src={logo} alt="" />
          <p>Music video Title</p>
          <p>artist</p>
        </div>
        <div className="container">
          <img src={logo} alt="" />
          <p> Music video Title</p>
          <p>artist</p>
        </div>
        <div className="container">
          <img src={logo} alt="" />
          <p> Music video Title</p>
          <p>artist</p>
        </div>
        <div className="container">
          <img src={logo} alt="" />
          <p> Music video Title</p>
          <p>artist</p>
        </div>
        <div className="container">
          <img src={logo} alt="" />
          <p> Music video Title</p>
          <p>artist</p>
        </div>
      </div>
    </section>
  );
};

export default TopVideos;
