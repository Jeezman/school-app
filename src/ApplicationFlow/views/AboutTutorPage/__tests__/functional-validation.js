import RAW_DATA from "../DATA";
import { getErrorMessages } from "../utils";
const DATA = RAW_DATA.tutor_description_form;
function generalCharField(name, value) {
  describe(`validating ${name}`, () => {
    it("should return an object consiting indicating the validation status and the errors", () => {
      const result = getErrorMessages(name, "", DATA[name]);
      expect(result).toEqual({
        isValid: false,
        errors: ["This field is required."]
      });
    });
    it("when a valid input is supplied", () => {
      const result = getErrorMessages(name, value, DATA[name]);
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
function generalCharFieldMax(name, value, max, err = []) {
  it("should return an object consiting indicating the validation status and the errors", () => {
    const result = getErrorMessages(name, "", DATA[name]);
    expect(result).toEqual({
      isValid: false,
      errors: [
        "This field is required.",
        "Ensure the number of characters is less than the max"
      ].concat(err)
    });
  });
  it("when more the required max is inputed", () => {
    const result = getErrorMessages(name, value, DATA[name]);
    expect(result).toEqual({
      isValid: false,
      errors: ["Ensure the number of characters is less than the max"]
    });
  });
  it("when a valid input is supplied", () => {
    const result = getErrorMessages(name, value.slice(0, max + 1), DATA[name]);
    expect(result).toEqual({
      isValid: true,
      errors: []
    });
  });
}
function generalCharFieldMinMax(name, value) {
  generalCharFieldMax(name, value, 500, [
    "Ensure the number of characters is at least 120"
  ]);
  it("when less than the minimum is passed", () => {
    const result = getErrorMessages(name, value.slice(0, 100), DATA[name]);
    expect(result).toEqual({
      isValid: false,
      errors: ["Ensure the number of characters is at least 120"]
    });
  });
}
describe("getErrorMessages", () => {
  generalCharField("years_of_experience", 3);
  generalChoicField("online_experience", "No");
  describe(`validating title`, () => {
    generalCharFieldMax(
      "title",
      "This is the day that the lord has made and we will rejoice and be glad in it. The joy of the lord is our strength",
      80
    );
  });
  describe(`validating description`, () => {
    generalCharFieldMinMax(
      "description",
      `EXAMPLE: I am a very experienced IELTS and IGCSE tutor who uses highly systematic and result-oriented approach to help students score very high mark. I specialize in teaching the Speaking, Reading, Listening and Writing skills to those aiming at scores of at least 8.0.
      
      My ideal students are those who don't just want to pass the exam, but who are aiming for a high score, typically 8.0 and above. That way, we would be able to derive the best value from our time together. I normally assess each student for their individual needs.
      
      I believe in making my students feel comfortable and creating an environment good for learning by using interesting, challenging and engaging material. `
    );
  });
});
