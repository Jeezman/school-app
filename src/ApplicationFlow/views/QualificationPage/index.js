// @flow
import React from "react";
import styled from "styled-components";
import { Col as Column } from "react-grid-system";
import { connect } from "react-redux";

import {
  Checkbox,
  Div,
  ErrorBlock,
  Flag,
  FormComponent,
  FormInput,
  Formset,
  globals,
  Icon,
  InputAddon,
  InputComponent,
  LinkedinImport,
  Option,
  Select as FormSelect,
  SFlag,
  SpecialColumn,
  ToggleSwitch,
  WizardWrapper
} from "../components/index";
import {
  mapStateToProps,
  UPDATE_ALL_FIELD,
  Props,
  EducationType
} from "./reducers";
const { siteText } = globals;

const lightWeight = "300";
export const ShareContainer = styled.div`
  display: flex;
  padding: 0 15px 0;
  align-items: center;
  margin-bottom: 50px;

  & p {
    color: #47525d;
    font-size: 17px;
    font-weight: ${lightWeight};
    padding-right: 33px;
    margin: 0;
  }
  & .toggle-group {
    display: block;
    margin-top: auto;
    margin-bottom: auto;
  }
`;

class QualificationPage extends React.Component<Props> {
  state = {
    currentlyWork: true,
    educations: [],
    currentEducationId: "",
    currentWorkExperienceId: "",
    workExperiences: [],
    errors: {
      educations: false,
      workExperiences: false
    },
    fetched: false,
    raw: {
      educations: [],
      workExperiences: []
    }
  };
  changeCurrentlyWork = () => {
    this.setState(state => ({ ...state, currentlyWork: !state.currentlyWork }));
  };
  componentDidMount() {
    const { educations, workExperiences } = this.props.data;
    this._addQualification("educations", educations);
    this._addQualification("workExperiences", workExperiences);
    this.setState({ fetched: true });
  }

  updateItem = (data, index, key, updateParent) => {
    this.setState(state => {
      const oldState = state.raw[key].map((x, i) => {
        if (i === index) {
          x = { ...x, ...data };
        }
        return x;
      });
      const raw = { ...state.raw, [key]: oldState };
      if (updateParent) {
        return { ...state, raw, [key]: oldState };
      }
      return { ...state, raw };
    });
  };
  updateParent = (data, updateParent, key) => {
    this.setState(state => {
      const raw = { ...state.raw, [key]: data };
      return { ...state, raw, [key]: data };
    });
  };
  validateSingleQualification(qualification = {}, key) {
    const { errorMessages } = this.props.GetValidationFunc(qualification, key);
    return Object.keys(errorMessages).length === 0;
  }
  _validateLastForm(data, key) {
    if (Object.values(data).length === 0) {
      return true;
    }
    return this.validateSingleQualification(data, key);
  }
  validateLastForm = key => {
    const item = this.state.raw[key];
    return this._validateLastForm(item[item.length - 1], key);
  };
  toggleError = _type => {
    this.setState(state => ({
      ...state,
      errors: { ...state.errors, [_type]: true }
    }));
  };
  _addQualification = (_type, newValue) => {
    this.setState(state => {
      const value = newValue || state.raw[_type];
      if (value.length < 2) {
        value.push({});
      }
      return {
        ...state,
        [_type]: value,
        raw: { ...state.raw, [_type]: value },
        errors: { ...state.errors, [_type]: false }
      };
    });
  };
  addNewQualification = (_type, newValue) => {
    if (this.validateSingleQualification(this.state.raw[_type][0], _type)) {
      this._addQualification(_type, newValue);
    } else {
      this.toggleError(_type);
    }
  };

  onEditQualification = (status, index, key) => {
    this.setState(state => {
      let stateKey =
        key === "educations" ? "currentEducationId" : "currentWorkExperienceId";
      let newIndex = "";
      if (status) {
        newIndex = index;
      }
      return { ...state, [stateKey]: newIndex };
    });
  };
  deleteItem = (index, key) => {
    this.setState(state => ({
      ...state,
      [key]: this.state[key].filter((x, ind) => index !== ind)
    }));
    this.onEditQualification(false, null, key);
  };
  previousPage = () => {
    this.props.navigateTo(1, "", "location");
  };
  hasError = () => {
    const { educations, workExperiences } = this.state.raw;
    const result =
      educations.length > 0 &&
      workExperiences.length > 0 &&
      Object.values(educations[0]).length > 0 &&
      Object.values(workExperiences[0]).length > 0;
    return result;
  };
  nextPage = () => {
    const educationIsValid = this.validateLastForm("educations");
    const weIsValid = this.validateLastForm("workExperiences");
    if (this.hasError()) {
      if (educationIsValid && weIsValid) {
        const { educations, workExperiences } = this.state.raw;
        this.props.dispatch({
          type: UPDATE_ALL_FIELD,
          value: {
            workExperiences: workExperiences.filter(
              x => Object.values(x).length > 0
            ),
            educations: educations.filter(x => Object.values(x).length > 0)
          }
        });
        this.props.navigateTo(2, 20, "qualifications", "about-tutor");
      } else {
        if (!educationIsValid) {
          this.toggleError("educations");
        }
        if (!weIsValid) {
          this.toggleError("workExperiences");
        }
      }
    }
  };
  render() {
    const { GetValidationFunc } = this.props;
    const getProgress = () => {
      const progress = this.props.progressBar.reduce(
        (sum, value) => sum + value,
        0
      );
      return progress;
    };

    return (
      <WizardWrapper
        nextButtonText="Next: Add Profile"
        showPreviousScreen={true}
        showNextScreen={!!this.hasError() === false}
        goToNextScreen={this.nextPage}
        goToPreviousScreen={this.previousPage}
        title="Credentials & Education"
        progress={getProgress()}
      >
        <Column xs={12} sm={12} md={12} lg={8}>
          <Column>
            <Div>
              <h2>Education</h2>
              <p>
                Enter your highest educational qualification or credentials,
                whether in-view or completed
              </p>
            </Div>
          </Column>
          <form>
            <Formset
              formset={this.state.educations}
              heading={({ degree }) => degree}
              subtitle={({ school, country }) => `${school} | ${country}`}
              formId={({ school, degree, country, course }) =>
                school && degree && country && course
              }
              GetValidationFunc={singleQualification =>
                GetValidationFunc(singleQualification, "educations")
              }
              addText="Add another school"
              fetched={this.state.fetched}
              updateParent={(data, updateParent) =>
                this.updateParent(data, updateParent, "educations")
              }
              errors={this.state.errors.educations}
              showDivider={true}
              updateErrors={status =>
                this.setState({
                  errors: {
                    ...this.state.errors,
                    educations: status
                  }
                })
              }
            >
              {(
                state: EducationType,
                updateField: Function,
                { customErrorMessage, errorMessageForField, fieldHasError }
              ) => (
                <div>
                  <InputComponent
                    label="Name of School"
                    error={fieldHasError("school")}
                    error_message={errorMessageForField("school")}
                    defaultValue={state.school}
                    updateText={val => updateField(val, "school")}
                    placeholder="University of Lagos"
                  />

                  <InputComponent
                    label="Course of Study"
                    error={fieldHasError("course")}
                    error_message={errorMessageForField("course")}
                    defaultValue={state.course}
                    updateText={val => updateField(val, "course")}
                    placeholder="Mechanical Engineering"
                  />
                  <SpecialColumn>
                    <FormComponent
                      noColumn
                      label="Degree"
                      error={fieldHasError("degree")}
                      error_message={errorMessageForField("degree")}
                    >
                      <FormSelect
                        onChange={value => {
                          updateField(value, "degree");
                        }}
                        noColumn
                        value={state.degree}
                      >
                        <Option value="Bachelor of Science (B.Sc.)">
                          Bachelor of Science (B.Sc.)
                        </Option>
                        <Option value="Ordinary National Diploma (O.N.D)">
                          Ordinary National Diploma (O.N.D)
                        </Option>
                        <Option value="Higher National Diploma (H.N.D)">
                          Higher National Diploma (H.N.D)
                        </Option>
                      </FormSelect>
                    </FormComponent>
                    <FormComponent
                      noColumn
                      label="Country"
                      error_message={errorMessageForField("country")}
                      error={fieldHasError("country")}
                    >
                      <InputAddon noColumn>
                        <Flag>
                          <SFlag style={{ padding: 13 }} name="ng" />
                        </Flag>
                        <FormSelect
                          noColumn
                          onChange={value => {
                            updateField(value, "country");
                          }}
                          value={state.country}
                        >
                          <Option value="Nigeria">Nigeria</Option>
                        </FormSelect>
                      </InputAddon>
                    </FormComponent>
                  </SpecialColumn>
                  {fieldHasError("degree") || fieldHasError("country") ? (
                    <Column className="c-errmessage">
                      <ErrorBlock>
                        {customErrorMessage("degree", "country")}
                      </ErrorBlock>
                    </Column>
                  ) : null}
                </div>
              )}
            </Formset>

            {/* Work on experience starts here */}
            <Column>
              <Div>
                <h2>Work Experience</h2>
                <p>
                  Adding the work experiences you've had will add more
                  credibility to your profile and helps establish your
                  enterprise
                </p>
              </Div>
            </Column>
            <Formset
              formset={this.state.workExperiences}
              formId={({ name, role }) => name && role}
              heading={({ name }) => name}
              subtitle={({ role, currently_work }) =>
                `${role} | ${currently_work ? "| Currently Working" : ""}`
              }
              GetValidationFunc={singleQualification =>
                GetValidationFunc(singleQualification, "workExperiences")
              }
              addText="Add another work experience"
              fetched={this.state.fetched}
              updateParent={(data, updateParent) =>
                this.updateParent(data, updateParent, "workExperiences")
              }
              errors={this.state.errors.workExperiences}
              updateErrors={status =>
                this.setState({
                  errors: {
                    ...this.state.errors,
                    workExperiences: status
                  }
                })
              }
            >
              {(
                state,
                updateField,
                { customErrorMessage, errorMessageForField, fieldHasError }
              ) => (
                <div>
                  <InputComponent
                    label="Name of company"
                    error={fieldHasError("name")}
                    error_message={errorMessageForField("name")}
                    defaultValue={state.name}
                    updateText={val => updateField(val, "name")}
                    placeholder="Delloitte Nigeria Limited"
                  />

                  <InputComponent
                    label="Your role"
                    error={fieldHasError("role")}
                    error_message={errorMessageForField("rol")}
                    defaultValue={state.role}
                    updateText={val => updateField(val, "role")}
                    placeholder="Data Scientist"
                  />
                  <FormComponent>
                    <Checkbox
                      innerColor="#36B37E"
                      checked={!!state.currently_work}
                      onChange={e => {
                        updateField(e.target.checked, "currently_work");
                      }}
                      text="I currently work here"
                    />
                  </FormComponent>
                  <ShareContainer>
                    <p>Share this work experience with clients</p>
                    <ToggleSwitch
                      checked={!!state.is_private}
                      onChange={e => {
                        updateField(e.target.checked, "is_private");
                      }}
                    />
                  </ShareContainer>
                </div>
              )}
            </Formset>
          </form>
        </Column>
        <LinkedinImport />
      </WizardWrapper>
    );
  }
}

export default connect(mapStateToProps)(QualificationPage);
