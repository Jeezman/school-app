import React from "react";
import styled from "styled-components";
import globals from "../../siteStyle";
import { Tab } from "./Tabs";
import Logo from "./icons/Logo";
import Icon from "../simple/Icon";
const { siteText } = globals;
const xs = 768;
const Navigation = styled.div`
  border-bottom: 2px solid #e6e8eb;
  display: flex;
  position: relative;
  background-color: ${props => (props.inverse ? "#0064E7" : "")};
  height: 60px;
  ${siteText} & svg {
    display: block;
    margin: auto;
    height: 30px;
    margin-left: ${props => (props.inverse ? "14px" : "auto")};
    margin-right: ${props => (props.inverse ? "14px" : "auto")};
    @media (max-width: ${xs}px) {
      margin-left: auto;
      margin-right: auto;
    }
  }
  & h3 {
    color: ${props => (props.inverse ? "#fff" : "#337AB7")};
    padding-left: 32px;
    border-left: 2px solid #629fee;
    paddint-top: 0;
    margin-top: 0;
    margin-bottom: 0;
    padding-top: 20px;
    padding-bottom: 10px;
    font-size: 19px;
    @media (max-width: ${xs}px) {
      display: none;
    }
  }
`;
const SaveIndicatorStyle = styled.div`
  display: flex;
  position: absolute;
  right: 0;
  padding-right: 42px;
  margin-top: 12px;
  & p {
    margin-bottom: 0;
    padding-top: 7px;
    color: ${props => (props.saved ? "#C9C9C9" : "")};
  }
  @media (max-width: ${xs}px) {
    display: none;
  }
`;

const SaveIndicator = ({ text = "Saved 30 seconds ago", saved = true }) => (
  <SaveIndicatorStyle saved={saved}>
    <Icon name="refresh" {...{ stroke: saved ? "#C9C9C9" : undefined }} />
    <p>{text}</p>
  </SaveIndicatorStyle>
);
export const NavBar = ({ inverse = false, heading }) => (
  <Navigation inverse={inverse}>
    <Logo textColor={inverse ? "#fff" : "#337AB7"} />
    {heading ? <h3>{heading}</h3> : null}
    <SaveIndicator />
  </Navigation>
);

export default props => <Tab component={Navigation} {...props} />;
