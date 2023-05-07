import { useEffect, useState } from "react";
import axios from "../../../API/axios";
import "./style.css";
import { faNewspaper } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Pagination from "../../component/pagination/Pagination";
import Header from "../../component/header/Header.jsx";
const News = () => {
  const [fetching, setFetching] = useState(true);
  const [allNews, setAllNews] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);

  useEffect(() => {
    getNews();
  }, []);

  const getNews = () => {
    setFetching(true);
    axios
      .get("/news/")
      .then((res) => {
        console.log(res.data.Allnews);
        setAllNews(res.data.Allnews);
        setFetching(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = allNews.slice(indexOfFirstItem, indexOfLastItem);
  const nPages = Math.ceil(allNews.length / itemsPerPage);
  return (
    <section className="news-section">
      <div className="latest-news">
        <h1>All News</h1>
        <FontAwesomeIcon className="newspaper" icon={faNewspaper} />
      </div>
      {fetching ? (
        <>fetching....</>
      ) : (
        <div className="top-news">
          {currentItems.map((newss, id) => (
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
      <Pagination
        nPages={nPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </section>
  );
};

export default News;
