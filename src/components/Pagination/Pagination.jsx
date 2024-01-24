import React, { useState } from "react";

const Pagination = ({ setCurrentPage, currentPage, totalPages }) => {
  const pageNumbers = [];

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  console.log(currentPage, "currentPage");

  return (
    <nav aria-label="">
      <ul className="pagination d-flex justify-content-center gap-3">
        <li
          className={`page-item ${currentPage === 1 && "disabled"}`}
          onClick={() => setCurrentPage((prev) => prev - 1)}
          style={{ cursor: "pointer" }}
        >
          <span className="page-link">
            <i className="fa fa-angle-left"></i>
          </span>
        </li>

        {pageNumbers.map((i) => (
          <li
            className={`page-item ${currentPage === i && "active"}`}
            style={{ cursor: "pointer" }}
          >
            <span className="page-link" onClick={() => setCurrentPage(i)}>
              {i}
            </span>
          </li>
        ))}
        <li
          className={`page-item ${currentPage === totalPages && "disabled"}`}
          onClick={() => setCurrentPage((prev) => prev + 1)}
          style={{ cursor: "pointer" }}
        >
          <span className="page-link">
            {" "}
            <i className="fa fa-angle-right"></i>
          </span>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
