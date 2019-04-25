import React from "react";
import { PageContainer } from "../utils";
const links = [
  {
    url: "/registration/completed",
    page: {
      loader: () => import(`./RegistrationPage/index`)
    }
  },
  {
    url: "/registration/personal-info",
    extra_urls: [
      "/registration/credentials",
      "/registration/tutor-profile",
      "/registration/subjects",
      "/registration/verifications"
    ],
    page: {
      loader: () => import(`./RegistrationPage/Forms/index.js`)
    }
  }
];
class TutorApplicationPage extends React.Component {
  render() {
    return (
      <div>
        <PageContainer links={links} />
      </div>
    );
  }
}
export default TutorApplicationPage;
