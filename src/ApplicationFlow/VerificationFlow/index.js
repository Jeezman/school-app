import React from "react";
import NavigationItem from "../components/compound/NavigationItem";
import TopNavigation, { NavBar } from "../components/compound/Navigation";
import "../fonts/index";
import { Route, Redirect, Switch, withRouter } from "react-router-dom";
import { generateLoadableComponent } from "../../utils";
import { Hidden } from "react-grid-system";
import { connect } from "react-redux";

const routes = [
  { path: "start", componentName: "VerifyStartPage" },
  { path: "id-verification", componentName: "VerificationPage" },
  { path: "congratulations", componentName: "CongratulationsPage" }
];

class Page extends React.Component {
  state = {
    steps: [],
    current: 1,
    currentUrlIndex: 0,
    navbarDisplay: false
  };
  completedStep = url => {
    return this.props.completedSteps.indexOf(url) > -1;
  };
  navigateTo = (index, url, next_url, base = "verification") => {
    this.props.history.push(`/${base}/${next_url}`);
  };

  render() {
    const condition = false;
    const props = condition ? {} : { inverse: true, heading: "" };
    return (
      <div>
        <NavBar {...props} />
        <Switch>
          {routes.map((route, index) => (
            <Route
              key={"route" + index}
              exact
              path={`/verification/${route.path}`}
              render={() => {
                const ComponentPage = generateLoadableComponent({
                  loader: () => import(`./views/${route.componentName}`)
                });
                return <ComponentPage navigateTo={this.navigateTo} />;
              }}
            />
          ))}
          <Redirect from="/verification" to="/verification/start" />
        </Switch>
      </div>
    );
  }
}
export default connect()(withRouter(Page));
