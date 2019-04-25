import React from "react";

import { Route, Link } from "react-router-dom";
const SubjectSectionLink = ({ label, to, activeOnlyWhenExact, className }) => (
  <Route
    path={to}
    exact={activeOnlyWhenExact}
    children={({ match }) => (
      <li className={className}>
        <Link
          to={to}
          aria-selected={match ? true : false}
          className={`sidenav-item`}
        >
          {label}
        </Link>
      </li>
    )}
  />
);
const SubjectPageLinks = ({ className = "", links }) => (
  <ul className={className}>
    {links.map((link, index) => (
      <SubjectSectionLink
        key={index}
        label={link.label}
        to={link.url}
        className={link.className}
      />
    ))}
  </ul>
);

const SubjectSidebar = ({ links }) => (
  <div className="col-sm-3">
    <div className="visible-xs row">
      <div className="header-2 visible-xs">
        <div className="navy">
          <SubjectPageLinks links={links} />
        </div>
      </div>
    </div>
    <div className="hidden-xs row">
      <div className="sidenav ">
        <SubjectPageLinks links={links} className="sidenav-list" />
      </div>
    </div>
  </div>
);
export default SubjectSidebar;
