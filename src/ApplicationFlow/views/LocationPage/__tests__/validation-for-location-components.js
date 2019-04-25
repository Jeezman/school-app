import { getErrorMessages } from "../utils";
import RAW_DATA from "../DATA";
const DATA = RAW_DATA.address_form;
describe("Location Component Validation", () => {
  describe("validating home address", () => {
    it("should return error object when validation is found", () => {
      const result = getErrorMessages("address", "", DATA["address"]);
      expect(result).toEqual({
        isValid: false,
        errors: ["This field is required"]
      });
    });
    it("No error when valid input is supplied", () => {
      const result = getErrorMessages(
        "address",
        "33 Irabor Stret",
        DATA["address"]
      );
      expect(result).toEqual({
        isValid: true,
        errors: []
      });
    });
  });
  describe("validating state", () => {
    it("When no state is selected", () => {
      const result = getErrorMessages("state", "", DATA["state"]);
      expect(result).toEqual({
        isValid: false,
        errors: ["Select one of the states provided"]
      });
    });
    it("When a valid state is selected", () => {
      const result = getErrorMessages("state", "Lagos", DATA["state"]);
      expect(result).toEqual({
        isValid: true,
        errors: []
      });
    });
  });
  describe("validating vicinity", () => {
    it("When no vicinity is inputed", () => {
      let result = getErrorMessages("vicinity", "", DATA["vicinity"]);
      expect(result).toEqual({
        isValid: false,
        errors: ["This field is required"]
      });
    });
    it("When a valid vicinity is passed", () => {
      const result = getErrorMessages("vicinity", "Ipaja", DATA["vicinity"]);
      expect(result).toEqual({
        isValid: true,
        errors: []
      });
    });
  });

  describe("validating area", () => {
    it("When no area is inputed", () => {
      let result = getErrorMessages("area", {}, DATA["area"]);
      expect(result).toEqual({
        isValid: false,
        errors: [
          "This field is required",
          "This field should be a popular area within your vicinity"
        ]
      });
      result = getErrorMessages("area", { vicinity: "French" }, DATA["area"]);
      expect(result).toEqual({
        isValid: false,
        errors: ["This field is required"]
      });
      result = getErrorMessages(
        "area",
        { area: "", vicinity: "" },
        DATA["area"]
      );
      expect(result).toEqual({
        isValid: false,
        errors: [
          "This field is required",
          "This field should be a popular area within your vicinity"
        ]
      });
    });
    it("When the vicinity and the area passed is the same", () => {
      let result = getErrorMessages(
        "area",
        { area: "French", vicinity: "French" },
        DATA["area"]
      );
      expect(result).toEqual({
        isValid: false,
        errors: ["This field should be a popular area within your vicinity"]
      });
    });
    it("When both vicinity and area are different", () => {
      const result = getErrorMessages(
        "area",
        { area: "Ipaja", vicinity: "Alimosho" },
        DATA["area"]
      );
      expect(result).toEqual({
        isValid: true,
        errors: []
      });
    });
  });
});
