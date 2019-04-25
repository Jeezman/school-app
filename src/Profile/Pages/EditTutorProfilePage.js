import React from "react";

class EducationForm extends React.Component {
  state = {
    schoolName: "",
    courseStudy: "",
    degree: ""
  };
  componentDidMount() {
    const { schoolName = "", courseStudy = "", degree = "" } = this.props;
    this.setState({
      schoolName,
      courseStudy,
      degree
    });
  }

  onformInputChange = (event, value) => {
    var text = event.target.value;
    this.setState({ [value]: text });
  };
  render() {
    const degrees = [
      "B.A.",
      "B.Sc.",
      "B.Ed.",
      "B.Eng.",
      "B.Tech.",
      "Diploma",
      "HND",
      "OND",
      "M.Sc.",
      "LL.B",
      "MBA",
      "PhD",
      "N.C.E",
      "S.S.C.E"
    ];
    return (
      <div className="col-md-9">
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

          <div id="education_set-0-row" className="form-base dynamic-form">
            <input
              id="id_education_set-0-id"
              name="education_set-0-id"
              type="hidden"
              value="88"
            />
            <div className="form-group">
              <label className="pad-down-5">Name of School or Institute</label>
              <label className="sr-only">School</label>
              <input
                className="form-control"
                id="id_education_set-0-school"
                maxlength="50"
                name="education_set-0-school"
                required="true"
                type="text"
                onChange={e => this.onformInputChange(e, "schoolName")}
                value={this.state.schoolName}
              />
              <span className="help-block" id="parsley-id-3121" />
            </div>
            <div className="row row-space-2">
              <div className="col-sm-6">
                <div className="form-group">
                  <label className="pad-down-5">Course of Study</label>
                  <label className="sr-only">Course</label>
                  <input
                    className="form-control"
                    id="id_education_set-0-course"
                    maxlength="100"
                    name="education_set-0-course"
                    required="true"
                    type="text"
                    onChange={e => this.onformInputChange(e, "courseStudy")}
                    value={this.state.courseStudy}
                  />
                  <span className="help-block" id="parsley-id-9089" />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="form-group">
                  <label className="pad-down-5">Degree</label>
                  <label className="sr-only">Degree</label>
                  <select
                    className="form-control"
                    id="id_education_set-0-degree"
                    name="education_set-0-degree"
                    required="true"
                    onChange={e => this.onformInputChange(e, "degree")}
                    value={this.state.degree}
                  >
                    <option value="">Select</option>
                    {degrees.map((degree, index) => (
                      <option key={index} value={degree}>
                        {degree}
                      </option>
                    ))}
                  </select>
                  <span className="help-block" />
                </div>
              </div>
            </div>
            <input
              type="hidden"
              name="education_set-0-DELETE"
              id="id_education_set-0-DELETE"
            />
            <a
              className="delete-row"
              href="no-script-url"
              style={{ display: "none" }}
            >
              remove
            </a>
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
    );
  }
}

class WorkExperienceForm extends React.Component {
  state = {
    companyName: "",
    role: "",
    currentWork: false
  };
  componentDidMount() {
    const { companyName = "", role = "", currentWork = false } = this.props;
    this.setState({
      companyName,
      role,
      currentWork
    });
  }

  onCheckBoxValue = event => {
    this.setState({ currentWork: !this.state.currentWork });

    // if (index > -1) {
    //   new_array.splice(index, 1);
    // } else {
    //   new_array.push(class_field);
    // }
    // this.setState({ currentWork: new_array });
  };

  onformInputChange = (event, value) => {
    var text = event.target.value;
    this.setState({ [value]: text });
  };
  oncurrentWorkChange = event => {
    var text = event.target.type;
    this.setState({ currentWork: text });
  };
  render() {
    return (
      <div className="col-md-9">
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

          <div id="workexperience_set-0-row" className="form-base dynamic-form">
            <input
              id="id_workexperience_set-0-id"
              name="workexperience_set-0-id"
              type="hidden"
            />
            <div className="row">
              <div className="col-sm-6">
                <div className="form-group">
                  <label className="pad-down-5">
                    Name of Company or Organization
                  </label>
                  <label className="sr-only">Organization Name</label>
                  <input
                    className="form-control"
                    id="id_workexperience_set-0-name"
                    maxlength="80"
                    name="workexperience_set-0-name"
                    type="text"
                    onChange={e => this.onformInputChange(e, "companyName")}
                    value={this.state.companyName}
                  />
                  <span className="help-block" id="parsley-id-4434" />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="form-group">
                  <label className="pad-down-5">Your Role</label>
                  <label className="sr-only">Role</label>
                  <input
                    className="form-control"
                    id="id_workexperience_set-0-role"
                    maxlength="50"
                    name="workexperience_set-0-role"
                    type="text"
                    onChange={e => this.onformInputChange(e, "role")}
                    value={this.state.role}
                  />
                  <span className="help-block" id="parsley-id-4061" />
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
                    checked={this.state.currentWork}
                    onChange={this.onCheckBoxValue}
                  />
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
            <a
              className="delete-row"
              href="no-script-url"
              style={{ display: "none" }}
            >
              remove
            </a>
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
    );
  }
}

class TeachingExperienceForm extends React.Component {
  state = {
    teaching_duration: "",
    class_taught: [],
    Curriculum: []
  };
  componentDidMount() {
    const { teaching_duration = "", class_taught = [] } = this.props;
    this.setState({
      teaching_duration,
      class_taught
    });
  }
  onformInputChange = (event, value) => {
    var text = event.target.value;
    this.setState({ [value]: text });
  };

  onteachingDurationChange = event => {
    var text = event.target.value;
    this.setState({ teaching_duration: text });
  };
  onCheckBoxValue = class_field => {
    var new_array = this.state.class_taught;
    var index = new_array.indexOf(class_field);
    if (index > -1) {
      new_array.splice(index, 1); // remove item from list
    } else {
      new_array.push(class_field); // add item to list
    }
    this.setState({ class_taught: new_array });
  };
  onCheckBoxCurriculum = class_field => {
    var new_array = this.state.Curriculum;
    var index = new_array.indexOf(class_field);
    if (index > -1) {
      new_array.splice(index, 1); // remove item from list
    } else {
      new_array.push(class_field); // add item to list
    }
    this.setState({ Curriculum: new_array });
  };
  render() {
    const classList = [
      {
        val: "Nursery"
      },
      {
        val: "Primary"
      },
      {
        val: "JSS Level"
      },
      {
        val: "SSS Level"
      },
      {
        val: "Undergraduates"
      },
      {
        val: "Adults"
      }
    ];

    const CurriculumList = [
      {
        value: "Nigerian"
      },
      {
        value: "British"
      },
      {
        value: "American"
      }
    ];
    return (
      <div className="row row-space-4">
        <label className="col-md-3 text-right font-head">
          Teaching Experience
        </label>

        <div className="col-md-9">
          <div className="row row-space-bottom-5">
            <label className="col-md-3 text-right">
              How long have you been teaching?
            </label>
            <div className="col-md-9">
              <select
                className="form-control"
                id="id_years_of_teaching"
                name="years_of_teaching"
                onChange={this.onteachingDurationChange}
              >
                <option
                  value={this.state.teaching_duration}
                  selected="selected"
                >
                  Just starting out
                </option>
                <option value="2">Less than 2 years</option>
                <option value="5">Between 3 to 5 years</option>
                <option value="10">Between 6 to 10 years</option>
                <option value="50">More than 10 years</option>
              </select>
              <span className="help-block" />
            </div>
          </div>
          <div id="curr" className="row row-space-4">
            <label className="col-md-3 text-right">
              Select the className of students you teach
            </label>
            <div className="col-md-9">
              {classList.map((val, index) => (
                <div className="col-sm-4 checkbox-space">
                  <label for="id_classNamees_0">
                    <input
                      id="id_classNamees_0"
                      name="classNamees"
                      type="checkbox"
                      // value="nursery"
                      checked={this.state.class_taught.indexOf(val.val) > -1}
                      onChange={e => this.onCheckBoxValue(val.val)}
                    />
                    {val.val}
                  </label>
                  <span
                    className="help-block hidden"
                    id="parsley-id-multiple-classNamees"
                  />
                </div>
              ))}
            </div>;
          </div>
          <div className="well bg-info">
            <span className="font-head">School Curriculum</span>
            <br />
            If you selected Nursery, Primary, JSS or SSS classNamees, then
            please select the curriculum(s) you teach with or skip this step if
            you don't teach those classNamees.
          </div>
          <div>
            <div className="row row-space-4">
              <label className="col-md-3 text-right">Select Curriculum</label>
              <div className="col-md-9">
                {CurriculumList.map((curriculum, index) => (
                  <div className="col-sm-4 checkbox-space">
                    <label for="id_curriculum_used_0">
                      <input
                        id="id_curriculum_used_0"
                        name="curriculum_used"
                        type="checkbox"
                        value="1"
                        checked={
                          this.state.Curriculum.indexOf(curriculum.value) > -1
                        }
                        onChange={e =>
                          this.onCheckBoxCurriculum(curriculum.value)
                        }
                      />
                      {curriculum.value}
                    </label>
                    <span
                      className="help-block hidden"
                      id="parsley-id-multiple-curriculum_used"
                    />
                  </div>
                ))}
              </div>
            </div>
            <div id="curriculum_pref" className="row row-space-4 hidden">
              <label className="col-md-3 text-right">
                British or American Curriculum
              </label>
              <div className="col-md-9">
                <p>Please tell us about your experience with this curriculum</p>
                <div className="form-group">
                  <textarea
                    className="form-control"
                    cols="40"
                    id="id_curriculum_explanation"
                    maxlength="300"
                    name="curriculum_explanation"
                    rows="4"
                    data-parsley-id="1239"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
class GuarantorForm extends React.Component {
  state = {
    first_name: "",
    last_name: "",
    email_address: "",
    phone_no: "",
    years_known: "",
    work: ""
  };
  componentDidMount() {
    const {
      email_address = "",
      first_name = "",
      last_name = "",
      phone_no = "",
      years_known = "",
      work = ""
    } = this.props;
    this.setState({
      email_address,
      first_name,
      last_name,
      phone_no,
      years_known,
      work
    });
  }
  onformInputChange = (event, value) => {
    var text = event.target.value;
    this.setState({ [value]: text });
  };

  render() {
    return (
      <div className="panel-body">
        <div className="row row-space-4">
          <div className="col-md-9 col-md-offset-3">
            <div className="well bg-info">
              <span className="font-head">Why we ask for guarantors</span>
              <br />
              This is primarily to put your clients at ease, especially parents.
              If you teach students under 18, then please provide two guarantors
              who must be professional references such as a teacher, boss,
              clergy, senior colleague or someone of high repute who can testify
              of your good will.
            </div>
          </div>
          <label className="col-md-3 text-right font-head">
            Guarantor Details
          </label>
          <div className="col-md-9">
            <div id="guarantor-form">
              <div id="guarantor_set-0-row" className="form-base dynamic-form">
                <input
                  id="id_guarantor_set-0-id"
                  name="guarantor_set-0-id"
                  type="hidden"
                  value="28"
                />
                <div className="row">
                  <div className="col-sm-6">
                    <label className="pad-down-5">First Name</label>
                    <div className="form-group">
                      <label className="sr-only">First name</label>
                      <input
                        className="form-control"
                        id="id_guarantor_set-0-first_name"
                        maxlength="40"
                        name="guarantor_set-0-first_name"
                        required="true"
                        type="text"
                        onChange={e => this.onformInputChange(e, "first_name")}
                        value={this.state.first_name}
                      />

                      <span className="help-block" id="parsley-id-5736" />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label className="pad-down-5">Last Name</label>
                      <label className="sr-only">Last name</label>
                      <input
                        className="form-control"
                        id="id_guarantor_set-0-last_name"
                        maxlength="40"
                        name="guarantor_set-0-last_name"
                        required="true"
                        type="text"
                        onChange={e => this.onformInputChange(e, "last_name")}
                        value={this.state.last_name}
                      />

                      <span className="help-block" id="parsley-id-1334" />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label className="pad-down-5">Email Address</label>
                      <label className="sr-only">Email address</label>
                      <input
                        className="form-control"
                        id="id_guarantor_set-0-email"
                        maxlength="254"
                        name="guarantor_set-0-email"
                        type="email"
                        onChange={e =>
                          this.onformInputChange(e, "email_address")
                        }
                        value={this.state.email_address}
                      />

                      <span className="help-block" id="parsley-id-8414" />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <label className="pad-down-5">Phone Number</label>
                    <div className="form-group">
                      <label className="sr-only">Phone no</label>
                      <input
                        className="form-control"
                        id="id_guarantor_set-0-phone_no"
                        name="guarantor_set-0-phone_no"
                        required="true"
                        type="text"
                        onChange={e => this.onformInputChange(e, "phone_no")}
                        value={this.state.phone_no}
                      />

                      <span className="help-block" id="parsley-id-5297" />
                    </div>
                  </div>
                </div>
                <div className="row margin-bottom-5">
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label className="pad-down-5">No. of Years Known</label>
                      <label className="sr-only">No of years</label>
                      <select
                        className="form-control"
                        id="id_guarantor_set-0-no_of_years"
                        name="guarantor_set-0-no_of_years"
                        required="true"
                        onChange={e => this.onformInputChange(e, "years_known")}
                      >
                        <option value={this.state.years_known}>
                          Select Option
                        </option>
                        <option value="2" selected="selected">
                          Less than two years
                        </option>
                        <option value="5">Between 3 to 5 years</option>
                        <option value="10">Between 6 to 10 years</option>
                        <option value="50">10 years +</option>
                      </select>

                      <span className="help-block" id="parsley-id-9557" />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label className="pad-down-5">Place of Work</label>
                      <input
                        className="form-control"
                        id="id_guarantor_set-0-organization"
                        maxlength="70"
                        name="guarantor_set-0-organization"
                        required="true"
                        type="text"
                        onChange={e => this.onformInputChange(e, "work")}
                        value={this.state.work}
                      />

                      <span className="help-block" id="parsley-id-1481" />
                    </div>
                  </div>
                </div>
                <input
                  type="hidden"
                  name="guarantor_set-0-DELETE"
                  id="id_guarantor_set-0-DELETE"
                />
                <a
                  className="delete-row"
                  href="no-script-url"
                  style={{ display: "none" }}
                >
                  remove
                </a>
              </div>
              <a className="add-row" href="no-script-url">
                another guarantor?
              </a>
              <span
                className="help-block"
                id="parsley-id-multiple-guarantor_set-0-DELETE"
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-3 col-sm-offset-9">
            <button
              type="submit"
              className="pull-right btn btn-primary btn-lg btn-block"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    );
  }
}

class EditTutorProfile extends React.Component {
  render() {
    return (
      <div className="col-md-9 col-xs-12">
        <div id="home-container" className="smart-forms">
          <form
            accept-charset="UTF-8"
            action="/users/edit_tutor/"
            className="new_user ng-pristine ng-valid"
            id="edit_tutor_profile_form"
            method="post"
            novalidate=""
          >
            <input
              type="hidden"
              name="csrfmiddlewaretoken"
              value="nGCo3Ai2rQW5ZtUFRWuBfvPJwqfs0WrW"
            />
            <div
              className="row panel panel-default row-space-4"
              id="credential-section"
            >
              <div className="panel-heading">
                <h4>Credentials</h4>
              </div>
              <div className="panel-body">
                <div className="row row-space-4">
                  <label className="col-md-3 text-right font-head">
                    Education
                  </label>
                  <EducationForm />
                </div>
                <hr className="row hr-styled row-space-2 " />
                <div className="row row-space-4">
                  <label className="col-md-3 text-right font-head">
                    Work Experience
                  </label>
                  <WorkExperienceForm />
                </div>
                <hr className="row hr-styled row-space-2 " />
                <TeachingExperienceForm />
              </div>
            </div>
            <br />
            <div
              className="hidden row panel panel-default row-space-4"
              id="schedule-calendar"
            >
              <div className="panel-heading">
                <h4>Schedule</h4>
              </div>

              <div
                className="panel-body ng-scope"
                ng-controller="TutorCalendarCtrl"
              >
                <div className="row">
                  <div className="col-sm-6 col-xs-12">
                    <div
                      ng-show="date_selected"
                      className="custom-time-picker padding-left-right-15 ng-hide"
                    >
                      <div className="panel panel-default">
                        <div className="panel-heading">
                          <button
                            type="button"
                            className="close pull-right"
                            ng-click="cancel('dismiss')"
                          >
                            <span aria-hidden="true">×</span>
                            <span className="sr-only">Close</span>
                          </button>
                          <small className="ng-binding" />
                        </div>
                        <div className="panel-body">
                          <div>
                            <div className="row">
                              <div className="col-xs-6">
                                <div className="form-group">
                                  <select
                                    ng-model="selectedDate.start_time"
                                    className="form-control input-sm ng-pristine ng-valid"
                                    name="sss"
                                    ng-options="item for item in getStartHours()"
                                    ng-change="getEndHours(selectedDate.start_time)"
                                    data-parsley-id="5632"
                                  >
                                    <option value="" className="">
                                      Start time
                                    </option>
                                  </select>
                                  <span
                                    className="help-block"
                                    id="parsley-id-5632"
                                  />
                                </div>
                              </div>

                              <div className="col-xs-6">
                                <div className="form-group">
                                  <select
                                    ng-model="selectedDate.end_time"
                                    className="form-control input-sm ng-pristine ng-valid"
                                    name="sss"
                                    ng-options="item for item in getEndHours(selectedDate.start_time)"
                                    data-parsley-id="8823"
                                  >
                                    <option value="" className="">
                                      End time
                                    </option>
                                  </select>

                                  <span
                                    className="help-block"
                                    id="parsley-id-8823"
                                  />
                                </div>
                              </div>
                            </div>
                            <div ng-show="isNew" className="ng-hide">
                              <div className="checkbox">
                                <label>
                                  <input
                                    ng-model="selectedDate.reoccur"
                                    type="checkbox"
                                    className="ng-pristine ng-valid"
                                  />
                                  Set this weekday for the next 4 months?
                                </label>
                              </div>
                            </div>
                          </div>

                          <small>Changes will reflect after you submit</small>
                        </div>
                        <div className="panel-footer clearfix">
                          <div
                            ng-show="isNew"
                            className="col-sm-6 col-xs-12 ng-hide"
                          >
                            <small
                              ng-hide="validate()"
                              className="text-danger invalid-times"
                            >
                              Pls select a valid start and end time;
                            </small>
                          </div>
                          <div
                            ng-show="isNew"
                            className="col-sm-6 col-xs-12 ng-hide"
                          >
                            <a
                              href="no-script-url"
                              className="btn btn-success btn-sm btn-block"
                              ng-click="ok('create')"
                            >
                              Add
                            </a>
                          </div>
                          <div
                            ng-hide="isNew"
                            className="row-space-mobile-4 col-sm-6 col-sm-push-6 col-xs-12"
                          >
                            <a
                              href="no-script-url"
                              className="btn btn-info btn-block"
                              ng-click="ok('update')"
                            >
                              Update Session
                            </a>
                          </div>
                          <div
                            ng-hide="isNew"
                            className="col-sm-6 col-sm-pull-6 col-xs-12"
                          >
                            <a
                              href="no-script-url"
                              className="btn btn-warning btn-block"
                              ng-click="cancel('cancel')"
                            >
                              Cancel Session
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>

                    <multiple-date-picker
                      directive-scope="ds"
                      days-selected="availableDays"
                      day-click="dateClick"
                      sunday-first-day="true"
                      day-hover="hoverEvent"
                      month-changed="logMonthChanged"
                      days-off="noneAvailableDays"
                      disallow-back-past-months="true"
                      className="ng-isolate-scope"
                    >
                      <div className="multiple-date-picker">
                        <div className="picker-top-row">
                          <div
                            className="text-center picker-navigate picker-navigate-left-arrow disabled"
                            ng-className="{'disabled':disableBackButton}"
                            ng-click="previousMonth()"
                          >
                            <i className="glyphicon glyphicon-chevron-left" />
                          </div>
                          <div className="text-center picker-month ng-binding">
                            June 2017
                          </div>
                          <div
                            className="text-center picker-navigate picker-navigate-right-arrow"
                            ng-className="{'disabled':disableNextButton}"
                            ng-click="nextMonth()"
                          >
                            <i className="glyphicon glyphicon-chevron-right" />
                          </div>
                        </div>
                        <div className="picker-days-week-row">
                          <br /> ngRepeat: day in daysOfWeek --><div
                            className="text-center ng-binding ng-scope"
                            ng-repeat="day in daysOfWeek"
                          >
                            Su
                          </div>
                          <br /> end ngRepeat: day in daysOfWeek --><div
                            className="text-center ng-binding ng-scope"
                            ng-repeat="day in daysOfWeek"
                          >
                            Mo
                          </div>
                          <br /> end ngRepeat: day in daysOfWeek --><div
                            className="text-center ng-binding ng-scope"
                            ng-repeat="day in daysOfWeek"
                          >
                            Tu
                          </div>
                          <br /> end ngRepeat: day in daysOfWeek --><div
                            className="text-center ng-binding ng-scope"
                            ng-repeat="day in daysOfWeek"
                          >
                            We
                          </div>
                          <br /> end ngRepeat: day in daysOfWeek --><div
                            className="text-center ng-binding ng-scope"
                            ng-repeat="day in daysOfWeek"
                          >
                            Th
                          </div>
                          <br /> end ngRepeat: day in daysOfWeek --><div
                            className="text-center ng-binding ng-scope"
                            ng-repeat="day in daysOfWeek"
                          >
                            Fr
                          </div>
                          <br /> end ngRepeat: day in daysOfWeek --><div
                            className="text-center ng-binding ng-scope"
                            ng-repeat="day in daysOfWeek"
                          >
                            Sa
                          </div>
                          <br /> end ngRepeat: day in daysOfWeek -->
                        </div>
                        <div className="picker-days-row">
                          <br /> ngRepeat: x in emptyFirstDays --><div
                            className="text-center picker-day picker-empty ng-scope"
                            ng-repeat="x in emptyFirstDays"
                          />
                          <br /> end ngRepeat: x in emptyFirstDays --><div
                            className="text-center picker-day picker-empty ng-scope"
                            ng-repeat="x in emptyFirstDays"
                          />
                          <br /> end ngRepeat: x in emptyFirstDays --><div
                            className="text-center picker-day picker-empty ng-scope"
                            ng-repeat="x in emptyFirstDays"
                          />
                          <br /> end ngRepeat: x in emptyFirstDays --><div
                            className="text-center picker-day picker-empty ng-scope"
                            ng-repeat="x in emptyFirstDays"
                          />
                          <br /> end ngRepeat: x in emptyFirstDays --><br />
                          ngRepeat: day in days --><div
                            className="text-center picker-day ng-binding ng-scope picker-off"
                            ng-repeat="day in days"
                            ng-click="toggleDay($event, day)"
                            ng-mouseover="hoverDay($event, day)"
                            ng-mouseleave="dayHover($event, day)"
                            ng-className="{'picker-selected':day.selected,'picker-cancel':day.cancel,'picker-update':day.updated,'picker-new':day.is_new, 'picker-off':!day.selectable, 'today':day.today}"
                          >
                            1
                          </div>
                          <br /> end ngRepeat: day in days --><div
                            className="text-center picker-day ng-binding ng-scope picker-off"
                            ng-repeat="day in days"
                            ng-click="toggleDay($event, day)"
                            ng-mouseover="hoverDay($event, day)"
                            ng-mouseleave="dayHover($event, day)"
                            ng-className="{'picker-selected':day.selected,'picker-cancel':day.cancel,'picker-update':day.updated,'picker-new':day.is_new, 'picker-off':!day.selectable, 'today':day.today}"
                          >
                            2
                          </div>
                          <br /> end ngRepeat: day in days --><div
                            className="text-center picker-day ng-binding ng-scope picker-off"
                            ng-repeat="day in days"
                            ng-click="toggleDay($event, day)"
                            ng-mouseover="hoverDay($event, day)"
                            ng-mouseleave="dayHover($event, day)"
                            ng-className="{'picker-selected':day.selected,'picker-cancel':day.cancel,'picker-update':day.updated,'picker-new':day.is_new, 'picker-off':!day.selectable, 'today':day.today}"
                          >
                            3
                          </div>
                          <br /> end ngRepeat: day in days --><div
                            className="text-center picker-day ng-binding ng-scope picker-off"
                            ng-repeat="day in days"
                            ng-click="toggleDay($event, day)"
                            ng-mouseover="hoverDay($event, day)"
                            ng-mouseleave="dayHover($event, day)"
                            ng-className="{'picker-selected':day.selected,'picker-cancel':day.cancel,'picker-update':day.updated,'picker-new':day.is_new, 'picker-off':!day.selectable, 'today':day.today}"
                          >
                            4
                          </div>
                          <br /> end ngRepeat: day in days --><div
                            className="text-center picker-day ng-binding ng-scope picker-off"
                            ng-repeat="day in days"
                            ng-click="toggleDay($event, day)"
                            ng-mouseover="hoverDay($event, day)"
                            ng-mouseleave="dayHover($event, day)"
                            ng-className="{'picker-selected':day.selected,'picker-cancel':day.cancel,'picker-update':day.updated,'picker-new':day.is_new, 'picker-off':!day.selectable, 'today':day.today}"
                          >
                            5
                          </div>
                          <br /> end ngRepeat: day in days --><div
                            className="text-center picker-day ng-binding ng-scope picker-off"
                            ng-repeat="day in days"
                            ng-click="toggleDay($event, day)"
                            ng-mouseover="hoverDay($event, day)"
                            ng-mouseleave="dayHover($event, day)"
                            ng-className="{'picker-selected':day.selected,'picker-cancel':day.cancel,'picker-update':day.updated,'picker-new':day.is_new, 'picker-off':!day.selectable, 'today':day.today}"
                          >
                            6
                          </div>
                          <br /> end ngRepeat: day in days --><div
                            className="text-center picker-day ng-binding ng-scope picker-off"
                            ng-repeat="day in days"
                            ng-click="toggleDay($event, day)"
                            ng-mouseover="hoverDay($event, day)"
                            ng-mouseleave="dayHover($event, day)"
                            ng-className="{'picker-selected':day.selected,'picker-cancel':day.cancel,'picker-update':day.updated,'picker-new':day.is_new, 'picker-off':!day.selectable, 'today':day.today}"
                          >
                            7
                          </div>
                          <br /> end ngRepeat: day in days --><div
                            className="text-center picker-day ng-binding ng-scope picker-off"
                            ng-repeat="day in days"
                            ng-click="toggleDay($event, day)"
                            ng-mouseover="hoverDay($event, day)"
                            ng-mouseleave="dayHover($event, day)"
                            ng-className="{'picker-selected':day.selected,'picker-cancel':day.cancel,'picker-update':day.updated,'picker-new':day.is_new, 'picker-off':!day.selectable, 'today':day.today}"
                          >
                            8
                          </div>
                          <br /> end ngRepeat: day in days --><div
                            className="text-center picker-day ng-binding ng-scope picker-off"
                            ng-repeat="day in days"
                            ng-click="toggleDay($event, day)"
                            ng-mouseover="hoverDay($event, day)"
                            ng-mouseleave="dayHover($event, day)"
                            ng-className="{'picker-selected':day.selected,'picker-cancel':day.cancel,'picker-update':day.updated,'picker-new':day.is_new, 'picker-off':!day.selectable, 'today':day.today}"
                          >
                            9
                          </div>
                          <br /> end ngRepeat: day in days --><div
                            className="text-center picker-day ng-binding ng-scope picker-off"
                            ng-repeat="day in days"
                            ng-click="toggleDay($event, day)"
                            ng-mouseover="hoverDay($event, day)"
                            ng-mouseleave="dayHover($event, day)"
                            ng-className="{'picker-selected':day.selected,'picker-cancel':day.cancel,'picker-update':day.updated,'picker-new':day.is_new, 'picker-off':!day.selectable, 'today':day.today}"
                          >
                            10
                          </div>
                          <br /> end ngRepeat: day in days --><div
                            className="text-center picker-day ng-binding ng-scope picker-off"
                            ng-repeat="day in days"
                            ng-click="toggleDay($event, day)"
                            ng-mouseover="hoverDay($event, day)"
                            ng-mouseleave="dayHover($event, day)"
                            ng-className="{'picker-selected':day.selected,'picker-cancel':day.cancel,'picker-update':day.updated,'picker-new':day.is_new, 'picker-off':!day.selectable, 'today':day.today}"
                          >
                            11
                          </div>
                          <br /> end ngRepeat: day in days --><div
                            className="text-center picker-day ng-binding ng-scope picker-off"
                            ng-repeat="day in days"
                            ng-click="toggleDay($event, day)"
                            ng-mouseover="hoverDay($event, day)"
                            ng-mouseleave="dayHover($event, day)"
                            ng-className="{'picker-selected':day.selected,'picker-cancel':day.cancel,'picker-update':day.updated,'picker-new':day.is_new, 'picker-off':!day.selectable, 'today':day.today}"
                          >
                            12
                          </div>
                          <br /> end ngRepeat: day in days --><div
                            className="text-center picker-day ng-binding ng-scope picker-off"
                            ng-repeat="day in days"
                            ng-click="toggleDay($event, day)"
                            ng-mouseover="hoverDay($event, day)"
                            ng-mouseleave="dayHover($event, day)"
                            ng-className="{'picker-selected':day.selected,'picker-cancel':day.cancel,'picker-update':day.updated,'picker-new':day.is_new, 'picker-off':!day.selectable, 'today':day.today}"
                          >
                            13
                          </div>
                          <br /> end ngRepeat: day in days --><div
                            className="text-center picker-day ng-binding ng-scope picker-off"
                            ng-repeat="day in days"
                            ng-click="toggleDay($event, day)"
                            ng-mouseover="hoverDay($event, day)"
                            ng-mouseleave="dayHover($event, day)"
                            ng-className="{'picker-selected':day.selected,'picker-cancel':day.cancel,'picker-update':day.updated,'picker-new':day.is_new, 'picker-off':!day.selectable, 'today':day.today}"
                          >
                            14
                          </div>
                          <br /> end ngRepeat: day in days --><div
                            className="text-center picker-day ng-binding ng-scope picker-off today"
                            ng-repeat="day in days"
                            ng-click="toggleDay($event, day)"
                            ng-mouseover="hoverDay($event, day)"
                            ng-mouseleave="dayHover($event, day)"
                            ng-className="{'picker-selected':day.selected,'picker-cancel':day.cancel,'picker-update':day.updated,'picker-new':day.is_new, 'picker-off':!day.selectable, 'today':day.today}"
                          >
                            15
                          </div>
                          <br /> end ngRepeat: day in days --><div
                            className="text-center picker-day ng-binding ng-scope"
                            ng-repeat="day in days"
                            ng-click="toggleDay($event, day)"
                            ng-mouseover="hoverDay($event, day)"
                            ng-mouseleave="dayHover($event, day)"
                            ng-className="{'picker-selected':day.selected,'picker-cancel':day.cancel,'picker-update':day.updated,'picker-new':day.is_new, 'picker-off':!day.selectable, 'today':day.today}"
                          >
                            16
                          </div>
                          <br /> end ngRepeat: day in days --><div
                            className="text-center picker-day ng-binding ng-scope"
                            ng-repeat="day in days"
                            ng-click="toggleDay($event, day)"
                            ng-mouseover="hoverDay($event, day)"
                            ng-mouseleave="dayHover($event, day)"
                            ng-className="{'picker-selected':day.selected,'picker-cancel':day.cancel,'picker-update':day.updated,'picker-new':day.is_new, 'picker-off':!day.selectable, 'today':day.today}"
                          >
                            17
                          </div>
                          <br /> end ngRepeat: day in days --><div
                            className="text-center picker-day ng-binding ng-scope"
                            ng-repeat="day in days"
                            ng-click="toggleDay($event, day)"
                            ng-mouseover="hoverDay($event, day)"
                            ng-mouseleave="dayHover($event, day)"
                            ng-className="{'picker-selected':day.selected,'picker-cancel':day.cancel,'picker-update':day.updated,'picker-new':day.is_new, 'picker-off':!day.selectable, 'today':day.today}"
                          >
                            18
                          </div>
                          <br /> end ngRepeat: day in days --><div
                            className="text-center picker-day ng-binding ng-scope"
                            ng-repeat="day in days"
                            ng-click="toggleDay($event, day)"
                            ng-mouseover="hoverDay($event, day)"
                            ng-mouseleave="dayHover($event, day)"
                            ng-className="{'picker-selected':day.selected,'picker-cancel':day.cancel,'picker-update':day.updated,'picker-new':day.is_new, 'picker-off':!day.selectable, 'today':day.today}"
                          >
                            19
                          </div>
                          <br /> end ngRepeat: day in days --><div
                            className="text-center picker-day ng-binding ng-scope"
                            ng-repeat="day in days"
                            ng-click="toggleDay($event, day)"
                            ng-mouseover="hoverDay($event, day)"
                            ng-mouseleave="dayHover($event, day)"
                            ng-className="{'picker-selected':day.selected,'picker-cancel':day.cancel,'picker-update':day.updated,'picker-new':day.is_new, 'picker-off':!day.selectable, 'today':day.today}"
                          >
                            20
                          </div>
                          <br /> end ngRepeat: day in days --><div
                            className="text-center picker-day ng-binding ng-scope"
                            ng-repeat="day in days"
                            ng-click="toggleDay($event, day)"
                            ng-mouseover="hoverDay($event, day)"
                            ng-mouseleave="dayHover($event, day)"
                            ng-className="{'picker-selected':day.selected,'picker-cancel':day.cancel,'picker-update':day.updated,'picker-new':day.is_new, 'picker-off':!day.selectable, 'today':day.today}"
                          >
                            21
                          </div>
                          <br /> end ngRepeat: day in days --><div
                            className="text-center picker-day ng-binding ng-scope"
                            ng-repeat="day in days"
                            ng-click="toggleDay($event, day)"
                            ng-mouseover="hoverDay($event, day)"
                            ng-mouseleave="dayHover($event, day)"
                            ng-className="{'picker-selected':day.selected,'picker-cancel':day.cancel,'picker-update':day.updated,'picker-new':day.is_new, 'picker-off':!day.selectable, 'today':day.today}"
                          >
                            22
                          </div>
                          <br /> end ngRepeat: day in days --><div
                            className="text-center picker-day ng-binding ng-scope"
                            ng-repeat="day in days"
                            ng-click="toggleDay($event, day)"
                            ng-mouseover="hoverDay($event, day)"
                            ng-mouseleave="dayHover($event, day)"
                            ng-className="{'picker-selected':day.selected,'picker-cancel':day.cancel,'picker-update':day.updated,'picker-new':day.is_new, 'picker-off':!day.selectable, 'today':day.today}"
                          >
                            23
                          </div>
                          <br /> end ngRepeat: day in days --><div
                            className="text-center picker-day ng-binding ng-scope"
                            ng-repeat="day in days"
                            ng-click="toggleDay($event, day)"
                            ng-mouseover="hoverDay($event, day)"
                            ng-mouseleave="dayHover($event, day)"
                            ng-className="{'picker-selected':day.selected,'picker-cancel':day.cancel,'picker-update':day.updated,'picker-new':day.is_new, 'picker-off':!day.selectable, 'today':day.today}"
                          >
                            24
                          </div>
                          <br /> end ngRepeat: day in days --><div
                            className="text-center picker-day ng-binding ng-scope"
                            ng-repeat="day in days"
                            ng-click="toggleDay($event, day)"
                            ng-mouseover="hoverDay($event, day)"
                            ng-mouseleave="dayHover($event, day)"
                            ng-className="{'picker-selected':day.selected,'picker-cancel':day.cancel,'picker-update':day.updated,'picker-new':day.is_new, 'picker-off':!day.selectable, 'today':day.today}"
                          >
                            25
                          </div>
                          <br /> end ngRepeat: day in days --><div
                            className="text-center picker-day ng-binding ng-scope"
                            ng-repeat="day in days"
                            ng-click="toggleDay($event, day)"
                            ng-mouseover="hoverDay($event, day)"
                            ng-mouseleave="dayHover($event, day)"
                            ng-className="{'picker-selected':day.selected,'picker-cancel':day.cancel,'picker-update':day.updated,'picker-new':day.is_new, 'picker-off':!day.selectable, 'today':day.today}"
                          >
                            26
                          </div>
                          <br /> end ngRepeat: day in days --><div
                            className="text-center picker-day ng-binding ng-scope"
                            ng-repeat="day in days"
                            ng-click="toggleDay($event, day)"
                            ng-mouseover="hoverDay($event, day)"
                            ng-mouseleave="dayHover($event, day)"
                            ng-className="{'picker-selected':day.selected,'picker-cancel':day.cancel,'picker-update':day.updated,'picker-new':day.is_new, 'picker-off':!day.selectable, 'today':day.today}"
                          >
                            27
                          </div>
                          <br /> end ngRepeat: day in days --><div
                            className="text-center picker-day ng-binding ng-scope"
                            ng-repeat="day in days"
                            ng-click="toggleDay($event, day)"
                            ng-mouseover="hoverDay($event, day)"
                            ng-mouseleave="dayHover($event, day)"
                            ng-className="{'picker-selected':day.selected,'picker-cancel':day.cancel,'picker-update':day.updated,'picker-new':day.is_new, 'picker-off':!day.selectable, 'today':day.today}"
                          >
                            28
                          </div>
                          <br /> end ngRepeat: day in days --><div
                            className="text-center picker-day ng-binding ng-scope"
                            ng-repeat="day in days"
                            ng-click="toggleDay($event, day)"
                            ng-mouseover="hoverDay($event, day)"
                            ng-mouseleave="dayHover($event, day)"
                            ng-className="{'picker-selected':day.selected,'picker-cancel':day.cancel,'picker-update':day.updated,'picker-new':day.is_new, 'picker-off':!day.selectable, 'today':day.today}"
                          >
                            29
                          </div>
                          <br /> end ngRepeat: day in days --><div
                            className="text-center picker-day ng-binding ng-scope"
                            ng-repeat="day in days"
                            ng-click="toggleDay($event, day)"
                            ng-mouseover="hoverDay($event, day)"
                            ng-mouseleave="dayHover($event, day)"
                            ng-className="{'picker-selected':day.selected,'picker-cancel':day.cancel,'picker-update':day.updated,'picker-new':day.is_new, 'picker-off':!day.selectable, 'today':day.today}"
                          >
                            30
                          </div>
                          <br /> end ngRepeat: day in days --><br /> ngRepeat: x
                          in emptyLastDays --><div
                            className="text-center picker-day picker-empty ng-scope"
                            ng-repeat="x in emptyLastDays"
                          />
                          <br /> end ngRepeat: x in emptyLastDays -->
                        </div>
                      </div>
                    </multiple-date-picker>
                  </div>
                  <div className="col-sm-6 col-xs-12">
                    <h4>Calendar Update Summary</h4>
                    <p>
                      Click on any date to add, remove or edit your calendar.
                      Dates in{" "}
                      <span style={{ color: "blue" }}>
                        <b>Blue</b>
                      </span>{" "}
                      are your current tutoring days. Those in White are free.
                    </p>

                    <ul className="list-group schedule-change-summary">
                      <li className="list-group-item">
                        <div className="calendar-legend-add" />
                        Days added:
                        <strong className="ng-binding">
                          0 day<span
                            ng-show="new_occurrences() >1"
                            className="ng-hide"
                          >
                            s
                          </span>
                        </strong>
                      </li>
                      <li className="list-group-item">
                        <div className="calendar-legend-change" />
                        Days edited:
                        <strong className="ng-binding">
                          0 day<span
                            ng-show="updates.length >1"
                            className="ng-hide"
                          >
                            s
                          </span>
                        </strong>
                      </li>
                      <li className="list-group-item">
                        <div className="calendar-legend-remove" />
                        Days removed:
                        <strong className="ng-binding">
                          0 day<span
                            ng-show="cancelled.length >1"
                            className="ng-hide"
                          >
                            s
                          </span>
                        </strong>
                      </li>
                    </ul>
                    <div className="margin-top-20">
                      <a
                        href="no-script-url"
                        ng-disabled="date_selected"
                        ng-click="updateCalendar()"
                        className="btn btn-block btn-lg btn-primary"
                      >
                        Update Calendar
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <br />
            <div
              className="row panel panel-default row-space-4 hide"
              id="schedule-section"
            >
              <div className="panel-heading">
                <h4>Preferences</h4>
              </div>
              <div className="panel-body">
                <div className="row row-space-4">
                  <label className="col-md-3 text-right font-head">
                    Preferred Hiring Mode
                  </label>

                  <div className="col-md-9">
                    <div id="hour_preference-form">
                      <div className="row-space-4">
                        <div className="checkbox">
                          <label>
                            <input
                              checked="checked"
                              id="id_allow_monthly"
                              name="allow_monthly"
                              type="checkbox"
                              data-parsley-multiple="allow_monthly"
                              data-parsley-id="1099"
                            />Allow Monthly Tutoring
                          </label>
                          <span
                            className="help-block"
                            id="parsley-id-multiple-allow_monthly"
                          />
                        </div>
                        <span className="input-hint monthly_booking_checkbox" />
                      </div>
                      <div className="row-space-4 hidden">
                        <div className="checkbox">
                          <label>
                            <input
                              id="id_toggle_skill"
                              name="toggle_skill"
                              type="checkbox"
                              data-parsley-multiple="toggle_skill"
                              data-parsley-id="1641"
                            />Apply monthly tutoring option to all Skills?
                          </label>
                          <span
                            className="help-block"
                            id="parsley-id-multiple-toggle_skill"
                          />
                        </div>
                        <span className="input-hint monthly_booking_checkbox" />
                      </div>

                      <div className="row">
                        <div className="col-xs-6">
                          <div className="form-group">
                            <label className="sr-only">
                              Number of hours per day
                            </label>
                            <select
                              className="form-control disable-group"
                              id="id_hours"
                              name="hours"
                              data-parsley-id="2690"
                            >
                              <option value="">Select Number</option>
                              <option value="1">1 hour per day</option>
                              <option value="2" selected="selected">
                                2 hours per day
                              </option>
                              <option value="3">3 hours per day</option>
                              <option value="4">4 hours per day</option>
                              <option value="5">5 hours per day</option>
                            </select>
                            <span className="help-block" id="parsley-id-2690" />
                          </div>
                          <span className="input-hint">
                            Number of hours per lesson (monthly booking)
                          </span>
                        </div>
                        <div className="col-xs-6">
                          <div className="form-group">
                            <label className="sr-only">
                              Number of days per week
                            </label>
                            <select
                              className="form-control disable-group"
                              id="id_days"
                              name="days"
                              data-parsley-id="5653"
                            >
                              <option value="">Select Number</option>
                              <option value="1">1 day per week</option>
                              <option value="2" selected="selected">
                                2 days per week
                              </option>
                              <option value="3">3 days per week</option>
                              <option value="4">4 days per week</option>
                              <option value="5">5 days per week</option>
                              <option value="6">6 days per week</option>
                              <option value="7">7 days per week</option>
                            </select>
                            <span className="help-block" id="parsley-id-5653" />
                          </div>

                          <span className="input-hint">
                            Number of days per week (monthly booking)
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row row-space-4">
                  <label className="col-md-3 text-right font-head">
                    Booking &amp; Response Time
                  </label>

                  <div className="col-md-9">
                    <div className="row">
                      <div className="col-sm-6">
                        <div className="form-group">
                          <label className="control-label sr-only" />
                        </div>
                        <span className="input-hint">
                          Average Response Time
                        </span>
                      </div>
                      <div className="col-sm-6">
                        <div className="form-group">
                          <label className="control-label sr-only" />
                        </div>

                        <span className="input-hint">Booking Preference</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <br />
            <div
              className="row panel panel-default row-space-4 hide"
              id="preference-section"
            >
              <div className="panel-heading">
                <h4>Policies</h4>
              </div>
              <div className="panel-body">
                <div className="row row-space-4">
                  <label className="col-md-3 text-right font-head">
                    Cancellation Policy
                  </label>

                  <div className="col-md-9">
                    <div
                      className="panel-group"
                      id="accordion"
                      role="tablist"
                      aria-multiselectable="true"
                    >
                      <div className="panel panel-default">
                        <div
                          className="panel-heading"
                          role="tab"
                          id="headingOne"
                        >
                          <h4 className="panel-title">
                            <a
                              data-toggle="collapse"
                              data-parent="#accordion"
                              href="#collapseOne"
                              aria-expanded="true"
                              aria-controls="collapseOne"
                            >
                              Flexible
                            </a>
                          </h4>
                        </div>
                        <div
                          id="collapseOne"
                          className="panel-collapse collapse in"
                          role="tabpanel"
                          aria-labelledby="headingOne"
                        >
                          <div className="panel-body">
                            <h4 className="padding-space-top-3 row-space-3">
                              Flexible: 6 hours notice required for full refund
                            </h4>

                            <ul>
                              <li>
                                If the client cancels a single lesson less than
                                6 hours before it commences, the cost of the
                                first hour is non-refundable but remaining hours
                                are 100% refunded.
                              </li>
                              <li>
                                If a booking contains more than one session and
                                the client cancels the entire booking before it
                                starts, 10% of the booking cost is paid to
                                tutor, while 90% is refunded to the client.
                              </li>
                              <li>
                                A lesson is officially canceled when the client
                                clicks the 'Cancel' button on the cancellation
                                confirmation page.
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="panel panel-default">
                        <div
                          className="panel-heading"
                          role="tab"
                          id="headingTwo"
                        >
                          <h4 className="panel-title">
                            <a
                              className="collapsed"
                              data-toggle="collapse"
                              data-parent="#accordion"
                              href="#collapseTwo"
                              aria-expanded="false"
                              aria-controls="collapseTwo"
                            >
                              Moderate
                            </a>
                          </h4>
                        </div>
                        <div
                          id="collapseTwo"
                          className="panel-collapse collapse"
                          role="tabpanel"
                          aria-labelledby="headingTwo"
                        >
                          <div className="panel-body">
                            <h4 className="padding-space-top-3 row-space-3">
                              Moderate: 12 hours notice required for full refund
                            </h4>
                            <ul>
                              <li>
                                If the client cancels a single lesson less than
                                12 hours before it commences, the cost of the
                                first hour is non-refundable but remaining hours
                                are 90% refunded.
                              </li>
                              <li>
                                If a booking contains more than one session and
                                the client cancels the entire booking before it
                                starts, 15% of the booking cost is paid to
                                tutor, while 85% is refunded to the client.
                              </li>
                              <li>
                                A lesson is officially canceled when the client
                                clicks the 'Cancel' button on the cancellation
                                confirmation page.
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="panel panel-default">
                        <div
                          className="panel-heading"
                          role="tab"
                          id="headingThree"
                        >
                          <h4 className="panel-title">
                            <a
                              className="collapsed"
                              data-toggle="collapse"
                              data-parent="#accordion"
                              href="#collapseThree"
                              aria-expanded="false"
                              aria-controls="collapseThree"
                            >
                              Strict
                            </a>
                          </h4>
                        </div>
                        <div
                          id="collapseThree"
                          className="panel-collapse collapse"
                          role="tabpanel"
                          aria-labelledby="headingThree"
                        >
                          <div className="panel-body">
                            <h4 className="padding-space-top-3 row-space-3">
                              Strict: 24 hours notice required for full refund
                            </h4>
                            <ul>
                              <li>
                                If the client cancels a single lesson less than
                                24 hours before it commences, the cost of the
                                first hour is non-refundable but remaining hours
                                are 80% refunded.
                              </li>
                              <li>
                                If a booking contains more than one session and
                                the client cancels the entire booking before it
                                starts, 20% of the booking cost is paid to
                                tutor, while 80% is refunded to the client.
                              </li>
                              <li>
                                A lesson is officially canceled when the client
                                clicks the 'Cancel' button on the cancellation
                                confirmation page.
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="panel panel-default">
                        <div
                          className="panel-heading"
                          role="tab"
                          id="headingFour"
                        >
                          <h4 className="panel-title">
                            <a
                              className="collapsed"
                              data-toggle="collapse"
                              data-parent="#accordion"
                              href="#collapseFour"
                              aria-expanded="false"
                              aria-controls="collapseFour"
                            >
                              Long Term
                            </a>
                          </h4>
                        </div>
                        <div
                          id="collapseFour"
                          className="panel-collapse collapse"
                          role="tabpanel"
                          aria-labelledby="headingFour"
                        >
                          <div className="panel-body">
                            <h4 className="padding-space-top-3 row-space-3">
                              Long Term: 30% down payment required for all
                              bookings
                            </h4>
                            <ul>
                              <li>
                                Note: this policy automatically applies to all
                                bookings of 24 hours or more.
                              </li>
                              <li>
                                If the client books a long term lesson and
                                decides to cancel the long term agreement before
                                the start date, 30% of payment is credited to
                                the tutor while 70% is refunded.
                              </li>
                              <li>
                                If the client books a long term lesson and
                                decides to cancel the long term agreement or any
                                session during the lesson, 30% of payment is
                                credited to the tutor while 70% is refunded to
                                client.
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    <section className="hide">
                      <div className="tabs tabs-style-topline">
                        <nav className="visible-xs">
                          <ul>
                            <li className="tab-current">
                              <a href="#about-subject" className="">
                                <span>About Subject</span>
                              </a>
                            </li>
                            <li>
                              <a href="#credentials-section" className="">
                                <span>Credentials</span>
                              </a>
                            </li>
                            <li>
                              <a href="#price-and-policies" className="">
                                <span>Price and Policy</span>
                              </a>
                            </li>
                          </ul>
                        </nav>

                        <div className="content-wrap">
                          <section
                            id="about-subject"
                            className="content-current"
                          >
                            <div className="hidden-xs panel-heading clearfix panel-sections">
                              <h4 className="pull-left">About This Subject</h4>

                              <div className="pull-right text-center panel-heading-right">
                                <i className="fa fa-eye block-icon" />

                                <div className="reviewed">Reviewed</div>
                              </div>
                            </div>

                            <div className="panel-body">
                              <div className="row">
                                <div className="col-md-3">
                                  <p className="text-muted">
                                    <strong>Experience</strong>
                                  </p>
                                </div>

                                <div className="col-md-9 expandable expandable-trigger-more">
                                  <div className="">
                                    <p>
                                      Our b &amp; b is located in the heart of
                                      Venice, close to Piazza San Marco and
                                      Fenice Theater, in a ancient building on
                                      the first floor with private entrance who
                                      overlooks on canal de le Ostreghe, nearby
                                      of Grand Canal, where it’s possible to see
                                      many gondolas and gondoliers singing,
                                      <br />It has three comfortable bedrooms
                                      all with ensuite bathroom, tastefully
                                      decorated. The Junior suite has the
                                      seating area, windows and small balcony
                                      who overlooks on the canal De Le Ostreghe.
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <hr />
                              <div className="row">
                                <div className="col-md-3">
                                  <p className="text-muted">
                                    <strong>Teaching Methods</strong>
                                  </p>
                                </div>

                                <div className="col-md-9 expandable expandable-trigger-more">
                                  <div className="">
                                    <p>
                                      To go around to Venice or to go to the
                                      islands of Murano, Burano or Torcello,
                                      there are motorboats, ferries and waterbus
                                      which stops a few steps from our b &amp;
                                      b. Also useful to reach Lido during the
                                      Venice Film Festival, rather than the
                                      Biennale at the Arsenale area, the
                                      exclusive Lido beaches or for who prefer
                                      the Alberoni beach free.
                                      <br />A waterbus stop is just a few steps
                                      from our residence (Gilgio stop line 1),
                                      and in the canal in front of us taxis and
                                      gondolas.
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <hr />
                              <div className="row">
                                <div className="col-md-3">
                                  <p className="text-muted">
                                    <strong>Some Topics</strong>
                                  </p>
                                </div>

                                <div className="col-md-9 expandable expandable-trigger-more">
                                  <div className="">
                                    <div className="row">
                                      <div className="col-xs-6">English</div>
                                      <div className="col-xs-6">English</div>
                                      <div className="col-xs-6">English</div>
                                      <div className="col-xs-6">English</div>
                                      <div className="col-xs-6">English</div>
                                      <div className="col-xs-6">English</div>
                                      <div className="col-xs-6">English</div>
                                      <div className="col-xs-6">English</div>
                                      <div className="col-xs-6">English</div>
                                      <div className="col-xs-6">English</div>
                                      <div className="col-xs-6">English</div>
                                      <div className="col-xs-6">English</div>
                                    </div>

                                    <div className="expandable-indicator" />
                                  </div>

                                  <a
                                    className="expandable-trigger-more"
                                    href="/bu"
                                  >
                                    <strong>+ More</strong>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </section>

                          <section id="credentials-section" className="panel">
                            <div className="hidden-xs panel-heading clearfix panel-sections">
                              <h4 className="pull-left">Credentials</h4>

                              <div className="pull-right text-center panel-heading-right">
                                <i className="fa fa-check" />

                                <div className="reviewed">Verified</div>
                              </div>
                            </div>
                            <div className="panel-body">
                              <div className="row">
                                <div className="col-md-3">
                                  <p className="text-muted">
                                    <strong>Schools attended</strong>
                                  </p>
                                </div>
                                <div className="col-md-9">
                                  <div className="row">
                                    <div className="col-xs-12">
                                      <div className="credential-details">
                                        <h4>University of Lagos Akoka</h4>

                                        <p>
                                          Systems Engineering
                                          <small>
                                            , <strong>BSc</strong>
                                          </small>
                                        </p>
                                      </div>
                                      <div className="credential-details">
                                        <h4>University of Ilorin, Kwara</h4>

                                        <p>
                                          Systems Engineering
                                          <small>
                                            , <strong>Msc</strong>
                                          </small>
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <hr />
                              <div className="row">
                                <div className="col-md-3">
                                  <p className="text-muted">
                                    <strong>Places Worked</strong>
                                  </p>
                                </div>
                                <div className="col-md-9">
                                  <div className="row">
                                    <div className="col-xs-12">
                                      <div className="credential-details">
                                        <h4>Exxonmobil Nigerial, Unlimited</h4>

                                        <p>
                                          Onsite support Engineering
                                          <small>
                                            , <strong>Intern</strong>
                                          </small>
                                        </p>
                                      </div>
                                      <div className="credential-details">
                                        <h4>Mobitel Nigeria Limited</h4>

                                        <p>
                                          Software Developer,
                                          <small>
                                            <strong>Intern</strong>
                                          </small>
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <hr />
                              <div className="row">
                                <div className="col-md-3">
                                  <p className="text-muted">
                                    <strong>Certificates &amp; Awards</strong>
                                  </p>
                                </div>
                                <div className="col-md-9">
                                  <div className="row">
                                    <div className="col-xs-12">
                                      <div className="credential-details">
                                        <h4>Maltina Dance Hall Competition</h4>

                                        <p>
                                          National Salsa Dance
                                          <small>
                                            <strong>Winner</strong>
                                          </small>
                                        </p>
                                      </div>
                                      <div className="credential-details">
                                        <h4>Audition Project Fame</h4>

                                        <p>
                                          Last man standing award
                                          <small>
                                            <strong>Winner</strong>
                                          </small>
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </section>
                          <section id="price-and-policies" className="panel">
                            <div className="hidden-xs panel-heading clearfix panel-sections">
                              <h4>Pricing &amp; Policies</h4>
                            </div>
                            <div className="panel-body">
                              <div className="row">
                                <div className="col-md-3">
                                  <p className="text-muted">
                                    <strong>Pricing</strong>
                                  </p>
                                </div>
                                <div className="col-md-9">
                                  <p>
                                    <strong>Hourly Price per Student</strong>
                                  </p>

                                  <div className="row">
                                    <div className="col-sm-12">
                                      <div className="row">
                                        <div className="col-xs-6">
                                          Rate: <strong>$1500/hr</strong>
                                        </div>

                                        <div className="col-xs-6">
                                          Maximum Students: 5
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-sm-12">
                                      <div>
                                        Extra students: <strong>$900/hr</strong>
                                      </div>
                                    </div>
                                  </div>
                                  <br />

                                  <p>
                                    <strong>Monthly Price per Student</strong>
                                  </p>

                                  <div className="row">
                                    <div className="col-xs-6">
                                      Rate: <strong>$32,000/month</strong>
                                    </div>
                                    <div className="col-xs-6">
                                      Extra Student: <strong>$24,000</strong>
                                    </div>

                                    <div className="col-xs-6">
                                      Days/week: <strong>3 days</strong>
                                    </div>
                                    <div className="col-xs-6">
                                      Hours/day: <strong>2 hours</strong>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <hr />
                              <div className="row">
                                <div className="col-md-3">
                                  <p className="text-muted">
                                    <strong>Cancellation Policy</strong>
                                  </p>
                                </div>
                                <div className="col-md-9">
                                  <a href="/bu">
                                    <p>
                                      <strong>Flexible</strong>
                                    </p>
                                  </a>

                                  <p>
                                    Godwin requires at least 6 hours notice
                                    should you decide to reschedule or cancel a
                                    lesson
                                  </p>
                                </div>
                              </div>
                              <hr />
                              <div className="row">
                                <div className="col-md-3">
                                  <p className="text-muted">
                                    <strong>Travel Policy</strong>
                                  </p>
                                </div>
                                <div className="col-md-9">
                                  <p>
                                    <strong>Lessons hold at your home.</strong>
                                  </p>

                                  <p>
                                    Godwin will usually travel at most 10km from
                                    Surulere (e.g from Surulere to Ojota)
                                  </p>
                                </div>
                              </div>
                              <hr />
                              <div className="row">
                                <div className="col-md-3">
                                  <p className="text-muted">
                                    <img
                                      alt="/bu"
                                      className="img-circle"
                                      src="http://placehold.it/64x64"
                                      data-pagespeed-url-hash="723673606"
                                      onload="pagespeed.CriticalImages.checkImageForCriticality(this);"
                                    />
                                  </p>
                                </div>
                                <div className="col-md-9 expandable expandable-trigger-more">
                                  <p>
                                    <strong>Good Fit Guarantee</strong>
                                  </p>
                                  <p />
                                  <p>
                                    Your first hour with Godwin or any other
                                    tutor on Tuteria is protected by our Good
                                    Fit Guarantee. You don't pay for tutoring
                                    unless you find a good fit.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </section>
                        </div>
                      </div>
                    </section>

                    <div id="cancellation_form" className="center-block">
                      <div className="form-inline">
                        <div className="form-group">
                          <label className="control-label" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row row-space-4">
                  <label className="col-md-3 text-right font-head">
                    Travel Policy
                  </label>

                  <div className="col-md-9">
                    <div id="travel_form" className="row-space-4">
                      <div className="row">
                        <div className="col-sm-6">
                          <div className="form-group">
                            <label className="control-label sr-only" />
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="form-group">
                            <label className="control-label sr-only" />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div id="tutoring_address_section" className="hide">
                      <div className="form-group">
                        <label className="control-label sr-only">
                          Explain why you prefer lessons at your location
                        </label>
                        <textarea
                          className="form-control"
                          cols="40"
                          disabled="disabled"
                          id="id_address_reason"
                          name="address_reason"
                          rows="10"
                          data-parsley-id="3969"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <br />
            <div
              className="row panel panel-default row-space-4"
              id="credential-section"
            >
              <div className="panel-heading">
                <h4>Guarantors</h4>
              </div>
              <GuarantorForm />
            </div>
          </form>
          <div className="row padding-top-30 well bg-info">
            <div className="row row-space-4">
              <label
                className="col-md-3 text-right"
                style={{ marginTop: "10px" }}
              >
                Share Your Profile!
              </label>
              <div className="col-md-5">
                <textarea
                  readonly="readonly"
                  style={{ height: "35px" }}
                  className="form-control"
                >
                  https://tuteria.com/biolao/
                </textarea>
              </div>
              <div className="col-md-4">
                <ul className="list-inline text-center space-for-mobile">
                  <li>
                    <a
                      id="facebook-share"
                      title="Share on Facebook"
                      className="btn btn-social-icon btn-facebook share-popup"
                      target="/bu"
                      href="https://www.facebook.com/sharer/sharer.php?u=https%3A//tuteria.com/biolao/"
                    >
                      <i className="fa fa-facebook" />
                    </a>
                  </li>
                  <li>
                    <a
                      target="/bu"
                      title="Share on Twitter"
                      className="btn btn-social-icon btn-twitter share-popup"
                      href="https://twitter.com/home?status=https%3A//tuteria.com/biolao/"
                    >
                      <i className="fa fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a
                      id="google-share"
                      title="Share on Google+"
                      target="/bu"
                      href="https://plus.google.com/share?url=https%3A//tuteria.com/biolao/"
                      className="share-popup"
                    >
                      <img
                        src="https://www.gstatic.com/images/icons/gplus-32.png"
                        alt="Share on Google+"
                        data-pagespeed-url-hash="2633285453"
                        onload="pagespeed.CriticalImages.checkImageForCriticality(this);"
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      target="/bu"
                      title="Share on LinkedIn"
                      className="btn btn-social-icon btn-linkedin share-popup"
                      href="https://www.linkedin.com/shareArticle?mini=true&amp;url=https%3A//tuteria.com/biolao/&amp;source="
                    >
                      <i className="fa fa-linkedin" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default EditTutorProfile;
