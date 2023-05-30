import logo from "../../../assets/logo.jpeg";
import "./style.css";
import { faItunesNote } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const TopSongs = ({ searchResultCount, searchedSongs, fetching }) => {
  const navigate = useNavigate();
  const handleClick = (image, name, artist, audio, desc, video) => {
    navigate("/song", {
      state: {
        image: image,
        name: name,
        artist: artist,
        audio: audio,
        desc: desc,
        video: video,
      },
    });
  };

  return (
    <section id="songs" className="songs-section">
      <div className="latest">
        <h1>latest songs</h1>

        <FontAwesomeIcon className="itunes" icon={faItunesNote} />
      </div>
      {fetching ? (
        <> fecthing ........</>
      ) : (
        <div className="top-Songs">
          {searchResultCount.length >= 1 ? (
            <>
              {searchedSongs.map((songs) => (
                <div
                  key={songs.id}
                  onClick={() => {
                    handleClick(
                      songs.image.url,
                      songs.songname,
                      songs.artist,
                      songs.audio.url,
                      songs.desc,
                      songs.songsvideo
                    );
                  }}
                  className="container"
                >
                  <img src={songs.image.url} alt="" />
                  <p> {songs.songname}</p>
                  <p>{songs.artist}</p>
                </div>
              ))}
            </>
          ) : (
            <>
              {searchedSongs.slice(0, 3).map((songs, id) => (
                <div
                  key={id}
                  onClick={() => {
                    handleClick(
                      songs.image.url,
                      songs.songname,
                      songs.artist,
                      songs.audio.url,
                      songs.desc,
                      songs.songsvideo
                    );
                  }}
                  className="container"
                >
                  <img src={songs.image.url} alt="" />
                  <p> {songs.songname}</p>
                  <p>{songs.artist}</p>
                </div>
              ))}
            </>
          )}
        </div>
      )}
    </section>
  );
};

export default TopSongs;
