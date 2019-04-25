import DATA from "./DATA";
import {
  allErrorMessages,
  cherryPickErrors,
  customErrorMessages as ErroMessageFunc
} from "./utils";
export const UPDATE_FIELD = "ABOUT_TUTOR_UPDATE_FIELD";
const defaultState = {
  online_experience: "",
  years_of_experience: "",
  title: "",
  description: ""
};
export default (state = defaultState, action) => {
  if (action.type === UPDATE_FIELD) {
    return { ...state, [action.key]: action.value };
  }
  return state;
};

export const mapStateToProps = state => {
  const currentState = state.wizard["about-tutor"];
  const errorMessages = allErrorMessages(
    currentState,
    DATA.tutor_description_form,
    true
  );
  const customErrorMessages = (...fields) => {
    const st = cherryPickErrors(errorMessages, ...fields);
    const result = ErroMessageFunc("is required", st);
    return result;
  };
  const errorMessageForField = (field, specific) => {
    let data = errorMessages[field] || [];
    return data;
  };
  const fieldHasError = (display_error, field, specific) => {
    let err;
    if (typeof field === "string") {
      err = errorMessageForField(field, specific).length > 0;
    } else {
      err = field;
    }
    return display_error && err;
  };
  return {
    data: currentState,
    fieldHasError,
    errorMessages,
    customErrorMessages,
    errorMessageForField
  };
};
