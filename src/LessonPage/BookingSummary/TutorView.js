import React from "react";
import BookingSummary from "./BookingSummary";
import { Tabs } from "../../utils";
import { Resolution, BookingSummaryRightBar, ListItem, Invite } from "./shared";

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
      first_column: "Booking: #LBCTIEHOPDIS",
      second_column: `Booked on Feb 27, 2017`,
      third_column: "Client: Yinka",
      children: (
        <div className="panel">
          <div className="panel-body">
            <h4>This booking is marked as Scheduled</h4>
          </div>
        </div>
      )
    }
  }
];
const BookingSinglePage = () => (
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
            {/* TODO: Need to switch to react-tabs?*/}
            <Tabs tabs={tabs} />
          </div>
          <BookingSummaryRightBar title="Read me first!">
            <ListItem no={1}>
              Client has paid for this lesson so you don't need to request any
              form of payment. Please call client immediately to plan the
              lesson.
            </ListItem>
            <ListItem no={2}>
              After each lesson, you <span class="font-head">must</span> return
              here to submit the lesson so that we can know that it has held,
              you'll see a 'Submit' button when lesson ends. This helps to
              process payments.
            </ListItem>
            <ListItem no={3}>
              Once all lessons are submitted, we will notify your client and
              allow 3 days for them to confirm the lessons or raise a complaint.
            </ListItem>
            <ListItem no={4}>
              Payments will be available to you immediately after client
              confirms lesson or after the 24 hours elapse. If there's a
              complaint, we'll hold off payment till it's resolved.
            </ListItem>
          </BookingSummaryRightBar>

          <div id="standards" className="panel-body col-xs-12" />
          <hr />
        </div>
      </div>
    </div>

    <Invite />
  </div>
);
// const Header = () =>
//   <div id="action-bar" className="hidden-xs mp-box action-bar-gig affix-top">
//     <div className="container">
//       <div className="row">
//         <div className="col-md-8">
//           <div className="row">

//             <div className="action-steps cf">

//               <div className="step-end">
//                 <a
//                   href="/users/transactions/revenue"
//                   className="btn btn-primary btn-default"
//                 >

//                   Earnings
//                 </a>
//               </div>

//               <div className="step ca-green">
//                 <h5 className="with-check">&nbsp;</h5>

//                 <p>
//                   Booking<br />Started
//                 </p>
//               </div>

//               <div className="step ca-green">
//                 <h5 className="with-check">&nbsp;</h5>

//                 <p>
//                   Booking<br />Submitted
//                 </p>
//               </div>

//               <div className="step ca-green">
//                 <h5 className="with-check">&nbsp;</h5>

//                 <p>
//                   Booking<br />Reviewed
//                 </p>
//               </div>

//               <div className="step ca-green">
//                 <h5 className="with-check">&nbsp;</h5>

//                 <p>
//                   Booking<br />Completed
//                 </p>
//               </div>

//             </div>

//           </div>
//         </div>
//       </div>
//     </div>
//   </div>;

export default BookingSinglePage;
