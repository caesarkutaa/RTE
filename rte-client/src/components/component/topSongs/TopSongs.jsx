import logo from "../../../assets/logo.jpeg";
import "./style.css";
import { faItunesNote } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const TopNews = () => {
  return (
    <section className="topSongs-section">
      <div className="latest">
        <h1>latest songs</h1>
        <FontAwesomeIcon className="itunes" icon={faItunesNote} />
      </div>

      <div className="top-Songs">
        <div className="container">
          <img src={logo} alt="" />
          <p> song Title</p>
          <p>artist</p>
        </div>
        <div className="container">
          <img src={logo} alt="" />
          <p> song Title</p>
          <p>artist</p>
        </div>
        <div className="container">
          <img src={logo} alt="" />
          <p> song Title</p>
          <p>artist</p>
        </div>
        <div className="container">
          <img src={logo} alt="" />
          <p> song Title</p>
          <p>artist</p>
        </div>
        <div className="container">
          <img src={logo} alt="" />
          <p> song Title</p>
          <p>artist</p>
        </div>
      </div>
    </section>
  );
};

export default TopNews;
