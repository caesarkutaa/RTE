import { useState, useEffect } from "react";
import logo from "../../../assets/logo.jpeg";
import "./style.css";
import { useNavigate } from "react-router-dom";
import SearchBar from "../../component/searchBar/SearchBar";
import axios from "../../../API/axios";
import { faItunesNote } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Pagination from "../../component/pagination/Pagination";
const Songs = () => {
  const navigate = useNavigate();
  const [fetching, setFetching] = useState(true);
  const [allSongs, setAllSongs] = useState([]);
  const [searchedSongs, setSearchedSongs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(9);
  //let searchResult;
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
        setSearchedSongs(res.data.songs);
        setFetching(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //setSearchedSongs(allSongs);
  const handleSearch = (e) => {
    console.log(e.target.value);
    if (e.target.value == "") {
      return setSearchedSongs(allSongs);
    }
    const searchResult = allSongs.filter(
      (song) =>
        song.artist.toLowerCase().includes(e.target.value.toLowerCase()) ||
        song.songname.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setSearchedSongs(searchResult);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = searchedSongs.slice(indexOfFirstItem, indexOfLastItem);
  const nPages = Math.ceil(searchedSongs.length / itemsPerPage);

  const handleClick = (img, name, artist, audio, desc, video) => {
    navigate("/song", {
      state: {
        image: img,
        name: name,
        artist: artist,
        audio: audio,
        desc: desc,
        video: video,
      },
    });
  };

  return (
    <>
      <SearchBar handleSearch={handleSearch} />
      <section className="songs-section">
        <div className="latest">
          <h1>All songs</h1>
          <FontAwesomeIcon className="itunes" icon={faItunesNote} />
        </div>
        {fetching ? (
          <>fetching .........</>
        ) : (
          <div className="top-Songs">
            {currentItems.map((songs) => (
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

export default Songs;
