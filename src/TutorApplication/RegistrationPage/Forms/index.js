import React from "react";
import PersonalInfoForm from "./PersonalInfoForm";
import CredentialsForm from "./CredentialsForm";
import TutorProfileForm from "./TutorProfileForm";
import { Switch, Link, Route } from "react-router-dom";
import { withRouter } from "react-router";
import "../../../static/css/tutor-registration.css";
const links = [
  {
    name: "Personal Info",
    url: "/registration/personal-info",
    page: PersonalInfoForm
  },
  {
    name: "Credentials",
    url: "/registration/credentials",
    page: CredentialsForm
  },
  {
    name: "Tutor Profile",
    url: "/registration/tutor-profile",
    page: TutorProfileForm
  },
  {
    name: "Subjects",
    url: "/registration/subjects",
    page: CredentialsForm
  },
  {
    name: "Verifications",
    url: "/registration/verifications",
    page: CredentialsForm
  }
];
const Step = ({ name, url, isCurrent = false, style = {} }) => (
  <li>
    <Link to={url} className={isCurrent ? "active" : ""} style={style}>
      {name}
    </Link>
  </li>
);
class RegistrationFlow extends React.Component {
  render() {
    const { pathname } = this.props.location;
    return (
      <div id="content" className="spaced-top-xl spaced-bottom-xl">
        <div id="body-container">
          <div className="row br-bottom-md row-space-4">
            <div className="col-sm-12">
              <div className="processbar">
                <div className="processbar-steps">
                  <ul style={{ paddingLeft: 0 }}>
                    {links.map((step, index) => (
                      <Step
                        index={`reg-setp-${index}`}
                        isCurrent={pathname === step.url}
                        style={
                          index === links.length - 1 ? { marginRight: 0 } : {}
                        }
                        {...step}
                      />
                    ))}
                  </ul>
                </div>
              </div>
              <div
                id="wizard-container"
                className="row well bordered spaced-bottom-lg"
              >
                <Switch>
                  {links.map((li, ind) => (
                    <Route
                      index={ind}
                      exact
                      path={li.url}
                      component={li.page}
                    />
                  ))}
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(RegistrationFlow);
