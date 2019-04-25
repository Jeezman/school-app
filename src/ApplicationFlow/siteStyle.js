import { css } from "styled-components";
const fontFamily = '"Circular Book", sans-serif';
const placeholderColor = "#999999";
const siteTextColor = "#777777";
const formTextPaddingLeft = 13;
export const xs = 768;
const siteText = css`
  font-family: ${fontFamily};
  font-weight: 300;
  line-height: 21px;
  color: ${siteTextColor};
  font-size: 16px;
`;
const formComponentBase = css`
  ${siteText} color: #47525D;
  background-color: #ffffff;
  border: 1px solid #cacaca;
`;
const formComponentStyle = css`
  ${formComponentBase} padding: ${props =>
      props.noPadding ? "none" : "11px " + formTextPaddingLeft + "px"};
  border-radius: 2px;
  &:focus {
    border: 2px solid #629fee;
    outline: none;
  }
`;
export default {
  siteColor: "#337AB7",
  siteText,
  siteTextColor,
  placeholderColor,
  formTextPaddingLeft,
  formComponentStyle,
  formComponentBase,
  xs: 1024
};
