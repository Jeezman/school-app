import React from "react";
import { Tabs } from "../../utils";

import {
  BookingSummaryRightBar,
  ListItem,
  Invite,
  Resolution,
  DetailHeader,
  BookingStatus,
  BookingSummaryTable,
  DetailFooterItem
} from "./shared";

const Body = ({ price }) => (
  <h1>
    <span className="order-price pull-right hidden-xs hidden-sm">₦{price}</span>
    An Experienced and Amiable IELTS Instructor You'll Be Glad You Hired
    <span className="phone_number">(+2348033278216)</span>
  </h1>
);
const BookingSummaryDetail = ({
  img = "http://res.cloudinary.com/tuteria/image/upload/c_fill,f_auto,h_80,w_80/v1438317646/cpyzgphpltq1kbqhrcj7.jpg",
  alt = "An Experienced and Amiable IELTS Instructor You'll Be Glad You Hired",
  price = 20000,
  body = <Body price={price} />
}) => (
  <div className="db-tabs-wrapper ">
    <article className=" db-order-activity js-page-tab-content js-page-tab-activity">
      <DetailHeader img={img} price={price} body={body}>
        <DetailFooterItem
          title="Tutor"
          link="/olorunfemia/"
          link_text="Olorunfemi"
        />
        <DetailFooterItem
          title="Subject"
          link="/ng/olorunfemia/an-experienced-and-amiable-ielts-instructor-youll-be-glad-you-hired/"
          link_text="Ieltx"
        />
        <DetailFooterItem link_text="Feb. 27, 2017" />
        <DetailFooterItem link_text="Booking:#HNTQO5KMBCN4" />
      </DetailHeader>

      <BookingSummaryTable
        amount="20000"
        total="20000"
        paid="true"
        lesson_info={
          "₦3000.00 x 1 stud<span className='hidden-xs' /> x 8.00 h<span className='hidden-xs'>ou</span>rs"
        }
      />
    </article>
  </div>
);
const BookingSummary = () => (
  <section
    className="db-content db-content-order-detail"
    data-user-type="buyer"
    data-order-status="completed"
    data-order-seller="pro_ebookcovers"
  >
    <BookingSummaryDetail />

    <div id="booking-container" className="panel row-space-top-4">
      <BookingStatus message="Olorunfemi has been notified
    about your booking and would contact you shortly.
    This booking is expected to commence on Sunday, Feb. 26 and end on
    Thursday, March 2." />
      <hr />

      <div id="booking-instruction-and-status" className="panel-body">
        <div className="row message-to-tutor">
          <div className="col-xs-1">
            <div className="text-center">
              <img
                alt="CHUKWUEMEKA"
                className="media-object img-circle"
                height={40}
                src="http://res.cloudinary.com/tuteria/image/upload/c_fill,f_auto,h_40,w_40/placeholder-white.jpg"
                width={40}
              />
            </div>
          </div>
          <div className="col-xs-9 col-xs-offset-1 margin-bottom-5 col-sm-10 col-sm-offset-0">
            <h4 className="font-head blue-font">Instructions for Olorunfemi</h4>
            <div>ykc round about, Rivers</div>
          </div>
          <div className="col-xs-12 col-sm-11 col-sm-offset-1">
            <p id="the_message" className="col-xs-12 well bg-info">
              No extra message from client.
            </p>
          </div>
        </div>

        <div id="tutor-section" className="col-xs-12 col-sm-offset-1 col-sm-11">
          <article className=" db-order-activity js-page-tab-content js-page-tab-activity row">
            <div className="order-gig-details">
              <div className="order-gig-detail">
                <table className="table">
                  <thead>
                    <tr>
                      <td>SESSIONS</td>
                      <td className>TIME</td>
                      <td className="amount text-center">STATUS</td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="truncated">
                        <span className="visible-xs">Sun, Feb. 26</span>
                        <span className="hidden-xs">Sunday, February 26</span>
                      </td>
                      <td className> 10am - 12pm </td>
                      <td className="amount">
                        <span className="label label-success">Completed</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="truncated">
                        <span className="visible-xs">Mon, Feb. 27</span>
                        <span className="hidden-xs">Monday, February 27</span>
                      </td>
                      <td className> 5pm - 7pm </td>
                      <td className="amount">
                        <span className="label label-success">Completed</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="truncated">
                        <span className="visible-xs">Wed, March 1</span>
                        <span className="hidden-xs">Wednesday, March 1</span>
                      </td>
                      <td className> 5pm - 7pm </td>
                      <td className="amount">
                        <span className="label label-default">Not Started</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="truncated">
                        <span className="visible-xs">Thu, March 2</span>
                        <span className="hidden-xs">Thursday, March 2</span>
                      </td>
                      <td className> 5pm - 7pm </td>
                      <td className="amount">
                        <span className="label label-default">Not Started</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </article>
        </div>
      </div>
      <div className="hh" />
    </div>
  </section>
);

const tabs = [
  {
    id: "home",
    text: "Booking",
    mobile: "Summary",
    component: BookingSummary
  },
  {
    id: "resolution",
    text: "Resolution",
    mobile: "Center",
    component: Resolution,
    params: {
      first_column: "Booking: #HNTQO5KMBCN4",
      second_column: "Booked on Feb 27, 2017",
      third_column: "Tutor: Olorunfemi",
      children: (
        <div>
          <div className="panel" id="default-section">
            <div className="panel-body">
              <div id="available">
                <h4>Need to make some changes?</h4>
                <p>
                  If you need to cancel one or more lessons, you can do so below
                  provided you have informed your tutor and{" "}
                  <span className="font-head">
                    you cancel at least 6 hours ahead
                  </span>{" "}
                  of your next lesson according to the tutor's{" "}
                  <a href="/cancellation/" target="/bu">
                    Flexible Cancellation Policy.
                  </a>{" "}
                  Simply select the lessons you wish to cancel and click
                  "Cancel". Call{" "}
                  <span className="font-head"> 090 945 26878</span> if you need
                  any help.
                </p>
                <p>
                  <em>
                    Please note that you will be charged a cancellation fee if
                    you cancel late or cancel the entire booking.
                  </em>
                </p>
                <div className="db-filters row  row-space-2 row-space-top-4">
                  <div className="filter-select col-sm-12">
                    <a
                      id="cancel-btn"
                      href="no-script-url"
                      className="btn btn-default"
                      disabled
                    >
                      Cancel
                    </a>
                  </div>
                </div>
                <div className="cancel_table">
                  <div className="table-responsive">
                    <table id="booking-table" className="table">
                      <thead>
                        <tr>
                          <td>
                            <label
                              className="fake-check-grey"
                              data-filter="cbx"
                            >
                              <input id="check-all-box" type="checkbox" />
                              <span className="chk-img" />
                            </label>
                          </td>
                          <td>Session</td>
                          <td>Time</td>
                          <td className="amount">Amount.</td>
                        </tr>
                      </thead>
                      <tbody />
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="panel hide" id="cancel-section-box">
            <div className="panel-body">
              <div className="col-xs-12">
                <h3>Please confirm cancellation</h3>
                <ul className="list-inline">
                  <li>
                    Policy:{" "}
                    <a target="/bu" href="/cancellation/">
                      Flexible
                    </a>
                  </li>
                  <li id>Status: Unmet</li>
                  <li>Notice Required: 6hrs</li>
                  <li>
                    Lessons: <span className="no-of-lessons" />
                  </li>
                </ul>
                <div className="col-sm-8 col-xs-12">
                  <div className="row">
                    <table className="table refund-table">
                      <thead className="table-head-color">
                        <tr>
                          <td>Refund Details</td>
                          <td className="amount">Amount</td>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className>
                            Total price for <span className="no-of-lessons" />{" "}
                            lesson<span id="pluralize" />
                          </td>
                          <td className="amount" id="lesson_total" />
                        </tr>
                        <tr>
                          <td className>
                            Cancellation Penalty <span id="policy-percent" />
                          </td>
                          <td className="amount" id="cancellation_fee" />
                        </tr>
                        <tr>
                          <td className="font-head">Refund Amount</td>
                          <td className="amount font-head">
                            <strong className="refund_fee" />
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <h4>Reason for cancellation?</h4>
                    <div className="form-group">
                      <select
                        className="form-control"
                        id="id_cancellation_reason"
                        name="cancellation_reason"
                      >
                        <option value selected="selected">
                          Select Reason
                        </option>
                        <option value="change_location">
                          Changing Location
                        </option>
                        <option value="no_need_for_lesson">
                          Don't need lesson anymore
                        </option>
                        <option value="dislike_tutor">
                          Didn't like the tutor
                        </option>
                        <option value="family_inconvenience">
                          Family Inconvenience (e.g Illness)
                        </option>
                        <option value="tutor_no_showing_up">
                          Tutor didn't show up
                        </option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="col-xs-12">
                  <div className="row">
                    <p className="text-warning">
                      All selected lessons will be marked as cancelled and{" "}
                      <span className="refund_fee" /> will be refunded to your
                      wallet which you can withdraw or use to hire other tutors
                    </p>
                    <div className="row">
                      <div className="col-xs-6 col-sm-4">
                        <button
                          id="dont-cancel-btn"
                          className="btn btn-danger btn-block"
                        >
                          Don't Cancel
                        </button>
                      </div>
                      <div className="col-sm-4 col-sm-offset-4 col-xs-6 col-xs-offset-0">
                        <button
                          id="submit-sessions-for-cancellation"
                          data-loading-text="Cancelling..."
                          className="btn btn-primary btn-block"
                        >
                          Confirm
                          <span className="hidden-xs">Cancellation</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }
  }
];
const UserBooking = () => (
  <div>
    <div className="main-block">
      <div className="container">
        <div className="row row-space-top-4">
          <div id="invite-center" className="col-xs-12 visible-xs  well">
            <div>
              <h4 className="pull-left text-success">
                <i className="glyphicon glypicon-ok" /> Booking Completed
              </h4>

              <a
                href="/users/transactions/revenue"
                className="btn btn-primary pull-right"
              >
                Earnings
              </a>
            </div>
          </div>

          <div className="col-sm-8 col-xs-12">
            {/*TODO: Need to switch to react-tabs?*/}

            <Tabs tabs={tabs} />
          </div>
          <BookingSummaryRightBar title="How it works">
            <ListItem no={1}>
              Tutor has been sent details of this lesson, along with your phone
              number and vicinity.Name We don't tell tutors your exact home
              address.
            </ListItem>
            <ListItem no={2}>
              After teaching, tutor will submit each lesson which changes the
              status from
              <span
                className="label label-default"
                style={{ fontWeight: "normal" }}
              >
                Not Started
              </span>
              to
              <span
                className="label label-primary"
                style={{ fontWeight: "normal" }}
              >
                Delivered
              </span>
              You'll be able to confirm lessons or raise complaints if any entry
              is inaccurate.
            </ListItem>
            <ListItem no={3}>
              Once all lessons are submitted, we'll notify you via SMS to
              confirm lessons and authorize payments in 24 hours.
            </ListItem>
            <ListItem no={4}>
              When you confirm lesson or 1 day after tutor's submission, funds
              will be paid to tutor. If you raise a complaint, we'll hold off
              payment.
            </ListItem>
            <hr className="hr-styled" />
            <div>
              <div style={{ display: "inline-block", paddingRight: "5px" }}>
                <img
                  alt=""
                  src="https://tuteria.com/static/img/cards/gfg.png"
                  className="img-responsive center-block gfg-icon"
                />
              </div>
              <div style={{ display: "inline-block" }}>
                <span
                  style={{
                    display: "block",
                    textAlign: "left",
                    fontSize: "14px",
                    lineHeight: " 1",
                    marginBottom: "2px"
                  }}
                  className="font-head blue-font"
                >
                  100% Satisfaction Guaranteed
                </span>
                <span className="call-us font-head">
                  Helpline: 090 945 26878
                </span>
              </div>
            </div>
          </BookingSummaryRightBar>

          <div id="standards" className="panel-body col-xs-12" />
          <hr />
        </div>
      </div>
    </div>
    <Invite />
  </div>
);

export default UserBooking;
