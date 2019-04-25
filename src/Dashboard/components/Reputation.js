import React from "react";
const ReputationItem = ({ text, points, url, isLast = false }) => (
  <li className="default airplane removeable  alert0 ">
    <div className="row row-space-2 row-table ">
      <div className="col-sm-10  col-xs-8">{text}</div>
      <div className="col-sm-2 col-xs-4">
        <a href={url} className="btn btn-block btn-primary">
          +{points} <span className="hidden-xs">points</span>
        </a>
      </div>
    </div>
    {isLast ? null : <hr className="section-divider" />}
  </li>
);
export default ({ reputations, points = 0 }) => (
  <div className="panel panel-default row-space-4">
    <h4 className="panel-heading clearfix">
      Reputation
      <small className="pull-right">
        <span className="badge reputation_badge">{points}</span> Points
      </small>
    </h4>
    <div className="panel-body">
      <div className="well">
        <p>
          Tuteria is a community built on trust. Your reputation point helps
          give the best clients and tutors confidence to transact with you. The
          most important actions needed to build your reputation are listed
          below.
          <a href="/help/topic/17/" target="/bub">
            Learn more
          </a>
        </p>
      </div>

      <ul className="list-unstyled  hdb-light-bg">
        {reputations.map((reputation, index) => (
          <ReputationItem
            key={index}
            isLast={index === reputations.length - 1}
            {...reputation}
          />
        ))}
      </ul>
    </div>
  </div>
);
