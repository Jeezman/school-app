import React from "react";
import BookingSummary from "../BookingSummary";
import BookingFilter from "../BookingFilter";
import { withRouter } from "react-router";

import "../../../static/css/external.css";
import { Link } from "react-router-dom";
const RowProfileImage = ({
  height = 32,
  width = 32,
  tutor,
  className = "user-pict-24"
}) => (
  <span className={className}>
    <img
      className="thumbnail inline"
      width={width}
      height={height}
      src={tutor.image}
      alt={tutor.slug}
    />
  </span>
);
const TableRow = ({
  title,
  colspan,
  isMobile = false,
  display = false,
  childClassDesktop = false,
  child,
  className = ""
}) => (
  <td
    colspan={colspan}
    className={`${className} ${
      display ? "" : isMobile ? "visible-xs" : "hidden-xs"
    }`}
  >
    {child ? <span className={childClassDesktop ? "hidden-xs" : ""} /> : null}
    {title}
  </td>
);

const BookingRow = ({ item = {}, client = false }) => {
  const user = {
    img: {
      tutor: item.tutor || {}
    },
    subject: {}
  };
  if (client) {
    user.img = {
      ...user.img,
      className: "gig-pict-45",
      width: 45,
      containerClassName: "gig-pic-thumb"
    };
    user.subject = {
      ...user.subject,
      url: `/users/bookings/${item.slug}`,
      text: `${item.skill} with ${item.tutor.first_name}`
    };
    user.amount = item.amount;
  } else {
    user.img = {
      ...user.img,
      containerClassName: "user-image-thumb"
    };
    user.subject = {
      ...user.subject,
      url: `/users/manage_bookings/${item.slug}`,
      text: item.skill
    };
    user.amount = item.total;
  }

  const profile = (
    <RowProfileImage
      className={user.img.className}
      width={user.img.width}
      tutor={item.tutor}
    />
  );
  const subject = <Link to={user.subject.url}>{user.subject.text}</Link>;
  const status = <span className="label label-default">{item.status}</span>;

  return (
    <tr>
      <TableRow display />
      <TableRow className={user.img.containerClassName} title={profile} />
      {client ? null : <TableRow display title={item.client_name} />}
      <TableRow display className="db-title" title={subject} />
      {client ? <TableRow display title={item.booking_date} /> : null}
      <TableRow display title={item.due_date} />
      <TableRow display className="db-amount" title={user.amount} />
      <TableRow display title={status} />
    </tr>
  );
};
const client = {
  heading: "Bookings You Made",
  bookingSummaryList: [
    {
      url: "new",
      no: 0
    },
    {
      url: "awaiting_review",
      no: 0
    },
    {
      url: "completed",
      no: 0
    },
    {
      url: "pending",
      no: 0
    },
    {
      url: "cancelled",
      no: 0
    }
  ],
  items: [
    {
      booking_details: "Mrs Rosemary",
      skill: "Literacy & Numeracy",
      booking_date: "Jan 10, 2017",
      due_date: "May 27, 2017",
      amount: 21000,
      status: "scheduled",
      slug: "SEWSEWWE",
      tutor: {
        first_name: "John",
        slug: "holla",
        image:
          "https://res.cloudinary.com/tuteria/image/upload/c_fill,f_auto,h_32,w_45/v1491813959/profile_pics/cdswqs5kdz7kqzluhwj8.jpg"
      }
    }
  ]
};
const tutor = {
  heading: "Bookings You Taught",
  bookingSummaryList: [
    {
      url: "new",
      no: 0
    },
    {
      url: "awaiting_review",
      no: 0
    },
    {
      url: "completed",
      no: 0
    },
    {
      url: "pending",
      no: 0
    },
    {
      url: "cancelled",
      no: 0
    }
  ],
  items: [
    {
      client_name: "Mrs Rosemary",
      skill: "Literacy & Numeracy",
      due_date: "May 27, 2017",
      total: 21000,
      status: "Completed",
      slug: "holla",
      tutor: {
        image:
          "https://res.cloudinary.com/tuteria/image/upload/c_fill,f_auto,h_32,w_32/v1/profile_pics/placeholder-white.jpg",
        slug: "aloiba"
      }
    }
  ]
};

class BookingList extends React.Component {
  state = {
    ...client,
    isClient: false
  };
  fetchDetails({ match }) {
    const isClient = match.path === "/users/bookings";
    if (isClient) {
      this.setState({ ...client, isClient });
    } else {
      this.setState({ ...tutor, isClient });
    }
  }
  componentDidMount() {
    this.fetchDetails(this.props);
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.heading !== nextProps.heading) {
      this.fetchDetails(nextProps);
    }
  }
  render() {
    const { heading, bookingSummaryList, items = [], isClient } = this.state;
    const client = isClient;
    const headerItems = client
      ? [
          { title: "" },
          { title: "Booking Detail", colspan: 2 },
          { title: "Detail", isMobile: true },
          { title: "Date", child: "Booking", childClassDesktop: true },
          { title: "Due On" },
          { title: "Amount", display: true },
          { title: "Status", display: true }
        ]
      : [
          { title: "", display: true },
          { title: "Client", colspan: 2, display: true },
          { title: "Skill", display: true },
          { title: "Due On", display: true },
          { title: "Total", display: true },
          { title: "Status", display: true }
        ];
    return (
      <div className="panel panel-default row">
        <div className="panel-heading">
          <h4>{heading}</h4>
        </div>

        <div className="panel-body mp-box">
          <BookingSummary client={client} summaryList={bookingSummaryList} />
          <BookingFilter />
          <div className="">
            <table className="table">
              <thead>
                <tr>
                  <td>&nbsp;</td>
                  {headerItems.map((item, index) => <TableRow {...item} />)}
                </tr>
              </thead>
              <tbody>
                {items.map((booking, index) => (
                  <BookingRow item={booking} key={index} client={client} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(BookingList);
