import { getErrorMessages } from "../utils";
import RAW_DATA from "../DATA";
const DATA = RAW_DATA.basic_profile_form;
function generalCharField(name) {
  describe(`validating ${name}`, () => {
    it("should return an object consiting indicating the validation status and the errors", () => {
      const result = getErrorMessages(name, "", DATA[name]);
      expect(result).toEqual({
        isValid: false,
        errors: ["This field is required."]
      });
    });
    it("when a valid input is supplied", () => {
      const result = getErrorMessages(name, "Biola", DATA[name]);
      expect(result).toEqual({
        isValid: true,
        errors: []
      });
    });
  });
}
function generalChoicField(name, value) {
  describe(`validating ${name}`, () => {
    it("when no value is selected", () => {
      const result = getErrorMessages(name, "", DATA[name]);
      expect(result).toEqual({
        isValid: false,
        errors: ["Select one of the choices provided."]
      });
    });
    it("when a valid choice is given", () => {
      const result = getErrorMessages(name, value, DATA[name]);
      expect(result).toEqual({
        isValid: true,
        errors: []
      });
    });
  });
}
function selectOneOption(field, dateValue) {
  it(`when only ${field} is selected`, () => {
    const result = getErrorMessages("dob", dateValue, DATA["dob"]);
    const options = ["day", "month", "year"];
    const errors = options
      .filter(x => x !== field)
      .map(x => ({ [x]: `A ${x} is required.` }));
    expect(result).toEqual({
      isValid: false,
      errors
    });
  });
}
function selectTwoOptions(field1, field2, dateValue) {
  it(`when ${field1} and ${field2} is selected`, () => {
    const result = getErrorMessages("dob", dateValue, DATA["dob"]);
    const options = ["day", "month", "year"];
    const errors = options
      .filter(x => [field1, field2].indexOf(x) === -1)
      .map(x => ({ [x]: `A ${x} is required.` }));
    expect(result).toEqual({
      isValid: false,
      errors
    });
  });
}
describe("getErrorMessages", () => {
  generalCharField("first_name");
  generalCharField("last_name");
  describe("validating email", () => {
    it("when a valid input is supplied", () => {
      const result = getErrorMessages(
        "email",
        "james@example.com",
        DATA["email"]
      );
      expect(result).toEqual({
        isValid: true,
        errors: []
      });
    });
    it("when no email is supplied", () => {
      const result = getErrorMessages("email", "", DATA["email"]);
      expect(result).toEqual({
        isValid: false,
        errors: ["This field is required.", "This email is invalid."]
      });
    });
    it("when invalid email is supplied", () => {
      const result = getErrorMessages("email", "james", DATA["email"]);
      expect(result).toEqual({
        isValid: false,
        errors: ["This email is invalid."]
      });
    });
  });
  generalChoicField("gender", "M");
  generalChoicField("country", "NG");
  describe("validating dob", () => {
    it("when no value is selected", () => {
      const result = getErrorMessages("dob", "", DATA["dob"]);
      expect(result).toEqual({
        isValid: false,
        errors: [
          { day: "A day is required." },
          { month: "A month is required." },
          { year: "A year is required." }
        ]
      });
    });

    const day = 11,
      month = 5,
      year = 2003;
    selectOneOption("day", { day });
    selectOneOption("month", { month });
    selectOneOption("year", { year });
    selectTwoOptions("day", "month", { day, month });
    selectTwoOptions("day", "year", { day, year });
    selectTwoOptions("month", "year", { month, year });
    it("when all date fields are selected", () => {
      const result = getErrorMessages("dob", { day, month, year }, DATA["dob"]);
      expect(result).toEqual({
        isValid: true,
        errors: []
      });
    });
  });
});
