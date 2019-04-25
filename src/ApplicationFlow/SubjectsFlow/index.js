import React from "react";
import NavigationItem from "../components/compound/NavigationItem";
import TopNavigation, { NavBar } from "../components/compound/Navigation";
import "../fonts/index";
import { Route, Redirect, Switch, matchPath } from "react-router-dom";
import { Hidden } from "react-grid-system";
import SubjectSelectPage from "./views/SubjectSelectPage";
import SubjectStartPage from "./views/SubjectStartPage";
import SubjectListPage from "./views/SubjectListPage";
import StartTest from "./views/StartTest";
import SubjectDetailPage from "./views/SubjectDetailPage";
import { connect } from "react-redux";
import { mapStateToProps } from "./reducers";

const SubjectDetailRoute = connect(mapStateToProps)(
  ({
    component: Component,
    logic,
    completedStep,
    displayNotification,
    navigateTo,
    ...rest
  }) => (
    <Route
      {...rest}
      render={({ match, history }) => {
        const isTrue = logic(match.params.slug);
        if (!!isTrue === false) {
          displayNotification("Please select a tested subject", "error");
        }
        return isTrue ? (
          <Component
            slug={match.params.slug}
            completedStep={completedStep}
            navigateTo={navigateTo}
            history={history}
          />
        ) : (
          <Redirect to="/subjects/subject-list" />
        );
      }}
    />
  )
);

class Page extends React.Component {
  state = {
    steps: [
      {
        display: false,
        text: "Select Subjects",
        completed: false,
        url: "introduction",
        componentName: "SubjectStartPage",
        name: SubjectStartPage
      },
      {
        display: true,
        text: "Select Subjects",
        completed: false,
        url: "select-subjects",
        componentName: "SubjectSelectPage",
        name: SubjectSelectPage
      },
      {
        display: true,
        text: "Subject List",
        completed: false,
        url: "subject-list",
        componentName: "SubjectListPage",
        name: SubjectListPage,
        extra_urls: ["start-test"]
      },
      {
        display: true,
        text: "Add Details & Set Your Fee",
        completed: false,
        url: ":slug/add-details",
        componentName: "SubjectDetailPage",
        name: SubjectDetailPage,
        extra_urls: [
          ":slug/add-details/overview",
          ":slug/add-details/pricing",
          ":slug/add-details/portfolio",
          ":slug/add-details/requirements"
        ]
      }
    ],
    current: 1,
    currentUrlIndex: 0,
    navbarDisplay: false
  };

  nextSteps(url) {
    const values = {
      "personal-info": [0, "personal-info"],
      location: [0, "personal-info"],
      qualifications: [0, "location"],
      "about-tutor": [1, "qualifications"],
      "upload-photo": [2, "about-tutor"]
    };
    return values[url];
  }
  getComponentState = (url: string) => {
    return this.props.details[url];
  };
  validateCurrentStep(currentIndex) {
    const url = this._allUrls()[currentIndex];
    const data = this.getComponentState(url);
    return Object.keys(data).length > 0;
  }
  completedStep = url => {
    return this.props.completedSteps.indexOf(url) > -1;
  };
  navigateTo = (index, url, next_url, base = "subjects") => {
    this.props.history.push(`/${base}/${next_url}`);
  };
  goToNextScreen = () => {
    console.log(this.state);
    const nextUrl = this._allUrls(true)[this.state.currentUrlIndex + 1];
    console.log(nextUrl);
    this.props.history.push(nextUrl);
  };
  goToPreviousScreen = () => {
    const prevUrl = this._allUrls(true)[this.state.currentUrlIndex - 1];
    this.props.history.push(prevUrl);
  };
  routeMatches(path, url) {
    const match = matchPath(path, { path: url, exact: true });

    return match && match.isExact;
  }
  updateLocation(props) {
    const Index = this.state.steps.filter(x => x.display).findIndex(step => {
      const fullUrls = this._buildUrls(step, true);
      return (
        fullUrls.findIndex(x => this.routeMatches(props.location.pathname, x)) >
        -1
      );
    });
    console.log(props.location);
    const currentUrlIndex = this._allUrls(true).findIndex(x =>
      this.routeMatches(props.location.pathname, x)
    );
    this.setState(state => ({ ...state, current: Index, currentUrlIndex }));
    // this._updateVisibleTabsAndNavbar(props);
  }
  componentDidMount() {
    // debugger;
    this.updateLocation(this.props);
  }

  /**test**/
  _updateVisibleTabsAndNavbar(props) {
    const navbarDisplay = this._hasSubjectInUrl(props);
    console.log(navbarDisplay);
    this.setState(state => ({
      ...state,
      navbarDisplay,
      steps: state.steps.map(step => ({
        ...step,
        display: this._displayTab(step, navbarDisplay)
      }))
    }));
  }
  _displayTab(step, toggle) {
    if (toggle) {
      return step.category === "quiz" ? toggle : !toggle;
    }
    return step.category === "quiz" ? false : true;
  }
  _hasSubjectInUrl(props) {
    return props.location.pathname.startsWith("/subjects");
  }
  /**Todo: Memoize this function */
  _allUrls(full = false) {
    let listOfUrlsList = this.state.steps
      // .filter(x => x.completed || x.active)
      .map(x => this._buildUrls(x, full));
    return listOfUrlsList.reduce((a, b) => a.concat(b), []);
  }
  _buildUrls(step, full = false) {
    let urls = step.extra_urls || [];
    urls = [step.url].concat(urls);
    if (full) {
      return urls.map(x => `/subjects/${x}`);
    }
    return urls;
  }
  _activeCondition(step, index) {
    // let urls = this._buildUrls(step);
    const isActive = index === this.state.current;
    return isActive;
  }
  componentWillReceiveProps(nextProps) {
    const { location: pathname } = this.props;
    if (nextProps) {
      if (pathname !== nextProps.location.pathname) {
        this.updateLocation(nextProps);
      }
    }
  }
  _canProceed = () => {
    return this._allUrls(true).length - 1 > this.state.currentUrlIndex;
  };
  constructTextAndUrl(step, index) {
    if (step.category === "personal") {
      return {
        url: `/steps/${step.url}`,
        text: `Step ${index + 1}: ${step.text}`
      };
    }
    return {
      url: `/subjects/${step.url}`,
      text: step.text
    };
  }
  getComponent = link => {
    if (link === "start-test") {
      return StartTest;
    }
    return this.state.steps.find(x => x.url === link).name;
  };
  render() {
    return (
      <div>
        <NavBar inverse heading="Step 4: Create Subject" />

        <Hidden sm xs>
          {this.props.location.pathname !== "/subjects/introduction" ? (
            <TopNavigation>
              {this.state.steps
                .filter(x => x.display && x.text)
                .map((step, index) => {
                  const isActive = this._activeCondition(step, index);
                  const result = this.constructTextAndUrl(step, index);
                  return (
                    <NavigationItem
                      key={"nav " + index}
                      active={isActive}
                      completed={step.completed || isActive}
                      displayBackButton={this.state.currentUrlIndex > 0}
                      onBackClick={() => this.props.history.goBack()}
                      to={result.url}
                    >
                      {result.text}
                    </NavigationItem>
                  );
                })}
            </TopNavigation>
          ) : null}
        </Hidden>
        <Switch>
          {this._allUrls(false).map((route, index) => {
            if (
              route.startsWith(":slug/add-details") &&
              route !== ":slug/add-details"
            ) {
              let params = ":slug/add-details";
              const ComponentPage = this.getComponent(params);
              return (
                <SubjectDetailRoute
                  path={`/subjects/${route}`}
                  component={ComponentPage}
                  displayNotification={this.props.displayNotification}
                  key={"route" + index}
                  exact
                />
              );
            }
            return (
              <Route
                key={"route" + index}
                exact
                path={`/subjects/${route}`}
                render={({ match }) => {
                  // const ComponentPage = generateLoadableComponent({
                  //   loader: () => import(`./views/${route.componentName}`)
                  // });
                  if (route === ":slug/add-details") {
                    return (
                      <Redirect
                        to={`/subjects/${
                          match.params.slug
                        }/add-details/overview`}
                      />
                    );
                  }
                  let params = route;
                  const ComponentPage = this.getComponent(params);
                  return (
                    <ComponentPage
                      completedStep={this.completedStep}
                      navigateTo={this.navigateTo}
                    />
                  );
                }}
              />
            );
          })}
          <Route
            path="/subjects/:slug/add-details/:path2"
            render={({ match: { params } }) => {
              return <Redirect to={`/subjects/${params.slug}/add-details`} />;
            }}
          />
          <Redirect from="/subjects/add-details" to="/subjects/subject-list" />
          <Redirect from="/subjects/:path-param" to="/subjects/subject-list" />

          <Redirect exact from="/subjects" to="/subjects/introduction" />
        </Switch>
      </div>
    );
  }
}
export default Page;
