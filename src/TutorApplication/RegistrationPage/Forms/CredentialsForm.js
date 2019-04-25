import React from "react";
const FormField = ({ label, placeholder, className = "" }) => (
  <div className={`form-group ${className}`}>
    <label className="control-label">{label}</label>
    <input type="text" className="form-control" placeholder={placeholder} />
  </div>
);
const EducationFormset = () => (
  <div id="{{ form.prefix }}-row" className="form-base">
    <FormField label="School" placeholder="University of Ibadan" />
    <div className="row">
      <div className="col-sm-6">
        <FormField label="Course" placeholder="E.g Petroleum Engineering" />
      </div>
      <div className="col-sm-6">
        <FormField label="Degree" placeholder="E.g B.Sc" />
      </div>
    </div>
  </div>
);
const WorkExperienceFormset = () => (
  <div id="{{ form.prefix }}-row" className="form-base">
    <div className="row">
      <div className="col-sm-7">
        <FormField
          label="Name of Organization"
          className="no-margin-bottom"
          placeholder="E.g Green Springs School Lekki Lagos State"
        />
      </div>
      <div className="col-sm-5">
        <FormField
          label="Your Role"
          className="no-margin-bottom"
          placeholder="E.g. Chemistry Teacher"
        />
      </div>
    </div>
    <div className="row margin-bottom-5">
      <div className="col-sm-6 checkbox">
        <label>
          <input type="checkbox" /> I currently work here
        </label>
      </div>
    </div>
  </div>
);

const CredentialForm = () => (
  <div className="col-sm-12 need-to-know">
    <form
      accept-charset="UTF-8"
      className="simple_form form"
      id="credential-form"
      method="post"
      enctype="multipart/form-data"
      novalidate
    >
      <div className="media">
        <div className="media-left">
          <img
            alt="/bu"
            src="img/tutor/education.png"
            className=" center-block"
          />
        </div>
        <div className="media-body">
          <h4 className="br-bottom-md">
            <b>Education</b>
          </h4>
        </div>
      </div>
      <p>
        Enter your highest education first, whether in-view or completed. You
        can add up to two schools. Please write in full, do not abbreviate. E.g.
        write 'University of Lagos' not 'UNILAG'
      </p>
      <div id="education-form" className="row-space-4">
        {[1, 2].map((form, index) => <EducationFormset />)}
      </div>
      <hr className="row hr-styled" />
      <div className="media">
        <div className="media-left">
          <img alt="/bu" src="img/tutor/work.png" className=" center-block" />
        </div>
        <div className="media-body">
          <h4 className="br-bottom-md">
            <b>Work Experience</b>
          </h4>
        </div>
      </div>
      <p>
        Enter your most recent work experience if any, and indicate if you
        currently work there or leave blank if not applicable. Please note that
        you may be required to provide some proof afterwards.
      </p>

      <div id="we-form">
        {[1, 2].map((form, index) => <WorkExperienceFormset />)}
      </div>
      <hr className="row hr-styled" />
      <div className="media">
        <div className="media-left">
          <img
            alt="/bu"
            src="img/tutor/teaching.png"
            className=" center-block"
          />
        </div>
        <div className="media-body">
          <h4>
            <b>Teaching Experience</b>
          </h4>
        </div>
      </div>
      <p className="row-space-3">
        Tell us about your teaching or training experience to help us understand
        you a bit more and tailor our service to suit you. Please be completely
        honest in order to get the best from Tuteria.
      </p>
      <div className="row row-space-bottom-5">
        <label className="col-md-3 text-right">Years of Teaching </label>
        <div className="col-md-9">
          <select className="form-control">
            <option value="">Select</option>
            {[1, 2, 3, 4, 5].map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>

      <hr className="row hr-styled" />
      <div className="media">
        <div className="media-left">
          <img
            alt="/bu"
            src="img/tutor/meet-tutor.png"
            className=" center-block"
          />
        </div>
        <div className="media-body">
          <h4>
            <b>Let's Meet You James</b>
          </h4>
        </div>
      </div>

      <p>
        Tuteria is a big family and we all love to teach! So tell us why you
        love teaching as well. Tell us about the most memorable teaching
        experience you have had!
        <span className="font-head">Please be as detailed as possible.</span>
        Don't give a general response, be very specific and detailed. This is
        your moment!
      </p>
      <div className="form-group">
        <textarea rows="4" className="form-control" />
      </div>
      <div className="row">
        <div className="col-sm-4 col-sm-offset-8">
          <button
            id="submit-btn"
            className="btn btn-lg btn-block btn-warning"
            data-loading-text="Moving On"
          >
            Next Step
          </button>
        </div>
      </div>
      <div className="padding-bottom-50" />
      <small>
        <em>
          If you encounter any difficulty completing this page, please use
          Chrome or Firefox browser or email
          <a href="mailto:help@tuteria.com">help@tuteria.com</a> directly for a
          fast response.
        </em>
      </small>
    </form>
  </div>
);
export default CredentialForm;
