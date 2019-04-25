import React from "react";
import ProfileSidebar from "./ProfileSidebar";
import { Route } from "react-router-dom";
import { generateLoadableComponent } from "../utils";

const links = [
  { label: "Edit Profile", url: "/users/edit", component: "EditProfilePage" },
  {
    label: "Photo and Video",
    url: "/users/edit-media",
    component: "EditMediaPage"
  },
  {
    label: "Trust and Verification",
    url: "/users/edit-verification",
    component: "EditVerificationPage"
  },
  {
    label: "Select Subjects",
    url: "/users/select-subjects",
    component: "SelectSubjectPage"
  },
  {
    label: "Edit Tutor Profile",
    url: "/users/edit_tutor",
    component: "EditTutorProfilePage"
  }
];
const Profile = () => (
  <div className="main-block">
    <div className="container row-space-top-4 row-space-4">
      <div className="row">
        <ProfileSidebar links={links} />

        <div className="col-md-9 col-xs-12">
          {links.map((link, index) => (
            <Route
              index={index}
              path={link.url}
              component={generateLoadableComponent({
                loader: () => import(`./Pages/${link.component}`)
              })}
            />
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default Profile;
