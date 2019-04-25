import styled, { css } from "styled-components";
// import {glamor}
import globals from "../../siteStyle";
const { placeholderColor, formComponentStyle, formTextPaddingLeft } = globals;
function getBorder(props) {
  if (props.error) {
    return "2px solid #E9411B";
  }
  return "1px solid #C9CACD";
}
export const styling = css`
  ${formComponentStyle} border: ${props => getBorder(props)};
  width: ${props => (props.width ? props.width : 100)}%;
  &::placeholder {
    color: ${placeholderColor};
  }
  &:disabled,
  &:hover {
    background-color: #f6f6f6;
    border: 1px solid #cacaca;
    cursor: pointer;
  }
  &:focus {
    border: 2px solid #629fee;
  }
  & + i {
    margin-bottom: 16px;
    margin-right: 9px;
    bottom: 0;
    margin-top: 17px;
  }

  &.add-on__input {
    border: 0;
    border-radius: 0;
    border-left: 1px solid #dce0e0;
  }
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  -moz-appearance: textfield;
`;
const Input = styled.input`
  ${styling};
`;
export const CompactInput = styled(Input)`
  & ~ i {
    margin-top: 13px;
  }
  padding: 9px ${formTextPaddingLeft}px;
`;
export default Input;
