import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Icon = ({ type }) => <i className={`fa fa-${type}`} />;
const Li = styled.li`
  & > .row {
    margin-bottom: 10px;
  }
`;
const NotificationItem = ({ url, text }) => (
  <Li>
    <div className="row">
      <div className="col-sm-12 col-xs-12">
        <Link to={url}>
          {text}
          &nbsp;<Icon type="caret-right" />
        </Link>
      </div>
    </div>
  </Li>
);

const Notification = ({ notifications }) => (
  <div className="panel panel-default row-space-4">
    <h4 className="panel-heading">Notifications </h4>

    <div className="panel-body">
      <ul className="list-unstyled  hdb-light-bg">
        {notifications.map((notification, index) => (
          <NotificationItem key={index} {...notification} />
        ))}
      </ul>
    </div>
  </div>
);
export default Notification;
