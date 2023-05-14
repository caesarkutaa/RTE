import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import "./style.css";
const ItemDetails = () => {
  const { state } = useLocation();
  const { image, name, artist, audio, desc, video } = state;

  console.log(state);
  return (
    <section className="details-section">
      <div>
        <img src={image} alt="logo" />
        <p>{name}</p>
        <p>{artist}</p>
        <p className="description">{desc}</p>
        <audio controls src={audio}></audio>
        <a href={audio} download={`${name} - ${artist}.mp3`}>
          Download
        </a>
      </div>
      <div>
        <iframe
          width=" 853"
          height="500"
          src={`https://www.youtube.com/embed/${video}`}
          allowFullScreen
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          title="Embedded Youtube"
          frameBorder="0"
        />
      </div>
    </section>
  );
};

export default ItemDetails;
