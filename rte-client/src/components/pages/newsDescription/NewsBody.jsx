import React from "react";
import "./style.css";
import { useLocation } from "react-router-dom";
const NewsBody = () => {
  const { state } = useLocation();
  const { image, title, desc, body } = state;
  return (
    <section className="news-body">
      <img src={image} alt="" />
      <h1>{title}</h1>
      <p>{desc}</p>
      <p>{body}</p>
    </section>
  );
};

export default NewsBody;
