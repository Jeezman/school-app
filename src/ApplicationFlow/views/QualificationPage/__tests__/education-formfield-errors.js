import { getErrorMessages } from "../utils";
import RAW_DATA from "../DATA";
const DATA = RAW_DATA.education_forms.form;

function generalCharField(name, error = "This field is required.") {
  describe(`validating ${name}`, () => {
    it("should return an object consiting indicating the validation status and the errors", () => {
      const result = getErrorMessages(name, "", DATA[name]);
      expect(result).toEqual({
        isValid: false,
        errors: [error]
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

function generalChoicField(
  name,
  value,
  error = "Select one of the choices provided."
) {
  describe(`validating ${name}`, () => {
    it("when no value is selected", () => {
      const result = getErrorMessages(name, "", DATA[name]);
      expect(result).toEqual({
        isValid: false,
        errors: [error]
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

describe("getErrorMessages", () => {
  generalCharField("school", "Please enter a school");
  generalCharField("course", "Please enter the course you studied");
  generalChoicField("degree", "Nigeria", "Please select a degree");
  generalCharField("country", "Please select a country");
});
