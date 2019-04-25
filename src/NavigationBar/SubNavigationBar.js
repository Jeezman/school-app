// @flow
import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import { withRouter } from "react-router";

const NavLink = ({ label, to, activeOnlyWhenExact, extra_urls = [] }) => (
  <Route
    path={to}
    exact={activeOnlyWhenExact}
    children={({ location: { pathname } }) => {
      extra_urls.push(to);
      const result = extra_urls.indexOf(pathname) > -1;
      return (
        <li>
          <Link to={to} aria-selected={result} className="subnav-item">
            {label}
          </Link>
        </li>
      );
    }}
  />
);
export const SubNavigationBar = ({ links }) => (
  <div className="subnav hide-print">
    <div className="container">
      <ul className="subnav-list">
        {links
          .filter(x => x.title)
          .map((link, index) => (
            <NavLink
              key={index}
              label={link.title}
              to={link.url}
              extra_urls={link.extra_urls}
            />
          ))}
      </ul>
    </div>
  </div>
);

class MobileSubNav extends Component {
  state = { is_open: false };
  static propTypes = {
    match: Object,
    location: Object,
    history: Object
  };
  linkClicked = (e, url: string) => {
    e.preventDefault();
    if (!this.state.is_open) {
      this.setState({ is_open: true });
    } else {
      this.props.history.push(url);
      this.setState({ is_open: false });
    }
  };
  toggleAriaSelected(link) {
    var aaa = link.extra_urls || [];
    aaa.push(link.url);
    return aaa.indexOf(this.props.location.pathname) > -1;
  }
  render() {
    return (
      <div className="subnav hide-print visible-xs">
        <div className="container">
          <ul className={`subnav-list ${this.state.is_open ? "is-open" : ""}`}>
            {this.props.links.filter(x => x.title).map((link, index) => (
              <li key={index}>
                <a
                  onClick={e => this.linkClicked(e, link.url)}
                  aria-selected={this.toggleAriaSelected(link)}
                  className="subnav-item"
                >
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
export const MobileSubNavigationBar = withRouter(MobileSubNav);
