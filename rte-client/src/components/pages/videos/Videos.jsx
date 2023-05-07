import { useEffect, useState } from "react";
import axios from "../../../API/axios";
import logo from "../../../assets/logo.jpeg";
import { useNavigate } from "react-router-dom";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Pagination from "../../component/pagination/Pagination";
const Videos = () => {
  const navigate = useNavigate();
  const [musicVideos, setMusicVideos] = useState([]);
  const [fetching, setFetching] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);
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
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = musicVideos.slice(indexOfFirstItem, indexOfLastItem);
  const nPages = Math.ceil(musicVideos.length / itemsPerPage);
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
    <section>
      <div className="latest-vids">
        <h1>All Music Videos</h1>
        <FontAwesomeIcon className="youtube" icon={faYoutube} />
      </div>
      {fetching ? (
        <> fecthing songs....</>
      ) : (
        <div className="top-videos">
          {currentItems.map((videos, id) => (
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
      <Pagination
        nPages={nPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </section>
  );
};

export default Videos;
