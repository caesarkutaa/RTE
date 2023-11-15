import React from "react";
import { useLocation } from "react-router-dom";
import "./style.css";
const YoutubeEmbed = () => {
  const { state } = useLocation();
  const { image, name, artist, audio, desc, video } = state;
  console.log(state);
  return (
    <div className="embed-youtube">
      <iframe
        width=" 853"
        height="500"
        src={`https://www.youtube.com/embed/${video}`}
        allowFullScreen
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        title="Embedded Youtube"
        frameBorder="0"
      />
      <h1>
        {name} - <small>{artist}</small>
      </h1>
      <p className="description">{desc}</p>
    </div>
  );
};

export default YoutubeEmbed;
