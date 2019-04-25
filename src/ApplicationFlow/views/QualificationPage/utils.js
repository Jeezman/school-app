// @flow
import {
  getErrorMessages,
  cherryPickErrors,
  customErrorMessages
} from "../PersonalInfoPage/utils";

export function allErrorMessages(state, DATA, allErrors = false) {
  let result = {};
  let keys = Object.keys(state);
  const qualifications = [
    "school",
    "course",
    "degree",
    "country",
    "name",
    "role"
  ];
  if (allErrors) {
    keys = [...qualifications];
  }
  keys = [...new Set([...keys].filter(x => new Set(Object.keys(DATA)).has(x)))];
  const results = keys.map(key => {
    let value = state[key] || "";
    if (qualifications.indexOf(key) > -1) {
      return {
        key,
        value: getErrorMessages(key, value, DATA[key])
      };
    } else {
      return {
        key,
        value: { isValid: true, errors: [] }
      };
    }
  });
  const withErrors = results.filter(x => !x.value.isValid);
  withErrors.forEach(x => {
    result[x.key] = x.value.errors;
  });
  return result;
}

export { getErrorMessages };
export { cherryPickErrors };
export { customErrorMessages };
