import React from "react";
import { Route, Link } from "react-router-dom";
const BookingSectionLink = ({ label, to, activeOnlyWhenExact }) => (
  <Route
    path={to}
    exact={activeOnlyWhenExact}
    children={({ match }) => (
      <li>
        <Link
          to={to}
          aria-selected={match ? true : false}
          className="sidenav-item"
        >
          {label}
        </Link>
      </li>
    )}
  />
);

const BookingPageLinks = ({ className = "" }) => (
  <ul className={className}>
    <BookingSectionLink label="Booked Lessons" to="/users/bookings" />
    <BookingSectionLink label="Received Lessons" to="/users/manage_bookings" />
    <BookingSectionLink to="/users/client_meetings" label="Meeting requests" />
  </ul>
);

const BookingSidebar = () => (
  <div className="col-sm-3">
    <div className="visible-xs row">
      <div className="header-2 visible-xs">
        <div className="navy">
          <BookingPageLinks />
        </div>
      </div>
    </div>
    <div className="hidden-xs row">
      <div className="sidenav ">
        <BookingPageLinks className="sidenav-list" />
      </div>
    </div>
  </div>
);
export default BookingSidebar;
