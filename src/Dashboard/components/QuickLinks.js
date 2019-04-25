//@flow
import React from "react";
const verifiedLinks = [];
const verified_links = [
  { link: "/update/tutor-details/", text: "Update Tutor Profile" },
  { link: "/users/edit_tutor/", text: "Edit Work & Education" }
];
const not_verified = [{ link: "/trust/", text: "Trust & Safety" }];
const QuickLinks = ({ isMobile = false, is_verified = false }) => {
  const v_links = [
    {
      link: "/users/edit-verification/",
      text: "Verifications"
    }
  ];
  const links = is_verified
    ? verified_links.concat(v_links)
    : not_verified.concat(v_links);
  return (
    <div className={isMobile ? "visible-xs" : ""}>
      <div className="panel panel-default row-space-4">
        <h4 className="panel-heading">Quick Links</h4>

        <div className="panel-body">
          <ul className="list-unstyled">
            {links.map((link, index) => (
              <li className="row-space-2">
                <a href={link.link}>{link.text}</a>
                {link.bold ? (
                  <span className="red-text font-head"> New</span>
                ) : null}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default QuickLinks;
