import React, { Component } from "react";
import Loadable from "react-loadable";
import { Route, Switch } from "react-router-dom";
import { graphql } from "react-apollo";
// import ErrorPage from "./Error";
function MyLoadingComponent() {
  return <div>Loading...</div>;
}
export const importLazy = promise => promise.then(result => result.default);

/*
class LazilyLoad extends React.Component {
  constructor() {
    super(...arguments);
    this.state = {
      isLoaded: false
    };
  }

  componentWillMount() {
    this.load(this.props);
  }

  componentDidMount() {
    this._isMounted = true;
  }

  componentWillReceiveProps(next) {
    if (next.modules === this.props.modules) return null;
    this.load(next);
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  load(props) {
    this.setState({
      isLoaded: false
    });

    const { modules } = props;
    const keys = Object.keys(modules);

    Promise.all(keys.map(key => modules[key]()))
      .then(values =>
        keys.reduce((agg, key, index) => {
          agg[key] = values[index];
          return agg;
        }, {})
      )
      .then(result => {
        if (!this._isMounted) return null;
        this.setState({ modules: result, isLoaded: true });
      });
  }

  render() {
    const Waiting = this.props.loader;
    if (!this.state.isLoaded) return Waiting ? <Waiting /> : null;
    return React.Children.only(this.props.children(this.state.modules));
  }
}
*/

export function generateLoadableComponent(params) {
  return Loadable({
    loading: MyLoadingComponent,
    ...params
  });
}
export function GraphqlComponent(WrapedComponent, Query) {
  const Result = class extends React.Component {
    render() {
      if (this.props.data.loading) {
        return null;
      }
      // if (this.props.data.networkStatus !== 7) {
      //   return <ErrorPage />;
      // }
      return <WrapedComponent user={this.props.data.user} />;
    }
  };
  return graphql(Query)(Result);
}

export const PageParent = ({ children, className }) => (
  <div className="main">
    <div className="main-block">
      <div className={className}>{children}</div>
    </div>
  </div>
);
export const PageContainer = ({
  links,
  className = "container row-space-top-4 row-space-4",
  ParentContainer = PageParent
}) => (
  <ParentContainer className={className}>
    <Switch>
      {links.map((link, index) => {
        let allLinks = link.extra_urls || [];
        allLinks.push(link.url);
        return allLinks.map((li, ind) => (
          <Route
            exact
            path={li}
            component={generateLoadableComponent(link.page)}
          />
        ));
      })}
    </Switch>
  </ParentContainer>
);

export class Tabs extends Component {
  state = {
    active: 0
  };
  onTabSelect = index => {
    if (this.state.active !== index) {
      this.setState({ active: index });
    }
  };
  render() {
    return (
      <div className="row">
        <div role="tabpanel">
          <ul className="nav nav-tabs" role="tablist">
            {this.props.tabs.map((tab, index) => (
              <li
                role="presentation"
                className={this.state.active === index ? "active" : ""}
              >
                <a
                  onClick={e => this.onTabSelect(index)}
                  aria-controls={tab.id}
                  role="tab"
                  aria-expanded="true"
                >
                  {tab.text} <span className="hidden-xs">{tab.mobile}</span>
                </a>
              </li>
            ))}
          </ul>
          <div className="tab-content">
            {this.props.tabs.map((tab, index) => {
              const RenderComponent = tab.component;
              const params = tab.params || {};
              return (
                <div
                  role="tabpanel"
                  className={`tab-pane ${
                    this.state.active === index ? "active" : ""
                  }`}
                >
                  <RenderComponent {...params} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
