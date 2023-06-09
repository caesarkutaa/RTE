import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import useDownloader from "react-use-downloader";
import "./style.css";
const ItemDetails = () => {
  const { state } = useLocation();
  const { image, name, artist, audio, desc, video } = state;
  console.log(state);
  const downloadFile = (url) => {
    fetch(url)
      .then((res) => res.blob())
      .then((blob) => {
        const blobUrl = window.URL.createObjectURL(new Blob([blob]));
        const fileName = `${name} - ${artist}.mp3`;
        const aTag = document.createElement("a");
        aTag.href = blobUrl;
        aTag.setAttribute("download", fileName);
        document.body.appendChild(aTag);
        aTag.click();
        aTag.remove();
      });
  };
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
        <button onClick={() => downloadFile(audio)}>Download</button>
        <img src={image} alt="image" />
        <p>{name}</p>
        <p>{artist}</p>
        <p className="description">{desc}</p>
      </div>
    </section>
  );
};

export default ItemDetails;
