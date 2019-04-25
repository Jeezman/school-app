import React from "react";
import styled from "styled-components";
const mobile = `@media(max-width:1024px)`;
const others = `@media(min-width: 769px)`;
const Img = styled.img`
  display: block;
  max-width: 100%;
  height: auto;
`;
const Div = styled.div`
  ${mobile} {
    & a {
      float: left;
    }
  }
  ${others} {
    margin-top: 0px;
    display: block;
    & a {
      ${Img} & {
        display: block;
      }
    }
  }
`;
{
  /* <div className={isMobile ? "" : "media media-photo-block"}> */
}

export default ({ isMobile = false, profile }) => {
  const width = isMobile ? 80 : 250;
  const params = {
    ...profile,
    height: width,
    img: `https://res.cloudinary.com/tuteria/image/upload/c_fill,h_${width},w_${
      width
    }/v1459195036/${profile.img}`
  };
  return (
    <Div>
      {/* <a className={isMobile ? "pull-left" : ""} href="/holla" title="View Profile" */}
      <a href="/holla" title="View Profile">
        <Img
          alt={params.username}
          height={params.height}
          src={params.img}
          width={params.height}
        />
      </a>
    </Div>
  );
};
