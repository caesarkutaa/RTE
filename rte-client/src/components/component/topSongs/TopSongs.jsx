import logo from "../../../assets/logo.jpeg";
import "./style.css";
import axios from "../../../API/axios";
import { faItunesNote } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
const TopNews = () => {
  const [songs, setSongs] = useState();
  const getSongs = () => {
    axios
      .get("http://localhost:3000/song/")
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <section id="songs" className="topSongs-section">
      <div className="latest">
        <h1>latest songs</h1>
        {/* <button onClick={getSongs}>click</button> */}
        <FontAwesomeIcon className="itunes" icon={faItunesNote} />
      </div>

      <div className="top-Songs">
        <div className="container">
          <img src={logo} alt="" />
          <p> song Title</p>
          <p>artist</p>
        </div>
        <div className="container">
          <img src={logo} alt="" />
          <p> song Title</p>
          <p>artist</p>
        </div>
        <div className="container">
          <img src={logo} alt="" />
          <p> song Title</p>
          <p>artist</p>
        </div>
        <div className="container">
          <img src={logo} alt="" />
          <p> song Title</p>
          <p>artist</p>
        </div>
        <div className="container">
          <img src={logo} alt="" />
          <p> song Title</p>
          <p>artist</p>
        </div>
      </div>
    </section>
  );
};

export default TopNews;
