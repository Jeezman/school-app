import React from "react";
import NavigationItem from "../components/compound/NavigationItem";
import TopNavigation, { NavBar } from "../components/compound/Navigation";
import "../fonts/index";
import { Route, Redirect, Switch, withRouter } from "react-router-dom";
import { generateLoadableComponent } from "../../utils";
import { Hidden } from "react-grid-system";
import { mapStateToProps, COMPLETED_STEP } from "./reducer";
import { connect } from "react-redux";
const routes = [
  { path: "personal-info", componentName: "PersonalInfoPage" },
  { path: "location", componentName: "LocationPage" },
  { path: "qualifications", componentName: "QualificationPage" },
  { path: "upload-photo", componentName: "UploadPicPage" },
  { path: "about-tutor", componentName: "AboutTutorPage" }
];
class Page extends React.Component {
  state = {
    steps: [
      {
        category: "personal",
        text: "Basic profile",
        display: true,
        completed: false,
        url: "personal-info",
        extra_urls: ["location"]
      },
      {
        category: "personal",
        display: true,
        text: "Credentials & Education",
        completed: false,
        url: "qualifications"
      },
      {
        category: "personal",
        text: "Tutor Profile",
        display: true,
        completed: false,
        url: "upload-photo",
        extra_urls: ["about-tutor"]
      },
      {
        category: "personal",
        text: "Upload Photo",
        display: true,
        completed: false,
        url: "upload-photo"
      }
    ],
    current: 1,
    currentUrlIndex: 0,
    navbarDisplay: false
  };

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
  navigateTo = (index, progress, url, next_url, base = "steps") => {
    this.props.dispatch({
      type: COMPLETED_STEP,
      progress,
      url,
      nextUrl: next_url
    });
    this.props.history.push(`/steps/${next_url}`);
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
  updateLocation(props) {
    const Index = this.state.steps.findIndex(step => {
      const fullUrls = this._buildUrls(step, true);
      return fullUrls.indexOf(props.location.pathname) > -1;
    });
    console.log(props.location);
    const currentUrlIndex = this._allUrls(true).findIndex(
      x => x === props.location.pathname
    );
    this.setState(state => ({ ...state, current: Index, currentUrlIndex }));
    this._updateVisibleTabsAndNavbar(props);
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
      return urls.map(x => `/${this._fullUrls(step)}/${x}`);
    }
    return urls;
  }
  _fullUrls(step) {
    return step.category === "personal" ? "steps" : "subjects";
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
    return {
      url: `/steps/${step.url}`,
      text: `Step ${index + 1}: ${step.text}`
    };
  }
  render() {
    console.log("inside steps index wrapper", this.props);
    const condition =
      this.props.location.pathname !== "/steps/congratulations" &&
      this.props.location.pathname !== "/steps/verify-phone" &&
      this.props.location.pathname !== "/steps/verify-identity" &&
      this.props.location.pathname !== "/steps/id-verification";
    const props = condition ? {} : { inverse: true, heading: "" };
    return (
      <div>
        <NavBar {...props} />
        <Hidden sm xs>
          {condition ? (
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
                      onBackClick={() => {}}
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
          {routes.map((route, index) => (
            <Route
              key={"route" + index}
              exact
              path={`/steps/${route.path}`}
              render={() => {
                const ComponentPage = generateLoadableComponent({
                  loader: () => import(`../views/${route.componentName}`)
                });
                return (
                  <ComponentPage
                    completedStep={this.completedStep}
                    navigateTo={this.navigateTo}
                    progressBar={this.props.progress}
                  />
                );
              }}
            />
          ))}
          <Redirect from="/subjects" to="/subjects/introduction" />
          <Redirect from="/steps" to="/steps/personal-info" />
        </Switch>
      </div>
    );
  }
}
export default connect(mapStateToProps)(withRouter(Page));
