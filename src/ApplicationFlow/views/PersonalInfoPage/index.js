// @flow
import React from "react";
import styled from "styled-components";
import { Select as FormSelect, Option } from "../../components/simple/Select";
import { Col as Column } from "react-grid-system";
import range from "lodash/range";
import { connect } from "react-redux";
import PhoneNumberSet from "./CountryAndPhoneNumber";
import { mapStateToProps, UPDATE_FIELD, Props } from "./reducers";

import {
  FormComponent,
  FormInput,
  ErrorBlock,
  globals,
  InputComponent,
  LinkedinImport,
  Radio,
  SpecialColumn,
  Special3Column,
  WizardWrapper,
  Div
} from "../components/index";
const { xs } = globals;
export const Label = styled.label`
  color: #666666;
  font-family: "Circular Book";
  font-size: 17px;
  font-weight: bold;
  line-height: 21px;
  margin-bottom: 9px;
`;

export const HelpBlock = styled.div`
  margin-top: 8px;
`;

export const RadioButton = styled.div`
  display: inline-block;
  & label {
    margin-right: 12px;
    & .control__indicator:checked {
      border: 2px solid #ffffff;
    }
  }
`;

const DateComponent = ({
  error_message,
  fieldHasError,
  updateDate,
  components,
  dob
}) => {
  const mobile = window.matchMedia(`(max-width: ${xs}px)`);
  return (
    <Special3Column>
      <FormComponent
        label="Birth Date"
        error_message={error_message}
        error={fieldHasError("dob")}
        noColumn
      >
        <div className="db-container">
          {components.map((component, ind) => {
            const options = component.options.map((m, index) => (
              <Option key={`${component.key} ${index}`} value={m}>
                {mobile.matches
                  ? typeof m === "string" ? m.slice(0, 3).toUpperCase() : m
                  : m}
              </Option>
            ));
            return (
              <FormSelect
                error={fieldHasError("dob", component.key)}
                key={ind}
                onChange={val => updateDate(val, component.key)}
                value={dob[component.key]}
                className="select"
                defaultText={`Select ${component.key[0].toUpperCase()}${component.key.slice(
                  1
                )}`}
                getText={value =>
                  mobile.matches
                    ? typeof value === "string"
                      ? value.slice(0, 3).toUpperCase()
                      : value
                    : value
                }
                noColumn
              >
                <Option value="">{`${mobile.matches ? "" : "Select "}${
                  component.text
                }`}</Option>
                {options}
              </FormSelect>
            );
          })}
        </div>
      </FormComponent>
    </Special3Column>
  );
};
class PersonalInfoPage extends React.Component<Props> {
  state = {
    display_error: false
  };
  updateParentData = (field, value) => {
    this.props.dispatch({ type: UPDATE_FIELD, key: field, value });
  };
  updateLocalState(key, value) {
    this.setState(state => {
      let fields = state["fields"];
      fields = { ...fields, [key]: value };
      return { ...state, fields };
    });
  }
  changeGender = e => {
    const gender = e.target.value;
    this.updateParentData("gender", gender);
  };
  updateField = (field, event) => {
    const value = event.target.value;
    this.updateParentData(field, value);
  };
  updateDate = (val, key) => {
    const dob = { ...this.props.data.dob, [key]: val };
    this.updateParentData("dob", dob);
  };
  updateNumbersAndCountry = obj => {
    this.updateParentData("country", obj.country);
    this.updateParentData("phone_numbers", obj.phone_numbers);
  };
  fieldHasError = (field, specific) => {
    return this.props.fieldHasError(this.state.display_error, field, specific);
  };
  formHasErrors = () => {
    const { errorMessages } = this.props;
    return Object.keys(errorMessages).length === 0;
  };
  validateForm = () => {
    if (this.formHasErrors()) {
      this.props.navigateTo(0, 20, "personal-info", "location");
    } else {
      this.setState(state => ({ ...state, display_error: true }));
    }
  };
  render() {
    console.log("inside personal info page", this.props);
    const genders = [
      { value: "M", text: "Male" },
      { value: "F", text: "Female" }
    ];
    const state = this.props.data;
    const components = [
      {
        options: [
          "January",
          "Febuary",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December"
        ],
        mobile: "MM",
        key: "month",
        text: "Month"
      },
      { options: range(1, 31), key: "day", text: "Day", mobile: "DD" },
      { options: range(1940, 2013), key: "year", text: "Year", mobile: "YYYY" }
    ];

    const countries = [
      { locale: "", text: "Select Country", code: "" },
      { locale: "NG", text: "Nigeria", code: "234" }
    ];
    const first_last_error = this.props.customErrorMessages(
      "first_name",
      "last_name"
    );
    const { errorMessageForField } = this.props;
    const getProgress = () => {
      console.log("inside getProgress function", this.props.progressBar);
      const progress = this.props.progressBar.reduce(
        (sum, value) => sum + value,
        0
      );
      console.log("inside getProgress function ", progress);
      return progress;
    };
    return (
      <WizardWrapper
        nextButtonText="Next: Add My Street Address"
        goToNextScreen={this.validateForm}
        showNextScreen={!this.formHasErrors()}
        title="Basic profile"
        progress={getProgress()}
      >
        <Column xs={12} sm={12} md={12} lg={8}>
          <Column>
            <Div>
              <h2>Let’s add your personal details</h2>
              <p>
                Make sure you enter all details correctly. All your details are
                safe with us and will never be shared with anyone.
              </p>
            </Div>
          </Column>
          <form>
            <SpecialColumn>
              <InputComponent
                noColumn
                label="First Name"
                error_message={errorMessageForField("first_name")}
                error={this.fieldHasError("first_name")}
                style={{ marginBottom: 10 }}
                defaultValue={state.first_name}
                updateText={val => this.updateParentData("first_name", val)}
                placeholder="First Name"
              />

              <InputComponent
                noColumn
                label="Last Name"
                error_message={errorMessageForField("last_name")}
                error={this.fieldHasError("last_name")}
                style={{ marginBottom: 10 }}
                defaultValue={state.first_name}
                updateText={val => this.updateParentData("last_name", val)}
                placeholder="Last Name"
              />
            </SpecialColumn>
            {this.fieldHasError("first_name") ||
            this.fieldHasError("last_name") ? (
              <Column className="c-errmessage">
                <ErrorBlock>{first_last_error}</ErrorBlock>
              </Column>
            ) : null}

            <InputComponent
              label="Email Address"
              error_message={errorMessageForField("email")}
              error={this.fieldHasError("email")}
              style={{ marginBottom: 10 }}
              defaultValue={state.email}
              updateText={val => this.updateParentData("email", val)}
              placeholder="Email Address"
            />

            <FormComponent
              error_message={errorMessageForField("gender")}
              error={this.fieldHasError("gender")}
              label="Gender"
              labelStyle={{ display: "inline-block", marginRight: 10 }}
            >
              <RadioButton>
                {genders.map((gender, index) => (
                  <Radio
                    key={"gender" + index}
                    innerColor="#36B37E"
                    onChange={this.changeGender}
                    text={gender.text}
                    name="gender"
                    value={gender.value}
                    checked={state.gender === gender.value}
                  />
                ))}
              </RadioButton>
            </FormComponent>
            <DateComponent
              error_message={this.props.customErrorMessages("dob")}
              fieldHasError={this.fieldHasError}
              updateDate={this.updateDate}
              components={components}
              dob={state.dob}
            />

            <PhoneNumberSet
              errorMessageForField={errorMessageForField}
              fieldHasError={this.fieldHasError}
              customErrorMessages={this.props.customErrorMessages}
              countries={countries}
              display_error={this.state.display_error}
              value={{
                country: state.country,
                phone_numbers: state.phone_numbers
              }}
              updateGlobalData={this.updateNumbersAndCountry}
            />
          </form>
        </Column>
        <LinkedinImport />
      </WizardWrapper>
    );
  }
}
export default connect(mapStateToProps)(PersonalInfoPage);
