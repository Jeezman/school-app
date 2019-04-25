import React from "react";
import { Link } from "react-router-dom";

const FilterItems = ({ list_role, role, tabindex, url, msg }) => (
  <li role="presentation">
    <a role="menuitem" tabindex="-1" href={url}>
      {msg}
    </a>
  </li>
);

const filterList = [
  {
    msg: "All",
    url: "/subjects/?filter_by=all"
  },
  {
    msg: "Active",
    url: "/subjects/?filter_by=active"
  },
  {
    msg: "Pending Approval",
    url: "/subjects/?filter_by=pending"
  },
  {
    msg: "Modification",
    url: "/subjects/?filter_by=modification"
  },
  {
    msg: "Denied",
    url: "/subjects/?filter_by=denied"
  }
];
const FilterSubject = () => (
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
            <FilterItems key={index} msg={filter.msg} url={filter.url} />
          ))}
        </ul>
      </div>

      <Link to="/subjects/new" className="btn btn-primary pull-right">
        Add new subject
      </Link>
    </div>
  </div>
);
const SubjectItem = ({ url, no, long_name, short_name }) => (
  <span href={url}>
    {no}
    <small className="hidden-xs">{long_name}</small>
    <small className="visible-xs">{short_name}</small>
  </span>
);

const SubjectOverview = ({ details }) => (
  <div className="db-summary db-order-stats">
    {details.map((subject, index) => (
      <SubjectItem
        key={index}
        url={subject.url}
        long_name={subject.long_name}
        short_name={subject.short_name}
        no={subject.no}
      />
    ))}
  </div>
);

const Dropdown = () => (
  <div className="dropdown">
    <button
      className="btn btn-default dropdown-toggle"
      type="button"
      id="dropdownMenu1"
      data-toggle="dropdown"
      aria-expanded="true"
    >
      <span className="caret" />Actions{" "}
    </button>
    <ul
      className="dropdown-menu dropdown-menu-right subject_options"
      role="menu"
      aria-labelledby="dropdownMenu1"
    >
      <li role="presentation">
        <a role="menuitem" tabindex="-1" href="/ng/biolao/None/">
          Preview{" "}
        </a>
      </li>

      <li role="presentation">
        <a
          role="menuitem"
          tabindex="-1"
          onclick="DeleteTS('general-mathematics','General Mathematics')"
          href="no-script-url"
        >
          Delete
        </a>
      </li>
    </ul>
  </div>
);

const SubjectRow = ({ name, url, description, status, color }) => {
  var result = "label-danger";
  if (status === "Active") {
    result = "label-success";
  }
  if (status === "Needs Edit") {
    result = "label-warning";
  }
  return (
    <tr>
      <td className="db-title">
        <span>{name}</span>
      </td>
      <td>
        {status !== "Denied" ? (
          <Link to={`/subjects/${url}/edit`}>{description}</Link>
        ) : null}
      </td>
      <td style={{ verticalAlign: "middle" }}>
        <span className={`label ${result}`}>{status}</span>
      </td>
      <td className="status" style={{ verticalAlign: "middle" }}>
        <Dropdown />
      </td>
    </tr>
  );
};

const ManageSubjectPanel = ({ subject_details = [], subject_list = [] }) => (
  <div className="panel panel-default row">
    <div className="panel-heading">
      <h4>Manage Subjects</h4>
    </div>
    <div className="panel-body mp-box">
      <SubjectOverview details={subject_details} />
      <FilterSubject />

      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr>
              <td> Subject</td>
              <td> Description</td>
              <td> Status </td>
              <td />
            </tr>
          </thead>

          <tbody>
            {subject_list.map((subject, index) => (
              <SubjectRow
                key={`sub${index}`}
                name={subject.name}
                description={subject.description}
                status={subject.status}
                url={subject.url}
              />
            ))}
          </tbody>
        </table>
        <div className="row">
          <div className="pagination-container col-xs-12 margin-top-15">
            <nav className="pagination-margin pull-left">
              <ul className="pagination pagination-theme  no-margin ">
                <li className="disabled">
                  <a title="First Page" href="?page=1">
                    ←
                  </a>
                </li>

                <li className="active">
                  <a title="Current Page" href="/bu">
                    1
                  </a>
                </li>

                <li className="disabled">
                  <a title="Last Page" href="?page=1">
                    →
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default ManageSubjectPanel;
