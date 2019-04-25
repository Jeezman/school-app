import React from "react";
import Icons from "./Icons";
import styled, { css } from "styled-components";
import "./ionicons.css";
import "../../../fonts/font-awesome.css";

const Icon = ({ name, ...rest }) => {
  const CC = Icons[name];
  if (CC) {
    return <CC {...rest} />;
  }
  const ionicons = {
    "check-circle": "ion-checkmark-circled",
    plus: "ion-plus",
    "cloud-upload": "ion-ios-cloud-upload-outline fa-1-1"
  };
  const ionicClass = ionicons[name];
  if (ionicClass) {
    return <i className={`${ionicClass}`} {...rest} />;
  }
  return <i className={`fa fa-${name}`} {...rest} />;
};
const StackedIcons = styled.div`
  display: inline-block;
  color: ${props => props.color};
  & .fa-stack-1x {
    font-size: 1.4em;
  }
  & .calendar-text {
    font-size: ${props => (props.fontSize ? props.fontSize : 12)}px;
    color: white;
  }
  ${props => props.extraStyle};
`;
export const NumberIcon = ({
  no,
  icon = "",
  color,
  active = false,
  fontStyle = "circle",
  fontSize,
  styling = "",
  ...rest
}) => {
  return (
    <StackedIcons
      extraStyle={css`
        ${styling};
      `}
      fontSize={fontSize}
      className="icon-s"
      color={active ? "#0064e6" : "inherit"}
      active={active}
      {...rest}
    >
      <span className="fa-stack">
        <Icon name={`${fontStyle} fa-stack-1x`} />
        {icon ? (
          <Icon name={`${icon} fa-stack-1x calendar-text`} />
        ) : (
          <strong className="fa-stack-1x calendar-text">{no}</strong>
        )}
      </span>
    </StackedIcons>
  );
};
export default Icon;
