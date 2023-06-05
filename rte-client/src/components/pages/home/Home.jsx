import { useState, useEffect } from "react";
import TopVideos from "../../component/topVideos/TopVideos.jsx";
import TopSongs from "../../component/topSongs/TopSongs.jsx";
import TopNews from "../../component/topNews/TopNews.jsx";
import "./style.css";
import axios from "../../../API/axios.js";
import SearchBar from "../../component/searchBar/SearchBar.jsx";
import { faNewspaper } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faItunesNote } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import Footer from "../../partials/Footer.jsx";
import Carousel from "../../component/carousel/Carousel.jsx";
let searchResultCount = 0;
const Home = () => {
  const [news, setNews] = useState([]);
  const [music, setMusic] = useState([]);
  const [musicVideos, setMusicVideos] = useState([]);
  const [searchedNews, setSearchedNews] = useState([]);
  const [searchedSongs, setSearchedSongs] = useState([]);
  const [searchedVideos, setSearchedVideos] = useState([]);
  const [fetching, setFetching] = useState(true);
  const [latestS, setLatestS] = useState(true);
  const [latestV, setLatestV] = useState(false);
  const [latestN, setLatestN] = useState(false);

  useEffect(() => {
    getNews();
  }, []);
  useEffect(() => {
    getVideos();
  }, []);
  useEffect(() => {
    getSongs();
  }, []);

  const getSongs = () => {
    setFetching(true);
    axios
      .get("/song/")
      .then((res) => {
        setMusic(res.data.songs);
        setSearchedSongs(res.data.songs);
        setFetching(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const getVideos = () => {
    setFetching(true);
    axios
      .get("/song/songs/videos")
      .then((res) => {
        console.log(res.data);
        setMusicVideos(res.data);
        setSearchedVideos(res.data);
        setFetching(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const getNews = () => {
    setFetching(true);
    axios
      .get("/news/")
      .then((res) => {
        //console.log(res.data.Allnews);
        setNews(res.data.Allnews);
        setSearchedNews(res.data.Allnews);
        setFetching(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleSearch = (e) => {
    console.log(e.target.value);
    if (e.target.value == "") {
      return (
        setSearchedSongs(music),
        setSearchedNews(news),
        setSearchedVideos(musicVideos)
      );
    }
    const searchResultM = music.filter(
      (song) =>
        song.artist.toLowerCase().includes(e.target.value.toLowerCase()) ||
        song.songname.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setSearchedSongs(searchResultM);

    const searchResultN = news.filter(
      (news) =>
        news.title.toLowerCase().includes(e.target.value.toLowerCase()) ||
        news.description.toLowerCase().includes(e.target.value)
    );
    setSearchedNews(searchResultN);
    const searchResultV = musicVideos.filter(
      (song) =>
        song.artist.toLowerCase().includes(e.target.value.toLowerCase()) ||
        song.songname.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setSearchedVideos(searchResultV);
    if (searchResultM.length >= 1 || searchResultN >= 1 || searchResultV >= 1) {
      searchResultCount += 1;
    } else {
      searchResultCount = 0;
    }
  };
  return (
    <>
      <SearchBar handleSearch={handleSearch} />
      <main className="Home">
        <nav className="latest-nav">
          <ul>
            <li>
              <small
                onClick={() => {
                  setLatestS(true);
                  setLatestV(false);
                  setLatestN(false);
                }}
              >
                Latest <FontAwesomeIcon className="icon" icon={faItunesNote} />
              </small>
            </li>
            <li>
              <small
                onClick={() => {
                  setLatestS(false);
                  setLatestV(true);
                  setLatestN(false);
                }}
              >
                latest <FontAwesomeIcon className="icon" icon={faYoutube} />
              </small>
            </li>
            <li>
              <small
                onClick={() => {
                  setLatestN(true);
                  setLatestV(false);
                  setLatestS(false);
                }}
              >
                latest <FontAwesomeIcon className="icon" icon={faNewspaper} />
              </small>
            </li>
          </ul>
        </nav>
        <Carousel />
        {latestV ? (
          <>
            <TopVideos
              searchResultCount={searchResultCount}
              searchedVideos={searchedVideos}
              fetching={fetching}
            />
            <TopSongs
              searchResultCount={searchResultCount}
              searchedSongs={searchedSongs}
              fetching={fetching}
            />
            <TopNews
              searchResultCount={searchResultCount}
              searchedNews={searchedNews}
              fetching={fetching}
            />
          </>
        ) : (
          <></>
        )}
        {latestS ? (
          <>
            <TopSongs
              searchResultCount={searchResultCount}
              searchedSongs={searchedSongs}
              fetching={fetching}
            />
            <TopVideos
              searchResultCount={searchResultCount}
              searchedVideos={searchedVideos}
              fetching={fetching}
            />
            <TopNews
              searchResultCount={searchResultCount}
              searchedNews={searchedNews}
              fetching={fetching}
            />
          </>
        ) : (
          <></>
        )}
        {latestN ? (
          <>
            <TopNews
              searchResultCount={searchResultCount}
              searchedNews={searchedNews}
              fetching={fetching}
            />
            <TopSongs
              searchResultCount={searchResultCount}
              searchedSongs={searchedSongs}
              fetching={fetching}
            />
            <TopVideos
              searchResultCount={searchResultCount}
              searchedVideos={searchedVideos}
              fetching={fetching}
            />
          </>
        ) : (
          <></>
        )}
      </main>
    </>
  );
};

export default Home;
