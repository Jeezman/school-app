import React from "react";
import { Route } from "react-router-dom";
import SubjectSidebar from "./SubjectSidebar";
import { generateLoadableComponent } from "../utils";
import "../static/css/external.css";

const subject_list = [
  {
    name: "General Mathematics",
    description: "Submit your qualification",
    status: "Needs Edit",
    url: "general-mathematics"
  },
  {
    name: "Computer Science",
    description: "Submit your qualification",
    status: "Needs Edit",
    url: "compute-science"
  },
  {
    name: "Arithmetic",
    description: "",
    status: "Denied",
    url: "arithmetic"
  },
  {
    name: "Geometry",
    description: "",
    status: "Denied",
    url: "geometry"
  },
  {
    name: "Law",
    description: "Submit your qualification and experience",
    status: "Needs Edit",
    url: "law"
  },
  {
    name: "Music Theory",
    description: "Edit your submission",
    status: "Active",
    url: "music-theory"
  }
];
const subjectSummaryList = [
  {
    url: "/subjects/?filter_by=all",
    no: 6,
    long_name: "Subjects in Total",
    short_name: "All."
  },
  {
    url: "/subjects/?filter_by=active",
    no: 1,
    long_name: "Active",
    short_name: "Act."
  },
  {
    url: "/subjects/?filter_by=pending",
    no: 0,
    long_name: "Pending Approval",
    short_name: "PA."
  },
  {
    url: "/subjects/?filter_by=modification",
    no: 3,
    long_name: "Requires Modification",
    short_name: "Mod."
  },
  {
    url: "/subjects/?filter_by=denied",
    no: 2,
    long_name: "Denied",
    short_name: "Den"
  }
];
const links = [
  {
    label: "Manage Your Subjects",
    url: "/subjects",
    component: "SubjectListPage",
    params: {
      subject_details: subjectSummaryList,
      subject_list
    }
  },
  // { label: "Your Sales Analytics", url: "#", className: "hide" },
  {
    label: "Promote Your Business",
    url: "/promote",
    component: "PromotePage",
    params: {
      username: "biolao"
    }
  }
];

const SubjectRootPage = () => (
  <div className="container row-space-top-4 row-space-4">
    <div className="row">
      <SubjectSidebar links={links} />
      <div className="col-sm-9 col-xs-12">
        {links.map((link, index) => (
          <Route
            key={index}
            index={index}
            path={link.url}
            render={() => {
              const RenderComponent = generateLoadableComponent({
                loader: () => import(`./${link.component}`)
              });
              return <RenderComponent {...link.params} />;
            }}
          />
        ))}
      </div>
    </div>
  </div>
);
export default SubjectRootPage;
