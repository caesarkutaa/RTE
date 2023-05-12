import logo from "../../../assets/logo.jpeg";
import SearchBar from "../searchBar/SearchBar";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./style.css";
const Header = () => {
  const [search, setSearch] = useState();
  const [open, setOpen] = useState(false);
  const searchResult = (val) => {
    setSearch(val);
    if (search !== "") {
    }
  };
  return (
    <header>
      <nav>
        <div className="logo">
          <img src={logo} alt="logo" />
          <h1>Right Time Entertainment</h1>
        </div>
        <div className={`${open ? "navs open" : "navs"}`}>
          <ul>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "activate" : "")}
                to="/"
                end
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "activate" : "")}
                to="/songs"
              >
                Songs
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "activate" : "")}
                to="/videos"
              >
                Videos
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "activate" : "")}
                to="/news"
              >
                News
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "activate" : "")}
                to="/albums"
              >
                Albums
              </NavLink>
            </li>
          </ul>
        </div>
        <div
          className={`${open ? "hamburger-btn active" : "hamburger-btn"}`}
          onClick={() => setOpen(!open)}
        >
          <span className="line" />
          <span className="line" />
          <span className="line" />
        </div>
      </nav>
    </header>
  );
};

export default Header;
