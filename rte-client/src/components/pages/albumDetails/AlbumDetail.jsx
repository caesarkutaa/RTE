import React from "react";
import { useLocation } from "react-router-dom";
const AlbumDetail = () => {
  const { state } = useLocation();
  const { image, name, artist, tracks, desc } = state;

  console.log(tracks);
  return (
    <section className="details-section">
      <div>
        <p>{name}</p>
        <p>{artist}</p>
        <p className="description">{desc}</p>
        {tracks.map((track, id) => {
          <small>{track}</small>;
        })}
      </div>
    </section>
  );
};

export default AlbumDetail;
