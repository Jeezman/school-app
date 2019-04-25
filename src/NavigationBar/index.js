import React from "react";
import { DesktopNavBar, MobileNavigationBar } from "./NavBar";
import { withRouter } from "react-router";

const NavigationBar = ({ links, displaySubNav, location }) => {
  return (
    <div className="outer ">
      <DesktopNavBar
        location={location}
        displaySubNav={displaySubNav}
        {...{ links }}
      />
      <MobileNavigationBar {...{ links }} />
    </div>
  );
};
export default withRouter(NavigationBar);
