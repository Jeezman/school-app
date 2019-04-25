// @flow
import {
  allErrorMessages,
  cherryPickErrors,
  customErrorMessages as ErroMessageFunc
} from "./utils";
import DATA from "./DATA";
export const UPDATE_ALL_FIELD = "QUALIFICATION_UPDATE_FIELD";

/******************** REDUCER BEGINS HERE  **********************/
export type WorkExperienceType = {
  +name: string,
  +role: string,
  +currently_work: boolean,
  +is_private: boolean
};
export type EducationType = {
  +school: string,
  +course: string,
  +degree: string,
  +country: string
};
export type State = {
  educations: Array<EducationType>,
  work_experiences: Array<WorkExperienceType>
};
const initialState = {
  workExperiences: [
    // {
    //   company: "Delloite Nigeria Limited",
    //   role: "Data Scientist",
    //   currentWorkPlace: true
    // }
  ],
  educations: [
    // {
    //   school: "University of Benin",
    //   course: "Computer Science",
    //   degree: "Bachelor of Science (B.Sc)",
    //   country: "Nigeria"
    // }
  ]
};

export default (state: State = initialState, action): State => {
  if (action.type === UPDATE_ALL_FIELD) {
    return { ...state, ...action.value };
  }
  return state;
};
type GlobalState = {
  wizard: {
    +qualifcations: State
  }
};
export type Props = {
  data: State
};
const getKey = val => {
  const options = {
    educations: "education_forms",
    workExperiences: "work_experiences_forms"
  };
  let value = Object.values(options).find(x => x === val);
  if (value) {
    return value;
  }
  return options[val];
};
export const mapStateToProps = (state: GlobalState) => {
  const currentData = state.wizard.qualifications;

  const GetValidationFunc = (singleQualification, state_key) => {
    const key = getKey(state_key);
    const errorMessages = allErrorMessages(
      singleQualification,
      DATA[key].form,
      true
    );
    const customErrorMessage = (...fields) => {
      const st = cherryPickErrors(errorMessages, ...fields);
      const result = ErroMessageFunc("is required", st);
      return result;
    };
    const errorMessageForField = field => {
      return errorMessages[field] || [];
    };
    const fieldHasError = (display_error, field) => {
      let err;
      if (typeof field === "string") {
        err = errorMessageForField(field).length > 0;
      } else {
        err = field;
      }
      return display_error && err;
    };
    return {
      customErrorMessage,
      errorMessageForField,
      fieldHasError,
      errorMessages
    };
  };

  return {
    data: currentData,
    GetValidationFunc
  };
};
