import React from "react";
import styled from "styled-components";
import { ButtonWithIcon } from "./Button";

const ImageNotice = styled.div`
  background-color: ${props =>
    props.bgColor ? props.bgColor : "rgba(54, 179, 126, 0.1)"};
  padding: ${props => (props.small ? "21px" : "21px 75px 5px 31px")};
  border-left: 4px solid
    ${props => (props.borderColor ? props.borderColor : "#36b37e")};
  display: flex;
  flex-direction: ${props => (props.small ? "row" : "column")};
  align-items: ${props => (props.small ? "center" : null)};
  & > h2 {
    font-size: 20px;
  }
  & ul {
    padding-left: 16px;
    color: #484848;
    font-size: 13px;
    line-height: 24px;
    & li:before {
      content: "";
      // padding-left: 0px;
    }
  }
  & p {
    & a {
      color: #0064e6;
      &:hover {
        text-decoration: none;
        cursor: pointer;
        color: #0064e6;
      }
    }
  }
`;

const NoticeWrapper = styled(ImageNotice)`
  margin-top: 30px;
  flex-direction: column;
  & h2 {
    font-size: 20px;
    margin-top: 0;
  }
  & span {
    margin-top: 0;
    padding: 0 20px;
  }
  @media (min-width: 769px) {
    flex-direction: row;
    padding: ${props => (props.small ? "21px 0" : "21px 75px 5px 31px")};
  }
  & .ind-items {
    width: 90%;
    display: flex;
    & p {
      font-size: 14px;
      line-height: 19px;
    }
    & h2 {
      font-size: 15px;
      margin-bottom: 3px;
    }
    @media (min-width: 769px) {
      flex-grow: 1;
      &:last-child {
        width: initial;
        margin-right: 21px;
        margin-left: 12px;
      }
      &:first-child {
        width: 50%;
        margin-left: 21px;
        margin-right: 12.5px;
      }
    }

    &:last-child {
      display: flex;
      font-size: 15px;
      & label {
        font-size: 20px;
        font-family: "Circular Medium", "Helvetica Neue", Helvetica, Arial,
          sans-serif;
        font-weight: 300;
        color: #484848;
        line-height: 1.1;
      }
    }
  }
`;
export const NoticeAction = ({
  onClick,
  condition = false,
  conditionNode,
  children,
  buttonText,
  ...rest
}) => (
  <NoticeWrapper small {...rest}>
    <div className="ind-items">{children}</div>
    {condition ? (
      conditionNode
    ) : (
      <ButtonWithIcon
        onClick={onClick}
        name="plus"
        style={{ border: "1px solid #C9CACD" }}
        className="ind-items"
      >
        {buttonText}
      </ButtonWithIcon>
    )}
  </NoticeWrapper>
);

export default ImageNotice;
