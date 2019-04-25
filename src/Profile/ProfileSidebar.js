import React from "react";
import { Route, Link } from "react-router-dom";

const ProfileSectionLink = ({ label, to, activeOnlyWhenExact, className }) => (
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

const ProfilePageLinks = ({ className = "", links }) => (
  <ul className={className}>
    {links.map((link, index) => (
      <ProfileSectionLink label={link.label} key={index} to={link.url} />
    ))}
  </ul>
);

const ProfileSidebar = ({ links }) => (
  <div className="col-md-3">
    <div className="header-2 visible-xs">
      <div className="navy ">
        <ProfilePageLinks links={links} />
      </div>
    </div>
    <div className="hidden-xs">
      <div className="sidenav ">
        <ProfilePageLinks className="sidenav-list" links={links} />
      </div>

      <div className="row col-sm-10">
        <a
          href="/biolao/"
          className="btn btn-default hidden-sm btn-block row-space-top-4"
        >
          View Profile
        </a>
      </div>
    </div>
  </div>
);

export default ProfileSidebar;
