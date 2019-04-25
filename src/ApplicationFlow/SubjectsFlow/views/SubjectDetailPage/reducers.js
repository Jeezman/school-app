// @flow
import DATA from "./DATA";
import {
  allErrorMessages,
  cherryPickErrors,
  customErrorMessages as ErrorMessageFunc,
  hasAllQuestionsBeenAnswered,
  generateQuestionErrorMessages,
  evaluateResult,
  getSubjectDetails
} from "./utils";
import { mapStateToProps as SubjectList } from "../SubjectListPage/reducers";
import { combineReducers } from "redux";
import type { OverviewStateType, CertificationFieldType } from "./types";
export const OVERVIEW_UPDATE_FIELD = "OVERVIEW_UPDATE_ALL_FIELDS";
export const PRICING_UPDATE_FIELD = "PRICING_UPDATE_ALL_FIELDS";
const overviewDefaultState = {
  title: "Hello World",
  description: "",
  certifications: [],
  questions: {
    "JSS-1": ["JSCE"]
  },
  curriculums: [],
  selectedClasses: ["JSS 3"]
};

export const overviewPageReducer = (
  state: OverviewStateType = overviewDefaultState,
  action: {
    type: string,
    value: OverviewStateType
  }
) => {
  if (action.type === OVERVIEW_UPDATE_FIELD) {
    return { ...state, ...action.value };
  }
  return state;
};
export const pricingPageReducer = (state = {}, action) => {
  if (action.type === PRICING_UPDATE_FIELD) {
    return { ...state, ...action.value };
  }
  return state;
};
export const portfolioPageReducer = (state = {}, action) => {
  return state;
};
export const requirementPageReducer = (state = {}, action) => {
  return state;
};
export default combineReducers({
  overview: overviewPageReducer,
  pricing: pricingPageReducer,
  portfolio: portfolioPageReducer,
  requirements: requirementPageReducer
});

export const externalStateToProps = (state, ownProps) => {
  const valid = SubjectList(state).selectedSubjects.filter(x => x.taken);
  const subjects = valid.filter(x => x.score.passed);
  const logic = (slug, instance = false) => {
    const slugs = subjects.map(x => (instance ? x.subject : x.subject.slug));
    if (instance) {
      return slugs.find(x => x.slug === slug);
    }
    return slugs.indexOf(slug) > -1;
  };
  return { logic, ...ownProps };
};

export const mapStateToProps = (state, ownProps) => {
  const { logic } = externalStateToProps(state, ownProps);
  const subject = logic(ownProps.slug, true);
  const questions = getSubjectDetails(subject);
  return { subject, questions, ...ownProps };
};
export const pricingStateToProps = (state, ownProps) => {
  const data = state.subjects["subject-detail"].pricing;
  return {
    data,
    ...ownProps
  };
};
export const detailStateToProps = (state, ownProps) => {
  const data = state.subjects["subject-detail"].overview;
  const GetValidationFunc = (certification: CertificationFieldType) => {
    const errorMessages = allErrorMessages(
      certification,
      DATA.certification_form.form,
      true
    );
    const customErrorMessage = (...fields) => {
      const st = cherryPickErrors(errorMessages, ...fields);
      const result = ErrorMessageFunc("is required", st);
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
  const allQuestionErrors = appState => {
    return generateQuestionErrorMessages(appState, ownProps);
  };
  const canSubmit = appState => {
    return hasAllQuestionsBeenAnswered(appState, ownProps);
  };
  return {
    data,
    GetValidationFunc,
    allQuestionErrors,
    canSubmit,
    ...ownProps
  };
};
