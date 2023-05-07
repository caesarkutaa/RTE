import { useEffect, useState } from "react";
import logo from "../../../assets/logo.jpeg";
import axios from "../../../API/axios";
import "./style.css";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const TopVideos = () => {
  const [musicVideos, setMusicVideos] = useState([]);
  const [fetching, setFetching] = useState(true);
  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = () => {
    setFetching(true);
    axios
      .get("/song/songs/videos")
      .then((res) => {
        console.log(res);
        setMusicVideos(res);
        setFetching(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  console.log(musicVideos);
  return (
    <section id="videos" className="topVideos-section">
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
