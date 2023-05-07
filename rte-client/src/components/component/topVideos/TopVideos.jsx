import { useEffect, useState } from "react";
import logo from "../../../assets/logo.jpeg";
import axios from "../../../API/axios";
import "./style.css";
import { useNavigate } from "react-router-dom";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const TopVideos = () => {
  const navigate = useNavigate();
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
        console.log(res.data);
        setMusicVideos(res.data);
        setFetching(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleClick = (songsVideo, name, artist, audio) => {
    navigate("/youtubeEmbed", {
      state: {
        songsvideo: songsVideo,
        name: name,
        artist: artist,
        audio: audio,
      },
    });
  };
  console.log(musicVideos);
  return (
    <section id="videos" className="videos-section">
      <div className="latest-vids">
        <h1>latest Music Videos</h1>
        <FontAwesomeIcon className="youtube" icon={faYoutube} />
      </div>
      {fetching ? (
        <> fecthing songs....</>
      ) : (
        <div className="top-videos">
          {musicVideos.map((videos, id) => (
            <div
              key={id}
              onClick={() => {
                handleClick(
                  videos.songsVideo,
                  videos.songname,
                  videos.artist,
                  videos.audio.url
                );
              }}
              className="container"
            >
              <img src={logo} alt="" />
              <p> {videos.songname}</p>
              <p>{videos.artist}</p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default TopVideos;
