import { mapStateToProps } from "../reducers";

describe("MapStateToProps", () => {
  let result = mapStateToProps({
    wizard: {
      qualifications: {}
    }
  });
  describe("Education Validation", () => {
    it("should retun single error message for school and course", () => {
      let val = result.GetValidationFunc(
        {
          school: "",
          course: "",
          degeree: "",
          country: ""
        },
        "education_forms"
      );
      expect(val.errorMessageForField("school")).toEqual([
        "Please enter a school"
      ]);
      expect(val.errorMessageForField("course")).toEqual([
        "Please enter the course you studied"
      ]);
      expect(val.customErrorMessage("degree", "country")).toEqual(
        "Both degree and country is required"
      );
      expect(val.fieldHasError(true, "school")).toBeTruthy();
      expect(val.fieldHasError(true, "course")).toBeTruthy();
      expect(val.fieldHasError(true, "degree")).toBeTruthy();
      expect(val.fieldHasError(true, "country")).toBeTruthy();
      val = result.GetValidationFunc(
        {
          school: "",
          course: "",
          degeree: "",
          country: "Nigeria"
        },
        "education_forms"
      );
      expect(val.customErrorMessage("degree", "country")).toEqual(
        "Please select a degree"
      );
      expect(val.fieldHasError(true, "country")).toBeFalsy();
    });
    it("should return just error for country", () => {
      let val = result.GetValidationFunc(
        {
          school: "",
          course: "",
          degree: "B.Sc",
          country: ""
        },
        "education_forms"
      );
      expect(val.customErrorMessage("degree", "country")).toEqual(
        "Please select a country"
      );
      expect(val.fieldHasError(true, "degree")).toBeFalsy();
      expect(val.fieldHasError(true, "country")).toBeTruthy();
    });
  });
  describe("Work Experience Validation", () => {
    it("should return single error message for name and role", () => {
      let val = result.GetValidationFunc(
        {
          role: "",
          name: ""
        },
        "work_experiences_forms"
      );
      expect(val.customErrorMessage("name")).toEqual("This field is required.");
      expect(val.errorMessageForField("name")).toEqual([
        "This field is required."
      ]);
      expect(val.customErrorMessage("role")).toEqual("This field is required.");
      expect(val.errorMessageForField("role")).toEqual([
        "This field is required."
      ]);
      expect(val.fieldHasError(true, "name")).toBeTruthy();
      expect(val.fieldHasError(true, "role")).toBeTruthy();
    });
    it("should return no error message for name and role", () => {
      let val = result.GetValidationFunc(
        {
          role: "Banker",
          name: "Tuteria Limited"
        },
        "work_experiences_forms"
      );
      expect(val.customErrorMessage("name")).toEqual("");
      expect(val.errorMessageForField("name")).toEqual([]);
      expect(val.customErrorMessage("role")).toEqual("");
      expect(val.errorMessageForField("role")).toEqual([]);
      expect(val.fieldHasError(true, "name")).toBeFalsy();
      expect(val.fieldHasError(true, "role")).toBeFalsy();
    });
  });
});
