import { useState, useEffect } from "react";
import "./style.css";
import axios from "../../../API/axios";
import news from "../../../assets/vite.png";
import { faNewspaper } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const TopNews = () => {
  const [news, setNews] = useState([]);
  const [fetching, setFetching] = useState(true);
  useEffect(() => {
    getNews();
  }, []);
  const getNews = () => {
    setFetching(true);
    axios
      .get("/news/")
      .then((res) => {
        //console.log(res.data.Allnews);
        setNews(res.data.Allnews);
        setFetching(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  //console.log(news);
  return (
    <section id="news" className="news-section">
      <div className="latest-news">
        <h1>latest News</h1>
        <FontAwesomeIcon className="newspaper" icon={faNewspaper} />
      </div>
      {fetching ? (
        <>fetching....</>
      ) : (
        <div className="top-news">
          {news.map((newss, id) => (
            <div key={id} className="container">
              <img src={newss.image.url} alt="" />
              <h2> {newss.title}</h2>
              <p>{newss.description}</p>
              <a className="read-more" href="">
                Read More
              </a>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default TopNews;
