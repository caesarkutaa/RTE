import { useState, useEffect } from "react";
import "./style.css";

import { useNavigate } from "react-router-dom";
import news from "../../../assets/vite.png";
import { faNewspaper } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const TopNews = ({ searchResultCount, searchedNews, fetching }) => {
  const navigate = useNavigate();
  const handleClick = (image, title, desc, body) => {
    navigate("/newsBody", {
      state: {
        image: image,
        title: title,
        desc: desc,
        body: body,
      },
    });
  };

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
          {searchResultCount.length >= 1 ? (
            <>
              {searchedNews.map((newss, id) => (
                <div key={id} className="container">
                  <img src={newss.image.url} alt="" />
                  <h2> {newss.title}</h2>
                  <p>{newss.description}</p>
                  <button
                    onClick={() => {
                      handleClick(
                        newss.image.url,
                        newss.title,
                        newss.description,
                        newss.body
                      );
                    }}
                    className="read-more"
                  >
                    Read More
                  </button>
                </div>
              ))}
            </>
          ) : (
            <>
              {searchedNews.slice(0, 3).map((newss, id) => (
                <div key={id} className="container">
                  <img src={newss.image.url} alt="" />
                  <h2> {newss.title}</h2>
                  <p>{newss.description}</p>
                  <button
                    onClick={() => {
                      handleClick(
                        newss.image.url,
                        newss.title,
                        newss.description,
                        newss.body
                      );
                    }}
                    className="read-more"
                  >
                    Read More
                  </button>
                </div>
              ))}
            </>
          )}
        </div>
      )}
    </section>
  );
};

export default TopNews;
