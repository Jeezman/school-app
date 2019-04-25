import { injectGlobal } from "styled-components";
export const BASE_PATH = "";
export default injectGlobal`
@font-face {
    font-family: "Circular Black";
    src: url(${BASE_PATH}/fonts/circular/circularstd-black.eot?#iefix);
    src: url(${BASE_PATH}/fonts/circular/circularstd-black.eot?#iefix)
        format("embedded-opentype"),
      url(${BASE_PATH}/fonts/circular/circularstd-black.woff) format("woff"),
      url(${BASE_PATH}/fonts/circular/circularstd-black.ttf) format("truetype"),
      url(${BASE_PATH}/fonts/circular/circularstd-black.svg#@{icon-font-svg-id})
        format("svg");
  }
  @font-face {
    font-family: "Circular Black Italics";
    src: url(${BASE_PATH}/fonts/circular/circularstd-blackitalic.eot?#iefix);
    src: url(${BASE_PATH}/fonts/circular/circularstd-blackitalic.eot?#iefix)
        format("embedded-opentype"),
      url(${
        BASE_PATH
      }/fonts/circular/circularstd-blackitalic.woff) format("woff"),
      url(${
        BASE_PATH
      }/fonts/circular/circularstd-blackitalic.ttf) format("truetype"),
      url(${
        BASE_PATH
      }/fonts/circular/circularstd-blackitalic.svg#@{icon-font-svg-id})
        format("svg");
  }
  @font-face {
    font-family: "Circular Bold";
    src: url(${BASE_PATH}/fonts/circular/circularstd-bold.eot?#iefix);
    src: url(${BASE_PATH}/fonts/circular/circularstd-bold.eot?#iefix)
        format("embedded-opentype"),
      url(${BASE_PATH}/fonts/circular/circularstd-bold.woff) format("woff"),
      url(${BASE_PATH}/fonts/circular/circularstd-bold.ttf) format("truetype"),
      url(${BASE_PATH}/fonts/circular/circularstd-bold.svg#@{icon-font-svg-id})
        format("svg");
  }
  @font-face {
    font-family: "Circular Bold Italics";
    src: url(${BASE_PATH}/fonts/circular/circularstd-bolditalic.eot?#iefix);
    src: url(${BASE_PATH}/fonts/circular/circularstd-bolditalic.eot?#iefix)
        format("embedded-opentype"),
      url(${
        BASE_PATH
      }/fonts/circular/circularstd-bolditalic.woff) format("woff"),
      url(${
        BASE_PATH
      }/fonts/circular/circularstd-bolditalic.ttf) format("truetype"),
      url(${
        BASE_PATH
      }/fonts/circular/circularstd-bolditalic.svg#@{icon-font-svg-id})
        format("svg");
  }
  @font-face {
    font-family: "Circular Book";
    src: url(${BASE_PATH}/fonts/circular/circularstd-book.eot?#iefix);
    src: url(${BASE_PATH}/fonts/circular/circularstd-book.eot?#iefix)
        format("embedded-opentype"),
      url(${BASE_PATH}/fonts/circular/circularstd-book.woff) format("woff"),
      url(${BASE_PATH}/fonts/circular/circularstd-book.ttf) format("truetype"),
      url(${BASE_PATH}/fonts/circular/circularstd-book.svg#@{icon-font-svg-id})
        format("svg");
  }
  @font-face {
    font-family: "Circular Book Italics";
    src: url(${BASE_PATH}/fonts/circular/circularstd-bookitalic.eot?#iefix);
    src: url(${BASE_PATH}/fonts/circular/circularstd-bookitalic.eot?#iefix)
        format("embedded-opentype"),
      url(${
        BASE_PATH
      }/fonts/circular/circularstd-bookitalic.woff) format("woff"),
      url(${
        BASE_PATH
      }/fonts/circular/circularstd-bookitalic.ttf) format("truetype"),
      url(${
        BASE_PATH
      }/fonts/circular/circularstd-bookitalic.svg#@{icon-font-svg-id})
        format("svg");
  }
  @font-face {
    font-family: "Circular Medium";
    src: url(${BASE_PATH}/fonts/circular/circularstd-medium.eot?#iefix);
    src: url(${BASE_PATH}/fonts/circular/circularstd-medium.eot?#iefix)
        format("embedded-opentype"),
      url(${BASE_PATH}/fonts/circular/circularstd-medium.woff) format("woff"),
      url(${
        BASE_PATH
      }/fonts/circular/circularstd-medium.ttf) format("truetype"),
      url(${
        BASE_PATH
      }/fonts/circular/circularstd-medium.svg#@{icon-font-svg-id})
        format("svg");
  }
  @font-face {
    font-family: "Circular Meduim Italics";
    src: url(${BASE_PATH}/fonts/circular/circularstd-mediumitalic.eot?#iefix);
    src: url(${BASE_PATH}/fonts/circular/circularstd-mediumitalic.eot?#iefix)
        format("embedded-opentype"),
      url(${
        BASE_PATH
      }/fonts/circular/circularstd-mediumitalic.woff) format("woff"),
      url(${
        BASE_PATH
      }/fonts/circular/circularstd-mediumitalic.ttf) format("truetype"),
      url(${
        BASE_PATH
      }/fonts/circular/circularstd-mediumitalic.svg#@{icon-font-svg-id})
        format("svg");
  } /*! normalize.css v3.0.2 | MIT License | git.io/normalize */
  

  body {
    margin: 0;
    background-color: #FBF9FB;
  }
  #style-1::-webkit-scrollbar-track
  {
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
    border-radius: 10px;
    background-color: #F5F5F5;
  }
  
  #style-1::-webkit-scrollbar
  {
    width: 12px;
    background-color: #F5F5F5;
  }
  
  #style-1::-webkit-scrollbar-thumb
  {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
    background-color: #C9CACD;
  }
  .sticky {
    position: -webkit-sticky;
    position: sticky;
  }
  
  .sticky.sticky-fixed.is-sticky {
    margin-top: 0;
    margin-bottom: 0;
    position: fixed;
    -webkit-backface-visibility: hidden;
            -moz-backface-visibility: hidden;
         backface-visibility: hidden;
  }
  
  .sticky.sticky-fixed.is-sticky:not([style*="margin-top"]) {
    margin-top: 0 !important;
  }
  .sticky.sticky-fixed.is-sticky:not([style*="margin-bottom"]) {
    margin-bottom: 0 !important;
  }
  
  
  .sticky.sticky-fixed.is-absolute{
    position: absolute;
  }
`;
