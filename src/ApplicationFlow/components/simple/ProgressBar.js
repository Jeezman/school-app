import React from "react";
import styled from "styled-components";

export const ProgressBar = styled.div`
  height: ${props => props.height || 15}px;
  background-color: #dce0e0;
  width: ${props => props.width || 50}%;
  & > div {
    background-color: ${props => props.bgColor};
    width: ${props => (props.percentage ? props.percentage : 0)}%;
    height: inherit;
  }
`;
const ProgressContainer = styled.div`
  width: 60%;
  & ${ProgressBar} {
    margin-top: 6px;
  }
`;

export default ({ percentage, bgColor = "#36B37E" }) => (
  <ProgressContainer>
    <span>{percentage}% Complete</span>
    <ProgressBar bgColor={bgColor} percentage={percentage}>
      <div />
    </ProgressBar>
  </ProgressContainer>
);
