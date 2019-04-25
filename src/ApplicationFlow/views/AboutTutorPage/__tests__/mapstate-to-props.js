import { mapStateToProps } from "../reducers";

describe("MapStateToProps", () => {
  it("can return validation for formfields", () => {
    let result = mapStateToProps({
      wizard: {
        "about-tutor": {
          years_of_experience: 3,
          online_experience: "Yes",
          title:
            "This is the day that the lord has made and we will rejoice and be glad in it",
          description: ""
        }
      }
    });
    expect(result.errorMessageForField("years_of_experience")).toEqual([]);
    expect(result.errorMessageForField("online_experience")).toEqual([]);
    expect(result.errorMessageForField("title")).toEqual([]);
    expect(result.errorMessageForField("description")).toEqual([
      "This field is required.",
      "Ensure the number of characters is less than the max",
      "Ensure the number of characters is at least 120"
    ]);
    expect(result.fieldHasError(true, "years_of_experience")).toBeFalsy();
    expect(result.fieldHasError(true, "online_experience")).toBeFalsy();
    expect(result.fieldHasError(true, "title")).toBeFalsy();
    expect(result.fieldHasError(true, "description")).toBeTruthy();
    expect(result.customErrorMessages("description")).toEqual(
      "This field is required."
    );

    result = mapStateToProps({
      wizard: {
        "about-tutor": {
          years_of_experience: 3,
          online_experience: "Yes",
          title:
            "This is the day that the lord has made and we will rejoice and be glad in it",
          description: "This is the first layer"
        }
      }
    });
    expect(result.errorMessageForField("years_of_experience")).toEqual([]);
    expect(result.errorMessageForField("online_experience")).toEqual([]);
    expect(result.errorMessageForField("title")).toEqual([]);
    expect(result.errorMessageForField("description")).toEqual([
      "Ensure the number of characters is at least 120"
    ]);
    expect(result.fieldHasError(true, "years_of_experience")).toBeFalsy();
    expect(result.fieldHasError(true, "online_experience")).toBeFalsy();
    expect(result.fieldHasError(true, "title")).toBeFalsy();
    expect(result.fieldHasError(true, "description")).toBeTruthy();
    expect(result.customErrorMessages("description")).toEqual(
      "Ensure the number of characters is at least 120"
    );
  });
});
