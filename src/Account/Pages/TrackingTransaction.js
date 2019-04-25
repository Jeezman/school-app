import React from "react";
import Paginator from "./Paginator";
import "../../static/css/revenues.css";
const SpanOrA = ({ children, condition }) => {
  return condition ? (
    <a href={condition}>{children}</a>
  ) : (
    <span>{children}</span>
  );
};
const TableRow = ({ date, summary, amount }) => {
  const negative = amount < 0;
  return (
    <tr className="hidden-action-link">
      <td className="date hidden-xs">{date}</td>
      <td className="ellipsis-wrap">
        <div className="ellipsis">{summary}</div>
      </td>
      <td className="amount">
        <span className={`money-${negative ? "out" : "in"}`}>{`${
          negative ? "-" : ""
        }₦${Math.abs(amount)}`}</span>
      </td>
    </tr>
  );
};

class Dropdown extends React.Component {
  state = {
    isOpen: false
  };
  whenClicked = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  render() {
    return (
      <div
        className={`dropdown transac_filter ${this.state.isOpen ? "open" : ""}`}
      >
        <button
          className="btn btn-default dropdown-toggle"
          type="button"
          id="dropdownMenu1"
          data-toggle="dropdown"
          aria-expanded="true"
          onClick={this.whenClicked}
        >
          Everything
          <span className="caret" />
        </button>
        <ul
          className="dropdown-menu"
          role="menu"
          aria-labelledby="dropdownMenu1"
        >
          {this.props.links.map((link, index) => (
            <li role="presentation" key={index}>
              <a role="menuitem" tabIndex={-1} href={link.url}>
                {link.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
const SummaryDisplay = ({ value, text, link, className = "", row = false }) => {
  const textArray = text.split(" ").filter(x => x);
  return (
    <div className={`val ${className}`}>
      <SpanOrA condition={link}>
        <em>₦{value}</em>
        <br />
        {row
          ? text
          : textArray.map((x, index) => (
              <span>
                {x}
                <br />
              </span>
            ))}
      </SpanOrA>
    </div>
  );
};
const earnings = {
  title: "Revenues",
  summaryData: [
    { text: "EARNED", value: 44785, link: "" },
    { text: "LESSON BALANCE", value: 0, link: "?filter_by=used_to_hire" },
    { text: "WITHDRAWALS", value: 47235, link: "filter_by=withdrawn" },
    { text: "WALLET PAYMENTS", value: 0, link: "filter_by=used_to_hire" },
    { text: "WITHDRAWABLE FUNDS", value: 0, link: "", className: "total" }
  ],
  links: [
    { text: "Everything", url: "/users/transactions/revenue" },
    { text: "Withdrawals", url: "?filter_by=withdrawn" },
    { text: "Used to hire tutors", url: "?filter_by=used_to_hire" },
    { text: "Earned", url: "?filter_by=earned" }
  ],
  transactions: [
    {
      date: "Feb 22, 17",
      summary: "Withdrawal Completed Summary",
      amount: -28000
    },
    {
      date: "Feb 21, 17",
      summary: "Withdrawn Initiated",
      amount: -28000
    },
    {
      summary: "Earned from completed lesson",
      date: "Feb 21, 17",
      amount: 28000
    },
    {
      date: "Aug 02, 16",
      summary: "Earned from completed lesson",
      amount: 2450
    },
    {
      date: "Aug 02, 16",
      summary: "Earned from completed lesson",
      amount: 7000
    },
    {
      date: "May 16, 16",
      summary: "Withdrawal Completed Summary",
      amount: 4900
    },
    {
      date: "May 14, 16",
      summary: "Withdrawal Initiated",
      amount: 4900
    },
    {
      date: "May 14, 16",
      summary: "Widthdrawn Initiated",
      amount: 4900
    },
    {
      date: "Feb 23, 16",
      summary: "Widthdrawn Completed Summary",
      amount: -7000
    },
    {
      date: "Feb 23, 16",
      summary: "Widthdrawn Initated",
      amount: -7000
    },
    {
      date: "Dec 16, 15",
      summary: "Widthdrawn Completed Summary",
      amount: -3375
    }
  ]
};

const spents = {
  summaryData: [
    { text: "DEPOSITS & REVEUES", value: 420000, link: "", row: true },
    { text: "ACTIVE LESSONS", value: 90000, link: "", row: true },
    { text: "COMPLETED LESSONS", value: 420000, link: "", row: true },
    { text: "PAYMENT BALANCE", value: -90000, link: "" }
  ],
  links: [
    { text: "All", url: "/users/transactions/revenue" },
    { text: "In Session", url: "?filter_by=withdrawn" },
    { text: "Paid", url: "?filter_by=used_to_hire" }
  ],

  transactions: [
    {
      date: "Feb 22, 17",
      summary: "Withdrawal Completed Summary",
      amount: -28000
    },
    {
      date: "Feb 21, 17",
      summary: "Withdrawn Initiated",
      amount: -28000
    },
    {
      summary: "Earned from completed lesson",
      date: "Feb 21, 17",
      amount: 28000
    },
    {
      date: "Aug 02, 16",
      summary: "Earned from completed lesson",
      amount: 2450
    },
    {
      date: "Aug 02, 16",
      summary: "Earned from completed lesson",
      amount: 7000
    },
    {
      date: "May 16, 16",
      summary: "Withdrawal Completed Summary",
      amount: 4900
    },
    {
      date: "May 14, 16",
      summary: "Withdrawal Initiated",
      amount: 4900
    },
    {
      date: "May 14, 16",
      summary: "Widthdrawn Initiated",
      amount: 4900
    },
    {
      date: "Feb 23, 16",
      summary: "Widthdrawn Completed Summary",
      amount: -7000
    },
    {
      date: "Feb 23, 16",
      summary: "Widthdrawn Initated",
      amount: -7000
    },
    {
      date: "Dec 16, 15",
      summary: "Widthdrawn Completed Summary",
      amount: -3375
    }
  ],
  title: "Payments"
};

class TrackingTransaction extends React.Component {
  state = {
    title: "",
    transactions: [],
    summaryData: [],
    links: []
  };
  updateCurrentState = props => {
    const { match: { path } } = props;
    if (path === "/users/transactions/orders") {
      this.setState(spents);
    } else {
      this.setState(earnings);
    }
  };
  componentDidMount() {
    this.updateCurrentState(this.props);
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.title !== nextProps.title) {
      this.updateCurrentState(nextProps);
    }
  }
  render() {
    const { title, transactions, summaryData, links } = this.state;
    return (
      <div className="panel panel-default row">
        <div className="panel-heading">
          <h4>
            {title}
            {title === "Revenues" ? (
              <div className="pull-right money-expected">
                <span
                  className="hint--top hidden-xs"
                  data-hint="From Active Orders"
                >
                  UPCOMING EARNINGS:
                  <b>₦0</b>
                </span>
                <span className="hint--top visible-xs" style={{ marginTop: 5 }}>
                  BALANCE:
                  <b>₦</b>
                  <span className="font-head">0</span>
                </span>
              </div>
            ) : null}
          </h4>
        </div>
        {transactions.length > 0 ? (
          <div className="panel-body mp-box">
            <div className="db-summary cf hidden-xs">
              {summaryData.map((data, index) => (
                <SummaryDisplay key={index} {...data} />
              ))}
            </div>
            <div className="filter-select cf row-space-2">
              <label htmlFor="fake-dropdown">SHOW</label>
              <Dropdown links={links} />
            </div>
            <div className="db-main-table">
              <table>
                <thead>
                  <tr>
                    <td className="hidden-xs">DATE</td>
                    <td className="el2">
                      <span className="hidden-xs">FOR</span>
                      <div className="visible-xs">Description</div>
                    </td>
                    <td>AMOUNT</td>
                  </tr>
                </thead>
                <tbody>
                  {transactions.map((transaction, index) => (
                    <TableRow {...transaction} />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          <div className="panel-body">
            <p>You have no transactions.</p>
          </div>
        )}
        {transactions.length > 0 ? <Paginator /> : null}
      </div>
    );
  }
}
export default TrackingTransaction;
