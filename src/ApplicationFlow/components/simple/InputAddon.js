import React from "react";
import Flag from "./CountryFlag";
import styled from "styled-components";
import { Col as Column } from "react-grid-system";
import {
  SelectHoverFocus,
  StyledWrapper,
  StyledButton,
  borderColor
} from "./Select";

const InputAddonStyle = styled.div`
  display: flex;
  border: ${props => borderColor(props, "raw")};
  ${SelectHoverFocus} &:hover {
    // border: none;
  }
  & ${Flag} {
    border: none;
    &:hover {
      cursor: pointer;
    }
  }
  & ${StyledWrapper} {
    border: none;
    & ${StyledButton} {
      border: none;
      border-left: none;
      padding-bottom: 13px;
      &:hover,
      &:focus {
        border-left: none;
      }
    }
  }
`;
// export const InputAddon = ({ children }) =>
//   <Row>
//     <Column md={12}>
//       <InputAddonStyle>
//         {children}
//       </InputAddonStyle>
//     </Column>
//   </Row>;
export const InputAddon = ({ children, noColumn = false, ...rest }) => {
  const render = <InputAddonStyle {...rest}>{children}</InputAddonStyle>;
  return noColumn ? render : <Column md={12}> {render}</Column>;
};
