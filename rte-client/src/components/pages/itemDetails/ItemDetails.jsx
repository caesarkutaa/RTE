import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import "./style.css";
const ItemDetails = () => {
  const { state } = useLocation();
  const { image, name, artist, audio, video } = state;

  console.log(state);
  return (
    <section className="details-section">
      <img src={image} alt="logo" />
      <p>{name}</p>
      <p>{artist}</p>
      <audio controls src={audio}></audio>
      <a href={audio} download={`${name} - ${artist}.mp3`}>
        Download
      </a>
    </section>
  );
};

export default ItemDetails;
