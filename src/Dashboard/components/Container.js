import React from "react";
import styled from "styled-components";
const Div = styled.div`
  margin-top: ${props => props.top + "px"};
  margin-bottom: ${props => props.bottom + "px"};
`;
export default ({ children, top = 0, bottom = 0 }) => (
  <Div top={top} bottom={bottom} className="container">
    <div className="row">{children}</div>
  </Div>
);
