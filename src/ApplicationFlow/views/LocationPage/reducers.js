// @flow
export const UPDATE_FIELD = "LOCATION-UPDATE-FIELD";
export const UPDATE_ALL_FIELDS = "LOCATION-UPDATE-ALL-FIELDS";
export type State = {
  +address: string,
  +state: string,
  +vicinity: string,
  +area: string,
  +latitude: number,
  +longitude: number
};
type GlobalState = {
  wizard: {
    location: State
  }
};

const defaultState = {
  address: "",
  state: "",
  vicinity: "",
  area: "",
  latitude: "",
  longitude: ""
};
export default (state: State = defaultState, action): State => {
  if (action.type === UPDATE_FIELD) {
    return { ...state, [action.key]: action.value };
  }
  if (action.type === UPDATE_ALL_FIELDS) {
    return { ...state, ...action.value };
  }
  return state;
};

export type Props = {
  data: State,
  customErrorMessages: Function,
  fieldHasError: Function
};
export const mapStateToProps = (state: GlobalState): Props => {
  const currentState = state.wizard["location"];
  // const errorMessages = allErrorMessages(currentState, DATA, true);
  const states = [
    "Abia",
    "Abuja",
    "Adamawa",
    "Akwa Ibom",
    "Anambra",
    "Bayelsa",
    "Bauchi",
    "Benue",
    "Borno",
    "Cross River",
    "Delta",
    "Edo",
    "Ebonyi",
    "Ekiti",
    "Enugu",
    "Gombe",
    "Imo",
    "Jigawa",
    "Kaduna",
    "Kano",
    "Katsina",
    "Kebbi",
    "Kogi",
    "Kwara",
    "Lagos",
    "Nassawara",
    "Niger",
    "Ogun",
    "Ondo",
    "Osun",
    "Oyo",
    "Plateau",
    "Rivers",
    "Sokoto",
    "Taraba",
    "Yobe",
    "Zamfara"
  ];
  const result = {
    data: currentState,
    // errorMessageForField,
    // errorMessages,
    // customErrorMessages,
    // fieldHasError,
    states
  };
  return result;
};
