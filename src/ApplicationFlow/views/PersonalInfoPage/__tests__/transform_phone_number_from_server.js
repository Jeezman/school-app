import { getErrorMessages, getPhoneFormErrorMessages } from "../utils";
import RAW_DATA from "../DATA";
const DATA = RAW_DATA.phone_forms;

describe("PhoneNumberValidation", () => {
  describe("validating number", () => {
    it("when field is valid", () => {
      let result = getErrorMessages(
        "number",
        "+2347035209922",
        DATA["form"]["number"]
      );
      expect(result).toEqual({
        isValid: true,
        errors: []
      });
    });
    it("when field is empty", () => {
      let result = getErrorMessages("number", "", DATA["form"]["number"]);
      expect(result).toEqual({
        isValid: false,
        errors: ["This field is required.", "Enter a valid phone number."]
      });
    });
    it("when field is invalid", () => {
      let result = getErrorMessages(
        "number",
        "+23409033445562",
        DATA["form"]["number"]
      );
      expect(result).toEqual({
        isValid: false,
        errors: ["Enter a valid phone number."]
      });
    });
  });
  describe("validating Phonenumber formset", () => {
    it("when only one number is set as valid", () => {
      let result = getPhoneFormErrorMessages([
        {
          number: "+2348033009922",
          primary: true
        },
        {
          number: " +2343023322522",
          primary: false
        }
      ]);
      expect(result).toEqual({
        isValid: true,
        errors: []
      });
      result = getPhoneFormErrorMessages([
        {
          number: "+2348033009922",
          primary: true
        }
      ]);
      expect(result).toEqual({
        isValid: true,
        errors: []
      });
    });
    it("when more than one number is set as valid", () => {
      const result = getPhoneFormErrorMessages([
        {
          number: "+2348033009922",
          primary: true
        },
        {
          number: " +2343023322522",
          primary: true
        }
      ]);
      expect(result).toEqual({
        isValid: false,
        errors: ["Only one number can be set as primary at any given time."]
      });
    });
  });
});
