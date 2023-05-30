import { object } from "prop-types";
import React, { useState } from "react";
import "./style.css";
import { useLocation } from "react-router-dom";
const AlbumDetail = () => {
  const { state } = useLocation();
  //const [track, setTrack] = useState("");
  const { image, name, artist, tracks, desc } = state;

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

  console.log(tracks);
  return (
    <section className="details-section album">
      <div>
        <h3>{name}</h3>
        <h3>{artist}</h3>

        <small>
          <img src={image} alt="album" />
          {tracks.map((item, id) => (
            <div key={id}>
              <h5>Track {id + 1}</h5>
              <audio controls src={item} />
              <button onClick={() => downloadFile(item)}>Download</button>
            </div>
          ))}
        </small>
        <p>{desc}</p>
      </div>
    </section>
  );
};

export default AlbumDetail;
