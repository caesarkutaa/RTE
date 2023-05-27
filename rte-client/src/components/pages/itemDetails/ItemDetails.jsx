import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import useDownloader from "react-use-downloader";
import "./style.css";
const ItemDetails = () => {
  const { state } = useLocation();
  const { image, name, artist, audio, desc, video } = state;
  // const { size, elapsed, percentage, download, cancel } = useDownloader();
  // const fileUrl = audio;
  // const fileName = `${name} - ${artist}.mp4`;
  console.log(state);
  return (
    <section className="details-section">
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
      <div>
        <audio controls src={audio}></audio>
        <button>Download</button>
        <p>{name}</p>
        <p>{artist}</p>
        <p className="description">{desc}</p>
      </div>
    </section>
  );
};

export default ItemDetails;
