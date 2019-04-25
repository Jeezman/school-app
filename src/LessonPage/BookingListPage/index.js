import React from "react";
import BookingSidebar from "./BookingSidebar";
import { generateLoadableComponent } from "../../utils";

import { Route, Switch } from "react-router-dom";

const links = [
  {
    url: "/users/bookings",
    extra_urls: ["/users/manage_bookings"],
    page: "BookingList"
  },
  {
    url: "/users/client_meetings",
    page: "ClientMeetingListPage"
  }
];

const ListPage = () => (
  <div className="container row-space-top-4 row-space-4">
    <div className="row">
      <BookingSidebar />
      <div className="col-sm-9 col-xs-12">
        <Switch>
          {links.map((link, index) => {
            let allLinks = link.extra_urls || [];
            allLinks.push(link.url);
            return allLinks.map((li, ind) => (
              <Route
                exact
                path={li}
                component={generateLoadableComponent({
                  loader: () => import("./Pages/" + link.page)
                })}
              />
            ));
          })}
        </Switch>
        {/*<Route path="/users/bookings" component={BookingListPage} />
        <Route
          path="/users/manage_bookings"
          component={ManageBookingListPage}
        />
        <Route
          path="/users/client_meetings"
          component={ClientMeetingListPage}
        />*/}
      </div>
    </div>
  </div>
);

export default ListPage;
