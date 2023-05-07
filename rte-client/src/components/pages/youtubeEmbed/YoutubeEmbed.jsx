import React from "react";
import { useLocation } from "react-router-dom";
import "./style.css";
const YoutubeEmbed = () => {
  const { state } = useLocation();
  const { songsVideo, name, artist, audio, video } = state;
  return (
    <div className="embed-youtube">
      <h1>
        {name} - <small>{artist}</small>
      </h1>
      <iframe
        width=" 853"
        height="480"
        src={`https://www.youtube.com/embed/v8SNlvR86xc`}
        allowFullScreen
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        title="Embedded Youtube"
        frameborder="0"
      />
    </div>
  );
};

export default YoutubeEmbed;
