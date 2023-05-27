import { useEffect, useState } from "react";
import logo from "../../../assets/logo.jpeg";
import "./style.css";
import { useNavigate } from "react-router-dom";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const TopVideos = ({ searchedVideos, searchResultCount, fetching }) => {
  const navigate = useNavigate();
  const handleClick = (songsVideo, name, artist, desc, audio) => {
    navigate("/video", {
      state: {
        songsvideo: songsVideo,
        name: name,
        artist: artist,
        desc: desc,
        audio: audio,
      },
    });
  };
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
          {searchResultCount.length >= 1 ? (
            <>
              {searchedVideos.map((videos) => (
                <div
                  key={videos.id}
                  onClick={() => {
                    handleClick(
                      videos.songsVideo,
                      videos.songname,
                      videos.artist,
                      videos.desc,
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
            </>
          ) : (
            <>
              {searchedVideos.slice(0, 3).map((videos, id) => (
                <div
                  key={id}
                  onClick={() => {
                    handleClick(
                      videos.songsVideo,
                      videos.songname,
                      videos.artist,
                      videos.desc,
                      videos.audio.url
                    );
                  }}
                  className="container"
                >
                  <img src={videos.image.url} alt="" />
                  <p> {videos.songname}</p>
                  <p>{videos.artist}</p>
                </div>
              ))}
            </>
          )}
        </div>
      )}
    </section>
  );
};

export default TopVideos;
