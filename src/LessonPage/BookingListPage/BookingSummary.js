import React from "react";
const SummaryItem = ({ url, no, long_name, short_name }) => (
  <span href={url}>
    {no}
    <small className="hidden-xs">{long_name}</small>
    <small className="visible-xs">{short_name}</small>
  </span>
);

const BookingSummary = ({ summaryList, client = false }) => {
  const bookingSummaryList = [
    {
      long_name: "Upcoming",
      short_name: "New"
    },
    {
      long_name: client ? "Awaiting Review" : "Delivered",
      short_name: client ? "AR" : "Del"
    },
    {
      long_name: "Completed",
      short_name: "Compl"
    },
    {
      long_name: "Pending",
      short_name: "Pend."
    },
    {
      long_name: "Cancelled",
      short_name: "Canc."
    }
  ];
  return (
    <div className="db-summary db-order-stats">
      {bookingSummaryList.map((booking, index) => (
        <SummaryItem
          key={index}
          url={`${
            client
              ? "/users/bookings?filter_by="
              : "/users/manage_bookings?filter_by="
          }${summaryList[index].url}`}
          no={summaryList[index].no}
          long_name={booking.long_name}
          short_name={booking.short_name}
        />
      ))}
    </div>
  );
};

export default BookingSummary;
