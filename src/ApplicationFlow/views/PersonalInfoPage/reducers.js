// @flow
import DATA from "./DATA";
import {
  allErrorMessages,
  cherryPickErrors,
  customErrorMessages as ErroMessageFunc
} from "./utils";
export const UPDATE_FIELD = "PERSONAL_INFO_UPDATE_FIELD";
type State = {
  +first_name: string,
  +last_name: string,
  +email: string,
  +dob: {
    day: number,
    month: number,
    year: number
  },
  +country: string,
  +phone_numbers: Array<{
    +number: string,
    +primary: boolean
  }>
};
type GlobalState = {
  wizard: {
    +"personal-info": State
  }
};
const defaultState = {
  first_name: "",
  last_name: "",
  email: "",
  dob: {
    day: "",
    month: "",
    year: ""
  },
  phone_numbers: [],
  country: "",
  gender: ""
};
export default (state: State = defaultState, action): State => {
  if (action.type === UPDATE_FIELD) {
    return { ...state, [action.key]: action.value };
  }
  return state;
};
export type Props = {
  data: any,
  customErrorMessages: Function,
  errorMessageForField: Function,
  fieldHasError: Function
};
const countries = [
  { text: "Afghanistan", locale: "af", code: "93" },
  { text: "Albania", locale: "al", code: "355" },
  { text: "Algeria", locale: "dz", code: "213" },
  { text: "American Samoa", locale: "as", code: "1-684" },
  { text: "Andorra", locale: "ad", code: "376" },
  { text: "Angola", locale: "ao", code: "244" },
  { text: "Anguilla", locale: "ai", code: "1-264" },
  { text: "Antigua", locale: "ag", code: "1-268" },
  { text: "Argentina", locale: "ar", code: "54" },
  { text: "Armenia", locale: "am", code: "" },
  { text: "Aruba", locale: "aw", code: "" },
  { text: "Australia", locale: "au", code: "" },
  { text: "Austria", locale: "at", code: "" },
  { text: "Azerbaijan", locale: "az", code: "" },
  { text: "Bahamas", locale: "bs", code: "" },
  { text: "Bahrain", locale: "bh", code: "" },
  { text: "Bangladesh", locale: "bd", code: "" },
  { text: "Barbados", locale: "bb", code: "" },
  { text: "Belarus", locale: "by", code: "" },
  { text: "Belgium", locale: "be", code: "" },
  { text: "Belize", locale: "bz", code: "" },
  { text: "Benin", locale: "bj", code: "" },
  { text: "Bermuda", locale: "bm", code: "" },
  { text: "Bhutan", locale: "bt", code: "" },
  { text: "Bolivia", locale: "bo", code: "" },
  { text: "Bosnia", locale: "ba", code: "" },
  { text: "Botswana", locale: "bw", code: "" },
  { text: "Bouvet Island", locale: "bv", code: "" },
  { text: "Brazil", locale: "br", code: "" },
  { text: "British Virgin Islands", locale: "vg", code: "" },
  { text: "Brunei", locale: "bn", code: "" },
  { text: "Bulgaria", locale: "bg", code: "" },
  { text: "Burkina Faso", locale: "bf", code: "" },
  { text: "Burma", locale: "mm", alias: "Myanmar", code: "" },
  { text: "Burundi", locale: "bi", code: "" },
  { text: "Caicos Islands", locale: "tc", code: "" },
  { text: "Cambodia", locale: "kh", code: "" },
  { text: "Cameroon", locale: "cm", code: "" },
  { text: "Canada", locale: "ca", code: "" },
  { text: "Cape Verde", locale: "cv", code: "" },
  { text: "Cayman Islands", locale: "ky", code: "" },
  { text: "Central African Republic", locale: "cf", code: "" },
  { text: "Chad", locale: "td", code: "" },
  { text: "Chile", locale: "cl", code: "" },
  { text: "China", locale: "cn", code: "" },
  { text: "Christmas Island", locale: "cx", code: "" },
  { text: "Cocos Islands", locale: "cc", code: "" },
  { text: "Colombia", locale: "co", code: "" },
  { text: "Comoros", locale: "km", code: "" },
  { text: "Congo", locale: "cd", code: "" },
  { text: "Congo Brazzaville", locale: "cg", code: "" },
  { text: "Cook Islands", locale: "ck", code: "" },
  { text: "Costa Rica", locale: "cr", code: "" },
  { text: "Cote Divoire", locale: "ci", code: "" },
  { text: "Croatia", locale: "hr", code: "" },
  { text: "Cuba", locale: "cu", code: "" },
  { text: "Cyprus", locale: "cy", code: "" },
  { text: "Czech Republic", locale: "cz", code: "" },
  { text: "Denmark", locale: "dk", code: "" },
  { text: "Djibouti", locale: "dj", code: "" },
  { text: "Dominica", locale: "dm", code: "" },
  { text: "Dominican Republic", locale: "do", code: "" },
  { text: "Ecuador", locale: "ec", code: "" },
  { text: "Egypt", locale: "eg", code: "" },
  { text: "El Salvador", locale: "sv", code: "" },
  { text: "Equatorial Guinea", locale: "gq", code: "" },
  { text: "Eritrea", locale: "er", code: "" },
  { text: "Estonia", locale: "ee", code: "" },
  { text: "Ethiopia", locale: "et", code: "" },
  { text: "Europeanunion", locale: "eu", code: "" },
  { text: "Falkland Islands", locale: "fk", code: "" },
  { text: "Faroe Islands", locale: "fo", code: "" },
  { text: "Fiji", locale: "fj", code: "" },
  { text: "Finland", locale: "fi", code: "" },
  { text: "France", locale: "fr", code: "" },
  { text: "French Guiana", locale: "gf", code: "" },
  { text: "French Polynesia", locale: "pf", code: "" },
  { text: "French Territories", locale: "tf", code: "" },
  { text: "Gabon", locale: "ga", code: "" },
  { text: "Gambia", locale: "gm", code: "" },
  { text: "Georgia", locale: "ge", code: "" },
  { text: "Germany", locale: "de", code: "" },
  { text: "Ghana", locale: "gh", code: "" },
  { text: "Gibraltar", locale: "gi", code: "" },
  { text: "Greece", locale: "gr", code: "" },
  { text: "Greenland", locale: "gl", code: "" },
  { text: "Grenada", locale: "gd", code: "" },
  { text: "Guadeloupe", locale: "gp", code: "" },
  { text: "Guam", locale: "gu", code: "" },
  { text: "Guatemala", locale: "gt", code: "" },
  { text: "Guinea", locale: "gn", code: "" },
  { text: "Guinea-Bissau", locale: "gw", code: "" },
  { text: "Guyana", locale: "gy", code: "" },
  { text: "Haiti", locale: "ht", code: "" },
  { text: "Heard Island", locale: "hm", code: "" },
  { text: "Honduras", locale: "hn", code: "" },
  { text: "Hong Kong", locale: "hk", code: "" },
  { text: "Hungary", locale: "hu", code: "" },
  { text: "Iceland", locale: "is", code: "" },
  { text: "India", locale: "in", code: "" },
  { text: "Indian Ocean Territory", locale: "io", code: "" },
  { text: "Indonesia", locale: "id", code: "" },
  { text: "Iran", locale: "ir", code: "" },
  { text: "Iraq", locale: "iq", code: "" },
  { text: "Ireland", locale: "ie", code: "" },
  { text: "Israel", locale: "il", code: "" },
  { text: "Italy", locale: "it", code: "" },
  { text: "Jamaica", locale: "jm", code: "" },
  { text: "Jan Mayen", locale: "sj", alias: "Svalbard", code: "" },
  { text: "Japan", locale: "jp", code: "" },
  { text: "Jordan", locale: "jo", code: "" },
  { text: "Kazakhstan", locale: "kz", code: "" },
  { text: "Kenya", locale: "ke", code: "" },
  { text: "Kiribati", locale: "ki", code: "" },
  { text: "Kuwait", locale: "kw", code: "" },
  { text: "Kyrgyzstan", locale: "kg", code: "" },
  { text: "Laos", locale: "la", code: "" },
  { text: "Latvia", locale: "lv", code: "" },
  { text: "Lebanon", locale: "lb", code: "" },
  { text: "Lesotho", locale: "ls", code: "" },
  { text: "Liberia", locale: "lr", code: "" },
  { text: "Libya", locale: "ly", code: "" },
  { text: "Liechtenstein", locale: "li", code: "" },
  { text: "Lithuania", locale: "lt", code: "" },
  { text: "Luxembourg", locale: "lu", code: "" },
  { text: "Macau", locale: "mo", code: "" },
  { text: "Macedonia", locale: "mk", code: "" },
  { text: "Madagascar", locale: "mg", code: "" },
  { text: "Malawi", locale: "mw", code: "" },
  { text: "Malaysia", locale: "my", code: "" },
  { text: "Maldives", locale: "mv", code: "" },
  { text: "Mali", locale: "ml", code: "" },
  { text: "Malta", locale: "mt", code: "" },
  { text: "Marshall Islands", locale: "mh", code: "" },
  { text: "Martinique", locale: "mq", code: "" },
  { text: "Mauritania", locale: "mr", code: "" },
  { text: "Mauritius", locale: "mu", code: "" },
  { text: "Mayotte", locale: "yt", code: "" },
  { text: "Mexico", locale: "mx", code: "" },
  { text: "Micronesia", locale: "fm", code: "" },
  { text: "Moldova", locale: "md", code: "" },
  { text: "Monaco", locale: "mc", code: "" },
  { text: "Mongolia", locale: "mn", code: "" },
  { text: "Montenegro", locale: "me", code: "" },
  { text: "Montserrat", locale: "ms", code: "" },
  { text: "Morocco", locale: "ma", code: "" },
  { text: "Mozambique", locale: "mz", code: "" },
  { text: "Namibia", locale: "na", code: "" },
  { text: "Nauru", locale: "nr", code: "" },
  { text: "Nepal", locale: "np", code: "" },
  { text: "Netherlands", locale: "nl", code: "" },
  { text: "Netherlandsantilles", locale: "an", code: "" },
  { text: "New Caledonia", locale: "nc", code: "" },
  { text: "New Guinea", locale: "pg", code: "" },
  { text: "New Zealand", locale: "nz", code: "" },
  { text: "Nicaragua", locale: "ni", code: "" },
  { text: "Niger", locale: "ne", code: "" },
  { text: "Nigeria", locale: "ng", code: "" },
  { text: "Niue", locale: "nu", code: "" },
  { text: "Norfolk Island", locale: "nf", code: "" },
  { text: "North Korea", locale: "kp", code: "" },
  { text: "Northern Mariana Islands", locale: "mp", code: "" },
  { text: "Norway", locale: "no", code: "" },
  { text: "Oman", locale: "om", code: "" },
  { text: "Pakistan", locale: "pk", code: "" },
  { text: "Palau", locale: "pw", code: "" },
  { text: "Palestine", locale: "ps", code: "" },
  { text: "Panama", locale: "pa", code: "" },
  { text: "Paraguay", locale: "py", code: "" },
  { text: "Peru", locale: "pe", code: "" },
  { text: "Philippines", locale: "ph", code: "" },
  { text: "Pitcairn Islands", locale: "pn", code: "" },
  { text: "Poland", locale: "pl", code: "" },
  { text: "Portugal", locale: "pt", code: "" },
  { text: "Puerto Rico", locale: "pr", code: "" },
  { text: "Qatar", locale: "qa", code: "" },
  { text: "Reunion", locale: "re", code: "" },
  { text: "Romania", locale: "ro", code: "" },
  { text: "Russia", locale: "ru", code: "" },
  { text: "Rwanda", locale: "rw", code: "" },
  { text: "Saint Helena", locale: "sh", code: "" },
  { text: "Saint Kitts and Nevis", locale: "kn", code: "" },
  { text: "Saint Lucia", locale: "lc", code: "" },
  { text: "Saint Pierre", locale: "pm", code: "" },
  { text: "Saint Vincent", locale: "vc", code: "" },
  { text: "Samoa", locale: "ws", code: "" },
  { text: "San Marino", locale: "sm", code: "" },
  { text: "Sandwich Islands", locale: "gs", code: "" },
  { text: "Sao Tome", locale: "st", code: "" },
  { text: "Saudi Arabia", locale: "sa", code: "" },
  { text: "Scotland", locale: "gb sct", code: "" },
  { text: "Senegal", locale: "sn", code: "" },
  { text: "Serbia", locale: "cs", code: "" },
  { text: "Serbia", locale: "rs", code: "" },
  { text: "Seychelles", locale: "sc", code: "" },
  { text: "Sierra Leone", locale: "sl", code: "" },
  { text: "Singapore", locale: "sg", code: "" },
  { text: "Slovakia", locale: "sk", code: "" },
  { text: "Slovenia", locale: "si", code: "" },
  { text: "Solomon Islands", locale: "sb", code: "" },
  { text: "Somalia", locale: "so", code: "" },
  { text: "South Africa", locale: "za", code: "" },
  { text: "South Korea", locale: "kr", code: "" },
  { text: "Spain", locale: "es", code: "" },
  { text: "Sri Lanka", locale: "lk", code: "" },
  { text: "Sudan", locale: "sd", code: "" },
  { text: "Suriname", locale: "sr", code: "" },
  { text: "Swaziland", locale: "sz", code: "" },
  { text: "Sweden", locale: "se", code: "" },
  { text: "Switzerland", locale: "ch", code: "" },
  { text: "Syria", locale: "sy", code: "" },
  { text: "Taiwan", locale: "tw", code: "" },
  { text: "Tajikistan", locale: "tj", code: "" },
  { text: "Tanzania", locale: "tz", code: "" },
  { text: "Thailand", locale: "th", code: "" },
  { text: "Timorleste", locale: "tl", code: "" },
  { text: "Togo", locale: "tg", code: "" },
  { text: "Tokelau", locale: "tk", code: "" },
  { text: "Tonga", locale: "to", code: "" },
  { text: "Trinidad", locale: "tt", code: "" },
  { text: "Tunisia", locale: "tn", code: "" },
  { text: "Turkey", locale: "tr", code: "" },
  { text: "Turkmenistan", locale: "tm", code: "" },
  { text: "Tuvalu", locale: "tv", code: "" },
  { text: "U.A.E.", locale: "ae", alias: "United Arab Emirates", code: "" },
  { text: "Uganda", locale: "ug", code: "" },
  { text: "Ukraine", locale: "ua", code: "" },
  { text: "United Kingdom", locale: "gb", code: "" },
  { text: "United States", locale: "us", alias: "America", code: "" },
  { text: "Uruguay", locale: "uy", code: "" },
  { text: "US Minor Islands", locale: "um", code: "" },
  { text: "US Virgin Islands", locale: "vi", code: "" },
  { text: "Uzbekistan", locale: "uz", code: "" },
  { text: "Vanuatu", locale: "vu", code: "" },
  { text: "Vatican City", locale: "va", code: "" },
  { text: "Venezuela", locale: "ve", code: "" },
  { text: "Vietnam", locale: "vn", code: "" },
  { text: "Wales", locale: "gb wls", code: "" },
  { text: "Wallis and Futuna", locale: "wf", code: "" },
  { text: "Western Sahara", countryCode: "eh", code: "" },
  { text: "Yemen", countryCode: "ye", code: "" },
  { text: "Zambia", countryCode: "zm", code: "" },
  { text: "Zimbabwe", countryCode: "zw", code: "" }
];
export const mapStateToProps = (state: GlobalState): Props => {
  const currentState = state.wizard["personal-info"];
  const errorMessages = allErrorMessages(currentState, DATA, true);
  const customErrorMessages = (...fields) => {
    const st = cherryPickErrors(errorMessages, ...fields);
    const result = ErroMessageFunc("is required", st);
    return result;
  };
  const errorMessageForField = (field, specific) => {
    let data = errorMessages[field] || [];
    if (specific) {
      if (field === "phone_numbers") {
        return data[specific] || [];
      }
      let result = data.filter(x => x[specific]).map(x => Object.values(x)[0]);
      return result;
    }
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

  const result = {
    data: currentState,
    errorMessages,
    customErrorMessages,
    errorMessageForField,
    fieldHasError
  };
  return result;
};
