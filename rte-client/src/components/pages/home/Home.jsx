import React from "react";
import TopVideos from "../../component/topVideos/TopVideos.jsx";
import Header from "../../component/header/Header.jsx";
import TopSongs from "../../component/topSongs/TopSongs.jsx";
import TopNews from "../../component/topNews/TopNews.jsx";
import "./style.css";
const Home = () => {
  return (
    <main className="Home">
      <Header />
      <TopSongs />
      <TopVideos />
      <TopNews />
    </main>
  );
};

export default Home;
