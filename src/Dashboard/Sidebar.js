import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ProfilePic from "./components/ProfilePic";
import DashboardContainer from "./components/Container";

const Div = styled.div`
  margin-bottom: 25px;
  @media (max-width: 1024px) {
    margin-top: 0;
    display: block;
  }
  @media (min-width: 769px) {
    border-color: #ddd;
    background-color: #fff;
    border: 1px solid transparent;
    border-radius: 4px;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);
  }
`;
const Sidebar = ({ isMobile = false, profile, children }) => (
  <div className={isMobile ? "col-xs-12" : "hidden-xs col-sm-3"}>
    <div
      className={
        isMobile
          ? "media row-space-4 visible-xs"
          : "panel panel-default row-space-4"
      }
    >
      <ProfilePic isMobile={isMobile} profile={profile} />
      <div className={isMobile ? "media-body" : "panel-body"}>
        <h2 className="text-center">{profile.username}</h2>
        <ul className="list-unstyled text-center">
          <li>
            <a href="/biolao/">View profile</a>
          </li>
          <li>
            <Link to="/users/edit/"> Edit profile </Link>
          </li>
        </ul>
      </div>
    </div>
    {children}
  </div>
);
export default ({ children, profile }) => {
  let sidebar_children = children.slice(0, 2);
  const children2 = React.Children.map(sidebar_children, child =>
    React.cloneElement(child, { isMobile: true })
  );
  const right_children = [children2[0]].concat(
    children.slice(2, children.length),
    children2[1]
  );

  return (
    <DashboardContainer top={25} bottom={25}>
      <Sidebar isMobile profile={profile} />
      <Sidebar profile={profile}>{sidebar_children}</Sidebar>

      <div className="col-sm-9 col-xs-12">{right_children}</div>
    </DashboardContainer>
  );
};
