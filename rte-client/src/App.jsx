import { useState } from "react";
import Admin from "./components/pages/Admin";
import Login from "./components/login";
import { Routes, Route } from "react-router-dom";
import RequireAuth from "./components/RequireAuth";
import Home from "./components/pages/home/Home";
import Songs from "./components/pages/songs/Songs.jsx";
import Videos from "./components/pages/videos/Videos.jsx";
import News from "./components/pages/news/News.jsx";
import "./App.css";
import YoutubeEmbed from "./components/pages/youtubeEmbed/YoutubeEmbed";
import ItemDetails from "./components/pages/itemDetails/ItemDetails.jsx";
import Header from "../src/components/component/header/Header.jsx";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/songs" element={<Songs />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/news" element={<News />} />
        <Route element={<RequireAuth />}>
          <Route path="admin" element={<Admin />} />
        </Route>
        <Route path="/itemDetails" element={<ItemDetails />} />
        <Route path="/youtubeEmbed" element={<YoutubeEmbed />} />
      </Routes>
    </>
  );
}

export default App;
