import React, { useEffect, useState } from "react";
import axios from "../../../API/axios";
import { useNavigate } from "react-router-dom";
import { faItunesNote } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../../../assets/logo.jpeg";
import Pagination from "../../component/pagination/Pagination";
import SearchBar from "../../component/searchBar/SearchBar";
const Albums = () => {
  const navigate = useNavigate();
  const [fetching, setFetching] = useState(true);
  const [albums, setAlbums] = useState([]);
  const [searchedAlbums, setSearchedAlbums] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(3);
  useEffect(() => {
    getSongs();
  }, []);
  const getSongs = () => {
    setFetching(true);
    axios
      .get("/album/")
      .then((res) => {
        //console.log(res.data.songs);
        setAlbums(res.data.album);
        setSearchedAlbums(res.data.album);
        setFetching(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleSearch = (e) => {
    console.log(e.target.value);
    if (e.target.value == "") {
      return setSearchedAlbums(albums);
    }
    const searchResult = albums.filter(
      (song) =>
        song.artist.toLowerCase().includes(e.target.value.toLowerCase()) ||
        song.title.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setSearchedAlbums(searchResult);
  };
  const handleClick = (img, name, artist, tracks, desc) => {
    navigate("/album", {
      state: {
        image: img,
        name: name,
        artist: artist,
        tracks: tracks,
        desc: desc,
      },
    });
  };
  console.log(albums);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = searchedAlbums.slice(indexOfFirstItem, indexOfLastItem);
  const nPages = Math.ceil(searchedAlbums.length / itemsPerPage);
  return (
    <>
      <SearchBar handleSearch={handleSearch} />
      <section className="songs-section">
        <div className="latest">
          <h1>Albums</h1>
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
                    songs.image.url,
                    songs.title,
                    songs.artist,
                    songs.tracklists,
                    songs.desc
                  );
                }}
                className="container"
              >
                <img src={songs.image.url} alt="" />
                <p> {songs.artist}</p>
                <p>{songs.title}</p>
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

export default Albums;
