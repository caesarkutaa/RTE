import { useState, useEffect } from "react";
import Admin from "./components/pages/Admin";
import Login from "./components/login";
import { Routes, Route, json } from "react-router-dom";
import RequireAuth from "./components/RequireAuth";
import Albums from "./components/pages/albums/Albums";
import Home from "./components/pages/home/Home";
import Songs from "./components/pages/songs/Songs";
import Videos from "./components/pages/videos/Videos";
import News from "./components/pages/news/News";
import "./App.css";
import Footer from "./components/partials/Footer";
//import { getMusic } from "./API/axios";
import AlbumDetail from "./components/pages/albumDetails/AlbumDetail";
import NewsBody from "./components/pages/newsDescription/NewsBody";
import YoutubeEmbed from "./components/pages/youtubeEmbed/YoutubeEmbed";
import ItemDetails from "./components/pages/itemDetails/ItemDetails.jsx";
import Header from "../src/components/component/header/Header.jsx";
//import SearchBar from "../src/components/component/searchBar/SearchBar";
function App() {
  const [music, setMusic] = useState([]);
  const [searchMusic, setSearchMusic] = useState([]);
  console.log(music);
  return (
    <>
      <Header />
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/songs" element={<Songs setMusic={setMusic} />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/news" element={<News />} />
        <Route path="/albums" element={<Albums />} />
        <Route element={<RequireAuth />}>
          <Route path="/admin" element={<Admin />} />
        </Route>
        <Route path="/song" element={<ItemDetails />} />
        <Route path="/video" element={<YoutubeEmbed />} />
        <Route path="/newsBody" element={<NewsBody />} />
        <Route path="/album" element={<AlbumDetail />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
