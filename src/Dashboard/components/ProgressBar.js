import React from "react";
import styled from "styled-components";

const ProgressBarContainer = styled.div`
  height: 20px;
  margin-bottom: 20px;
  background-color: #f5f5f5;
  border-radius: 4px;
  -webkit-box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);
  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;
function getColor(value) {
  let options = {
    warning: "#f0ad4e"
  };
  return options[value];
}
const Bar = styled.div`
  width: ${props => `${props.completed}%`};
  background-color: ${props => getColor(props.type)};
  float: left;
  height: 100%;
  font-size: 12px;
  line-height: 20px;
  color: #fff;
  text-align: center;
  box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.15);
  transition: width 0.6s ease;
`;

export default function ProgressBar({ isMobile = false, completed = 0 }) {
  return (
    <ProgressBarContainer className={isMobile ? "visible-xs" : ""}>
      <Bar
        type="warning"
        completed={completed}
        role="progressbar"
        aria-valuenow={completed}
        aria-valuemin="0"
        aria-valuemax="100"
      >{`${completed}% completed`}</Bar>
    </ProgressBarContainer>
  );
}
