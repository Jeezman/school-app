import { mapStateToProps } from "../reducers";

describe("MapStateToProps", () => {
  it("can return specific validation error for dates", () => {
    let result = mapStateToProps({
      wizard: {
        "personal-info": {
          dob: {
            day: 3
          }
        }
      }
    });
    expect(result.errorMessageForField("dob", "day")).toEqual([]);
    expect(result.errorMessageForField("dob", "month")).toEqual([
      "A month is required."
    ]);
    expect(result.errorMessageForField("dob", "year")).toEqual([
      "A year is required."
    ]);
    result = mapStateToProps({
      wizard: {
        "personal-info": {
          dob: {
            day: 3,
            month: 2
          }
        }
      }
    });
    expect(result.errorMessageForField("dob", "day")).toEqual([]);
    expect(result.errorMessageForField("dob", "month")).toEqual([]);
    expect(result.errorMessageForField("dob", "year")).toEqual([
      "A year is required."
    ]);
  });
  it("should return boolean value for dob fields", () => {
    let result = mapStateToProps({
      wizard: {
        "personal-info": {
          dob: {
            day: 3
          }
        }
      }
    });
    expect(result.fieldHasError(true, "dob", "day")).toBeFalsy();
    expect(result.fieldHasError(true, "dob", "month")).toBeTruthy();
    expect(result.fieldHasError(true, "dob", "year")).toBeTruthy();
    result = mapStateToProps({
      wizard: {
        "personal-info": {
          dob: {
            day: 3,
            month: 2
          }
        }
      }
    });
    expect(result.fieldHasError(true, "dob", "day")).toBeFalsy();
    expect(result.fieldHasError(true, "dob", "month")).toBeFalsy();
    expect(result.fieldHasError(true, "dob", "year")).toBeTruthy();
  });
  it("should display customError Message for dob", () => {
    let result = mapStateToProps({
      wizard: {
        "personal-info": {
          dob: {
            day: 3
          }
        }
      }
    });
    expect(result.customErrorMessages("dob")).toEqual(
      "Both month and year is required"
    );
    result = mapStateToProps({
      wizard: {
        "personal-info": {
          dob: {
            day: 3,
            month: 2
          }
        }
      }
    });
    expect(result.customErrorMessages("dob")).toEqual("A year is required.");
    result = mapStateToProps({
      wizard: {
        "personal-info": {
          dob: {}
        }
      }
    });
    expect(result.customErrorMessages("dob")).toEqual(
      "Both day, month and year is required"
    );
  });

  it("should return errorMessage for phone_numbers", () => {
    let result = mapStateToProps({
      wizard: {
        "personal-info": {
          phone_numbers: [],
          country: "NG"
        }
      }
    });
    expect(
      result.errorMessageForField("phone_numbers", "primary_number")
    ).toEqual(["This field is required.", "Enter a valid phone number."]);
    expect(result.errorMessageForField("country")).toEqual([]);
    expect(
      result.fieldHasError(true, "phone_numbers", "primary_number")
    ).toBeTruthy();
    expect(result.fieldHasError(true, "country")).toBeFalsy();
    expect(result.customErrorMessages("country", "phone_numbers")).toEqual(
      "This field is required."
    );
  });
  it("should return errorMessage2 for phone numbers", () => {
    let result = mapStateToProps({
      wizard: {
        "personal-info": {
          phone_numbers: [{ primary: true, number: "+2347035209976" }],
          country: "NG"
        }
      }
    });
    expect(result.errorMessageForField("country")).toEqual([]);
    expect(
      result.errorMessageForField("phone_numbers", "primary_number")
    ).toEqual([]);
    expect(
      result.fieldHasError(true, "phone_numbers", "primary_number")
    ).toBeFalsy();
    expect(result.fieldHasError(true, "country")).toBeFalsy();
    expect(result.customErrorMessages("country", "phone_numbers")).toEqual("");
  });
  it("should return errorMessage3 for phone numbers", () => {
    let result = mapStateToProps({
      wizard: {
        "personal-info": {
          phone_numbers: [{ primary: true, number: "+2347035209976" }],
          country: ""
        }
      }
    });
    expect(result.errorMessageForField("country")).toEqual([
      "Select one of the choices provided."
    ]);
    expect(
      result.errorMessageForField("phone_numbers", "primary_number")
    ).toEqual([]);
    expect(
      result.fieldHasError(true, "phone_numbers", "primary_number")
    ).toBeFalsy();
    expect(result.fieldHasError(true, "country")).toBeTruthy();
    expect(result.customErrorMessages("country", "phone_numbers")).toEqual(
      "Select one of the choices provided."
    );
  });
  it("should return errorMessage3 for both country and phone numbers", () => {
    let result = mapStateToProps({
      wizard: {
        "personal-info": {
          phone_numbers: [],
          country: ""
        }
      }
    });
    expect(result.customErrorMessages("country", "phone_numbers")).toEqual(
      "Both country and primary_number is required"
    );
  });
});
