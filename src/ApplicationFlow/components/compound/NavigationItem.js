import React from "react";
import styled, { css } from "styled-components";
import globals from "../../siteStyle";
import Icon from "../simple/Icon";

import { NavLink } from "react-router-dom";
const { siteText } = globals;
const xs = 1024;
const TabItem = styled.div`
  ${siteText} font-size: 18px;
  padding-bottom: 8px;
  border-bottom: ${props => (props.active ? "2px solid #0064E6" : "none")};
  width: calc(${props => 100 / props.width}%);
  color: ${props => (props.active ? "#0064E6" : "inherit")};
  text-align: center;
  &:hover {
    cursor: pointer;
  }
  @media (max-width: ${xs}px) {
    width: 100%;
  }
`;

const sharedStyle = css`
  display: block;
  color: ${props => (props.active ? "#0064E6" : "inherit")};
  padding-top: 15px;
  padding-bottom: 8px;
  text-decoration: none;
  &:hover,
  &:visited,
  &:focus,
  &:visited {
    text-decoration: none;
    color: inherit;
  }
`;
const StyledLink = styled(NavLink)`
  ${sharedStyle};
`;
const InactiveLink = styled.span`
  ${sharedStyle};
`;

const NavigationItem = styled(TabItem)`
  font-weight: ${props => (props.active ? "bold" : 500)};
  color: ${props => (props.active ? "#1B2733" : "#8A8A8A")};
  background-color: ${props => (props.active ? "#F0F0F0" : "inherit")};
  padding-bottom: 0;
  border-bottom: ${props => (props.completed ? "3px solid #36B37E" : "none")};
  border-right: 1px solid #e6e8eb;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    cursor: ${props =>
      props.active || props.completed ? "pointer" : "default"};
  }
  & ${StyledLink} {
    cursor: ${props =>
      props.active || props.completed ? "pointer" : "default"};
  }
  @media (max-width: ${xs}px) {
    display: ${props => (props.active ? "" : "none")};
    font-size: 1em;
    &:hover,
    & ${StyledLink} {
      cursor: default;
    }
  }
  position: relative;
  & i {
    display: none;
    @media (max-width: ${xs}px) {
      position: absolute;
      left: 0;
      font-size: 1.5em;
      display: ${props => (props.displayBackButton ? "block" : "none")};
      margin-left: 20px;
      margin-top: 1px;
      margin-bottom: auto;
      cursor: pointer;
      color: #b2b2b2;
    }
  }
`;

export default ({
  to,
  children,
  onBackClick,
  displayBackButton = false,
  completed = false,
  ...rest
}) => {
  const canEdit = completed || rest.active;
  const xs = window.matchMedia("(max-width: 1024px)");
  return (
    <NavigationItem
      completed={completed}
      displayBackButton={displayBackButton}
      {...rest}
    >
      <Icon onClick={onBackClick} name="arrow-left" />
      {xs.matches ? (
        <InactiveLink>{children}</InactiveLink>
      ) : canEdit ? (
        <StyledLink to={to}>{children}</StyledLink>
      ) : (
        <InactiveLink>{children}</InactiveLink>
      )}
    </NavigationItem>
  );
};
