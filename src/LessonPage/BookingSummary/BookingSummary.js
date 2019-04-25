import React, { Component } from "react";
import {
  DetailFooterItem,
  DetailHeader,
  BookingStatus,
  BookingSummaryTable
} from "./shared";
//import DetailHeader from "./ClientView";
class SessionData extends Component {
  state = {
    active: false,
    clicked: false
  };
  onButtonClick = () => {
    if (this.state.active !== true) {
      this.setState({ active: true });
    } else {
      this.setState({ active: false });
    }
  };
  onLinkClick = () => {
    if (this.state.clicked !== true) {
      this.setState({ clicked: true });
    }
  };
  sendDelivered = () => {
    this.props.item.possible_status = false;
    this.props.item.is_due = false;
    this.props.item.status_display = "Completed";
    this.props.item.status_class = "success";
    this.setState({ active: false });

    console.log(this.props.item);
  };
  render() {
    return (
      <div className="panel row">
        <div
          className="panel-heading clearfix single-session"
          role="tab"
          id={`heading`}
        >
          <div className="row">
            <div className="col-xs-4 col-sm-5 no-padding-right">
              <div className="hidden-xs">{this.props.item.date}</div>
              <div className="visible-xs eleven-font">
                {this.props.item.date}
              </div>
            </div>
            <div className="col-xs-4 col-sm-3 eleven-font">
              {this.props.item.time}
            </div>
            <div className="col-xs-4 col-sm-3 no-padding-left col-sm-offset-1 text-center">
              {this.props.item.is_due && this.props.item.possible_status ? (
                <a
                  className="no-underline btn btn-sm btn-primary collapsed"
                  data-toggle="collapse"
                  data-parent="#accordion"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                  onClick={e => this.onButtonClick()}
                >
                  Submit
                </a>
              ) : (
                <span className={`label label-${this.props.item.status_class}`}>
                  {this.props.item.status_display}
                </span>
              )}
            </div>
          </div>
        </div>
        <div
          id={`collapse`}
          className={`panel-collapse collapse ${
            this.state.active ? "in" : ""
          } `}
          role="tabpanel"
          aria-labelledby={`heading`}
        >
          <div className="panel-body">
            <h4>Welcome Back</h4>
            <p>
              Indicate that this lesson was taught. Your client would be able to
              confirm it.
            </p>
            <form
              action="/users/update-session/10063/"
              method="post"
              id="session_form"
            >
              <input
                type="hidden"
                name="csrfmiddlewaretoken"
                defaultValue="xQ9BEceSUDWpqZqkFNeqDJWFRiGBdQqf"
              />
              <input id="id_lesson_taught" name="lesson_taught" type="hidden" />
              <div className="row row-space-2">
                <div className="col-sm-4 col-sm-offset-8 col-xs-6 col-xs-offset-0">
                  <a
                    className="btn btn-block btn-success"
                    id="taught-btn"
                    href="no-script-url"
                    onClick={e => this.sendDelivered()}
                  >
                    Lesson Taught
                  </a>
                </div>
              </div>
              <div className="had-issues">
                <a
                  className={`issues-toggle pull-right ${
                    this.state.clicked ? "hide" : ""
                  }`}
                  href="no-script-url"
                  onClick={e => this.onLinkClick()}
                >
                  Had any issues?
                </a>
                <div
                  id="issue-form-group "
                  className={`form-group ${this.state.clicked ? "" : "hide"}`}
                >
                  <select className="form-control" id="id_issue" name="issue">
                    <option value selected="selected">
                      Select Issue
                    </option>
                    <option value="more_hours">
                      I taught more than the booked hours
                    </option>
                    <option value="client_not_cooperative">
                      Client was not cooperative
                    </option>
                    <option value="late_lesson">
                      Lesson did not start on time
                    </option>
                  </select>
                  <small className="help-block">
                    Your response helps us provide a solution
                  </small>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const session_data = [
  {
    date: "Friday, February 24",
    time: "1pm-2pm",
    is_due: true,
    possible_status: true,
    status_class: "default",
    status_display: "Not Started"
  },
  {
    date: "Saturday, February 25",
    time: "1pm-2pm",
    is_due: true,
    possible_status: true,
    status_class: "default",
    status_display: "Started"
  },
  {
    date: "Friday, March 3",
    time: "1pm-2pm",
    is_due: true,
    possible_status: true,
    status_class: "default",
    status_display: "Not Started"
  },
  {
    date: "Saturday, March 4",
    time: "1pm-2pm",
    is_due: true,
    possible_status: true,
    status_class: "default",
    status_display: "Not Started"
  },
  {
    date: "Friday, March 10",
    time: "1pm-2pm",
    is_due: true,
    possible_status: true,
    status_class: "default",
    status_display: "Not Started"
  },
  {
    date: "Saturday, March 11",
    time: "1pm-2pm",
    is_due: true,
    possible_status: true,
    status_class: "default",
    status_display: "Not Started"
  },
  {
    date: "Friday, March 17",
    time: "1pm-2pm",
    is_due: true,
    possible_status: true,
    status_class: "default",
    status_display: "Not Started"
  }
];

const Body = ({ price }) => (
  <div>
    <span
      style={{
        position: "absolute",
        right: 28,
        top: 12,
        color: "green",
        fontSize: 15
      }}
    >
      YOUR EARNING
    </span>

    <h3>
      <span className="order-price pull-right hidden-xs hidden-sm">
        ₦{price}
      </span>
      Client: <a href="/olumideomoniwa/">Yinka</a>
      <span className="phone_number">(+2348023737952)</span>
    </h3>
    <p>
      Subject:{" "}
      <a href="/ng/olayinkao/hausa-language-is-smooth-and-fun-easy-and-exciting-to-learn/">
        Hausa Language
      </a>
    </p>
  </div>
);

const BookingSummary = ({
  img = "http://res.cloudinary.com/tuteria/image/upload/c_fill,f_auto,h_80,w_80/placeholder-white.jpg",
  alt = "Hausa Language is smooth and fun, easy and exciting to learn!!",
  price = 14700,
  body = <Body price={price} />
}) => (
  <section
    className="db-content db-content-order-detail"
    data-user-type="buyer"
    data-order-status="completed"
    data-order-seller="pro_ebookcovers"
  >
    <div className="db-tabs-wrapper ">
      <article className=" db-order-activity js-page-tab-content js-page-tab-activity">
        <DetailHeader img={img} price={price} body={body}>
          <DetailFooterItem link_text="Location: WAEC" />
          <DetailFooterItem link_text="Feb. 27, 2017" />
          <DetailFooterItem link_text="Booking:#LBCTIEHOPDIS" />
        </DetailHeader>

        <BookingSummaryTable
          lesson_info="8 lessons"
          amount="14700"
          total="14700"
        />
      </article>
    </div>
    <div id="booking-container" className="panel row-space-top-4">
      <BookingStatus message="The client has made full payment for the lesson.
      This booking is expected to commence on Friday, Feb. 24 and
      end on
      Saturday, March 18." />

      <hr />

      <div id="booking-instruction-and-status" className="panel-body">
        <div className="row message-to-tutor">
          <div className="col-xs-1">
            <div className="text-center">
              <img
                alt="Yinka"
                className="media-object img-circle"
                height={40}
                src="http://res.cloudinary.com/tuteria/image/upload/c_fill,f_auto,h_40,w_40/placeholder-white.jpg"
                width={40}
              />
            </div>
          </div>
          <div className="col-xs-9 col-xs-offset-1 margin-bottom-5 col-sm-10 col-sm-offset-0">
            <h4 className="blue-font">Instructions from Yinka</h4>
            <div>WAEC, Lagos</div>
          </div>
          <div className="col-xs-12 col-sm-11 col-sm-offset-1">
            <p id="the_message" className="col-xs-12 well bg-info">
              No extra message from client.
            </p>
          </div>
        </div>
        <div id="tutor-section" className="col-xs-12 col-sm-offset-1 col-sm-11">
          <div className=" panel panel-default row">
            <div className="panel-heading clearfix">
              <div className="col-xs-4 col-sm-5 no-padding">SESSION</div>
              <div className="col-xs-4 col-sm-3 text-center-small">TIME</div>
              <div className="col-xs-4 col-sm-2 text-center-small col-sm-offset-2">
                STATUS
              </div>
            </div>
            <div className="panel-body list-of-sessions">
              <div
                className="panel-group"
                id="accordion"
                role="tablist"
                aria-multiselectable="true"
              >
                {session_data.map((item, index) => {
                  return <SessionData item={item} />;
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hh" />
    </div>
  </section>
);

export default BookingSummary;
