import React, { useState } from "react";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const SearchBar = (props) => {
  
  return (
    <section className="search-section">
      <div className="search">
      <input onChange={props.handleSearch} type="text" name="search" />
      <FontAwesomeIcon className="search-icon" icon={faSearch} />
      </div>
    </section>
   
  );
};

export default SearchBar;
