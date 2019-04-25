import styled from "styled-components";
import globals from "../../../siteStyle";
const { xs } = globals;
const Divider = styled.div`
  display: block;
  text-align: center;
  overflow: hidden;
  white-space: nowrap;

  & > p {
    position: relative;
    display: inline-block;
    font-size: 17px;
    &:before,
    &:after {
      content: "";
      position: absolute;
      top: 50%;
      width: 9999px;
      height: 1px;
      background: #e6e8eb;
    }
    &:before {
      right: 100%;
      margin-right: 15px;
    }
    &:after {
      left: 100%;
      margin-left: 15px;
    }
    @media (max-width: ${xs}px) {
      font-size: 16px;
    }
  }
`;
export default Divider;
