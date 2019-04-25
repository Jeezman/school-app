import React from "react";
import ProfilePanelBody from "../ProfilePanelBody";

const EditProfilePage = () => (
  <div className="row">
    <div className="smart-forms">
      <form
        acceptCharset="UTF-8"
        action="/users/edit/"
        className="new_user"
        id="edit_profile_form"
        method="post"
        noValidate=""
      >
        <div className="panel panel-default row-space-4">
          <div className="panel-heading">
            <h4>Required</h4>
          </div>
          <ProfilePanelBody />
        </div>
        <section id="tutor-specific-form" className="hidden">
          <div
            className="panel panel-default row-space-4"
            id="credential-section"
          >
            <div className="panel-heading">
              <h4>Credentials</h4>
            </div>
            <div className="panel-body">
              <div className="row row-space-4">
                <label className="col-md-3 text-right font-head margin-bottom-5">
                  Education
                </label>

                <div className="col-md-9">
                  <div className="padding-bottom-25">
                    Enter your highest educational qualifications, whether
                    in-view or completed. You can add up to 2. Please write in
                    full, no abbreviations. E.g. write 'University of Lagos' not
                    'UNILAG'
                  </div>
                  <div id="education-form">
                    <input
                      id="id_education_set-TOTAL_FORMS"
                      name="education_set-TOTAL_FORMS"
                      type="hidden"
                      value="1"
                    />
                    <input
                      id="id_education_set-INITIAL_FORMS"
                      name="education_set-INITIAL_FORMS"
                      type="hidden"
                      value="1"
                    />
                    <input
                      id="id_education_set-MIN_NUM_FORMS"
                      name="education_set-MIN_NUM_FORMS"
                      type="hidden"
                      value="0"
                    />
                    <input
                      id="id_education_set-MAX_NUM_FORMS"
                      name="education_set-MAX_NUM_FORMS"
                      type="hidden"
                      value="2"
                    />
                    <div
                      id="education_set-0-row"
                      className="form-base dynamic-form"
                    >
                      <input
                        id="id_education_set-0-id"
                        name="education_set-0-id"
                        type="hidden"
                        value="88"
                      />
                      <div className="form-group ">
                        <label className="pad-down-5">
                          Name of School or Institute
                        </label>
                        <label className="sr-only">School</label>
                        <input
                          className="form-control"
                          id="id_education_set-0-school"
                          maxLength="50"
                          name="education_set-0-school"
                          type="text"
                          value="jweo wejow ejowej "
                          data-parsley-id="2736"
                        />
                      </div>
                      <div className="row row-space-2">
                        <div className="col-sm-6">
                          <div className="form-group ">
                            <label className="pad-down-5">
                              Course of Study
                            </label>
                            <label className="sr-only">Course</label>
                            <input
                              className="form-control"
                              id="id_education_set-0-course"
                              maxLength="100"
                              name="education_set-0-course"
                              type="text"
                              value="jwojw jwojw"
                              data-parsley-id="1320"
                            />
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="form-group ">
                            <label className="pad-down-5">Degree</label>
                            <label className="sr-only">Degree</label>
                            <select
                              className="form-control"
                              id="id_education_set-0-degree"
                              name="education_set-0-degree"
                              data-parsley-id="6327"
                            >
                              <option value="">Select</option>
                              <option value="B.Sc.">B.Sc.</option>
                              <option value="B.A.">B.A.</option>
                              <option value="B.Ed." selected="selected">
                                B.Ed.
                              </option>
                              <option value="B.Eng.">B.Eng.</option>
                              <option value="B.Tech.">B.Tech.</option>
                              <option value="Diploma">Diploma</option>
                              <option value="HND">HND</option>
                              <option value="OND">OND</option>
                              <option value="M.Sc.">M.Sc.</option>
                              <option value="LL.B">LL.B</option>
                              <option value="MBA">MBA</option>
                              <option value="PhD">PhD</option>
                              <option value="N.C.E">N.C.E</option>
                              <option value="S.S.C.E">S.S.C.E</option>
                            </select>

                            <span className="help-block" id="parsley-id-6327" />
                          </div>
                        </div>
                      </div>
                      <input
                        type="hidden"
                        name="education_set-0-DELETE"
                        id="id_education_set-0-DELETE"
                      />
                    </div>
                    <a className="add-row" href="no-script-url">
                      another school?
                    </a>
                    <span
                      className="help-block"
                      id="parsley-id-multiple-education_set-0-DELETE"
                    />
                  </div>
                </div>
              </div>
              <hr className="row hr-styled row-space-2 " />
              <div className="row row-space-4">
                <label className="col-md-3 text-right font-head margin-bottom-5">
                  Work Experience
                </label>

                <div className="col-md-9">
                  <div className="padding-bottom-25">
                    Enter your most recent work experience if any, and indicate
                    if you currently work there. Please note that you may be
                    required to provide proof.
                  </div>

                  <div id="we-form">
                    <input
                      id="id_workexperience_set-TOTAL_FORMS"
                      name="workexperience_set-TOTAL_FORMS"
                      type="hidden"
                      value="1"
                    />
                    <input
                      id="id_workexperience_set-INITIAL_FORMS"
                      name="workexperience_set-INITIAL_FORMS"
                      type="hidden"
                      value="0"
                    />
                    <input
                      id="id_workexperience_set-MIN_NUM_FORMS"
                      name="workexperience_set-MIN_NUM_FORMS"
                      type="hidden"
                      value="0"
                    />
                    <input
                      id="id_workexperience_set-MAX_NUM_FORMS"
                      name="workexperience_set-MAX_NUM_FORMS"
                      type="hidden"
                      value="2"
                    />
                    <div
                      id="workexperience_set-0-row"
                      className="form-base dynamic-form"
                    >
                      <input
                        id="id_workexperience_set-0-id"
                        name="workexperience_set-0-id"
                        type="hidden"
                      />
                      <div className="row">
                        <div className="col-sm-6">
                          <div className="form-group ">
                            <label className="pad-down-5">
                              Name of Company or Organization
                            </label>
                            <label className="sr-only">Organization Name</label>
                            <input
                              className="form-control"
                              id="id_workexperience_set-0-name"
                              maxLength="80"
                              name="workexperience_set-0-name"
                              type="text"
                              data-parsley-id="5058"
                            />
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="form-group ">
                            <label className="pad-down-5">Your Role</label>
                            <label className="sr-only">Role</label>
                            <input
                              className="form-control"
                              id="id_workexperience_set-0-role"
                              maxLength="50"
                              name="workexperience_set-0-role"
                              type="text"
                              data-parsley-id="2881"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row margin-bottom-5">
                        <div className="col-sm-6 checkbox">
                          <label>
                            <input
                              id="id_workexperience_set-0-currently_work"
                              name="workexperience_set-0-currently_work"
                              type="checkbox"
                              data-parsley-multiple="workexperience_set-0-currently_work"
                              data-parsley-id="2035"
                            />{" "}
                            I currently work here
                          </label>
                          <span
                            className="help-block"
                            id="parsley-id-multiple-workexperience_set-0-currently_work"
                          />
                        </div>
                      </div>
                      <input
                        type="hidden"
                        name="workexperience_set-0-DELETE"
                        id="id_workexperience_set-0-DELETE"
                      />
                    </div>
                    <a className="add-row" href="no-script-url">
                      add another
                    </a>
                    <span
                      className="help-block"
                      id="parsley-id-multiple-workexperience_set-0-DELETE"
                    />
                  </div>
                </div>
              </div>
              <hr className="row hr-styled row-space-2 " />
              <div className="row row-space-4">
                <label className="col-md-3 text-right font-head margin-bottom-5">
                  Teaching Experience
                </label>

                <div className="col-md-9">
                  <div className="row row-space-bottom-5">
                    <label className="col-md-3 text-right margin-bottom-5">
                      How long have you been teaching?
                    </label>
                    <div className="col-md-9">
                      <select
                        className="form-control"
                        id="id_years_of_teaching"
                        name="years_of_teaching"
                        data-parsley-id="6834"
                      >
                        <option value="" selected="selected">
                          Just starting out
                        </option>
                        <option value="2">Less than 2 years</option>
                        <option value="5">Between 3 to 5 years</option>
                        <option value="10">Between 6 to 10 years</option>
                        <option value="50">More than 10 years</option>
                      </select>
                      <span className="help-block" id="parsley-id-6834" />
                    </div>
                  </div>
                  <div id="curr" className="row row-space-4">
                    <label className="col-md-3 text-right margin-bottom-5">
                      What className of students do you teach?
                    </label>
                    <div className="col-md-9">
                      <div className="col-sm-4 checkbox-space">
                        <label htmlFor="id_classNamees_0">
                          <input
                            id="id_classNamees_0"
                            name="classNamees"
                            type="checkbox"
                            value="nursery"
                            data-parsley-multiple="classNamees"
                            data-parsley-id="9272"
                          />{" "}
                          Nursery
                        </label>
                        <span
                          className="help-block hidden"
                          id="parsley-id-multiple-classNamees"
                        />
                      </div>

                      <div className="col-sm-4 checkbox-space">
                        <label htmlFor="id_classNamees_1">
                          <input
                            id="id_classNamees_1"
                            name="classNamees"
                            type="checkbox"
                            value="primary"
                            data-parsley-multiple="classNamees"
                            data-parsley-id="9272"
                          />{" "}
                          Primary
                        </label>
                      </div>

                      <div className="col-sm-4 checkbox-space">
                        <label htmlFor="id_classNamees_2">
                          <input
                            id="id_classNamees_2"
                            name="classNamees"
                            type="checkbox"
                            value="jss"
                            data-parsley-multiple="classNamees"
                            data-parsley-id="9272"
                          />{" "}
                          JSS Level
                        </label>
                      </div>

                      <div className="col-sm-4 checkbox-space">
                        <label htmlFor="id_classNamees_3">
                          <input
                            id="id_classNamees_3"
                            name="classNamees"
                            type="checkbox"
                            value="sss"
                            data-parsley-multiple="classNamees"
                            data-parsley-id="9272"
                          />{" "}
                          SSS Level
                        </label>
                      </div>

                      <div className="col-sm-4 checkbox-space">
                        <label htmlFor="id_classNamees_4">
                          <input
                            id="id_classNamees_4"
                            name="classNamees"
                            type="checkbox"
                            value="undergraduate"
                            data-parsley-multiple="classNamees"
                            data-parsley-id="9272"
                          />{" "}
                          Undergraduates
                        </label>
                      </div>

                      <div className="col-sm-4 checkbox-space">
                        <label htmlFor="id_classNamees_5">
                          <input
                            checked="checked"
                            id="id_classNamees_5"
                            name="classNamees"
                            type="checkbox"
                            value="adult"
                            data-parsley-multiple="classNamees"
                            data-parsley-id="9272"
                          />{" "}
                          Adults
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="well bg-info">
                    <span className="font-head">Academic Curriculum</span>
                    <br />If you teach academic subjects for nursery, primary or
                    secondary, then select the curriculum you can teach with.
                    Skip this if you teach non-academic subjects or skills.
                  </div>

                  <div>
                    <div className="row row-space-4">
                      <label className="col-md-3 text-right margin-bottom-5">
                        Select Curriculum
                      </label>
                      <div className="col-md-9">
                        <div className="col-sm-4 checkbox-space">
                          <label htmlFor="id_curriculum_used_0">
                            <input
                              checked="checked"
                              id="id_curriculum_used_0"
                              name="curriculum_used"
                              type="checkbox"
                              value="1"
                              data-parsley-multiple="curriculum_used"
                              data-parsley-id="2925"
                            />{" "}
                            Nigerian
                          </label>
                          <span
                            className="help-block hidden"
                            id="parsley-id-multiple-curriculum_used"
                          />
                        </div>

                        <div className="col-sm-4 checkbox-space">
                          <label htmlFor="id_curriculum_used_1">
                            <input
                              id="id_curriculum_used_1"
                              name="curriculum_used"
                              type="checkbox"
                              value="2"
                              data-parsley-multiple="curriculum_used"
                              data-parsley-id="2925"
                            />{" "}
                            British
                          </label>
                        </div>

                        <div className="col-sm-4 checkbox-space">
                          <label htmlFor="id_curriculum_used_2">
                            <input
                              id="id_curriculum_used_2"
                              name="curriculum_used"
                              type="checkbox"
                              value="3"
                              data-parsley-multiple="curriculum_used"
                              data-parsley-id="2925"
                            />{" "}
                            American
                          </label>
                        </div>
                      </div>
                    </div>
                    <div
                      id="curriculum_pref"
                      className="row row-space-4  hidden "
                    >
                      <label className="col-md-3 text-right">
                        British or American Curriculum
                      </label>
                      <div className="col-md-9">
                        <p>
                          Please tell us about your experience with this
                          curriculum
                        </p>
                        <div className="form-group">
                          <textarea
                            className="form-control"
                            cols="40"
                            id="id_curriculum_explanation"
                            maxLength="300"
                            name="curriculum_explanation"
                            rows="4"
                            data-parsley-id="0895"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row row-space-4">
                      <label className="col-md-3 text-right margin-bottom-5">
                        Where should lessons hold?
                      </label>
                      <div className="col-md-9">
                        <select
                          className="form-control"
                          id="id_tutoring_address"
                          name="tutoring_address"
                          data-parsley-id="0841"
                        >
                          <option value="user" selected="selected">
                            Client's Location
                          </option>
                          <option value="tutor">Tutor's Location</option>
                          <option value="neutral">Anywhere convenient</option>
                        </select>
                        <span className="help-block" id="parsley-id-0841" />
                      </div>
                    </div>
                    <div id="tutoring_address_section" className="hide">
                      <div className="row row-space-4">
                        <label className="col-md-3 text-right margin-bottom-5">
                          <label className="control-label">
                            Address reason
                          </label>
                        </label>
                        <div className="col-md-9">
                          <textarea
                            className="form-control"
                            cols="40"
                            id="id_address_reason"
                            name="address_reason"
                            placeholder="Let clients know why they should come over to your location instead. Do you have a studio? A workshop? A conducive learning environment? Don't enter your address."
                            rows="10"
                            data-parsley-id="6364"
                            disabled="disabled"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <hr className="row hr-styled row-space-2" />
              <div className="row row-space-4">
                <label className="col-md-3 text-right font-head margin-bottom-5">
                  Introduce Yourself to Clients
                </label>

                <div className="col-md-9 col-sm-9 form-group ">
                  <div className="well bg-info padding-bottom-25">
                    <p>
                      Your tutor profile is your best opportunity to "sell
                      yourself" as a tutor on Tuteria. Students often look at
                      multiple tutor profiles before selecting a tutor to
                      contact, so you need to be thorough, yet concise in
                      describing your tutoring abilities, qualifications,
                      experience and teaching style.
                    </p>
                    <p>
                      <strong className="font-head">
                        Follow these important guidelines
                      </strong>
                    </p>
                    <ol style={{ paddingLeft: "10px" }}>
                      <li>
                        Write at least 2-4 paragraphs describing your tutoring
                        and teaching qualifications and experience. Be sure to
                        include any awards or trainings you’ve received that
                        support your teaching credentials.
                      </li>
                      <li>
                        Outline the subjects you specialize in and explain your
                        teaching method. Include any degrees or awards that make
                        you standout and qualified to teach those subjects or
                        skills.
                      </li>
                      <li>
                        Write as though you are talking to the client directly
                        and encourage them to book a lesson with you.
                      </li>
                    </ol>
                    <br />
                    <br />
                    <span className="font-head">
                      <a
                        href=" https://www.tuteria.com/ng/busybenson/trained-teacher-msc-with-over-6-years-teaching-experience/"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        Click here for an example to inspire yours
                      </a>
                    </span>
                    <br />
                    <span style={{ fontSize: "12px" }}>NOTE: Do not copy</span>
                  </div>
                  <textarea
                    className="form-control"
                    cols="40"
                    data-parsley-group="default"
                    data-parsley-trigger="keyup"
                    id="id_tutor_description"
                    name="tutor_description"
                    rows="8"
                    data-parsley-id="7079"
                  >
                    dfdfdfdf
                  </textarea>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="col-sm-3 col-sm-offset-9  ">
          <button
            type="submit"
            id="submitBtn"
            data-loading-text="Saving..."
            className="pull-right btn btn-primary btn-block btn-lg row-space-top-4"
          >
            Save
          </button>
        </div>
        <div className="col-xs-12 padding-top-50">
          <hr className="hr-styled row" />
          <small>
            <span className="font-head red-text">Please note:</span>

            <em>
              if you have troubles submitting this page, it's likely due to your
              browser. Please try using a Chrome, Firefox or up-to-date Opera
              mini.
            </em>
          </small>
        </div>
      </form>
    </div>
  </div>
);

export default EditProfilePage;
