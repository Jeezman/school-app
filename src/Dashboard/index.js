//@ flow
import React from "react";
import QuickLinks from "./components/QuickLinks";
import Container from "./Sidebar";
import ProgressBar from "./components/ProgressBar";
import Notification from "./components/Notification";
import Reputation from "./components/Reputation";
import { GraphqlComponent } from "../utils";
import "./dashboard.css";
import MyQuery from "./query";

const Dashboard = ({ user: { notifications, reputations, ...profile } }) => {
  return (
    <Container profile={profile}>
      <ProgressBar completed={profile.completed} />
      <QuickLinks is_verified={profile.is_verified} />
      <Notification {...{ notifications }} />
      <Reputation {...{ reputations, points: profile.reputation_points }} />
    </Container>
  );
};

export default GraphqlComponent(Dashboard, MyQuery);
