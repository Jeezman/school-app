import React from "react";

const ErrorPage = () => {
  return (
    <div className="page-container-responsive">
      <div className="row row-space-8 row-space-top-4">
        <div className="col-md-5 col-middle col-md-offset-1 col-xs-offset-0 ">
          <h1 className="text-jumbo text-ginormous hide-sm">Oops!</h1>
          <h2>An Error Has Occured</h2>
          <h6>Error code: 500</h6>
          <ul className="list-unstyled">
            <li>Here are some helpful links instead:</li>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/search">Search</a>
            </li>
            <li>
              <a href="/help">Help</a>
            </li>
            <li>
              <a href="/help/getting-started/how-to-hire">
                How to Hire on Tuteria
              </a>
            </li>
            <li>
              <a href="/trust">Trust &amp; Safety</a>
            </li>
            <li>
              <a href="/trust">Trust &amp; Safety</a>
            </li>
          </ul>
        </div>
        <div className="col-md-5 col-middle text-center">
          <img
            src="/img/404.png"
            height="428"
            className="hidden-xs"
            alt="Search glass."
          />
        </div>
      </div>
    </div>
  );
};
export default ErrorPage;
