import { useState } from "react";
import "./style.css";
const Pagination = ({ currentPage, setCurrentPage, nPages }) => {
  const [disable, setDisable] = useState(false);
  //const [disableN, setDisableN] = useState(false);
  const nextPage = () => {
    if (currentPage !== nPages) {
      setCurrentPage(currentPage + 1);
    } else {
      setDisable(true);
    }
  };
  const prevPage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    } else {
      setDisable(true);
    }
  };
  return (
    <nav className="pagination">
      <ul>
        <li>
          <button
            className={` ${disable ? "disable" : ""}`}
            onClick={() => {
              prevPage();
            }}
            href="#"
          >
            prev
          </button>
        </li>
        <li>
          <button
            className={` ${disable ? "disable" : ""}`}
            onClick={() => {
              nextPage();
            }}
            href="#"
          >
            next
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
