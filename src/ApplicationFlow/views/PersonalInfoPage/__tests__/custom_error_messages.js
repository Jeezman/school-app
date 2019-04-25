import { customErrorMessages, cherryPickErrors } from "../utils";

describe("Custom Error messages ", () => {
  it("for first_name and last_name", () => {
    const newState = {
      first_name: ["This field is required."],
      last_name: ["This field is required."]
    };
    let result = customErrorMessages("are required", newState);
    expect(result).toEqual("Both first_name and last_name are required");

    result = customErrorMessages("are_required", {
      first_name: ["This field is required"]
    });
    expect(result).toEqual("This field is required");
  });
  it("for dob", () => {
    const newState = {
      dob: [
        {
          day: "A day is required."
        },
        {
          month: "A month is required."
        },
        {
          year: "A year is required."
        }
      ]
    };
    let result = {};
    newState.dob.forEach(x => {
      result[Object.keys(x)[0]] = Object.values(x);
    });
    let solution = customErrorMessages("are required", result);
    expect(solution).toEqual("Both day, month and year are required");
    solution = customErrorMessages("are required", {});
    expect(solution).toEqual("");
  });
  it("for country and primary phone number", () => {
    const newState = {
      phone_numbers: {
        primary_number: [
          "This field is required.",
          "Enter a valid phone number."
        ]
      },
      country: ["Select one of the choices provided."]
    };
    const solution = customErrorMessages("are required", {
      country: newState.country,
      ...newState.phone_numbers
    });
    expect(solution).toEqual("Both country and primary_number are required");
  });
  it("can cherrypick required fields from all errors", () => {
    const state = {
      email: ["This field is required.", "This email is invalid."],
      first_name: ["This field is required."],
      last_name: ["This field is required."],
      dob: [
        {
          day: "A day is required."
        },
        {
          month: "A month is required."
        },
        {
          year: "A year is required."
        }
      ],
      phone_numbers: {
        primary_number: [
          "This field is required.",
          "Enter a valid phone number."
        ]
      },
      country: ["Select one of the choices provided."],
      gender: ["Select one of the choices provided."]
    };
    let result = cherryPickErrors(state, "first_name", "last_name");
    expect(result).toEqual({
      first_name: ["This field is required."],
      last_name: ["This field is required."]
    });
    result = cherryPickErrors(state, "dob");
    expect(result).toEqual({
      day: ["A day is required."],
      month: ["A month is required."],
      year: ["A year is required."]
    });
    result = cherryPickErrors(state, "country", "phone_numbers");
    expect(result).toEqual({
      country: ["Select one of the choices provided."],
      primary_number: ["This field is required.", "Enter a valid phone number."]
    });
  });
});
