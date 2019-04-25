// @flow
import React, { Component } from "react";
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import { generateLoadableComponent, PageContainer } from "./utils";
import NavigationBar from "./NavigationBar";
const links = [
  { url: "/dashboard", title: "Dashboard", page: "Dashboard" },
  {
    url: "/subjects",
    title: "My Subjects",
    extra_urls: ["/promote"],
    page: "SubjectPage",
    subroutes: [
      { url: "/:subject_slug/edit", component: "SubjectDetailPage" },
      { url: "", component: "", extra_urls: ["/promote"] },
      { url: "/new", component: "newSubjectPage" }
    ]
  },
  {
    url: "/users/bookings",
    title: "My Lessons",
    page: "LessonPage",
    extra_urls: ["/users/manage_bookings", "/users/client_meetings"]
  },
  {
    url: "/users/edit",
    title: "Profile",
    page: "Profile",
    extra_urls: [
      "/users/edit-media",
      "/users/edit-verification",
      "/users/select-subjects",
      "/users/edit_tutor"
    ]
  },
  {
    url: "/users/account",
    title: "Account",
    page: "Account",
    extra_urls: [
      "/users/transactions/orders",
      "/users/transactions/revenue",
      "/accounts/password/change"
    ]
  },
  {
    url: "/registration",
    page: "TutorApplication",
    extra_urls: []
  }
];
const linksWithNoSubNav = [
  "/subjects/new",
  "/users/bookings/",
  "/users/manage_bookings/",
  "/registration/personal-info",
  "/registration/credentials",
  "/registration/tutor-profile",
  "/registration/subjects",
  "/registration/completed",
  "/registration/verifications"
];
class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <div>
            <NavigationBar links={links} displaySubNav={linksWithNoSubNav} />
            <Route
              exact
              path="/"
              render={() => {
                return <Redirect to="/dashboard" />;
              }}
            />

            <Switch>
              {links.map((link, index) => {
                let allLinks = link.extra_urls || [];
                allLinks.push(link.url);
                return allLinks.map((li, ind) => (
                  <Route
                    path={li}
                    render={props => {
                      let RenderComponent = null;
                      if (link.subroutes) {
                        RenderComponent = () => (
                          <PageContainer
                            links={link.subroutes.map((s_route, index) => ({
                              url: `${link.url}${s_route.url}`,
                              extra_urls: s_route.extra_urls,
                              page: {
                                loader: () =>
                                  import(`./${link.page}/${
                                    s_route.component
                                      ? s_route.component + "/"
                                      : ""
                                  }index`)
                              }
                            }))}
                          />
                        );
                      } else {
                        RenderComponent = generateLoadableComponent({
                          loader: () => import(`./${link.page}/index`)
                        });
                      }
                      return <RenderComponent />;
                    }}
                  />
                ));
              })}
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
