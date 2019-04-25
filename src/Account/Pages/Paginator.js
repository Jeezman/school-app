import React from "react";
const Paginator = ({ currentPage = 1, pageCount = 2 }) => (
  <div className="row">
    <div className="pagination-container col-xs-12 margin-top-15">
      <nav className="pagination-margin pull-left">
        <ul className="pagination pagination-theme  no-margin ">
          <li className={currentPage === 1 ? "disabled" : ""}>
            <a title="First Page" href="?page=1">
              ←
            </a>
          </li>
          {[...Array(pageCount)].map((page, index) => (
            <li className={index + 1 === currentPage ? "active" : ""}>
              <a
                title={
                  index + 1 === currentPage
                    ? "Current Page"
                    : `Page ${index + 1} of ${pageCount}`
                }
                href="/bu"
              >
                {index + 1}
              </a>
            </li>
          ))}
          <li className={currentPage === pageCount ? "disabled" : ""}>
            <a title="Last Page" href="?page=2">
              →
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
);

export default Paginator;
