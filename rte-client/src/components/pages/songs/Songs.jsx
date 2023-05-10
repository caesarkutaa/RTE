import { useState, useEffect } from "react";
import logo from "../../../assets/logo.jpeg";
import "./style.css";
import { useNavigate } from "react-router-dom";
import axios from "../../../API/axios";
import { faItunesNote } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Pagination from "../../component/pagination/Pagination";
const Songs = () => {
  const navigate = useNavigate();
  const [fetching, setFetching] = useState(true);
  const [allSongs, setAllSongs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(3);
  useEffect(() => {
    getSongs();
  }, []);

  const getSongs = () => {
    setFetching(true);
    axios
      .get("/song/")
      .then((res) => {
        //console.log(res.data.songs);
        setAllSongs(res.data.songs);
        setFetching(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = allSongs.slice(indexOfFirstItem, indexOfLastItem);
  const nPages = Math.ceil(allSongs.length / itemsPerPage);

  const handleClick = (name, artist, audio, desc, video) => {
    navigate("/itemDetails", {
      state: {
        image: logo,
        name: name,
        artist: artist,
        audio: audio,
        desc: desc,
        video: video,
      },
    });
  };

  console.log(allSongs);
  return (
    <section className="songs-section">
      <div className="latest">
        <h1>All songs</h1>

        <FontAwesomeIcon className="itunes" icon={faItunesNote} />
      </div>
      {fetching ? (
        <>fetching</>
      ) : (
        <div className="top-Songs">
          {currentItems.map((songs, id) => (
            <div
              key={id}
              onClick={() => {
                handleClick(
                  songs.songname,
                  songs.artist,
                  songs.audio.url,
                  songs.desc,
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
      <Pagination
        nPages={nPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </section>
  );
};

export default Songs;
