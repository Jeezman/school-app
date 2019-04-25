import React from "react";
const FilterItem = ({ list_role, role, tabindex, url }) => (
  <li role="Presentation" />
);

const filterList = [
  {
    url: "/users/bookings/?filter_by=new"
  },
  {
    url: "/users/bookings/?filter_by=awaiting_review"
  },
  {
    url: "/users/bookings/?filter_by=completed"
  },
  {
    url: "/users/bookings/?filter_by=pending"
  },
  {
    url: "/users/bookings/?filter_by=cancelled"
  }
];
const BookingFilter = () => (
  <div className="db-filters row  row-space-4">
    <div className="filter-select col-sm-12">
      <div className="dropdown pull-left">
        <button
          className="btn btn-default dropdown-toggle"
          type="button"
          id="dropdownMenu1"
          data-toggle="dropdown"
          aria-expanded="true"
        >
          {" "}
          Filter By
          <span className="caret" />
        </button>
        <ul
          className="dropdown-menu"
          role="menu"
          aria-labelledby="dropdownMenu1"
        >
          {filterList.map((filter, index) => (
            <FilterItem key={index} url={filterList.url} />
          ))}
        </ul>
      </div>
    </div>
  </div>
);

export default BookingFilter;
