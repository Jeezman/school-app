import styled, { css } from "styled-components";
import { Col as Column } from "react-grid-system";
import globals from "../../siteStyle";
export const xs = globals.xs;
const shared = css`
  display: flex;
  flex-wrap: wrap;
  @media (min-width: ${globals.xs}px) {
    padding-left: 0 !important;
    padding-right: 0 !important;
  }
  @media (max-width: ${globals.xs}px) {
    flex-direction: column;
  }
`;

const SpecialColumn = styled(Column)`
  ${shared} & > div {
    @media (min-width: ${globals.xs}px) {
      flex-grow: 1;
      width: 50%;
      border: 15px solid transparent;
      position: relative;
      &::before {
        content: "";
        border: 1px solid transparent;
        display: block;
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
      }
      & div.error {
        display: none;
      }
    }
  }
  & + div.c-errmessage {
    margin-top: -30px;
    margin-bottom: 20px;
    @media (max-width: ${globals.xs}px) {
      display: none;
    }
  }
`;
export const StateAddressVicinityContainer = styled(Column)`
  margin-bottom: 10px;
  ${shared} @media (max-width: ${globals.xs}px) {
    & .select,
    input {
      margin-bottom: 10px;
    }
  }
  & > div {
    @media (min-width: ${globals.xs}px) {
      // flex-grow: 1;
      width: 33%;
      border: 15px solid transparent;
      position: relative;
      &::before {
        content: "";
        border: 1px solid transparent;
        display: block;
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
      }
      & div.error {
        display: none;
      }
    }
  }
`;
export const Special3Column = styled(Column)`
  & .db-container {
    display: flex;
    & .select {
      position: relative;
      border-right: 16px solid #fbf9fb;
      &:last-child {
        border-right: 0px;
      }
      &::before {
        content: "";
        border: 1px solid #fbf9fb;
        display: block;
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
      }
    }
    & + .error {
      margin-top: 10px;
    }
  }
`;
export default SpecialColumn;
