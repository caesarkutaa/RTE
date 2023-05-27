import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./style.css";
import logo from "../../../assets/logo.jpeg";
import { useState, useEffect } from "react";
import axios from "../../../API/axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Carousel = () => {
  const [fetching, setFetching] = useState(true);
  const [allSongs, setAllSongs] = useState([]);

  var settings = {
    dots: true,
    speed: 500,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
  };
  useEffect(() => {
    getSongs();
  }, []);

  const getSongs = () => {
    setFetching(true);
    axios
      .get("/song/")
      .then((res) => {
        //console.log(res.data.songs);
        setAllSongs(res.data.songs);
        setFetching(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  console.log(allSongs);

  return (
    <div className="reactSlick">
      <Slider {...settings}>
        <div>
          <img src={logo} alt="" />
        </div>
        <div>
          <img src={logo} alt="" />
        </div>
        <div>
          <img src={logo} alt="" />
        </div>
        <div>
          <img src={logo} alt="" />
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
