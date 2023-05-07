import logo from "../../../assets/logo.jpeg";
import "./style.css";
import axios from "../../../API/axios";
import { faItunesNote } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
//import ItemDetails from "../../pages/itemDetails/ItemDetails.jsx";
const TopNews = () => {
  const navigate = useNavigate();
  const [music, setMusic] = useState([]);
  const [fetching, setFetching] = useState(true);
  useEffect(() => {
    getSongs();
  }, []);

  const getSongs = () => {
    setFetching(true);
    axios
      .get("/song/")
      .then((res) => {
        //console.log(res.data.songs);
        setMusic(res.data.songs);
        setFetching(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleClick = (name, artist, audio, video) => {
    navigate("/itemDetails", {
      state: {
        image: logo,
        name: name,
        artist: artist,
        audio: audio,
        video: video,
      },
    });
  };

  //console.log(music);

  return (
    <section id="songs" className="songs-section">
      <div className="latest">
        <h1>latest songs</h1>

        <FontAwesomeIcon className="itunes" icon={faItunesNote} />
      </div>
      {fetching ? (
        <> fecthing songs....</>
      ) : (
        <div className="top-Songs">
          {music.map((songs, id) => (
            <div
              key={id}
              onClick={() => {
                handleClick(
                  songs.songname,
                  songs.artist,
                  songs.audio.url,
                  songs.songsvideo
                );
              }}
              className="container"
            >
              <img src={logo} alt="" />
              <p> {songs.songname}</p>
              <p>{songs.artist}</p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default TopNews;
