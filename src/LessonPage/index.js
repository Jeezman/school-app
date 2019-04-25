import React from "react";
import { PageContainer } from "../utils";
const links = [
  {
    url: "/users/bookings",
    title: "My Lessons",
    page: {
      loader: () => import(`./BookingListPage/index`)
    },
    extra_urls: ["/users/manage_bookings", "/users/client_meetings"]
  },

  {
    url: "/users/bookings/:order",
    extra_urls: ["/users/manage_bookings/:order"],

    page: {
      loader: () => import(`./BookingSummary/index`)
    }
  }
];
const LessonPage = () => (
  <div>
    <PageContainer className="" links={links} />
  </div>
);

export default LessonPage;
