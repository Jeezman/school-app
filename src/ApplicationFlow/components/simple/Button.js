import React from "react";
import styled from "styled-components";
import Icon from "./Icon";
const fontFamily = '"Circular Book", sans-serif';
const siteTextColor = "#777777";

const Button = styled.button`
  min-width: 120px;
  border: none;
  border-radius: 2px;
  font-family: ${fontFamily};
  font-weight: ${props => props.fontWeight || 500};
  line-height: 21px;
  color: ${siteTextColor};
  font-size: 16px;
  color: ${props => props.textColor || "#47525D"};
  font-size: 19px;
  line-height: 24px;
  background-color: ${props => props.bgColor || "#ffffff"};
  box-shadow: ${props => props.shadow || "none"};
  padding: 12px 18px;

  &:hover {
    cursor: pointer;
    background-color: ${props => props.hoverBgColor || "#F6F6F6"};
    border-color: ${props => props.hoverBdColor || "#F6F6F6"};
    &:disabled {
      cursor: default;
      border-color: transparent;
    }
  }
  &:active {
    background-color: ${props => props.activeBgColor || "#F2F2F2"};
    outline: none;
  }
  &:disabled {
    color: ${props => props.disabledTextColor || "#7B8994"};
    background-color: ${props => props.disabledBgColor || "#E6E8EB"};
    border-color: transparent;
  }
`;
export const DefaultButton = styled(Button)`
  border: 1px solid #c9cacd;
`;
export const PrimaryButton = styled(Button).attrs({
  bgColor: "#0064E6",
  textColor: "#ffffff",
  hoverBgColor: "#007AF6",
  hoverBdColor: "#007AF6",
  activeBgColor: "#015DD6",
  disabledBgColor: "#94BDF2",
  disabledTextColor: "#FFFFFF"
})`
  border: ${props => props.border || "2px solid #629FEE"};
  &:hover {
    border-color: ${props => props.hoverBgColor};
  }
`;
export const SuccessButton = styled(Button).attrs({
  bgColor: "#36B37E",
  textColor: "#ffffff",
  hoverBgColor: "#36C98E",
  activeBgColor: "#36C98E"
})`
  border: 1px solid #36b37e;
`;
const IconButton = styled(Button)`
  & i {
    padding-right: 10px;
    line-height: 25px;
    text-align: center;
  }
  & span {
    font-family: "Circular Book";
    padding: 12px 20px;
    margin-top: 20px;
    font-weight: normal;
  }
`;

export const DeleteButton = styled(Button).attrs({
  bgColor: "rgba(233,65,27,0.1)",
  textColor: "#E9411B"
})`
  border: 0;
`;

const Linkedin = styled(IconButton).attrs({
  bgColor: "#0077B5",
  textColor: "#ffffff",
  hoverBgColor: "#007ec2",
  activeBgColor: "#0074b3"
})`
  & i {
    border-right: 2px solid #07689b;
  }
`;
export const ButtonWithIcon = ({ children, name, iconStyle = {}, ...rest }) => (
  <IconButton {...rest}>
    {name ? <Icon name={name} style={iconStyle} /> : null}
    <span>{children}</span>
  </IconButton>
);

export const LinkedinButton = ({ children, ...rest }) => (
  <Linkedin {...rest}>
    <Icon name="lindedin" />
    <span>{children}</span>
  </Linkedin>
);

export default Button;
