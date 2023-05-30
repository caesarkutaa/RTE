import { useEffect, useState } from "react";
import axios from "../../../API/axios";
import "./style.css";
import { useNavigate } from "react-router-dom";
import { faNewspaper } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Pagination from "../../component/pagination/Pagination";
import SearchBar from "../../component/searchBar/SearchBar";
const News = () => {
  const navigate = useNavigate();
  const [fetching, setFetching] = useState(true);
  const [allNews, setAllNews] = useState([]);
  const [searchedNews, setSearchedNews] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(3);

  useEffect(() => {
    getNews();
  }, []);

  const getNews = () => {
    setFetching(true);
    axios
      .get("/news/")
      .then((res) => {
        //console.log(res.data.Allnews);
        setAllNews(res.data.Allnews);
        setSearchedNews(res.data.Allnews);
        setFetching(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };
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
  const handleSearch = (e) => {
    if (e.target.value == "") {
      return setSearchedNews(allNews);
    }
    const searchResult = allNews.filter(
      (news) =>
        news.title.toLowerCase().includes(e.target.value.toLowerCase()) ||
        news.description.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setSearchedNews(searchResult);
  };
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = searchedNews.slice(indexOfFirstItem, indexOfLastItem);
  const nPages = Math.ceil(searchedNews.length / itemsPerPage);
  return (
    <>
      <SearchBar handleSearch={handleSearch} />
      <section className="news-section">
        <div className="latest-news">
          <h1>All News</h1>
          <FontAwesomeIcon className="newspaper" icon={faNewspaper} />
        </div>
        {fetching ? (
          <>fetching.......</>
        ) : (
          <div className="top-news">
            {currentItems.map((newss, id) => (
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
          </div>
        )}
        <Pagination
          nPages={nPages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </section>
    </>
  );
};

export default News;
