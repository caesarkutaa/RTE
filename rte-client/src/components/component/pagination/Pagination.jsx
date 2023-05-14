import {useState}  from "react";
import "./style.css";
const Pagination = ({ currentPage, setCurrentPage, nPages }) => {
  const [disable, setDisable] = useState(false)
  const nextPage = () => {
    if (currentPage !== nPages) {
      setCurrentPage(currentPage + 1);
    }
    else{
      setDisable(true);
    }
  };
  const prevPage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
    else{
      setDisable(true)
    }
  };
  return (
    <nav className="pagination">
      <ul>
        <li>
          <a   onClick={prevPage} href="#">
            prev
          </a>
        </li>
        <li>
          <a onClick={nextPage} href="#">
            next
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
