import React from "react";
import "../../static/css/booking_summary.css";
import { Route, Switch } from "react-router-dom";
import { generateLoadableComponent } from "../../utils";

const links = [
  {
    url: "/users/manage_bookings/:order",
    page: {
      loader: () => import(`./TutorView`)
    }
  },

  {
    url: "/users/bookings/:order",
    page: {
      loader: () => import(`./ClientView`)
    }
  }
];
const BookingSummaryView = () => (
  <div className="container-fluid">
    <Switch>
      {links.map((link, index) => {
        let allLinks = link.extra_urls || [];
        allLinks.push(link.url);
        return allLinks.map((li, ind) => (
          <Route
            exact
            path={li}
            component={generateLoadableComponent(link.page)}
          />
        ));
      })}
    </Switch>
  </div>
);

export default BookingSummaryView;
