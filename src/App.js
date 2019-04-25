// @flow
import React, { Component } from "react";
import { ApolloProvider } from "react-apollo";
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
  withRouter
} from "react-router-dom";
import ScrollToTop from "./ApplicationFlow/components/simple/ScrollToTop";
import { Provider } from "react-redux";
import { store } from "./ApplicationFlow/store";
import client from "./network";
import { generateLoadableComponent } from "./utils";
import Notification from "./ApplicationFlow/components/simple/Notification";

const routes = [
  { url: "steps", path: "Page" },
  { url: "quiz", path: "QuizTakingFlow" },
  { url: "subjects", path: "SubjectsFlow" }
];

class Notifier extends React.Component {
  state = {
    displayNotification: true
  };
  removeNotification = () => {
    this.setState({ displayNotification: false });
    this.props.notifyParent();
  };

  componentDidMount() {
    this.interval = setTimeout(() => this.removeNotification(), 10000);
  }

  componentWillUnmount() {
    clearTimeout(this.interval);
  }

  render() {
    return this.state.displayNotification ? (
      <Notification
        style={{
          width: "100%"
        }}
        className={this.props.type}
      >
        {this.props.text}
        <i
          className="fa fa-close"
          onClick={this.removeNotification}
          style={{ float: "right", cursor: "pointer" }}
        />
      </Notification>
    ) : null;
  }
}

class App extends Component {
  state = {
    notify: false,
    notifyText: "",
    notifyClass: ""
  };
  displayNotification = (notifyText, type = "warning") => {
    this.setState({ notify: true, notifyText, notifyClass: type });
  };
  isClosed = () => {
    this.setState({ notify: false });
  };

  render() {
    const routes = [
      { url: "steps", path: "Page" },
      { url: "quiz", path: "QuizTakingFlow" },
      { url: "subjects", path: "SubjectsFlow" },
      { url: "verification", path: "VerificationFlow" }
    ];
    return (
      <ApolloProvider client={client}>
        <Provider store={store}>
          <div>
            {this.state.notify ? (
              <Notifier
                type={this.state.notifyClass}
                text={this.state.notifyText}
                notifyParent={this.isClosed}
              />
            ) : null}
            <Router>
              <ScrollToTop>
                <Switch>
                  {routes.map((route, index) => (
                    <Route
                      key={index.toString()}
                      path={`/${route.url}`}
                      render={props => {
                        const Component = generateLoadableComponent({
                          loader: () =>
                            import(`./ApplicationFlow/${route.path}`)
                        });
                        return (
                          <Component
                            displayNotification={this.displayNotification}
                            {...props}
                          />
                        );
                      }}
                    />
                  ))}
                  <Redirect from="/" to="/steps" />
                </Switch>
              </ScrollToTop>
            </Router>
          </div>
        </Provider>
      </ApolloProvider>
    );
  }
}

export default App;
