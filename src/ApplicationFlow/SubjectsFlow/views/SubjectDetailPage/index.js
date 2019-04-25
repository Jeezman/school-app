import React from "react";
import OverviewPage from "./views/OverviewPage";
import PricingPage from "./views/PricingPage";
import PortfolioPage from "./views/PortfolioPage";
import RequirementsPage from "./views/RequirementsPage";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { mapStateToProps } from "./reducers";
const routes = [
  {
    path: "overview",
    name: OverviewPage,
    componentName: "OverviewPage"
  },
  {
    path: "pricing",
    name: PricingPage,
    componentName: "PricingPage"
  },
  {
    path: "portfolio",
    name: PortfolioPage,
    componentName: "PortfolioPage"
  },
  {
    path: "requirements",
    name: RequirementsPage,
    componentName: "RequirementsPage"
  }
];

class SubjectDetailPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      experience: true,
      dialogWidth: 0,
      dialogPosition: 0,
      display_error: false
    };
    this.rightColumn = null;
    this.leftColumn = null;
  }
  navigateTo = (slug, next_url) => {
    this.props.history.push(`/subjects/${slug}/add-details/${next_url}`);
  };
  toSubjectListPage = () => {
    this.props.history.push(`/subjects/subjects-list`);
  };
  previousPage = () => {
    this.props.history.goBack();
  };
  render() {
    const { questions: { portfolio } } = this.props;
    let newRoutes = routes;
    if (!!portfolio === false) {
      // newRoutes = newRoutes.filter(x => x.path !== "portfolio");
    }
    return (
      <div>
        <Switch>
          {newRoutes.map((route, index) => (
            <Route
              key={"route" + index}
              exact
              path={`/subjects/:slug/add-details/${route.path}`}
              render={({ match: { params: { slug } } }) => {
                const ComponentPage = route.name;
                return (
                  <ComponentPage
                    questions={this.props.questions}
                    subject={this.props.subject}
                    subjectSlug={slug}
                    completedStep={this.completedStep}
                    navigateTo={this.navigateTo}
                    toSubjectListPage={this.toSubjectListPage}
                  />
                );
              }}
            />
          ))}
          <Redirect
            from="/subjects/:slug/add-details/:extra"
            to="/subjects/:slug/add-details/overview"
          />
        </Switch>
      </div>
    );
  }
}

export default connect(mapStateToProps)(SubjectDetailPage);
