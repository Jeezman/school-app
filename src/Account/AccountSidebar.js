import React from "react";

import { Route, Link } from "react-router-dom";

const AccountSectionLink = ({ label, to, activeOnlyWhenExact, className }) => (
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
const AccountPageLinks = ({ className = "", links }) => (
  <ul className={className}>
    {links.map((link, index) => (
      <AccountSectionLink label={link.label} key={index} to={link.url} />
    ))}
  </ul>
);
const AccountSidebar = ({ links }) => (
  <div className="col-sm-3">
    <div className="visible-xs row">
      <div className="header-2 visible-xs">
        <div className="navy">
          <AccountPageLinks links={links} />
        </div>
      </div>
    </div>
    <div className="hidden-xs row">
      <div className="sidenav ">
        <AccountPageLinks links={links} className="sidenav-list" />
      </div>
    </div>
  </div>
);

export default AccountSidebar;
