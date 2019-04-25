import { getErrorMessages } from "../utils";
import RAW_DATA from "../DATA";
const DATA = RAW_DATA.work_experiences_forms.form;

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

describe("getErrorMessages", () => {
  generalCharField("name");
  generalCharField("role");
});
