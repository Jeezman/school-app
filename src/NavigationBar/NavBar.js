import React from "react";
import { SubNavigationBar, MobileSubNavigationBar } from "./SubNavigationBar";
import NavSearchForm from "./NavSearchForm";

const NavRightLinks = () => (
  <li className="dropdown navdropdown">
    <a
      id="user_det"
      href="/bu"
      className="dropdown-toggle profile-image"
      data-toggle="dropdown"
    >
      <img
        alt="/bu"
        className="img-circle"
        height="30"
        src="http://res.cloudinary.com/tuteria/image/upload/c_fill,f_auto,h_30,w_30/v1489651321/profile_pics/npvpoctdcpwwuhs4k1do.jpg"
        width="30"
      />
      &nbsp;Abiola <b className="caret" />
    </a>
    <ul className="dropdown-menu">
      <li>
        <a href="/dashboard/">Dashboard</a>
      </li>
      <li>
        <a href="/subjects/">Your Subjects</a>
      </li>
      <li>
        <a href="/users/requests-made/">Your Requests</a>
      </li>
      <li>
        <a href="/users/bookings/">Your Lessons</a>
      </li>
      <li>
        <a href="/users/edit/">Edit Profile</a>
      </li>
      <li>
        <a href="/users/account/">Account Settings</a>
      </li>
      <li className="divider" />
      <li>
        <a id="id_logout" href="/accounts/logout/">
          <i className="glyphicon glyphicon-log-out" /> Log Out
        </a>
      </li>
    </ul>
  </li>
);

export class DesktopNavBar extends React.Component {
  state = {
    displaySubNav: true
  };
  toggleSubNav(props) {
    const { displaySubNav, location } = props;
    const result = displaySubNav.some(v => location.pathname.indexOf(v) > -1);
    this.setState({ displaySubNav: !result });
  }
  componentDidMount() {
    this.toggleSubNav(this.props);
  }
  componentWillReceiveProps(nextProps) {
    this.toggleSubNav(nextProps);
  }
  render() {
    const { links } = this.props;
    return (
      <div className=" na hidden-xs ">
        <div className="header-2 hidden-xs">
          <div className="container-fluid">
            <div className="row">
              <div
                className="navbar navbar-default padding-side-15"
                role="navigation"
              >
                <div className="navbar-header">
                  <button
                    type="button"
                    className="navbar-toggle"
                    data-toggle="collapse"
                    data-target=".navbar-ex1-collapse"
                  >
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar" />
                    <span className="icon-bar" />
                    <span className="icon-bar" />
                  </button>
                  <a className="logo" href="/">
                    <span className="nav-logo" />
                  </a>
                </div>

                <div className="collapse navbar-collapse navbar-ex1-collapse">
                  <NavSearchForm />
                  <ul className="nav navbar-nav navbar-right">
                    <p className="navbar-text font-head">
                      <i className="glyphicon glyphicon-earphone" /> 090 945
                      26878
                    </p>
                    <NavRightLinks />
                    <li>
                      <a href="/become-a-tutor/" className="btn btn-tutor">
                        Become a tutor
                      </a>
                    </li>
                  </ul>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
        {this.state.displaySubNav ? <SubNavigationBar {...{ links }} /> : null}
      </div>
    );
  }
}

export const MobileNavigationBar = ({ links }) => (
  <div>
    <div id="mobile_navigation" className="navbar navbar-subnav-1 visible-xs  ">
      <div className="container-fluid">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle toggle-left hidden-lg"
            data-toggle="sidebar"
            data-target=".sidebar"
          >
            <span className="icon-bar" />
            <span className="icon-bar" />
            <span className="icon-bar" />
          </button>

          <button
            type="button"
            className="hidden search toggle-right navbar-toggle"
            data-toggle="sidebar"
            data-target=".sidebar"
          >
            <span className="glyphicon glyphicon-search" />
          </button>

          <a
            href="/registration/tutor-landing/"
            className="changing_btn btn btn-tutor pull-right"
          >
            Become a tutor
          </a>
          <a id="mobile-logo" className="logo hidden" href="/">
            <span className="nav-logo" />
          </a>
          <NavSearchForm />
        </div>
      </div>
    </div>

    <MobileSubNavigationBar {...{ links }} />
  </div>
);
