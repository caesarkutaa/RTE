import { useState, useEffect } from "react";
import TopVideos from "../../component/topVideos/TopVideos.jsx";
import TopSongs from "../../component/topSongs/TopSongs.jsx";
import TopNews from "../../component/topNews/TopNews.jsx";
import "./style.css";
import { faNewspaper } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faItunesNote } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import Footer from "../../partials/Footer.jsx";

const Home = () => {
  return (
    <main className="Home">
      <nav className="latest-nav">
        <ul>
          <li>
            <a href="#songs">
              Latest <FontAwesomeIcon className="icon" icon={faItunesNote} />
            </a>
          </li>
          <li>
            <a href="#videos">
              latest <FontAwesomeIcon className="icon" icon={faYoutube} />
            </a>
          </li>
          <li>
            <a href="#news">
              latest <FontAwesomeIcon className="icon" icon={faNewspaper} />
            </a>
          </li>
        </ul>
      </nav>
      <TopSongs />
      <TopVideos />
      <TopNews />
      <Footer />
    </main>
  );
};

export default Home;
