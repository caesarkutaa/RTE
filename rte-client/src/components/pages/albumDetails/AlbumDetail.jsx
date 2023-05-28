import { object } from "prop-types";
import React, { useState } from "react";
import "./style.css";
import { useLocation } from "react-router-dom";
const AlbumDetail = () => {
  const { state } = useLocation();
  //const [track, setTrack] = useState("");
  const { image, name, artist, tracks, desc } = state;

  console.log(tracks);
  return (
    <section className="details-section album">
      <div>
        <h3>{name}</h3>
        <h3>{artist}</h3>

        <small>
          {tracks.map((item, id) => (
            <div key={id}>
              <h5>Track {id + 1}</h5>
              <audio controls src={item} />
            </div>
          ))}
        </small>
        <p>{desc}</p>
      </div>
    </section>
  );
};

export default AlbumDetail;
