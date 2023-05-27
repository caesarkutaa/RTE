import { useEffect, useState } from "react";
import axios from "../../../API/axios";
import logo from "../../../assets/logo.jpeg";
import { useNavigate } from "react-router-dom";
import SearchBar from "../../component/searchBar/SearchBar";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Pagination from "../../component/pagination/Pagination";
const Videos = () => {
  const navigate = useNavigate();
  const [musicVideos, setMusicVideos] = useState([]);
  const [searchedVideos, setSearchedVideos] = useState([]);
  const [fetching, setFetching] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(3);

  let searchResult;
  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = () => {
    setFetching(true);
    axios
      .get("/song/songs/videos")
      .then((res) => {
        setMusicVideos(res.data);
        setSearchedVideos(res.data);
        setFetching(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleSearch = (e) => {
    if (e.target.value == "") {
      return setSearchedVideos(musicVideos);
    }
    const searchResult = musicVideos.filter(
      (song) =>
        song.artist.toLowerCase().includes(e.target.value.toLowerCase()) ||
        song.songname.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setSearchedVideos(searchResult);
  };
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = searchedVideos.slice(indexOfFirstItem, indexOfLastItem);
  const nPages = Math.ceil(searchedVideos.length / itemsPerPage);
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
  console.log(musicVideos);
  return (
    <>
      <SearchBar handleSearch={handleSearch} />
      <section>
        <div className="latest-vids">
          <h1>All Music Videos</h1>
          <FontAwesomeIcon className="youtube" icon={faYoutube} />
        </div>
        {fetching ? (
          <> fecthing songs....</>
        ) : (
          <div className="top-videos">
            {currentItems.map((videos) => (
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
                <img src={videos.image.url} alt="" />
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
    </>
  );
};

export default Videos;
